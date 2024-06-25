import { ethers, BigNumber } from "ethers";
import { getContractByName } from "../utils";
import { CONTRACT_NAME } from "../constants";
import { WRAPPED_ETH, ETH_IDENTIFIER } from "../config";
import { encodeFunctionData, parseAbi, Abi } from "viem";
import { QuotePath } from './types';
import { ChainId, DiamondSwapData } from '../types';

const ZERO_ADDRESS = ethers.constants.AddressZero;

export const quote: QuotePath = async ({
    fromToken,
    toToken,
    amount,
    routes,
    chainId
}: {
    fromToken: `0x${string}`;
    toToken: `0x${string}`;
    amount: BigNumber;
    routes: DiamondSwapData[];
    chainId: ChainId;
}) => {
    const diamondContract = getContractByName({ chainId, name: CONTRACT_NAME.DIAMOND });
    let ethAddress = ZERO_ADDRESS;
    if ([fromToken, toToken].includes(ETH_IDENTIFIER)) {
        ethAddress = WRAPPED_ETH[chainId].address;
    }
    const abi = parseAbi(['function oneTwoQuote(address,uint256,uint256,address,address,(address,address,address,(uint256,address,bytes))[])']);
    let callData: string;
    try {
        const args = [ZERO_ADDRESS, amount, 1, ethAddress, ZERO_ADDRESS, routes];
        callData = encodeFunctionData({
            abi: abi as Abi,
            args,
            functionName: 'oneTwoQuote',
        });

        // @ts-ignore
        const receivedAmount = await diamondContract.oneTwoQuote(...args);
        console.log(receivedAmount);
        return { amountOutMin: receivedAmount, routes: routes };
    } catch (err) {
        console.log('quote func\n', err);
        return { amountOutMin: 0, routes: [] }
    }
};