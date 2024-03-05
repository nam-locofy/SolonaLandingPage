import type { NextPage } from "next";
import styles from "./divcommunity.module.css";

const Divcommunity: NextPage = () => {
  return (
    <section className={styles.divcommunity}>
      <img className={styles.imageIcon} alt="" src="/image@2x.png" />
      <div className={styles.frame}>
        <div className={styles.frame1}>
          <div className={styles.dividerDecor}>
            <div className={styles.footerInfo}>
              <div className={styles.learnSection}>
                <div className={styles.rectangle} />
                <div className={styles.m}>11.5M+</div>
              </div>
              <div className={styles.activeAccounts}>Active accounts</div>
            </div>
            <div className={styles.footerInfo1}>
              <div className={styles.frame2}>
                <div className={styles.rectangle1} />
                <div className={styles.m1}>21.9M</div>
              </div>
              <div className={styles.nftsMinted}>NFTs minted</div>
            </div>
            <div className={styles.footerInfo2}>
              <div className={styles.frame3}>
                <div className={styles.rectangle2} />
                <div className={styles.div}>$0.00025</div>
              </div>
              <div className={styles.averageCostPer}>
                Average cost per transaction
              </div>
            </div>
          </div>
          <div className={styles.frame4}>
            <h1 className={styles.joinACommunity}>Join a community</h1>
            <h1 className={styles.ofMillions}>of millions</h1>
            <h1 className={styles.imageHolder}>.</h1>
          </div>
        </div>
        <div className={styles.frame5}>
          <div className={styles.frame6}>
            <div className={styles.solanaGrants}>
              <div className={styles.rectangle3} />
              <div className={styles.managedBySF} />
              <div className={styles.frame7}>
                <div className={styles.learnList}>3,969</div>
                <div className={styles.transactionsPerSecond}>
                  Transactions per second
                </div>
                <img
                  className={styles.icon}
                  loading="lazy"
                  alt=""
                  src="/.svg"
                />
              </div>
              <div className={styles.frame8}>
                <div className={styles.rectangle4} />
                <h2 className={styles.fast}>Fast</h2>
              </div>
              <div className={styles.dontKeepYour}>
                Don’t keep your users waiting. Solana has block times of 400
                milliseconds — and as hardware gets faster, so will the network.
              </div>
            </div>
            <div className={styles.frame9}>
              <div className={styles.rectangle5} />
              <div className={styles.getEarlyNode} />
              <div className={styles.frame10}>
                <div className={styles.careersLink}>1,675</div>
                <div className={styles.validatorNodes}>Validator nodes</div>
                <img
                  className={styles.ecosystemNewsletterParent}
                  loading="lazy"
                  alt=""
                  src="/.svg"
                />
              </div>
              <div className={styles.learnLink}>
                <div className={styles.buildLink} />
                <h2 className={styles.decentralized}>Decentralized</h2>
              </div>
              <div className={styles.theSolanaNetwork}>
                The Solana network is validated by thousands of nodes that
                operate independently of each other, ensuring your data remains
                secure and censorship resistant.
              </div>
            </div>
            <div className={styles.solanaGrants1}>
              <div className={styles.rectangle6} />
              <div className={styles.rectangle7} />
              <div className={styles.frame11}>
                <div className={styles.div1}>163,077,581,394</div>
                <div className={styles.totalTransactions}>
                  Total transactions
                </div>
                <img className={styles.icon1} alt="" src="/.svg" />
              </div>
              <div className={styles.frame12}>
                <div className={styles.rectangle8} />
                <h2 className={styles.scalable}>Scalable</h2>
              </div>
              <div className={styles.getBigQuick}>
                Get big, quick. Solana is made to handle thousands of
                transactions per second, and fees for both developers and users
                remain less than $0.01.
              </div>
            </div>
            <div className={styles.hackathonFrame}>
              <div className={styles.rectangle9} />
              <div className={styles.mediaKitFrame} />
              <div className={styles.frame13}>
                <div className={styles.solanaGrants2}>0%</div>
                <div className={styles.netCarbonImpact}>Net carbon impact</div>
              </div>
              <div className={styles.careersFrame}>
                <div className={styles.disclaimerFrame} />
                <h2 className={styles.energyEfficient}>Energy Efficient</h2>
              </div>
              <div className={styles.solanasProofOfContainer}>
                <span>{`Solana’s proof of stake network and other innovations minimize its impact on the `}</span>
                <a
                  className={styles.environment}
                  href="https://solana.com/environment"
                  target="_blank"
                >
                  <span>
                    <span className={styles.environment1}>environment</span>
                  </span>
                </a>
                <span>.</span>
                <span className={styles.eachSolanaTransaction}>
                  {" "}
                  Each Solana transaction uses about the same energy as a few
                  Google searches.
                </span>
              </div>
            </div>
          </div>
          <div className={styles.frame14}>
            <h1 className={styles.madeFor}>Made for</h1>
            <h1 className={styles.massAdoption}>mass adoption</h1>
            <h1 className={styles.communityFrame}>.</h1>
            <img
              className={styles.buildFrameIcon}
              loading="lazy"
              alt=""
              src="/-3.svg"
            />
            <div className={styles.liveData}>Live data</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Divcommunity;
