import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.blurCircle1} />
      <div className={styles.blurCircle2} />

      <div className={styles.content}>
        <h2 className={styles.heading}>
          Ready to Transform Your Business with AI?
        </h2>
        <p className={styles.subtitle}>
          Let&apos;s discuss how our AI services can accelerate your digital
          transformation and drive measurable business outcomes.
        </p>
        <a href="#contact" className={styles.ctaButton}>
          <span>Schedule a Consultation</span>
          <svg
            width="12"
            height="2"
            viewBox="0 0 12 2"
            fill="none"
          >
            <path
              d="M1 1H11M11 1L8 0M11 1L8 2"
              stroke="#fcf9f8"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
