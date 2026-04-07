import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

const services = [
  {
    title: "AI Systems",
    icon: "/images/icon-ai-systems.svg",
    desc: "End-to-end neural deployment with integrated feedback loops. Built on proprietary kernels for sub-millisecond inference latency.",
    tags: ["Kernel-Level Integration", "Distributed Logic Clusters"],
  },
  {
    title: "Automation",
    icon: "/images/icon-automation.svg",
    desc: "Deterministic workflow engines that eliminate cognitive bottlenecks. We replace manual heuristics with audited algorithmic pathways.",
    tags: ["Deterministic Execution", "Audited Pathfinding"],
  },
  {
    title: "Data Intelligence",
    icon: "/images/icon-data-intel.svg",
    desc: "Transform raw telemetry into structured decision vectors. Our intelligence layer identifies signal within high-entropy environments.",
    tags: ["Entropy Reduction", "Vectorized Decisioning"],
  },
  {
    title: "Custom Solutions",
    icon: "/images/icon-custom-solutions.svg",
    desc: "Bespoke architectural drafting for specialized compute requirements. We design, build, and maintain the unique instruments your enterprise needs.",
    tags: ["Bespoke Kernel Design", "Sovereign Infrastructure"],
  },
];

const capabilities = [
  "Neural Integrity",
  "Zero-Drift Logic",
  "Sovereign Infrastructure",
  "Sub-Ms Latency",
  "Multi-Agent Orchestration",
  "Air-Gapped Training",
  "Quantum-Ready Encryption",
  "Vector Databases",
];

const pricingPlans = [
  {
    name: "Standard",
    price: "$4,500",
    period: "/mo base",
    features: [
      "Standard Neural Pipeline",
      "Cloud-Managed Infrastructure",
      "99.9% Logic Reliability",
      "Shared Compute Clusters",
    ],
    btnText: "Initialize",
    btnStyle: "outline" as const,
  },
  {
    name: "Enterprise",
    price: "$12,000",
    period: "/mo base",
    features: [
      "Custom Neural Architectures",
      "Hybrid Cloud/On-Prem",
      "Audit-Ready Traceability",
      "Dedicated Priority Support",
      "Zero-Drift Maintenance",
    ],
    btnText: "Select Tier",
    btnStyle: "primary" as const,
    recommended: true,
  },
  {
    name: "Sovereign",
    price: "Custom",
    period: "/annual\ncontract",
    features: [
      "Full Infrastructure Sovereignty",
      "Air-Gapped Deployment",
      "Proprietary Kernel Ownership",
      "Infinite Vertical Scaling",
    ],
    btnText: "Request Spec",
    btnStyle: "outline" as const,
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroBg}>
            <Image src="/images/solutions-hero-bg1.jpg" alt="" fill priority sizes="100vw" style={{ objectFit: "cover" }} />
            <div className={styles.heroOverlay} />
          </div>
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>Solutions</span>
            <h1 className={styles.heroHeading}>Solutions for the Neural Enterprise</h1>
            <p className={styles.heroDesc}>
              We engineer high-compute AI instruments designed for institutional
              clarity. Our systems move beyond standard software into the realm of
              technical blueprints, ensuring every neural weight serves a
              functional purpose.
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className={styles.gridSection}>
          <div className={styles.gridContainer}>
            <div className={styles.gridHeader}>
              <span className={styles.gridEyebrow}>Service Modules</span>
              <h2 className={styles.gridHeading}>Core Infrastructure</h2>
            </div>
            <div className={styles.servicesGrid}>
              {services.map((s) => (
                <div key={s.title} className={styles.serviceCard}>
                  <div className={styles.serviceIcon}>
                    <img src={s.icon} alt="" width={34} height={34} />
                  </div>
                  <h3 className={styles.serviceTitle}>{s.title}</h3>
                  <p className={styles.serviceDesc}>{s.desc}</p>
                  <div className={styles.serviceTags}>
                    {s.tags.map((t) => (
                      <span key={t} className={styles.serviceTag}>
                        <span className={styles.tagDot} />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Tags */}
        <section className={styles.capSection}>
          <div className={styles.capContainer}>
            <div className={styles.capLeft}>
              <h3 className={styles.capTitle}>
                Technical
                <br />
                Capabilities
              </h3>
              <p className={styles.capDesc}>
                Verified operational competencies under the 2024 Blueprint
                Framework.
              </p>
            </div>
            <div className={styles.capTags}>
              {capabilities.map((c) => (
                <span key={c} className={styles.capTag}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className={styles.pricingSection}>
          <div className={styles.pricingContainer}>
            <div className={styles.pricingHeader}>
              <span className={styles.pricingEyebrow}>Investment Tiers</span>
              <h2 className={styles.pricingHeading}>Scaled Precision</h2>
            </div>
            <div className={styles.pricingGrid}>
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`${styles.pricingCard} ${plan.recommended ? styles.pricingCardHighlight : ""}`}
                >
                  {plan.recommended && (
                    <span className={styles.recommendedBadge}>Recommended</span>
                  )}
                  <div className={styles.pricingTop}>
                    <span className={`${styles.planName} ${plan.recommended ? styles.planNameBlue : ""}`}>
                      {plan.name}
                    </span>
                    <div className={styles.priceRow}>
                      <span className={styles.priceValue}>{plan.price}</span>
                      <span className={styles.pricePeriod}>{plan.period}</span>
                    </div>
                  </div>
                  <ul className={styles.featureList}>
                    {plan.features.map((f) => (
                      <li key={f} className={styles.featureItem}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M6 10.8L3.2 8L2.27 8.93L6 12.67L14 4.67L13.07 3.73L6 10.8Z" fill="#2e5bff" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`${styles.planBtn} ${plan.btnStyle === "primary" ? styles.planBtnPrimary : styles.planBtnOutline}`}
                  >
                    {plan.btnText}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaHeading}>
              Ready to architect your
              <br />
              Neural Future?
            </h2>
            <p className={styles.ctaDesc}>
              Download our technical whitepaper on Neural Integrity or book a
              system diagnostic with our lead architects.
            </p>
            <div className={styles.ctaBtns}>
              <a href="#contact" className={styles.ctaBtnWhite}>
                Book Diagnostic
              </a>
              <a href="#" className={styles.ctaBtnOutline}>
                View Documentation
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
