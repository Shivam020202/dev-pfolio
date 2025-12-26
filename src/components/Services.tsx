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
    title: "AI & ML Solutions",
    description:
      "Intelligent applications powered by machine learning, computer vision, and NLP technologies.",
    icon: "🤖",
    tag: "Artificial Intelligence",
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
  {
    title: "UI/UX Design",
    description:
      "Stunning interfaces with intuitive user experiences. From wireframes to pixel-perfect designs.",
    icon: "🎨",
    tag: "Design",
  },
];

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <FadeIn className="container">
        <div className={styles.header}>
          <span className={styles.badge}>
            <span className={styles.badgeDot}></span>
            What We Do
          </span>
          <h2 className={styles.title}>
            Our <span className={styles.gradient}>Expertise</span>
          </h2>
          <p className={styles.subtitle}>
            Full-stack development capabilities spanning modern and legacy
            technologies
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div
              key={index}
              className={styles.card}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.cardNumber}>
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{service.icon}</span>
              </div>
              <div className={styles.cardContent}>
                <h4 className={styles.cardTitle}>{service.title}</h4>
                <p className={styles.description}>{service.description}</p>
                <span className={styles.tag}>{service.tag}</span>
              </div>
              <div className={styles.cardGlow}></div>
              <div className={styles.cardBorder}></div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
