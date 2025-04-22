# Investment Portfolio

![Investment Portfolio](https://github.com/duccini/careminds/blob/main/overview.gif)

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
