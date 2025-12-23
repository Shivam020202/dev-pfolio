"use client";

import { useState } from "react";
import styles from "./Contact.module.css";
import FadeIn from "./FadeIn";

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className={styles.section}>
      <FadeIn className="container">
        <div className="text-center">
          <h2 className="text-secondary text-sm uppercase tracking-[0.2em] mb-2">
            Get In Touch
          </h2>
          <h3 className="text-4xl font-bold">Start Your Project</h3>
        </div>

        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <input type="text" name="name" id="name" required />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input type="email" name="email" id="email" required />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea name="message" id="message" rows={4} required />
            </div>

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className={`${styles.status} ${styles.success}`}>
                Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className={`${styles.status} ${styles.error}`}>
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </FadeIn>
    </section>
  );
}
