"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/lib/content";

const ITEMS_PER_PAGE = 6;

const categories = [
  "All",
  "Premiere Pro",
  "After Effects",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Blender",
  "AI Projects",
  "Content Creation",
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  const paginated = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filtered.slice(start, start + ITEMS_PER_PAGE);
  }, [filtered, currentPage]);

  function handleCategoryChange(cat: string) {
    setActiveCategory(cat);
    setCurrentPage(1);
  }

  return (
    <section id="work" className="relative bg-bg-elevated py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 font-mono text-[11px] tracking-[0.3em] text-crimson-bright">
              SELECTED WORK
            </p>
            <h2 className="font-display text-4xl leading-[0.95] text-paper sm:text-5xl">
              Projects
            </h2>
          </div>
        </div>

        {/* ============== SHOWREEL ============== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 overflow-hidden rounded-2xl border border-line bg-bg"
        >
          <div className="relative aspect-video w-full">
            <iframe
              src="https://www.youtube.com/embed/YAFUyPp_238?rel=0&modestbranding=1"
              title="Showreel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
          <div className="flex items-center justify-between border-t border-line px-6 py-4">
            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] text-crimson-bright">
                FEATURED
              </p>
              <h3 className="mt-1 font-display text-xl text-paper">
                Showreel 2025
              </h3>
            </div>
            <a
              href="https://www.youtube.com/watch?v=YAFUyPp_238"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-line px-4 py-2 font-mono text-[11px] tracking-wide text-ash transition-colors hover:border-crimson-bright hover:text-crimson-bright"
            >
              <Play size={12} fill="currentColor" />
              Watch on YouTube
            </a>
          </div>
        </motion.div>

        {/* ============== FILTERS ============== */}
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`rounded-full px-4 py-2 font-mono text-[11px] tracking-[0.12em] transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-crimson-bright text-paper"
                  : "border border-line bg-bg text-ash hover:border-crimson-bright/50 hover:text-paper"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ============== PROJECT GRID ============== */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {paginated.map((p, i) => (
              <motion.a
                key={p.id}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-xl border border-line bg-bg"
              >
                <Image
                  src={p.cover}
                  alt={p.title}
                  fill
                  className="object-cover opacity-70 transition-all duration-700 grayscale group-hover:scale-105 group-hover:opacity-90 group-hover:grayscale-0"
                />

                {/* gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />

                {/* number */}
                <span className="absolute right-4 top-4 font-mono text-[11px] tracking-[0.15em] text-ash">
                  {p.id}
                </span>

                {/* hover play / external icon */}
                <span className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-paper/25 bg-bg/40 text-paper opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                  {p.type === "youtube" ? (
                    <Play size={15} fill="currentColor" />
                  ) : (
                    <ExternalLink size={15} />
                  )}
                </span>

                {/* content */}
                <div className="relative z-10 p-5">
                  <p className="font-mono text-[10px] tracking-[0.18em] text-crimson-bright">
                    {p.category.toUpperCase()} · {p.year}
                  </p>
                  <h3 className="mt-1.5 font-display text-xl leading-tight text-paper sm:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] tracking-wide text-ash">
                    {p.role}
                  </p>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>

        {/* ============== PAGINATION ============== */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-4">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ash transition-colors hover:border-crimson-bright hover:text-crimson-bright disabled:opacity-30"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    currentPage === i + 1
                      ? "w-6 bg-crimson-bright"
                      : "bg-line hover:bg-ash"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ash transition-colors hover:border-crimson-bright hover:text-crimson-bright disabled:opacity-30"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}

        {/* empty state */}
        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <p className="font-mono text-sm text-ash">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
