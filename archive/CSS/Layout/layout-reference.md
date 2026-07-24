# CSS Layout Reference Guide

## Overview

CSS Layout is the foundation of web design. Understanding how elements are positioned and sized is crucial for building any interface.

## Display Property

The `display` property determines how an element is displayed and how it interacts with other elements.

### Common Values

```css
/* Block-level elements */
display: block;       /* Takes full width, starts on new line */
display: flex;        /* Flexbox container */
display: grid;        /* Grid container */

/* Inline elements */
display: inline;      /* Takes only content width, stays on same line */
display: inline-block; /* Inline but can have width/height */

/* Others */
display: none;        /* Element is hidden, removed from layout */
display: inline-flex; /* Inline flexbox container */
display: inline-grid; /* Inline grid container */
```

### Block vs Inline vs Inline-Block

**Block Elements:**
- `div`, `p`, `h1-h6`, `ul`, `li`, `section`, `article`
- Take full available width
- Start on new line
- Can have width/height/margin/padding

**Inline Elements:**
- `span`, `a`, `strong`, `em`, `img`, `button`
- Take only content width
- Stay on same line
- Cannot have width/height (vertical margin/padding behaves differently)

**Inline-Block:**
- Combines both behaviors
- Stays on same line like inline
- Can have width/height like block

## Position Property

The `position` property determines how an element is positioned in the document flow.

### Position Values

```css
/* Default positioning */
position: static;     /* Normal document flow */

/* Relative positioning */
position: relative;   /* Relative to its normal position */

/* Absolute positioning */
position: absolute;   /* Relative to nearest positioned ancestor */

/* Fixed positioning */
position: fixed;      /* Relative to viewport */

/* Sticky positioning */
position: sticky;     /* Toggles between relative and fixed */
```

### Positioning Examples

#### Static (Default)
```css
.element {
  position: static;
  /* Normal document flow */
}
```

#### Relative
```css
.element {
  position: relative;
  top: 20px;
  left: 10px;
  /* Moves relative to its normal position */
}
```

#### Absolute
```css
.parent {
  position: relative; /* Creates positioning context */
}
.child {
  position: absolute;
  top: 0;
  right: 0;
  /* Positioned relative to parent */
}
```

#### Fixed
```css
.element {
  position: fixed;
  top: 20px;
  right: 20px;
  /* Fixed to viewport, stays visible on scroll */
}
```

#### Sticky
```css
.element {
  position: sticky;
  top: 0;
  /* Sticks to top when scrolling past it */
}
```

## Offset Properties

Used with `position` (except static):

```css
top: 20px;
right: 30px;
bottom: 40px;
left: 50px;
```

## Z-Index

Controls stacking order of positioned elements.

```css
.element {
  position: relative;
  z-index: 10; /* Higher values appear on top */
}
```

**Important:** `z-index` only works on positioned elements (`relative`, `absolute`, `fixed`, `sticky`).

## Overflow Property

Controls content that exceeds element dimensions.

```css
overflow: visible;   /* Default - content spills out */
overflow: hidden;    /* Content is clipped */
overflow: scroll;    /* Scrollbars always visible */
overflow: auto;      /* Scrollbars appear when needed */
```

### Individual Axes
```css
overflow-x: hidden;
overflow-y: auto;
```

## Visibility Property

```css
visibility: visible;  /* Default */
visibility: hidden;   /* Element hidden but takes up space */
```

**Difference from `display: none`:**
- `visibility: hidden` - element invisible but still takes up space
- `display: none` - element removed from layout completely

## Stacking Context

A stacking context determines how elements are layered on top of each other.

### What Creates a Stacking Context

- `position: relative/absolute/fixed` with `z-index` not `auto`
- `position: fixed/sticky`
- `opacity` less than 1
- `transform`, `filter`, `perspective`
- `isolation: isolate`
- And more...

### Stacking Context Rules

Elements in a stacking context are stacked according to:
1. Root element (html)
2. Positioned elements with negative z-index
3. Non-positioned elements
4. Positioned elements with z-index: auto
5. Positioned elements with positive z-index

## Common Layout Patterns

### Absolute Inside Relative
```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

### Center with Transform
```css
.element {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

### Sticky Header
```css
header {
  position: sticky;
  top: 0;
  z-index: 1000;
}
```

## Practice Projects

1. **Hero Section** - Full-width banner with centered content
2. **Cards** - Grid of cards with consistent spacing
3. **Sidebars** - Fixed sidebar with scrollable content
4. **Sticky Headers** - Navigation that stays visible on scroll
5. **Floating Buttons** - Action buttons positioned fixed to viewport

## Common Issues

### Why isn't this element centered?
- Check if parent has `display: flex` or `position: relative`
- Verify `transform` values are correct
- Ensure element has dimensions

### Why is z-index not working?
- Element must have `position` other than `static`
- Check if parent creates new stacking context
- Verify z-index value is numeric

### Why is overflow not clipping?
- Ensure element has fixed height/width
- Check if child elements have `position: absolute` outside parent
- Verify `overflow` property is set correctly

## Browser Support

All layout properties are well-supported in modern browsers. Check [Can I Use](https://caniuse.com/) for specific feature support.
