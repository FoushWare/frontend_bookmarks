# CSS Typography Interview Questions

## Basic Questions

### 1. What is the difference between `rem` and `em` units for font size?

**Answer:**
- `rem`: Relative to the root element's (html) font-size
- `em`: Relative to the element's parent font-size

```css
html { font-size: 16px; }
.child { font-size: 1rem; } /* 16px */
.child { font-size: 1.2em; } /* 1.2 × parent font-size */
```

### 2. What is the recommended line-height for body text?

**Answer:** 1.5 to 1.6 is recommended for body text for optimal readability. Unitless values are preferred:

```css
body {
  line-height: 1.5; /* Preferred */
}
```

### 3. What is the difference between `font-weight: bold` and `font-weight: 700`?

**Answer:** They are equivalent - `bold` is a keyword that maps to `700`. Using numeric values (100-900) provides more control.

### 4. How do you truncate text with an ellipsis?

**Answer:**
```css
.element {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

### 5. What is the difference between `text-align` and `vertical-align`?

**Answer:**
- `text-align`: Controls horizontal alignment of text within its container
- `vertical-align`: Controls vertical alignment of inline/inline-block elements

## Intermediate Questions

### 6. How do you create multiline text truncation?

**Answer:**
```css
.element {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

### 7. What is letter-spacing and when would you use it?

**Answer:** `letter-spacing` adjusts the space between characters. Use it for:
- Headings (slight increase for emphasis)
- Uppercase text (increase for readability)
- Tighter spacing for compact designs

```css
.heading {
  letter-spacing: 0.5px;
}
.uppercase {
  letter-spacing: 1px;
}
```

### 8. How do you create a responsive typography scale?

**Answer:**
```css
:root {
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
}

h1 { font-size: var(--text-2xl); }
p { font-size: var(--text-base); }
```

### 9. What is the difference between `text-transform: uppercase` and using uppercase in HTML?

**Answer:**
- `text-transform: uppercase`: CSS transforms the text visually, original text remains unchanged
- Uppercase in HTML: Text is actually uppercase in the DOM

CSS is preferred for styling as it keeps content semantic.

### 10. How do you create fluid typography that scales with viewport?

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
```

## Advanced Questions

### 11. What is a modular scale in typography?

**Answer:** A modular scale is a series of harmonious font sizes based on a ratio (like 1.25 or 1.618). It creates visual harmony:

```css
:root {
  --scale: 1.25;
  --base: 16px;
  --step-1: calc(var(--base) * var(--scale));
  --step-2: calc(var(--step-1) * var(--scale));
}
```

### 12. How do you handle typography for RTL (right-to-left) languages?

**Answer:** Use logical properties and proper HTML attributes:

```html
<html dir="rtl" lang="ar">
```

```css
.element {
  text-align: start; /* Respects direction */
  margin-inline-start: 20px; /* Logical margin */
}
```

### 13. What is the difference between `word-break` and `overflow-wrap`?

**Answer:**
- `word-break: break-all`: Breaks words at any character
- `overflow-wrap: break-word`: Only breaks long words when necessary

```css
.break-all { word-break: break-all; }
.break-word { overflow-wrap: break-word; }
```

### 14. How do you optimize typography for accessibility?

**Answer:**
- Use relative units (rem/em) to respect user settings
- Ensure sufficient contrast ratio (4.5:1 for normal text)
- Set minimum font size (16px base)
- Avoid using text in images
- Support text resizing
- Use semantic HTML for headings

### 15. What are variable fonts and how do you use them?

**Answer:** Variable fonts allow customization of weight, width, and other axes:

```css
@font-face {
  font-family: 'MyVariableFont';
  src: url('font.woff2') format('woff2-variations');
  font-weight: 100 900;
}

.element {
  font-family: 'MyVariableFont', sans-serif;
  font-weight: 450; /* Any value between 100-900 */
}
```

### 16. Why is my line-height not working as expected?

**Answer:** Common causes:
- Using px instead of unitless value
- Element has no content
- Inherited value overriding
- Display property affecting calculation

### 17. How do you create a typography system for a project?

**Answer:**
```css
:root {
  /* Font families */
  --font-sans: system-ui, -apple-system, sans-serif;
  --font-serif: Georgia, serif;
  --font-mono: 'Courier New', monospace;
  
  /* Font sizes */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  
  /* Line heights */
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-loose: 2;
  
  /* Font weights */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
}
```

### 18. What is the difference between `white-space: nowrap` and `white-space: pre`?

**Answer:**
- `nowrap`: Text doesn't wrap to next line
- `pre`: Preserves whitespace and line breaks from HTML

### 19. How do you handle font loading performance?

**Answer:**
- Use `font-display: swap` for faster rendering
- Subset fonts to reduce file size
- Use WOFF2 format
- Preload critical fonts
- Use system fonts as fallback

```css
@font-face {
  font-family: 'MyFont';
  src: url('font.woff2') format('woff2');
  font-display: swap;
}
```

### 20. How do you create consistent heading hierarchy?

**Answer:**
```css
h1 {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.5px;
}

h2 {
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.3;
}

h3 {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.4;
}
```

## Practical Questions

### 21. How would you implement a responsive heading that scales smoothly?

**Answer:**
```css
h1 {
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 1.2;
}
```

### 22. How do you create a card description with line clamping?

**Answer:**
```css
.card-description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.6;
}
```

### 23. How would you style code snippets in documentation?

**Answer:**
```css
code {
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 4px;
}

pre {
  font-family: 'Courier New', monospace;
  background: #2c3e50;
  color: #ecf0f1;
  padding: 20px;
  border-radius: 8px;
  overflow-x: auto;
}
```

### 24. How do you create a navigation with consistent link spacing?

**Answer:**
```css
.nav {
  display: flex;
  gap: 20px;
}

.nav a {
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.5px;
}
```

### 25. How would you implement a typography scale that respects user preferences?

**Answer:**
```css
html {
  font-size: 100%; /* Respects user's browser setting */
}

@media (prefers-reduced-motion: reduce) {
  html {
    font-size: 100%; /* Don't scale */
  }
}
```

## Troubleshooting Questions

### 26. Why is my font not loading?

**Answer:** Common causes:
- Incorrect font file path
- Wrong font format (WOFF2 recommended)
- CORS issues
- Font-family name mismatch
- Browser not supporting format

### 27. Why is text-overflow ellipsis not showing?

**Answer:** Common causes:
- Missing `white-space: nowrap`
- Missing `overflow: hidden`
- Element has no width constraint
- Element is not block-level

### 28. How do you debug typography issues?

**Answer:**
- Use browser DevTools to inspect computed styles
- Check font-family fallback chain
- Verify font files are loading
- Look for inherited styles
- Test with temporary backgrounds
- Check for CSS specificity issues

### 29. Why is my line-height creating uneven spacing?

**Answer:** Common causes:
- Using px instead of unitless value
- Different font sizes in same container
- Margin/padding conflicts
- Vertical-align affecting inline elements

### 30. How do you handle typography across different browsers?

**Answer:**
- Use CSS reset for consistent defaults
- Test across browsers
- Use vendor prefixes when needed
- Provide fallback fonts
- Use standard properties with good support

## Performance Questions

### 31. Does using custom fonts affect performance?

**Answer:** Yes, custom fonts add loading time. Mitigate by:
- Using `font-display: swap`
- Subsetting fonts
- Using WOFF2 format
- Preloading critical fonts
- Using system fonts as fallback

### 32. How can you optimize typography rendering?

**Answer:**
- Use `text-rendering: optimizeLegibility` sparingly
- Avoid frequent font-size changes
- Use GPU acceleration for animations
- Minimize font weight variations
- Use system fonts where possible

### 33. What is the impact of line-height on performance?

**Answer:** Line-height has minimal performance impact. Unitless values are slightly more performant as they don't require unit conversion.

## Edge Cases

### 34. What happens when you set font-size to 0?

**Answer:** Font size of 0 makes text invisible but elements still take up space. Useful for removing whitespace between inline-block elements.

### 35. How do you handle typography for CJK (Chinese, Japanese, Korean) characters?

**Answer:**
```css
body {
  font-family: "Noto Sans CJK", system-ui, sans-serif;
  line-height: 1.6;
  letter-spacing: 0.05em; /* Slightly wider for CJK */
}
```

### 36. What is the difference between `text-decoration: underline` and `border-bottom`?

**Answer:**
- `text-decoration`: Underline follows text baseline, can't be styled
- `border-bottom`: Border on element, can be styled with color, width, style

### 37. How do you create typography that works in print?

**Answer:**
```css
@media print {
  body {
    font-size: 12pt;
    line-height: 1.4;
    color: black;
  }
  
  a {
    text-decoration: underline;
    color: black;
  }
}
```

### 38. What happens with negative letter-spacing?

**Answer:** Negative letter-spacing tightens character spacing. Can create overlapping characters if too negative. Use sparingly for design effects.

## Modern Typography

### 39. What new typography features are available in modern browsers?

**Answer:**
- Variable fonts
- `font-display` property
- `font-variation-settings`
- Better OpenType feature support
- Improved font loading control

### 40. How do you use CSS functions for typography?

**Answer:**
```css
font-size: clamp(16px, 2vw, 24px);
letter-spacing: calc(1px + 0.1vw);
line-height: calc(1.2 + 0.1vw);
```

## Best Practices

### 41. What are the best practices for CSS typography?

**Answer:**
- Use relative units (rem/em) for scalability
- Create a typography system with CSS variables
- Set appropriate line-height for readability
- Ensure sufficient contrast for accessibility
- Use system fonts for performance
- Limit font weights (2-3 max)
- Test across devices and browsers

### 42. When should you use serif vs sans-serif fonts?

**Answer:**
- **Sans-serif**: Body text, UI, digital content (more readable on screens)
- **Serif**: Headings, print materials, formal content (traditional feel)

### 43. How do you ensure typography accessibility?

**Answer:**
- Minimum 16px base font size
- Contrast ratio 4.5:1 (normal text), 3:1 (large text)
- Support text resizing
- Use semantic heading hierarchy
- Avoid text in images
- Provide sufficient line-height

### 44. What are common typography mistakes to avoid?

**Answer:**
- Using fixed units (px) for responsive design
- Not setting line-height
- Too many font weights
- Poor contrast ratios
- Not testing across browsers
- Ignoring accessibility
- Using too many fonts

### 45. How do you document a typography system for a team?

**Answer:**
```css
/**
 * Typography System
 * 
 * Font Families:
 * --font-sans: System sans-serif stack
 * --font-serif: Georgia, serif
 * --font-mono: Courier New, monospace
 * 
 * Font Sizes (rem-based):
 * --text-xs: 0.75rem (12px)
 * --text-sm: 0.875rem (14px)
 * --text-base: 1rem (16px)
 * --text-lg: 1.125rem (18px)
 * --text-xl: 1.25rem (20px)
 * 
 * Line Heights:
 * --leading-tight: 1.25
 * --leading-normal: 1.5
 * --leading-loose: 2
 * 
 * Font Weights:
 * --font-normal: 400
 * --font-medium: 500
 * --font-semibold: 600
 * --font-bold: 700
 */
```
