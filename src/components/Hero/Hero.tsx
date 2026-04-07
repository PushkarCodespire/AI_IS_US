import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgWrapper}>
        <Image
          src="/images/hero-bg.png"
          alt="AI background"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <h1 className={styles.heading}>From Idea to Enterprise-Scale AI</h1>

        <div className={styles.subtitleRow}>
          <span className={styles.subtitle}>Built Right</span>
        </div>

        <p className={styles.description}>
          Institutional-grade artificial intelligence architectures designed with
          the precision of a master draft. We don&apos;t build apps; we engineer
          foundations.
        </p>

        <a href="#contact" className={styles.ctaButton}>
          <span>Get Started</span>
          <img src="/arrow.svg" className={styles.arrow}/>
        </a>
      </div>
    </section>
  );
}
