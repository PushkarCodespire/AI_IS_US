import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

const problems = [
  {
    title: "Fragmentation & Data Silos",
    desc: "Enterprises lose 30% of AI efficiency due to disconnected data streams. We eliminate the lag between collection and computation with a unified semantic layer.",
    solution: "Core Solution: Integrated Signal Processing",
    size: "large",
  },
  {
    title: "Model Hallucinations",
    desc: "Generic LLMs provide probabilistic guesses. Our architecture enforces strict logic constraints for zero-error outputs.",
    hasImage: true,
    size: "small",
  },
  {
    title: "Integration Friction",
    desc: "Legacy systems often reject AI overlays. We build modular adapters that dock seamlessly with your existing infrastructure.",
    size: "small",
  },
  {
    title: "Cognitive Overload",
    desc: "AI shouldn\u2019t create more work. Our system acts as a precision filter, surfacing only the signals that drive $1M+ decisions.",
    isBlue: true,
    size: "large",
  },
];

const benefits = [
  {
    title: "Faster Decisions",
    desc: "Reduce time-to-insight from days to milliseconds with pre-computed predictive modeling.",
  },
  {
    title: "Reduced Complexity",
    desc: "Remove the need for massive data science teams with autonomous self-tuning pipelines.",
  },
  {
    title: "Scalable Systems",
    desc: "Infrastructure that grows with your petabytes without linear cost increases.",
  },
];

const tableRows = [
  {
    feature: "Foundation",
    others: "Template-based / Off-the-shelf",
    us: "Custom-Built Architecture",
  },
  {
    feature: "Priority",
    others: "Theoretical Accuracy",
    us: "Outcome-First Precision",
  },
  {
    feature: "Transparency",
    others: "Black Box Decisions",
    us: "Fully Auditable Logic",
  },
  {
    feature: "Deployment",
    others: "6-12 Months Integration",
    us: "Modular Docking (45 Days)",
  },
];

const pipelineSteps = [
  {
    num: "01",
    title: "Discover",
    desc: "Deep-tissue analysis of your existing data infrastructure and pain points.",
    tags: ["Data Audit", "KPI Mapping"],
    active: true,
  },
  {
    num: "02",
    title: "Design",
    desc: "Drafting the architectural blueprint for your custom AI engine.",
    tags: ["Logic Schematics", "API Docking"],
  },
  {
    num: "03",
    title: "Build",
    desc: "Iterative construction and high-compute model training in secured environments.",
    tags: ["Model Training", "Stress Testing"],
  },
  {
    num: "04",
    title: "Deliver",
    desc: "Full-scale integration with real-time feedback loops and 24/7 monitoring.",
    tags: ["Live Rollout", "Managed Scaling"],
    highlight: true,
  },
];

export default function WhyAiIsUsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroBg}>
            <Image src="/images/why-hero-bg.jpg" alt="" fill priority sizes="100vw" style={{ objectFit: "cover" }} />
            <div className={styles.heroOverlay} />
          </div>
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>Technical Specification v.24</span>
            <h1 className={styles.heroHeading}>Why AI-IS-US</h1>
            <p className={styles.heroDesc}>
              A rejection of black-box complexity. We engineer high-compute AI
              architectures that prioritize precision, auditability, and
              measurable enterprise impact.
            </p>
          </div>
        </section>

        {/* The Friction Crisis */}
        <section className={styles.frictionSection}>
          <div className={styles.frictionContainer}>
            <div className={styles.frictionHeader}>
              <span className={styles.sectionEyebrow}>Diagnostics</span>
              <h2 className={styles.sectionHeading}>The Friction Crisis</h2>
            </div>

            <div className={styles.problemsGrid}>
              {/* Row 1 */}
              <div className={styles.problemRow}>
                <div className={styles.problemCardLarge}>
                  <h3 className={styles.problemTitle}>{problems[0].title}</h3>
                  <p className={styles.problemDesc}>{problems[0].desc}</p>
                  <span className={styles.problemSolution}>{problems[0].solution}</span>
                </div>
                <div className={styles.problemCardSmallGray}>
                  <div className={styles.problemSmallContent}>
                    <h3 className={styles.problemTitle}>{problems[1].title}</h3>
                    <p className={styles.problemDescSmall}>{problems[1].desc}</p>
                  </div>
                  <div className={styles.problemImageWrapper}>
                    <Image src="/images/digital-noise.jpg" alt="Digital noise" width={296} height={296} className={styles.problemImage} />
                  </div>
                </div>
              </div>
              {/* Row 2 */}
              <div className={styles.problemRow}>
                <div className={styles.problemCardSmallWhite}>
                  <h3 className={styles.problemTitleAlt}>{problems[2].title}</h3>
                  <p className={styles.problemDescSmall}>{problems[2].desc}</p>
                </div>
                <div className={styles.problemCardBlue}>
                  <div className={styles.blueCardContent}>
                    <h3 className={styles.blueCardTitle}>{problems[3].title}</h3>
                    <p className={styles.blueCardDesc}>{problems[3].desc}</p>
                    <a href="#" className={styles.whitepaperBtn}>Download Whitepaper</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value & Benefits */}
        <section className={styles.valueSection}>
          <div className={styles.valueContainer}>
            <div className={styles.valueLeft}>
              <span className={styles.sectionEyebrow}>Value Proposition</span>
              <h2 className={styles.sectionHeading}>
                Engineering Real
                <br />
                Outcomes
              </h2>
              <div className={styles.benefitsList}>
                {benefits.map((b) => (
                  <div key={b.title} className={styles.benefitItem}>
                    <div className={styles.benefitIcon}>
                      <svg width="13" height="17" viewBox="0 0 13 17" fill="none">
                        <path d="M6.5 0L0 2.5V7.5C0 11.6 2.8 15.4 6.5 16.5C10.2 15.4 13 11.6 13 7.5V2.5L6.5 0Z" fill="#c4c5d9" fillOpacity="0.5" />
                      </svg>
                    </div>
                    <div className={styles.benefitContent}>
                      <h4 className={styles.benefitTitle}>{b.title}</h4>
                      <p className={styles.benefitDesc}>{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.valueRight}>
              <div className={styles.vizBox}>
                <Image src="/images/tech-data-viz.jpg" alt="Technical data visualization" width={483} height={483} className={styles.vizImage} />
              </div>
              <div className={styles.floatingOverlay}>
                <span className={styles.overlayLabel}>Outcome Metric</span>
                <span className={styles.overlayValue}>4.2x ROI</span>
                <span className={styles.overlaySubtext}>Avg. Implementation Yield</span>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className={styles.comparisonSection}>
          <div className={styles.comparisonContainer}>
            <div className={styles.comparisonHeader}>
              <span className={styles.compEyebrow}>Benchmarks</span>
              <h2 className={styles.compHeading}>AI-IS-US vs The Status Quo</h2>
            </div>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr className={styles.tableHeaderRow}>
                    <th className={styles.thFeature}>Feature Set</th>
                    <th className={styles.thOthers}>Others</th>
                    <th className={styles.thUs}>AI-IS-US</th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row) => (
                    <tr key={row.feature} className={styles.tableRow}>
                      <td className={styles.tdFeature}>{row.feature}</td>
                      <td className={styles.tdOthers}>{row.others}</td>
                      <td className={styles.tdUs}>{row.us}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Precision Pipeline */}
        <section className={styles.pipelineSection}>
          <div className={styles.pipelineContainer}>
            <div className={styles.pipelineHeader}>
              <span className={styles.sectionEyebrow}>Methodology</span>
              <h2 className={styles.sectionHeading}>The Precision Pipeline</h2>
            </div>
            <div className={styles.pipelineConnector} />
            <div className={styles.stepsGrid}>
              {pipelineSteps.map((step) => (
                <div key={step.num} className={styles.stepCard}>
                  <div className={`${styles.stepNum} ${step.highlight ? styles.stepNumBlue : ""} ${step.active ? styles.stepNumActive : ""}`}>
                    {step.num}
                  </div>
                  <h4 className={styles.stepTitle}>{step.title}</h4>
                  <p className={styles.stepDesc}>{step.desc}</p>
                  <div className={styles.stepTags}>
                    {step.tags.map((t) => (
                      <span key={t} className={`${styles.stepTag} ${step.highlight || step.active ? styles.stepTagBlue : ""}`}>
                        <span className={`${styles.tagDot} ${step.highlight || step.active ? styles.tagDotBlue : ""}`} />
                        {t}
                      </span>
                    ))}
                  </div>
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
