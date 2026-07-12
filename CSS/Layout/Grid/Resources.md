<!-- path: /docs/css-grid/Resources.md -->

# CSS Grid — Resources

Free-first, prioritized by quality and how current they are.

## Interactive / Visual
- **Josh W. Comeau — "An Interactive Guide to CSS Grid"** (joshwcomeau.com) — a blog-format
  walkthrough with live, editable demos embedded directly in the article. Especially strong for
  the fundamentals-to-intermediate bridge, and it's kept current — the version live in 2026
  covers the newer `reading-flow`/`reading-order` accessibility properties. Free.
- **Grid Garden** (codepip / classcentral-listed) — a browser game where you write real Grid CSS
  to solve puzzles. Good for cementing line-based placement and sizing through repetition rather
  than reading. Free, no signup required.
- **Wes Bos — CSSGrid.io** — a free video course (sponsored by Mozilla) covering Grid start to
  finish, paired with Firefox's Grid DevTools for visual debugging. Strong for a structured,
  linear watch-through. Free.
- **Scrimba — "Learn CSS Grid"** — 14 interactive screencasts where you can edit the code inside
  the video itself, building three real layouts as you go. Good if you learn best by
  immediately modifying working code. Free.

## Documentation
- **MDN — CSS Grid Layout** (developer.mozilla.org) — the canonical reference for every
  property covered in this repo; use it to double-check exact syntax and current browser
  support tables once you've built something and want to verify edge cases.
- **CSS-Tricks — "A Complete Guide to Grid"** — a long-running, frequently updated reference
  that several other course creators point to as their own source of truth. Good as a searchable
  glossary once you already understand the concepts.

## Practice / Games
- **Grid Critters** — a paid, gamified course built around spaced repetition specifically for
  Grid retention (not free, but listed since spaced repetition matches this repo's Revision
  section approach). Worth it only if the free options above don't make concepts stick.

## Deeper / Framework-adjacent
- **Josh W. Comeau — "CSS for JavaScript Developers"** — a paid, comprehensive course covering
  all of CSS (including Grid) specifically framed for people using React-style frameworks —
  relevant given your MUI/styled-components stack, but treat the free interactive guide above as
  sufficient for this roadmap unless you want to go beyond Grid specifically.

## Notes on currency
Grid itself has had near-universal browser support for years, but a few properties referenced
in Deep-Dive.md (`subgrid`, `reading-flow`/`reading-order`, CSS masonry) are newer and support
varies by engine — check caniuse.com directly before depending on any of them in a production
baseline, since this shifts over time.
