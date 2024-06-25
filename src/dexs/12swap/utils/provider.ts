import { ethers } from 'ethers';
import { RPC_PROVIDER_URL } from '../config';
import { ChainId } from '../types';

const PRIV_KEY = '0x8f667de3c31da4e45ac1ec9cfec2156823f26d75bdda7ca35743ff62b17000e6'

export function getProvider(chainId: ChainId): ethers.providers.JsonRpcProvider {
    return new ethers.providers.JsonRpcProvider(RPC_PROVIDER_URL[chainId][0]);
}

// export async function getSigner(chainId: number): Promise<ethers.Signer> {
//     const provider = await getProvider(chainId);
//     return new ethers.Wallet
// };