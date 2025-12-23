"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./ProjectShowcase.module.css";
import FadeIn from "./FadeIn";

const projects = [
  {
    id: "spotjott",
    name: "SpotJott",
    title: "SpotJott Cloud Journal",
    desc: "A personal and secured cloud journal platform featuring both public and private journaling. Includes social features like discovery feeds, comments, stories, and real-time notifications, creating a unique blend of privacy and community.",
    image: "/images/spotjott.png",
    stack: "Next.js • Cloud • Full Stack",
    year: "2024",
    link: "https://spotjott.com",
    status: "Live",
  },
  {
    id: "menofculture",
    name: "Men of Culture",
    title: "Men of Culture Website",
    desc: "A cutting-edge frontend project showcasing modern web design principles with sleek animations and responsive layouts. Built with Next.js and Tailwind CSS for optimal performance.",
    image:
      "https://i.pinimg.com/736x/53/ed/c9/53edc9305e6d70c2e9333ff5746eeedd.jpg",
    stack: "Next.js • Tailwind CSS",
    year: "2024",
    link: null,
    status: "Coming Soon",
  },
  {
    id: "grbtests",
    name: "GRB Tests",
    title: "GRB Tests Website",
    desc: "A comprehensive online testing portal designed for educational assessments. Features interactive quiz interfaces, real-time progress tracking, and detailed analytics dashboards.",
    image:
      "https://res.cloudinary.com/dsgolax64/image/upload/v1750422186/image_12_y7npm0.png",
    stack: "Next.js • React • Testing",
    year: "2024",
    link: "https://www.grbtests.com",
    status: "Live",
  },
  {
    id: "yogek",
    name: "Yogik Movement",
    title: "Yogek Website",
    desc: "A wellness and yoga platform with serene aesthetics and Buddha-inspired design elements. Delivers a calming user experience promoting mindfulness and physical well-being.",
    image:
      "https://res.cloudinary.com/dsgolax64/image/upload/v1765360520/3a35bb10-61e2-4fcb-91e0-a49add982681.png",
    stack: "React • UI/UX • Wellness",
    year: "2024",
    link: "https://www.yogikmovement.com",
    status: "Live",
  },
  {
    id: "thapar",
    name: "Thapar Recruitment",
    title: "Thapar Institute Dashboard",
    desc: "A full-stack recruitment and placement portal for Thapar Institute. Features student-recruiter matching, application tracking, and administrative dashboards for seamless hiring processes.",
    image:
      "https://res.cloudinary.com/dsgolax64/image/upload/v1765360778/0f99ccde-5553-4da8-a8d0-702a252b62fe.png",
    stack: "Next.js • Full Stack",
    year: "2024",
    link: "https://live-placement-cell-ti.vercel.app",
    status: "Live",
  },
];

export default function ProjectShowcase() {
  const [activeTab, setActiveTab] = useState(projects[0]);

  return (
    <section className={styles.section} id="process">
      <FadeIn className="container">
        <div className="text-center mb-12">
          <h2 className="text-secondary text-sm uppercase tracking-[0.2em] mb-2">
            Deep Dive
          </h2>
          <h3 className="text-4xl font-bold">Featured Case Studies</h3>
        </div>

        <div className={styles.tabs}>
          {projects.map((project) => (
            <button
              key={project.id}
              className={`${styles.tab} ${
                activeTab.id === project.id ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab(project)}
            >
              {project.name}
            </button>
          ))}
        </div>

        <div className={styles.displayArea} key={activeTab.id}>
          <div className={styles.imageContainer}>
            <Image
              src={activeTab.image}
              alt={activeTab.title}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            <div
              className="overlay"
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.8), transparent 40%)",
                pointerEvents: "none",
              }}
            />
          </div>

          <div className={styles.details}>
            <h4 className={styles.projectTitle}>{activeTab.title}</h4>
            <p className={styles.projectDesc}>{activeTab.desc}</p>

            <div className={styles.statGrid}>
              <div>
                <span className={styles.statLabel}>Tech Stack</span>
                <span className={styles.statValue}>{activeTab.stack}</span>
              </div>
              <div>
                <span className={styles.statLabel}>Year</span>
                <span className={styles.statValue}>{activeTab.year}</span>
              </div>
            </div>

            {activeTab.link ? (
              <a
                href={activeTab.link}
                target="_blank"
                rel="noopener noreferrer"
                className="sharp-btn"
                style={{
                  marginTop: "2rem",
                  alignSelf: "flex-start",
                  background: "transparent",
                  border: "1px solid #fff",
                  color: "#fff",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.5rem 1rem",
                }}
              >
                View Live Project
                <span style={{ fontSize: "1.2em" }}>→</span>
              </a>
            ) : (
              <span
                className="sharp-btn"
                style={{
                  marginTop: "2rem",
                  alignSelf: "flex-start",
                  background: "linear-gradient(135deg, #ff9800, #ffb74d)",
                  border: "none",
                  color: "#000",
                  cursor: "default",
                  fontWeight: 600,
                  padding: "0.5rem 1rem",
                }}
              >
                Coming Soon
              </span>
            )}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
