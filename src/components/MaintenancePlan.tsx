"use client";

import styles from "./MaintenancePlan.module.css";
import FadeIn from "./FadeIn";

const features = [
  {
    title: "Bug Fixes",
    description: "Quick resolution for any issues that arise",
    icon: "🔧",
  },
  {
    title: "Feature Updates",
    description: "Add new functionality as your business grows",
    icon: "✨",
  },
  {
    title: "Performance Tuning",
    description: "Keep your site fast and optimized",
    icon: "⚡",
  },
  {
    title: "Security Patches",
    description: "Stay protected against vulnerabilities",
    icon: "🛡️",
  },
  {
    title: "Content Updates",
    description: "Fresh content whenever you need it",
    icon: "📝",
  },
  {
    title: "24/7 Support",
    description: "We're here when you need us",
    icon: "💬",
  },
];

export default function MaintenancePlan() {
  return (
    <section className={styles.section} id="maintenance">
      <FadeIn className="container">
        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <h2 className="text-secondary text-sm uppercase tracking-[0.2em] mb-2">
              Flexible Maintenance
            </h2>
            <h3 className={styles.mainTitle}>
              Pay-Per-Request
              <br />
              <span className={styles.gradient}>Maintenance Plan</span>
            </h3>
            <p className={styles.description}>
              No monthly commitments. No retainer fees. Simply request what you
              need, when you need it. We charge only for the work we do—keeping
              your costs predictable and your project in top shape.
            </p>

            <div className={styles.pricingHighlight}>
              <div className={styles.pricingText}>
                <span className={styles.pricingLabel}>Starting at</span>
                <span className={styles.pricingAmount}>₹99</span>
                <span className={styles.pricingUnit}>per request</span>
              </div>
            </div>

            <a href="#contact" className={styles.ctaButton}>
              Request Maintenance
            </a>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.featuresGrid}>
              {features.map((feature, index) => (
                <div key={index} className={styles.featureCard}>
                  <span className={styles.featureIcon}>{feature.icon}</span>
                  <div className={styles.featureContent}>
                    <h4 className={styles.featureTitle}>{feature.title}</h4>
                    <p className={styles.featureDescription}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.benefitsBar}>
          <div className={styles.benefit}>
            <span className={styles.benefitIcon}>✓</span>
            <span>No contracts</span>
          </div>
          <div className={styles.benefit}>
            <span className={styles.benefitIcon}>✓</span>
            <span>Pay as you go</span>
          </div>
          <div className={styles.benefit}>
            <span className={styles.benefitIcon}>✓</span>
            <span>Fast turnaround</span>
          </div>
          <div className={styles.benefit}>
            <span className={styles.benefitIcon}>✓</span>
            <span>Transparent pricing</span>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
