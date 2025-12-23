"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";

interface DustParticle {
  top: string;
  left: string;
  width: string;
  height: string;
  animationDuration: string;
  animationDelay: string;
  opacity: number;
}

export default function Hero() {
  const [dustParticles, setDustParticles] = useState<DustParticle[]>([]);

  useEffect(() => {
    // Generate random dust particles only on the client side
    const particles = [...Array(25)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 3 + 1}px`,
      height: `${Math.random() * 3 + 1}px`,
      animationDuration: `${Math.random() * 10 + 5}s`,
      animationDelay: `${Math.random() * 5}s`,
      opacity: Math.random() * 0.5 + 0.3,
    }));
    setDustParticles(particles);
  }, []);

  const containerVars: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVars: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50 },
    },
  };

  return (
    <section className={styles.hero}>
      <div className={styles.bulbContainer}>
        <div className={styles.wire} />
        <div className={styles.bulb} />
        <div className={styles.light} /> {/* The spotlight beam */}
        <div className={styles.dustContainer}>
          {dustParticles.map((particle, i) => (
            <div key={i} className={styles.dust} style={particle} />
          ))}
        </div>
      </div>

      <motion.div
        className={`container ${styles.content}`}
        variants={containerVars}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={itemVars} className={styles.overline}>
          Premier Development Group
        </motion.h2>

        <motion.div variants={itemVars} className={styles.titleWrapper}>
          <span className={styles.titleMain}>BUILDING</span>
          <div className={styles.logoPlate}>
            <span className={styles.titleFuture}>THE FUTURE</span>
          </div>
        </motion.div>

        <motion.p variants={itemVars} className={styles.description}>
          We specialize in high-performance fullstack web and mobile
          applications. From modern frameworks to legacy system support.
        </motion.p>

        <motion.div variants={itemVars} className={styles.actions}>
          <Link href="#work">
            <button className="sharp-btn">View Our Work</button>
          </Link>
          <Link href="#contact">
            <button
              className="sharp-btn"
              style={{
                background: "transparent",
                color: "#fff",
                border: "1px solid #fff",
              }}
            >
              Contact Us
            </button>
          </Link>
        </motion.div>
      </motion.div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
        }}
      />
    </section>
  );
}
