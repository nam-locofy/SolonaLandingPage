import type { NextPage } from "next";
import styles from "./divfooter1.module.css";

const Divfooter1: NextPage = () => {
  return (
    <footer className={styles.divfooter}>
      <div className={styles.solanaFoundation} />
      <div className={styles.managedBySF}>
        <div className={styles.learnResourceHub}>
          <img
            className={styles.metaplexDocsIcon}
            loading="lazy"
            alt=""
            src="/frame-21.svg"
          />
          <div className={styles.learnMetaplex}>
            <div className={styles.div}>©</div>
            <div className={styles.solanaFoundationAll}>
              Solana Foundation. All rights reserved.
            </div>
            <div className={styles.latestEpisode}>2023</div>
          </div>
          <div className={styles.frame}>
            <div className={styles.frame1}>
              <div className={styles.rectangle} />
              <img className={styles.frameIcon} alt="" src="/frame-3.svg" />
            </div>
            <div className={styles.frame2}>
              <div className={styles.rectangle1} />
              <img
                className={styles.frameIcon1}
                loading="lazy"
                alt=""
                src="/frame-4.svg"
              />
            </div>
            <img
              className={styles.frameIcon2}
              loading="lazy"
              alt=""
              src="/frame-28.svg"
            />
            <div className={styles.frame3}>
              <div className={styles.rectangle2} />
              <img
                className={styles.frameIcon3}
                loading="lazy"
                alt=""
                src="/frame-6.svg"
              />
            </div>
            <div className={styles.frame4}>
              <div className={styles.rectangle3} />
              <img className={styles.frameIcon4} alt="" src="/frame-7.svg" />
            </div>
            <div className={styles.frame5}>
              <div className={styles.rectangle4} />
              <img className={styles.frameIcon5} alt="" src="/frame-8.svg" />
            </div>
          </div>
          <div className={styles.managedBySolana}>
            Managed by Solana Foundation
          </div>
        </div>
        <div className={styles.solanaFoundation1}>
          <div className={styles.grantsFrame}>
            <div className={styles.mediaKitDisclr}>
              <div className={styles.grants}>Grants</div>
              <div className={styles.mediaKit}>Media Kit</div>
              <div className={styles.disclaimer}>Disclaimer</div>
              <div className={styles.careers}>Careers</div>
              <div className={styles.breakSolana}>Break Solana</div>
            </div>
            <div className={styles.solana}>Solana</div>
          </div>
          <div className={styles.frame6}>
            <div className={styles.grantsMediaKitDisclaimerCa}>
              <div className={styles.frame7}>
                <div className={styles.ecosystem}>Ecosystem</div>
                <div className={styles.newsletter}>Newsletter</div>
                <div className={styles.blog}>Blog</div>
              </div>
              <div className={styles.getConnected}>Get Connected</div>
            </div>
            <div className={styles.frameNavigation}>
              <div className={styles.frameFooter} />
              <img
                className={styles.frameIcon6}
                loading="lazy"
                alt=""
                src="/frame-9.svg"
              />
              <img
                className={styles.frameIcon7}
                loading="lazy"
                alt=""
                src="/frame-10.svg"
              />
              <div className={styles.en}>en</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Divfooter1;
