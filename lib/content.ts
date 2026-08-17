// ─────────────────────────────────────────────────────────
// Edit everything here. This is the only file you need to
// touch to personalize the site with your own copy.
// ─────────────────────────────────────────────────────────

export const profile = {
  name: "Sidharth V Nair",
  role: "Video Editor & Motion Graphics Designer",
  location:
    "Perumanamadom(H),Kizhakumuri,kavumbhagom P.O,Thiruvalla Pin:689102",
  tagline:
    "I cut stories out of raw footage — rhythm, color, and motion built for the scroll and the screen.",
  email: "sidharth200391@gmail.com",
  reelYearsActive: "2021 — Present",
  phone: "8089078938",
};

export const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/editby.sidhu?igsh=OXdiaTJuMGIwMGxl&utm_source=qr",
  },
  // { label: "Behance", href: "https://behance.net/yourhandle" },
  // { label: "YouTube", href: "https://youtube.com/@yourhandle" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sidharth-v-nair-63968a415?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
];

export const about = {
  heading: "Behind every cut, a decision.",
  paragraphs: [
   "I’m a Video Editor & Motion Graphics Designer focused on turning raw footage into engaging visual stories. I work across social media content, brand films, promotional videos, and motion-driven content, combining sharp editing, strong visual rhythm, and purposefull design.",
"My approach goes beyond simply cutting footage. I focus on storytelling, pacing, transitions, sound, color, typography, and motion to make every frame feel intentional and keep the audience engaged.",

"From the first rough cut to the final polished frame, I bring creativity and attention to detail into every project. The tools may change, but the goal stays the same creating visuals that communicate, connect, and leave an impact."
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
  cover: string;
  link: string;
  type: "drive" | "youtube";
};

export const projects: Project[] = [
  // Premiere Pro
  {
    id: "01",
    title: "Cinematic Cut – Premiere Edit",
    category: "Premiere Pro",
    year: "2025",
    role: "Edit · Color · Sound",
    cover: "/images/",
    link: "https://drive.google.com/file/d/1hnTYZHOzCeQVA1ekLLF73aXBpzUD10Nc/view?usp=sharing",
    type: "drive",
  },

  // After Effects
  {
    id: "02",
    title: "Motion Graphics Reel",
    category: "After Effects",
    year: "2025",
    role: "Animation · VFX · Motion",
    cover: "/images/",
    link: "https://drive.google.com/file/d/1pghr541ykyH16a5WxmGwoDXz1QBTaV17/view?usp=sharing",
    type: "drive",
  },
  {
    id: "03",
    title: "Title Sequence Design",
    category: "After Effects",
    year: "2025",
    role: "Motion Design · Typography",
    cover: "/images/",
    link: "https://drive.google.com/file/d/1hoDUZs-1Rdhu1aS1XYSQYxdLJGSbQRc-/view?usp=sharing",
    type: "drive",
  },
  {
    id: "04",
    title: "Abstract Visuals",
    category: "After Effects",
    year: "2024",
    role: "VFX · Animation",
    cover: "/images/",
    link: "https://drive.google.com/file/d/1_BLbt7jDwFPxuFoBgMaqlfBHQW0sDpXo/view?usp=sharing",
    type: "drive",
  },
  {
    id: "05",
    title: "Kinetic Typography",
    category: "After Effects",
    year: "2024",
    role: "Motion · Typography",
    cover: "/images/",
    link: "https://drive.google.com/file/d/1LV2uKMOQpJTHZYPHGNwG50voiMXZ-NSX/view?usp=sharing",
    type: "drive",
  },

  // AI Projects
  {
    id: "06",
    title: "AI Visual Experiment 01",
    category: "AI Projects",
    year: "2025",
    role: "Prompt · Generation · Edit",
    cover: "/images/",
    link: "https://drive.google.com/file/d/1Kl2omW9f8J3r8KBYnbACQOxHceMOZsCX/view?usp=sharing",
    type: "drive",
  },
  {
    id: "07",
    title: "AI Concept Art Series",
    category: "AI Projects",
    year: "2025",
    role: "AI · Art Direction",
    cover: "/images/",
    link: "https://drive.google.com/file/d/102ppoU3vt9z-M-dN-pe-kd7pEUGln0-d/view?usp=sharing",
    type: "drive",
  },

  // Blender
  {
    id: "08",
    title: "3D Product Visualization",
    category: "Blender",
    year: "2025",
    role: "Modeling · Lighting · Render",
    cover: "/images/",
    link: "https://drive.google.com/file/d/1mTYL7VOvWf3ZXq6cPQbReuULwbh4JPsV/view?usp=sharing",
    type: "drive",
  },
  {
    id: "09",
    title: "Environment Concept",
    category: "Blender",
    year: "2024",
    role: "3D · Look Development",
    cover: "/images/",
    link: "https://drive.google.com/file/d/1Nsim5QbfAw_DyvFwN-HDhVav5MMRW7R6/view?usp=sharing",
    type: "drive",
  },

  // Adobe Illustrator
  {
    id: "10",
    title: "Brand Identity System",
    category: "Adobe Illustrator",
    year: "2025",
    role: "Logo · Identity · Layout",
    cover: "/images/hero-portrait.jpg",
    link: "https://drive.google.com/file/d/1QA1cHMRcLrUZm61dF01CECzMpakq-xZc/view?usp=sharing",
    type: "drive",
  },
  {
    id: "11",
    title: "Poster Series",
    category: "Adobe Illustrator",
    year: "2024",
    role: "Illustration · Typography",
    cover: "/images/action-shot.jpg",
    link: "https://drive.google.com/file/d/1PLeBkMhRqbXteACrPIhliUZOudkUctX0/view?usp=sharing",
    type: "drive",
  },

  // Content Creation
  {
    id: "12",
    title: "Social Media Campaign",
    category: "Content Creation",
    year: "2025",
    role: "Edit · Captions · Motion",
    cover: "/images/hero-portrait.jpg",
    link: "https://drive.google.com/file/d/1rBjf-vkM6dc8PcX7LqaqX80MTowf7-sh/view?usp=sharing",
    type: "drive",
  },
  {
    id: "13",
    title: "Short Form Content Pack",
    category: "Content Creation",
    year: "2024",
    role: "Edit · Design · Strategy",
    cover: "/images/action-shot.jpg",
    link: "https://drive.google.com/file/d/1fCx-8qyjR29XC9rxCh2RqD__vD-zfS9c/view?usp=sharing",
    type: "drive",
  },

  // Adobe Photoshop
  {
    id: "14",
    title: "Photo Manipulation Series",
    category: "Adobe Photoshop",
    year: "2025",
    role: "Retouch · Composite",
    cover: "/images/hero-portrait.jpg",
    link: "https://drive.google.com/file/d/1Ea1yjqSMJ1avOz3anhSVRIroCYRdL2aZ/view?usp=sharing",
    type: "drive",
  },
  {
    id: "15",
    title: "Commercial Retouching",
    category: "Adobe Photoshop",
    year: "2024",
    role: "Beauty · Product Retouch",
    cover: "/images/action-shot.jpg",
    link: "https://drive.google.com/file/d/1MfNjFMMfhD_XgaGo8Yfu60pp0xqj1Ebr/view?usp=sharing",
    type: "drive",
  },
  {
    id: "16",
    title: "Creative Composite",
    category: "Adobe Photoshop",
    year: "2024",
    role: "Composite · Color",
    cover: "/images/hero-portrait.jpg",
    link: "https://drive.google.com/file/d/1Vn0dJ69Jva_Y1sPU5o0V-jwptgZcGYHH/view?usp=sharing",
    type: "drive",
  },
];
export const tools = [
  { name: "Premiere Pro", slug: "adobepremierepro", color: "#9999FF" },
  { name: "After Effects", slug: "adobeaftereffects", color: "#9999FF" },
  { name: "DaVinci Resolve", slug: "davinciresolve", color: "#233A51" },
  { name: "Blender", slug: "blender", color: "#E87D0D" },
  { name: "Photoshop", slug: "adobephotoshop", color: "#31A8FF" },
  { name: "Illustrator", slug: "adobeillustrator", color: "#FF9A00" },
];
