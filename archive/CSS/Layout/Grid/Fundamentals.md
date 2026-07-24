<!-- path: /docs/css-grid/Fundamentals.md -->

# CSS Grid — Fundamentals

## Beginner Stage
Covered in full depth in your earlier lesson: `display: grid` + template properties, the `fr`
unit, `gap`, implicit vs. explicit grid, line-based placement, `grid-auto-flow`. See the
Cheat-Sheet.md for the quick-reference version of that material.

## Intermediate Stage

### 1. `grid-template-areas`

**Explanation** — Names regions of the grid as a visual ASCII-like map, then assigns items to
named areas with `grid-area`, instead of counting lines.

**Intuition** — This is Grid's readability upgrade: instead of "start at line 2, span 3," you
write the *shape* of your layout directly in the CSS, so the stylesheet visually mirrors the
page structure.

**Analogy** — Like naming array indices (`layout.header`, `layout.sidebar`) instead of using
raw numeric indices — self-documenting.

**Diagram**
```
grid-template-areas:
  "header header"
  "sidebar main"
  "footer footer";
```

**Code**
```css
.page {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }
```

**Common mistakes** — Area strings must form a rectangle per named region (no L-shapes);
mismatched column counts per row in the template string is a hard error, not a warning.

**Interview questions** — "Why prefer `grid-template-areas` over line-based placement for page
shells?"

**Practical use cases** — Page shells, dashboard layouts — anywhere the layout has a stable,
nameable structure.

**Performance** — No different from other placement methods; purely an authoring convenience.

**Browser behavior** — Consistent; DevTools show named areas directly, which is one of the
better arguments for using this over raw lines in team codebases.

**Edge cases — RTL** — `grid-template-areas` is written in physical (left-to-right) terms in
the source string itself, but with logical flow (`direction: rtl` on the container) the *visual*
mirroring still happens correctly — the area names don't need to change, only your mental model
of which named area ends up visually left vs. right.

---

### 2. Named Lines

**Explanation** — You can name grid lines directly: `grid-template-columns: [sidebar-start] 200px [sidebar-end main-start] 1fr [main-end]`, then place items using those names instead of numbers.

**Intuition** — A middle ground between raw line numbers (fragile) and full named areas
(sometimes more structure than you need for a simple 2-3 item layout).

**Code**
```css
.layout {
  grid-template-columns: [full-start] 1fr [content-start] 800px [content-end] 1fr [full-end];
}
.hero { grid-column: full-start / full-end; }
.article { grid-column: content-start / content-end; }
```

**Common mistakes** — Overusing named lines for simple grids where plain numbers would be
perfectly readable — reserve this for grids where the same structure repeats across breakpoints.

**Interview questions** — "When would named lines be preferable to `grid-template-areas`?"

**Practical use cases** — Full-bleed sections with a constrained content column (common
editorial/blog layout pattern).

**Performance / Browser behavior** — No differences from standard placement.

**Edge cases** — Multiple lines can share a name (`[col-start]` repeated); `repeat()` combined
with named lines auto-suffixes numbers (`col-start-1`, `col-start-2`, ...).

---

### 3. `minmax()`

**Explanation** — Sets a track's minimum and maximum size: `minmax(150px, 1fr)` never shrinks
below 150px, but grows to share leftover space like `1fr` otherwise.

**Intuition** — This is the fix for the `fr`-overflow problem from the Beginner stage — it gives
`fr` a floor.

**Code**
```css
grid-template-columns: repeat(3, minmax(200px, 1fr));
```

**Common mistakes** — Using `minmax(0, 1fr)` everywhere reflexively without understanding *why*
— it's specifically needed when a track holds content that could otherwise force it wider than
intended (flex children, unbreakable text, images).

**Interview questions** — "What problem does `minmax()` solve that bare `fr` doesn't?"

**Practical use cases** — Any card grid that must never let cards get too narrow (readability
floor) while still filling available width.

**Performance** — Negligible.

**Edge cases** — `minmax(auto, 1fr)` vs `minmax(0, 1fr)` — `auto` respects content's minimum
intrinsic size (can overflow), `0` allows full shrink (can clip) — the right choice depends on
whether you want overflow or clipping as the failure mode.

---

### 4. `repeat()`, `auto-fill` vs `auto-fit`

**Explanation** — `repeat(N, size)` shorthand avoids writing a track size N times.
`repeat(auto-fill, minmax(200px, 1fr))` and `repeat(auto-fit, minmax(200px, 1fr))` both compute
*how many* tracks fit the container automatically — the difference is what happens to leftover
space when there are fewer items than tracks that would fit.

**Intuition** — `auto-fill` keeps empty tracks (reserves the "slots"), so your existing items
stay their `minmax` size even with room to spare. `auto-fit` collapses empty tracks to zero
width, letting existing items stretch into that space instead.

**Diagram**
```
Container: 900px, 3 items, minmax(200px, 1fr)

auto-fill: [item][item][item][ empty ][ empty ]   <- items stay ~200-300px
auto-fit:  [   item   ][   item   ][   item   ]   <- items stretch to fill 900px
```

**Code**
```css
.responsive-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}
```

**Common mistakes** — Using `auto-fill` when the intent was "stretch cards to fill the row" (the
`auto-fit` use case) — this is the single most common Grid mix-up online.

**Interview questions** — "You have a responsive card grid and cards look narrower than
expected with few items — `auto-fill` or `auto-fit` is the likely culprit, and what's the fix?"

**Practical use cases** — This pattern replaces most simple responsive grids that would
otherwise need multiple media query breakpoints — one line handles all viewport widths.

**Performance** — Recalculated on container resize; cheap, standard layout cost.

**Edge cases** — Needs a *definite* container size to compute track count against; inside a
flex item or an auto-sized ancestor, `auto-fill`/`auto-fit` can behave unexpectedly — verify with
DevTools if it seems to not respond to resizing.

---

### 5. Alignment Properties

**Explanation** — Four properties control alignment: `justify-items`/`align-items` (default
alignment for *all* items, inline/block axis respectively) and `justify-content`/`align-content`
(alignment of the *grid tracks themselves* within the container, when tracks don't fill it).
Per-item overrides: `justify-self`/`align-self`.

**Intuition** — Same mental split as Flexbox's `justify-content` vs `align-items`, just applied
to two axes symmetrically instead of one "main axis, cross axis" pair — Grid doesn't have a
main/cross distinction, both axes get the full property set.

**Code**
```css
.grid {
  justify-items: center; /* items centered within their own cell, inline axis */
  align-content: center; /* whole track set centered if grid is taller than content */
}
.item {
  justify-self: end; /* override for one item */
}
```

**Common mistakes** — Reaching for margin/flexbox tricks to center a single grid item instead of
`place-self: center` (shorthand for `align-self` + `justify-self`).

**Interview questions** — "What's the difference between `align-items` and `align-content` in
Grid?"

**Practical use cases** — Centering content within cells, vertically centering a short grid
inside a tall container.

**Performance / Browser behavior** — Standard, no quirks.

**Edge cases** — `justify-items`/`align-items` respect `writing-mode` and `direction` — in RTL
(`direction: rtl`), `justify-items: start` visually aligns right, not left. This is genuinely
useful for your Arabic layouts — you often don't need separate RTL overrides for alignment if
you use logical keywords (`start`/`end`) instead of `left`/`right`.

---

### 6. `subgrid` (introductory)

**Explanation** — A nested grid item can adopt its parent's track sizing with
`grid-template-columns: subgrid` (or rows), instead of defining its own independent tracks.

**Intuition** — Solves the classic "nested grids don't align with the outer grid" problem —
without subgrid, a card's internal grid has no awareness of the outer page grid's columns.

**Code**
```css
.outer { display: grid; grid-template-columns: repeat(4, 1fr); }
.card   { grid-column: span 2; display: grid; grid-template-columns: subgrid; }
```

**Common mistakes** — Expecting subgrid support universally without checking — it arrived later
than core Grid; verify current browser support before relying on it for a production baseline
(check caniuse rather than assuming).

**Interview questions** — "What problem does `subgrid` solve that a regular nested grid
doesn't?"

**Practical use cases** — Card layouts where internal elements (title, body, footer) must align
across a *row* of independently-sized cards — a very common design-system requirement.

**Performance** — No special cost beyond normal grid layout.

**Edge cases** — Advanced/Expert stage covers subgrid's interaction with `auto-fit` and
masonry-style layouts in more depth — flagged here as introductory only.

---

## Lesson Closer (Intermediate)

**Summary** — You can now build named, self-documenting layouts (`grid-template-areas`),
guarantee minimum sizes while staying flexible (`minmax()`), build fully responsive grids
without media queries (`auto-fit`/`auto-fill`), align content precisely on both axes, and align
nested grids to an outer structure (`subgrid`).

**Interview questions (recap)** — See Interview-Questions.md for the full list, cross-referenced
by stage.

**Next lesson** — Advanced/Expert material lives in Deep-Dive.md — internals, performance,
accessibility, and production architecture decisions.
