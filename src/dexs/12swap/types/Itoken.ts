import type { Address } from 'viem';

export type IconApi = {
  assets: string;
  ext: string;
  name: string;
};

export interface IToken {
  address: Address;
  liquidity: number;
  balance: string;
  decimals: number;
  cmcId: number;
  geckoId: string;
  name: string;
  network: string;
  price: number;
  symbol: string;
  balanceUsd?: string | number;
  balanceUsdt: string;
  reputation: 'UNKNOWN' | 'OK' | '';
  logo: IconApi;
}

export type TokenImg = {
  src: string;
  alt: string;
};
