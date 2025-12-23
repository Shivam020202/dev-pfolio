import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          DEV<span className="text-blue-500">GROUP</span>
        </Link>

        <div className={styles.navLinks}>
          <Link href="#services" className={styles.link}>
            Services
          </Link>
          <Link href="#work" className={styles.link}>
            Work
          </Link>
          <Link href="#process" className={styles.link}>
            Process
          </Link>
        </div>

        <Link href="#contact">
          <button className={`sharp-btn ${styles.cta}`}>Let's Talk</button>
        </Link>
      </div>
    </nav>
  );
}
