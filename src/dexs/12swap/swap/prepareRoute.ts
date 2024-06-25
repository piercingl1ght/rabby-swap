import { ethers } from "ethers"
import type { TypeV3Adapter } from '../types/index';
import { 
    ETH_IDENTIFIER, 
    WRAPPED_ETH, 
    UNI_V3_ADAPTER, 
    CUSTOM_SWAP_INDEXES, 
    CURVE_ADAPTER, 
    UNI_V2_ADAPTER 
} from "../config"
import { quote } from "./quote"
import { 
    GetRoute, 
    GetV3PairData, 
    GetUniRouterAdapterType, 
    GetV3PairFee, 
    GetCurveRouterAdapterType 
} from "./types"
import { getProvider, getContractInstanceByAddressAndAbi } from "../utils"
import { getChainByAlias, ZERO_VALUE } from "../constants"
import UniswapV3PairAbi from "../abi/UniswapV3PairAbi"
import {
    CURVE_INT128_SELECTOR,
    CURVE_UINT256_SELECTOR,
    EXACT_INPUT_SELECTOR,
    EXACT_INPUT_DEADLINE_SELECTOR
} from './constants';

const encoder = new ethers.utils.AbiCoder();

export const getUniswapV2Route: GetRoute = async ({
    path,
    amount,
    deadline,
    routes
}) => {
    const { id: chainId } = getChainByAlias(path.network);
    const fromToken = path.fromAddress === ETH_IDENTIFIER ? WRAPPED_ETH[chainId].address : path.fromAddress;
    const toToken = path.ToAddress === ETH_IDENTIFIER ? WRAPPED_ETH[chainId].address : path.ToAddress;

    const encodedTypes = ['(address[],uint256)'];
    const route = [fromToken, toToken];
    const encodedParams = [route, deadline];

    const payload = encoder.encode(encodedTypes, [encodedParams]);

    routes.push([
        path.fromAddress,
        path.ToAddress,
        UNI_V2_ADAPTER['deadline'][chainId],
        [
            CUSTOM_SWAP_INDEXES.uniswapV2,
            path.routerAddress,
            payload
        ]
    ]);
    try {
        return await quote(
            {
                fromToken: path.fromAddress,
                toToken: path.ToAddress,
                amount,
                routes,
                chainId
            }
        );
    } catch (err) {
        console.log('getUniswapV2Route: Cant quote uniswapV2')
        return {
            amountOutMin: ZERO_VALUE,
            routes: []
        }
    }
}

export const getUniswapV3Route: GetRoute = async ({
    path,
    amount,
    deadline,
    routes
}) => {
    const encoder = new ethers.utils.AbiCoder();
    const { id: chainId } = getChainByAlias(path.network);

    const { fee, from, to } = await getV3PairData({
        address: path.address,
        fromAddress: path.fromAddress,
        ToAddress: path.ToAddress,
        path,
    });

    const adapterType: TypeV3Adapter = await getV3RouterAdapterType({ chainId, address: path.routerAddress });

    const encodedTypes = adapterType === 'regular' ? ['(bytes)'] : ['(bytes,uint256)'];

    let encodedPath = ethers.utils.solidityPack(['address', 'uint24', 'address'], [from, fee, to]);

    let encodedParams = adapterType === 'regular' ? [encodedPath] : [encodedPath, deadline];
    let payload = encoder.encode(encodedTypes, [encodedParams]);
    
    routes.push([
        path.fromAddress,
        path.ToAddress,
        UNI_V3_ADAPTER[adapterType][chainId],
        [
            CUSTOM_SWAP_INDEXES.uniswapV3,
            path.routerAddress,
            payload
        ]
    ]);

    try {
        return await quote({
            fromToken: path.fromAddress,
            toToken: path.ToAddress,
            amount,
            routes,
            chainId
        });
    } catch {
        console.log(`router: ${path.routerAddress} does not work without fee in packing`);
    }

    encodedPath = ethers.utils.solidityPack(['address', 'address'], [from, to]);

    encodedParams = adapterType === 'regular' ? [encodedPath] : [encodedPath, deadline];
    payload = encoder.encode(encodedTypes, [encodedParams]);
    routes.pop()
    routes.push(
        [
            path.fromAddress,
            path.ToAddress,
            UNI_V3_ADAPTER[adapterType][chainId],
            [
                CUSTOM_SWAP_INDEXES.uniswapV3,
                path.routerAddress,
                payload
            ]
        ]
    )

    try {
        return await quote({
            fromToken: path.fromAddress,
            toToken: path.ToAddress,
            amount,
            routes,
            chainId
        })
    } catch (err) {
        console.log('Cant quote UniswapV3')
        return {
            amountOutMin: ZERO_VALUE,
            routes: []
        }
    }
}



const getV3RouterAdapterType: GetUniRouterAdapterType = async ({ address, chainId }) => {
    const provider = getProvider(chainId);
    const code = await provider.getCode(address);

    if (code.includes(EXACT_INPUT_SELECTOR)) return 'regular';
    if (code.includes(EXACT_INPUT_DEADLINE_SELECTOR)) return 'deadline';
    throw new Error('getV3RouterAdapterType');
};


const getCurveAdapterType: GetCurveRouterAdapterType = async ({ address, chainId }) => {
    const provider = getProvider(chainId);
    const code = await provider.getCode(address);

    if (code.includes(CURVE_INT128_SELECTOR)) return 'int128';
    if (code.includes(CURVE_UINT256_SELECTOR)) return 'uint256';
    throw new Error('getCurveAdapterType: error');
};


// @ts-ignore
const getV3PairData: GetV3PairData = async ({ address, fromAddress, ToAddress, path }) => {
    const { id: chainId } = getChainByAlias(path.network);
    let from = fromAddress;
    let to = ToAddress;
    try {
        const fee = await getV3pairFee(address, chainId);

        if (path.fromAddress == ETH_IDENTIFIER) {
            from = WRAPPED_ETH[chainId].address;
        }

        if (path.ToAddress == ETH_IDENTIFIER) {
            to = WRAPPED_ETH[chainId].address;
        }

        return { fee, from, to };
    } catch (error) {
        console.log('getV3PairData:', error);
    }
};

const getV3pairFee: GetV3PairFee = async (address, chainId) => {
    try {
        const pairContract = getContractInstanceByAddressAndAbi({
            address,
            abi: UniswapV3PairAbi,
            chainId
        });
        // @ts-ignore
        const fee = await pairContract.fee();
        return fee;
    } catch (error) {
        // @ts-ignore
        if (error?.message.includes('Transaction reverted without a reason string')) {
            return 100;
        }
        console.log(error);
    }
};

export const getCurvePayload: GetRoute = async ({ path, deadline, amount, routes }) => {
    const { id: chainId } = getChainByAlias(path.network);
    const adapterType = await getCurveAdapterType({
        // @ts-ignore
        address: path.curveOriginalAddress,
        chainId: chainId
    });

    const encodedTypes =
        adapterType == 'uint256'
            ? ['(uint256,uint256,uint256,bool)']
            : ['(int128,int128,uint256,bool)'];

    const exchangeType = path.curveChangeType == 'EXCHANGE' ? false : true;
    const payload = encoder.encode(encodedTypes, [
        [path.fromIdx, path.toIdx, deadline, exchangeType],
    ]);

    routes.push([
        path.fromAddress,
        path.ToAddress,
        // @ts-ignore
        CURVE_ADAPTER[adapterType][chainId],
        [
            CUSTOM_SWAP_INDEXES.curve,
            // @ts-ignore
            path.curveOriginalAddress,
            payload
        ]
    ])

    try {
        return await quote({
            fromToken: path.fromAddress,
            toToken: path.ToAddress,
            amount,
            routes,
            chainId
        });
    } catch (err) {
        console.log('getCurvePayload: Cant quote curve')
        return {
            amountOutMin: ZERO_VALUE,
            routes: []
        }
    }
};