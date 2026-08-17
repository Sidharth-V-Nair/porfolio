"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Video, Wand2, PenTool, Bot } from "lucide-react";
import { profile } from "@/lib/content";

const skills = [
  { icon: Video, label: "Video Editor" },
  { icon: Wand2, label: "Motion Graphics Designer" },
  { icon: PenTool, label: "Graphic Designer" },
  { icon: Bot, label: "AI Content Creator" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen w-full flex-col overflow-hidden bg-bg lg:grid lg:grid-cols-[1.1fr_0.9fr]"
    >
      {/* Soft cinematic glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 65% 50% at 80% 25%, rgba(106,17,27,0.55), transparent 60%)",
        }}
      />

      {/* Gentle vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(8,7,6,0.7) 100%)",
        }}
      />

      {/* Text column */}
      <div className="relative z-10 flex flex-col justify-between px-6 pb-16 pt-28 md:px-10 md:pb-20 lg:pt-40">
        {/* Main content */}
        <div className="mt-16 lg:mt-0">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-crimson-bright"
          >
            <span className="h-px w-8 bg-crimson-bright/80" />
            CREATIVE VISION. POWERFUL IMPACT.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.95,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-display text-[clamp(3.6rem,9vw,7.2rem)] font-medium leading-[0.9] tracking-[-0.015em] text-paper"
          >
            Sidharth V Nair{" "}
          </motion.h1>

          {/* Skills / badges */}
          <motion.ul
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 flex flex-col gap-3"
          >
            {skills.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 font-serif font-medium text-[11px] tracking-[0.15em] text-ash"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-crimson-bright/50 text-crimson-bright">
                  <Icon size={13} strokeWidth={2} />
                </span>
                {label.toUpperCase()}
              </li>
            ))}
          </motion.ul>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 max-w-[21rem] text-[15px] leading-[1.7] text-ash md:text-[16px]"
          >
            Crafting high-impact visual content that{" "}
            <span className="text-crimson-bright">connects, inspires,</span> and
            delivers results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="group relative inline-flex items-center gap-3 bg-crimson-bright px-7 py-3.5 font-mono text-[11px] tracking-[0.22em] text-bg transition-all duration-400 hover:opacity-90"
            >
              VIEW PROJECTS
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 border border-line-soft px-7 py-3.5 font-mono text-[11px] tracking-[0.22em] text-paper transition-all duration-400 hover:border-crimson-bright hover:text-crimson-bright"
            >
              RESUME
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </a>
          </motion.div>
        </div>

        {/* Scroll */}
        <a
          href="#work"
          className="mt-20 hidden items-center gap-3 font-mono text-[10px] tracking-[0.28em] text-ash/70 transition-colors hover:text-crimson-bright lg:flex"
        >
          <span className="block h-10 w-px bg-ash/40" />
          SCROLL
        </a>
      </div>

      {/* Portrait */}
      <div className="relative order-first h-[55vh] w-full sm:h-[63vh] lg:order-none lg:h-screen">
        <div className="portrait-mask absolute inset-0">
          <Image
            src="/images/hero-portrait.jpg"
            alt={`${profile.name}, ${profile.role}`}
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="hero-portrait object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_15%,rgba(106,17,27,0.4),transparent_55%)] mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-bg/50 via-transparent to-transparent lg:from-bg/30" />
        </div>

        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg to-transparent lg:hidden" />
      </div>
    </section>
  );
}
