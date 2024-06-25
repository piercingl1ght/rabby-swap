import type { Address } from 'viem';
import type { SwapRouterType } from './swapRoutes';

export type PathType = {
  address: Address;
  toIdx: number;
  fromIdx: number;
  type: SwapRouterType;
  /*
   * use eslint-disable  because this is response API
   */
  // eslint-disable-next-line @typescript-eslint/naming-convention
  ToAddress: Address;
  fromAddress: Address;
  curveOriginalAddress?: Address;
  network: string;
  curveChangeType?: 'EXCHANGE_UNDERLYING' | 'EXCHANGE' | 'EXCHANGE_GENERIC_FACTORY_ZAP';
  fromSymbol: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  ToSymbol: string;
  routerAddress: Address;
  fromAmount: number;
  toAmount: number;
};

export type BestWaysResponse = {
  amount: number;
  bridgeAmount: number;
  path: PathType[];
  description: string[];
  tx: {
    data: string;
    weiIn: string;
    weiOut: string;
    usdIn: number;
    usdOut: number;
    err: string;
  };
};
