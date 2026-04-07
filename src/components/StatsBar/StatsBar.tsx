import styles from "./StatsBar.module.css";

const stats = [
  { value: "99.8%", label: "Uptime Efficiency" },
  { value: "4.2ms", label: "Latency Benchmark" },
  { value: "12k+", label: "Node Distributions" },
  { value: "∞", label: "Scalability Vector", isInfinity: true },
];

export default function StatsBar() {
  return (
    <section className={styles.statsBar}>
      <div className={styles.container}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.statItem}>
            <div className={styles.value} data-infinity={stat.isInfinity || undefined}>
              {stat.value}
            </div>
            <div className={styles.label}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
