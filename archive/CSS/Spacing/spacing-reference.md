# CSS Spacing Reference Guide

## Overview

CSS spacing properties control the space around and between elements. Understanding margin, padding, and gap is essential for creating well-designed layouts.

## Margin

The `margin` property creates space around an element, outside of any defined borders.

### Margin Properties

```css
margin: 20px;           /* All sides */
margin: 10px 20px;     /* Top/bottom: 10px, Left/right: 20px */
margin: 10px 20px 30px; /* Top: 10px, Left/right: 20px, Bottom: 30px */
margin: 10px 20px 30px 40px; /* Top: 10px, Right: 20px, Bottom: 30px, Left: 40px */
```

### Individual Margin Properties

```css
margin-top: 20px;
margin-right: 20px;
margin-bottom: 20px;
margin-left: 20px;
```

### Auto Margin

```css
margin: 0 auto; /* Centers block element horizontally */
```

This works when the element has a defined width and the parent has a larger width.

### Negative Margin

```css
margin: -10px;
margin-top: -20px;
```

Negative margins can pull elements closer together or create overlapping effects.

## Padding

The `padding` property creates space inside an element, between the content and the border.

### Padding Properties

```css
padding: 20px;           /* All sides */
padding: 10px 20px;     /* Top/bottom: 10px, Left/right: 20px */
padding: 10px 20px 30px; /* Top: 10px, Left/right: 20px, Bottom: 30px */
padding: 10px 20px 30px 40px; /* Top: 10px, Right: 20px, Bottom: 30px, Left: 40px */
```

### Individual Padding Properties

```css
padding-top: 20px;
padding-right: 20px;
padding-bottom: 20px;
padding-left: 20px;
```

## Gap Property

The `gap` property sets spacing between flex items or grid items.

### Flexbox Gap

```css
.container {
  display: flex;
  gap: 20px; /* Space between items */
}
```

### Grid Gap

```css
.container {
  display: grid;
  gap: 20px; /* Space between rows and columns */
}
```

### Individual Gap Properties

```css
row-gap: 20px;    /* Space between rows */
column-gap: 20px; /* Space between columns */
gap: 20px 30px;   /* Row gap: 20px, Column gap: 30px */
```

## Margin Collapsing

Margin collapsing is a CSS behavior where adjacent margins combine into a single margin.

### When Margins Collapse

- Adjacent sibling elements
- Parent and first/last child
- Empty elements

### Collapsing Rules

- The larger margin is used
- Negative margins can reduce or eliminate the collapsed margin

### Preventing Margin Collapse

```css
.parent {
  padding-top: 1px; /* Prevents collapse with first child */
  padding-bottom: 1px; /* Prevents collapse with last child */
}
```

Or:
```css
.parent {
  display: flex; /* Flexbox prevents margin collapse */
}
```

## Spacing Systems

### Using CSS Custom Properties

```css
:root {
  --spacing-xs: 0.25rem;  /* 4px */
  --spacing-sm: 0.5rem;   /* 8px */
  --spacing-md: 1rem;     /* 16px */
  --spacing-lg: 1.5rem;   /* 24px */
  --spacing-xl: 2rem;     /* 32px */
  --spacing-2xl: 3rem;    /* 48px */
}

.element {
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
}
```

### 8pt Grid System

```css
:root {
  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 32px;
  --space-5: 40px;
  --space-6: 48px;
}
```

## Common Patterns

### Card Spacing

```css
.card {
  padding: 24px;
  margin-bottom: 24px;
}
```

### Section Spacing

```css
.section {
  padding: 80px 20px;
  margin-bottom: 40px;
}
```

### Container Spacing

```css
.container {
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto;
}
```

### Button Spacing

```css
.button {
  padding: 12px 24px;
  margin-right: 12px;
}
```

## Responsive Spacing

```css
.element {
  padding: 16px;
}

@media (min-width: 768px) {
  .element {
    padding: 24px;
  }
}

@media (min-width: 1024px) {
  .element {
    padding: 32px;
  }
}
```

## Best Practices

1. **Use `gap` instead of margins** for flex/grid layouts
2. **Create a spacing system** with CSS custom properties
3. **Be consistent** with spacing values
4. **Use padding inside** elements, margin outside
5. **Consider margin collapse** when debugging
6. **Use auto margin** for centering block elements
7. **Prefer relative units** (rem) for responsive spacing

## Common Issues

### Why is my margin not working?

- Element has `display: inline` (block-level needed)
- Parent has `overflow: hidden` (can affect margins)
- Margin collapse occurring
- Using wrong property (margin vs padding)

### Why is there unexpected space between elements?

- Default browser margins (use CSS reset)
- Margin collapse behavior
- Whitespace in HTML (for inline elements)

### Why is gap not working?

- Browser doesn't support gap in Flexbox (older browsers)
- Need to use vendor prefixes or fallback
- Container doesn't have `display: flex` or `display: grid`

## Spacing vs Padding

| Property | Outside Element | Inside Element | Affects Layout |
|----------|----------------|----------------|----------------|
| Margin | ✅ | ❌ | ✅ |
| Padding | ❌ | ✅ | ✅ |
| Gap | ❌ | ❌ | ✅ (between items) |

## Modern Spacing

### Logical Properties

```css
/* Physical properties */
margin-left: 20px;
margin-right: 20px;

/* Logical properties (for RTL support) */
margin-inline-start: 20px;
margin-inline-end: 20px;
```

### Container Queries (New)

```css
@container (min-width: 400px) {
  .card {
    padding: 32px;
  }
}
```

## Browser Support

All spacing properties are well-supported in modern browsers. `gap` in Flexbox has good modern support. Check [Can I Use](https://caniuse.com/) for specific feature support.
