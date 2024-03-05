import type { NextPage } from "next";
import DivheroContent from "../components/divhero-content";
import Divclient from "../components/divclient";
import Divcommunity from "../components/divcommunity";
import Frame2 from "../components/frame2";
import Frame from "../components/frame";
import Divfooter from "../components/divfooter";
import Divnav from "../components/divnav";
import styles from "./index.module.css";

const HomePage: NextPage = () => {
  return (
    <div className={styles.homePage}>
      <DivheroContent />
      <Divclient />
      <Divcommunity />
      <section className={styles.divbuild}>
        <Frame2 />
        <Frame />
      </section>
      <Divfooter />
      <Divnav />
      <div className={styles.frame}>
        <div className={styles.rectangle} />
        <div
          className={styles.breakpoint2023}
        >{`Breakpoint 2023 - New City. New Vibes - Get Early Access ->`}</div>
      </div>
    </div>
  );
};

export default HomePage;
