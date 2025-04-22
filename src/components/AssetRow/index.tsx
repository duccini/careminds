import Image from "next/image";
import { Asset } from "@/services/getWallets";
import styles from "./AssetRow.module.css";
import { formatCurrency } from "@/utils/formatters";

interface AssetRowProps {
  asset: Asset;
}

export default function AssetRow({ asset }: AssetRowProps) {
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
        {formatCurrency(asset.purchasePrice)}
      </td>
    </tr>
  );
}
