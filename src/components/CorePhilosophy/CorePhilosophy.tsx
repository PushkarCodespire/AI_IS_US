import Image from "next/image";
import styles from "./CorePhilosophy.module.css";

export default function CorePhilosophy() {
  return (
    <section className={styles.section} id="why-ai-is-us">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Core Philosophy</span>
          <h2 className={styles.heading}>What is AI-IS-US?</h2>
        </div>

        <div className={styles.grid}>
          {/* Left card - Architectural Integrity */}
          <div className={styles.cardWhite}>
            <div className={styles.cardContent}>
              <div className={styles.iconBox}>
                <img src="/Container.png"/>
              </div>
              <h3 className={styles.cardTitle}>Architectural Integrity</h3>
              <p className={styles.cardDescription}>
                Our models are built on custom-milled neural substrates, ensuring
                every data point flows through a pre-ordained structural path. No
                &ldquo;black box&rdquo; outcomes&mdash;only deterministic precision.
              </p>
            </div>
            <div className={styles.cardFooter}>
              <span className={styles.moduleLabel}>
                Module_01 // Foundation
              </span>
            </div>
          </div>

          <div className={styles.cardBlue}>
            <div className={styles.blueContent}>
              <h3 className={styles.blueTitleCard}>The Cobalt Standard</h3>
              <p className={styles.blueDescription}>
                Proprietary algorithmic efficiency that reduces compute overhead
                by 40% while doubling inference accuracy.
              </p>
            </div>
            <div className={styles.blueImageWrapper}>
              <Image
                src="/images/cyber-circuity.png"
                alt="Cyber circuit visualization"
                width={266}
                height={262}
                className={styles.cyberImage}
              />
            </div>
          </div>

          {/* Right column */}
          
        </div>
        <div className={styles.rightColumn}>
            {/* Bottom row - two cards */}
            <div className={styles.bottomRow}>
              {/* Real-Time Sync */}
              <div className={styles.cardSmallGray}>
                <h4 className={styles.smallCardTitle}>Real-Time Sync</h4>
                <p className={styles.smallCardDesc}>
                  Synchronous data orchestration across global multi-cloud
                  environments.
                </p>
              </div>

              {/* Omnipresent Intelligence */}
              <div className={styles.cardSmallLight}>
                <div className={styles.omniLayout}>
                  <div className={styles.globeWrapper}>
                    <Image
                      src="/images/globe-data.png"
                      alt="Globe data visualization"
                      width={227}
                      height={163}
                      className={styles.globeImage}
                    />
                  </div>
                  <div className={styles.omniContent}>
                    <h4 className={styles.smallCardTitle}>
                      Omnipresent Intelligence
                    </h4>
                    <p className={styles.smallCardDesc}>
                      Deploying edge-computing intelligence where it matters most:
                      at the point of decision.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
