"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { projects } from "@/lib/content";

export default function Work() {
  return (
    <section id="work" className="relative bg-bg-elevated py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-14 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-4 font-mono text-xs tracking-[0.25em] text-crimson-bright">
              SELECTED WORK
            </p>
            <h2 className="font-display text-4xl leading-[0.95] text-paper sm:text-5xl">
              The Reel
            </h2>
          </div>
          <p className="max-w-sm font-mono text-xs leading-relaxed text-ash">
            A running edit of recent cuts — replace these with your own projects
            and links in{" "}
            <code className="text-crimson-bright">lib/content.ts</code>.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
          {projects.map((p, i) => (
            <motion.a
              key={p.id}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: (i % 2) * 0.08,
                ease: "easeOut",
              }}
              className="work-card group relative flex aspect-[4/3] flex-col justify-end overflow-hidden bg-bg"
            >
              <Image
                src={p.cover}
                alt={p.title}
                fill
                className="object-cover opacity-70 transition-all duration-500 grayscale group-hover:scale-105 group-hover:opacity-90 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />

              <span className="absolute right-4 top-4 font-mono text-[11px] tracking-[0.15em] text-ash">
                {p.id} / {String(projects.length).padStart(2, "0")}
              </span>

              <span className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-paper/30 text-paper opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                <Play size={16} fill="currentColor" />
              </span>

              <div className="relative z-10 p-5">
                <p className="font-mono text-[11px] tracking-[0.15em] text-crimson-bright">
                  {p.category.toUpperCase()} · {p.year}
                </p>
                <h3 className="mt-1 font-display text-2xl text-paper sm:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-1 font-mono text-[11px] tracking-wide text-ash">
                  {p.role}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
