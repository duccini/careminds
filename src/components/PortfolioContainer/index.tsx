"use client";

import { useState } from "react";
import { Wallet } from "@/services/getWallets";
import WalletList from "@/components/WalletList";
import AssetTable from "@/components/AssetTable";
import styles from "./PortfolioContainer.module.css";

interface PortfolioContainerProps {
  initialData: Wallet[];
}

export default function PortfolioContainer({
  initialData,
}: PortfolioContainerProps) {
  const [selectedWalletIndex, setSelectedWalletIndex] = useState(0);

  // Check if data is available
  if (!initialData || initialData.length === 0) {
    return <div className={styles.noData}>No wallet data available</div>;
  }

  const selectedWallet = initialData[selectedWalletIndex];

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Wallets</h2>
        <WalletList
          wallets={initialData}
          selectedIndex={selectedWalletIndex}
          onSelectWallet={setSelectedWalletIndex}
        />
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Assets</h2>
        <AssetTable assets={selectedWallet.assets} />
      </div>
    </div>
  );
}
