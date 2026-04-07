"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className={styles.hero}>
          <div className={styles.heroBg}>
            <Image
              src="/images/contactbanner.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
            <div className={styles.heroOverlay} />
          </div>
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>Get In Touch</span>
            <h1 className={styles.heroHeading}>Contact Us</h1>
            <p className={styles.heroDesc}>
              Ready to build something extraordinary? Reach out and let&apos;s
              discuss how AI-IS-US can transform your enterprise.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className={styles.contactSection}>
          <div className={styles.contactContainer}>
            {/* Left column - Contact Info */}
            <div className={styles.infoColumn}>
              <div className={styles.infoHeader}>
                <h3 className={styles.infoTitle}>
                  Hi we are always here to help
                </h3>
                <div className={styles.infoDivider} />
              </div>

              <div className={styles.infoCards}>
                <div className={styles.infoCard}>
                  <div className={styles.iconCircle}>
                    <img src="/mdi_location.png" alt="" />
                  </div>
                  <div>
                    <h4 className={styles.infoCardTitle}>Our Location</h4>
                    <p className={styles.infoCardText}>
                      4754 U.S. Route 40 Tipp City, OH 45371
                      <br />
                      United States
                    </p>
                  </div>
                </div>
                <div className={styles.infoCard}>
                  <div className={styles.iconCircle}>
                    <img src="/Vector.png" alt="" />
                  </div>
                  <div>
                    <h4 className={styles.infoCardTitle}>Phone Number</h4>
                    <p className={styles.infoCardText}>+91 9899-886-484</p>
                  </div>
                </div>
                <div className={styles.infoCard}>
                  <div className={styles.iconCircle}>
                    <img src="/Group.png" alt="" />
                  </div>
                  <div>
                    <h4 className={styles.infoCardTitle}>Email Address</h4>
                    <p className={styles.infoCardText}>info@aiisus.com</p>
                  </div>
                </div>
              </div>

              <div className={styles.contactWith}>
                <span className={styles.contactLabel}>Contact with Us </span>
                <div className={styles.socialIcons}>
                  <span className={styles.socialIcon}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                        stroke="#666"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className={styles.socialIcon}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                        stroke="#666"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            {/* Right column - Contact Form */}
            <div className={styles.formColumn}>
              <div className={styles.formHeader}>
                <h3 className={styles.formTitle}>Send us a Message</h3>
                <p className={styles.formSubtitle}>
                  More insights are just a step away! If you didn&apos;t find
                  what you&apos;re looking for, feel free to ask, and we&apos;ll
                  be happy to help
                </p>
              </div>

              <form
                className={styles.form}
                onSubmit={(e) => e.preventDefault()}
              >
                <div className={styles.formGrid}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Name</label>
                      <input
                        type="text"
                        className={styles.formInput}
                        placeholder="Your name"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Work Email</label>
                      <input
                        type="email"
                        className={styles.formInput}
                        placeholder="Your work email"
                      />
                    </div>
                  </div>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Contact Number</label>
                      <input
                        type="tel"
                        className={styles.formInput}
                        placeholder="Your contact number"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Company Name *</label>
                      <input
                        type="text"
                        className={styles.formInput}
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Job Title *</label>
                      <input
                        type="text"
                        className={styles.formInput}
                        placeholder="Your job title"
                      />
                    </div>
                  </div>
                  <div className={styles.formGroupFull}>
                    <label className={styles.formLabel}>
                      Describe Your Project
                    </label>
                    <textarea
                      className={styles.formTextarea}
                      rows={4}
                      placeholder="Tell us about your project"
                    />
                  </div>
                </div>

                <button type="submit" className={styles.submitBtn}>
                  <span>Request Proposal</span>
                  <img src="/arrow.svg" className={styles.arrow} alt="" />
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className={styles.mapSection}>
          <div className={styles.mapHeader}>
            <span className={styles.mapEyebrow}>Our Office</span>
            <h2 className={styles.mapHeading}>Find Us Here</h2>
          </div>
          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3054.5!2d-84.1713!3d39.9578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884087c0e3a3f5b1%3A0x2e3f4c5d6e7f8a9b!2s4754+US-40%2C+Tipp+City%2C+OH+45371%2C+USA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AI-IS-US Office Location"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
