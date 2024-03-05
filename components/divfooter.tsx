import type { NextPage } from "next";
import styles from "./divfooter.module.css";

const Divfooter: NextPage = () => {
  return (
    <footer className={styles.divfooter}>
      <div className={styles.rectangle} />
      <div className={styles.frame}>
        <div className={styles.frame1}>
          <img
            className={styles.learnBuildNetwork}
            loading="lazy"
            alt=""
            src="/frame-21.svg"
          />
          <div className={styles.frame2}>
            <div className={styles.div}>©</div>
            <div className={styles.solanaFoundationAll}>
              Solana Foundation. All rights reserved.
            </div>
            <div className={styles.managedbySolanaFoundation}>2023</div>
          </div>
          <div className={styles.frame3}>
            <div className={styles.ecosystemNewsletter}>
              <div className={styles.rectangle1} />
              <img
                className={styles.getConnectedIcon}
                alt=""
                src="/frame-3.svg"
              />
            </div>
            <div className={styles.ecosystemNewsletter1}>
              <div className={styles.rectangle2} />
              <img className={styles.frameIcon} alt="" src="/frame-4.svg" />
            </div>
            <img
              className={styles.ecosystemNewsletterIcon}
              loading="lazy"
              alt=""
              src="/frame-5.svg"
            />
            <div className={styles.ecosystemNewsletter2}>
              <div className={styles.rectangle3} />
              <img className={styles.frameIcon1} alt="" src="/frame-6.svg" />
            </div>
            <div className={styles.ecosystemNewsletter3}>
              <div className={styles.rectangle4} />
              <img className={styles.frameIcon2} alt="" src="/frame-7.svg" />
            </div>
            <div className={styles.ecosystemNewsletter4}>
              <div className={styles.rectangle5} />
              <img className={styles.frameIcon3} alt="" src="/frame-8.svg" />
            </div>
          </div>
          <div className={styles.managedBySolana}>
            Managed by Solana Foundation
          </div>
        </div>
        <div className={styles.frame4}>
          <div className={styles.frame5}>
            <div className={styles.frame6}>
              <div className={styles.grants}>Grants</div>
              <div className={styles.mediaKit}>Media Kit</div>
              <div className={styles.disclaimer}>Disclaimer</div>
              <div className={styles.careers}>Careers</div>
              <div className={styles.breakSolana}>Break Solana</div>
            </div>
            <div className={styles.solana}>Solana</div>
          </div>
          <div className={styles.frame7}>
            <div className={styles.frame8}>
              <div className={styles.frame9}>
                <div className={styles.ecosystem}>Ecosystem</div>
                <div className={styles.newsletter}>Newsletter</div>
                <div className={styles.blog}>Blog</div>
              </div>
              <div className={styles.getConnected}>Get Connected</div>
            </div>
            <div className={styles.frame10}>
              <div className={styles.rectangle6} />
              <img
                className={styles.frameIcon4}
                loading="lazy"
                alt=""
                src="/frame-9.svg"
              />
              <img
                className={styles.frameIcon5}
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

export default Divfooter;
