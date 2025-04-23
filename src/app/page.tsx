import { getWallets } from "@/services/getWallets";
import PortfolioContainer from "@/components/PortfolioContainer";
import styles from "./page.module.css";

export default async function Home() {
  try {
    const walletData = await getWallets();

    return (
      <div>
        <main>
          <div className={styles.header}>
            <div className={styles.contentHeader}>
              <h1 className={styles.title}>Investment Portfolio</h1>
            </div>
          </div>
          <div className={styles.content}>
            <PortfolioContainer initialData={walletData} />
          </div>
        </main>
      </div>
    );
  } catch (error) {
    return (
      <div>
        <main>
          <div className={styles.header}>
            <div className={styles.contentHeader}>
              <h1 className={styles.title}>Investment Portfolio</h1>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.error}>
              <h2>Error loading portfolio data</h2>
              <p>
                {error instanceof Error
                  ? error.message
                  : "An unknown error occurred"}
              </p>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
