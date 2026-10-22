import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import NavItems from "./navList";

export default function NavigationBar() {
  return (
    <nav className={styles.navbar} aria-label="Main navigation">
      <div className={styles.navPill}>
        <NavItems side="left" />
        <span className={styles.separator} aria-hidden="true" />
        <Link href="/" className={styles.logoWrapper} aria-label="Apurv Kulkarni home">
          <Image
            src="/apurv.svg"
            alt="Apurv Kulkarni logo"
            width={40}
            height={40}
            className={styles.logo}
            priority
          />
        </Link>
        <span className={styles.separator} aria-hidden="true" />
        <NavItems side="right" />
      </div>
    </nav>
  );
}
