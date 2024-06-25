import BigNumber from 'bignumber.js';

export const numberToUnitsBn = (value: string | number, decimals = 18) =>
  BigNumber(value).multipliedBy(BigNumber(10).pow(decimals));

export const unitsToNumberBn = (value: string, decimals = 18) =>
  BigNumber(value).multipliedBy(BigNumber(10).pow(-decimals));

export const numberToUnitsString = (value: string | number, decimals = 18) =>
  numberToUnitsBn(value, decimals).toString();

export const unitsToNumberString = (value: string, decimals = 18) =>
  unitsToNumberBn(value, decimals).toString();

export const numberToUnitsNum = (value: string | number, decimals = 18) =>
  numberToUnitsBn(value, decimals).toNumber();

export const unitsToNumberNum = (value: string, decimals = 18) =>
  unitsToNumberBn(value, decimals).toNumber();
