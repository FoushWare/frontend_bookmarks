# CSS Flexbox Interview Questions

## Basic Questions

### 1. What is CSS Flexbox and when should you use it?

**Answer:** Flexbox is a one-dimensional layout method for arranging items in rows or columns. Items flex to fill additional space and shrink to fit into smaller spaces. Use it for:
- Navigation bars
- Card layouts
- Centering content
- Distributing space between items
- Aligning items vertically/horizontally

### 2. What is the difference between `justify-content` and `align-items`?

**Answer:**
- `justify-content`: Controls alignment along the main axis (horizontal for row, vertical for column)
- `align-items`: Controls alignment along the cross axis (vertical for row, horizontal for column)

### 3. What are the main axis and cross axis in Flexbox?

**Answer:**
- **Main axis**: The primary axis along which flex items are laid out (defined by `flex-direction`)
- **Cross axis**: The axis perpendicular to the main axis

For `flex-direction: row`, main axis is horizontal, cross axis is vertical.
For `flex-direction: column`, main axis is vertical, cross axis is horizontal.

### 4. What does `flex: 1` do?

**Answer:** `flex: 1` is shorthand for `flex: 1 1 0%` which means:
- `flex-grow: 1` - item can grow to fill available space
- `flex-shrink: 1` - item can shrink if needed
- `flex-basis: 0%` - starting size is 0, so all items share space equally

### 5. What is the default value of `flex-direction`?

**Answer:** `row` - items are laid out horizontally from left to right.

## Intermediate Questions

### 6. How do you center content both horizontally and vertically using Flexbox?

**Answer:**
```css
.container {
  display: flex;
  justify-content: center;  /* Horizontal centering */
  align-items: center;     /* Vertical centering */
  min-height: 100vh;       /* Full viewport height */
}
```

### 7. What is the difference between `flex-wrap: wrap` and `flex-wrap: nowrap`?

**Answer:**
- `nowrap` (default): All flex items will be on one line, may overflow container
- `wrap`: Flex items will wrap onto multiple lines if needed

### 8. How does the `gap` property work in Flexbox?

**Answer:** The `gap` property sets spacing between flex items in both directions (row gap and column gap). It's a modern property that replaces the need for margins on items.

```css
.container {
  display: flex;
  gap: 20px; /* 20px space between items */
}
```

### 9. What is `align-self` and when would you use it?

**Answer:** `align-self` allows you to override the `align-items` value for individual flex items. Use it when you need one item to be aligned differently from the rest.

```css
.item {
  align-self: flex-start; /* This item aligns to start */
}
```

### 10. How does the `order` property work in Flexbox?

**Answer:** The `order` property controls the visual order of flex items without changing the HTML structure. Lower numbers appear first. Default value is 0.

```css
.item1 { order: 2; }
.item2 { order: 1; }
.item3 { order: 3; }
/* Visual order: item2, item1, item3 */
```

## Advanced Questions

### 11. Explain the `flex` shorthand property and its three values.

**Answer:** `flex: flex-grow flex-shrink flex-basis`
- `flex-grow`: How much the item can grow relative to other items (default 0)
- `flex-shrink`: How much the item can shrink relative to other items (default 1)
- `flex-basis`: Starting size before growing/shrinking (default auto)

Common values:
- `flex: 1` = `flex: 1 1 0%` - grow and shrink equally
- `flex: auto` = `flex: 1 1 auto` - grow and shrink based on content
- `flex: none` = `flex: 0 0 auto` - don't grow or shrink

### 12. What is the difference between `align-items` and `align-content`?

**Answer:**
- `align-items`: Aligns individual flex items within their flex line along the cross axis
- `align-content`: Aligns the entire flex lines (when wrapping) along the cross axis

`align-content` only has an effect when there's extra space in the cross axis and items are wrapped.

### 13. How do you create equal-width columns that share available space?

**Answer:**
```css
.container {
  display: flex;
}
.column {
  flex: 1; /* All columns share space equally */
}
```

Or with gap:
```css
.container {
  display: flex;
  gap: 20px;
}
.column {
  flex: 1;
}
```

### 14. What is `flex-basis` and how does it differ from `width`?

**Answer:** `flex-basis` sets the initial size of a flex item before `flex-grow` and `flex-shrink` are applied. It's like `width` but specific to flexbox. When `flex-basis` and `width` are both set, `flex-basis` takes precedence for flex items.

### 15. How do you create a responsive card grid that wraps based on viewport width?

**Answer:**
```css
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.card {
  flex: 1 1 250px; /* Grow, shrink, minimum 250px */
}
```

### 16. Why isn't my flex item centering properly?

**Answer:** Common causes:
- Container doesn't have `display: flex`
- Container doesn't have defined height (for vertical centering)
- Using wrong property (`justify-content` vs `align-items`)
- Item has fixed width/height preventing centering
- Parent has `min-height` instead of `height`

### 17. How do you create a sticky footer using Flexbox?

**Answer:**
```css
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex: 1; /* Pushes footer to bottom */
}
footer {
  /* Footer stays at bottom */
}
```

### 18. What is the difference between `flex-start`, `flex-end`, and `center`?

**Answer:**
- `flex-start`: Items aligned to the start of the container
- `flex-end`: Items aligned to the end of the container
- `center`: Items centered in the container

These values work for both `justify-content` and `align-items`.

### 19. How do you create a navigation bar with logo on left and links on right?

**Answer:**
```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  /* Logo styles */
}
.links {
  display: flex;
  gap: 20px;
}
```

### 20. What happens when you set `flex-grow: 0` on all items?

**Answer:** Items will not grow to fill available space. They will only take up their `flex-basis` size (or content size if `flex-basis: auto`). Any remaining space will be empty.

## Practical Questions

### 21. How would you implement a card that has a fixed-width sidebar and flexible content area?

**Answer:**
```css
.card {
  display: flex;
}
.sidebar {
  flex: 0 0 200px; /* Don't grow or shrink, fixed 200px */
}
.content {
  flex: 1; /* Grow to fill remaining space */
}
```

### 22. How do you create a masonry-style layout with Flexbox?

**Answer:** Flexbox isn't ideal for true masonry, but you can approximate it:
```css
.masonry {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
```

### 23. How would you create a responsive navigation that collapses on mobile?

**Answer:**
```css
.nav {
  display: flex;
  justify-content: space-between;
}
@media (max-width: 768px) {
  .nav {
    flex-direction: column;
  }
  .nav-links {
    display: none; /* Hide on mobile, show with JS */
  }
}
```

### 24. How do you create equal-height cards with varying content?

**Answer:**
```css
.cards {
  display: flex;
  gap: 20px;
}
.card {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.card-content {
  flex: 1; /* Pushes footer to bottom */
}
```

### 25. How would you implement a centering technique that works for both single and multiple items?

**Answer:**
```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

This works for both single items (centers the item) and multiple items (centers the group of items).

## Troubleshooting Questions

### 26. Why is my flex item shrinking when I don't want it to?

**Answer:** Set `flex-shrink: 0` on the item:
```css
.item {
  flex-shrink: 0;
}
```

### 27. Why is `gap` not working in my Flexbox container?

**Answer:** Common causes:
- Browser doesn't support `gap` in Flexbox (older browsers)
- Need to use vendor prefixes or fallback with margins
- Check browser compatibility - `gap` in Flexbox has good modern support

### 28. Why are my flex items not wrapping even with `flex-wrap: wrap`?

**Answer:** Common causes:
- Items don't have a minimum width constraint
- Container is too wide for items to wrap
- Items have `flex: 1` with no minimum basis

### 29. How do you debug Flexbox alignment issues?

**Answer:**
- Use browser DevTools Flexbox inspector
- Check container has `display: flex`
- Verify `flex-direction` is correct
- Check `justify-content` and `align-items` values
- Look for fixed widths/heights on items
- Check if parent has height constraints

### 30. What is the difference between `align-items: stretch` and default behavior?

**Answer:** `stretch` (default for `align-items`) makes flex items stretch to fill the cross-axis size of the container. This is why flex items in a row typically have equal height - they stretch to match the tallest item.

## Performance Questions

### 31. Is Flexbox more performant than Grid?

**Answer:** It depends on the use case. Flexbox is generally more performant for simple one-dimensional layouts, while Grid is better for complex two-dimensional layouts. Modern browsers optimize both well.

### 32. Does using Flexbox cause reflows?

**Answer:** Flexbox can cause reflows when:
- Changing flex properties that affect layout
- Adding/removing flex items
- Changing container dimensions
- However, modern browsers optimize flexbox calculations

### 33. How can you optimize Flexbox performance?

**Answer:**
- Avoid unnecessary flex property changes
- Use `will-change` sparingly for animated elements
- Prefer `transform` over layout properties for animations
- Use `contain` property where appropriate
- Batch DOM changes when possible

## Edge Cases

### 34. How do you handle flex items with minimum content size?

**Answer:** Use `min-width` or `min-height`:
```css
.item {
  min-width: 200px; /* Prevents shrinking below 200px */
  min-height: 100px; /* Prevents shrinking below 100px */
}
```

### 35. What happens when flex items have different `flex-basis` values?

**Answer:** Items start at their `flex-basis` size, then grow/shrink based on `flex-grow`/`flex-shrink` ratios. Higher `flex-basis` means the item starts larger before growth calculations.

### 36. How do you create a flex container that scrolls horizontally?

**Answer:**
```css
.container {
  display: flex;
  overflow-x: auto;
  gap: 20px;
  padding: 20px 0;
}
.item {
  flex: 0 0 auto; /* Don't shrink, maintain size */
}
```

### 37. How do you center content when the container has unknown dimensions?

**Answer:**
```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

Flexbox centering works regardless of container dimensions.

### 38. What is the difference between `space-between`, `space-around`, and `space-evenly`?

**Answer:**
- `space-between`: Items evenly distributed, first/last item at edges
- `space-around`: Items evenly distributed with equal space around each item
- `space-evenly`: Items evenly distributed with equal space between and around items

## Modern Flexbox

### 39. What new Flexbox features are available in modern browsers?

**Answer:**
- `gap` property (well-supported now)
- `flex: auto` shorthand
- Better alignment controls
- Improved debugging tools in DevTools

### 40. How do you use Flexbox with CSS Grid together?

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
