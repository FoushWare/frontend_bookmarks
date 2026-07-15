# CSS Layout Interview Questions

## Basic Questions

### 1. What is the difference between `display: block`, `display: inline`, and `display: inline-block`?

**Answer:**
- **Block**: Takes full width, starts on new line, can have width/height/margin/padding (e.g., `div`, `p`, `h1`)
- **Inline**: Takes only content width, stays on same line, cannot have width/height (e.g., `span`, `a`, `strong`)
- **Inline-block**: Combines both - stays on same line like inline but can have width/height like block

### 2. What is the default value of the `position` property?

**Answer:** `static` - elements follow normal document flow and are not affected by `top`, `right`, `bottom`, `left` properties.

### 3. What is the difference between `position: relative` and `position: absolute`?

**Answer:**
- **Relative**: Positioned relative to its normal position in the document flow, still takes up space
- **Absolute**: Positioned relative to the nearest positioned ancestor (not static), removed from normal document flow

### 4. When should you use `position: fixed` vs `position: sticky`?

**Answer:**
- **Fixed**: Always stays in the same position relative to the viewport, regardless of scrolling (e.g., sticky headers, floating buttons)
- **Sticky**: Toggles between relative and fixed based on scroll position - acts as relative until a scroll threshold is reached (e.g., table headers that stick while scrolling)

### 5. What is `z-index` and when does it not work?

**Answer:** `z-index` controls the stacking order of positioned elements. It doesn't work when:
- The element has `position: static`
- The element is inside a parent with a lower z-index in a different stacking context
- The element doesn't have a position value other than static

## Intermediate Questions

### 6. What is a stacking context?

**Answer:** A stacking context is a three-dimensional conceptualization of HTML elements along an imaginary z-axis. Elements in a stacking context are stacked according to specific rules. New stacking contexts are created by:
- `position: relative/absolute/fixed` with z-index not auto
- `position: fixed/sticky`
- `opacity` less than 1
- `transform`, `filter`, `perspective`
- `isolation: isolate`

### 7. How do you center an element horizontally and vertically?

**Answer:**
```css
/* Method 1: Flexbox */
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Method 2: Grid */
.parent {
  display: grid;
  place-items: center;
}

/* Method 3: Absolute + Transform */
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Method 4: Absolute + Margin */
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
```

### 8. What is the difference between `display: none` and `visibility: hidden`?

**Answer:**
- `display: none`: Element is completely removed from the document flow, takes up no space
- `visibility: hidden`: Element is invisible but still takes up space in the layout

### 9. How does `overflow` property work?

**Answer:**
- `visible`: Default, content spills outside container
- `hidden`: Content is clipped, no scrollbars
- `scroll`: Content is clipped, scrollbars always visible
- `auto`: Content is clipped, scrollbars appear only when needed

### 10. What is the difference between `overflow-x` and `overflow-y`?

**Answer:** They control overflow on specific axes:
- `overflow-x`: Controls horizontal overflow
- `overflow-y`: Controls vertical overflow
- Can be set independently for different behavior on each axis

## Advanced Questions

### 11. How do you create a sticky header that stays visible while scrolling?

**Answer:**
```css
header {
  position: sticky;
  top: 0;
  z-index: 1000;
}
```

### 12. What happens when you position an element absolutely but its parent has no positioning?

**Answer:** The absolutely positioned element will be positioned relative to the nearest positioned ancestor. If no positioned ancestor exists, it's positioned relative to the initial containing block (usually the viewport or html element).

### 13. How do you create a floating action button that stays in the bottom-right corner?

**Answer:**
```css
.fab {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}
```

### 14. What is the difference between `position: absolute` and `position: fixed` in terms of scrolling?

**Answer:**
- `absolute`: Positioned relative to nearest positioned ancestor, scrolls with the page
- `fixed`: Positioned relative to viewport, stays in same position while scrolling

### 15. How do you create a notification badge that appears in the top-right corner of an element?

**Answer:**
```css
.parent {
  position: relative;
}
.badge {
  position: absolute;
  top: -10px;
  right: -10px;
  background: red;
  color: white;
  border-radius: 50%;
  padding: 5px 10px;
  font-size: 12px;
}
```

### 16. What is the "containing block" concept in CSS?

**Answer:** The containing block is the ancestor element relative to which certain CSS properties are calculated. For positioned elements, the containing block is the nearest positioned ancestor. For percentage widths/heights, it depends on the positioning context.

### 17. How do you create a full-screen overlay modal?

**Answer:**
```css
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### 18. What is the difference between `position: sticky` and `position: fixed` in terms of performance?

**Answer:** `sticky` can be more performant because it only becomes fixed when needed, while `fixed` is always computed relative to the viewport. However, both can cause repaints/reflows during scrolling.

### 19. How do you create a sidebar that stays visible while content scrolls?

**Answer:**
```css
.container {
  display: flex;
}
.sidebar {
  position: sticky;
  top: 20px;
  height: fit-content;
}
.content {
  flex: 1;
}
```

### 20. What are the common pitfalls when using `position: absolute`?

**Answer:**
- Forgetting to set parent to `position: relative`
- Not accounting for the element taking up no space in document flow
- Overlapping with other elements due to poor z-index management
- Not considering responsive behavior on different screen sizes

## Practical Questions

### 21. How would you implement a tooltip that appears on hover?

**Answer:**
```css
.tooltip-container {
  position: relative;
}
.tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: #333;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s;
}
.tooltip-container:hover .tooltip {
  opacity: 1;
  visibility: visible;
}
```

### 22. How do you create a ribbon effect on a card corner?

**Answer:**
```css
.card {
  position: relative;
  overflow: hidden;
}
.ribbon {
  position: absolute;
  top: 20px;
  right: -35px;
  background: #e74c3c;
  color: white;
  padding: 5px 40px;
  transform: rotate(45deg);
  font-size: 12px;
  font-weight: bold;
}
```

### 23. How would you create a parallax scrolling effect?

**Answer:**
```css
.parallax-section {
  position: relative;
  height: 100vh;
  overflow: hidden;
}
.parallax-bg {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background-image: url('image.jpg');
  background-size: cover;
  background-position: center;
}
```

### 24. How do you create a notification bubble that appears above an icon?

**Answer:**
```css
.icon-container {
  position: relative;
  display: inline-block;
}
.notification {
  position: absolute;
  top: -5px;
  right: -5px;
  background: red;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
}
```

### 25. How would you implement a dropdown menu that appears on hover?

**Answer:**
```css
.dropdown {
  position: relative;
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  min-width: 200px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s;
}
.dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
```

## Troubleshooting Questions

### 26. Why is my absolutely positioned element not where I expect it to be?

**Answer:** Common causes:
- Parent element doesn't have `position: relative`
- Using wrong offset properties (top/bottom vs left/right)
- Element is being positioned relative to wrong ancestor
- Margin/padding on parent affecting positioning

### 27. Why is my z-index not working?

**Answer:** Common causes:
- Element has `position: static`
- Parent element has lower z-index in different stacking context
- Using non-numeric z-index values
- Element is inside a transformed parent creating new stacking context

### 28. Why is my sticky element not sticking?

**Answer:** Common causes:
- Parent element has `overflow: hidden` or `overflow: auto`
- Parent has `height: 100%` or other height constraints
- Not setting `top`, `left`, `right`, or `bottom` property
- Browser compatibility issues (though well-supported now)

### 29. Why is my fixed element not staying fixed on mobile?

**Answer:** Common causes:
- iOS Safari doesn't support fixed positioning in some contexts
- Element inside transformed parent
- Viewport meta tag issues
- Need to use `position: sticky` as fallback

### 30. How do you debug layout issues?

**Answer:**
- Use browser DevTools to inspect computed styles
- Check box model visualization
- Verify positioning context of parent elements
- Look for stacking context issues
- Test with temporary backgrounds to see element boundaries
- Use `outline` instead of `border` to avoid layout shifts
