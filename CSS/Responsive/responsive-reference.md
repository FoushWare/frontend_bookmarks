# CSS Responsive Design Reference Guide

## Overview

Responsive design ensures websites work beautifully on all devices by adapting layouts, typography, and images to different screen sizes using CSS media queries and modern CSS functions.

## Media Queries

Media queries apply CSS styles based on device characteristics like screen width, height, orientation, and resolution.

### Basic Syntax

```css
@media (min-width: 768px) {
  /* Styles for screens 768px and wider */
}

@media (max-width: 767px) {
  /* Styles for screens up to 767px */
}
```

### Common Breakpoints

```css
/* Mobile First Approach */
/* Base styles for mobile */

@media (min-width: 640px) {
  /* Small tablets and large phones */
}

@media (min-width: 768px) {
  /* Tablets */
}

@media (min-width: 1024px) {
  /* Desktops */
}

@media (min-width: 1280px) {
  /* Large desktops */
}
```

### Media Query Features

```css
/* Width */
@media (min-width: 768px) { }
@media (max-width: 1024px) { }

/* Height */
@media (min-height: 600px) { }

/* Orientation */
@media (orientation: portrait) { }
@media (orientation: landscape) { }

/* Resolution */
@media (min-resolution: 2dppx) { }

/* Print */
@media print { }

/* Hover capability */
@media (hover: hover) { }
@media (hover: none) { }
```

## CSS Functions for Responsive Design

### Clamp

```css
font-size: clamp(16px, 2vw, 24px);
```

Clamps a value between minimum and maximum, with preferred value in between.

### Min and Max

```css
width: min(100%, 800px);
height: max(300px, 50vh);
```

### Calc

```css
width: calc(100% - 40px);
padding: calc(1rem + 2px);
```

## Viewport Units

```css
width: 100vw;  /* Viewport width */
height: 100vh; /* Viewport height */
width: 50vw;   /* Half viewport width */
height: 50dvh; /* Dynamic viewport height (accounts for mobile address bar) */
```

## Responsive Images

### Using srcset

```html
<img src="image.jpg"
     srcset="image-small.jpg 480w,
             image-medium.jpg 800w,
             image-large.jpg 1200w"
     sizes="(max-width: 600px) 480px,
            (max-width: 900px) 800px,
            1200px"
     alt="Description">
```

### Using picture Element

```html
<picture>
  <source media="(max-width: 600px)" srcset="image-small.jpg">
  <source media="(max-width: 900px)" srcset="image-medium.jpg">
  <img src="image-large.jpg" alt="Description">
</picture>
```

## Responsive Typography

### Fluid Typography

```css
html {
  font-size: calc(16px + 0.25vw);
}
```

### Using Clamp

```css
h1 {
  font-size: clamp(1.5rem, 5vw, 3rem);
}
```

### Media Query Typography

```css
body {
  font-size: 16px;
}

@media (min-width: 768px) {
  body {
    font-size: 18px;
  }
}
```

## Responsive Layouts

### Mobile-First Approach

```css
/* Mobile styles (default) */
.container {
  padding: 20px;
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    padding: 40px;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .container {
    padding: 60px;
  }
}
```

### Desktop-First Approach

```css
/* Desktop styles (default) */
.container {
  padding: 60px;
}

/* Tablet and down */
@media (max-width: 1023px) {
  .container {
    padding: 40px;
  }
}

/* Mobile */
@media (max-width: 767px) {
  .container {
    padding: 20px;
  }
}
```

## Responsive Grid

```css
.grid {
  display: grid;
  grid-template-columns: 1fr; /* Mobile: 1 column */
  gap: 20px;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr); /* Tablet: 2 columns */
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr); /* Desktop: 3 columns */
  }
}
```

## Auto-Fit and Auto-Fill

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

This creates as many columns as fit, with each column at least 250px wide.

## Common Patterns

### Responsive Container

```css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
```

### Responsive Navigation

```css
.nav {
  display: flex;
  flex-direction: column; /* Mobile */
}

@media (min-width: 768px) {
  .nav {
    flex-direction: row; /* Desktop */
  }
}
```

### Responsive Cards

```css
.card {
  width: 100%;
}

@media (min-width: 768px) {
  .card {
    width: calc(50% - 10px);
  }
}

@media (min-width: 1024px) {
  .card {
    width: calc(33.333% - 14px);
  }
}
```

## Best Practices

1. **Use mobile-first approach** for better performance
2. **Use relative units** (rem, %, vw) for scalability
3. **Test on real devices** not just browser resize
4. **Use `min-width`** for mobile-first, `max-width` for desktop-first
5. **Optimize images** for different screen sizes
6. **Use CSS functions** (clamp, min, max) for fluid design
7. **Consider touch targets** on mobile (minimum 44px)

## Common Issues

### Why is my media query not working?

- Check media query syntax is correct
- Verify breakpoint values
- Look for CSS specificity conflicts
- Check if viewport meta tag is set
- Test with browser DevTools device emulation

### Why is my layout breaking on mobile?

- Not using mobile-first approach
- Fixed widths instead of percentages
- Not testing on actual devices
- Missing viewport meta tag

## Viewport Meta Tag

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

This is essential for responsive design to work properly on mobile devices.

## Browser Support

All responsive design features are well-supported in modern browsers. Check [Can I Use](https://caniuse.com/) for specific feature support.
