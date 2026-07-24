# CSS Images Interview Questions

## Basic Questions

### 1. What is the difference between `object-fit: cover` and `object-fit: contain`?

**Answer:**
- `cover`: Scales image to cover the entire container, may crop parts of the image
- `contain`: Scales image to fit entirely within the container, may leave empty space

```css
img {
  object-fit: cover;  /* Fills container, may crop */
  object-fit: contain; /* Fits entirely, may have space */
}
```

### 2. How do you make an image responsive?

**Answer:**
```css
img {
  max-width: 100%;
  height: auto;
}
```

This ensures the image scales down with the viewport while maintaining aspect ratio.

### 3. What is the `object-position` property?

**Answer:** `object-position` specifies the position of the image within its container when using `object-fit`.

```css
img {
  object-fit: cover;
  object-position: center;
  object-position: top left;
  object-position: 50% 50%;
}
```

### 4. What are CSS image filters?

**Answer:** CSS filters apply visual effects to images:
- `blur()`, `brightness()`, `contrast()`
- `grayscale()`, `invert()`, `opacity()`
- `saturate()`, `sepia()`, `hue-rotate()`

```css
img {
  filter: grayscale(100%);
  filter: blur(5px);
  filter: brightness(150%);
}
```

### 5. How do you create a circular avatar image?

**Answer:**
```css
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}
```

## Intermediate Questions

### 6. How do you handle images with different aspect ratios in a grid?

**Answer:**
```css
.gallery img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}
```

### 7. What is the difference between `opacity` and `filter: opacity()`?

**Answer:**
- `opacity`: Affects the entire element including children
- `filter: opacity()`: Only affects the image, not child elements

```css
img {
  opacity: 0.5; /* Affects entire element */
  filter: opacity(50%); /* Only affects image */
}
```

### 8. How do you create a grayscale image that becomes colored on hover?

**Answer:**
```css
img {
  filter: grayscale(100%);
  transition: filter 0.3s;
}

img:hover {
  filter: grayscale(0%);
}
```

### 9. What is the `srcset` attribute used for?

**Answer:** `srcset` allows you to provide different image sources for different screen sizes or resolutions, enabling responsive images without JavaScript.

```html
<img src="default.jpg"
     srcset="small.jpg 480w,
             medium.jpg 800w,
             large.jpg 1200w"
     alt="Description">
```

### 10. How do you optimize images for web performance?

**Answer:**
- Compress images before using
- Use appropriate formats (WebP for modern browsers)
- Use responsive images with srcset
- Lazy load below-the-fold images
- Use CDNs for image delivery
- Provide multiple resolutions

## Advanced Questions

### 11. What is the `picture` element and when should you use it?

**Answer:** The `picture` element allows you to provide different image sources based on media queries, useful for art direction (different crops for different screen sizes).

```html
<picture>
  <source media="(max-width: 600px)" srcset="portrait.jpg">
  <source media="(min-width: 601px)" srcset="landscape.jpg">
  <img src="default.jpg" alt="Description">
</picture>
```

### 12. How do you create a hero background image that covers the entire section?

**Answer:**
```css
.hero {
  background-image: url('hero.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
}
```

### 13. What is the difference between `object-fit: fill` and `object-fit: none`?

**Answer:**
- `fill`: Stretches the image to fill the container, distorting aspect ratio
- `none`: Doesn't scale the image, uses original size

### 14. How do you handle high-DPI (Retina) displays for images?

**Answer:**
```html
<img src="image.jpg"
     srcset="image@2x.jpg 2x,
             image@3x.jpg 3x"
     alt="Description">
```

Or use CSS:
```css
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .hero {
    background-image: url('image@2x.jpg');
    background-size: cover;
  }
}
```

### 15. How do you create an image gallery with consistent sizing?

**Answer:**
```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.gallery img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}
```

### 16. Why is my image distorted?

**Answer:** Common causes:
- Setting both width and height without maintaining aspect ratio
- Using `object-fit: fill`
- Not using `height: auto` with responsive width
- Container dimensions not matching image aspect ratio

### 17. How do you create a zoom effect on image hover?

**Answer:**
```css
.image-container {
  overflow: hidden;
  border-radius: 8px;
}

.image-container img {
  transition: transform 0.3s;
}

.image-container:hover img {
  transform: scale(1.1);
}
```

### 18. What is the `loading` attribute for images?

**Answer:** The `loading` attribute controls lazy loading:
- `loading="eager"`: Load immediately (default)
- `loading="lazy"`: Load when near viewport

```html
<img src="image.jpg" loading="lazy" alt="Description">
```

### 19. How do you create a blurred background image with overlay?

**Answer:**
```css
.hero {
  background: url('hero.jpg');
  background-size: cover;
  background-position: center;
  filter: blur(5px);
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}
```

### 20. How do you handle image loading states?

**Answer:**
```css
img {
  opacity: 0;
  transition: opacity 0.3s;
}

img.loaded {
  opacity: 1;
}
```

With JavaScript:
```javascript
img.onload = () => img.classList.add('loaded');
```

## Practical Questions

### 21. How would you implement a responsive card with an image?

**Answer:**
```css
.card {
  border-radius: 8px;
  overflow: hidden;
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

@media (max-width: 768px) {
  .card img {
    height: 150px;
  }
}
```

### 22. How do you create a profile picture component?

**Answer:**
```css
.profile-pic {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
```

### 23. How would you implement an image carousel with consistent sizing?

**Answer:**
```css
.carousel img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: center;
}
```

### 24. How do you create a thumbnail gallery?

**Answer:**
```css
.thumbnail {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.thumbnail:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
```

### 25. How would you implement a hero section with a parallax background image?

**Answer:**
```css
.hero {
  background: url('hero.jpg') fixed;
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

## Troubleshooting Questions

### 26. Why is my object-fit not working?

**Answer:** Common causes:
- Element has no defined height
- Using `object-fit` on non-replaced elements
- Browser doesn't support `object-fit` (rare now)
- Image has no dimensions

### 27. How do you debug image issues?

**Answer:**
- Use browser DevTools to inspect image loading
- Check image path and file format
- Verify element dimensions
- Look for CSS specificity conflicts
- Test with different image sources
- Check network tab for loading errors

### 28. Why is my filter not working?

**Answer:** Common causes:
- Invalid filter syntax
- Browser doesn't support filter type
- Image has no dimensions
- Filter value out of range

### 29. How do you handle images that fail to load?

**Answer:**
```css
img {
  background-color: #f0f0f0;
  min-height: 200px;
}

img::before {
  content: 'Image failed to load';
  display: block;
  text-align: center;
  padding: 20px;
}
```

### 30. Why is my responsive image not scaling?

**Answer:** Common causes:
- Not using `max-width: 100%`
- Using fixed width/height
- Parent container has fixed width
- Not using `height: auto`

## Performance Questions

### 31. Does using filters affect performance?

**Answer:** Yes, filters can affect performance, especially blur and complex filters. Use them judiciously and consider using `will-change` sparingly for animated filters.

### 32. How can you optimize image rendering?

**Answer:**
- Use appropriate image sizes
- Optimize image files
- Use modern formats (WebP)
- Lazy load images
- Use `will-change` sparingly
- Avoid complex filters on many images

### 33. What is the impact of `object-fit` on performance?

**Answer:** `object-fit` has minimal performance impact in modern browsers. It's generally more performant than using JavaScript to resize images.

## Edge Cases

### 34. What happens when you set both width and height with object-fit?

**Answer:** The image will be sized to the specified dimensions, and `object-fit` determines how the image content is positioned within those dimensions.

### 35. How do you handle SVG images with CSS?

**Answer:** SVG images can be styled with CSS like any other image, and you can also style SVG internals if embedded directly:

```css
.svg-image {
  width: 100px;
  height: 100px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}
```

### 36. What is the difference between `background-image` and `<img>` tags?

**Answer:**
- `background-image`: Decorative, not part of content, not accessible
- `<img>`: Content, accessible, can have alt text, semantically meaningful

### 37. How do you create an image with a gradient overlay?

**Answer:**
```css
.image-overlay {
  position: relative;
}

.image-overlay img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-overlay::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.7));
}
```

### 38. What happens with animated GIFs and filters?

**Answer:** Filters can be applied to animated GIFs, but performance may be impacted. The animation continues to play while the filter is applied.

## Modern Images

### 39. What new image features are available in modern browsers?

**Answer:**
- `loading="lazy"` for native lazy loading
- `decoding="async"` for async image decoding
- Better WebP and AVIF support
- Improved `object-fit` support
- Better DevTools for image debugging

### 40. How do you use CSS custom properties with images?

**Answer:**
```css
:root {
  --image-fit: cover;
  --filter-grayscale: 0%;
}

img {
  object-fit: var(--image-fit);
  filter: grayscale(var(--filter-grayscale));
}
```

## Best Practices

### 41. What are the best practices for CSS images?

**Answer:**
- Always use `alt` text for accessibility
- Use `max-width: 100%` for responsive images
- Set `height: auto` to maintain aspect ratio
- Use `object-fit: cover` for consistent sizing
- Optimize images for web
- Use modern formats (WebP)
- Lazy load below-the-fold images

### 42. When should you use background-image vs img tags?

**Answer:**
- **background-image**: Decorative images, patterns, overlays
- **img**: Content images, photos, icons that need alt text

### 43. How do you ensure accessibility with images?

**Answer:**
- Always provide descriptive alt text
- Use empty alt for decorative images
- Ensure sufficient contrast for overlays
- Don't rely solely on images for information
- Test with screen readers

### 44. What are common image mistakes to avoid?

**Answer:**
- Not providing alt text
- Using large unoptimized images
- Not making images responsive
- Poor contrast with overlays
- Not lazy loading images
- Using wrong image formats

### 45. How do you document image patterns for a team?

**Answer:**
```css
/**
 * Image System
 * 
 * Object Fit:
 * --fit-cover: cover (default for cards)
 * --fit-contain: contain (for logos)
 * 
 * Image Sizes:
 * --avatar-sm: 32px
 * --avatar-md: 64px
 * --avatar-lg: 128px
 * 
 * Filters:
 * --filter-grayscale: grayscale(100%)
 * --filter-blur: blur(5px)
 * 
 * Usage:
 * .card img {
 *   object-fit: var(--fit-cover);
 *   width: 100%;
 *   height: 200px;
 * }
 */
```
