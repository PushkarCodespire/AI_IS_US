import styles from "./OperationalClarity.module.css";

const steps = [
  {
    num: "01",
    title: "Entropy Neutralization",
    desc: "Systematically identifying data leakage and structural inefficiencies in existing enterprise stacks.",
    color: "gold",
  },
  {
    num: "02",
    title: "Automated Synthesis",
    desc: "AI-driven integration that maps disparate workflows into a single, cohesive operational blueprint.",
    color: "gold",
  },
  {
    num: "03",
    title: "Predictive Governance",
    desc: "Real-time foresight that transforms reactive decision-making into proactive market leadership.",
    color: "muted",
  },
];

export default function OperationalClarity() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Core Philosophy</span>
          <h2 className={styles.heading}>
            From Operational Chaos to Strategic Clarity
          </h2>
        </div>

        <div className={styles.contentGrid}>
          {/* Steps */}
          <div className={styles.steps}>
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`${styles.step} ${i < steps.length - 1 ? styles.bordered : ""}`}
              >
                <span className={styles.stepNum}>{step.num}</span>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p
                    className={`${styles.stepDesc} ${step.color === "muted" ? styles.muted : ""}`}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Chart cards */}
          <div className={styles.charts}>
            <div className={styles.chartCard}>
              <span className={styles.chartLabel}>Legacy System</span>
              <div className={styles.chartBars}>
                <div className={styles.barGroup}>
                  {[77, 58, 86, 38].map((h, i) => (
                    <div
                      key={i}
                      className={styles.barDark}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.chartCard}>
              <span className={styles.chartLabel}>AI-IS-US Matrix</span>
              <div className={styles.chartBars}>
                <div className={styles.barGroup}>
                  {[96, 96, 96, 96].map((h, i) => (
                    <div
                      key={i}
                      className={styles.barLight}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
