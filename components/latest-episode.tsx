import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./latest-episode.module.css";

export type LatestEpisodeType = {
  solanaStackExchangeIsAQue?: string;
  solanaStackExchange?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propHeight?: CSSProperties["height"];
  propHeight1?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
};

const LatestEpisode: NextPage<LatestEpisodeType> = ({
  solanaStackExchangeIsAQue,
  solanaStackExchange,
  propTop,
  propHeight,
  propHeight1,
  propWidth,
  propWidth1,
}) => {
  const latestEpisodeStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const frame1Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const frame2Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  const solanaStackExchangeStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const solanaStackExchange1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className={styles.latestEpisode} style={latestEpisodeStyle}>
      <div className={styles.rectangle} />
      <div className={styles.frame}>
        <div className={styles.frame1}>
          <input className={styles.frame2} type="checkbox" />
          <div className={styles.learnMore}>Learn more</div>
        </div>
        <div className={styles.frame3} style={frame1Style}>
          <div className={styles.toolLibrary}>tool / library</div>
          <div className={styles.frame4} style={frame2Style}>
            <div
              className={styles.solanaStackExchange}
              style={solanaStackExchangeStyle}
            >
              {solanaStackExchangeIsAQue}
            </div>
            <div
              className={styles.solanaStackExchange1}
              style={solanaStackExchange1Style}
            >
              {solanaStackExchange}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestEpisode;
