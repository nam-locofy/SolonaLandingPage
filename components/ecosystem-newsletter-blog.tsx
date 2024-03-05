import type { NextPage } from "next";
import styles from "./ecosystem-newsletter-blog.module.css";

const EcosystemNewsletterBlog: NextPage = () => {
  return (
    <section className={styles.ecosystemNewsletterBlog}>
      <div className={styles.solanaInfo} />
      <div className={styles.frameContent}>
        <div className={styles.rectangleFrame}>
          <div className={styles.frameParent}>
            <div className={styles.frame}>
              <div className={styles.rectangle} />
              <div className={styles.learnHowSolana}>
                Learn how Solana works and get a high-level understanding of
                Solana's architecture.
              </div>
              <div className={styles.anchorDocs}>
                <div className={styles.programExamples} />
                <button className={styles.programExamples1}>
                  <div className={styles.rectangleFrameLearn} />
                  <img
                    className={styles.rectangleFrameLearn1}
                    alt=""
                    src="/frame-16.svg"
                  />
                  <div className={styles.viewAll}>View all</div>
                </button>
                <h1 className={styles.solanaDocs}>Solana Docs</h1>
              </div>
            </div>
            <div className={styles.frame1}>
              <div className={styles.rectangle1} />
              <div className={styles.frame2}>
                <div className={styles.frameChild} />
                <button className={styles.viewAll1}>
                  <div className={styles.metaplexDocs} />
                  <div className={styles.viewAll2}>View all</div>
                  <input className={styles.solanaDocs1} type="checkbox" />
                </button>
                <h1 className={styles.metaplexDocs1}>Metaplex Docs</h1>
              </div>
              <div className={styles.learnWhatYou}>
                Learn what you build with Metaplex, make the process of creating
                and launching NFTs easier.
              </div>
            </div>
          </div>
          <div className={styles.managedBySolana}>
            <div className={styles.solanaResources}>
              <div className={styles.learnFromSources}>
                <div className={styles.frameworkRectangle} />
                <div className={styles.latestEpisode}>Latest episode</div>
                <input className={styles.changelog} type="checkbox" />
              </div>
              <h1 className={styles.solanaChangelog}>Solana Changelog</h1>
              <div
                className={styles.someMoreSolana}
              >{`Some more Solana changes from Jacob & Joe. Subscribe to the newsletter: https://solana.us17.list-manage.com/s... Proposal - Priced Compute Units: ...`}</div>
            </div>
            <div className={styles.signUpNewsletter}>
              <div className={styles.image} />
              <img
                className={styles.imageIcon}
                loading="lazy"
                alt=""
                src="/image-82@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.signUpDivNav}>
          <h1 className={styles.goToThe}>Go to the source.</h1>
          <div className={styles.readTheDocumentation}>
            Read the documentation for Solana and popular tools.
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemNewsletterBlog;
