import { ChainId, Chain } from '../types/index';
import {
  mainnet,
  polygon,
} from 'viem/chains';

export const ETHEREUM_CHAIN_ID = 1;
export const CRONOS_CHAIN_ID = 25;
export const BSC_CHAIN_ID = 56;
export const POLYGON_CHAIN_ID = 137;
export const FANTOM_CHAIN_ID = 250;
export const ARBITRUM_CHAIN_ID = 42161;
export const GNOSIS_CHAIN_ID = 100;
export const OPTIMISM_CHAIN_ID = 10;
export const AVALANCHE_CHAIN_ID = 43114;
export const POLYGON_ZKEVM_CHAIN_ID = 1101;
export const BASE_CHAIN_ID = 8453;

export enum CONTRACT_NAME {
  DIAMOND = 'diamond',
  WRAPPER = 'wrapper',
  ERC20 = 'erc20',
  STAR_GATE_FEE_LIBS = 'starGateFeeLib',
  STAR_GATE_POOLS = 'starGatePool',
}

export const getChainByAlias = (alias: string): Chain => {
  const sourceChain = chains.find((el) => el.alias === alias);
  // @ts-ignore
  return sourceChain;
};

export const getChainById = (id: ChainId): Chain => {
  const sourceChain = chains.find((el) => el.id === id);
  // @ts-ignore
  return sourceChain;
};

export const mainnetChain: Chain = {
  ...mainnet,
  alias: 'eth',
  hasCrossChain: true,
  connext: true,
  across: true,
  rpcUrls: {
    default: {
      http: ['https://mainnet.infura.i12121'],
    },
  },
};

export const polygonChain: Chain = {
  ...polygon,
  alias: 'matic',
  hasCrossChain: true,
  connext: true,
  across: true,
};

const chainsList = [
  mainnetChain,
  polygonChain
];

export const chains = chainsList.filter((network) => Boolean(network)) as [Chain, ...Chain[]];
