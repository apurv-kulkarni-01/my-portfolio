import Link from "next/link";
import styles from "./experience.module.css";

const experiences = [
  {
    label: "FULL-TIME EXPERIENCE",
    title: "Software Developer",
    company: "5paisa Capital Limited",
    dates: "July 2025 · Thane, India",
    description:
      "Developed and enhanced fintech platforms, developer-facing APIs, and backend infrastructure across 5paisa's trading ecosystem. Worked across the full development lifecycle, from building user-facing features and backend services to cloud deployment, performance optimisation, monitoring, and real-time alerting.",
    highlights: [
      {
        title: "Trading Platform Engineering",
        description: (
          <>
            Enhanced 5paisa's flagship{" "}
            <a
              className={styles.externalLink}
              href="https://www.5paisa.com/technology/fno360-derivatives-trading"
              target="_blank"
              rel="noopener noreferrer"
            >
              FnO derivatives trading platform
            </a>{" "}
            and{" "}
            <a
              className={styles.externalLink}
              href="https://www.5paisa.com/technology/web-platform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Trader's Terminal
            </a>{" "}
            using React.js and TypeScript. Developed new features and leveraged
            Sentry for performance monitoring and error tracking to improve load
            times, application stability, and user experience.
          </>
        ),
      },
      {
        title: "Developer API Platform & Cloud Deployment",
        description: (
          <>
            Designed, developed, and deployed{" "}
            <a
              className={styles.externalLink}
              href="https://xstream.5paisa.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Xstream
            </a>
            , a developer API platform for professional traders, alongside{" "}
            <a
              className={styles.externalLink}
              href="https://github.com/OpenApi-5p"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open API
            </a>
            . Owned end-to-end implementation spanning infrastructure planning,
            Azure DevOps pipelines, and application development using Next.js,
            React.js, Material UI, MySQL, and Strapi. Containerised and deployed
            services using Docker, Azure Container Registry, and Azure App
            Service.
          </>
        ),
      },
      {
        title: "Observability & Incident Management",
        description:
          "Built an error logging and visualisation system using Node.js, Express.js, ClickHouse, Grafana, and Azure. Developed proactive error alerting with the ELK Stack and PagerDuty to improve issue visibility, accelerate debugging, and strengthen application reliability.",
      },
      {
        title: "Real-Time Advisory & Alerting Systems",
        description:
          "Developed Salah, a real-time trading advisory engine using Node.js, Express.js, WebSockets, Firebase, MySQL, and Azure to broadcast and track trading advisories. Also worked on alerting engines across 5paisa's mobile and web applications to support timely, reliable notifications.",
      },
    ],
  },
  {
    label: "PREVIOUS ROLE",
    title: "Software Development Intern",
    company: "5paisa Capital Limited",
    dates: "May 2024 · Thane, India",
    description:
      "Developed backend automation tools and secure APIs to improve testing efficiency and deliver reliable integrations across 5paisa's trading and charting platforms.",
    highlights: [
      {
        title: "Backend automation",
        description:
          "Built a Node.js and Express.js automation system with MS SQL to capture OTPs from mobile devices and relay them to desktop browsers, reducing manual effort during transaction testing workflows.",
      },
      {
        title: "Secure API development & integration",
        description: (
          <>
            Designed secure REST APIs using Node.js, Express.js, Firebase
            Realtime Database, and MySQL, implementing JWT authentication, rate
            limiting, and HTTP security optimisations. Integrated these APIs
            across{" "}
            <a
              className={styles.externalLink}
              href="https://www.5paisa.com/technology/fno360-derivatives-trading"
              target="_blank"
              rel="noopener noreferrer"
            >
              FnO
            </a>
            ,{" "}
            <a
              className={styles.externalLink}
              href="https://www.5paisa.com/technology/web-platform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Trader's Terminal
            </a>{" "}
            (then called Tradestation), Charts, and Login using React.js,
            AngularJS, TypeScript, and JavaScript.
          </>
        ),
      },
    ],
  },
];

export const metadata = {
  title: "Experience | Apurv Kulkarni",
  description:
    "Professional experience and selected contributions by Apurv Kulkarni.",
};

export default function ExperiencePage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>A LOOK AT THE WORK BEHIND THE WORK</p>
        <h1>
          Experience<span>.</span>
        </h1>
        <p className={styles.lead}>
          Teams, products, and problems I’ve had the chance to work on.
        </p>
      </header>

      <section className={styles.timeline} aria-label="Experience entries">
        <div className={styles.sectionLabel}>
          <span>01 — WORK HISTORY</span>
          <span>ROLE / IMPACT</span>
        </div>
        {experiences.map((experience, index) => (
          <article
            className={styles.roleCard}
            key={`${experience.title}-${experience.label}`}
          >
            <div className={styles.roleTop}>
              <div>
                <p className={styles.roleIndex}>{experience.label}</p>
                <h2>{experience.title}</h2>
                <p className={styles.company}>{experience.company}</p>
              </div>
              <p className={styles.dates}>{experience.dates}</p>
            </div>
            <p className={styles.description}>{experience.description}</p>
            <ul className={styles.highlights}>
              {experience.highlights.map((highlight, highlightIndex) => (
                <li key={highlight.title}>
                  <span>{String(highlightIndex + 1).padStart(2, "0")} —</span>
                  <span>
                    <strong>{highlight.title}</strong>
                    <br />
                    {highlight.description}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <footer className={styles.footer}>
        <p className={styles.eyebrow}>NEXT UP</p>
        <div>
          <h2>Something we could build together?</h2>
          <Link href="/contact">
            Get in touch <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}
