"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { about } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="relative bg-bg py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-2 md:px-10">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative order-2 aspect-[5/5] w-full overflow-hidden rounded-[2rem] border border-line bg-bg shadow-[0_30px_80px_rgba(0,0,0,0.35)] md:order-1"
        >
          <Image
            src="/images/action-shot.jpg"
            alt="Behind the scenes, camera in hand"
            fill
            className="about-photo h-full w-full object-cover grayscale contrast-125"
            style={{ objectPosition: "center 15%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/20 via-transparent to-transparent" />
          <div className="absolute inset-0 ring-1 ring-inset ring-crimson/20" />
          {/* <span className="absolute bottom-3 left-3 font-mono text-[10px] tracking-[0.2em] text-paper/80">
            ON SET
          </span> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="order-1 flex flex-col justify-center md:order-2"
        >
          <p className="mb-4 font-mono text-xs tracking-[0.25em] text-crimson-bright">
            ABOUT
          </p>
          <h2 className="font-display text-4xl leading-[0.95] text-paper sm:text-5xl">
            {about.heading}
          </h2>

          <div className="mt-8 space-y-5">
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                className="max-w-lg text-sm leading-relaxed text-ash md:text-base"
              >
                {p}
              </p>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-8">
            {about.stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl text-paper">{s.value}</p>
                <p className="mt-1 font-mono text-[11px] tracking-[0.15em] text-ash">
                  {s.label.toUpperCase()}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
