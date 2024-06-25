import { getCurvePayload, getUniswapV2Route, getUniswapV3Route } from './prepareRoute';
import { BigNumber } from "ethers";
import { ZERO_VALUE } from "../constants";
import { RawDataToSwapData, QuoteResponse, HandledPathdata } from "./types";

export const prepareSwapData: RawDataToSwapData = async ({
    bestWays,
    amount
}) => {
    let response: QuoteResponse = {
        routes: [],
        amountOutMin: BigNumber.from(0)
    }

    for (const i of bestWays) {
        response = await tryHandlePath({
            path: i.path,
            amount: amount
        })

        if(response.amountOutMin && response.routes.length != 0) {
            break;
        }
    }

    if (!response.amountOutMin && response.routes.length != 0) {
        throw Error('No way for swap');
    }

    return response;
}


export const tryHandlePath: HandledPathdata = async ({
    path,
    amount
}) => {
    const deadline = Math.floor(Date.now() / 1000) + 60 * 15;

    let response: QuoteResponse = {
        routes: [],
        amountOutMin: ZERO_VALUE
    };

    for (let i of path) {
        if (i.type === 'uniswapV2') {
            response = await getUniswapV2Route({
                path: i,
                routes: response.routes,
                amount,
                deadline
            });
        } else if (i.type === 'uniswapV3') {
            response = await getUniswapV3Route({
                path: i,
                routes: response.routes,
                amount,
                deadline
            });
        } else if (i.type === 'curve') {
            response = await getCurvePayload({
                path: i,
                routes: response.routes,
                amount,
                deadline
            });
        } else {
            break;
        }

        if (/**response.amountOutMin.eq(ZERO_VALUE) &&*/ response.routes.length === 0) {
            return {
                routes: [],
                amountOutMin: ZERO_VALUE
            }
        }
    }

    return {
        routes: response.routes,
        amountOutMin: response.amountOutMin
    }
}