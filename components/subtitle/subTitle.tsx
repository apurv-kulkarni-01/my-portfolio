"use client";
import styles from "./page.module.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], 
});

import React, { useEffect, useState } from "react";

export default function SubTitle() {
  // "bibliophile.",
  const names = [
    "full-stack developer.",
    "ai enthusiast.",
    "javaphile.",
    "serial thinker.",
    "wantrepreneur.",
    "guitar strummer.",
  ];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const fadeOutTimeout = setTimeout(() => setFade(false), 1800);
    const nextTimeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % names.length);
      setFade(true);
    }, 2200);
    return () => {
      clearTimeout(fadeOutTimeout);
      clearTimeout(nextTimeout);
    };
  }, [index]);

  return (
    <ul className={`${styles.list} ${styles.subTitle} ${poppins.className}`}>
      <li
        key={names[index]}
        className={fade ? styles.listItemFadeIn : styles.listItemFadeOut}
      >
        {names[index]}
      </li>
    </ul>
  );
}
