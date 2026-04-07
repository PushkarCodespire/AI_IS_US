import styles from "./Capabilities.module.css";

const capabilities = [
  {
    icon: "/Text.png",
    title: "Neural Orchestration",
    desc: "Managing multi-agent AI ecosystems with centralized policy enforcement.",
  },
  {
    icon: "/Text1.png",
    title: "Ethical Scaffolding",
    desc: "Built-in safety protocols that ensure compliance at the algorithmic level.",
  },
  {
    icon: "/Text2.png",
    title: "Inference Analytics",
    desc: "Granular reporting on system thought-processes and logic forks.",
  },
  {
    icon: "/Text3.png",
    title: "HPC Optimization",
    desc: "High-performance computing clusters tuned for maximum FLOPs output.",
  },
  {
    icon: "/Text4.png",
    title: "Vector Databases",
    desc: "Proprietary long-term memory structures for context-aware intelligence.",
  },
  {
    icon: "/Text5.png",
    title: "Legacy Injection",
    desc: "Seamlessly retrofitting AI capabilities into outdated enterprise infrastructure.",
  },
];

export default function Capabilities() {
  return (
    <section className={styles.section} id="solutions">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Comprehensive Capabilities</h2>
          <p className={styles.subtitle}>
            Full-spectrum intelligence services tailored for the modern
            institutional landscape.
          </p>
        </div>

        <div className={styles.grid}>
          {capabilities.map((cap) => (
            <div key={cap.title} className={styles.card}>
              <span
                className="material-symbols-outlined"
                style={{ color: "#2e5bff", fontSize: 24 }}
              >
                <img src={cap.icon} className={styles.someicons}/>
              </span>
              <h3 className={styles.cardTitle}>{cap.title}</h3>
              <p className={styles.cardDesc}>{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
