# CSS Typography Reference Guide

## Overview

CSS typography properties control how text is displayed, including font family, size, weight, line height, letter spacing, and more. Good typography is essential for readability and user experience.

## Font Properties

### Font Family

```css
font-family: Arial, sans-serif;
font-family: "Georgia", serif;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
```

**Font Stacks:**
- **Sans-serif**: Arial, Helvetica, Roboto, Open Sans
- **Serif**: Georgia, Times New Roman, Garamond
- **Monospace**: Courier New, Monaco, Consolas
- **System fonts**: Native to the operating system

### Font Size

```css
font-size: 16px;
font-size: 1rem;
font-size: 1.2em;
font-size: 120%;
```

**Recommended Units:**
- `rem`: Relative to root, consistent scaling
- `em`: Relative to parent, component-relative
- `px`: Fixed size, precise control
- `%`: Relative to parent

### Font Weight

```css
font-weight: 400; /* Normal */
font-weight: 500; /* Medium */
font-weight: 600; /* Semi-bold */
font-weight: 700; /* Bold */
font-weight: 900; /* Black */
```

**Numeric Values:** 100-900 in increments of 100

### Font Style

```css
font-style: normal;
font-style: italic;
font-style: oblique;
```

## Line Height

```css
line-height: 1.5;
line-height: 1.6;
line-height: 2;
```

**Recommended Values:**
- Body text: 1.5-1.6
- Headings: 1.2-1.3
- Unitless values preferred (no px/em)

## Letter Spacing

```css
letter-spacing: normal;
letter-spacing: 0.5px;
letter-spacing: 1px;
letter-spacing: -0.5px; /* Tighter spacing */
```

**Use Cases:**
- Headings: slight increase (0.5-1px)
- Uppercase text: increase (1-2px)
- Body text: normal or slight decrease

## Text Alignment

```css
text-align: left;
text-align: right;
text-align: center;
text-align: justify;
```

## Text Transform

```css
text-transform: none;
text-transform: uppercase;
text-transform: lowercase;
text-transform: capitalize;
```

## Text Decoration

```css
text-decoration: none;
text-decoration: underline;
text-decoration: line-through;
text-decoration: overline;
```

## White Space

```css
white-space: normal;
white-space: nowrap;
white-space: pre;
white-space: pre-wrap;
white-space: pre-line;
```

## Word Break

```css
word-break: normal;
word-break: break-all;
word-break: keep-all;
```

## Overflow Wrap

```css
overflow-wrap: normal;
overflow-wrap: break-word;
```

## Text Overflow

```css
text-overflow: clip;
text-overflow: ellipsis;
```

**For truncation:**
```css
.element {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

## Line Clamp (Multiline Truncation)

```css
.element {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

## Typography Scale

### Modular Scale

```css
:root {
  --font-size-base: 16px;
  --font-scale: 1.25; /* Major third */
  
  --font-size-xs: calc(var(--font-size-base) / var(--font-scale));
  --font-size-sm: var(--font-size-base);
  --font-size-md: calc(var(--font-size-base) * var(--font-scale));
  --font-size-lg: calc(var(--font-size-base) * var(--font-scale) * var(--font-scale));
  --font-size-xl: calc(var(--font-size-base) * var(--font-scale) * var(--font-scale) * var(--font-scale));
}
```

### Type Scale

```css
:root {
  --text-xs: 0.75rem;   /* 12px */
  --text-sm: 0.875rem;  /* 14px */
  --text-base: 1rem;    /* 16px */
  --text-lg: 1.125rem;  /* 18px */
  --text-xl: 1.25rem;   /* 20px */
  --text-2xl: 1.5rem;   /* 24px */
  --text-3xl: 1.875rem; /* 30px */
  --text-4xl: 2.25rem;  /* 36px */
}
```

## Common Patterns

### Body Text

```css
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
}
```

### Headings

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

### Links

```css
a {
  color: #667eea;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
```

### Code

```css
code {
  font-family: "Courier New", monospace;
  font-size: 0.9em;
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 4px;
}
```

### Blockquote

```css
blockquote {
  font-style: italic;
  border-left: 4px solid #667eea;
  padding-left: 20px;
  margin: 20px 0;
}
```

## Responsive Typography

### Using Clamp

```css
h1 {
  font-size: clamp(1.5rem, 5vw, 3rem);
}
```

### Using Media Queries

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

### Fluid Typography

```css
html {
  font-size: calc(16px + 0.25vw);
}
```

## Best Practices

1. **Use relative units** (rem/em) for scalability
2. **Set line-height unitless** for better inheritance
3. **Create a type scale** for consistency
4. **Ensure sufficient contrast** for accessibility
5. **Use system fonts** for performance
6. **Limit font weights** (2-3 weights max)
7. **Test across devices** for readability

## Accessibility

### Minimum Font Size

```css
html {
  font-size: 16px; /* Base size */
}
```

### Text Resize Support

```css
body {
  font-size: 1rem; /* Respects user settings */
}
```

### Contrast Ratio

Ensure text contrast meets WCAG standards:
- Normal text: 4.5:1
- Large text (18px+): 3:1

## Common Issues

### Why is my font not loading?

- Check font file path
- Verify font format support
- Check CORS issues
- Verify font-family name matches

### Why is line-height not working?

- Element has no content
- Using wrong unit (px vs unitless)
- Inherited value overriding

### Why is text-overflow not working?

- Need `white-space: nowrap`
- Need `overflow: hidden`
- Element must have constrained width

## Modern Typography

### Variable Fonts

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

### CSS Functions

```css
font-size: clamp(16px, 2vw, 24px);
letter-spacing: calc(1px + 0.1vw);
```

## Browser Support

All typography properties are well-supported in modern browsers. Variable fonts have growing support. Check [Can I Use](https://caniuse.com/) for specific feature support.
