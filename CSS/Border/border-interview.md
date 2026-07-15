# CSS Border Interview Questions

## Basic Questions

### 1. What is the difference between `border` and `outline`?

**Answer:**
- **Border**: Affects element layout, can have border-radius, always visible
- **Outline**: Doesn't affect layout, no border-radius, typically used for focus states

```css
.element {
  border: 2px solid #000;
  outline: 2px solid #667eea;
}
```

### 2. What is the `border-radius` property used for?

**Answer:** `border-radius` rounds the corners of an element. It can create rounded corners, circles, or pill shapes.

```css
.element {
  border-radius: 8px; /* Rounded corners */
  border-radius: 50%; /* Circle */
  border-radius: 9999px; /* Pill shape */
}
```

### 3. What is the `box-shadow` property?

**Answer:** `box-shadow` adds shadow effects around an element's frame. It can create depth and visual hierarchy.

```css
.element {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

### 4. What are the different border styles available?

**Answer:**
- `solid`: Solid line
- `dashed`: Dashed line
- `dotted`: Dotted line
- `double`: Two solid lines
- `groove`: 3D groove effect
- `ridge`: 3D ridge effect
- `inset`: 3D inset effect
- `outset`: 3D outset effect

### 5. How do you remove a border?

**Answer:**
```css
.element {
  border: none;
  /* or */
  border: 0;
}
```

## Intermediate Questions

### 6. How do you create a circular element?

**Answer:**
```css
.circle {
  border-radius: 50%;
  width: 100px;
  height: 100px;
}
```

### 7. What is the difference between `border` and `box-shadow`?

**Answer:**
- **Border**: Takes up space in the layout, part of the box model
- **Box-shadow**: Doesn't affect layout, purely visual, can create depth

### 8. How do you style individual border sides?

**Answer:**
```css
.element {
  border-top: 2px solid #667eea;
  border-right: 2px solid #764ba2;
  border-bottom: 2px solid #667eea;
  border-left: 2px solid #764ba2;
}
```

### 9. What is `outline-offset`?

**Answer:** `outline-offset` sets the space between an element's border and its outline.

```css
.element:focus {
  outline: 2px solid #667eea;
  outline-offset: 4px;
}
```

### 10. How do you create a pill-shaped button?

**Answer:**
```css
.button {
  border-radius: 9999px;
  padding: 10px 20px;
}
```

## Advanced Questions

### 11. How do you create a card with a subtle border and shadow?

**Answer:**
```css
.card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

### 12. What is the difference between `inset` and regular box-shadow?

**Answer:**
- **Regular shadow**: Appears outside the element
- **Inset shadow**: Appears inside the element, creating a pressed effect

```css
.element {
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

### 13. How do you create a focus state that is accessible?

**Answer:**
```css
.button:focus {
  outline: 2px solid #667eea;
  outline-offset: 2px;
}

/* Or with box-shadow */
.input:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}
```

### 14. How do you create different border-radius values for each corner?

**Answer:**
```css
.element {
  border-radius: 8px 16px 24px 32px;
  /* Top-left, top-right, bottom-right, bottom-left */
}

/* Or individually */
.element {
  border-top-left-radius: 8px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 24px;
  border-bottom-left-radius: 32px;
}
```

### 15. What is the `border-image` property?

**Answer:** `border-image` allows you to use an image as a border instead of a solid color.

```css
.element {
  border: 10px solid transparent;
  border-image: url('border.png') 30 round;
}
```

### 16. Why is my border-radius not working?

**Answer:** Common causes:
- Element has no border or background
- `overflow: hidden` on parent
- Invalid border-radius value
- Browser compatibility (rare issue)

### 17. How do you create a double border effect?

**Answer:**
```css
.element {
  border: 4px double #667eea;
}
```

### 18. What is the difference between `border-style: none` and `border-style: hidden`?

**Answer:**
- `none`: No border, and `border-width` is 0
- `hidden`: Same as `none` for table elements, but can prevent border conflicts in tables

### 19. How do you create a gradient border?

**Answer:**
```css
.element {
  border: 2px solid transparent;
  background: linear-gradient(white, white) padding-box,
              linear-gradient(to right, #667eea, #764ba2) border-box;
}
```

### 20. How do you handle borders for responsive design?

**Answer:**
```css
.element {
  border: 1px solid #ccc;
}

@media (min-width: 768px) {
  .element {
    border: 2px solid #ccc;
  }
}
```

## Practical Questions

### 21. How would you implement a card component with hover effects?

**Answer:**
```css
.card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

.card:hover {
  border-color: #667eea;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
}
```

### 22. How do you create an input field with focus states?

**Answer:**
```css
.input {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  transition: all 0.3s;
}

.input:focus {
  border-color: #667eea;
  outline: none;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}
```

### 23. How would you implement a button with different border states?

**Answer:**
```css
.button {
  border: 1px solid #667eea;
  border-radius: 6px;
  background: #667eea;
  color: white;
  transition: all 0.3s;
}

.button:hover {
  border-color: #5568d3;
  background: #5568d3;
}

.button:active {
  border-color: #4455c2;
  background: #4455c2;
}
```

### 24. How do you create a notification badge with a border?

**Answer:**
```css
.badge {
  border: 2px solid white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background: red;
  color: white;
}
```

### 25. How would you implement a tooltip with a border and arrow?

**Answer:**
```css
.tooltip {
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  position: relative;
}

.tooltip::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  border: 8px solid transparent;
  border-top-color: #ccc;
}
```

## Troubleshooting Questions

### 26. Why is my border not showing?

**Answer:** Common causes:
- `border-style` is `none` or not set
- Element has no dimensions
- Border color same as background
- `border: 0` overriding other styles

### 27. How do you debug border issues?

**Answer:**
- Use browser DevTools to inspect computed styles
- Check `border-style` is not `none`
- Verify element has dimensions
- Look for specificity conflicts
- Test with contrasting colors

### 28. Why is my box-shadow not appearing?

**Answer:** Common causes:
- Element has no background or border
- Shadow color is transparent
- `overflow: hidden` on parent
- Invalid shadow syntax

### 29. How do you handle borders for printing?

**Answer:**
```css
@media print {
  .element {
    border: 1px solid #000 !important;
    box-shadow: none !important;
  }
}
```

### 30. Why is my outline not showing on focus?

**Answer:** Common causes:
- Element is not focusable
- `outline-style` is `none`
- Outline color same as background
- Browser default styles overriding

## Performance Questions

### 31. Does using box-shadow affect performance?

**Answer:** Box shadows can affect performance, especially with large blur radii or on many elements. Use them judiciously and consider using `will-change` sparingly for animated shadows.

### 32. How can you optimize border rendering?

**Answer:**
- Use simple border styles (solid)
- Avoid complex border-radius on many elements
- Use `transform` instead of animating borders
- Minimize box-shadow blur radius
- Use `will-change` sparingly

### 33. What is the impact of border-radius on performance?

**Answer:** Border-radius has minimal performance impact in modern browsers. However, complex radius values on many elements can slightly affect rendering.

## Edge Cases

### 34. What happens when you set border-radius larger than element size?

**Answer:** The border-radius is clamped to the maximum possible value. For example, `border-radius: 9999px` on a small element will create the maximum rounded corners possible.

### 35. How do you create a border with different colors on each side?

**Answer:**
```css
.element {
  border-top: 2px solid #667eea;
  border-right: 2px solid #764ba2;
  border-bottom: 2px solid #667eea;
  border-left: 2px solid #764ba2;
}
```

### 36. What is the difference between `border-collapse` and border properties?

**Answer:** `border-collapse` is a table-specific property that controls whether table borders are shared or separate. It's not related to element border properties.

### 37. How do you create a border that is only on one side?

**Answer:**
```css
.element {
  border-top: 2px solid #667eea;
  /* or */
  border-right: 2px solid #667eea;
  /* etc. */
}
```

### 38. What happens with transparent borders?

**Answer:** Transparent borders take up space in the layout but are invisible. They can be used for spacing or as placeholders.

## Modern Borders

### 39. What new border features are available in modern browsers?

**Answer:**
- Better border-radius support
- Improved box-shadow performance
- `border-image` with better support
- Logical border properties for RTL

### 40. How do you use CSS custom properties with borders?

**Answer:**
```css
:root {
  --border-color: #667eea;
  --border-radius: 8px;
}

.element {
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius);
}
```

## Best Practices

### 41. What are the best practices for CSS borders?

**Answer:**
- Use consistent border-radius values
- Provide accessible focus states
- Use box-shadow for depth instead of multiple borders
- Consider border contrast for accessibility
- Test on different screen sizes
- Use semantic border styles
- Remove borders when not needed

### 42. When should you use border vs box-shadow?

**Answer:**
- **Border**: When you need a visible edge, separation between elements
- **Box-shadow**: When you need depth, elevation, or visual hierarchy

### 43. How do you ensure accessibility with borders?

**Answer:**
- Ensure sufficient contrast for borders
- Provide visible focus states
- Don't rely solely on borders for information
- Test with different color schemes
- Consider color blindness

### 44. What are common border mistakes to avoid?

**Answer:**
- Not providing focus states
- Using inconsistent border-radius
- Poor contrast ratios
- Overusing box-shadow
- Not testing on different backgrounds
- Forgetting to remove borders when not needed

### 45. How do you document border styles for a team?

**Answer:**
```css
/**
 * Border System
 * 
 * Border Radius:
 * --radius-sm: 4px
 * --radius-md: 8px
 * --radius-lg: 12px
 * --radius-full: 9999px
 * 
 * Box Shadows:
 * --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05)
 * --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1)
 * --shadow-lg: 0 10px 20px rgba(0, 0, 0, 0.2)
 * 
 * Usage:
 * .card {
 *   border: 1px solid var(--border-color);
 *   border-radius: var(--radius-md);
 *   box-shadow: var(--shadow-md);
 * }
 */
```
