import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiPython,
  SiDotnet,
  SiGo,
  SiRust,
  SiDocker,
  SiAmazon,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiGit,
  SiTailwindcss,
  SiSass,
  SiFigma,
  SiVuedotjs,
  SiAngular,
  SiNestjs,
  SiNuxtdotjs,
  SiExpress,
} from "react-icons/si";
import styles from "./TechStack.module.css";
import FadeIn from "./FadeIn";

const stack = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Vue", icon: SiVuedotjs },
  { name: "Nuxt", icon: SiNuxtdotjs },
  { name: "Angular", icon: SiAngular },
  { name: "NestJS", icon: SiNestjs },
  { name: "Express", icon: SiExpress },
  { name: "PHP", icon: SiPhp },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "Sass", icon: SiSass },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Python", icon: SiPython },
  { name: ".NET", icon: SiDotnet },
  { name: "Go", icon: SiGo },
  { name: "Rust", icon: SiRust },
  { name: "Docker", icon: SiDocker },
  { name: "AWS", icon: SiAmazon },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MySQL", icon: SiMysql },
  { name: "Firebase", icon: SiFirebase },
  { name: "Git", icon: SiGit },
  { name: "Figma", icon: SiFigma },
];

export default function TechStack() {
  return (
    <section className={styles.section}>
      <FadeIn className="container">
        <div className="text-center mb-12">
          <h2 className="text-secondary text-sm uppercase tracking-[0.2em] mb-2">
            Technical Mastery
          </h2>
          <h3 className="text-4xl font-bold">Our Tech Arsenal</h3>
        </div>

        <div className={styles.grid}>
          {stack.map((tech) => (
            <div key={tech.name} className={styles.card} title={tech.name}>
              <div className={styles.glow} />
              <tech.icon className={styles.icon} />
              <span className={styles.name}>{tech.name}</span>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
