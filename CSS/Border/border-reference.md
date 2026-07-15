# CSS Border Reference Guide

## Overview

CSS border properties control the borders around elements, including width, style, color, and radius. Borders are essential for defining element boundaries and creating visual separation.

## Border Properties

### Border Width

```css
border-width: 1px;
border-width: 2px;
border-width: thin;
border-width: medium;
border-width: thick;
```

### Border Style

```css
border-style: solid;
border-style: dashed;
border-style: dotted;
border-style: double;
border-style: groove;
border-style: ridge;
border-style: inset;
border-style: outset;
border-style: none;
border-style: hidden;
```

### Border Color

```css
border-color: #000000;
border-color: rgb(0, 0, 0);
border-color: rgba(0, 0, 0, 0.5);
border-color: transparent;
```

### Border Shorthand

```css
border: 1px solid #000000;
border: 2px dashed #667eea;
border: none;
```

Order: width | style | color

## Individual Borders

### Border Sides

```css
border-top: 1px solid #000;
border-right: 1px solid #000;
border-bottom: 1px solid #000;
border-left: 1px solid #000;
```

### Individual Properties

```css
border-top-width: 2px;
border-top-style: solid;
border-top-color: #000;

border-right-width: 2px;
border-right-style: solid;
border-right-color: #000;
```

## Border Radius

### Basic Radius

```css
border-radius: 4px;
border-radius: 8px;
border-radius: 50%; /* Circle */
```

### Individual Corners

```css
border-top-left-radius: 8px;
border-top-right-radius: 8px;
border-bottom-right-radius: 8px;
border-bottom-left-radius: 8px;
```

### Shorthand

```css
border-radius: 8px; /* All corners */
border-radius: 8px 16px; /* Top-left/bottom-right: 8px, Top-right/bottom-left: 16px */
border-radius: 8px 16px 24px 32px; /* Top-left, top-right, bottom-right, bottom-left */
border-radius: 8px / 16px; /* Horizontal radius / Vertical radius */
```

## Outline

The `outline` property is similar to border but doesn't affect layout and doesn't have radius.

```css
outline: 2px solid #667eea;
outline: none;
outline-offset: 4px;
```

## Box Shadow

```css
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
```

Values: offset-x | offset-y | blur-radius | spread-radius | color

## Common Patterns

### Card

```css
.card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

### Button

```css
.button {
  border: 1px solid #667eea;
  border-radius: 6px;
  background: #667eea;
  color: white;
}

.button:hover {
  border-color: #5568d3;
  background: #5568d3;
}
```

### Input

```css
.input {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
}

.input:focus {
  border-color: #667eea;
  outline: none;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}
```

### Circle

```css
.circle {
  border-radius: 50%;
  width: 100px;
  height: 100px;
}
```

### Pill Shape

```css
.pill {
  border-radius: 9999px;
  padding: 10px 20px;
}
```

## Border Styles Visual

- **solid**: Solid line
- **dashed**: Dashed line
- **dotted**: Dotted line
- **double**: Two solid lines
- **groove**: 3D groove效果
- **ridge**: 3D ridge效果
- **inset**: 3D inset效果
- **outset**: 3D outset效果

## Focus States

```css
.button:focus {
  outline: 2px solid #667eea;
  outline-offset: 2px;
}

.input:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}
```

## Responsive Borders

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

## Best Practices

1. **Use `border-radius` consistently** across components
2. **Provide focus states** for accessibility
3. **Use `box-shadow` instead of borders** for depth
4. **Consider `outline` for focus indicators**
5. **Use semantic border styles** (solid for most cases)
6. **Test border contrast** for accessibility
7. **Use `border: none`** when removing borders

## Common Issues

### Why is my border not showing?

- Check `border-style` is not `none`
- Verify element has dimensions
- Ensure border color contrasts with background
- Check for `border: 0` overriding

### Why is my border-radius not working?

- Element must have `border` or `background`
- Check for `overflow: hidden` on parent
- Verify border-radius value is valid

### Why is my outline not showing?

- Outline requires element to be focused
- Check `outline-style` is not `none`
- Verify outline color contrasts

## Border vs Outline

| Property | Affects Layout | Has Radius | Focus Only |
|----------|----------------|------------|------------|
| Border | ✅ | ✅ | ❌ |
| Outline | ❌ | ❌ | ✅ |

## Browser Support

All border properties are well-supported in modern browsers. Check [Can I Use](https://caniuse.com/) for specific feature support.
