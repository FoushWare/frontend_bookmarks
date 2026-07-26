# CSS Grid Reference Guide

A practical, visual reference for CSS Grid — **two-dimensional** layout, controlling rows and columns together.

> Where Flexbox is best at distributing items along one line, Grid is best when you need to control both rows and columns at once — page layouts, card grids, dashboards. See [Flexbox Reference](./flexbox-reference.md) for one-dimensional layout.

---

## 1. Setting Up a Grid

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: 80px auto 60px;
  gap: 16px;
}
```

This alone creates a 3-column, 3-row grid — children are placed into cells automatically in DOM order, left-to-right, top-to-bottom (right-to-left under `dir="rtl"`).

---

## 2. grid-template-columns / grid-template-rows and the `fr` unit

`fr` (fraction unit) distributes *remaining* space proportionally — similar in spirit to `flex-grow`, but for whole tracks.

![grid-template-columns diagram](./images/grid-template-columns.svg)

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* middle column is 2x the outer ones */
  grid-template-rows: 80px 80px;      /* fixed-height rows */
}
```

You can mix units freely:

```css
grid-template-columns: 240px 1fr; /* fixed sidebar, flexible content */
```

`repeat()` avoids repetition:

```css
grid-template-columns: repeat(4, 1fr); /* same as 1fr 1fr 1fr 1fr */
```

---

## 3. grid-template-areas — naming your layout

The most readable way to build a page layout: name regions once, then place items by name.

![grid-template-areas diagram](./images/grid-template-areas.svg)

```css
.layout {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 80px 1fr 60px;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }
```

Each quoted string is a row; each word inside is a column cell. Repeating a name across cells (like `"header header"`) makes that item span those columns — a leave a cell as `.` (a period) to leave it empty.

**Bilingual tip:** `grid-template-areas` is written as literal strings, so it doesn't auto-mirror under RTL the way `flex-direction: row` does. For a mirrored sidebar layout, either swap the area string order per direction, or use `grid-template-columns` with `[direction]`-aware logic instead of area names.

---

## 4. Line-based placement — grid-column / grid-row

Instead of naming areas, you can place items directly by grid line numbers. Lines are numbered starting at 1, and there's always one more line than the number of tracks.

![grid-line-placement diagram](./images/grid-line-placement.svg)

```css
.item {
  grid-column: 2 / 4; /* start at column line 2, end at column line 4 (spans 2 tracks) */
  grid-row: 1 / 3;    /* start at row line 1, end at row line 3 (spans 2 tracks) */
}

/* span keyword — relative instead of absolute */
.item { grid-column: 2 / span 2; } /* start at line 2, span 2 tracks */
```

Shorthand combining both:

```css
.item { grid-area: 1 / 2 / 3 / 4; } /* row-start / col-start / row-end / col-end */
```

---

## 5. repeat(), minmax(), and auto-fit / auto-fill — responsive grids without media queries

This is the pattern behind most "responsive card grid" layouts, and it replaces a surprising number of breakpoints.

![grid-auto-fit-minmax diagram](./images/grid-auto-fit-minmax.svg)

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 16px;
}
```

Reading it left to right: *"Fit as many 1fr columns as possible, but never let a column shrink below 160px."* As the container narrows, columns drop to the next row automatically — no `@media` breakpoints needed.

- **`auto-fit`**: collapses empty tracks, so existing items stretch to fill the row.
- **`auto-fill`**: keeps empty tracks reserved at their minimum size, so items don't stretch — visible gaps remain. Use this when you specifically don't want items to grow wider as the container does.

---

## 6. Alignment properties

Grid has both container-level and item-level alignment, split by axis:

```css
.container {
  justify-items: stretch; /* horizontal alignment of content WITHIN each cell */
  align-items: stretch;   /* vertical alignment of content WITHIN each cell */
  justify-content: start; /* horizontal alignment of the WHOLE grid within the container */
  align-content: start;   /* vertical alignment of the WHOLE grid within the container */
}

.item {
  justify-self: center; /* override justify-items for one item */
  align-self: center;   /* override align-items for one item */
}
```

**Rule of thumb:** `*-items` / `*-self` affect content *inside* cells; `*-content` affects the grid *as a whole* when it's smaller than its container.

---

## 7. Common Patterns

### Responsive card grid (no media queries)
```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}
```

### Classic holy-grail layout
```css
.page {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "nav    main   aside"
    "footer footer footer";
  min-height: 100vh;
}
```

### Overlapping elements (e.g. image with a badge)
```css
.stack {
  display: grid;
  grid-template-areas: "stack"; /* single named cell */
}
.stack > * {
  grid-area: stack; /* every child occupies the same cell, stacking by DOM order */
}
```

### 12-column layout grid (design-system style)
```css
.grid-12 {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 16px;
}
.span-4 { grid-column: span 4; } /* a 1/3-width block */
```

---

## 8. Quick Debugging Checklist

- Items not lining up as expected? Check whether you're mixing implicit rows (`grid-auto-rows`) with explicit `grid-template-rows` — implicit tracks use different sizing rules by default.
- `minmax(160px, 1fr)` columns not shrinking below 160px on a narrow screen with only one column? That's correct — `auto-fit`/`auto-fill` won't go below the minimum; you may want a media query for very small viewports instead.
- Named area not working? Every row string must have the same number of columns, and a name must form a rectangular block — non-rectangular repeats will throw the declaration out entirely.
- Gap not showing? `gap` in Grid (unlike old `grid-gap`) is broadly supported today — check you're not accidentally using `margin` on children instead, which won't collapse the same way.

---

*Related: [Flexbox Reference](./flexbox-reference.md)*
