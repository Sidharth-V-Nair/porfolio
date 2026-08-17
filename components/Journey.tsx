"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Target,
  Rocket,
  Clock,
  Handshake,
  Star,
  GraduationCap,
  PenTool,
  Film,
  Layers,
  Cpu,
  Crown,
} from "lucide-react";
import Image from "next/image";

const values = [
  {
    icon: Lightbulb,
    title: "Creativity",
    desc: "Every project is crafted with fresh ideas and a unique approach.",
  },
  {
    icon: Target,
    title: "Strategy",
    desc: "I create content that is aligned with your goals and audience.",
  },
  {
    icon: Rocket,
    title: "Quality",
    desc: "High-quality visuals that leave a lasting impression.",
  },
  {
    icon: Clock,
    title: "Efficiency",
    desc: "Smart workflow with AI tools to deliver faster without compromising quality.",
  },
  {
    icon: Handshake,
    title: "Reliability",
    desc: "Clear communication, on-time delivery and dedicated support.",
  },
  {
    icon: Star,
    title: "Passion",
    desc: "I love what I do and put my heart into every project.",
  },
];

const journey = [
  {
    year: "2021",
    icon: PenTool,
    desc: "Started my creative journey with design and visual communication.",
  },
  {
    year: "2022",
    icon: Film,
    desc: "Discovered my passion for storytelling through video editing.",
  },
  {
    year: "2023",
    icon: Layers,
    desc: "Expanded into motion graphics and animation to bring ideas to life.",
  },
  {
    year: "2024",
    icon: Cpu,
    desc: "Integrated AI tools into my workflow to create smarter and faster.",
  },
  {
    year: "2025-2026",
    icon: Crown,
    desc: "Continuing to grow, collaborate, and create impactful visual stories.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function Journey() {
  return (
    <section id="about" className="relative bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* ---- My Story ---- */}
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left: intro */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="mb-4 font-mono text-[11px] font-semibold tracking-[0.35em] text-crimson-bright">
              MY STORY
            </p>
            <h2 className="font-[family-name:var(--font-anton)] text-4xl uppercase leading-[1.02] tracking-[0.005em] text-paper md:text-[2.75rem]">
              Turning Ideas Into
              <br />
              Impactful{" "}
              <span className="text-crimson-bright">Visual Stories.</span>
            </h2>

            <div className="mt-7 space-y-4 font-[family-name:var(--font-space-grotesk)] text-[15px] leading-relaxed text-ash">
              <p>
                My journey began with a passion for storytelling and visuals.
                Over the past 4+ years, I&apos;ve worked with brands, businesses
                and creators to deliver videos and designs that not only look
                great but also achieve real results.
              </p>
              <p>
                I believe in blending creativity with technology. That&apos;s
                why I use AI-powered tools along with industry-standard software
                to create content that is faster, smarter and better.
              </p>
            </div>
          </motion.div>

          {/* Right: values grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.06,
                  ease: "easeOut",
                }}
                className="group rounded-sm border border-line bg-bg-elevated/60 p-6 transition-colors duration-300 hover:border-crimson-bright/50"
              >
                <Icon
                  size={26}
                  strokeWidth={1.6}
                  className="text-crimson-bright transition-transform duration-300 group-hover:-translate-y-0.5"
                />
                <h3 className="mt-4 font-mono text-[13px] font-semibold tracking-[0.12em] text-paper">
                  {title.toUpperCase()}
                </h3>
                <p className="mt-2 font-[family-name:var(--font-space-grotesk)] text-[13px] leading-relaxed text-ash">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ---- My Journey ---- */}
        <div className="mt-24 border-t border-line pt-16 md:mt-28 md:pt-20">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="mb-4 font-mono text-[11px] font-semibold tracking-[0.35em] text-crimson-bright">
              MY JOURNEY
            </p>
            <h2 className="font-[family-name:var(--font-anton)] text-3xl uppercase leading-[1.02] tracking-[0.005em] text-paper md:text-4xl">
              The Path That <span className="text-crimson-bright">Shaped</span>{" "}
              Me
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative mt-16">
            {/* connecting line */}
            <div className="absolute left-0 right-0 top-6 hidden h-px bg-line md:block" />

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-5 md:gap-6">
              {journey.map(({ year, icon: Icon, desc }, i) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                    ease: "easeOut",
                  }}
                  className="relative flex flex-col items-center text-center"
                >
                  <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-crimson-bright/60 bg-bg text-crimson-bright">
                    <Icon size={18} strokeWidth={1.8} />
                  </span>

                  <span className="mt-4 bg-crimson-bright px-3 py-1 font-mono text-[11px] font-bold tracking-[0.05em] text-paper">
                    {year}
                  </span>

                  <p className="mt-4 max-w-[13rem] font-[family-name:var(--font-space-grotesk)] text-[13px] leading-relaxed text-ash">
                    {desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ---- Education + Quote ---- */}
        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-sm border border-line bg-bg-elevated/60 p-8"
          >
            <p className="mb-6 font-mono text-[11px] font-semibold tracking-[0.35em] text-crimson-bright">
              EDUCATION
            </p>

            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-crimson-bright/60 text-crimson-bright">
                <GraduationCap size={22} strokeWidth={1.6} />
              </span>
              <div>
                <h3 className="font-[family-name:var(--font-anton)] text-xl uppercase tracking-[0.01em] text-paper">
                  BCA
                </h3>
                <p className="mt-1 font-[family-name:var(--font-space-grotesk)] text-sm text-ash">
                  Bachelor of Computer Applications
                </p>
                <p className="mt-1 font-mono text-[11px] tracking-[0.1em] text-crimson-bright">
                  2021 – 2024
                </p>
              </div>
            </div>

            <div className="mt-6 border-t border-line pt-6">
              <p className="font-[family-name:var(--font-space-grotesk)] text-[13px] leading-relaxed text-ash">
                Focused on building a strong foundation in computer
                applications, design principles, and digital creativity.
              </p>
            </div>
          </motion.div>

          {/* Quote + image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="relative overflow-hidden rounded-sm border border-line"
          >
            <div className="absolute inset-0">
              <Image
                src="/images/setup-wide.jpg"
                alt="Editing setup"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/85 to-bg/20" />
            </div>

            <div className="relative flex h-full flex-col justify-center p-8 md:p-10">
              <p className="max-w-xs font-[family-name:var(--font-space-grotesk)] text-xl leading-snug text-paper md:text-2xl">
                "I don&apos;t just edit videos, I craft{" "}
                <span className="text-crimson-bright">experiences</span> that
                leave a lasting{" "}
                <span className="text-crimson-bright">impact.</span>"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
