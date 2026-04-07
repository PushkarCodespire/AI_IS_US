"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    question: "What types of AI solutions do you build?",
    answer:
      "We build enterprise-grade AI solutions including neural orchestration systems, ethical AI scaffolding, inference analytics platforms, HPC-optimized computing clusters, vector databases, and legacy system injection capabilities.",
  },
  {
    question: "Do you deliver production-ready AI or just prototypes?",
    answer:
      "We deliver fully production-ready AI systems. Our engineering process ensures every solution is scalable, secure, and ready for enterprise deployment from day one.",
  },
  {
    question: "How long does an AI project typically take?",
    answer:
      "Project timelines vary based on complexity. A typical engagement ranges from 3-6 months for focused solutions to 12+ months for enterprise-wide AI transformations.",
  },
  {
    question: "Can you integrate AI into existing systems?",
    answer:
      "Yes, we specialize in seamlessly retrofitting AI capabilities into existing enterprise infrastructure through our Legacy Injection methodology.",
  },
  {
    question: "How do you ensure data security and compliance?",
    answer:
      "Yes, we provide continuous monitoring, optimization, and support to ensure long-term performance.",
  },
  {
    question: "Do you offer post-deployment support?",
    answer:
      "Yes, we provide continuous monitoring, optimization, and support to ensure long-term performance.",
  },
  {
    question: "Can you integrate AI into existing systems?",
    answer:
      "Absolutely. Our Legacy Injection technology seamlessly retrofits AI capabilities into outdated enterprise infrastructure without disrupting existing operations.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const leftFaqs = faqs.slice(0, 4);
  const rightFaqs = faqs.slice(4);

  return (
    <section className={styles.section} id="goals">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Frequently Asked Questions</h2>
          <p className={styles.subtitle}>
            Everything you need to know before getting started with AI-IS-US.
          </p>
        </div>

        <div className={styles.faqGrid}>
          <div className={styles.faqColumn}>
            {leftFaqs.map((faq, i) => (
              <div
                key={i}
                className={`${styles.faqItem} ${openIndex === i ? styles.open : ""}`}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className={styles.faqQuestion}>
                  <span>{faq.question}</span>
                  <img
                    src="/Vector1.png"
                    className={`${styles.arrowicon} ${openIndex === i ? styles.arrowOpen : ""}`}
                    alt=""
                  />
                </div>
                <div
                  className={`${styles.answerWrapper} ${openIndex === i ? styles.answerOpen : ""}`}
                >
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.faqColumn}>
            {rightFaqs.map((faq, i) => {
              const idx = i + 4;
              return (
                <div
                  key={idx}
                  className={`${styles.faqItem} ${openIndex === idx ? styles.open : ""}`}
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <div className={styles.faqQuestion}>
                    <span>{faq.question}</span>
                    <img
                      src="/Vector1.png"
                      className={`${styles.arrowicon} ${openIndex === idx ? styles.arrowOpen : ""}`}
                      alt=""
                    />
                  </div>
                  <div
                    className={`${styles.answerWrapper} ${openIndex === idx ? styles.answerOpen : ""}`}
                  >
                    <p className={styles.faqAnswer}>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
