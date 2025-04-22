type Asset = {
  type: string;
  symbol: string;
  image: string;
  name: string;
  quantity: number;
  purchasePrice: number;
  currentPrice: number;
};

export function getTopPerformingAsset(assets: Asset[]): string | null {
  if (assets.length === 0) return null;

  return assets.reduce((bestAsset, currentAsset) => {
    const currentPerf =
      (currentAsset.currentPrice - currentAsset.purchasePrice) /
      currentAsset.purchasePrice;
    const bestPerf =
      (bestAsset.currentPrice - bestAsset.purchasePrice) /
      bestAsset.purchasePrice;

    return currentPerf > bestPerf ? currentAsset : bestAsset;
  }).symbol;
}
