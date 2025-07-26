import SubTitle from "../components/subtitle/subTitle";
import styles from "./page.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

type HeaderProps = {
  title?: string;
  className: string;
};

function Header({ title, className }: HeaderProps) {
  return (
    <h1 className={`${className} ${inter.className}`}>
      {title ? title : "Default title"}
    </h1>
  );
}

import React, { useEffect, useState } from "react";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Header title="Apurv Kulkarni" className={styles.header} />
      <SubTitle />
    </div>
  );
}
