"use client";

import styles from "./Services.module.css";
import FadeIn from "./FadeIn";

const services = [
  {
    title: "Modern Web Apps",
    description:
      "Building scalable, high-performance web applications using Next.js, React, and Node.js.",
    icon: "⚡",
    tag: "Modern Stack",
  },
  {
    title: "Mobile Development",
    description:
      "Cross-platform mobile apps with React Native and native iOS/Android development.",
    icon: "📱",
    tag: "Mobile",
  },
  {
    title: "Legacy Integration",
    description:
      "Supporting and modernizing legacy systems (PHP, ASP.NET, Java Enterprise). We bridge the gap.",
    icon: "🔄",
    tag: "Legacy Support",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "AWS, Azure, and Google Cloud optimization, deployment pipelines, and serverless architecture.",
    icon: "☁️",
    tag: "DevOps",
  },
];

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <FadeIn className="container">
        <h2 className="text-secondary text-sm uppercase tracking-[0.2em] mb-2">
          Our Expertise
        </h2>
        <h3 className="text-4xl font-bold mb-4">
          Comprehensive Tech Solutions
        </h3>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={`glass-panel ${styles.card}`}>
              <div className={styles.icon}>{service.icon}</div>
              <h4 className={styles.title}>{service.title}</h4>
              <p className={styles.description}>{service.description}</p>
              <span className={styles.legacy_tag}>{service.tag}</span>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
