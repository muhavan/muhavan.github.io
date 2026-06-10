# Muhavan Portfolio — PRD

## Problem Statement
> "tolong rapihkan dan buat lebih bagus serta aesthetic web portfolio saya, buat animasi juga yang keren dan bagus namun tidak norak"

Translation: redesign existing portfolio website to look cleaner, more aesthetic, with cool but not tacky animations. Tech stack must stay the same (HTML/CSS/JS, Bootstrap-icons, AOS, Typed.js).

## User Choices (verbatim)
- Style: **Dark Mode Modern**
- Animations: **Bold**
- Tech stack: **keep existing (HTML/CSS/JS + vendor libs)**
- Content: **no changes**

## User Persona
Muhamad Evan Fauzan — Informatics student (Bogor, Indonesia), seeking IT Support / Network Engineer / Web Dev opportunities. Portfolio is a personal brand & contact channel.

## Architecture
- Pure static HTML/CSS/JS site living in `/app/frontend/public/`
- Served via CRA dev server (yarn start, port 3000)
- React app reduced to a no-op render to a hidden `#root` so CRA pipeline doesn't break
- Vendor libs kept: Bootstrap-icons, Boxicons, AOS, Typed.js (loaded from `assets/vendor/`)
- New custom CSS (`assets/css/style.css`) + JS (`assets/js/portfolio.js`)

## Implemented (Jun 2026)
### v1 — Initial redesign
- Dark aesthetic, hero word-reveal, marquee, side-rail nav, custom cursor
- Sections: About / Skills / Certificate / Contact

### v2 — Refinements (per user feedback)
- **Color palette changed** from loud electric-lime + violet → sophisticated muted champagne/bronze (`#c9a87a`) + dusty slate (`#5a6478`).
- Typography sized down, Projects section added, LinkedIn original image restored

### v3 — Navy palette + real brand logos + project photos (per user feedback)
- **Palette swapped again** to **navy + black** (user said v2 still too bright/warm):
  - `--accent: #4a6fa8` (muted navy blue)
  - `--accent-2: #1a2942` (deep navy)
  - `--bg-0: #05080f` (deeper black)
  - White text on navy fills (`--accent-ink: #ffffff`)
- **Real brand logos** via Iconify CDN (`api.iconify.design`):
  - Skills: Microsoft Office (4-color), Python, PHP, Mikrotik (red), HTML5, CSS3
  - Certificates: MikroTik logo, custom BNSP shield, custom DevOps gear, Python logo, Microsoft Office logo
  - Contact: LinkedIn (blue), Instagram (gradient), Gmail (multicolor M), Google Maps (multicolor pin) — all in white rounded squares so brand colors pop
- **LinkedIn card redesigned** — bright white SVG removed. Now a custom dark navy gradient card with: profile photo (`profile-img.png`) surrounded by rotating dashed accent ring + name/role/university text + LinkedIn pill + CTA arrow that turns LinkedIn-blue on hover
- **Projects now support thumbnail photos**:
  - Each card has a 16:10 `.project-thumb` area at the top
  - Template includes Unsplash placeholder + a "Drop your photo here" placeholder
  - Created `/app/frontend/public/assets/img/projects/` folder with README for user to drop images
  - HTML comment instructs how to add images: drop file into `assets/img/projects/`, reference in `<img src="...">`

### v4 — Programming focus + italic clipping fix
- Hero word-reveal animation rewritten to avoid italic clipping (overflow → opacity fade)
- Skills expanded to 10 cards with Laravel + Node.js + JavaScript + MySQL added
- Hero typed strings, about copy, marquee, LinkedIn sub all updated to programming focus

### v5 — Experience timeline + GitHub stats + real CV projects
- CV ingested. Added Experience section, GitHub stats, real CV projects, expanded certs

### v6 — Top navigation + advanced animations (per user feedback)
- **Side nav → Top nav** — Full layout restructure. Header is now a fixed glass-pill top navigation with:
  - Left: Brand mark (avatar) + "Muhavan" gradient text + "OFFICIAL WEBSITE" subtitle
  - Center: Pill-shaped glass nav menu with icons + labels (Home/About/Skills/Experience/Projects/Certificate/Contact). Active item highlighted with navy fill
  - Right: "Let's talk" CTA pill (with magnetic hover effect)
  - Mobile: animated hamburger → 3-line burger morphs into X, dropdown panel slides down with backdrop blur
- **Layout updates** — Removed `margin-left: 300px` from main, footer, marquee. Hero & all sections now have full horizontal canvas (1400px max-width container in header). Skills jumped from 4-col → 5-col grid, projects 3-col → 4-col, certs 4-col with breathing room.
- **Social icons moved** from side nav to footer (Twitter, Facebook, Instagram, YouTube, GitHub).
- **Scroll progress bar** added — 2px navy gradient line at very top of viewport, scales horizontally with scroll position.
- **Header scroll state** — Top nav shrinks padding + adds bottom border when user scrolls past 40px.
- **New animations added**:
  - **3D tilt on cards** (project/cert/skill/timeline) — `perspective(900px) rotateX/Y` based on cursor position, max 6deg
  - **Magnetic hover** on header CTA, btn-primary, btn-ghost, footer social icons — element translates slightly toward cursor
  - **Slide-down entrance** for top header on page load
  - **Counter animation** utility (`data-counter` attribute) ready for future use
- **Smooth-scroll offset** updated to account for fixed top header (-80px)
- **Hero word-reveal animation rewritten** — old version used `overflow:hidden` on word containers which clipped the italic "n" in "Fauzan". New animation uses `opacity + translateY(40%)` fade instead, no clipping needed. Italic glyphs render fully.
- **Skills section expanded** to reflect programming focus. Now 10 cards: **Laravel** (red logo), **Node.js** (green logo), PHP, Python, **JavaScript** (yellow logo), HTML5, CSS3, **MySQL** (blue dolphin), Mikrotik, Microsoft Office — all with official multi-color brand logos
- **Hero typed strings** updated to: "Web Developer, Laravel Developer, Node.js Developer, Programmer, IT Support, Network Engineer, Informatics Student"
- **About copy** updated to mention web programming focus with Laravel, Node.js, Python, PHP
- **Marquee strip** updated to: Web Developer · Laravel · Node.js · Programmer · IT Support · Network Engineer
- **LinkedIn card subtitle**: "Web Developer · Laravel · Node.js · IT Support"
- **About info "Focus"**: "Web Dev · Laravel · Node.js"

## Backlog / Future
- P1: Add real project showcase section (no projects in current content)
- P2: Blog/writing section
- P2: i18n toggle (EN/ID)
- P2: Dark/light mode toggle if preferred

## Next Action Items
- Get user feedback on aesthetic direction
- Consider trimming oversized assets (linkedd.svg = 2.2MB, profile-giff.gif = 2.6MB) for performance
