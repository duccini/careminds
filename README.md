# Investment Portfolio

![Investment Portfolio](https://github.com/duccini/careminds/blob/main/overview.gif)

## Overview

The Investment Portfolio has three wallets with different investment purposes. The user selects the type of wallet in the "Wallets" section, and the assets that constitute this portfolio are displayed in the "Assets" section. Based on the available data `portfolio.json', the project was expanded with features delivering the greatest user value.

- Wallets:

  - Display of the gain or loss of the wallet
  - Target: invested value \* 10
  - Goal Progress: (currentAmount / goal) \* 100

- Assets

  - Profitable Assets: the quantity of assets that increased in value
  - Declining Assets: the quantity of assets that have decreased in value
  - Best Asset: the asset that had the highest percentage increase in value

## Getting Started

The project was developed with the `v20.11.1` version of Node. More current versions do not work well with the Next.js version of the project, `v15.3.1`.

To run the project:

```bash
git clone git@github.com:duccini/careminds.git
cd careminds
npm install
npm run dev
```

## Struture

```
src
├─ app
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ page.module.css
│  └─ page.tsx
├─ components
│  ├─ AssetRow
│  │  ├─ index.tsx
│  │  └─ AssetRow.module.cs
│  ├─ AssetTable
│  │  ├─ index.tsx
│  │  └─ AssetTable.module.css
│  ├─ Card
│  │  ├─ index.tsx
│  │  └─ Card.module.css
│  ├─ PortfolioContainer
│  │  ├─ index.tsx
│  │  └─ PortfolioContainer.css
│  └─ WalletList
│     ├─ index.tsx
│     └─ WalletList.module.css
├─ services
│  └─ getWallets.ts
└─ utils
   ├─ calculateGoalProgress.ts
   ├─ countAssetsByType.ts
   ├─ formatters.ts
   └─ getTopPerformingAsset.ts
```
