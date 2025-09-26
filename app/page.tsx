import SubTitle from "../components/subtitle/subTitle";
import styles from "./page.module.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // you can add more weights if needed
});

type HeaderProps = {
  title?: string;
  className: string;
};

function Header({ title, className }: HeaderProps) {
  return (
    <h1 className={`${className} ${poppins.className}`}>
      {title ? title : "Default title"}
    </h1>
  );
}

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Header title="Apurv Kulkarni" className={styles.header} />
      <SubTitle />
    </div>
  );
}
