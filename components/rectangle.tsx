import type { NextPage } from "next";
import Divnav1 from "./divnav1";
import styles from "./rectangle.module.css";

const Rectangle: NextPage = () => {
  return (
    <section className={styles.rectangle}>
      <div className={styles.text} />
      <Divnav1 />
      <div className={styles.link}>
        <div className={styles.button}>
          <button className={styles.listItem}>
            <div className={styles.divfooter} />
            <div className={styles.buildNow}>Build Now</div>
          </button>
          <button className={styles.breakpoint}>
            <div className={styles.grantsMediaKitDisclaimerCa} />
            <img
              className={styles.ecosystemNewsletterIcon}
              alt=""
              src="/ecosystem-newsletter.svg"
            />
            <div className={styles.stackExchange}>Stack Exchange</div>
          </button>
        </div>
        <h1 className={styles.developerResources}>Developer Resources</h1>
        <div className={styles.aManualFor}>
          A manual for joining the Solana ecosystem. By builders for builders.
        </div>
      </div>
    </section>
  );
};

export default Rectangle;
