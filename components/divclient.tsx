import type { NextPage } from "next";
import styles from "./divclient.module.css";

const Divclient: NextPage = () => {
  return (
    <section className={styles.divclient}>
      <div className={styles.frame}>
        <img
          className={styles.blogIcon}
          loading="lazy"
          alt=""
          src="/frame-1@2x.png"
        />
        <img
          className={styles.enIcon}
          loading="lazy"
          alt=""
          src="/frame-2@2x.png"
        />
        <div className={styles.solanaEcosystem}>
          <img
            className={styles.image4Icon}
            loading="lazy"
            alt=""
            src="/image-4@2x.png"
          />
        </div>
        <button className={styles.solanaEcosystem1}>
          <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
        </button>
        <button className={styles.solanaEcosystem2}>
          <img className={styles.image6Icon} alt="" src="/image-6@2x.png" />
        </button>
        <div className={styles.solanaEcosystem3}>
          <img
            className={styles.image7Icon}
            loading="lazy"
            alt=""
            src="/image-7@2x.png"
          />
        </div>
        <div className={styles.solanaEcosystem4}>
          <img
            className={styles.image8Icon}
            loading="lazy"
            alt=""
            src="/image-8@2x.png"
          />
        </div>
      </div>
      <div className={styles.poweringToolsAnd}>
        Powering tools and integrations from companies all around the world
      </div>
    </section>
  );
};

export default Divclient;
