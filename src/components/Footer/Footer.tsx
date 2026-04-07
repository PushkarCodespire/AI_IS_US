import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          {/* Company Info */}
          <div className={styles.companyInfo}>
            <div className={styles.footerLogo}>
              <Image
                src="/images/footer-logo.png"
                alt="AI-IS-US"
                width={117}
                height={33}
              />
            </div>
            <p className={styles.companyDesc}>
              We build production-ready AI systems for enterprises — from strategy
              to deployment.
            </p>
          </div>

          {/* Links Columns */}
          <div className={styles.linksArea}>
            <div className={styles.linkColumn}>
              <h4 className={styles.linkTitle}>Quick Links</h4>
              <ul className={styles.linkList}>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h4 className={styles.linkTitle}>Services</h4>
              <ul className={styles.linkList}>
                <li><a href="#">AI Product Engineering</a></li>
                <li><a href="#">Agentic AI Systems</a></li>
                <li><a href="#">Enterprise AI Modernization</a></li>
                <li><a href="#">AI Integration & Automation</a></li>
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h4 className={styles.contactTitle}>Contact us</h4>
              <ul className={styles.contactList}>
                <li className={styles.contactItem}>
                  <svg width="14" height="14" viewBox="0 0 14 11" fill="none">
                    <path d="M12.6 0H1.4C0.63 0 0.007 0.63 0.007 1.4L0 9.8C0 10.57 0.63 11.2 1.4 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM12.6 2.8L7 6.3L1.4 2.8V1.4L7 4.9L12.6 1.4V2.8Z" fill="white" />
                  </svg>
                  <span>info@aiisus.com</span>
                </li>
                <li className={styles.contactItem}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.81 6.07C3.89 8.19 5.81 10.1 7.93 11.19L9.59 9.53C9.79 9.33 10.08 9.27 10.34 9.35C11.17 9.62 12.06 9.77 12.98 9.77C13.38 9.77 13.72 10.11 13.72 10.51V12.98C13.72 13.38 13.38 13.72 12.98 13.72C5.81 13.72 0 7.91 0 0.74C0 0.34 0.34 0 0.74 0H3.22C3.62 0 3.96 0.34 3.96 0.74C3.96 1.67 4.11 2.55 4.38 3.38C4.45 3.64 4.4 3.93 4.19 4.13L2.81 6.07Z" fill="white" />
                  </svg>
                  <span>+44 XXXX XXX XXX</span>
                </li>
                <li className={styles.contactItem}>
                  <svg width="14" height="14" viewBox="0 0 10 14" fill="none">
                    <path d="M5 0C2.24 0 0 2.24 0 5C0 8.75 5 14 5 14C5 14 10 8.75 10 5C10 2.24 7.76 0 5 0ZM5 6.79C4.01 6.79 3.21 5.99 3.21 5C3.21 4.01 4.01 3.21 5 3.21C5.99 3.21 6.79 4.01 6.79 5C6.79 5.99 5.99 6.79 5 6.79Z" fill="white" />
                  </svg>
                  <span>4754 U.S. Route 40 Tipp City, OH 45371 United States</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bottom row */}
        <div className={styles.bottomRow}>
          <div className={styles.bottomLeft}>
            {/* Social icons */}

            <span className={styles.copyright}>© 2026 ai-is-us Ltd. All rights reserved.</span>
          </div>

          <div className={styles.legalLinks}>
            <a href="#">Term of service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
            <div className={styles.socialIcons}>
              {/* LinkedIn */}
              <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2.9 0H10.1C11.7 0 13 1.3 13 2.9V10.1C13 11.7 11.7 13 10.1 13H2.9C1.3 13 0 11.7 0 10.1V2.9C0 1.3 1.3 0 2.9 0ZM4.3 10.4V5.2H2.6V10.4H4.3ZM3.5 4.5C4 4.5 4.5 4.1 4.5 3.5C4.5 3 4 2.6 3.5 2.6C2.9 2.6 2.5 3 2.5 3.5C2.5 4.1 2.9 4.5 3.5 4.5ZM10.4 10.4V7.5C10.4 6.1 10.1 5 8.5 5C7.7 5 7.2 5.4 7 5.8H7V5.2H5.4V10.4H7.1V7.8C7.1 7.1 7.2 6.4 8.1 6.4C8.9 6.4 8.9 7.2 8.9 7.8V10.4H10.4Z" fill="#1f2937" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className={styles.socialIcon} aria-label="YouTube">
                <svg width="13" height="10" viewBox="0 0 16 12" fill="none">
                  <path d="M15.67 1.88C15.49 1.2 14.95 0.67 14.27 0.49C13.02 0.16 8 0.16 8 0.16C8 0.16 2.98 0.16 1.73 0.49C1.05 0.67 0.51 1.2 0.33 1.88C0 3.13 0 5.72 0 5.72C0 5.72 0 8.31 0.33 9.56C0.51 10.24 1.05 10.77 1.73 10.95C2.98 11.28 8 11.28 8 11.28C8 11.28 13.02 11.28 14.27 10.95C14.95 10.77 15.49 10.24 15.67 9.56C16 8.31 16 5.72 16 5.72C16 5.72 16 3.13 15.67 1.88ZM6.4 8.14V3.3L10.56 5.72L6.4 8.14Z" fill="#1f2937" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
