import Link from "next/link";
import styles from "./page.module.css";

const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Where you sniffing around?! sus!</h1>
      <img src="/not-found.jpg" className={styles.image} />
      <div className={styles.links}>
        <Link href="/" className={styles.linkButton}>
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
