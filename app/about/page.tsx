import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About | Apurv Kulkarni",
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>A LITTLE ABOUT ME</p>
        <h1>About<span>.</span></h1>
        <p className={styles.lead}>
          Software, problem-solving, and the things that keep me curious.
        </p>
      </header>

      <section className={styles.profile} aria-label="About Apurv">
        <div className={styles.portraitFrame}>
          <Image
            src="/profile.jpeg"
            alt="Apurv Kulkarni"
            fill
            sizes="(max-width: 700px) 80vw, 300px"
            className={styles.portrait}
          />
        </div>
        <div className={styles.bio}>
          <p>
            Hi, I’m Apurv, a software developer with 2.5 years of experience
            building full-stack web applications with the MERN stack. I enjoy
            turning complex problems into digital experiences that feel clear,
            useful, and easy to use.
          </p>
          <p>
            I work across React and Next.js frontends, Node.js and Express
            APIs, and data stores including PostgreSQL, Firebase Realtime
            Database, and MongoDB. I’ve also worked with Go, Python, Azure,
            Docker, and Git.
          </p>
          <p>
            I’ve contributed to agile teams and shipped production features.
            Outside of work, I enjoy exploring product design, following
            FinTech, and playing guitar.
          </p>
          <p className={styles.signoff}>Let’s build something useful together.</p>
        </div>
      </section>
    </div>
  );
}
