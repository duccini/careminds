"use client";

import { Wallet } from "@/services/getWallets";
import styles from "./WalletList.module.css";
import { formatCurrency } from "@/utils/formatters";

interface WalletListProps {
  wallets: Wallet[];
  selectedIndex: number;
  onSelectWallet: (index: number) => void;
}

export default function WalletList({
  wallets,
  selectedIndex,
  onSelectWallet,
}: WalletListProps) {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.headerCell}>Name</th>
            <th className={styles.headerCellRight}>Current Amount</th>
            <th className={styles.headerCellRight}>Spent Amount</th>
          </tr>
        </thead>
        <tbody>
          {wallets.map((wallet, index) => {
            const isProfit = wallet.profitLoss > 0;

            return (
              <tr
                key={index}
                onClick={() => onSelectWallet(index)}
                className={`${styles.row} ${
                  index === selectedIndex ? styles.selectedRow : ""
                }`}
              >
                <td className={styles.cell}>{wallet.walletName}</td>
                <td className={styles.cellRight}>
                  {formatCurrency(wallet.currentAmount)}
                </td>
                <td className={styles.cellRight}>
                  <span className={isProfit ? styles.profit : styles.loss}>
                    {formatCurrency(wallet.spentAmount)}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
