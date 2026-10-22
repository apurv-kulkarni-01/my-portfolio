import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.header}>Let’s Connect</div>
      <div>
        Whether you want to discuss a new project, collaborate on something
        exciting, or just say hello, I’d love to hear from you.
      </div>
      <div>
        📧 Email:{" "}
        <a href="mailto:apurvkulkarni.au@gmail.com" className={styles.link}>
          apurvkulkarni.au@gmail.com
        </a>
      </div>
      <div>
        💼 LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/apurv-kulkarni/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          linkedin.com/in/apurv-kulkarni
        </a>
      </div>
    </div>
  );
};

export default Contact;
