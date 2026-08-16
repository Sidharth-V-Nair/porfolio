"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { profile, socials } from "@/lib/content";
import Timecode from "./Timecode";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-bg-elevated py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="mb-6 font-mono text-xs tracking-[0.25em] text-crimson-bright">
          GET IN TOUCH
        </p>

        <motion.a
          href={`mailto:${profile.email}`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="group flex flex-wrap items-center gap-4 font-display text-[11vw] leading-[0.9] text-paper transition-colors hover:text-crimson-bright sm:text-6xl md:text-7xl"
        >
          {profile.email}
          <ArrowUpRight
            size={48}
            className="mb-2 transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"
          />
        </motion.a>

        <div className="mt-16 flex flex-col gap-8 border-t border-line pt-8 sm:flex-row sm:items-end sm:justify-between">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs tracking-[0.15em] text-ash transition-colors hover:text-crimson-bright"
                >
                  {s.label.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 font-mono text-xs text-ash">
            <span>SESSION</span>
            <Timecode />
          </div>
        </div>

        <p className="mt-10 font-mono text-[11px] text-ash/60">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </p>
      </div>
    </section>
  );
}
