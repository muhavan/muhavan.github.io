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
- Dark aesthetic with electric-lime + violet gradient accent
- Bold display typography (Syne) + Space Grotesk body + JetBrains Mono micro
- Side-rail navigation with active section indicator & glow
- Hero: animated rise-in word reveal, gradient name, eyebrow chip with pulse, scroll indicator
- Animated radial blobs + grain overlay for depth
- Preloader with shimmer & loading bar
- Custom cursor (dot + ring with hover scale-up)
- Marquee strip with stroke text
- Section labels with numbered prefixes (01—About, 02—Skills, ...)
- About section with image card + info grid
- Skills as cards with animated progress bars (intersect-based)
- Certificates as cards with launch buttons
- Contact CTA card + iconed contact list
- Reveal-on-scroll via IntersectionObserver
- Smooth scroll + active scroll-spy
- Mobile responsive with collapsible nav
- Back-to-top button
- All data-testids preserved on interactive elements

## Backlog / Future
- P1: Add real project showcase section (no projects in current content)
- P2: Blog/writing section
- P2: i18n toggle (EN/ID)
- P2: Dark/light mode toggle if preferred

## Next Action Items
- Get user feedback on aesthetic direction
- Consider trimming oversized assets (linkedd.svg = 2.2MB, profile-giff.gif = 2.6MB) for performance
