import { axiosInstance } from '../axios';
import { Address } from 'viem';
import { IToken } from '../../types';
import { getBalance, unitsToNumberString, getIsMatchedStr } from '../../utils';
import { getChainByAlias, ZERO_VALUE } from '../../constants';
import { ETH_IDENTIFIER } from '../../config';
import BigNumber from 'bignumber.js';

export type GetTokensArgs = {
    network: string;
    accountAddress: Address;
    search?: string;
    size?: number | string;
    signal?: AbortSignal;
  };

export type GetTokenResponse = Array<IToken & { balance: number }>;

export type TokenList = IToken[];

export const getTokens = async (args: GetTokensArgs): Promise<GetTokenResponse> => {
    const { size = 100, signal, ...params } = args;
    const { data } = await axiosInstance({
      method: 'GET',
      url: '/tokens',
      params: {
        size,
        ...params,
      },
      signal,
    });
    return data?.data || [];
  };

// export const getToken = async (args: GetTokensArgs): Promise<IToken> => {
//     const { accountAddress, network: networkAlias, search, signal } = args;
  
//     const requests: [Promise<GetTokenResponse>, Promise<string | undefined>] = [
//       getTokens({ accountAddress, network: networkAlias, search, signal }),
//       getBalanceToken({
//         accountAddress,
//         // chainId: getChainByAlias(networkAlias)?.id,
//         tokenAddress: search as Address,
//       }),
//     ];
  
//     const [tokenList = [], balanceBN = ZERO_VALUE] = await Promise.all(requests);
  
//     const token = tokenList[0];
//     const decimals = token.decimals || 18;
  
//     const balanceString = unitsToNumberString(balanceBN.toString(), decimals);
  
//     const balanceUsd = BigNumber(balanceString).multipliedBy(BigNumber(token.price)).toFixed(4);
  
//     return {
//       ...token,
//       balance: balanceString,
//       balanceUsd,
//     };
//   };

  export const getTokensList = async (args: GetTokensArgs): Promise<TokenList> => {
    const { accountAddress, network: networkAlias, search } = args;
    const chainId = getChainByAlias(networkAlias);
    const requests: [Promise<GetTokenResponse>, Promise<string>] = [
      getTokens({ accountAddress, network: networkAlias, search }),
      getBalance(accountAddress, chainId.id),
    ];
    const [tokenList = [], nativeBalance = ZERO_VALUE] = await Promise.all(requests);
  
    return tokenList?.map((token) => {
      if (getIsMatchedStr(token.address, ETH_IDENTIFIER)) {
        const ethBalanceNumberString = unitsToNumberString(nativeBalance.toString());
        const balanceUsd = BigNumber(ethBalanceNumberString)
          .multipliedBy(BigNumber(token.price))
          .toFixed(4);
  
        return {
          ...token,
          balance: ethBalanceNumberString,
          balanceUsd,
        };
      }
  
      return token;
    });
  };