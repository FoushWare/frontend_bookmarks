# CSS Grid Reference Guide

Complete reference for CSS Grid layout with container properties, item properties, and interview Q&A.

## Table of Contents
1. [Grid Fundamentals](#grid-fundamentals)
2. [Container Properties](#container-properties)
3. [Item Properties](#item-properties)
4. [Advanced Concepts](#advanced-concepts)
5. [Common Patterns](#common-patterns)
6. [Interview Questions](#interview-questions)

---

## Grid Fundamentals

### What is CSS Grid?

CSS Grid is a two-dimensional layout system that handles both rows and columns simultaneously, unlike Flexbox which is one-dimensional.

### Basic Grid Setup

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: 80px auto;
  gap: 16px;
}
```

### The `fr` Unit

The `fr` unit represents a "fraction" of available space. Unlike percentages, `fr` units distribute leftover space after accounting for fixed sizes and gaps.

![fr unit visualization showing fixed column and flexible columns sharing leftover space](CSS/Layout/Grid/fr-unit.svg)

```css
/* Two columns: first 200px, second gets remaining space */
grid-template-columns: 200px 1fr;

/* Three equal columns */
grid-template-columns: 1fr 1fr 1fr;

/* Or using repeat() */
grid-template-columns: repeat(3, 1fr);
```

### Implicit vs Explicit Grid

- **Explicit Grid**: Defined by `grid-template-columns` and `grid-template-rows`
- **Implicit Grid**: Created automatically when items are placed outside the explicit grid

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Explicit: 3 columns */
  grid-auto-rows: 100px; /* Implicit rows: each new row is 100px tall */
}
```

### Grid Lines

Grid lines are numbered starting from 1. A 3-column grid has 4 vertical lines (1, 2, 3, 4).

![Grid lines visualization showing 3 columns with 4 vertical lines](CSS/Layout/Grid/grid-lines.svg)

---

## Container Properties

### `grid-template-columns` & `grid-template-rows`

Define the size and number of columns and rows.

```css
/* Fixed sizes */
grid-template-columns: 200px 300px 200px;

/* Mixed fixed and flexible */
grid-template-columns: 200px 1fr 1fr;

/* Using repeat() */
grid-template-columns: repeat(3, 1fr);

/* Named columns */
grid-template-columns: [sidebar-start] 200px [sidebar-end main-start] 1fr [main-end];
```

### `grid-template-areas`

Names regions of the grid as a visual ASCII-like map.

![Grid template areas visualization showing header, sidebar, main, footer layout](CSS/Layout/Grid/grid-areas.svg)

```css
.layout {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  min-height: 100vh;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }
```

**Benefits:**
- Self-documenting layout
- Easy to visualize structure
- Simple to modify layout

**Rules:**
- Area names must form rectangles (no L-shapes)
- Each row must have the same number of columns
- Use `.` for empty cells

### `gap`, `row-gap`, `column-gap`

Sets spacing between grid tracks.

```css
/* Shorthand for both */
gap: 16px;

/* Individual control */
row-gap: 16px;
column-gap: 20px;

/* Different values */
gap: 16px 20px; /* row-gap column-gap */
```

### `grid-auto-flow`

Controls how auto-placed items are flowed.

```css
/* Default: fills rows first */
grid-auto-flow: row;

/* Fill columns first */
grid-auto-flow: column;

/* Dense packing: fills gaps */
grid-auto-flow: dense; /* ⚠️ Accessibility concern: changes visual order */
```

### `grid-auto-rows` & `grid-auto-columns`

Sets size for implicitly created tracks.

```css
grid-auto-rows: 100px;
grid-auto-columns: 200px;
```

### `minmax()`

Sets minimum and maximum size for a track.

```css
/* Never shrinks below 200px, grows to share space */
grid-template-columns: repeat(3, minmax(200px, 1fr));

/* Using clamp() for fluid responsive */
grid-template-columns: repeat(auto-fit, minmax(clamp(150px, 20vw, 250px), 1fr));
```

**Common use case:** Responsive card grids that must maintain readability.

### `repeat()`, `auto-fill`, `auto-fit`

`repeat(N, size)` - repeats a track size N times.

`auto-fill` vs `auto-fit` - automatically computes how many tracks fit:

![auto-fill vs auto-fit comparison showing how items behave with empty tracks](CSS/Layout/Grid/auto-fill-fit.svg)

```css
/* auto-fill: keeps empty tracks */
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

/* auto-fit: collapses empty tracks, stretches items */
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
```

**Key difference:**
- `auto-fill`: Items stay at `minmax` size, empty tracks reserved
- `auto-fit`: Items stretch to fill available space

**Interview question:** "Cards look narrower than expected with few items - `auto-fill` or `auto-fit` is the likely culprit, and what's the fix?"

---

## Item Properties

### `grid-column` & `grid-row`

Place items using line numbers.

![Grid placement visualization showing line-based placement with spanning](CSS/Layout/Grid/placement.svg)

```css
/* Span from line 1 to line 3 */
.item {
  grid-column: 1 / 3;
}

/* Span 2 columns from current position */
.item {
  grid-column: span 2;
}

/* Place at specific lines */
.item {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
}
```

### `grid-area`

Shorthand for `grid-row-start / grid-column-start / grid-row-end / grid-column-end`.

```css
/* Using line numbers */
.item {
  grid-area: 1 / 2 / 3 / 4;
}

/* Using named areas (must match grid-template-areas) */
.header {
  grid-area: header;
}
```

### `justify-self` & `align-self`

Align individual items within their grid cell.

```css
.item {
  justify-self: center; /* horizontal alignment */
  align-self: center;   /* vertical alignment */
}

/* Shorthand */
.item {
  place-self: center center;
}
```

---

## Advanced Concepts

### Alignment Properties

Four properties control alignment:

| Property | Axis | What it aligns |
|----------|------|----------------|
| `justify-items` | Inline (horizontal) | All items within their cells |
| `align-items` | Block (vertical) | All items within their cells |
| `justify-content` | Inline (horizontal) | Grid tracks within container |
| `align-content` | Block (vertical) | Grid tracks within container |

![Alignment properties visualization showing justify-items and align-items](CSS/Layout/Grid/alignment.svg)

```css
.grid {
  justify-items: center; /* items centered in cells */
  align-content: center; /* whole grid centered in container */
  min-height: 100vh;
}
```

**Interview question:** "What's the difference between `align-items` and `align-content` in Grid?"

### Named Lines

Name grid lines for semantic placement.

```css
.layout {
  grid-template-columns: [full-start] 1fr [content-start] 800px [content-end] 1fr [full-end];
}

.hero { grid-column: full-start / full-end; }
.article { grid-column: content-start / content-end; }
```

### Subgrid

Nested grid items can adopt parent's track sizing.

![Subgrid visualization showing nested grid inheriting parent's column tracks](CSS/Layout/Grid/subgrid.svg)

```css
.outer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.card {
  grid-column: span 2;
  display: grid;
  grid-template-columns: subgrid; /* Inherits parent's column tracks */
}
```

**Use case:** Card layouts where internal elements must align across a row of cards.

**Browser support:** Check caniuse - subgrid arrived later than core Grid.

### RTL Support

Grid respects logical properties and direction.

```css
/* Use logical properties for RTL support */
.card {
  margin-inline-start: 16px;
  padding-inline: 12px;
}

[dir="rtl"] .grid {
  /* No overrides needed with logical properties */
}
```

---

## Common Patterns

### Responsive Card Grid (No Media Queries)

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}
```

### Page Shell Layout

```css
.page {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  min-height: 100vh;
}
```

### Center Content in Container

```css
.centered {
  display: grid;
  place-items: center;
  min-height: 100vh;
}
```

### Full-Bleed with Constrained Content

```css
.layout {
  grid-template-columns: [full-start] 1fr [content-start] 800px [content-end] 1fr [full-end];
}

.full-bleed { grid-column: full-start / full-end; }
.constrained { grid-column: content-start / content-end; }
```

---

## Interview Questions

### Beginner
- What's the difference between a grid container and a grid item?
- Explain `fr` vs. `%` for column sizing.
- What's the implicit grid, and when does it get created?
- How do grid line numbers relate to track count?

### Intermediate
- Why prefer `grid-template-areas` over line-based placement for page shells?
- What problem does `minmax()` solve that bare `fr` doesn't?
- What's the difference between `auto-fill` and `auto-fit`?
- What's the difference between `align-items` and `align-content`?
- What problem does `subgrid` solve that a regular nested grid doesn't?

### Advanced
- How do you build a fully responsive grid without any media queries?
- How does Grid's alignment system behave differently in RTL vs. LTR?
- Give a scenario where you'd choose Flexbox over Grid, and vice versa.

### Expert
- Why is animating `grid-template-columns` directly expensive?
- What's the accessibility risk with `grid-auto-flow: dense`?
- How does `contain: layout` help with performance on large dashboards?

---

## Best Practices

1. **Use `grid-template-areas` for page shells** - More readable than line numbers
2. **Prefer `auto-fit` over `auto-fill` for responsive cards** - Unless you need fixed card sizes
3. **Use `minmax()` with `fr`** - Prevents content overflow
4. **Use logical properties** - For RTL support
5. **Avoid `grid-auto-flow: dense`** - Changes visual order, accessibility issue
6. **Animate with transforms, not grid properties** - Better performance

---

## Grid vs Flexbox

| Use Case | Prefer Grid | Prefer Flexbox |
|----------|------------|----------------|
| 2D layout (rows + columns) | ✅ Grid | ❌ |
| 1D layout (row OR column) | ❌ | ✅ Flexbox |
| Content-driven layout | ❌ | ✅ Flexbox |
| Component-level layout | ❌ | ✅ Flexbox |
| Page-level layout | ✅ Grid | ❌ |
| Overlapping elements | ✅ Grid | ❌ |

---

## Resources

- [MDN CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [CSS Grid Layout by Rachel Andrew](https://gridbyexample.com/)
- [CSS Tricks - A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
