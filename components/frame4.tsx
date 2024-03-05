import type { NextPage } from "next";
import styles from "./frame4.module.css";

const Frame4: NextPage = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.rectangle} />
      <div className={styles.wrapperFrame}>
        <input className={styles.frame1} placeholder="Sign up" type="text" />
        <div className={styles.learnSolana} />
      </div>
      <div className={styles.metaplexDocs}>
        <div className={styles.signUpTo}>
          Sign up to the newsletter and learn about new resources, new commits,
          new proposals, and more.
        </div>
        <h1 className={styles.solanaDeveloperUpdate}>
          Solana Developer Update
        </h1>
      </div>
    </div>
  );
};

export default Frame4;
