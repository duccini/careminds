"use client";

import { useState } from "react";
import { Wallet } from "@/services/getWallets";
import WalletList from "@/components/WalletList";
import AssetTable from "@/components/AssetTable";
import styles from "./PortfolioContainer.module.css";

import Card from "../Card";
import { calculateGoalProgress } from "@/utils/calculateGoalProgress";
import { countAssetsByType } from "@/utils/countAssetsByType";
import { getTopPerformingAsset } from "@/utils/getTopPerformingAsset";

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

  const goalProgress = calculateGoalProgress(
    initialData[selectedWalletIndex].currentAmount,
    initialData[selectedWalletIndex].spentAmount
  );

  const profitableAssets = countAssetsByType(
    "profit",
    initialData[selectedWalletIndex].assets
  );

  const decliningAssets = countAssetsByType(
    "loss",
    initialData[selectedWalletIndex].assets
  );

  const topPerformingAsset =
    getTopPerformingAsset(initialData[selectedWalletIndex].assets) ||
    "Not found.";

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Wallets</h2>

        <div className={styles.InfoDetails}>
          <Card
            header="Profit / Loss"
            classType="profitLoss"
            value={initialData[selectedWalletIndex].profitLoss}
            currency
          />
          <Card
            header="Goal"
            classType="goal"
            value={initialData[selectedWalletIndex].spentAmount * 10}
            currency
          />
          <Card
            header="Goal Progress"
            classType="achieved"
            text={goalProgress}
          />
        </div>

        <WalletList
          wallets={initialData}
          selectedIndex={selectedWalletIndex}
          onSelectWallet={setSelectedWalletIndex}
        />
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Assets</h2>

        <div className={styles.InfoDetails}>
          <Card
            header="Profitable Assets"
            classType="profiAssets"
            value={profitableAssets}
          />
          <Card
            header="Declining Assets"
            classType="lossAssets"
            value={decliningAssets}
          />
          <Card
            header="Best Asset"
            classType="goal"
            text={topPerformingAsset}
          />
        </div>

        <AssetTable assets={selectedWallet.assets} />
      </div>
    </div>
  );
}
