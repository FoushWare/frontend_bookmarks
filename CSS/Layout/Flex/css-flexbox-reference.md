# CSS Flexbox — Reference & Interview Notes

> Personal reference doc. Covers the container model, item properties, common patterns, and interview-style Q&A.

---

## Repo structure

```
css-flexbox-reference/
├── css-flexbox-reference.md
├── assets/
│   ├── axes.svg
│   ├── justify-content.svg
│   ├── align-items.svg
│   └── flex-grow.svg
└── examples/
    ├── center.html
    ├── equal-columns.html
    ├── sidebar-layout.html
    ├── sticky-footer.html
    ├── navbar.html
    └── responsive-wrap-cards.html
```

Every `examples/*.html` file is self-contained — no build step, no dependencies. Open any of them directly in a browser (double-click, or drag into a tab) to see it live, then edit and refresh to experiment.

---

## 1. What flexbox actually is

Flexbox (`display: flex`) is a **one-dimensional** layout model. It lays children out along a single axis — either a row or a column — and gives you tools to distribute space and align items along that axis. For two-dimensional layout (rows *and* columns together), use CSS Grid instead.

Turning it on:

```css
.container {
  display: flex; /* or inline-flex */
}
```

The moment you do this, every direct child becomes a **flex item**, and the container becomes a **flex context**. Flex items lose their normal block/inline behavior — widths, `float`, `vertical-align`, and multi-column layout no longer apply to them.

---

## 2. The two axes

This is the single most important mental model in flexbox — almost every property is defined relative to one of these two axes, not to literal "horizontal/vertical."

| Axis | Set by | Controlled by |
|---|---|---|
| **Main axis** | `flex-direction` | `justify-content` |
| **Cross axis** | perpendicular to main axis | `align-items`, `align-content`, `align-self` |

If `flex-direction: row` (the default), the main axis is horizontal and the cross axis is vertical. If you switch to `flex-direction: column`, the axes **swap** — main becomes vertical, cross becomes horizontal, and `justify-content` now controls vertical distribution while `align-items` controls horizontal.

This is why "why isn't `justify-content: center` centering it vertically" is almost always an axis confusion — the fix is either switching axes mentally, or setting `flex-direction: column`.

![Main axis vs cross axis for row and column direction](CSS/Layout/Flex/axes.svg)

---

## 3. Container properties

### `flex-direction`

Sets the main axis.

```css
flex-direction: row;            /* default: left to right */
flex-direction: row-reverse;    /* right to left */
flex-direction: column;         /* top to bottom */
flex-direction: column-reverse; /* bottom to top */
```

### `justify-content`

Distributes free space along the **main axis**.

```css
justify-content: flex-start;    /* default: items packed at the start */
justify-content: flex-end;      /* items packed at the end */
justify-content: center;        /* items centered */
justify-content: space-between; /* equal gaps BETWEEN items, none at the edges */
justify-content: space-around;  /* equal gaps around each item (edges get half-gaps) */
justify-content: space-evenly;  /* truly equal gaps everywhere, including edges */
```

`space-between` vs `space-around` vs `space-evenly` is a classic interview question — the difference is entirely about what happens at the two outer edges.

![All justify-content values compared](CSS/Layout/Flex/justify-content.svg)

### `align-items`

Aligns items along the **cross axis**, one line at a time.

```css
align-items: stretch;    /* default: items stretch to fill the cross axis */
align-items: flex-start; /* items align to the start of the cross axis */
align-items: flex-end;   /* items align to the end of the cross axis */
align-items: center;     /* items centered on the cross axis */
align-items: baseline;   /* items aligned by their text baseline */
```

Note the default is `stretch`, not `flex-start` — this is why flex children often end up full-height even though you never set a height on them.

![All align-items values compared](CSS/Layout/Flex/align-items.svg)

### `align-content`

Distributes space between **flex lines** (rows), only relevant when `flex-wrap: wrap` is set and there's more than one line. **Has no effect with a single line of items.**

```css
align-content: flex-start;
align-content: center;
align-content: space-between;
align-content: stretch; /* default */
```

### `align-items` vs `align-content` (common interview trap)

- `align-items` aligns items **within** a single line, on the cross axis.
- `align-content` aligns the **lines themselves**, when wrapping produces multiple lines.
- If there's only one line (no wrap, or content fits on one line), `align-content` does nothing — you're always looking at `align-items` in that case.

### `flex-wrap`

```css
flex-wrap: nowrap;       /* default: items forced onto one line, may overflow */
flex-wrap: wrap;         /* items wrap onto multiple lines */
flex-wrap: wrap-reverse; /* wraps, but lines stack in reverse order */
```

Without `flex-wrap: wrap`, flex items will shrink (via `flex-shrink`) to try to fit on one line rather than wrap — this is why a flex row can look "squished" on small screens until you add `flex-wrap: wrap`.

### `gap`

```css
gap: 16px;        /* row-gap and column-gap both 16px */
gap: 16px 8px;     /* row-gap 16px, column-gap 8px */
```

Modern replacement for margin-based spacing hacks between flex items — no need for `:not(:last-child) { margin-right: ... }` anymore.

---

## 4. Item properties

These are set on the **flex children**, not the container.

### `flex-grow`

How much of the *leftover* space an item claims, relative to its siblings. Default `0` (don't grow).

```css
.item { flex-grow: 1; } /* claims an equal share of leftover space */
```

If item A has `flex-grow: 2` and item B has `flex-grow: 1`, and there's 30px of leftover space, A gets 20px and B gets 10px — it's a ratio, not an absolute value.

![flex-grow ratio example: 1, 2, 1](CSS/Layout/Flex/flex-grow.svg)

### `flex-shrink`

How much an item is allowed to shrink when there isn't enough space. Default `1` (items shrink by default).

```css
.item { flex-shrink: 0; } /* never shrink below its basis, even if it overflows */
```

Setting `flex-shrink: 0` is the fix for "why does my fixed-width sidebar keep getting squished."

### `flex-basis`

The starting size of an item before growing/shrinking is applied — think of it as a `width` (or `height`, in a column) that flexbox uses as its initial reference point.

![flex-basis visualization showing starting size before growth](CSS/Layout/Flex/flex-basis.svg)

```css
.item { flex-basis: 200px; }
.item { flex-basis: auto; } /* default: use the item's own width/content size */
```

### The `flex` shorthand

```css
flex: 1;           /* shorthand for flex-grow: 1; flex-shrink: 1; flex-basis: 0; */
flex: 0 1 auto;    /* the actual initial/default value */
flex: none;        /* flex-grow: 0; flex-shrink: 0; flex-basis: auto; — item is rigid */
```

`flex: 1` is extremely common in real layouts because setting `flex-basis: 0` means the item ignores its content size entirely and just takes an equal share of all available space — this is the "make these 3 cards equal width no matter their content" pattern.

### `align-self`

Overrides `align-items` for a single item.

```css
.item { align-self: flex-end; } /* this one item ignores the container's align-items */
```

### `order`

Changes the *visual* order of items without touching the HTML/DOM order. Default `0`; items are sorted by this value, ties broken by source order.

```css
.item-shown-first { order: -1; }
```

Caution: reordering visually but not in the DOM can create mismatches for keyboard navigation and screen readers — use sparingly, mostly for responsive reflows.

---

## 5. Common real-world patterns

### Center anything (both axes)

```css
.container {
  display: flex;
  justify-content: center; /* main axis */
  align-items: center;     /* cross axis */
}
```

This is the flexbox answer to "how do I center a div" — arguably the most-searched CSS question there is.

▶ Live example: [`examples/center.html`](examples/center.html)

### Equal-width columns regardless of content

```css
.container { display: flex; gap: 16px; }
.column { flex: 1; }
```

▶ Live example: [`examples/equal-columns.html`](examples/equal-columns.html)

### Sidebar with fixed width + content that fills the rest

```css
.container { display: flex; }
.sidebar { flex: 0 0 240px; } /* never grow, never shrink, basis 240px */
.content { flex: 1; }         /* takes all remaining space */
```

▶ Live example: [`examples/sidebar-layout.html`](examples/sidebar-layout.html)

### Responsive row that wraps into a grid-like layout

```css
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.card {
  flex: 1 1 240px; /* grow, shrink, but never smaller than ~240px before wrapping */
}
```

▶ Live example: [`examples/responsive-wrap-cards.html`](examples/responsive-wrap-cards.html) — resize the browser window to see the wrap happen

### Sticky footer (footer pinned to bottom even on short pages)

```css
html, body { height: 100%; margin: 0; }
.page {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
.main { flex: 1; } /* pushes footer down by consuming all leftover vertical space */
```

▶ Live example: [`examples/sticky-footer.html`](examples/sticky-footer.html)

### Navbar: logo left, links right

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

▶ Live example: [`examples/navbar.html`](examples/navbar.html)

---

## 6. Interview Q&A

**Q: What's the difference between `justify-content` and `align-items`?**
`justify-content` distributes space along the main axis (set by `flex-direction`); `align-items` aligns items along the cross axis. Which one is "horizontal" vs "vertical" depends on `flex-direction`.

**Q: What's the difference between `align-items` and `align-content`?**
`align-items` aligns items within one line on the cross axis. `align-content` aligns entire lines relative to each other, and only does anything when `flex-wrap: wrap` produces multiple lines.

**Q: What does `flex: 1` actually expand to?**
`flex-grow: 1; flex-shrink: 1; flex-basis: 0%`. The `flex-basis: 0` part is important — it means the item's own content size is ignored as a starting point, so `flex: 1` items split space purely by their grow ratio.

**Q: Why isn't my flex item shrinking below a certain size?**
Check for a `min-width`/`min-height` (default `auto`, which resolves to the content's intrinsic minimum size — e.g. an unbreakable long word or an image). This is the "min-content sizing" gotcha: flex items won't shrink below their content's minimum size unless you explicitly override with `min-width: 0` (or `min-height: 0` in a column).

**Q: `space-between` vs `space-around` vs `space-evenly`?**
`space-between` puts gaps only *between* items (none at the edges). `space-around` puts equal space *around* each item, so edge items appear to have half the gap that interior items have. `space-evenly` makes every gap — including the two edges — exactly equal.

**Q: How do you reverse item order without touching HTML?**
`flex-direction: row-reverse` (or `column-reverse`) reverses the whole layout direction. `order` on individual items lets you reorder just some of them.

**Q: When would you use `grid` instead of `flex`?**
When you need to control layout in two dimensions simultaneously (rows and columns together) — like a dashboard, gallery, or pricing table with aligned columns across multiple rows. Flex is one-dimensional; each row/column doesn't know about the others' sizing.

**Q: What happens to a flex item's `width` if flex-grow/shrink are active?**
`width` becomes a suggestion, not a rule — `flex-basis` (or `width`, if `flex-basis` is `auto`) sets the starting point, but `flex-grow`/`flex-shrink` can expand or compress the final rendered size based on available space.

---

## 7. Quick reference table

| Property | Applies to | Purpose |
|---|---|---|
| `display: flex` | container | activates flex context |
| `flex-direction` | container | sets main axis |
| `flex-wrap` | container | allows wrapping to multiple lines |
| `justify-content` | container | main-axis distribution |
| `align-items` | container | cross-axis alignment, single line |
| `align-content` | container | cross-axis distribution, multiple lines |
| `gap` | container | spacing between items |
| `flex-grow` | item | share of leftover space claimed |
| `flex-shrink` | item | how much item shrinks under pressure |
| `flex-basis` | item | starting size before grow/shrink |
| `flex` | item | shorthand for grow/shrink/basis |
| `align-self` | item | per-item override of align-items |
| `order` | item | visual reordering |

---

*Reference compiled for personal frontend notes / interview prep.*
