"use client";

import styles from "./QuickDelivery.module.css";
import FadeIn from "./FadeIn";

const deliveryTimes = [
  {
    type: "Landing Page",
    time: "1 Day",
    description: "Single-page sites that convert visitors into customers",
    icon: "⚡",
    highlight: true,
  },
  {
    type: "Static Website",
    time: "7 Days",
    description:
      "Multi-page websites with stunning design and SEO optimization",
    icon: "🎯",
    highlight: false,
  },
  {
    type: "Dynamic Web App",
    time: "21 Days",
    description: "Full-featured applications with databases, auth, and APIs",
    icon: "🚀",
    highlight: false,
  },
];

export default function QuickDelivery() {
  return (
    <section className={styles.section} id="quick-delivery">
      <FadeIn className="container">
        <div className={styles.header}>
          <h2 className="text-secondary text-sm uppercase tracking-[0.2em] mb-2">
            Lightning Fast Delivery
          </h2>
          <h3 className={styles.mainTitle}>
            Give Us a Project.{" "}
            <span className={styles.gradient}>Watch It Get Done</span> in Record
            Time.
          </h3>
          <p className={styles.subtitle}>
            We don&apos;t just deliver—we deliver fast. Our streamlined process
            ensures your project goes live faster than you thought possible.
          </p>
        </div>

        <div className={styles.cardsContainer}>
          {deliveryTimes.map((item, index) => (
            <div
              key={index}
              className={`glass-panel ${styles.card} ${
                item.highlight ? styles.highlighted : ""
              }`}
            >
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{item.icon}</span>
              </div>
              <div className={styles.timeTag}>{item.time}</div>
              <h4 className={styles.cardTitle}>{item.type}</h4>
              <p className={styles.cardDescription}>{item.description}</p>
              <div className={styles.cardGlow}></div>
            </div>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h4 className={styles.ctaTitle}>Ready to get started?</h4>
            <p className={styles.ctaText}>
              Tell us about your project and get a custom quote within 24 hours.
            </p>
          </div>
          <a href="#contact" className={styles.ctaButton}>
            <span>Get a Quote</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className={styles.ctaArrow}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
