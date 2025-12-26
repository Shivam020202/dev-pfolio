"use client";

import styles from "./UIRetouch.module.css";
import FadeIn from "./FadeIn";

const techStacks = [
  "WordPress",
  "Shopify",
  "React",
  "Angular",
  "Vue.js",
  "PHP",
  "Laravel",
  "Django",
  "Ruby on Rails",
  "ASP.NET",
  "Squarespace",
  "Wix",
];

const improvements = [
  {
    title: "Modern Design System",
    description:
      "Transform outdated interfaces with contemporary design principles",
  },
  {
    title: "Improved UX",
    description: "Enhance user flows and interactions for better engagement",
  },
  {
    title: "Mobile Optimization",
    description: "Make your site look stunning on every device",
  },
  {
    title: "Performance Boost",
    description: "Optimize assets and code for faster load times",
  },
];

export default function UIRetouch() {
  return (
    <section className={styles.section} id="ui-retouch">
      <FadeIn className="container">
        <div className={styles.header}>
          <h2 className="text-secondary text-sm uppercase tracking-[0.2em] mb-2">
            UI Transformation
          </h2>
          <h3 className={styles.mainTitle}>
            Bring Your Website From{" "}
            <span className={styles.gradient}>Any Tech Stack</span>
          </h3>
          <p className={styles.subtitle}>
            Get your UI retouched and improved at an affordable rate. We work
            with any technology—modernizing your design while preserving your
            existing functionality.
          </p>
        </div>

        <div className={styles.techStackCloud}>
          <p className={styles.techLabel}>Works with:</p>
          <div className={styles.techTags}>
            {techStacks.map((tech, index) => (
              <span key={index} className={styles.techTag}>
                {tech}
              </span>
            ))}
            <span className={`${styles.techTag} ${styles.moreTag}`}>
              + Many More
            </span>
          </div>
        </div>

        <div className={styles.improvementsGrid}>
          {improvements.map((item, index) => (
            <div
              key={index}
              className={`glass-panel ${styles.improvementCard}`}
            >
              <div className={styles.cardNumber}>
                {String(index + 1).padStart(2, "0")}
              </div>
              <h4 className={styles.cardTitle}>{item.title}</h4>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <div className={styles.beforeAfter}>
            <div className={styles.stateBox}>
              <span className={styles.stateLabel}>Before</span>
              <div className={styles.stateVisual}>
                <div className={styles.oldUI}>
                  <div className={styles.oldBlock}></div>
                  <div className={styles.oldBlock}></div>
                  <div className={styles.oldBlock}></div>
                </div>
              </div>
            </div>
            <div className={styles.arrow}>→</div>
            <div className={styles.stateBox}>
              <span className={styles.stateLabel}>After</span>
              <div className={styles.stateVisual}>
                <div className={styles.bentoGrid}>
                  <div
                    className={`${styles.bentoBlock} ${styles.bentoLarge}`}
                  ></div>
                  <div className={styles.bentoBlock}></div>
                  <div className={styles.bentoBlock}></div>
                  <div
                    className={`${styles.bentoBlock} ${styles.bentoWide}`}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.ctaContent}>
            <h4 className={styles.ctaTitle}>Ready for a Fresh Look?</h4>
            <p className={styles.ctaText}>
              Share your current website and we&apos;ll show you the
              possibilities.
            </p>
            <a href="#contact" className={styles.ctaButton}>
              Get Free Assessment
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
