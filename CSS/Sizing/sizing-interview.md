# CSS Sizing Interview Questions

## Basic Questions

### 1. What is the difference between `width` and `max-width`?

**Answer:**
- `width`: Sets the exact width of an element
- `max-width`: Sets the maximum width an element can grow to, but allows it to be smaller

```css
.element {
  width: 500px; /* Always 500px */
}
.element {
  max-width: 500px; /* Up to 500px, can be smaller */
}
```

### 2. What is the difference between `px`, `em`, and `rem`?

**Answer:**
- `px`: Absolute unit, 1 pixel (not scalable)
- `em`: Relative to the element's font-size
- `rem`: Relative to the root element's (html) font-size

```css
.element {
  font-size: 16px;
  width: 20em; /* 20 × 16px = 320px */
}
.element {
  width: 2rem; /* 2 × root font-size (usually 16px = 32px) */
}
```

### 3. What are viewport units (`vw`, `vh`)?

**Answer:**
- `vw`: 1% of viewport width
- `vh`: 1% of viewport height
- `vmin`: 1% of smaller viewport dimension
- `vmax`: 1% of larger viewport dimension

### 4. What is `box-sizing` and why is it important?

**Answer:** `box-sizing` determines how width and height are calculated:
- `content-box` (default): Width/height only includes content
- `border-box`: Width/height includes content, padding, and border

`border-box` is preferred because it makes sizing more predictable.

### 5. What is the `aspect-ratio` property?

**Answer:** The `aspect-ratio` property sets the preferred aspect ratio of an element, maintaining proportions as the element resizes.

```css
.image {
  aspect-ratio: 16 / 9;
  width: 100%;
}
```

## Intermediate Questions

### 6. How do you create a responsive container with a maximum width?

**Answer:**
```css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
```

### 7. What is the difference between `min-width` and `width`?

**Answer:**
- `width`: Sets the exact width
- `min-width`: Sets the minimum width, but allows element to grow larger

```css
.element {
  min-width: 200px; /* At least 200px, can be larger */
}
```

### 8. How do you create a full-height element?

**Answer:**
```css
.element {
  height: 100vh;
}
```

Or for mobile with address bar:
```css
.element {
  height: 100dvh; /* Dynamic viewport height */
}
```

### 9. What is the `calc()` function used for?

**Answer:** `calc()` performs mathematical calculations to determine property values:

```css
.element {
  width: calc(100% - 40px);
  height: calc(100vh - 80px);
}
```

### 10. How do you create a square element that maintains its shape?

**Answer:**
```css
.square {
  aspect-ratio: 1 / 1;
  width: 200px;
}
```

Or older method:
```css
.square {
  width: 200px;
  height: 200px;
}
```

## Advanced Questions

### 11. What is the `clamp()` function and when would you use it?

**Answer:** `clamp(min, preferred, max)` clamps a value between minimum and maximum, with a preferred value in between. Great for responsive typography:

```css
font-size: clamp(16px, 2vw, 24px);
```

This ensures font size is at least 16px, at most 24px, and scales with viewport width in between.

### 12. What is the difference between `min()` and `max()` functions?

**Answer:**
- `min(value1, value2, ...)`: Returns the smallest value
- `max(value1, value2, ...)`: Returns the largest value

```css
width: min(100%, 800px); /* Never wider than 800px */
height: max(300px, 50vh); /* At least 300px tall */
```

### 13. How do you handle sizing on mobile devices with address bars?

**Answer:** Use `dvh` (dynamic viewport height) instead of `vh`:

```css
.element {
  height: 100dvh; /* Accounts for mobile address bar */
}
```

### 14. What is the `fr` unit in CSS Grid?

**Answer:** The `fr` unit represents a fraction of available space in a CSS Grid container:

```css
.container {
  grid-template-columns: 1fr 2fr 1fr;
}
```

This creates three columns with a 1:2:1 ratio.

### 15. How do you create responsive images that maintain aspect ratio?

**Answer:**
```css
.image {
  aspect-ratio: 16 / 9;
  width: 100%;
  height: auto;
  object-fit: cover;
}
```

### 16. What happens when you set `width: 100%` on a block element?

**Answer:** The element will take up 100% of its parent's width, minus any padding/border/margin on the parent (if using `border-box`).

### 17. How do you create a container that is responsive but has a minimum width?

**Answer:**
```css
.container {
  width: 100%;
  min-width: 320px;
  max-width: 1200px;
}
```

### 18. What is the difference between percentage width and viewport width?

**Answer:**
- Percentage (`%`): Relative to parent element's width
- Viewport width (`vw`): Relative to the viewport's width

```css
.child {
  width: 50%; /* 50% of parent width */
}
.element {
  width: 50vw; /* 50% of viewport width */
}
```

### 19. How do you create an element that fills available space but has constraints?

**Answer:**
```css
.element {
  flex: 1;
  min-width: 200px;
  max-width: 800px;
}
```

### 20. What is the difference between `auto` and `100%` for width?

**Answer:**
- `auto`: Element takes up space based on its content
- `100%`: Element takes up exactly 100% of parent's width

## Practical Questions

### 21. How would you create a responsive card grid with minimum card width?

**Answer:**
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

### 22. How do you create a full-screen hero section?

**Answer:**
```css
.hero {
  width: 100%;
  height: 100vh;
  min-height: 600px;
}
```

### 23. How would you implement responsive typography that scales with viewport?

**Answer:**
```css
body {
  font-size: clamp(16px, 1.5vw, 20px);
}
h1 {
  font-size: clamp(24px, 4vw, 48px);
}
```

### 24. How do you create a sidebar with fixed width and flexible main content?

**Answer:**
```css
.container {
  display: flex;
}
.sidebar {
  width: 250px;
  flex-shrink: 0;
}
.main {
  flex: 1;
  min-width: 0;
}
```

### 25. How would you create images that are responsive but don't exceed their natural size?

**Answer:**
```css
.image {
  max-width: 100%;
  height: auto;
}
```

## Troubleshooting Questions

### 26. Why is my percentage width not working?

**Answer:** Common causes:
- Parent element doesn't have a defined width
- Parent is also using percentage without a base
- Element has `display: inline` (block-level needed)
- Parent has `display: flex` with specific flex properties

### 27. Why is my element not the height I expect?

**Answer:** Common causes:
- Parent doesn't have defined height (for percentage heights)
- Content is not filling the element
- Padding/border affecting size (check `box-sizing`)
- Using `auto` instead of specific value

### 28. Why is my `vh` unit not working correctly on mobile?

**Answer:** Mobile browsers have address bars that affect viewport height. Use `dvh` (dynamic viewport height) instead:

```css
height: 100dvh;
```

### 29. How do you debug sizing issues?

**Answer:**
- Use browser DevTools to inspect computed styles
- Check box model visualization
- Verify parent element sizes
- Look for `box-sizing` issues
- Check for min/max constraints
- Test with temporary backgrounds to see element boundaries

### 30. Why is my element overflowing its container?

**Answer:** Common causes:
- Element width exceeds parent width
- Not using `max-width` constraints
- Padding/border adding to size (check `box-sizing`)
- Content larger than container
- Not using `overflow` property

## Performance Questions

### 31. Does using `calc()` affect performance?

**Answer:** `calc()` is generally performant as calculations are done during layout. However, excessive use in complex layouts can impact performance. Use it judiciously.

### 32. Are viewport units performant?

**Answer:** Viewport units can cause reflows on viewport resize, but modern browsers optimize this well. They're generally performant for responsive design.

### 33. How can you optimize sizing for performance?

**Answer:**
- Avoid frequent size changes (animations)
- Use `transform` instead of width/height for animations
- Prefer `will-change` sparingly
- Use `contain` property where appropriate
- Batch DOM changes when possible

## Edge Cases

### 34. What happens when you set both `width` and `max-width`?

**Answer:** `max-width` takes precedence if the calculated width exceeds it. The element will be the smaller of the two values.

### 35. How do you handle sizing for print styles?

**Answer:**
```css
@media print {
  .element {
    width: 100%;
    max-width: none;
  }
}
```

### 36. What is the difference between `width: 0` and `display: none`?

**Answer:**
- `width: 0`: Element still takes up space in layout (height, margins)
- `display: none`: Element completely removed from layout

### 37. How do you create an element that is exactly half its parent's size?

**Answer:**
```css
.child {
  width: 50%;
  height: 50%;
}
```

### 38. What happens when you use percentage height on a parent with no height?

**Answer:** Percentage height requires the parent to have an explicit height. If parent height is `auto`, percentage height on child won't work.

## Modern Sizing

### 39. What new sizing features are available in modern browsers?

**Answer:**
- `aspect-ratio` property
- `dvh` (dynamic viewport height)
- `clamp()`, `min()`, `max()` functions
- Container queries (growing support)
- Better DevTools support

### 40. How do you use container queries for responsive sizing?

**Answer:**
```css
@container (min-width: 400px) {
  .card {
    width: 100%;
  }
}
```

This allows elements to respond to their container's size rather than the viewport.

## Best Practices

### 41. What are the best practices for CSS sizing?

**Answer:**
- Use `border-box` globally
- Prefer relative units for responsive design
- Use `rem` for consistent spacing
- Set min/max constraints
- Use `aspect-ratio` for images/videos
- Consider mobile viewport issues
- Test across different screen sizes

### 42. When should you use absolute vs relative units?

**Answer:**
- **Absolute (px)**: Borders, precise control, when exact size needed
- **Relative (%/rem/em)**: Responsive design, typography, spacing
- **Viewport (vw/vh)**: Full-screen layouts, hero sections

### 43. How do you ensure accessibility with sizing?

**Answer:**
- Allow text resizing (use relative units)
- Don't disable user zoom
- Ensure minimum touch targets (44px minimum)
- Consider high-DPI displays
- Test with browser zoom

### 44. What are common sizing mistakes to avoid?

**Answer:**
- Not using `border-box`
- Using fixed units for responsive layouts
- Forgetting min/max constraints
- Not considering mobile viewport issues
- Using percentage height without parent height
- Not testing across devices

### 45. How do you create a sizing system for a project?

**Answer:**
```css
:root {
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
}
```

Use CSS custom properties for consistent sizing throughout the project.
