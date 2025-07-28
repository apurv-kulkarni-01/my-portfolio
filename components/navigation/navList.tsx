import Link from "next/link";
import styles from "./page.module.css";

type Props = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};


export default function NavItems({ isOpen, setIsOpen }: Props) {
  return (
    <>
      <Link href="/about" className={styles.linkItem} onClick={() => setIsOpen(false)}>
        About
      </Link>
      <Link href="/contact" className={styles.linkItem} onClick={() => setIsOpen(false)}>
        Contact
      </Link>
    </>
  );
}
