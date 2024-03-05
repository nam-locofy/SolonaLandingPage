import type { NextPage } from "next";
import styles from "./divnav1.module.css";

const Divnav1: NextPage = () => {
  return (
    <div className={styles.divnav}>
      <div className={styles.image} />
      <img className={styles.imageIcon} alt="" src="/image1@2x.png" />
    </div>
  );
};

export default Divnav1;
