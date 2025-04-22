# Investment Portfolio

![Investment Portfolio](https://github.com/duccini/careminds/overview.gif)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
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
