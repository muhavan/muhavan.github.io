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
- **Color palette changed** from loud electric-lime + violet → sophisticated muted champagne/bronze (`#c9a87a`) + dusty slate (`#5a6478`). Body text warmed to `#ece8e0`.
- **Typography sized down** on hero & section titles to prevent overflow on tablets/mid screens
- **Projects section ADDED** between Skills and Certificate — `<section id="projects">` with 3 template `.project-card` blocks. Each card has number / tag / title / description / tech-stack tags / arrow link. Documented inline how to duplicate-and-edit.
- **LinkedIn original image restored** as a featured 2-column card at top of Contact: original `linkedd.svg` on left, dark overlay panel with `Connect with me on LinkedIn` CTA on right
- Section numbering updated: 01 About / 02 Skills / 03 Projects / 04 Certificate / 05 Contact
- Added `nav-projects` link in side-rail with `bx-briefcase` icon
- IntersectionObserver also targets `.project-card` for reveal-on-scroll

## Backlog / Future
- P1: Add real project showcase section (no projects in current content)
- P2: Blog/writing section
- P2: i18n toggle (EN/ID)
- P2: Dark/light mode toggle if preferred

## Next Action Items
- Get user feedback on aesthetic direction
- Consider trimming oversized assets (linkedd.svg = 2.2MB, profile-giff.gif = 2.6MB) for performance
