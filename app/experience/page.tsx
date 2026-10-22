import Link from "next/link";
import styles from "./experience.module.css";

const experiencePrompts = ["Your role title", "Company or team", "Dates · Location", "Summarize what you owned, who you worked with, and the value your work delivered."];

export const metadata = {
  title: "Experience | Apurv Kulkarni",
  description: "Professional experience and selected contributions by Apurv Kulkarni.",
};

export default function ExperiencePage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>A LOOK AT THE WORK BEHIND THE WORK</p>
        <h1>Experience<span>.</span></h1>
        <p className={styles.lead}>Teams, products, and problems I’ve had the chance to work on.</p>
      </header>

      <section className={styles.timeline} aria-label="Experience entries">
        <div className={styles.sectionLabel}><span>01 — WORK HISTORY</span><span>ROLE / IMPACT</span></div>
        <article className={styles.roleCard}>
          <div className={styles.roleTop}>
            <div><p className={styles.roleIndex}>MOST RECENT</p><h2>{experiencePrompts[0]}</h2><p className={styles.company}>{experiencePrompts[1]}</p></div>
            <p className={styles.dates}>{experiencePrompts[2]}</p>
          </div>
          <p className={styles.description}>{experiencePrompts[3]}</p>
          <ul className={styles.highlights}>
            <li><span>01</span><span>Add a project, responsibility, or technical challenge you took on.</span></li>
            <li><span>02</span><span>Describe a result, improvement, or lesson you can point to.</span></li>
          </ul>
        </article>
        <article className={styles.roleCard}>
          <div className={styles.roleTop}>
            <div><p className={styles.roleIndex}>PREVIOUS ROLE</p><h2>Another role title</h2><p className={styles.company}>Company or team</p></div>
            <p className={styles.dates}>Dates · Location</p>
          </div>
          <p className={styles.description}>Add another position here when you’re ready to show more of your journey.</p>
        </article>
      </section>

      <footer className={styles.footer}>
        <p className={styles.eyebrow}>NEXT UP</p>
        <div><h2>Something we could build together?</h2><Link href="/contact">Get in touch <span aria-hidden="true">↗</span></Link></div>
      </footer>
    </div>
  );
}
