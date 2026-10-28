import styles from "./code.module.css";

export const metadata = {
  title: "Code | Apurv Kulkarni",
};

const profiles = [
  {
    label: "GitHub",
    description: "Projects, experiments, and open-source contributions.",
    href: "https://github.com/apurv-kulkarni-01",
    url: "github.com/apurv-kulkarni-01",
  },
  {
    label: "LeetCode",
    description: "Problem-solving practice and coding challenges.",
    href: "https://leetcode.com/u/dev-apurv",
    url: "leetcode.com/u/dev-apurv",
  },
];

export default function CodePage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>NOTES, PROJECTS &amp; PRACTICE</p>
        <h1>Code<span>.</span></h1>
        <p className={styles.lead}>
          A few places to explore what I build and how I keep learning.
        </p>
      </header>

      <section className={styles.profiles} aria-label="Coding profiles">
        {profiles.map((profile, index) => (
          <article className={styles.profile} key={profile.label}>
            <span className={styles.number}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className={styles.profileCopy}>
              <h2>{profile.label}</h2>
              <p>{profile.description}</p>
            </div>
            <a href={profile.href} target="_blank" rel="noopener noreferrer">
              {profile.url} <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </section>
    </div>
  );
}
