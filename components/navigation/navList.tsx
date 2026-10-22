import Link from "next/link";
import styles from "./page.module.css";

type Props = { side: "left" | "right" };

const items = {
  left: [
    { href: "/experience", label: "Experience", icon: "experience" },
    { href: "/code", label: "Work", icon: "work" },
  ],
  right: [
    { href: "/about", label: "About", icon: "about" },
    { href: "/contact", label: "Contact", icon: "contact" },
  ],
};

function Icon({ name }: { name: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  if (name === "home") return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><path d="m3.5 10 8.5-7 8.5 7"/><path d="M5.5 9v11h13V9M9.5 20v-6h5v6"/></svg>;
  if (name === "experience") return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><rect x="3.5" y="7" width="17" height="13" rx="2"/><path d="M8 7V4.5h8V7M3.5 12h17M10 12v2h4v-2"/></svg>;
  if (name === "work") return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><rect x="4" y="4" width="16" height="13" rx="1.5"/><path d="M2.5 20h19l-1.5-3H4z"/></svg>;
  if (name === "about") return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><circle cx="12" cy="8" r="3.2"/><path d="M5.5 20c.5-3.5 2.8-5.3 6.5-5.3s6 1.8 6.5 5.3"/></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...common}><rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="m4.5 7 7.5 6 7.5-6"/></svg>;
}

export default function NavItems({ side }: Props) {
  return (
    <div className={styles.links}>
      {items[side].map((item) => (
        <Link href={item.href} className={styles.linkItem} key={item.label} aria-label={item.label} title={item.label}>
          <Icon name={item.icon} />
          <span className={styles.linkLabel}>{item.label}</span>
        </Link>
      ))}
    </div>
  );
}
