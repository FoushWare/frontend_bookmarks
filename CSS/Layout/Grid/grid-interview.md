# CSS Grid Interview Questions

## Basic Questions

### 1. What is CSS Grid and when should you use it?

**Answer:** CSS Grid is a two-dimensional layout system for the web. It handles both columns and rows simultaneously, unlike Flexbox which is one-dimensional. Use Grid for:
- Page layouts (header, sidebar, main, footer)
- Complex component layouts
- Two-dimensional positioning
- Precise alignment across both axes
- Overlapping elements

### 2. What is the difference between CSS Grid and Flexbox?

**Answer:**
- **Grid**: Two-dimensional (rows and columns), best for page layouts and complex structures
- **Flexbox**: One-dimensional (row OR column), best for component-level layouts and content distribution

### 3. How do you define a grid container?

**Answer:**
```css
.container {
  display: grid;
}
```

### 4. What are `grid-template-columns` and `grid-template-rows`?

**Answer:**
- `grid-template-columns`: Defines the columns in the grid
- `grid-template-rows`: Defines the rows in the grid

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
}
```

### 5. What is the `fr` unit in CSS Grid?

**Answer:** The `fr` unit represents a fraction of available space. `1fr` means "one fraction of the available space." It's used to create flexible grid tracks that grow and shrink proportionally.

```css
.container {
  grid-template-columns: 1fr 2fr 1fr; /* 1:2:1 ratio */
}
```

## Intermediate Questions

### 6. How do you create a responsive grid that adapts to screen size?

**Answer:**
```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

This creates as many columns as fit, with each column at least 250px wide.

### 7. What is the difference between `auto-fit` and `auto-fill`?

**Answer:**
- `auto-fit`: Creates as many columns as fit, expands empty columns to fill space
- `auto-fill`: Creates as many columns as fit, keeps empty columns as placeholders

### 8. How do you place items in specific grid areas?

**Answer:**
```css
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

### 9. What is `grid-column` and `grid-row`?

**Answer:** Shorthand properties for placing items:
- `grid-column`: `grid-column-start / grid-column-end`
- `grid-row`: `grid-row-start / grid-row-end`

```css
.item {
  grid-column: 1 / 3; /* Spans columns 1 to 3 */
  grid-row: 2 / 4;    /* Spans rows 2 to 4 */
}
```

### 10. How do you center content in a Grid container?

**Answer:**
```css
.container {
  display: grid;
  place-items: center; /* Centers both horizontally and vertically */
}
```

Or separately:
```css
.container {
  display: grid;
  justify-items: center; /* Horizontal centering */
  align-items: center;    /* Vertical centering */
}
```

## Advanced Questions

### 11. What is `minmax()` and how does it work in Grid?

**Answer:** `minmax(min, max)` defines a size range. In Grid, it's often used with `repeat()` to create responsive columns:

```css
.container {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

Each column will be at least 250px, but can grow to fill available space.

### 12. What is the difference between `grid-template-areas` and explicit grid placement?

**Answer:**
- `grid-template-areas`: Visual, semantic way to define layout using named areas
- Explicit placement: Using `grid-column`/`grid-row` or line numbers for precise control

Areas are more readable and maintainable, while explicit placement offers more control.

### 13. How do you create overlapping elements in Grid?

**Answer:** Place items in the same grid cells:
```css
.item1 {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
.item2 {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
  z-index: 2; /* On top */
}
```

### 14. What is `place-items` and `place-content`?

**Answer:**
- `place-items`: Shorthand for `align-items` and `justify-items`
- `place-content`: Shorthand for `align-content` and `justify-content`

```css
.container {
  place-items: center; /* Centers items in both axes */
}
```

### 15. How do you create a masonry layout with CSS Grid?

**Answer:** True masonry isn't directly supported, but you can approximate it:
```css
.masonry {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 10px;
}
.item {
  grid-row: span var(--span);
}
```

For true masonry, consider using JavaScript or CSS columns instead.

### 16. What is `grid-auto-flow`?

**Answer:** Controls how auto-placed items are placed in the grid:
- `row` (default): Fill rows left to right
- `column`: Fill columns top to bottom
- `dense`: Try to fill holes (can change item order)

### 17. How do you create a grid with a fixed sidebar and flexible main content?

**Answer:**
```css
.container {
  display: grid;
  grid-template-columns: 250px 1fr;
}
.sidebar { grid-column: 1; }
.main { grid-column: 2; }
```

### 18. What is the difference between `grid-gap` and `gap`?

**Answer:** `grid-gap` is the older property name, `gap` is the modern shorthand. They work the same way:
```css
.container {
  gap: 20px; /* Modern */
  /* or */
  grid-gap: 20px; /* Older */
}
```

### 19. How do you create a responsive grid with different column counts at breakpoints?

**Answer:**
```css
.container {
  display: grid;
  grid-template-columns: 1fr;
}
@media (min-width: 768px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .container {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### 20. What is `subgrid` and when would you use it?

**Answer:** `subgrid` allows a grid item to inherit the grid definition of its parent. Use it when you need nested grids to align with the parent grid:

```css
.parent {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.child {
  display: grid;
  grid-template-columns: subgrid;
}
```

## Practical Questions

### 21. How would you create a dashboard layout with header, sidebar, and main content?

**Answer:**
```css
.dashboard {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

### 22. How do you create a pricing table with 3 equal columns?

**Answer:**
```css
.pricing {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```

### 23. How would you implement a photo gallery with images of different sizes?

**Answer:**
```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
}
.photo {
  aspect-ratio: 1;
  object-fit: cover;
}
```

### 24. How do you create a complex hero section with overlapping elements?

**Answer:**
```css
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  gap: 40px;
}
.hero-text {
  grid-column: 1;
  grid-row: 1 / 3;
}
.hero-image {
  grid-column: 2;
  grid-row: 2;
}
```

### 25. How would you create a calendar layout using Grid?

**Answer:**
```css
.calendar {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
}
.day {
  aspect-ratio: 1;
}
```

## Troubleshooting Questions

### 26. Why are my grid items not aligning properly?

**Answer:** Common causes:
- Container doesn't have `display: grid`
- Grid template not defined properly
- Items placed in wrong grid areas
- Using wrong alignment properties (`justify-items` vs `justify-content`)
- Grid tracks don't have enough space

### 27. Why is my grid not responsive?

**Answer:** Common causes:
- Using fixed units instead of `fr` or `minmax`
- Not using `auto-fit`/`auto-fill`
- Not using media queries for breakpoints
- Container has fixed width

### 28. How do you debug Grid layout issues?

**Answer:**
- Use browser DevTools Grid inspector
- Check container has `display: grid`
- Verify grid template definitions
- Check item placement (grid-column/row)
- Look for overlapping grid areas
- Use grid lines visualization in DevTools

### 29. Why is `gap` not working in my Grid?

**Answer:** Common causes:
- Browser doesn't support `gap` (older browsers)
- Need to use `grid-gap` as fallback
- Check browser compatibility

### 30. How do you handle grid items that don't fit in their cells?

**Answer:** Use `minmax()` to set minimum sizes, or allow items to overflow:
```css
.item {
  min-width: 0; /* Allows shrinking */
  overflow: auto; /* Scroll if needed */
}
```

## Performance Questions

### 31. Is CSS Grid more performant than Flexbox?

**Answer:** It depends on the use case. Grid can be more performant for complex layouts because it calculates all positions at once. Flexbox might be better for simple one-dimensional layouts. Modern browsers optimize both well.

### 32. Does using CSS Grid cause reflows?

**Answer:** Grid can cause reflows when:
- Changing grid template definitions
- Adding/removing grid items
- Changing container dimensions
- However, Grid is generally efficient as it calculates layout in one pass

### 33. How can you optimize Grid performance?

**Answer:**
- Avoid changing grid templates frequently
- Use `contain` property where appropriate
- Prefer `transform` over layout properties for animations
- Batch DOM changes when possible
- Use `will-change` sparingly

## Edge Cases

### 34. How do you create a grid with a fixed number of rows?

**Answer:**
```css
.container {
  display: grid;
  grid-template-rows: repeat(3, 100px);
  grid-auto-rows: 100px; /* Additional rows */
}
```

### 35. What happens when grid items have different sizes?

**Answer:** Grid items stretch to fill their grid cells by default. Use `align-self` or `justify-self` to control individual item alignment.

### 36. How do you create a grid with spanning items?

**Answer:**
```css
.item {
  grid-column: span 2; /* Spans 2 columns */
  grid-row: span 2;    /* Spans 2 rows */
}
```

### 37. What is the difference between implicit and explicit grid tracks?

**Answer:**
- **Explicit**: Defined by `grid-template-columns` and `grid-template-rows`
- **Implicit**: Created automatically when items are placed outside the explicit grid

### 38. How do you control implicit grid track sizes?

**Answer:**
```css
.container {
  grid-auto-columns: 100px; /* Implicit columns */
  grid-auto-rows: 100px;    /* Implicit rows */
}
```

## Modern Grid

### 39. What new Grid features are available in modern browsers?

**Answer:**
- `subgrid` (growing support)
- `masonry` layout (experimental)
- Better DevTools support
- Improved alignment controls
- `gap` property support

### 40. How do you use CSS Grid with Flexbox together?

**Answer:** They work great together - use Grid for the overall layout and Flexbox for component-level alignment:
```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.flex-component {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## Comparison Questions

### 41. When should you choose Grid over Flexbox for a layout?

**Answer:** Choose Grid when:
- You need two-dimensional layout control
- Building page layouts (header, sidebar, main, footer)
- Need precise alignment across both axes
- Want to overlap elements
- Complex component layouts

Choose Flexbox when:
- One-dimensional layout (row OR column)
- Content distribution (space-between, center)
- Navigation bars
- Card layouts
- Component-level alignment

### 42. Can you achieve the same layout with both Grid and Flexbox?

**Answer:** Many layouts can be achieved with both, but:
- Grid is often more concise for 2D layouts
- Flexbox might be simpler for 1D layouts
- Choose based on complexity and maintainability
- Consider browser support if needed

### 43. How do you decide between Grid and Flexbox for a card layout?

**Answer:**
- **Flexbox**: Simple card row, equal width cards, wrapping behavior
- **Grid**: Precise 2D card arrangement, overlapping cards, complex card placement

```css
/* Flexbox approach */
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.card {
  flex: 1 1 250px;
}

/* Grid approach */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

### 44. How does Grid handle responsive design compared to Flexbox?

**Answer:**
- **Grid**: `auto-fit`/`auto-fill` with `minmax()` for responsive columns
- **Flexbox**: `flex-wrap` with `flex-basis` for wrapping behavior

Both can achieve responsive designs, but Grid's `auto-fit` is often more concise for responsive grids.

### 45. What are the accessibility considerations for Grid vs Flexbox?

**Answer:**
- Both maintain source order by default
- Grid's `grid-auto-flow: dense` can change visual order (use carefully)
- Flexbox's `order` property can change visual order (use carefully)
- Always consider logical order vs visual order for accessibility
