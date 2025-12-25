"use client";

import styles from "./EmbeddedSystems.module.css";
import FadeIn from "./FadeIn";

const embeddedServices = [
  {
    title: "Microcontroller Development",
    description:
      "Expert firmware development for ARM, AVR, ESP32, and STM32 microcontrollers. Optimized for performance and power efficiency.",
    icon: "🔧",
    platforms: ["Arduino", "ESP32", "STM32", "Raspberry Pi"],
  },
  {
    title: "IoT Solutions",
    description:
      "Connected device solutions with cloud integration. From sensors to dashboards, build complete IoT ecosystems.",
    icon: "📡",
    platforms: ["MQTT", "AWS IoT", "LoRaWAN", "Zigbee"],
  },
  {
    title: "PCB Design & Prototyping",
    description:
      "Custom PCB design from schematic to manufacturing. Rapid prototyping and production-ready designs.",
    icon: "🔌",
    platforms: ["KiCad", "Altium", "Eagle", "Gerber"],
  },
  {
    title: "Industrial Automation",
    description:
      "PLC programming and SCADA systems for manufacturing. Modernize legacy equipment with smart controllers.",
    icon: "🏭",
    platforms: ["Modbus", "CAN Bus", "RS-485", "PLC"],
  },
  {
    title: "Robotics & Motion Control",
    description:
      "Motor control, sensor integration, and autonomous systems. From drones to industrial robots.",
    icon: "🤖",
    platforms: ["ROS", "Servo Control", "BLDC", "Stepper"],
  },
  {
    title: "Low-Power Systems",
    description:
      "Battery-powered and energy harvesting designs. Optimize for months of operation on a single charge.",
    icon: "🔋",
    platforms: ["Sleep Modes", "Solar", "BLE", "Power Management"],
  },
];

const stats = [
  { value: "50+", label: "Devices Deployed" },
  { value: "10+", label: "IoT Projects" },
  { value: "5+", label: "Custom PCBs" },
  { value: "99.9%", label: "Uptime" },
];

export default function EmbeddedSystems() {
  return (
    <section className={styles.section} id="embedded">
      <div className={styles.circuitPattern} />
      <FadeIn className="container">
        <div className={styles.header}>
          <span className={styles.badge}>
            <span className={styles.badgePulse} />
            Hardware Meets Software
          </span>
          <h2 className={styles.subtitle}>Embedded Systems</h2>
          <h3 className={styles.title}>
            Building the <span className={styles.gradient}>Physical</span>{" "}
            Digital Bridge
          </h3>
          <p className={styles.description}>
            From microcontrollers to industrial automation, we design and
            develop embedded systems that power the physical world with digital
            intelligence.
          </p>
        </div>

        <div className={styles.statsBar}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.stat}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.grid}>
          {embeddedServices.map((service, index) => (
            <div
              key={index}
              className={styles.card}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>
                  <span className={styles.icon}>{service.icon}</span>
                </div>
                <h4 className={styles.cardTitle}>{service.title}</h4>
              </div>
              <p className={styles.cardDescription}>{service.description}</p>
              <div className={styles.platforms}>
                {service.platforms.map((platform, i) => (
                  <span key={i} className={styles.platform}>
                    {platform}
                  </span>
                ))}
              </div>
              <div className={styles.cardBorder} />
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <div className={styles.ctaContent}>
            <h4 className={styles.ctaTitle}>Have a Hardware Project?</h4>
            <p className={styles.ctaText}>
              From concept to production, we bring your embedded vision to life.
            </p>
          </div>
          <a href="#contact" className={styles.ctaButton}>
            Let&apos;s Build Together
            <span className={styles.ctaArrow}>→</span>
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
