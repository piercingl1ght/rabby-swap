import type { ContractInterface } from 'ethers';
import type { Abi, Address } from 'viem';
import type { CONTRACT_NAME } from './constants';
import type { ChainId } from './types';

export type ConfigAddresses = Record<number, Address>;

export type ContractType = Record<
  CONTRACT_NAME,
  { address: Partial<AddressByChainId>; abi: Partial<Record<ChainId, ContractInterface>> }
>;

export type AddressByChainId = Record<ChainId, Address>;
