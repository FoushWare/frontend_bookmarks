# CSS Responsive Design Interview Questions

## Basic Questions

### 1. What is responsive design?

**Answer:** Responsive design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes. It uses flexible layouts, flexible images, and CSS media queries to adapt the design to different screen sizes.

### 2. What is a media query?

**Answer:** A media query is a CSS technique that applies styles based on device characteristics like screen width, height, orientation, and resolution.

```css
@media (min-width: 768px) {
  /* Styles for screens 768px and wider */
}
```

### 3. What is the difference between `min-width` and `max-width` in media queries?

**Answer:**
- `min-width`: Styles apply when viewport is at least the specified width (mobile-first approach)
- `max-width`: Styles apply when viewport is at most the specified width (desktop-first approach)

### 4. What is the viewport meta tag?

**Answer:** The viewport meta tag controls how the webpage is displayed on mobile devices. It's essential for responsive design.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### 5. What is the difference between mobile-first and desktop-first design?

**Answer:**
- **Mobile-first**: Start with mobile styles, add complexity for larger screens (better performance)
- **Desktop-first**: Start with desktop styles, add overrides for smaller screens

## Intermediate Questions

### 6. How do you create a responsive grid layout?

**Answer:**
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

This creates as many columns as fit, with each column at least 250px wide.

### 7. What is the `clamp()` function used for?

**Answer:** `clamp(min, preferred, max)` clamps a value between minimum and maximum, with a preferred value in between. Great for responsive typography.

```css
font-size: clamp(16px, 2vw, 24px);
```

### 8. How do you make images responsive?

**Answer:**
```css
img {
  max-width: 100%;
  height: auto;
}
```

Or with srcset for different resolutions:
```html
<img src="image.jpg"
     srcset="image-small.jpg 480w,
             image-large.jpg 800w"
     alt="Description">
```

### 9. What are viewport units?

**Answer:** Viewport units are relative to the viewport size:
- `vw`: 1% of viewport width
- `vh`: 1% of viewport height
- `vmin`: 1% of smaller viewport dimension
- `vmax`: 1% of larger viewport dimension

### 10. How do you create responsive typography?

**Answer:**
```css
/* Using clamp */
h1 {
  font-size: clamp(1.5rem, 5vw, 3rem);
}

/* Using calc */
html {
  font-size: calc(16px + 0.25vw);
}

/* Using media queries */
body {
  font-size: 16px;
}
@media (min-width: 768px) {
  body {
    font-size: 18px;
  }
}
```

## Advanced Questions

### 11. What is the difference between `auto-fit` and `auto-fill` in CSS Grid?

**Answer:**
- `auto-fit`: Creates as many columns as fit, expands empty columns to fill space
- `auto-fill`: Creates as many columns as fit, keeps empty columns as placeholders

```css
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
```

### 12. How do you handle responsive navigation?

**Answer:**
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

### 13. What is the `picture` element and when should you use it?

**Answer:** The `picture` element allows you to provide different image sources based on media queries, useful for art direction (different crops for different screen sizes).

```html
<picture>
  <source media="(max-width: 600px)" srcset="portrait.jpg">
  <source media="(min-width: 601px)" srcset="landscape.jpg">
  <img src="default.jpg" alt="Description">
</picture>
```

### 14. How do you optimize responsive design for performance?

**Answer:**
- Use mobile-first approach (load less CSS initially)
- Optimize images for different screen sizes
- Use responsive images with srcset
- Lazy load below-the-fold content
- Minimize CSS file size
- Use CSS functions instead of multiple media queries when possible

### 15. What is `dvh` and when should you use it?

**Answer:** `dvh` (dynamic viewport height) accounts for mobile browser address bars that can hide/show. Use it instead of `vh` for full-height layouts on mobile.

```css
.hero {
  height: 100dvh; /* Better for mobile */
}
```

### 16. Why is my media query not working?

**Answer:** Common causes:
- Missing viewport meta tag
- Incorrect media query syntax
- CSS specificity conflicts
- Not testing on actual devices
- Wrong breakpoint values

### 17. How do you create a responsive container?

**Answer:**
```css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
```

### 18. What is the difference between `min()` and `max()` functions?

**Answer:**
- `min(value1, value2, ...)`: Returns the smallest value
- `max(value1, value2, ...)`: Returns the largest value

```css
width: min(100%, 800px); /* Never wider than 800px */
height: max(300px, 50vh); /* At least 300px tall */
```

### 19. How do you handle touch targets on mobile?

**Answer:** Ensure interactive elements are at least 44px by 44px for touch targets:

```css
.button {
  min-height: 44px;
  min-width: 44px;
  padding: 12px 24px;
}
```

### 20. How do you test responsive design?

**Answer:**
- Use browser DevTools device emulation
- Test on actual devices
- Use online testing tools (BrowserStack, LambdaTest)
- Test at different breakpoints
- Test in both portrait and landscape orientations

## Practical Questions

### 21. How would you implement a responsive card layout?

**Answer:**
```css
.cards {
  display: grid;
  grid-template-columns: 1fr; /* Mobile */
  gap: 20px;
}

@media (min-width: 768px) {
  .cards {
    grid-template-columns: repeat(2, 1fr); /* Tablet */
  }
}

@media (min-width: 1024px) {
  .cards {
    grid-template-columns: repeat(3, 1fr); /* Desktop */
  }
}
```

### 22. How do you create a responsive navigation with a hamburger menu?

**Answer:**
```css
.nav-links {
  display: none; /* Mobile */
}

@media (min-width: 768px) {
  .nav-links {
    display: flex; /* Desktop */
  }
}
```

With JavaScript to toggle the menu on mobile.

### 23. How would you implement responsive typography for headings?

**Answer:**
```css
h1 {
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 1.2;
}

h2 {
  font-size: clamp(1.5rem, 4vw, 3rem);
  line-height: 1.3;
}
```

### 24. How do you create a responsive hero section?

**Answer:**
```css
.hero {
  min-height: 100dvh;
  padding: 20px;
}

@media (min-width: 768px) {
  .hero {
    padding: 60px 40px;
  }
}

@media (min-width: 1024px) {
  .hero {
    padding: 80px 60px;
  }
}
```

### 25. How would you implement a responsive sidebar layout?

**Answer:**
```css
.layout {
  display: flex;
  flex-direction: column; /* Mobile */
}

@media (min-width: 1024px) {
  .layout {
    flex-direction: row; /* Desktop */
  }
}

.sidebar {
  width: 100%;
}

@media (min-width: 1024px) {
  .sidebar {
    width: 250px;
    flex-shrink: 0;
  }
}
```

## Troubleshooting Questions

### 26. Why is my layout breaking on mobile?

**Answer:** Common causes:
- Not using mobile-first approach
- Fixed widths instead of percentages
- Missing viewport meta tag
- Not testing on actual devices
- Touch targets too small

### 27. How do you debug responsive issues?

**Answer:**
- Use browser DevTools device emulation
- Check viewport meta tag
- Verify media query syntax
- Look for CSS specificity conflicts
- Test on actual devices
- Use browser's responsive design mode

### 28. Why is my fluid typography not scaling?

**Answer:** Common causes:
- Not using viewport units or functions
- Parent element has fixed width
- Using px instead of relative units
- Calc/clamp values not appropriate

### 29. How do you handle browsers that don't support modern CSS functions?

**Answer:** Provide fallbacks:
```css
font-size: 16px; /* Fallback */
font-size: clamp(16px, 2vw, 24px); /* Modern */
```

### 30. Why is my grid not collapsing on smaller screens?

**Answer:** Common causes:
- Not using `auto-fit` or `auto-fill`
- `minmax` minimum too large
- Fixed grid-template-columns
- Container width constraints

## Performance Questions

### 31. Does responsive design affect performance?

**Answer:** Responsive design can improve performance when done correctly (mobile-first loads less CSS). However, poorly implemented responsive design can hurt performance (loading large images on mobile).

### 32. How can you optimize responsive design performance?

**Answer:**
- Use mobile-first approach
- Optimize images for different screen sizes
- Use responsive images with srcset
- Lazy load below-the-fold content
- Minimize CSS file size
- Use CSS functions to reduce media queries

### 33. What is the impact of media queries on performance?

**Answer:** Media queries themselves have minimal performance impact. The main performance consideration is the CSS that is loaded and executed within those media queries.

## Edge Cases

### 34. What happens when you use both min-width and max-width in the same media query?

**Answer:** Both conditions must be true:
```css
@media (min-width: 768px) and (max-width: 1023px) {
  /* Styles for tablets only */
}
```

### 35. How do you handle orientation changes?

**Answer:**
```css
@media (orientation: portrait) {
  /* Portrait styles */
}

@media (orientation: landscape) {
  /* Landscape styles */
}
```

### 36. What is the difference between `em` and `rem` for responsive typography?

**Answer:**
- `em`: Relative to parent element's font-size
- `rem`: Relative to root element's font-size (more consistent for responsive design)

### 37. How do you create a breakpoint system?

**Answer:**
```css
:root {
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
}

@media (min-width: var(--breakpoint-md)) {
  /* Tablet styles */
}
```

### 38. What happens with print media queries?

**Answer:** Print media queries apply styles when printing:
```css
@media print {
  body {
    font-size: 12pt;
    color: black;
  }
  .no-print {
    display: none;
  }
}
```

## Modern Responsive Design

### 39. What new responsive features are available in modern browsers?

**Answer:**
- `clamp()`, `min()`, `max()` functions
- `dvh` (dynamic viewport height)
- Container queries (growing support)
- Better DevTools support
- Improved mobile browser support

### 40. How do you use container queries for responsive design?

**Answer:**
```css
@container (min-width: 400px) {
  .card {
    flex-direction: row;
  }
}
```

This allows components to respond to their container's size rather than the viewport.

## Best Practices

### 41. What are the best practices for responsive design?

**Answer:**
- Use mobile-first approach
- Use relative units (rem, %, vw)
- Test on real devices
- Use CSS functions for fluid design
- Optimize images for different sizes
- Ensure touch targets are large enough
- Use semantic HTML

### 42. When should you use media queries vs CSS functions?

**Answer:**
- **Media queries**: For layout changes, showing/hiding elements
- **CSS functions**: For smooth scaling of values (typography, spacing)

### 43. How do you ensure accessibility with responsive design?

**Answer:**
- Ensure content is accessible on all screen sizes
- Don't hide content on mobile without good reason
- Maintain sufficient contrast
- Ensure touch targets are large enough
- Test with screen readers on mobile

### 44. What are common responsive design mistakes to avoid?

**Answer:**
- Not using viewport meta tag
- Fixed widths instead of percentages
- Not testing on actual devices
- Poor touch target sizes
- Loading large images on mobile
- Not considering orientation changes

### 45. How do you document breakpoints for a team?

**Answer:**
```css
/**
 * Breakpoint System
 * 
 * Mobile First Approach:
 * --breakpoint-sm: 640px (small tablets, large phones)
 * --breakpoint-md: 768px (tablets)
 * --breakpoint-lg: 1024px (desktops)
 * --breakpoint-xl: 1280px (large desktops)
 * 
 * Usage:
 * @media (min-width: var(--breakpoint-md)) {
 *   /* Tablet styles */
 * }
 */
```
