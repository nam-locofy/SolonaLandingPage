import type { NextPage } from "next";
import { useCallback } from "react";
import Rectangle from "../components/rectangle";
import LatestEpisode from "../components/latest-episode";
import EcosystemNewsletterBlog from "../components/ecosystem-newsletter-blog";
import Frame4 from "../components/frame4";
import Frame3 from "../components/frame3";
import { useRouter } from "next/router";
import Divfooter1 from "../components/divfooter1";
import styles from "./build-page.module.css";

const BuildPage: NextPage = () => {
  const router = useRouter();

  const onImage1Click = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.buildPage}>
      <main className={styles.container}>
        <Rectangle />
        <section className={styles.frameCityNewVibesGetEarly}>
          <div className={styles.managedbySolanaFoundation}>
            <div className={styles.programExamples}>
              <button className={styles.image} />
              <div className={styles.rectangleLearn}>
                <div className={styles.latestEpisode}>
                  <div className={styles.frameworksLogo} />
                  <div className={styles.chapters}>17 Chapters</div>
                </div>
                <img
                  className={styles.managedBySF}
                  loading="lazy"
                  alt=""
                  src="/frame-12.svg"
                />
                <div className={styles.grantsMedia}>
                  <div className={styles.disclaimerCareers} />
                  <div className={styles.quickstartYourSolana}>
                    Quickstart your Solana development starting from nothing to
                    complex programs.
                  </div>
                </div>
                <h1 className={styles.solanaDevelopmentCourse}>
                  Solana Development Course
                </h1>
              </div>
              <div className={styles.managedBy} />
            </div>
            <div className={styles.arabic}>
              <button className={styles.image1} />
              <div className={styles.englishLanguageCircle}>
                <div className={styles.twoSmallCircles}>
                  <div className={styles.resourcesList}>
                    <div className={styles.rectangle} />
                    <div className={styles.chapters1}>14 Chapters</div>
                  </div>
                  <div className={styles.buildspace}>Buildspace</div>
                </div>
                <img
                  className={styles.usernameIcon}
                  loading="lazy"
                  alt=""
                  src="/frame-22.svg"
                />
              </div>
              <div className={styles.sPLLibrary} />
            </div>
            <div className={styles.imageBreakpointNewCityNew}>
              <button className={styles.image2} />
              <div className={styles.frame}>
                <div className={styles.frame1}>
                  <div className={styles.frame2}>
                    <div className={styles.rectangle1} />
                    <div className={styles.chapters2}>12 Chapters</div>
                  </div>
                  <div className={styles.solanaBytes}>Solana Bytes</div>
                </div>
                <img
                  className={styles.frameIcon}
                  loading="lazy"
                  alt=""
                  src="/frame-31.svg"
                />
              </div>
              <div className={styles.rectangle2} />
            </div>
            <div className={styles.imageBreakpointNewCityNew1}>
              <button className={styles.image3} />
              <div className={styles.frame3}>
                <div className={styles.frame4}>
                  <div className={styles.frame5}>
                    <div className={styles.rectangle3} />
                    <div className={styles.chapter}>1 Chapter</div>
                  </div>
                  <div className={styles.scaffoldSeries}>Scaffold Series</div>
                </div>
                <img
                  className={styles.frameIcon1}
                  loading="lazy"
                  alt=""
                  src="/frame-41.svg"
                />
              </div>
              <div className={styles.rectangle4} />
            </div>
            <div className={styles.imageBreakpointNewCityNew2}>
              <button className={styles.image4} />
              <div className={styles.frame6}>
                <div className={styles.frame7}>
                  <div className={styles.frame8}>
                    <div className={styles.rectangle5} />
                    <div className={styles.chapters3}>3 Chapters</div>
                  </div>
                  <div className={styles.freecodecampSolanaCourse}>
                    Freecodecamp Solana Course
                  </div>
                </div>
                <img
                  className={styles.frameIcon2}
                  loading="lazy"
                  alt=""
                  src="/frame-22.svg"
                />
              </div>
              <div className={styles.rectangle6} />
            </div>
            <div className={styles.imageBreakpointNewCityNew3}>
              <button className={styles.image5} />
              <div className={styles.frame9}>
                <div className={styles.frame10}>
                  <div className={styles.frame11}>
                    <div className={styles.rectangle7} />
                    <div className={styles.chapters4}>167 Chapters</div>
                  </div>
                  <div className={styles.solanaDevelopmentBy}>
                    Solana Development by Knox
                  </div>
                </div>
                <img
                  className={styles.frameIcon3}
                  loading="lazy"
                  alt=""
                  src="/frame-31.svg"
                />
              </div>
              <div className={styles.rectangle8} />
            </div>
            <div className={styles.imageBreakpointNewCityNew4}>
              <button className={styles.image6} />
              <div className={styles.frame12}>
                <div className={styles.frame13}>
                  <div className={styles.frame14}>
                    <div className={styles.rectangle9} />
                    <div className={styles.chapters5}>8 Chapters</div>
                  </div>
                  <div className={styles.solanaBootcamp}>Solana Bootcamp</div>
                </div>
                <img
                  className={styles.frameIcon4}
                  loading="lazy"
                  alt=""
                  src="/frame-41.svg"
                />
              </div>
              <div className={styles.rectangle10} />
            </div>
          </div>
          <div className={styles.solanaOverview}>
            <h1 className={styles.getStarted}>Get started.</h1>
            <div className={styles.useTheseSolana}>
              Use these Solana Foundation and community courses to begin your
              journey into Solana development.
            </div>
          </div>
        </section>
        <section className={styles.metaplexDocs}>
          <div className={styles.frame15}>
            <div className={styles.latestEpisode1}>
              <div className={styles.solanaChangelog} />
              <div className={styles.imageFrames}>
                <div className={styles.goToSource}>
                  <img
                    className={styles.docsAndTools}
                    loading="lazy"
                    alt=""
                    src="/frame-81.svg"
                  />
                  <div className={styles.learnMore}>Learn more</div>
                </div>
                <div className={styles.communityLearnNetwork}>
                  <div className={styles.toolLibrary}>tool / library</div>
                  <div className={styles.frame16}>
                    <div className={styles.theOfficialSolana}>
                      The official Solana documentation on developing,
                      validators, SPL tokens, wallets and more.
                    </div>
                    <div className={styles.coreDocumentation}>
                      Core Documentation
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.latestEpisode2}>
              <div className={styles.rectangle11} />
              <div className={styles.frame17}>
                <div className={styles.frame18}>
                  <img
                    className={styles.frameIcon5}
                    loading="lazy"
                    alt=""
                    src="/frame-91.svg"
                  />
                  <div className={styles.learnMore1}>Learn more</div>
                </div>
                <div className={styles.frame19}>
                  <div className={styles.toolLibrary1}>tool / library</div>
                  <div className={styles.frame20}>
                    <div className={styles.theSolanaCookbook}>
                      The Solana Cookbook is a developer resource that provides
                      the essential concepts and references for building
                      applications on Solana.
                    </div>
                    <div className={styles.solanaCookbook}>Solana Cookbook</div>
                  </div>
                </div>
              </div>
            </div>
            <LatestEpisode
              solanaStackExchangeIsAQue="Solana Stack Exchange is a question and answer site for Solana software users and developers."
              solanaStackExchange="Solana Stack Exchange"
            />
            <div className={styles.latestEpisode3}>
              <div className={styles.rectangle12} />
              <div className={styles.frame21}>
                <div className={styles.frame22}>
                  <img
                    className={styles.frameIcon6}
                    loading="lazy"
                    alt=""
                    src="/frame-111.svg"
                  />
                  <div className={styles.learnMore2}>Learn more</div>
                </div>
                <div className={styles.frame23}>
                  <div className={styles.toolLibrary2}>tool / library</div>
                  <div className={styles.frame24}>
                    <div className={styles.easilyBuildDeploy}>
                      Easily build, deploy and test Solana programs and smart
                      contracts from a browser IDE.
                    </div>
                    <div className={styles.solanaPlayground}>
                      Solana Playground
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.latestEpisode4}>
              <div className={styles.rectangle13} />
              <div className={styles.frame25}>
                <div className={styles.frame26}>
                  <img
                    className={styles.frameIcon7}
                    loading="lazy"
                    alt=""
                    src="/frame-91.svg"
                  />
                  <div className={styles.learnMore3}>Learn more</div>
                </div>
                <div className={styles.frame27}>
                  <div className={styles.toolLibrary3}>tool / library</div>
                  <div className={styles.frame28}>
                    <div className={styles.getUpAnd}>
                      Get up and running fast with Solana dApps, generate a
                      project template in seconds.
                    </div>
                    <div className={styles.createSolanaDapp}>
                      create-solana-dapp
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.latestEpisodeChild} />
            </div>
            <LatestEpisode
              solanaStackExchangeIsAQue="Anchor is a framework for Solana's Sealevel runtime providing several convenient developer tools for writing smart contracts."
              solanaStackExchange="Anchor Docs"
              propTop="306.4px"
              propHeight="179px"
              propHeight1="134px"
              propWidth="95.26%"
              propWidth1="40.11%"
            />
            <div className={styles.latestEpisode5}>
              <div className={styles.rectangle14} />
              <div className={styles.frame29}>
                <div className={styles.frame30}>
                  <img
                    className={styles.frameIcon8}
                    loading="lazy"
                    alt=""
                    src="/frame-111.svg"
                  />
                  <div className={styles.learnMore4}>Learn more</div>
                </div>
                <div className={styles.frame31}>
                  <div className={styles.toolLibrary4}>tool / library</div>
                  <div className={styles.frame32}>
                    <div className={styles.theSolanaProgram}>
                      The Solana Program Library (SPL) is a collection of
                      on-chain programs targeting the Sealevel parallel runtime.
                    </div>
                    <div className={styles.solanaProgramLibrary}>
                      Solana Program Library
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.latestEpisode6}>
              <div className={styles.rectangle15} />
              <div className={styles.frame33}>
                <div className={styles.frame34}>
                  <img
                    className={styles.frameIcon9}
                    loading="lazy"
                    alt=""
                    src="/frame-91.svg"
                  />
                  <div className={styles.learnMore5}>Learn more</div>
                </div>
                <div className={styles.frame35}>
                  <div className={styles.toolLibrary5}>tool / library</div>
                  <div className={styles.frame36}>
                    <div className={styles.aListOf}>
                      A list of curated examples for a wide range of use cases
                      implemented using on-chain programs.
                    </div>
                    <div className={styles.programExamples1}>
                      Program Examples
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.breakpointNewCity}>
            <h1 className={styles.digDeeper}>Dig deeper.</h1>
            <div className={styles.learnFromResources}>
              Learn from resources across the greater Solana ecosystem.
            </div>
          </div>
        </section>
        <EcosystemNewsletterBlog />
        <section className={styles.frame37}>
          <Frame4 />
          <Frame3 />
        </section>
      </main>
      <header className={styles.divnav}>
        <div className={styles.buildCommunity} />
        <div className={styles.imageLogo}>
          <div className={styles.networkFrame}>
            <div className={styles.frameHeader}>
              <img
                className={styles.rectangleLearnIcon}
                alt=""
                src="/frame-211.svg"
              />
              <b className={styles.build}>Build</b>
            </div>
            <div className={styles.frameHeader1}>
              <img className={styles.frameIcon10} alt="" src="/frame-11.svg" />
              <div className={styles.community}>Community</div>
            </div>
            <div className={styles.frameHeader2}>
              <img className={styles.frameIcon11} alt="" src="/frame-11.svg" />
              <div className={styles.learn}>Learn</div>
            </div>
            <div className={styles.frameHeader3}>
              <img className={styles.frameIcon12} alt="" src="/frame-11.svg" />
              <div className={styles.network}>Network</div>
            </div>
          </div>
          <button className={styles.image11} onClick={onImage1Click} />
        </div>
      </header>
      <div className={styles.divfooterTitle}>
        <div className={styles.footer} />
        <div
          className={styles.breakpoint2023}
        >{`Breakpoint 2023 - New City. New Vibes - Get Early Access ->`}</div>
      </div>
      <Divfooter1 />
    </div>
  );
};

export default BuildPage;
