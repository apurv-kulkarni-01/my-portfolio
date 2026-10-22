import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const focusAreas = [
  { number: "01", title: "Full-stack products", detail: "React, Next.js & Node.js" },
  { number: "02", title: "Backend systems", detail: "APIs, data & integrations" },
  { number: "03", title: "Learning in public", detail: "Notes, experiments & ideas" },
];

export default function HomePage() {
  return (
    <div className={styles.page}>
      <aside className={styles.profileColumn}>
        <section className={styles.profileCard} aria-label="Apurv Kulkarni profile and contact">
          <div className={styles.portraitFrame}>
            <Image src="/profile.jpeg" alt="Portrait of Apurv Kulkarni" fill priority sizes="(max-width: 760px) 90vw, 340px" className={styles.portrait} />
          </div>
          <h1 className={styles.profileName}>Apurv Kulkarni</h1>
          <p className={styles.profileRole}>Software Engineer <span>·</span> Sydney, Australia</p>
          <div className={styles.profileAccent} aria-hidden="true"><span>✳</span></div>
          <p className={styles.profileDescription}>I build thoughtful web experiences and enjoy making complex problems feel simple.</p>
          <div className={styles.profileLinks}>
            <a href="https://github.com/apurv-kulkarni-01" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            <a href="https://www.linkedin.com/in/apurv-kulkarni/" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            <a href="mailto:apurvkulkarni.au@gmail.com">Email <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </aside>

      <main className={styles.contentColumn}>
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.eyebrow}><span className={styles.statusDot} /> SOFTWARE ENGINEER <span className={styles.eyebrowDivider}>/</span> OPEN TO GOOD IDEAS</div>
          <h2 id="hero-title">Building useful<br /><span>things for the web.</span></h2>
          <div className={styles.heroBottom}>
            <p className={styles.intro}>I’m a full-stack developer who enjoys turning complex problems into clear, thoughtful digital experiences.</p>
            <Link className={styles.textLink} href="/about">More about me <span aria-hidden="true">↗</span></Link>
          </div>
        </section>

        <section className={styles.workSection} aria-labelledby="work-title">
          <div className={styles.sectionHeading}>
            <div><p className={styles.kicker}>WHAT I’M INTO</p><h2 id="work-title">Work &amp; interests</h2></div>
            <Link className={styles.textLink} href="/code">Explore my code <span aria-hidden="true">↗</span></Link>
          </div>
          <div className={styles.focusList}>
            {focusAreas.map((item) => (
              <article className={styles.focusItem} key={item.number}>
                <span className={styles.itemNumber}>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <span className={styles.itemArrow} aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
          <p className={styles.workNote}>Selected projects are being added here.</p>
        </section>

        <section className={styles.notesSection} aria-labelledby="notes-title">
          <div className={styles.notesCopy}>
            <p className={styles.kicker}>NOTES FROM THE BUILD</p>
            <h2 id="notes-title">Good work comes<br />with good questions.</h2>
            <p className={styles.notesText}>I’m making space here for ideas, lessons learned, and things worth sharing along the way.</p>
          </div>
          <div className={styles.notesCard}><span className={styles.notesGlyph}>✳</span><span>WRITING &amp; IDEAS</span><span className={styles.comingSoon}>COMING SOON</span></div>
        </section>

        <section className={styles.contactSection} aria-labelledby="contact-title">
          <p className={styles.kicker}>HAVE SOMETHING IN MIND?</p>
          <div className={styles.contactRow}><h2 id="contact-title">Let’s work<br /><span>together.</span></h2><Link className={styles.contactButton} href="/contact">Get in touch <span aria-hidden="true">↗</span></Link></div>
          <div className={styles.footerMeta}><a href="mailto:apurvkulkarni.au@gmail.com">APURVKULKARNI.AU@GMAIL.COM</a><a href="https://www.linkedin.com/in/apurv-kulkarni/" target="_blank" rel="noopener noreferrer">LINKEDIN ↗</a><span>© {new Date().getFullYear()}</span></div>
        </section>
      </main>
    </div>
  );
}
