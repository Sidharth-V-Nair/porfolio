// ─────────────────────────────────────────────────────────
// Edit everything here. This is the only file you need to
// touch to personalize the site with your own copy.
// ─────────────────────────────────────────────────────────

export const profile = {
  name: "Sidharth V Nair",
  role: "Video Editor & Motion Designer",
  location: "Kerala, India",
  tagline:
    "I cut stories out of raw footage — rhythm, color, and motion built for the scroll and the screen.",
  email: "hello@yourname.com",
  reelYearsActive: "2021 — Present",
};

export const socials = [
  { label: "Instagram", href: "https://instagram.com/yourhandle" },
  { label: "Behance", href: "https://behance.net/yourhandle" },
  { label: "YouTube", href: "https://youtube.com/@yourhandle" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourhandle" },
];

export const about = {
  heading: "Behind every cut, a decision.",
  paragraphs: [
    "I'm a video editor and motion designer working across brand films, music videos, and social-first content. My job starts where the footage ends — finding the rhythm, building the pace, and giving raw clips a reason to hold attention.",
    "Every project moves through the same discipline: a rough assembly for structure, a fine cut for rhythm, then color and motion to finish the mood. Software changes. That process doesn't.",
  ],
  stats: [
    { value: "60+", label: "Projects cut" },
    { value: "4", label: "Years editing" },
    { value: "12", label: "Brands worked with" },
  ],
};

export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  role: string;
  cover: string; // path in /public/images
};

// Swap these for your real work — thumbnails, titles, links.
export const projects: Project[] = [
  {
    id: "01",
    title: "Midnight Run",
    category: "Music Video",
    year: "2026",
    role: "Edit · Color · VFX",
    cover: "/images/hero-portrait.jpg",
  },
  {
    id: "02",
    title: "Signal / Noise",
    category: "Brand Film",
    year: "2025",
    role: "Edit · Motion Graphics",
    cover: "/images/action-shot.jpg",
  },
  {
    id: "03",
    title: "After Hours",
    category: "Short Documentary",
    year: "2025",
    role: "Edit · Sound Design",
    cover: "/images/hero-portrait.jpg",
  },
  {
    id: "04",
    title: "Field Notes",
    category: "Social Campaign",
    year: "2024",
    role: "Edit · Captions · Motion",
    cover: "/images/action-shot.jpg",
  },
];

export const tools = [
  "Premiere Pro",
  "After Effects",
  "DaVinci Resolve",
  "Cinema 4D",
  "Photoshop",
  "Lightroom",
  "Audition",
  "Blender",
];
