// hamburger.tsx
"use client";
import Hamburger from "hamburger-react";

export default function HamburgerComponent({
  className,
  isOpen,
  setOpen,
}: any) {
  return (
    <div className={className}>
      <Hamburger size={25} toggled={isOpen} toggle={setOpen} />
    </div>
  );
}
