import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

const teamMembers = [
  {
    name: "Dr. Elena Vance",
    role: "Head of Neural Architecture",
    unit: "Unit_Neural",
    desc: "Pioneering non-linear weighting systems for resilient neural pathways.",
    image: "/images/team-elena.jpg",
  },
  {
    name: "Simon Drake",
    role: "Lead Systems Architect",
    unit: "Unit_Systems",
    desc: "Optimizing hardware-software parity for ultra-low latency inference.",
    image: "/images/team-simon.jpg",
  },
  {
    name: "Sarah Chen",
    role: "Director of Intelligence",
    unit: "Unit_Intel",
    desc: "Designing the heuristics of autonomous decision engines in flux.",
    image: "/images/team-sarah.jpg",
  },
  {
    name: "Julian Vye",
    role: "Chief of Security",
    unit: "Unit_Secure",
    desc: "Enforcing cryptographic sovereignty across the intelligence layer.",
    image: "/images/team-julian.jpg",
  },
];

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroBg}>
            <Image src="/images/team-hero-bg.jpg" alt="" fill priority sizes="100vw" style={{ objectFit: "cover" }} />
            <div className={styles.heroOverlay} />
          </div>
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>Our Team</span>
            <h1 className={styles.heroHeading}>The Human Architecture</h1>
            <p className={styles.heroDesc}>
              Engineering intelligence requires more than code. It demands a
              structural philosophy rooted in human precision and technical
              sovereignty. Meet the architects of the new compute.
            </p>
          </div>
        </section>

        {/* Founder Section */}
        <section className={styles.founderSection}>
          <div className={styles.founderContainer}>
            <div className={styles.founderImageWrapper}>
              <Image
                src="/images/founder-jayesh.png"
                alt="Jayesh Patel - Founder"
                width={611}
                height={640}
                className={styles.founderImage}
              />
            </div>
            <div className={styles.founderInfo}>
              <div className={styles.founderBorder}>
                <span className={styles.founderRole}>
                  [ Founder & Chief Executive Officer ]
                </span>
                <h2 className={styles.founderName}>Jayesh Patel</h2>
                <p className={styles.founderBio}>
                  &ldquo;After the loss of my son, I refused to be powerless. I
                  fought &mdash; through legal proceedings, institutional
                  processes, and systems that weren&apos;t designed to help
                  people like me. That fight taught me something: most systems
                  are broken. AI can fix them &mdash; but only if it&apos;s
                  built with the same precision and integrity as the justice we
                  all deserve.&rdquo;
                </p>
                <div className={styles.founderQuoteBox}>
                  <p className={styles.quoteText}>
                    Level the Playing Field &mdash; AI gives smaller teams and
                    businesses the ability to operate with the speed, insight,
                    and precision of much larger organizations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Grid */}
        <section className={styles.leadershipSection}>
          <div className={styles.leadershipContainer}>
            <div className={styles.leadershipHeader}>
              <div className={styles.headerLeft}>
                <span className={styles.headerEyebrow}>Functional Units</span>
                <h2 className={styles.headerHeading}>Technical Command</h2>
              </div>
              <div className={styles.headerDivider} />
              <span className={styles.headerVersion}>VER_2024.0.12</span>
            </div>

            <div className={styles.teamGrid}>
              {teamMembers.map((member) => (
                <div key={member.name} className={styles.teamCard}>
                  <div className={styles.cardImageWrapper}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={271}
                      height={256}
                      className={styles.cardImage}
                    />
                    <span className={styles.unitBadge}>{member.unit}</span>
                  </div>
                  <div className={styles.cardInfo}>
                    <h3 className={styles.cardName}>{member.name}</h3>
                    <span className={styles.cardRole}>{member.role}</span>
                    <p className={styles.cardDesc}>{member.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContainer}>
            <div className={styles.ctaIconBox}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M24 4L4 14V34L24 44L44 34V14L24 4Z" stroke="#fcf9f8" strokeWidth="2" strokeLinejoin="round" />
                <path d="M24 20V28M24 28L18 24M24 28L30 24" stroke="#fcf9f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaHeading}>Build the Sovereignty</h2>
              <p className={styles.ctaDesc}>
                We are looking for engineers, philosophers, and architects who
                believe in precision over hype. Join the mission to redefine
                structural AI from the ground up.
              </p>
              <div className={styles.ctaBtns}>
                <a href="#" className={styles.ctaBtnWhite}>View Open Roles</a>
                <a href="#" className={styles.ctaBtnOutline}>Our Manifesto</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
