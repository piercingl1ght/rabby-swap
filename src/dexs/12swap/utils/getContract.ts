import { CONTRACT_NAME, } from "../constants";
import { ChainId } from "../types";
import { Address } from "viem";
import { CONTRACTS } from "../config";
import { getProvider } from "./provider";
import { ethers } from "ethers";
import type { ContractInterface } from "ethers";

type GetContractInstanceArgs = {
    name: CONTRACT_NAME;
    chainId: ChainId;
    contractAddress?: Address;
};

type GetContractAddressAndAbiArgs = {
    name: CONTRACT_NAME;
    chainId: ChainId;
  };

  type GetContractAddressAndAbiResult = {
    abi: ContractInterface;
    address: Address;
  };

  type GetContractInstanceByAddressAndAbi = {
    abi: ContractInterface;
    address: Address;
    isSigner?: boolean;
    chainId: ChainId
  };

export const getContractByName = ({
    chainId,
    name,
    contractAddress
}: GetContractInstanceArgs) => {
    if (!chainId || !name) {
        throw Error('getContractByName: Invalid chainId or name');
    }

    const contract = CONTRACTS[name];
    const address = contractAddress || contract.address[chainId];
    const abi = contract.abi[chainId];

    const provider = getProvider(chainId);

    if (!provider || !address || !abi) {
        return null;
    }

    return new ethers.Contract(address, abi, provider);
}

export const getContractAddressAndAbi = ({
    name,
    chainId,
}: GetContractAddressAndAbiArgs): GetContractAddressAndAbiResult => {
    if (!chainId || !name) {
        throw Error('getContractAddressAndAbi: Invalid chainId or name');
    }

    const contract = CONTRACTS[name];
    
    return {
        // @ts-ignore
        address: contract.address[chainId],
        // @ts-ignore
        abi: contract.abi[chainId],
    };
};

export const getContractInstanceByAddressAndAbi = ({
    abi,
    address,
    isSigner,
    chainId
  }: GetContractInstanceByAddressAndAbi) => {
    if (!address || !abi) {
      return null;
    }
  
    const provider = getProvider(chainId);
  
    if (!provider) {
      return null;
    }
  
    return new ethers.Contract(address, abi, provider);
  };