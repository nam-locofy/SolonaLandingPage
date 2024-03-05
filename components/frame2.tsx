import type { NextPage } from "next";
import styles from "./frame2.module.css";

const Frame2: NextPage = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.rectangle} />
      <div className={styles.frame1}>
        <div className={styles.frame2}>
          <button className={styles.divfooterFrame}>
            <div className={styles.rectangle1} />
            <div className={styles.nfts}>NFTs</div>
          </button>
          <button className={styles.divfooterFrame1}>
            <div className={styles.rectangle2} />
            <div className={styles.defi}>DeFi</div>
          </button>
          <button className={styles.divfooterFrame2}>
            <div className={styles.rectangle3} />
            <div className={styles.payments}>Payments</div>
          </button>
          <button className={styles.divfooterFrame3}>
            <div className={styles.rectangle4} />
            <div className={styles.gaming}>Gaming</div>
          </button>
          <button className={styles.divfooterFrame4}>
            <div className={styles.rectangle5} />
            <div className={styles.daos}>DAOs</div>
          </button>
        </div>
        <h1 className={styles.buildForGrowth}>Build for growth.</h1>
      </div>
      <div className={styles.frame3}>
        <div className={styles.frame4}>
          <div className={styles.rectangle6} />
          <img
            className={styles.imageIcon}
            loading="lazy"
            alt=""
            src="/image-1@2x.png"
          />
          <div className={styles.frame5}>
            <div className={styles.learnMoreAbout}>Learn more about</div>
            <div className={styles.onSolana}>on Solana</div>
            <div className={styles.itsTimeTo}>
              It’s time to bridge the digital and physical. Anybodies helps
              established brands like Toys’R’Us connect real-life places and
              products with NFTs.
            </div>
            <div className={styles.nfts1}>NFTs</div>
            <img className={styles.image9Icon} alt="" src="/image-9@2x.png" />
          </div>
        </div>
        <div className={styles.frame6}>
          <div className={styles.rectangle7} />
          <img className={styles.imageIcon1} alt="" src="/image-2@2x.png" />
          <img className={styles.imageIcon2} alt="" src="/image-3@2x.png" />
          <img className={styles.image10Icon} alt="" src="/image-10@2x.png" />
          <img className={styles.image11Icon} alt="" src="/image-11@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default Frame2;
