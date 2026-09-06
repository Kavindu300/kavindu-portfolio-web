# Design Approach & Technologies Used
**Personal Portfolio Website — Kavindu Asanka**
ITC 3179 — Personal Portfolio Website Development

## 1. Concept
The site is built around the idea of a "learning ledger" — the visual language
of a data analyst's own toolkit rather than a generic template. The hero
section opens with a hand-drawn-style line chart plotting the growth of my
own skills (Excel → SQL → Power BI → Python → Data Analyst), which doubles as
both the visual centrepiece and a genuine, honest summary of where I am in my
journey.

## 2. Visual identity
- **Colour:** a deep ink-navy background (#0F1B2D) with a warm gold accent
  (#E7A33D) and a teal secondary accent (#52B8AF) used specifically for
  data-visualisation elements (the hero chart, skill indicators). This was
  chosen to feel closer to a finance/analytics dashboard than a generic
  "AI-startup" palette.
- **Typography:** Fraunces (serif) for headings, to give the page a personal,
  human voice; IBM Plex Sans for body text; IBM Plex Mono used sparingly and
  only for genuinely data-like content (chart labels, stat figures, tool
  tags) rather than as decoration.
- **Layout:** a fixed left-hand sidebar (name, navigation, social links) with
  a single scrolling content column on the right — collapsing to a top bar
  with a slide-out menu on mobile.

## 3. Technologies used
- **HTML5** — semantic sectioning (`<nav>`, `<main>`, `<section>`,
  `<article>`, `<form>`) for structure and accessibility.
- **CSS3** — custom properties for the design token system, CSS Grid and
  Flexbox for layout, `prefers-reduced-motion` support, and a single mobile
  breakpoint (880px) for the responsive sidebar/nav collapse.
- **Vanilla JavaScript** — mobile navigation toggle, front-end form
  validation, and a `mailto:` hand-off for the contact form (the site has no
  backend, so messages are composed in the visitor's own email client).
- **ReportLab (Python)** — used to generate the downloadable one-page CV
  referenced from the About and Home sections.

## 4. Sections delivered
Home (introduction, branding statement, hero chart) · About (bio, education
timeline, CV download) · Skills (technical proficiency, soft skills, tools)
· Projects (EduLink, DreamSprout Publishing) · Contact (contact details,
validated contact form).

## 5. Accessibility & responsiveness
Skip-to-content link, visible focus states, `aria-live` form status
messages, sufficient colour contrast, and a fully responsive layout tested
from mobile (390px) through desktop (1440px).

## 6. Hosting
Ready to deploy as a static site to GitHub Pages, Netlify, or Vercel — no
build step required; upload `index.html`, `styles.css`, `script.js` and the
`assets/` folder as-is.
