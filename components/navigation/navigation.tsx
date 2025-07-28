"use client";
import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import Hamburger from "hamburger-react";
import { useState } from "react";
import NavItems from "./navList";

const NavigationBar = () => {
  const [isOpen, setOpen] = useState(false);

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

      <div className={`${styles.links} ${isOpen ? styles.active : ""}`}>
        <NavItems isOpen={isOpen} setIsOpen={setOpen} />
      </div>

      <div className={styles.hamburger}>
        <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
      </div>
    </nav>
  );
};

export default NavigationBar;
