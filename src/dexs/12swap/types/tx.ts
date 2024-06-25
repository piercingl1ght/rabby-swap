import type { BigNumberish } from 'ethers';
import type { IToken } from './Itoken';

export type TxParams = {
  gas?: BigNumberish;
  value?: BigNumberish;
  gasLimit?: BigNumberish;
};

export type SwapTxDataType = {
  toToken?: IToken;
  fromToken?: IToken;
  hash?: string;
  reason?: string;
};

export type StatusTx =
  | 'transaction-sent'
  | 'on-swap'
  | 'insufficient-slippage'
  | 'transaction-failed'
  | '';

export type TypeTx =
  | 'swap'
  | 'multiSwap'
  | 'swapAndBridgeTokens'
  | 'wrap'
  | 'unwrap'
  | 'approve'
  | 'swapOnUniswapV2Fork'
  | 'oneTwoSwap'
  | 'bridgeTokensConnext'
  | 'swapAndBridgeTokensConnext'
  | 'bridgeTokensAcross'
  | 'swapAndBridgeTokensAcross'
  | 'bridgeTokensHyphen'
  | 'swapAndBridgeTokensHyphen'
  | 'bridgeTokensStargate'
  | 'swapAndBridgeTokensStargate'
  | 'bridgeTokensHopL1'
  | 'swapAndBridgeTokensHopL1'
  | 'bridgeTokensHopL2'
  | 'swapAndBridgeTokensHopL2'
  | 'bridgeTokensDeBridge'
  | 'swapAndBridgeTokensDeBridge'
  | 'bridgeTokensRefuel'
  | 'swapAndBridgeTokensRefuel';
