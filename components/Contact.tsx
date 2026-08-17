"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Mail, MapPin } from "lucide-react";
import { profile, socials } from "@/lib/content";
import Timecode from "./Timecode";

const location =
  "Perumanamadom (H), Kizhakumuri, Kavumbhagom P.O, Thiruvalla, Kerala – 689102";

const googleMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Perumanamadom%20(H)%2C%20Kizhakumuri%2C%20Kavumbhagom%20P.O%2C%20Thiruvalla%2C%20Kerala%20689102";

const mapEmbedUrl =
  "https://www.google.com/maps?q=Perumanamadom%20(H)%2C%20Kizhakumuri%2C%20Kavumbhagom%20P.O%2C%20Thiruvalla%2C%20Kerala%20689102&output=embed";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-bg py-20 md:py-24 lg:py-28"
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 12% 35%, rgba(106,17,27,0.22), transparent 65%)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* =====================================================
            MAIN CONTACT CONTENT
        ====================================================== */}
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-20">
          {/* =================================================
              LEFT — MAIN CTA
          ================================================== */}
          <div className="lg:pt-20">
            <motion.p
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="mb-5 inline-flex items-center gap-3 font-mono text-[10px] font-semibold tracking-[0.35em] text-crimson-bright sm:text-[11px]"
            >
              <span className="h-px w-8 bg-crimson-bright/80" />
              LET&apos;S WORK TOGETHER
            </motion.p>

            <motion.h2
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-3xl font-[family-name:var(--font-anton)] text-[13vw] uppercase leading-[0.88] tracking-[0.005em] text-paper sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5rem]"
            >
              Let&apos;s build
              <br />
              something <span className="text-crimson-bright">great.</span>
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.6,
                delay: 0.12,
                ease: "easeOut",
              }}
              className="mt-7 max-w-lg font-[family-name:var(--font-space-grotesk)] text-sm leading-7 text-ash md:text-[15px]"
            >
              Have a project, an opportunity, or an interesting idea? Let&apos;s
              turn it into something meaningful.
            </motion.p>
          </div>

          {/* =================================================
              RIGHT — MAP + EMAIL
          ================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full max-w-[500px] lg:justify-self-end"
          >
            {/* =================================================
                MAP HEADER
            ================================================== */}
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-crimson-bright" />

                <p className="font-mono text-[10px] font-semibold tracking-[0.32em] text-paper">
                  FIND ME ON <span className="text-crimson-bright">MAP</span>
                </p>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open location in Google Maps"
                className="group flex items-center gap-1.5 font-mono text-[9px] tracking-[0.12em] text-ash transition-colors duration-300 hover:text-crimson-bright"
              >
                OPEN
                <ExternalLink
                  size={11}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            {/* =================================================
                SMALL MAP
            ================================================== */}
            <div className="overflow-hidden border border-line bg-[#0d0d0d]">
              <div className="group relative h-[145px] overflow-hidden sm:h-[160px]">
                <iframe
                  src={mapEmbedUrl}
                  title="Location on Google Maps"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full border-0 grayscale-[0.9] contrast-[0.9] brightness-[0.85] transition-all duration-700 group-hover:grayscale-[0.55] group-hover:brightness-100"
                />

                {/* Subtle map tint */}
                <div
                  className="pointer-events-none absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:opacity-0"
                  aria-hidden="true"
                />

                {/* Map CTA */}
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/map absolute bottom-3 left-3 inline-flex items-center gap-2 bg-black/85 px-3.5 py-2 font-[family-name:var(--font-space-grotesk)] text-[10px] font-semibold text-paper backdrop-blur-md transition-all duration-300 hover:bg-crimson-bright"
                >
                  <MapPin
                    size={12}
                    className="text-crimson-bright transition-colors duration-300 group-hover/map:text-paper"
                  />

                  <span>View on Google Maps</span>

                  <ArrowRight
                    size={11}
                    className="transition-transform duration-300 group-hover/map:translate-x-1"
                  />
                </a>
              </div>

              {/* =================================================
                  ADDRESS
              ================================================== */}
              <div className="border-t border-line bg-bg-elevated/70 px-4 py-3">
                <div className="flex items-start gap-2.5">
                  <MapPin
                    size={13}
                    className="mt-0.5 shrink-0 text-crimson-bright"
                  />

                  <p className="font-[family-name:var(--font-space-grotesk)] text-[10px] leading-[1.55] text-ash">
                    {location}
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                EMAIL CTA
            ================================================== */}
            <a
              href={`mailto:${profile.email}`}
              className="group mt-4 flex w-full items-center justify-between gap-5 overflow-hidden bg-crimson-bright px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_16px_40px_rgba(106,17,27,0.22)]"
            >
              <span className="flex min-w-0 items-center gap-3 font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-paper">
                <Mail size={16} className="shrink-0" />

                <span className="truncate">{profile.email}</span>
              </span>

              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-paper/15 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={15} className="text-paper" />
              </span>
            </a>

            <p className="mt-2.5 font-mono text-[9px] tracking-[0.15em] text-ash/60">
              USUALLY REPLIES WITHIN 24 HRS
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            FOOTER
        ====================================================== */}
        <div className="mt-16 border-t border-line pt-7 md:mt-20">
          <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
            {/* Social links */}
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[10px] tracking-[0.15em] text-ash transition-colors duration-300 hover:text-crimson-bright sm:text-xs"
                  >
                    {s.label.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>

            {/* Session */}
            <div className="flex items-center gap-3 font-mono text-[10px] text-ash sm:text-xs">
              <span>SESSION</span>

              <span className="h-px w-4 bg-line" />

              <Timecode />
            </div>
          </div>

          {/* Copyright */}
          <p className="mt-8 font-mono text-[10px] text-ash/50">
            © {new Date().getFullYear()} {profile.name}.
          </p>
        </div>
      </div>
    </section>
  );
}
