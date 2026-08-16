"use client";

import { tools } from "@/lib/content";

export default function Tools() {
  const loop = [...tools, ...tools];

  return (
    <section id="tools" className="relative overflow-hidden border-y border-line bg-bg py-10">
      <div className="flex whitespace-nowrap">
        <div className="animate-[marquee_28s_linear_infinite] flex gap-12 pr-12">
          {loop.map((t, i) => (
            <span
              key={i}
              className="font-display text-3xl tracking-wide text-paper/20 sm:text-4xl"
            >
              {t}
              <span className="ml-12 text-crimson">/</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
