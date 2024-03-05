import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame1.module.css";

export type Frame1Type = {
  newYorkHackerHouse?: string;
  startSpreadingTheNewsLine?: string;
  iMAGE?: string;

  /** Style props */
  propRight?: CSSProperties["right"];
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
};

const Frame1: NextPage<Frame1Type> = ({
  newYorkHackerHouse,
  startSpreadingTheNewsLine,
  iMAGE,
  propRight,
  propLeft,
  propWidth,
  propWidth1,
}) => {
  const frameStyle: CSSProperties = useMemo(() => {
    return {
      right: propRight,
      left: propLeft,
    };
  }, [propRight, propLeft]);

  const newYorkHacker1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const startSpreadingThe1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className={styles.frame} style={frameStyle}>
      <div className={styles.rectangle} />
      <div className={styles.frame1}>
        <div className={styles.newCity} />
        <div className={styles.frame2}>
          <div className={styles.newYorkHacker} style={newYorkHacker1Style}>
            {newYorkHackerHouse}
          </div>
          <div
            className={styles.startSpreadingThe}
            style={startSpreadingThe1Style}
          >
            {startSpreadingTheNewsLine}
          </div>
        </div>
      </div>
      <img className={styles.imageIcon} loading="lazy" alt="" src={iMAGE} />
    </div>
  );
};

export default Frame1;
