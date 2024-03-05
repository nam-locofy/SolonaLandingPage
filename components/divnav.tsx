import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./divnav.module.css";

const Divnav: NextPage = () => {
  const router = useRouter();

  const onBuildTextClick = useCallback(() => {
    router.push("/build-page");
  }, [router]);

  return (
    <header className={styles.divnav}>
      <div className={styles.rectangle} />
      <div className={styles.frame}>
        <div className={styles.frame1}>
          <div className={styles.frame2}>
            <img className={styles.frameIcon} alt="" src="/frame-11.svg" />
            <button className={styles.build} onClick={onBuildTextClick}>
              Build
            </button>
          </div>
          <div className={styles.frame3}>
            <img className={styles.frameIcon1} alt="" src="/frame-11.svg" />
            <button className={styles.community}>Community</button>
          </div>
          <div className={styles.frame4}>
            <img className={styles.frameIcon2} alt="" src="/frame-11.svg" />
            <button className={styles.learn}>Learn</button>
          </div>
          <div className={styles.frame5}>
            <img className={styles.frameIcon3} alt="" src="/frame-11.svg" />
            <button className={styles.network}>Network</button>
          </div>
        </div>
        <img
          className={styles.image1Icon}
          loading="lazy"
          alt=""
          src="/image-110@2x.png"
        />
      </div>
    </header>
  );
};

export default Divnav;
