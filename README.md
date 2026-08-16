# Portfolio — Next.js

A dark, cinematic one-page portfolio built with Next.js 15 (App Router),
TypeScript, and Tailwind CSS. Styled after a film-editor's timeline: a
running timecode, a film-frame project grid, and a red/black palette
lifted from your reference photo.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy

Easiest path is Vercel (made by the Next.js team):

```bash
npx vercel
```

Or build a production bundle yourself:

```bash
npm run build
npm start
```

## Customize

Almost everything content-wise lives in **one file**:

```
lib/content.ts
```

Edit it to change:
- Your name, title, tagline, email, location
- Social links
- About copy and stats
- Project cards (title, category, year, cover image)
- Software/tools list

### Swapping photos

Drop new images into `public/images/` and reference them from
`lib/content.ts` (e.g. `/images/my-photo.jpg`).

Currently used:
- `public/images/hero-portrait.jpg` — the full-bleed hero shot
- `public/images/action-shot.jpg` — the "on set" photo in the About section

### Colors

Design tokens are in `app/globals.css` under `:root`:

```css
--bg: #0a0908;            /* page background */
--bg-elevated: #141110;   /* section background */
--crimson: #7a1620;       /* deep red glow */
--crimson-bright: #c81e2c;/* accent / hover color */
--ash: #a79e92;           /* secondary text */
--paper: #ede7dd;         /* primary text */
--line: #2a211d;          /* hairline dividers */
```

### Fonts

Self-hosted via `@fontsource` (no external font requests, so it works
offline and loads fast):
- **Anton** — display headlines
- **Inter** — body copy
- **JetBrains Mono** — labels, timecodes, captions

## Structure

```
app/
  layout.tsx      fonts + metadata
  page.tsx        composes all sections
  globals.css     design tokens
components/
  Nav.tsx         fixed header with live timecode
  Hero.tsx        full-bleed portrait + headline
  About.tsx       bio + BTS photo + stats
  Work.tsx        project grid ("The Reel")
  Tools.tsx       scrolling software marquee
  Contact.tsx     email CTA + socials
  Timecode.tsx    the running HH:MM:SS:FF readout
lib/
  content.ts      ← all your editable copy & data
```

## Connecting a real contact form (optional)

The email in the Contact section is currently a `mailto:` link. If you
want a working form with a backend (e.g. to store submissions in
MongoDB — the "M" in MERN), add an API route at `app/api/contact/route.ts`
and a small form component that POSTs to it. Ask your AI assistant to
wire this up if you'd like it added.
