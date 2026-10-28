import styles from "./contact.module.css";

export const metadata = {
  title: "Contact | Apurv Kulkarni",
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>HAVE SOMETHING IN MIND?</p>
        <h1>Contact<span>.</span></h1>
        <p className={styles.lead}>
          Have a project to discuss, want to collaborate, or just want to say
          hello? I’d be glad to hear from you.
        </p>
      </header>

      <section className={styles.contactOptions} aria-label="Contact details">
        <a className={styles.contactOption} href="mailto:apurvkulkarni.au@gmail.com">
          <span className={styles.label}>EMAIL</span>
          <span className={styles.value}>apurvkulkarni.au@gmail.com</span>
          <span className={styles.arrow} aria-hidden="true">↗</span>
        </a>
        <a
          className={styles.contactOption}
          href="https://www.linkedin.com/in/apurv-kulkarni/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.label}>LINKEDIN</span>
          <span className={styles.value}>linkedin.com/in/apurv-kulkarni</span>
          <span className={styles.arrow} aria-hidden="true">↗</span>
        </a>
      </section>
    </div>
  );
}
