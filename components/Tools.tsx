"use client";

const tools = [
  {
    name: "Premiere Pro",
    icon: "https://www.adobe.com/cc-shared/assets/img/product-icons/svg/premiere-pro.svg",
    color: "#9999FF",
  },
  {
    name: "After Effects",
    icon: "https://www.adobe.com/cc-shared/assets/img/product-icons/svg/after-effects.svg",
    color: "#9999FF",
  },
  {
    name: "DaVinci Resolve",
    icon: "https://cdn.simpleicons.org/davinciresolve/FFFFFF",
    color: "#233A51",
  },
  {
    name: "Blender",
    icon: "https://cdn.simpleicons.org/blender/E87D0D",
    color: "#E87D0D",
  },
  {
    name: "Photoshop",
    icon: "https://www.adobe.com/cc-shared/assets/img/product-icons/svg/photoshop.svg",
    color: "#31A8FF",
  },
  {
    name: "Illustrator",
    icon: "https://www.adobe.com/cc-shared/assets/img/product-icons/svg/illustrator.svg",
    color: "#FF9A00",
  },
];

export default function Tools() {
  return (
    <section
      id="tools"
      className="relative border-y border-white/5 bg-bg py-16 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-6">
        {/* Label */}
        <p className="mb-10 text-center text-xs font-medium tracking-[0.2em] text-white/40 uppercase sm:text-sm">
          Tools I use daily
        </p>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="group relative flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:bg-white/[0.06] hover:shadow-[0_8px_30px_-12px] sm:py-7"
              style={
                {
                  "--brand": tool.color,
                } as React.CSSProperties
              }
            >
              {/* Soft brand glow on hover */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at center, ${tool.color}18 0%, transparent 70%)`,
                }}
              />

              {/* Icon */}
              <div className="relative z-10 flex h-12 w-12 items-center justify-center sm:h-14 sm:w-14">
                <img
                  src={tool.icon}
                  alt={tool.name}
                  width={48}
                  height={48}
                  className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110 sm:h-11 sm:w-11"
                  loading="lazy"
                />
              </div>

              {/* Name */}
              <span className="relative z-10 text-center text-sm font-medium text-white/50 transition-colors duration-300 group-hover:text-white/90">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}