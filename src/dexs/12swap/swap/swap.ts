import { ethers, BigNumber } from "ethers";
import { callBestWays } from '../api';
import { prepareSwapData } from "./prepareSwapData";
import { ETH_IDENTIFIER, WRAPPED_ETH } from "../config";
import { getChainByAlias } from "../constants";
import { swapParams, GetPreparedTxResponse } from "./types";

export const swap: swapParams = async ({
    fromToken,
    toToken,
    amount,
    slippage,
    ...rest
}) => {
    const amountBN = ethers.utils.formatUnits(amount.toString(), fromToken.decimals || 18);
    try {
        const data = await callBestWays({
            fromToken,
            toToken,
            amount: amountBN.toString()
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
        let ethAddress;
        const chainId = getChainByAlias(ways[0].path[0].network);

        if (
            fromToken.address === ETH_IDENTIFIER ||
            toToken.address === ETH_IDENTIFIER
        ) {
            ethAddress = WRAPPED_ETH[chainId.id].address;
        }
        let amountOut;
        if (amountOutMin && amountOutMin.gt(0)) {
            const slippagePart = amountOutMin
                .div(BigNumber.from(+slippage * 100))
                .div(BigNumber.from(100))
                .div(BigNumber.from(100));

            amountOut = amountOutMin.sub(slippagePart);
        };

        console.log(
            fromToken.address,
            toToken.address,
            swaps,
            amountOut
        )
        // тут должен быть вызов обмена, но я не знаю как его реализовать
    
    } catch (e) {
        console.log(e);

    }

    let temp: GetPreparedTxResponse = {};

    return temp;
}