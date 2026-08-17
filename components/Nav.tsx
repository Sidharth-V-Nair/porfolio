"use client";
import { useEffect, useState } from "react";
import { profile } from "@/lib/content";

const links = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#work" },
  { label: "Tools", href: "#tools" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "border-b border-line/60 bg-bg/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#top"
          className="font-mono text-[11px] tracking-[0.22em] text-paper transition-colors hover:text-crimson-bright"
        >
          {profile.name.toUpperCase()}
        </a>

        <ul className="hidden gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-[11px] tracking-[0.18em] text-ash transition-colors duration-300 hover:text-paper"
              >
                {l.label.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
