import { CHAINS_ENUM, CHAINS_RAW } from './chainsEnum';
import { OpenApiService } from "@rabby-wallet/rabby-api";
import { CONTRACT_NAME, getChainById } from './constants';
import { BigNumber, ethers } from 'ethers';
import { ETH_IDENTIFIER } from './config';
import { parseAbi, encodeFunctionData } from 'viem';
import type { Abi } from 'viem';
import { ChainId } from './types';
import { WRAPPED_ETH } from './config';
import { callBestWaysSimple } from './api';
import { prepareSwapData } from './swap';
import { CONTRACTS } from './config';


const ZERO_ADDRESS = ethers.constants.AddressZero;

export interface QuoteParams {
    fromToken: string;
    fromTokenDecimals: number;
    toToken: string;
    amount: string;
    userAddress: string;
    slippage: number;
    feeRate?: number;
    feeAddress?: string;
    gasPrice?: number;
    chain: CHAINS_ENUM;
}

export interface Tx {
    from: string;
    to: string;
    data: string;
    value: string;
    chainId?: number;
    gas?: number;
    gasPrice?: string;
}

export interface QuoteResult {
    tx: Tx;
    fromToken: string;
    fromTokenDecimals?: number;
    fromTokenAmount: string;
    toToken: string;
    toTokenDecimals?: number;
    toTokenAmount: string;
    spender: string;
}

export enum DEX_ENUM {
    ONEINCH = "1inch",
    PARASWAP = "ParaSwap",
    ZEROXAPI = "0xAPI",
    WRAPTOKEN = "WrapToken",
    OPENOCEAN = "OpenOcean",
    UNISWAP = "Uniswap",
    KYBERSWAP = "Kyberswap",
    ONETWOSWAP = "12swap"
}

export const getQuote = async (
    id: DEX_ENUM,
    params: QuoteParams,
    api?: OpenApiService,
) => {
    const amount = BigNumber.from(params.amount);
    const { fromToken, toToken, slippage } = params
    const amountBN = ethers.utils.formatUnits(params.amount, params.fromTokenDecimals || 18);
    

    const chainId = CHAINS_RAW[params.chain].id as ChainId;
    const chain = getChainById(chainId);

    const data = await callBestWaysSimple({
        fromToken: fromToken,
        toToken: toToken,
        amount: amountBN.toString(),
        network: chain.alias
    })
    const waysResponse = data?.data;
    if (waysResponse == undefined) {
        throw new Error('No path found');
    }

    const ways = waysResponse; // getNotBlacklistedWay(waysResponse);
    if (ways === undefined || !ways?.length) {
        throw new Error('No path found');
    }

    const { routes: swaps, amountOutMin } = await prepareSwapData({
        bestWays: ways,
        amount
    });
    let ethAddress = ZERO_ADDRESS;

    if (
        fromToken === ETH_IDENTIFIER ||
        toToken === ETH_IDENTIFIER
    ) {
        ethAddress = WRAPPED_ETH[chainId].address;
    }
    let amountOut = BigNumber.from(1);
    if (amountOutMin && amountOutMin.gt(0)) {
        const slippagePart = amountOutMin
            .div(BigNumber.from(slippage * 100))
            .div(BigNumber.from(100))
            .div(BigNumber.from(100));

        amountOut = amountOutMin.sub(slippagePart);
    };

    const abi = parseAbi(['function oneTwoSwap(address,uint256,uint256,address,address,(address,address,address,(uint256,address,bytes))[])']);
    const args = [params.userAddress, amount, amountOut, ethAddress, ZERO_ADDRESS, swaps];
    const encodedData = encodeFunctionData({
        abi: abi as Abi,
        args,
        functionName: 'oneTwoSwap'
    })

    const value = ethAddress === ZERO_ADDRESS ? 0 : amount;
    const buildedTx: Tx = {
        from: params.userAddress,
        to: CONTRACTS[CONTRACT_NAME.DIAMOND].address[chainId] as string,
        data: encodedData,
        value: value.toString()
    }

    return {
        tx: buildedTx,
        fromToken: fromToken,
        fromTokenAmount: amount.toString(),
        toToken: toToken,
        toTokenAmount: amountOut.toString(),
        spender: ethers.constants.AddressZero
    };
}