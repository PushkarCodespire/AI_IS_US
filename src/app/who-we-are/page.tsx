import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

const approachCards = [
  {
    icon: "/images/icon-understand.png",
    title: "Understand Deeply",
    desc: "We map your institutional knowledge before writing a single line of code. We perform a forensic audit of your data lineage, operational workflows, and strategic intent.",
  },
  {
    icon: "/images/icon-build.png",
    title: "Build Precisely",
    desc: "Our architectures are custom-milled for your specific operational scale. No off-the-shelf wrappers; only purpose-built neural frameworks designed for your exact use case.",
  },
  {
    icon: "/images/icon-deliver.png",
    title: "Deliver Outcomes",
    desc: "Success is measured in equity and efficiency, not just implementation. We deliver systems that become the permanent intellectual infrastructure of your organization.",
  },
];

const principles = [
  {
    icon: "shield",
    title: "Integrity by Design",
    desc: "Security is the baseline, not a feature. Our systems are hardened against adversarial attacks from the first layer of neural weights.",
  },
  {
    icon: "precision",
    title: "Deterministic AI",
    desc: "No black boxes, only predictable results. We engineering explainability into every decision path our models take.",
  },
  {
    icon: "lock",
    title: "Institutional Sovereignty",
    desc: "You own the intelligence we build. We provide full code disclosure and local hosting options to ensure you maintain total control over your IP.",
  },
  {
    icon: "test",
    title: "Relentless Rigor",
    desc: "Every module is stress-tested against real-world chaos. We simulate edge cases to ensure failure isn\u2019t an option.",
  },
];

export default function WhoWeArePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroBgWrapper}>
            <Image
              src="/images/whoweare-hero-bg1.jpg"
              alt="Who We Are background"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
            <div className={styles.heroOverlay} />
          </div>
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>Institutional Profile</span>
            <h1 className={styles.heroHeading}>Who We Are</h1>
            <p className={styles.heroDesc}>
              Architecting the intelligent foundations of the modern enterprise.
              We don&apos;t just build apps; we engineer the cognitive systems
              that drive industry dominance.
            </p>
            <a href="#contact" className={styles.heroBtn}>
              <span>Get Started</span>
              <img src="/arrow.svg" className={styles.heroArrow} alt="" />
            </a>
          </div>
        </section>

        {/* Founder Story Section */}
        <section className={styles.founderSection}>
          <div className={styles.founderContainer}>
            <div className={styles.founderImageWrapper}>
              <Image
                src="/images/founder-image.jpg"
                alt="Founder"
                width={455}
                height={516}
                className={styles.founderImage}
              />
            </div>
            <div className={styles.founderContent}>
              <div className={styles.founderTextBlock}>
                <div className={styles.founderHeadingBlock}>
                  <h2 className={styles.founderHeading}>
                    AI-IS-US was not built from a market opportunity.
                  </h2>
                  <div className={styles.founderDivider} />
                </div>
                <p className={styles.founderSubhead}>
                  It was built from a moment that demanded action.
                </p>
              </div>
              <div className={styles.founderBody}>
                <p>
                  AI-IS-US is not built from a market opportunity — it was built
                  from a moment that demanded action.
                </p>
                <p>
                  Founder Jayesh Patel&apos;s journey began during the most
                  difficult period of his life. After the tragic loss of his son,
                  he faced complex legal and institutional systems that were
                  nearly impossible to navigate alone. Instead of stepping back,
                  he chose to fight — without legal teams, without external
                  support — using only determination and technology.
                </p>
                <p>
                  During this process, he discovered the true power of AI.
                </p>
                <p>
                  By building custom AI tools to analyse evidence, structure
                  arguments, and manage overwhelming information, he realised
                  that AI — when applied correctly — is not just a tool, but a
                  powerful equaliser.
                </p>
                <p>
                  AI-IS-US was founded on that belief.
                </p>
                <p>
                  Today, we build AI products and services for European
                  businesses — designed not just for efficiency, but for clarity,
                  control, and real-world impact.
                </p>
              </div>
              <div className={styles.founderQuote}>
                <p className={styles.quoteText}>
                  &ldquo;That question became this company.&rdquo;
                </p>
                <p className={styles.quoteAuthor}>
                  — Jayesh Patel, Founder
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Blueprint Shift Section */}
        <section className={styles.blueprintSection}>
          <div className={styles.blueprintContainer}>
            <div className={styles.blueprintText}>
              <h2 className={styles.blueprintHeading}>The Blueprint Shift</h2>
              <div className={styles.blueprintParagraphs}>
                <p className={styles.blueprintPara}>
                  Our story began in the dust of industrial construction sites,
                  where structural integrity is a matter of physical life and
                  death. Our founder, transitioning from traditional civil
                  engineering to neural architecture, realized a fundamental flaw
                  in the digital gold rush: software was being built like
                  sandcastles, not skyscrapers.
                </p>
                <p className={styles.blueprintPara}>
                  AI-IS-US was founded on the belief that artificial intelligence
                  should be as reliable, predictable, and permanent as physical
                  infrastructure. We moved from laying steel beams to training
                  high-compute models with the same rigorous adherence to stress
                  tolerances and structural load balancing.
                </p>
              </div>
            </div>
            <div className={styles.blueprintImageWrapper}>
              <Image
                src="/images/blueprint-image1.jpg"
                alt="Blueprint visualization"
                width={417}
                height={329}
                className={styles.blueprintImage}
              />
              <div className={styles.blueprintLabel}>
                <span className={styles.blueprintLabelText}>
                  Structural Load Protocol-01
                </span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 6H11M11 6L7 2M11 6L7 10" stroke="#1c1b1b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className={styles.approachSection}>
          <div className={styles.approachContainer}>
            <div className={styles.approachHeader}>
              <span className={styles.approachEyebrow}>Methodology</span>
              <h2 className={styles.approachHeading}>How We Mill Excellence</h2>
            </div>
            <div className={styles.approachGrid}>
              {approachCards.map((card) => (
                <div key={card.title} className={styles.approachCard}>
                  <div className={styles.approachIconBox}>
                    <Image
                      src={card.icon}
                      alt={card.title}
                      width={48}
                      height={48}
                    />
                  </div>
                  <h3 className={styles.approachCardTitle}>{card.title}</h3>
                  <p className={styles.approachCardDesc}>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Stand For Section */}
        <section className={styles.valuesSection}>
          <div className={styles.valuesContainer}>
            <div className={styles.valuesLeft}>
              <span className={styles.valuesEyebrow}>Core Values</span>
              <h2 className={styles.valuesHeading}>
                What We
                <br />
                Stand For
              </h2>
              <div className={styles.valuesBar} />
            </div>
            <div className={styles.valuesGrid}>
              {principles.map((p) => (
                <div key={p.title} className={styles.principleCard}>
                  <div className={styles.principleHeader}>
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                      <path d="M8 0L0 3V9C0 14 3.4 18.5 8 20C12.6 18.5 16 14 16 9V3L8 0Z" fill="#fcf9f8" fillOpacity="0.6"/>
                    </svg>
                    <h4 className={styles.principleTitle}>{p.title}</h4>
                  </div>
                  <p className={styles.principleDesc}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
