import { CanceledError } from 'axios';
import { ethers } from 'ethers';
import type { Address } from 'viem';
import type { BestWaysResponse, IToken } from '../../types/index';
import { axiosInstance } from '../axios';

export type CallBestWayArgs = {
  fromToken: IToken;
  toToken: IToken;
  amount: string | number;
  receiver?: Address;
  widthDebug?: boolean;
  amountWei?: string;
  referrer?: Address;
  slippage?: number;
  signal?: AbortSignal;
};

export async function callBestWays(args: CallBestWayArgs) {
  try {
    const { signal, receiver = ethers.constants.AddressZero, fromToken, toToken, ...rest } = args;
    const dev = process.env.NEXT_PUBLIC_IS_PROD !== 'true';

    const { data, status } = await axiosInstance.get<{ data: { ways: BestWaysResponse[] } }>(
      '/best-ways',
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
        },
        params: {
          fromAddress: fromToken.address,
          fromNetwork: fromToken.network,
          toAddress: toToken.address,
          toNetwork: toToken.network,
          dev,
          receiver,
          ...rest,
        },
        signal,
      },
    );

    return { data: data?.data.ways || [], status };
  } catch (error) {
    if (error instanceof CanceledError) {
      return { data: [], status: 'canceled' };
    }
    console.log('callBestWays', error);
  }
}

export type CallBestWaySimpleArgs = {
  fromToken: string;
  toToken: string;
  amount: string | number;
  network: string;
  receiver?: Address;
  widthDebug?: boolean;
  amountWei?: string;
  referrer?: Address;
  slippage?: number;
  signal?: AbortSignal;
};

export async function callBestWaysSimple(args: CallBestWaySimpleArgs) {
  try {
    const { signal, receiver = ethers.constants.AddressZero, fromToken, toToken, network, ...rest } = args;
    const dev = process.env.NEXT_PUBLIC_IS_PROD !== 'true';

    const { data, status } = await axiosInstance.get<{ data: { ways: BestWaysResponse[] } }>(
      '/best-ways',
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
        },
        params: {
          fromAddress: fromToken,
          fromNetwork: network,
          toAddress: toToken,
          toNetwork: network,
          dev,
          receiver,
          ...rest,
        },
        signal,
      },
    );

    return { data: data?.data.ways || [], status };
  } catch (error) {
    if (error instanceof CanceledError) {
      return { data: [], status: 'canceled' };
    }
    console.log('callBestWays', error);
  }
}

export async function tokensRefresh(walletAddress: Address) {
  await axiosInstance.post(`/tokens/${walletAddress}/refresh`, {
    walletAddress,
  });
}
