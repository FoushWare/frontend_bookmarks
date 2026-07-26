# Flexbox Reference Guide

A practical, visual reference for CSS Flexbox — one-dimensional layout along a **main axis** and a **cross axis**.

> Flexbox lays out children of a container in a single row or column, distributing space and alignment along that line. For two-dimensional layout (rows *and* columns together), reach for [Grid](./grid-reference.md) instead.

---

## 1. The Two Axes

Every flex container has:
- A **main axis** — the direction items are laid out (controlled by `flex-direction`)
- A **cross axis** — perpendicular to the main axis

Everything in flexbox (`justify-content`, `align-items`, `flex-grow`, etc.) is defined **relative to these axes**, not literally "horizontal/vertical." This is the single most important mental model to hold onto.

```css
.container {
  display: flex;
}
```

---

## 2. flex-direction

Sets the main axis and the order items flow along it.

![flex-direction diagram](./images/flex-direction.svg)

```css
.container { flex-direction: row; }            /* default: left → right */
.container { flex-direction: row-reverse; }    /* right → left */
.container { flex-direction: column; }         /* top → bottom */
.container { flex-direction: column-reverse; } /* bottom → top */
```

**RTL note:** in a `dir="rtl"` context, `row` still points along the main axis, but the *start* edge flips — `row` visually goes right → left. This is why logical properties (`margin-inline-start`, `inset-inline-end`) are safer than `margin-left`/`right` in bilingual apps.

---

## 3. justify-content — alignment along the main axis

![justify-content diagram](./images/flex-justify-content.svg)

```css
.container { justify-content: flex-start; }    /* default: pack at start */
.container { justify-content: flex-end; }      /* pack at end */
.container { justify-content: center; }        /* pack at center */
.container { justify-content: space-between; } /* first/last flush, gaps equal */
.container { justify-content: space-around; }  /* equal space around each item */
.container { justify-content: space-evenly; }  /* equal space between AND at edges */
```

**Rule of thumb:** if you're positioning items *along the direction they flow*, it's `justify-content`.

---

## 4. align-items — alignment along the cross axis

![align-items diagram](./images/flex-align-items.svg)

```css
.container { align-items: flex-start; } /* top of the cross axis */
.container { align-items: center; }     /* centered on the cross axis */
.container { align-items: flex-end; }   /* bottom of the cross axis */
.container { align-items: stretch; }    /* default: fill the cross axis */
.container { align-items: baseline; }   /* align by text baseline */
```

**Rule of thumb:** if you're positioning items *perpendicular to the direction they flow* (e.g. vertically centering a row of items), it's `align-items`.

Need to override just one item? Use `align-self` on that child instead of `align-items` on the container:

```css
.special-child { align-self: flex-end; }
```

---

## 5. flex-wrap

By default, flex items try to fit on one line, shrinking if needed. `flex-wrap: wrap` lets them flow onto multiple lines — this is what makes flex layouts responsive.

![flex-wrap diagram](./images/flex-wrap.svg)

```css
.container { flex-wrap: nowrap; }       /* default: single line, items shrink */
.container { flex-wrap: wrap; }         /* overflow moves to new lines */
.container { flex-wrap: wrap-reverse; } /* wraps, but stacks new lines above */
```

Shorthand combining direction + wrap:

```css
.container { flex-flow: row wrap; }
```

When wrapping is active, `align-content` controls how the *lines themselves* are spaced on the cross axis (it's to lines what `align-items` is to items within a line).

---

## 6. flex-grow, flex-shrink, flex-basis

These three control how an individual item's **size** behaves — set on the *children*, not the container.

![flex-grow-shrink-basis diagram](./images/flex-grow-shrink-basis.svg)

```css
.item {
  flex-grow: 1;    /* share of extra space this item takes, relative to siblings */
  flex-shrink: 1;  /* how much this item shrinks when space is tight, relative to siblings */
  flex-basis: 200px; /* starting size before grow/shrink kicks in (like width, but axis-aware) */
}

/* shorthand — almost always prefer this over the longhands */
.item { flex: 1 1 200px; }

/* common shorthand patterns */
.item { flex: 1; }      /* flex: 1 1 0%  → grow and shrink equally, ignore natural size */
.item { flex: auto; }   /* flex: 1 1 auto → grow and shrink, base size = content size */
.item { flex: none; }   /* flex: 0 0 auto → rigid, never grows or shrinks */
```

**Why `flex: 1` and not `flex-grow: 1` alone?** `flex-grow` only distributes *extra* space — it says nothing about shrinking. In a real layout with unpredictable content, you almost always want the shorthand so grow, shrink, and basis are set together intentionally instead of relying on individual defaults.

---

## 7. gap

Modern, and much cleaner than margin hacks for spacing between items:

```css
.container {
  display: flex;
  gap: 16px;          /* same gap row and column */
  gap: 16px 24px;      /* row-gap column-gap */
}
```

`gap` respects `flex-wrap` correctly (no extra gap dangling at the container's edge, unlike margins), and it's logical-property-safe by nature — no LTR/RTL adjustment needed.

---

## 8. Common Patterns

### Perfect centering (both axes)
```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### Space-between navbar (logo left, links right)
```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

### Sticky footer (footer pinned to bottom even with little content)
```css
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main-content { flex: 1; } /* grows to push footer down */
```

### Equal-width columns regardless of content length
```css
.row { display: flex; gap: 12px; }
.row > .column { flex: 1; } /* each column grows/shrinks equally */
```

### RTL-safe row (mirrors automatically)
```css
.row {
  display: flex;
  flex-direction: row; /* engine flips start/end automatically under dir="rtl" */
  gap: 12px;
}
.icon { margin-inline-end: 8px; } /* not margin-right */
```

---

## 9. Quick Debugging Checklist

- Item not growing? Check `flex-grow` isn't `0` (the default) and the parent actually has extra space to distribute.
- Item not shrinking below its content size? Set `min-width: 0` (or `min-height: 0` for column) — flex items default to `min-width: auto`, which can block shrinking.
- Alignment doing nothing? Confirm you're setting it on the **container**, not the item (except `align-self`).
- Gap not appearing? Check `flex-wrap` is set if you expect multi-line gaps, and confirm no browser prefix issues (gap in flexbox needs a reasonably modern browser — universally supported today).

---

*Related: [CSS Grid Reference](./grid-reference.md)*
