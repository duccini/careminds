import { getWallets } from "@/services/getWallets";
import PortfolioContainer from "@/components/PortfolioContainer";
import styles from "./page.module.css";

export default async function Home() {
  try {
    const walletData = await getWallets();

    return (
      <main className={styles.main}>
        <h1 className={styles.title}>Investment Portfolio</h1>
        <PortfolioContainer initialData={walletData} />
      </main>
    );
  } catch (error) {
    return (
      <main className={styles.main}>
        <h1 className={styles.title}>Investment Portfolio</h1>
        <div className={styles.error}>
          <h2>Error loading portfolio data</h2>
          <p>
            {error instanceof Error
              ? error.message
              : "An unknown error occurred"}
          </p>
        </div>
      </main>
    );
  }
}
