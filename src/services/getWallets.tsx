export interface Asset {
  type: string;
  symbol: string;
  image: string;
  name: string;
  quantity: number;
  purchasePrice: number;
  currentPrice: number;
}

export interface Wallet {
  walletName: string;
  currentAmount: number;
  spentAmount: number;
  profitLoss: number;
  assets: Asset[];
}

export async function getWallets(): Promise<Wallet[]> {
  try {
    const response = await fetch("http://localhost:3000/portfolio.json", {
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) {
      throw new Error(`Falha ao buscar dados: ${response.status}`);
    }

    const data: Wallet[] = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados das carteiras:", error);
    throw new Error(
      `Falha ao carregar dados das carteiras: ${
        error instanceof Error ? error.message : "Erro desconhecido"
      }`
    );
  }
}
