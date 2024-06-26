import type { Address } from 'viem';
import { erc20Abi } from 'viem';
import {
  ARBITRUM_CHAIN_ID,
  AVALANCHE_CHAIN_ID,
  BASE_CHAIN_ID,
  BSC_CHAIN_ID,
  CONTRACT_NAME,
  CRONOS_CHAIN_ID,
  ETHEREUM_CHAIN_ID,
  FANTOM_CHAIN_ID,
  GNOSIS_CHAIN_ID,
  OPTIMISM_CHAIN_ID,
  POLYGON_CHAIN_ID,
  POLYGON_ZKEVM_CHAIN_ID,
} from './constants';
import type { ChainId, TypeCurveAdapter, TypeV3Adapter } from './types/index';
import OneTwoRouterABI from './abi/OneTwoRouterABI';
import StarGateFeeLibraryABI from './abi/StarGateFeeLibraryABI';
import StarGatePoolABI from './abi/StarGatePoolABI';
import WrapperAbi from './abi/WrapperAbi';
import type { AddressByChainId, ConfigAddresses, ContractType } from './types_';
import { ContractInterface } from 'ethers';

export const DEFAULT_NETWORK_ID = ETHEREUM_CHAIN_ID;

export const ETH_IDENTIFIER: Address = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE';
export const MDAO_ADDRESS: Address = '0x60322971a672B81BccE5947706D22c19dAeCf6Fb';
export const COSMIC_ADDRESS: Address = '0xBabACc135Bbf2ce30f9C0f12665B244D3689A29C';
export const USDT_ETH_ADDRESS: Address = '0xdAC17F958D2ee523a2206206994597C13D831ec7';
export const MATIC_ZKEVM_ADDRESS: Address = '0xa2036f0538221a77A3937F1379699f44945018d0';
export const USDT_BNB_ADDRESS: Address = '0x55d398326f99059fF775485246999027B3197955';

export const WHITELIST_ADDRESSES = [
  MDAO_ADDRESS.toLowerCase(),
  COSMIC_ADDRESS.toLowerCase(),
  ETH_IDENTIFIER.toLowerCase(),
];

export const BLACKLIST_IN_ROUTE_ADDRESSES = [
  '0xe283d0e3b8c102badf5e8166b73e02d96d92f688'.toLowerCase(),
  '0xd89D42eEB0e64eFb5BBDe6e4C5d6afcCbF3feAd3'.toLowerCase(),
  '0xEa9Ec84DC56369CF7a28C0df08C3Af2a1A1cEE97'.toLowerCase(),
];

export const BLACKLIST_ROUTE_V2_ADDRESSES = [
  '0xc14d550632db8592d1243edc8b95b0ad06703867'.toLowerCase(),
  '0x9333C74BDd1E118634fE5664ACA7a9710b108Bab'.toLowerCase(),
];

export const BLACKLIST_ROUTE_V3_OPTIMISM_ADDRESSES = [
  '0x087000A300DE7200382b55D40045000000E5d60E'.toLowerCase(),
];

export const WHITE_LIST_V3_ROUTERS_ARBITRUM = [
  '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45'.toLowerCase(),
  '0xE592427A0AEce92De3Edee1F18E0157C05861564'.toLowerCase(),
];

export const BLACKLIST_ROUTE_V3_BSC_ADDRESSES = [
  '0x802b65b5d9016621E66003aeD0b16615093f328b'.toLowerCase(),
  '0x3c11F6265Ddec22f4d049Dde480615735f451646'.toLowerCase(),
];

export const WHITE_LIST_CURVE_PAIRS_BSC = [
  '0x3EFebC418efB585248A0D2140cfb87aFcc2C63DD'.toLowerCase(),
  '0xc2F5B9a3d9138ab2B74d581fC11346219eBf43Fe'.toLowerCase(),
  '0x169F653A54ACD441aB34B73dA9946e2C451787EF'.toLowerCase(),
];

export const BNB_MATIC_PAIR_ADDRESS = '0x775CAc1c1b47250121291934d15912Efb69213E9';

export const BNB_MATIC_USDC_PAIR_ADDRESS = '0x23de1D86Db98a282Ad3EF4BB9B6E5b784F756966';

export const ADAPTER_FOR_BNB_MATIC_USDC_PAIR_ADDRESS = '0xD19A52970C37FbEd05fE1B6980a29635CF9b7691';

export const OPTIMISM_USDC_ROUTER_ADDRESS = '0xCb1355ff08Ab38bBCE60111F1bb2B784bE25D7e8';

export const ROUTER_FOR_BNB_MATIC_USDC_PAIR_ADDRESS = '0xB971eF87ede563556b2ED4b1C0b0019111Dd85d2';

export const CHANGE_ROUTER: Record<Address, Address> = {
  [OPTIMISM_USDC_ROUTER_ADDRESS]: '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45',
};

const isProd = true;

const BSC_SWAP_CONTRACT_ADDRESS = isProd
  ? '0x4F52267099262c106e6dAE358a94E6460DedbbAe'
  : '0xAB185Cf0EB71E13651d71fcBA02E4C8A1efb07F7';
const POLYGON_SWAP_CONTRACT_ADDRESS = isProd
  ? '0x9930D85C3dCE2d8Eadc40577F2F85E016E75255c'
  : '0xbB802EEBC1638387f99a0075b47D330b21bba740';
const ARBITRUM_SWAP_CONTRACT_ADDRESS = isProd
  ? '0x9768c5b8D53B26ce79b59b9c0b8CAB9C0dF08B0d'
  : '0xD06A46Ecd05Fd07a268093A67800Aee9b06af4b2';
const FANTOM_SWAP_CONTRACT_ADDRESS = isProd
  ? '0x165E03556cf1CF77325E063Ee8EB33606A7C07D7'
  : '0x6eA2CF85194099015Ccbc64dd45dF6Ac4690ec59';
const CRONOS_SWAP_CONTRACT_ADDRESS = isProd
  ? '0xDDE7F04247275CeDfC0e5CfEC4Ba159Ff439414a'
  : '0x500DEF37C21B252002C4F875b6C3Dfe6273D00E7';
const ETHEREUM_SWAP_CONTRACT_ADDRESS = isProd
  ? '0x4EB2eA6Efb5c5E832527f1B9828dd0d83FF73937'
  : '0x73ADEBF22dCb0981aA5efe3Cd4ced1882Ae18495';
const GNOSIS_SWAP_CONTRACT_ADDRESS = isProd
  ? '0x706095B1461e574E2Fb9F91F46DBAAA0681BD33b'
  : '0x59B1d8f4fe061447cA11fC18aF9D2abc21f854bC';
const OPTIMISM_SWAP_CONTRACT_ADDRESS = isProd
  ? '0xb6401dDC7E4F3B76BA6115b0C9feb6d297aBc45A'
  : '0xa469B73fa6D9Da246D50c299e8eA2E0A8d820699';
const AVALANCHE_SWAP_CONTRACT_ADDRESS = isProd
  ? '0xC1F0fd54137F79BB6A9908F4c1C8b62B70CA0105'
  : '0x59B1d8f4fe061447cA11fC18aF9D2abc21f854bC';
const POLYGON_ZKEVM_SWAP_CONTRACT_ADDRESS = isProd
  ? '0x67F9072c5b6a48faC63394B8B9ebBA5DE28BC33e'
  : '0xD382823A100d2Fde5eD25fEF0adA573F38Ddf887';
const BASE_SWAP_CONTRACT_ADDRESS = isProd
  ? '0x67F9072c5b6a48faC63394B8B9ebBA5DE28BC33e'
  : '0xC6E33de7558e768a76C92B2B320cD5E0786e9bB9';

export const DEFAULT_TOKEN_TO: ConfigAddresses = {
  [ETHEREUM_CHAIN_ID]: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  [BSC_CHAIN_ID]: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
  [POLYGON_CHAIN_ID]: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
  [FANTOM_CHAIN_ID]: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
  [ARBITRUM_CHAIN_ID]: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
  [CRONOS_CHAIN_ID]: '0xc21223249CA28397B4B6541dfFaEcC539BfF0c59',
  [OPTIMISM_CHAIN_ID]: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
  [AVALANCHE_CHAIN_ID]: '0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664',
  [GNOSIS_CHAIN_ID]: '0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83',
  [POLYGON_ZKEVM_CHAIN_ID]: '0xA8CE8aee21bC2A48a5EF670afCc9274C7bbbC035',
  [BASE_CHAIN_ID]: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
};

export const WRAPPED_ETH: Record<ChainId, { address: Address; symbol: string }> = {
  [ETHEREUM_CHAIN_ID]: { address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', symbol: 'WETH' },
  [BSC_CHAIN_ID]: { address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', symbol: 'WBNB' },
  [POLYGON_CHAIN_ID]: { address: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', symbol: 'WMATIC' },
  [FANTOM_CHAIN_ID]: { address: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83', symbol: 'WFTM' },
  [ARBITRUM_CHAIN_ID]: { address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', symbol: 'WETH' },
  [CRONOS_CHAIN_ID]: { address: '0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23', symbol: 'WCRONOS' },
  [AVALANCHE_CHAIN_ID]: { address: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7', symbol: 'WAVAX' },
  [OPTIMISM_CHAIN_ID]: { address: '0x4200000000000000000000000000000000000006', symbol: 'WETH' },
  [GNOSIS_CHAIN_ID]: { address: '0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb', symbol: 'WxDai' },
  [POLYGON_ZKEVM_CHAIN_ID]: {
    address: '0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9',
    symbol: 'WETH',
  },
  [BASE_CHAIN_ID]: { address: '0x4200000000000000000000000000000000000006', symbol: 'WETH' },
};

export const CONTRACTS: ContractType = {
  [CONTRACT_NAME.DIAMOND]: {
    address: {
      [ETHEREUM_CHAIN_ID]: ETHEREUM_SWAP_CONTRACT_ADDRESS,
      [BSC_CHAIN_ID]: BSC_SWAP_CONTRACT_ADDRESS,
      [POLYGON_CHAIN_ID]: POLYGON_SWAP_CONTRACT_ADDRESS,
      [FANTOM_CHAIN_ID]: FANTOM_SWAP_CONTRACT_ADDRESS,
      [ARBITRUM_CHAIN_ID]: ARBITRUM_SWAP_CONTRACT_ADDRESS,
      [CRONOS_CHAIN_ID]: CRONOS_SWAP_CONTRACT_ADDRESS,
      [OPTIMISM_CHAIN_ID]: OPTIMISM_SWAP_CONTRACT_ADDRESS,
      [GNOSIS_CHAIN_ID]: GNOSIS_SWAP_CONTRACT_ADDRESS,
      [AVALANCHE_CHAIN_ID]: AVALANCHE_SWAP_CONTRACT_ADDRESS,
      [POLYGON_ZKEVM_CHAIN_ID]: POLYGON_ZKEVM_SWAP_CONTRACT_ADDRESS,
      [BASE_CHAIN_ID]: BASE_SWAP_CONTRACT_ADDRESS,
    },
    abi: {
      [ETHEREUM_CHAIN_ID]: OneTwoRouterABI,
      [BSC_CHAIN_ID]: OneTwoRouterABI,
      [POLYGON_CHAIN_ID]: OneTwoRouterABI,
      [FANTOM_CHAIN_ID]: OneTwoRouterABI,
      [ARBITRUM_CHAIN_ID]: OneTwoRouterABI,
      [CRONOS_CHAIN_ID]: OneTwoRouterABI,
      [OPTIMISM_CHAIN_ID]: OneTwoRouterABI,
      [GNOSIS_CHAIN_ID]: OneTwoRouterABI,
      [AVALANCHE_CHAIN_ID]: OneTwoRouterABI,
      [POLYGON_ZKEVM_CHAIN_ID]: OneTwoRouterABI,
      [BASE_CHAIN_ID]: OneTwoRouterABI,
    },
  },
  [CONTRACT_NAME.WRAPPER]: {
    address: {
      [ETHEREUM_CHAIN_ID]: WRAPPED_ETH[ETHEREUM_CHAIN_ID].address,
      [BSC_CHAIN_ID]: WRAPPED_ETH[BSC_CHAIN_ID].address,
      [POLYGON_CHAIN_ID]: WRAPPED_ETH[POLYGON_CHAIN_ID].address,
      [FANTOM_CHAIN_ID]: WRAPPED_ETH[FANTOM_CHAIN_ID].address,
      [ARBITRUM_CHAIN_ID]: WRAPPED_ETH[ARBITRUM_CHAIN_ID].address,
      [CRONOS_CHAIN_ID]: WRAPPED_ETH[CRONOS_CHAIN_ID].address,
      [OPTIMISM_CHAIN_ID]: WRAPPED_ETH[CRONOS_CHAIN_ID].address,
      [GNOSIS_CHAIN_ID]: WRAPPED_ETH[CRONOS_CHAIN_ID].address,
      [AVALANCHE_CHAIN_ID]: WRAPPED_ETH[AVALANCHE_CHAIN_ID].address,
      [POLYGON_ZKEVM_CHAIN_ID]: WRAPPED_ETH[POLYGON_ZKEVM_CHAIN_ID].address,
      [BASE_CHAIN_ID]: WRAPPED_ETH[BASE_CHAIN_ID].address,
    },
    abi: {
      [ETHEREUM_CHAIN_ID]: WrapperAbi,
      [BSC_CHAIN_ID]: WrapperAbi,
      [POLYGON_CHAIN_ID]: WrapperAbi,
      [FANTOM_CHAIN_ID]: WrapperAbi,
      [ARBITRUM_CHAIN_ID]: WrapperAbi,
      [CRONOS_CHAIN_ID]: WrapperAbi,
      [OPTIMISM_CHAIN_ID]: WrapperAbi,
      [GNOSIS_CHAIN_ID]: WrapperAbi,
      [AVALANCHE_CHAIN_ID]: WrapperAbi,
      [POLYGON_ZKEVM_CHAIN_ID]: WrapperAbi,
      [BASE_CHAIN_ID]: WrapperAbi,
    },
  },
  [CONTRACT_NAME.ERC20]: {
    abi: {
      [ETHEREUM_CHAIN_ID]: erc20Abi,
      [BSC_CHAIN_ID]: erc20Abi,
      [POLYGON_CHAIN_ID]: erc20Abi,
      [FANTOM_CHAIN_ID]: erc20Abi,
      [ARBITRUM_CHAIN_ID]: erc20Abi,
      [CRONOS_CHAIN_ID]: erc20Abi,
      [OPTIMISM_CHAIN_ID]: erc20Abi,
      [GNOSIS_CHAIN_ID]: erc20Abi,
      [AVALANCHE_CHAIN_ID]: erc20Abi,
      [POLYGON_ZKEVM_CHAIN_ID]: erc20Abi,
      [BASE_CHAIN_ID]: erc20Abi,
    },
    address: {
      [ETHEREUM_CHAIN_ID]: undefined,
      [BSC_CHAIN_ID]: undefined,
      [POLYGON_CHAIN_ID]: undefined,
      [FANTOM_CHAIN_ID]: undefined,
      [ARBITRUM_CHAIN_ID]: undefined,
      [CRONOS_CHAIN_ID]: undefined,
      [OPTIMISM_CHAIN_ID]: undefined,
      [GNOSIS_CHAIN_ID]: undefined,
      [AVALANCHE_CHAIN_ID]: undefined,
      [POLYGON_ZKEVM_CHAIN_ID]: undefined,
      [BASE_CHAIN_ID]: undefined,
    },
  },
  [CONTRACT_NAME.STAR_GATE_FEE_LIBS]: {
    address: {
      [ETHEREUM_CHAIN_ID]: '0x8C3085D9a554884124C998CDB7f6d7219E9C1e6F',
      [BSC_CHAIN_ID]: '0xCA6522116e8611A346D53Cc2005AC4192e3fc2BC',
      [AVALANCHE_CHAIN_ID]: '0x5E8eC15ACB5Aa94D5f0589E54441b31c5e0B992d',
      [POLYGON_CHAIN_ID]: '0xb279b324Ea5648bE6402ABc727173A225383494C',
      [ARBITRUM_CHAIN_ID]: '0x1cF31666c06ac3401ed0C1c6346C4A9425dd7De4',
      [OPTIMISM_CHAIN_ID]: '0x505eCDF2f14Cd4f1f413d04624b009A449D38D7E',
      [FANTOM_CHAIN_ID]: '0x616a68BD6DAd19e066661C7278611487d4072839',
      [BASE_CHAIN_ID]: '0x4c80e24119cfb836cdf0a6b53dc23f04f7e652ca',
    },
    abi: {
      [ETHEREUM_CHAIN_ID]: StarGateFeeLibraryABI,
      [BSC_CHAIN_ID]: StarGateFeeLibraryABI,
      [POLYGON_CHAIN_ID]: StarGateFeeLibraryABI,
      [FANTOM_CHAIN_ID]: StarGateFeeLibraryABI,
      [ARBITRUM_CHAIN_ID]: StarGateFeeLibraryABI,
      [CRONOS_CHAIN_ID]: StarGateFeeLibraryABI,
      [OPTIMISM_CHAIN_ID]: StarGateFeeLibraryABI,
      [GNOSIS_CHAIN_ID]: StarGateFeeLibraryABI,
      [AVALANCHE_CHAIN_ID]: StarGateFeeLibraryABI,
      [POLYGON_ZKEVM_CHAIN_ID]: StarGateFeeLibraryABI,
      [BASE_CHAIN_ID]: StarGateFeeLibraryABI,
    },
  },
  [CONTRACT_NAME.STAR_GATE_POOLS]: {
    address: {
      [ETHEREUM_CHAIN_ID]: '0xdf0770dF86a8034b3EFEf0A1Bb3c889B8332FF56',
      [BSC_CHAIN_ID]: '0x9aA83081AA06AF7208Dcc7A4cB72C94d057D2cda',
      [AVALANCHE_CHAIN_ID]: '0x1205f31718499dBf1fCa446663B532Ef87481fe1',
      [POLYGON_CHAIN_ID]: '0x1205f31718499dBf1fCa446663B532Ef87481fe1',
      [ARBITRUM_CHAIN_ID]: '0x892785f33CdeE22A30AEF750F285E18c18040c3e',
      [OPTIMISM_CHAIN_ID]: '0xDecC0c09c3B5f6e92EF4184125D5648a66E35298',
      [FANTOM_CHAIN_ID]: '0xc647CE76ec30033Aa319d472Ae9f4462068f2AD7',
      [BASE_CHAIN_ID]: '0x4c80E24119CFB836cdF0a6b53dc23F04F7e652CA',
    },
    abi: {
      [ETHEREUM_CHAIN_ID]: StarGatePoolABI,
      [BSC_CHAIN_ID]: StarGatePoolABI,
      [POLYGON_CHAIN_ID]: StarGatePoolABI,
      [FANTOM_CHAIN_ID]: StarGatePoolABI,
      [ARBITRUM_CHAIN_ID]: StarGatePoolABI,
      [CRONOS_CHAIN_ID]: StarGatePoolABI,
      [OPTIMISM_CHAIN_ID]: StarGatePoolABI,
      [GNOSIS_CHAIN_ID]: StarGatePoolABI,
      [AVALANCHE_CHAIN_ID]: StarGatePoolABI,
      [POLYGON_ZKEVM_CHAIN_ID]: StarGatePoolABI,
      [BASE_CHAIN_ID]: StarGatePoolABI,
    },
  },
};

export const RPC_PROVIDER_URL: Record<number, string[]> = {
  [POLYGON_CHAIN_ID]: ['https://polygon-rpc.com/'],
  [ETHEREUM_CHAIN_ID]: ['https://cloudflare-eth.com'],
  [BSC_CHAIN_ID]: ['https://rpc.ankr.com/bsc'],
  [CRONOS_CHAIN_ID]: ['https://evm.cronos.org/'],
  [ARBITRUM_CHAIN_ID]: ['https://arb1.arbitrum.io/rpc'],
  [FANTOM_CHAIN_ID]: ['https://rpc.ankr.com/fantom'],
  [OPTIMISM_CHAIN_ID]: ['https://mainnet.optimism.io'],
  [GNOSIS_CHAIN_ID]: ['https://rpc.gnosischain.com'],
  [AVALANCHE_CHAIN_ID]: ['https://api.avax.network/ext/bc/C/rpc'],
  [POLYGON_ZKEVM_CHAIN_ID]: ['https://zkevm-rpc.com'],
  [BASE_CHAIN_ID]: ['https://mainnet.base.org'],
};

export const CUSTOM_SWAP_INDEXES = {
  uniswapV2: 1,
  curve: 2,
  uniswapV3: 3,
};

export const BSC_MATIC_PAIR_ADAPTER_ADDRESS = '0x89dFC1560284C137a9C7157B624907CC37b96FF0';

export const UNI_V3_ADAPTER: Record<TypeV3Adapter, AddressByChainId> = {
  deadline: {
    [ETHEREUM_CHAIN_ID]: '0xe6Fd83DA84A8C6B8543881138C399122256E5f0c',
    [OPTIMISM_CHAIN_ID]: '0xcAc32aFD13c9d8d57723A9e3dbf32CFb0a90A6ac',
    [CRONOS_CHAIN_ID]: '0x1dA995235a9C324F282F0a6669843Ad0c75CcDff',
    [BSC_CHAIN_ID]: '0x89dFC1560284C137a9C7157B624907CC37b96FF0',
    [GNOSIS_CHAIN_ID]: '0x37777F4f06d6e49D9C69553a2667743354De7EA7',
    [POLYGON_CHAIN_ID]: '0xEb15CD802D00803dc7b9F076C9Bc84aDb299Fe93',
    [FANTOM_CHAIN_ID]: '' as Address,
    [POLYGON_ZKEVM_CHAIN_ID]: '0xa469B73fa6D9Da246D50c299e8eA2E0A8d820699',
    [BASE_CHAIN_ID]: '0xa469B73fa6D9Da246D50c299e8eA2E0A8d820699',
    [ARBITRUM_CHAIN_ID]: '0x0d71eBa9FA3112d7451D155c54DDc49d18E5fC70',
    [AVALANCHE_CHAIN_ID]: '0xFc3Ff2eb6F2bdC0b4FD79CA53Ee0AEb8fF7833B3',
  },
  regular: {
    [ETHEREUM_CHAIN_ID]: '' as Address,
    [OPTIMISM_CHAIN_ID]: '0x99BFAB0bd0d6d1682b4Ce42833c0Ce0360dc47A7',
    [CRONOS_CHAIN_ID]: '0x165E03556cf1CF77325E063Ee8EB33606A7C07D7',
    [BSC_CHAIN_ID]: '0xD19A52970C37FbEd05fE1B6980a29635CF9b7691',
    [GNOSIS_CHAIN_ID]: '0xC99B46187477503740b64A7C2B5C45AA0Ddc51A9',
    [POLYGON_CHAIN_ID]: '0x110c470680146c018a82cd08edee105e96c6C9A7',
    [FANTOM_CHAIN_ID]: '0xF1dD19Ec319e4E56Efec9EC0A93bb5C2F49d805a',
    [POLYGON_ZKEVM_CHAIN_ID]: '0x883d6C600A457d35841F13Cd291147F009875f4e',
    [BASE_CHAIN_ID]: '0x46a69344CD171aA944ffbA79c5f00Cc2a33E2a69',
    [ARBITRUM_CHAIN_ID]: '0x45b5202E43A62EfcAC9449A693AB34aa84211147',
    [AVALANCHE_CHAIN_ID]: '0x6DBC226a8888c2d36E71E67bb3B205Af4be1994c',
  },
};

export const UNI_V2_ADAPTER: Record<'deadline', AddressByChainId> = {
  deadline: {
    [ETHEREUM_CHAIN_ID]: '0xe6Fd83DA84A8C6B8543881138C399122256E5f0c',
    [OPTIMISM_CHAIN_ID]: '0x99BFAB0bd0d6d1682b4Ce42833c0Ce0360dc47A7',
    [CRONOS_CHAIN_ID]: '0x165E03556cf1CF77325E063Ee8EB33606A7C07D7',
    [BSC_CHAIN_ID]: '0xD19A52970C37FbEd05fE1B6980a29635CF9b7691',
    [GNOSIS_CHAIN_ID]: '0xC99B46187477503740b64A7C2B5C45AA0Ddc51A9',
    [POLYGON_CHAIN_ID]: '0x110c470680146c018a82cd08edee105e96c6C9A7',
    [FANTOM_CHAIN_ID]: '0xF1dD19Ec319e4E56Efec9EC0A93bb5C2F49d805a',
    [POLYGON_ZKEVM_CHAIN_ID]: '0x883d6C600A457d35841F13Cd291147F009875f4e',
    [BASE_CHAIN_ID]: '0x46a69344CD171aA944ffbA79c5f00Cc2a33E2a69',
    [ARBITRUM_CHAIN_ID]: '0x45b5202E43A62EfcAC9449A693AB34aa84211147',
    [AVALANCHE_CHAIN_ID]: '0x6DBC226a8888c2d36E71E67bb3B205Af4be1994c',
  },
};

export const CURVE_ADAPTER: Record<TypeCurveAdapter, Partial<AddressByChainId>> = {
  uint256: {
    [BSC_CHAIN_ID]: '0xD19A52970C37FbEd05fE1B6980a29635CF9b7691',
  },
  int128: {
    [ETHEREUM_CHAIN_ID]: '0xe6Fd83DA84A8C6B8543881138C399122256E5f0c',
    [OPTIMISM_CHAIN_ID]: '0x99BFAB0bd0d6d1682b4Ce42833c0Ce0360dc47A7',
    [CRONOS_CHAIN_ID]: '0x165E03556cf1CF77325E063Ee8EB33606A7C07D7',
    [BSC_CHAIN_ID]: '0x24998f1f76fBe693f37c276A296855264D7e8dc9',
    [GNOSIS_CHAIN_ID]: '0xC99B46187477503740b64A7C2B5C45AA0Ddc51A9',
    [POLYGON_CHAIN_ID]: '0x110c470680146c018a82cd08edee105e96c6C9A7',
    [FANTOM_CHAIN_ID]: '0xF1dD19Ec319e4E56Efec9EC0A93bb5C2F49d805a',
    [POLYGON_ZKEVM_CHAIN_ID]: '0x883d6C600A457d35841F13Cd291147F009875f4e',
    [BASE_CHAIN_ID]: '0x46a69344CD171aA944ffbA79c5f00Cc2a33E2a69',
    [ARBITRUM_CHAIN_ID]: '0x45b5202E43A62EfcAC9449A693AB34aa84211147',
    [AVALANCHE_CHAIN_ID]: '0x6DBC226a8888c2d36E71E67bb3B205Af4be1994c',
  },
};