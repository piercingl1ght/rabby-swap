export function getIsMatchedStr(srcAddress: string, targetAddress: string): boolean {
  if (!srcAddress || !targetAddress) {
    return false;
  }
  return srcAddress.toLowerCase() === targetAddress.toLowerCase();
}
