import { Address } from 'viem';
import { ChainId } from '../types/index';
import { getProvider } from './provider';

type GetBalanceArgs = {
    tokenAddress: Address;
    accountAddress: Address;
    chainId: ChainId;
  };

export async function getBalance(
    accountAddress: string,
    chainId: ChainId
): Promise<string>{
    try {
        const provider = await getProvider(chainId);
        if (!chainId || !accountAddress || !provider) {
          return '0';
        }
    
        return (await provider.getBalance(accountAddress))?.toString();
      } catch (err) {
        /* empty */
        return '0';
      }
}