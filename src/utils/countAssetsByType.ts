type Asset = {
  type: string;
  symbol: string;
  image: string;
  name: string;
  quantity: number;
  purchasePrice: number;
  currentPrice: number;
};

export function countAssetsByType(
  type: "profit" | "loss",
  assets: Asset[]
): number {
  const condition =
    type === "profit"
      ? (asset: Asset) => asset.currentPrice > asset.purchasePrice
      : (asset: Asset) => asset.currentPrice < asset.purchasePrice;

  return assets.reduce((count, asset) => {
    return condition(asset) ? count + 1 : count;
  }, 0);
}
