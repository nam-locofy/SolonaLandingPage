import type { NextPage } from "next";
import styles from "./divhero-content.module.css";

const DivheroContent: NextPage = () => {
  return (
    <section className={styles.divheroContent}>
      <button className={styles.breakSolana}>
        <div className={styles.startBuilding}>Start building</div>
      </button>
      <button className={styles.breakSolana1}>
        <div className={styles.readDocs}>Read docs</div>
      </button>
      <h1 className={styles.powerfulForDevelopers}>Powerful for developers.</h1>
      <h1 className={styles.fastForEveryone}>Fast for everyone.</h1>
      <div className={styles.bringBlockchainTo}>
        Bring blockchain to the people. Solana supports experiences for power
        users, new consumers, and everyone in between.
      </div>
    </section>
  );
};

export default DivheroContent;
