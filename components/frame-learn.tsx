import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame-learn.module.css";

export type FrameLearnType = {
  startSpreadingTheNewsLine?: string;
  newYorkHackerHouse?: string;
  iMAGE?: string;

  /** Style props */
  propRight?: CSSProperties["right"];
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
};

const FrameLearn: NextPage<FrameLearnType> = ({
  startSpreadingTheNewsLine,
  newYorkHackerHouse,
  iMAGE,
  propRight,
  propLeft,
  propWidth,
  propWidth1,
}) => {
  const frameLearnStyle: CSSProperties = useMemo(() => {
    return {
      right: propRight,
      left: propLeft,
    };
  }, [propRight, propLeft]);

  const startSpreadingTheStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const newYorkHackerStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className={styles.frameLearn} style={frameLearnStyle}>
      <div className={styles.rectangle} />
      <div className={styles.frameBuild}>
        <div className={styles.rectangle1} />
        <div className={styles.frame}>
          <div
            className={styles.startSpreadingThe}
            style={startSpreadingTheStyle}
          >
            {startSpreadingTheNewsLine}
          </div>
          <div className={styles.newYorkHacker} style={newYorkHackerStyle}>
            {newYorkHackerHouse}
          </div>
        </div>
      </div>
      <img className={styles.imageIcon} loading="lazy" alt="" src={iMAGE} />
    </div>
  );
};

export default FrameLearn;
