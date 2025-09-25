import styles from "./code.module.css";

const Code = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.header}>The Code Lab</div>
      <div>
        Where my ‘Dark Passenger’ quietly cleans up bugs and crafts clean
        solutions.
        <br /> You can explore my coding journey, problem-solving practice, and
        open-source contributions here:
      </div>
      <div>
        🧑‍💻 GitHub:{" "}
        <a
          href="https://github.com/apurv-kulkarni-01"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          github.com/apurv-kulkarni-01
        </a>
      </div>
      <div>
        🏆 LeetCode:{" "}
        <a
          href="https://leetcode.com/u/dev-apurv"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          leetcode.com/u/dev-apurv
        </a>
      </div>
    </div>
  );
};

export default Code;
