# CSS Background Reference Guide

## Overview

CSS background properties control the background of elements, including colors, images, gradients, and their positioning and sizing.

## Background Color

```css
background-color: #ffffff;
background-color: rgb(255, 255, 255);
background-color: rgba(255, 255, 255, 0.5);
background-color: hsl(0, 0%, 100%);
background-color: hsla(0, 0%, 100%, 0.5);
background-color: transparent;
```

## Background Image

```css
background-image: url('image.jpg');
background-image: url('https://example.com/image.jpg');
background-image: none;
```

## Background Size

```css
background-size: cover;      /* Covers entire element */
background-size: contain;    /* Fits image within element */
background-size: 100% 100%;   /* Stretch to fill */
background-size: 50% 50%;     /* Half size */
background-size: auto;        /* Natural size */
```

## Background Position

```css
background-position: center;
background-position: top right;
background-position: bottom left;
background-position: 50% 50%;
background-position: 10px 20px;
```

## Background Repeat

```css
background-repeat: repeat;     /* Repeat both directions */
background-repeat: repeat-x;   /* Repeat horizontally */
background-repeat: repeat-y;   /* Repeat vertically */
background-repeat: no-repeat; /* No repetition */
```

## Background Attachment

```css
background-attachment: scroll; /* Scrolls with content */
background-attachment: fixed;  /* Fixed to viewport */
background-attachment: local;   /* Scrolls with element */
```

## Background Clip

```css
background-clip: border-box;   /* Extends to border */
background-clip: padding-box;  /* Extends to padding */
background-clip: content-box;  /* Extends to content */
background-clip: text;         /* Clips to text */
```

## Background Origin

```css
background-origin: border-box;  /* Starts from border */
background-origin: padding-box; /* Starts from padding */
background-origin: content-box; /* Starts from content */
```

## Background Shorthand

```css
background: #ffffff url('image.jpg') no-repeat center / cover;
```

Order: color | image | repeat | attachment | position | size | origin | clip

## Gradients

### Linear Gradient

```css
background: linear-gradient(to right, #667eea, #764ba2);
background: linear-gradient(45deg, #667eea, #764ba2);
background: linear-gradient(to bottom, #667eea 0%, #764ba2 100%);
background: linear-gradient(#667eea 0%, #764ba2 50%, #667eea 100%);
```

### Radial Gradient

```css
background: radial-gradient(circle, #667eea, #764ba2);
background: radial-gradient(circle at center, #667eea, #764ba2);
background: radial-gradient(circle at top right, #667eea, #764ba2);
background: radial-gradient(ellipse, #667eea, #764ba2);
```

### Conic Gradient

```css
background: conic-gradient(#667eea, #764ba2);
background: conic-gradient(from 45deg, #667eea, #764ba2);
background: conic-gradient(#667eea 0deg, #764ba2 90deg, #667eea 180deg);
```

## Gradient Patterns

### Striped Pattern

```css
background: repeating-linear-gradient(
  45deg,
  #667eea,
  #667eea 10px,
  #764ba2 10px,
  #764ba2 20px
);
```

### Checkerboard Pattern

```css
background: 
  conic-gradient(#667eea 90deg, #764ba2 90deg 180deg, #667eea 180deg 270deg, #764ba2 270deg);
background-size: 40px 40px;
```

### Dotted Pattern

```css
background: radial-gradient(circle, #667eea 2px, transparent 2px);
background-size: 20px 20px;
```

## Common Patterns

### Hero Background

```css
.hero {
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('hero.jpg');
  background-size: cover;
  background-position: center;
}
```

### Card Background

```css
.card {
  background: white;
  background-image: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);
}
```

### Gradient Text

```css
.gradient-text {
  background: linear-gradient(to right, #667eea, #764ba2);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
```

### Glassmorphism

```css
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

## Responsive Backgrounds

```css
.element {
  background: url('image.jpg');
  background-size: cover;
  background-position: center;
}

@media (max-width: 768px) {
  .element {
    background-image: url('image-mobile.jpg');
  }
}
```

## Performance Tips

1. **Use appropriate formats**: WebP for modern browsers, JPEG/PNG fallbacks
2. **Optimize images**: Compress and resize appropriately
3. **Use gradients instead of images** when possible
4. **Lazy load background images** for below-the-fold content
5. **Use CSS sprites** for small repeating patterns

## Best Practices

1. **Always provide fallback colors** for background images
2. **Use `cover` for full-width backgrounds**
3. **Use `contain` when you want the full image visible**
4. **Consider performance with large background images**
5. **Use gradients for simple patterns** instead of images
6. **Test background images on different screen sizes**
7. **Ensure text contrast over backgrounds**

## Common Issues

### Why is my background image not showing?

- Check image path is correct
- Verify element has dimensions
- Ensure element is visible (not `display: none`)
- Check for z-index issues

### Why is my background not covering the element?

- Use `background-size: cover`
- Check element has defined height
- Verify background-position

### Why is my gradient not working?

- Check syntax is correct
- Ensure browser supports gradient type
- Verify color values are valid

## Browser Support

All background properties are well-supported in modern browsers. Gradients have excellent support. Check [Can I Use](https://caniuse.com/) for specific feature support.
