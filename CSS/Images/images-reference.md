# CSS Images Reference Guide

## Overview

CSS image properties control how images are displayed, sized, and positioned within elements. Understanding these properties is essential for creating responsive and visually appealing designs.

## Object-Fit

The `object-fit` property specifies how an image should be resized to fit its container.

```css
object-fit: fill;     /* Default - stretches to fill */
object-fit: contain;  /* Scales to fit within, maintains aspect ratio */
object-fit: cover;    /* Scales to cover, maintains aspect ratio, may crop */
object-fit: none;     /* Doesn't scale, uses original size */
object-fit: scale-down; /* Scales down to fit if needed */
```

## Object-Position

The `object-position` property specifies the position of the replaced element within its container.

```css
object-position: center;
object-position: top left;
object-position: bottom right;
object-position: 50% 50%;
object-position: 10px 20px;
```

## Image Sizing

### Width and Height

```css
img {
  width: 100%;
  height: auto;
}

img {
  width: 300px;
  height: 200px;
}
```

### Max Width for Responsive Images

```css
img {
  max-width: 100%;
  height: auto;
}
```

## Image Filters

```css
filter: none;
filter: blur(5px);
filter: brightness(150%);
filter: contrast(150%);
filter: grayscale(100%);
filter: invert(100%);
filter: opacity(50%);
filter: saturate(200%);
filter: sepia(100%);
filter: hue-rotate(90deg);
```

### Multiple Filters

```css
filter: grayscale(100%) blur(2px);
filter: brightness(120%) contrast(110%);
```

## Opacity

```css
opacity: 1;    /* Fully opaque */
opacity: 0.5;  /* 50% transparent */
opacity: 0;    /* Fully transparent */
```

## Common Patterns

### Responsive Image

```css
img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}
```

### Circular Avatar

```css
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}
```

### Hero Background Image

```css
.hero {
  background-image: url('hero.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
}
```

### Image Gallery

```css
.gallery img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}
```

### Image with Hover Effect

```css
.image-container img {
  transition: transform 0.3s, filter 0.3s;
}

.image-container:hover img {
  transform: scale(1.05);
  filter: brightness(110%);
}
```

### Grayscale to Color on Hover

```css
img {
  filter: grayscale(100%);
  transition: filter 0.3s;
}

img:hover {
  filter: grayscale(0%);
}
```

## Responsive Images

### Using srcset

```html
<img src="image.jpg"
     srcset="image-small.jpg 480w,
             image-medium.jpg 800w,
             image-large.jpg 1200w"
     sizes="(max-width: 600px) 480px,
            (max-width: 900px) 800px,
            1200px"
     alt="Description">
```

### Using picture Element

```html
<picture>
  <source media="(max-width: 600px)" srcset="image-small.jpg">
  <source media="(max-width: 900px)" srcset="image-medium.jpg">
  <img src="image-large.jpg" alt="Description">
</picture>
```

## Best Practices

1. **Always use `alt` text** for accessibility
2. **Use `max-width: 100%`** for responsive images
3. **Set `height: auto`** to maintain aspect ratio
4. **Use `object-fit: cover`** for consistent sizing
5. **Optimize images** for web (compress, appropriate format)
6. **Use modern formats** (WebP, AVIF) with fallbacks
7. **Lazy load below-the-fold images**

## Common Issues

### Why is my image distorted?

- Not using `object-fit` correctly
- Setting both width and height without maintaining aspect ratio
- Using `object-fit: fill` (stretches image)

### Why is my image not responsive?

- Not setting `max-width: 100%`
- Using fixed width/height
- Not using `height: auto`

### Why is my filter not working?

- Browser doesn't support filter type
- Invalid filter syntax
- Image has no dimensions

## Image Formats

### Common Formats

- **JPEG**: Photographs, complex images
- **PNG**: Images with transparency, simple graphics
- **WebP**: Modern format, better compression
- **SVG**: Vector graphics, icons
- **GIF**: Simple animations

### Choosing the Right Format

- **Photographs**: JPEG or WebP
- **Graphics with transparency**: PNG or WebP
- **Icons/logos**: SVG
- **Simple animations**: GIF or WebP

## Performance Tips

1. **Use appropriate image sizes** for display
2. **Compress images** before using
3. **Use modern formats** (WebP)
4. **Lazy load images** below the fold
5. **Use srcset** for responsive images
6. **Consider using CDNs** for image delivery

## Browser Support

All image properties are well-supported in modern browsers. Check [Can I Use](https://caniuse.com/) for specific feature support, especially for newer formats like WebP and AVIF.
