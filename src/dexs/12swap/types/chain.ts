import type { Chain as ChainViem } from 'viem';
import type {
  ARBITRUM_CHAIN_ID,
  AVALANCHE_CHAIN_ID,
  BASE_CHAIN_ID,
  BSC_CHAIN_ID,
  CRONOS_CHAIN_ID,
  ETHEREUM_CHAIN_ID,
  FANTOM_CHAIN_ID,
  GNOSIS_CHAIN_ID,
  OPTIMISM_CHAIN_ID,
  POLYGON_CHAIN_ID,
  POLYGON_ZKEVM_CHAIN_ID,
} from '../constants';

export type ChainId =
  | typeof ETHEREUM_CHAIN_ID
  | typeof CRONOS_CHAIN_ID
  | typeof BSC_CHAIN_ID
  | typeof POLYGON_CHAIN_ID
  | typeof FANTOM_CHAIN_ID
  | typeof ARBITRUM_CHAIN_ID
  | typeof GNOSIS_CHAIN_ID
  | typeof OPTIMISM_CHAIN_ID
  | typeof AVALANCHE_CHAIN_ID
  | typeof POLYGON_ZKEVM_CHAIN_ID
  | typeof BASE_CHAIN_ID;

export interface Chain extends ChainViem {
  alias: string;
  hasCrossChain?: boolean;
  customRouter?: boolean;
  connext?: boolean;
  across?: boolean;
  hyphen?: boolean;
  starGate?: boolean;
  hop?: boolean;
  deBridge?: boolean;
  id: ChainId;
}

export type NetworksInfoApi = {
  currencySymbol: string;
  icon: {
    assets: string;
    ext: string;
    name: string;
  };
  name: string;
  order: number;
  scanHost: string;
  slug: string;
  title: string;
};
