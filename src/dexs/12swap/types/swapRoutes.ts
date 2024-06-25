import type { Address } from 'viem';

export type SwapRouterType = 'uniswapV2' | 'uniswapV3' | 'curve';

export type TypeV3Adapter = 'deadline' | 'regular';

export type TypeCurveAdapter = 'uint256' | 'int128';

export type DiamondSwapData = [Address, Address, Address, [number, Address, string]];
