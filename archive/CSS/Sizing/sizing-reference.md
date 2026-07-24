# CSS Sizing Reference Guide

## Overview

CSS sizing properties control the dimensions of elements. Understanding how different units work and when to use them is fundamental to building responsive layouts.

## Width and Height

### Basic Properties

```css
width: 300px;
height: 200px;
```

### Minimum and Maximum Dimensions

```css
min-width: 200px;
max-width: 800px;
min-height: 100px;
max-height: 600px;
```

These ensure elements don't get too small or too large.

## CSS Units

### Absolute Units

**Pixels (px)**
- Fixed size, not scalable
- 1px = 1/96th of an inch
- Good for borders, precise control

```css
width: 300px;
```

### Relative Units

**Percentage (%)**
- Relative to parent element
- Width: % of parent width
- Height: % of parent height

```css
width: 50%; /* Half of parent width */
height: 100%; /* Full parent height */
```

**Viewport Units**
- `vw`: 1% of viewport width
- `vh`: 1% of viewport height
- `vmin`: 1% of smaller viewport dimension
- `vmax`: 1% of larger viewport dimension

```css
width: 100vw; /* Full viewport width */
height: 100vh; /* Full viewport height */
```

**Font-Relative Units**
- `em`: Relative to font-size of element
- `rem`: Relative to font-size of root element (html)

```css
width: 20em; /* 20 times the element's font-size */
width: 2rem; /* 2 times the root font-size */
```

**Grid Units**
- `fr`: Fraction of available space in CSS Grid

```css
grid-template-columns: 1fr 2fr 1fr;
```

## Box Sizing

The `box-sizing` property determines how width and height are calculated.

### Content Box (Default)

```css
box-sizing: content-box;
```

Width/height only includes content, not padding/border.

### Border Box

```css
box-sizing: border-box;
```

Width/height includes content, padding, and border. This is usually preferred.

**Global Reset:**
```css
*, *::before, *::after {
  box-sizing: border-box;
}
```

## Aspect Ratio

The `aspect-ratio` property sets the preferred aspect ratio of an element.

```css
.image {
  aspect-ratio: 16 / 9;
  width: 100%;
}
```

This creates responsive images that maintain their proportions.

## Common Patterns

### Responsive Width with Max Width

```css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
```

### Full Height Container

```css
.container {
  height: 100vh;
}
```

### Minimum Height for Content

```css
.section {
  min-height: 400px;
}
```

### Square Elements

```css
.square {
  aspect-ratio: 1 / 1;
  width: 200px;
}
```

## Responsive Sizing

### Using Clamp

```css
font-size: clamp(16px, 2vw, 24px);
```

Clamps a value between minimum and maximum, with preferred value in between.

### Using Min and Max

```css
width: min(100%, 500px);
height: max(300px, 50vh);
```

### Using Calc

```css
width: calc(100% - 40px);
height: calc(100vh - 80px);
```

## Unit Comparison

| Unit | Type | Best For |
|------|------|----------|
| px | Absolute | Borders, precise control |
| % | Relative | Responsive widths/heights |
| vw/vh | Viewport | Full-screen layouts |
| rem | Font-relative | Consistent spacing |
| em | Font-relative | Component-relative sizing |
| fr | Grid | Grid track sizing |

## Best Practices

1. **Use `border-box` globally** - Makes sizing more predictable
2. **Prefer relative units** - Better for responsive design
3. **Set constraints** - Use min/max to prevent layout issues
4. **Use `aspect-ratio`** - For responsive images/videos
5. **Consider viewport units** - For full-screen layouts
6. **Use `rem` for spacing** - Consistent across components
7. **Use `calc()`** - For complex calculations

## Common Issues

### Why is my element not the size I expect?

- Check `box-sizing` value
- Verify parent has defined size (for %)
- Look for padding/border affecting size
- Check for min/max constraints

### Why is my percentage width not working?

- Parent must have defined width
- Check if parent is also using percentage
- Verify parent has `display` property that establishes width

### Why is my viewport unit not working on mobile?

- Mobile browsers have address bars that affect viewport
- Use `dvh` (dynamic viewport height) for mobile
- Consider fallback to percentage

## Modern Sizing

### Container Queries (New)

```css
@container (min-width: 400px) {
  .card {
    width: 100%;
  }
}
```

### CSS Functions

```css
/* Clamp for responsive typography */
font-size: clamp(1rem, 2.5vw, 2rem);

/* Min for responsive width */
width: min(100%, 800px);

/* Max for responsive height */
height: max(300px, 50vh);

/* Calc for calculations */
width: calc(100% / 3 - 20px);
```

## Browser Support

All sizing properties are well-supported in modern browsers. Check [Can I Use](https://caniuse.com/) for specific feature support, especially for newer features like `aspect-ratio` and `dvh`.
