import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

const principles = [
  {
    num: "01",
    title: "Deterministic Design",
    desc: "Eliminating stochastic unpredictability at the core of the model. Every output is a result of traceable, non-random logic.",
  },
  {
    num: "02",
    title: "Auditable Logic",
    desc: 'Transparent reasoning chains that allow for full post-action analysis. No \u201cblack box\u201d decisions within our architecture.',
  },
  {
    num: "03",
    title: "Institutional\nSovereignty",
    desc: "Ensuring total data and weight ownership. Your intelligence remains within your perimeter, controlled by your governance.",
  },
  {
    num: "04",
    title: "Radical\nPerformance",
    desc: "High-frequency compute optimized for extreme scale. Low-latency execution without compromising structural integrity.",
  },
];

export default function GoalsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroBg}>
            <Image src="/images/goals-hero-bg.jpg" alt="" fill priority sizes="100vw" style={{ objectFit: "cover" }} />
            <div className={styles.heroOverlay} />
          </div>
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>Goals</span>
            <h1 className={styles.heroHeading}>Strategic Foundation</h1>
            <p className={styles.heroDesc}>
              Engineering the core logic of institutional intelligence through
              technical rigor and deterministic architectural design.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className={styles.missionSection}>
          <div className={styles.missionContainer}>
            <div className={styles.missionLeft}>
              <div className={styles.missionHeader}>
                <span className={styles.sectionLabel}>01 // Mission</span>
                <h2 className={styles.sectionTitle}>Our Mission</h2>
              </div>
            </div>
            <div className={styles.missionRight}>
              <p className={styles.missionStatement}>
                To engineer the world&apos;s most reliable neural architectures,
                transforming fragmented data into deterministic institutional
                intelligence.
              </p>
              <div className={styles.missionTags}>
                <span className={styles.missionTag}>Rigor-Verified</span>
                <span className={styles.missionTag}>Zero-Stochastic</span>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className={styles.visionSection}>
          <div className={styles.visionContainer}>
            <div className={styles.visionContent}>
              <span className={styles.visionLabel}>02 // Vision</span>
              <h2 className={styles.sectionTitle}>Our Vision</h2>
              <p className={styles.visionStatement}>
                A future where enterprise intelligence is as foundational and
                reliable as physical infrastructure.
              </p>
            </div>
            <div className={styles.visionImageWrapper}>
              <div className={styles.visionCard}>
                <Image
                  src="/images/grp1.png"
                  alt="Vision Infrastructure"
                  width={472}
                  height={512}
                  className={styles.visionImage}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section className={styles.principlesSection}>
          <div className={styles.principlesContainer}>
            <div className={styles.principlesHeader}>
              <span className={styles.sectionLabel}>03 // Framework</span>
              <h2 className={styles.sectionTitle}>The Principles</h2>
            </div>
            <div className={styles.principlesGrid}>
              {principles.map((p) => (
                <div key={p.num} className={styles.principleCard}>
                  <div className={styles.principleTop}>
                    <span className={styles.principleNum}>{p.num}</span>
                  </div>
                  <h3 className={styles.principleTitle}>{p.title}</h3>
                  <p className={styles.principleDesc}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContainer}>
            <h2 className={styles.ctaHeading}>
              Ready to build on solid ground?
            </h2>
            <div className={styles.ctaBtns}>
              <a href="#" className={styles.ctaBtnWhite}>Review Blueprints</a>
              <a href="#contact" className={styles.ctaBtnOutline}>
                Contact Systems Engineer
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
