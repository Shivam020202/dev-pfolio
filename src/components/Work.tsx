"use client";

import Image from "next/image";
import styles from "./Work.module.css";
import FadeIn from "./FadeIn";

const projects = [
  {
    title: "SpotJott",
    tech: "Next.js, Cloud Journal, Full Stack",
    image: "/images/spotjott.png",
    link: "https://spotjott.com",
    status: "Live",
  },
  {
    title: "Men of Culture Website",
    tech: "Next.js, Tailwind CSS, Frontend",
    image:
      "https://i.pinimg.com/736x/53/ed/c9/53edc9305e6d70c2e9333ff5746eeedd.jpg",
    link: null,
    status: "Coming Soon",
  },
  {
    title: "GRB Tests Website",
    tech: "Next.js, React, Testing Portal",
    image:
      "https://res.cloudinary.com/dsgolax64/image/upload/v1750422186/image_12_y7npm0.png",
    link: "https://www.grbtests.com",
    status: "Live",
  },
  {
    title: "Yogek Website",
    tech: "React, UI/UX, Wellness Platform",
    image:
      "https://res.cloudinary.com/dsgolax64/image/upload/v1765360520/3a35bb10-61e2-4fcb-91e0-a49add982681.png",
    link: "https://www.yogikmovement.com",
    status: "Live",
  },
  {
    title: "Thapar Institute Recruitment Dashboard",
    tech: "Next.js, Dashboard, Full Stack",
    image:
      "https://res.cloudinary.com/dsgolax64/image/upload/v1765360778/0f99ccde-5553-4da8-a8d0-702a252b62fe.png",
    link: "https://live-placement-cell-ti.vercel.app",
    status: "Live",
  },
];

export default function Work() {
  return (
    <section id="work" className={styles.section}>
      <FadeIn className="container">
        <h2 className="text-secondary text-sm uppercase tracking-[0.2em] mb-2">
          Selected Work
        </h2>
        <h3 className="text-4xl font-bold mb-4">Building Digital Excellence</h3>

        <div className={styles.grid}>
          {projects.map((project, index) => {
            const ProjectWrapper = project.link ? "a" : "div";
            const wrapperProps = project.link
              ? {
                  href: project.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <ProjectWrapper
                key={index}
                className={styles.project}
                {...wrapperProps}
              >
                <span
                  className={`${styles.statusBadge} ${
                    project.status === "Live" ? styles.live : styles.coming
                  }`}
                >
                  {project.status}
                </span>
                <div className={styles.image}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={styles.overlay}>
                  <h4 className={styles.projectTitle}>{project.title}</h4>
                  <p className={styles.projectTech}>{project.tech}</p>
                  {project.link && (
                    <span className={styles.viewProject}>View Project →</span>
                  )}
                </div>
              </ProjectWrapper>
            );
          })}
        </div>
      </FadeIn>
    </section>
  );
}
