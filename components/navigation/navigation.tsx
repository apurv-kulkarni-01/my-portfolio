import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

const NavigationBar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/" passHref>
        <div className={styles.logoWrapper}>
          <Image
            src="/apurv.svg"
            alt="Logo"
            width={40}
            height={40}
            className={styles.logo}
            priority
          />
        </div>
      </Link>
      <div className={styles.links}>
        <Link href="/about" className={styles.linkItem}>
          About
        </Link>
        <Link href="/contact" className={styles.linkItem}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
