"use client";
import styles from "./page.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400"] });

import React, { useEffect, useState } from "react";

export default function SubTitle() {
  const names = ["full-stack developer.", "tech enthusiast.", "researcher."];
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
    <ul className={`${styles.list} ${styles.subTitle} ${inter.className}`}>
      <li
        key={names[index]}
        className={fade ? styles.listItemFadeIn : styles.listItemFadeOut}
      >
        {names[index]}
      </li>
    </ul>
  );
}
