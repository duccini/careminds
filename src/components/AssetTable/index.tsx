import { Asset } from "@/services/getWallets";
import AssetRow from "@/components/AssetRow";
import styles from "./AssetTable.module.css";

interface AssetTableProps {
  assets: Asset[];
}

export default function AssetTable({ assets }: AssetTableProps) {
  if (!assets || assets.length === 0) {
    return <div className={styles.noAssets}>No assets in this wallet</div>;
  }

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.headerCell}>Asset</th>
            <th className={styles.headerCellCenter}>Type</th>
            <th className={styles.headerCellRight}>Quantity</th>
            <th className={styles.headerCellRight}>Purchase Price</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => (
            <AssetRow key={index} asset={asset} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
