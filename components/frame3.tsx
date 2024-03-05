import type { NextPage } from "next";
import styles from "./frame3.module.css";

const Frame3: NextPage = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.rectangle} />
      <div className={styles.frame1}>
        <button className={styles.frame2}>
          <div className={styles.rectangle1} />
          <div className={styles.youtube}>YouTube</div>
          <img className={styles.frameIcon} alt="" src="/frame-19.svg" />
        </button>
        <button className={styles.frame3}>
          <div className={styles.rectangle2} />
          <div className={styles.podcast}>Podcast</div>
          <img className={styles.discussionsIcon} alt="" src="/frame-20.svg" />
        </button>
      </div>
      <div className={styles.frame4}>
        <h1 className={styles.evenMoreResources}>Even more resources</h1>
        <div className={styles.moreVideosMore}>
          More videos, more episodes. Discussions between industry leaders in
          both blockchain and technology, our team, and community developers.
        </div>
      </div>
    </div>
  );
};

export default Frame3;
