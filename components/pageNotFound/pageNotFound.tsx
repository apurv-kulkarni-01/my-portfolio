import Link from "next/link";
import styles from "./page.module.css";

const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>404 · OFF THE MAP</p>
        <p className={styles.number} aria-hidden="true">404</p>
        <h1 className={styles.heading}>This page took a wrong turn.</h1>
        <p className={styles.message}>
          I checked the usual places. It seems to have gone for a little walk.
        </p>
        <Link href="/" className={styles.linkButton}>
          Back to the homepage <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
