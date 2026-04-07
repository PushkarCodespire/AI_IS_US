import Image from "next/image";
import styles from "./Partnership.module.css";

export default function Partnership() {
  return (
    <section className={styles.section} id="team">
        <div className={styles.illustrationWrapper}>
          <Image
            src="/images/banner2.jpg"
            alt="Partnership illustration"
            width={504}
            height={384}
            className={styles.illustration}
          />
        </div>

      <div className={styles.content}>

        <div className={styles.textBlock}>
          <h2 className={styles.heading}>Strategic Engineering Partnership</h2>
          <div className={styles.divider} />
        </div>

        <div className={styles.details}>
          <p className={styles.stats}>
            50+ engineers. 70+ certifications.{" "}
          </p>
          <p className={styles.description}>
            AI-IS-US Ltd leads product strategy, client engagement, and AI
            delivery. Supported by a global engineering team, we ensure scalable,
            production-ready systems built to enterprise standards.
          </p>
        </div>

                <div className={styles.logos}>
          <Image
            src="/images/partnership-logo.png"
            alt="AI-IS-US Logo"
            width={143}
            height={38}
          />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={styles.connector}
          >
            <path d="M5 12H19M19 12L14 7M19 12L14 17" stroke="#1c1b1b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <Image
            src="/images/partner-logo-2.png"
            alt="Partner Logo"
            width={125}
            height={25}
          />
        </div>
      </div>
    </section>
  );
}
