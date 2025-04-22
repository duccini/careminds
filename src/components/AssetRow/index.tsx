import Image from "next/image";
import { Asset } from "@/services/getWallets";
import styles from "./AssetRow.module.css";
import { formatCurrency } from "@/utils/formatters";

interface AssetRowProps {
  asset: Asset;
}

export default function AssetRow({ asset }: AssetRowProps) {
  const isProfit = asset.currentPrice > asset.purchasePrice;

  return (
    <tr className={styles.row}>
      <td className={styles.cell}>
        <div className={styles.assetInfo}>
          <div className={styles.iconWrapper}>
            <Image src={asset.image} alt={asset.name} width={24} height={24} />
          </div>
          <span className={styles.symbol}>{asset.symbol}</span>
        </div>
      </td>
      <td className={styles.cellCenter}>{asset.type}</td>
      <td className={styles.cellRight}>{asset.quantity}</td>
      <td className={styles.cellRight}>
        <span className={isProfit ? styles.profit : styles.loss}>
          {formatCurrency(asset.purchasePrice)}
        </span>
      </td>
    </tr>
  );
}
