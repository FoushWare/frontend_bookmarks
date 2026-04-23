
## 🎨 CSS & Styling

### 🔹 CSS Basics & Fundamentals

---

**1. What is the CSS box model?**

- A: Content and padding only  
- B: Content, padding, border, margin  
- C: Content and margin only  
- D: Border and padding only  

<details>
<summary><b>Answer</b></summary>

**B: Content, padding, border, margin**

</details>

---

**2. Difference between `display: none` and `visibility: hidden`?**

- A: Both remove element from DOM  
- B: `display: none` removes layout, `visibility: hidden` keeps space  
- C: `visibility: hidden` removes layout  
- D: No difference  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**3. What does `position: relative` do?**

- A: Moves element relative to viewport  
- B: Positions relative to nearest parent  
- C: Positions relative to itself  
- D: Same as absolute  

<details>
<summary><b>Answer</b></summary>

**C**

</details>

---

### 🔹 Flexbox

---

**4. What is the difference between `justify-content` and `align-items`?**

- A: Both control vertical alignment  
- B: `justify-content` → main axis, `align-items` → cross axis  
- C: `align-items` → main axis  
- D: No difference  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**5. How do you center a div using Flexbox?**

- A:
```css
justify-content: center;
align-items: center;
````

* B:

```css
text-align: center;
```

* C:

```css
margin: auto;
```

* D:

```css
position: center;
```

<details>
<summary><b>Answer</b></summary>

**A** (with `display: flex`)

</details>

---

**6. What does `flex: 1` mean?**

* A: `flex: 0 1 auto`
* B: `flex: 1 1 0`
* C: `flex: auto`
* D: `flex: none`

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Grid

---

**7. Flexbox vs Grid?**

* A: Both are 2D
* B: Flexbox is 2D, Grid is 1D
* C: Flexbox is 1D, Grid is 2D
* D: No difference

<details>
<summary><b>Answer</b></summary>

**C**

</details>

---

**8. What is `fr` unit?**

* A: Fixed ratio pixel
* B: Fraction of available space
* C: Font-relative unit
* D: Frame unit

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**9. How to create responsive grid without media queries?**

* A:

```css
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
```

* B:

```css
grid-template-columns: 100%;
```

* C:

```css
display: flex;
```

* D:

```css
width: auto;
```

<details>
<summary><b>Answer</b></summary>

**A**

</details>

---

### 🔹 Positioning & Layout

---

**10. Difference between `absolute` and `fixed`?**

* A: Both relative to parent
* B: `absolute` → parent, `fixed` → viewport
* C: `fixed` → parent
* D: No difference

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**11. When does `z-index` NOT work?**

* A: When element is positioned
* B: When element has margin
* C: When element is not positioned or stacking context issues
* D: Always works

<details>
<summary><b>Answer</b></summary>

**C**

</details>

---

### 🔹 Responsive Design

---

**12. What is mobile-first design?**

* A: Start desktop → scale down
* B: Start mobile → scale up
* C: Only mobile design
* D: No media queries

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**13. Difference between `em` and `rem`?**

* A: Both same
* B: `em` → root, `rem` → parent
* C: `em` → parent, `rem` → root
* D: Both viewport

<details>
<summary><b>Answer</b></summary>

**C**

</details>

---

### 🔹 Advanced CSS

---

**14. What creates a stacking context?**

* A: `margin`
* B: `padding`
* C: `opacity < 1`, `transform`, positioned elements
* D: `color`

<details>
<summary><b>Answer</b></summary>

**C**

</details>

---

**15. What is `will-change` used for?**

* A: Styling text
* B: Performance hint for upcoming changes
* C: Layout reset
* D: Debugging

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**16. Difference between `inline`, `block`, `inline-block`?**

* A: All same
* B: `inline` allows width
* C: `inline-block` allows width/height
* D: `block` is inline

<details>
<summary><b>Answer</b></summary>

**C**

</details>

---

### 🔹 CSS Performance

---

**17. Which triggers layout (reflow)?**

* A: `transform`
* B: `opacity`
* C: `width`, `height`, `margin`
* D: `color`

<details>
<summary><b>Answer</b></summary>

**C**

</details>

---

**18. Reflow vs Repaint?**

* A: Same
* B: Reflow = layout, Repaint = visual
* C: Repaint = layout
* D: Reflow = GPU

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 CSS Architecture

---

**19. What is BEM?**

* A: CSS framework
* B: Naming convention
* C: JS library
* D: Layout system

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**20. CSS Modules vs Styled Components?**

* A: Both global CSS
* B: Modules scoped, Styled Components CSS-in-JS
* C: Styled Components faster always
* D: No difference

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Animations

---

**21. Transition vs Animation?**

* A: Same
* B: Transition = state change, Animation = keyframes
* C: Animation only for hover
* D: Transition needs JS

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**22. Why use `transform` for animation?**

* A: Easier syntax
* B: Uses GPU, avoids reflow
* C: Required by browser
* D: No reason

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Edge Cases

---

**23. Why can `overflow: hidden` break sticky?**

* A: Bug
* B: Creates new containing block
* C: Removes element
* D: No effect

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**24. Why `height: 100%` may not work?**

* A: CSS bug
* B: Needs parent height defined
* C: Only works in flex
* D: Only works in grid

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**25. `min-width` vs `max-width` vs `width`?**

* A: Same
* B: Constraints vs fixed size
* C: Only `width` matters
* D: `min-width` ignored

<details>
<summary><b>Answer</b></summary>

**B**

</details>
```

---

### 🔹 Advanced Layout & Behavior

---

**26. What happens when `margin: auto` is applied in block elements?**

- A: Centers vertically  
- B: Centers horizontally if width is defined  
- C: Does nothing  
- D: Breaks layout  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**27. What is the default `position` value?**

- A: relative  
- B: absolute  
- C: static  
- D: fixed  

<details>
<summary><b>Answer</b></summary>

**C**

</details>

---

**28. What does `overflow: auto` do?**

- A: Always shows scrollbars  
- B: Hides content  
- C: Adds scroll only when needed  
- D: Removes overflow  

<details>
<summary><b>Answer</b></summary>

**C**

</details>

---

**29. What is `aspect-ratio` used for?**

- A: Set font ratio  
- B: Maintain width/height proportion  
- C: Control flex  
- D: Control grid  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Browser Rendering & Internals

---

**30. What is the correct rendering pipeline order?**

- A: Paint → Layout → Composite  
- B: Layout → Paint → Composite  
- C: Composite → Layout → Paint  
- D: Layout → Composite → Paint  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**31. Which property promotes element to its own layer?**

- A: margin  
- B: transform  
- C: padding  
- D: display  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**32. What is compositing?**

- A: Layout calculation  
- B: Combining layers into final screen  
- C: Parsing HTML  
- D: Executing JS  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Specificity & Cascade

---

**33. Which has highest specificity?**

- A: `.class`  
- B: `#id`  
- C: `div`  
- D: `*`  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**34. What does `!important` do?**

- A: Removes rule  
- B: Overrides normal specificity  
- C: Adds performance  
- D: Prevents inheritance  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**35. Inline styles specificity?**

- A: Low  
- B: Medium  
- C: High  
- D: None  

<details>
<summary><b>Answer</b></summary>

**C**

</details>

---

### 🔹 Modern CSS

---

**36. What is `clamp()` used for?**

- A: Animation  
- B: Responsive sizing with min/max  
- C: Grid layout  
- D: Debugging  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**37. What is `container queries`?**

- A: Media queries for viewport  
- B: Queries based on parent container size  
- C: JS feature  
- D: Grid-only feature  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**38. What does `object-fit: cover` do?**

- A: Stretches image  
- B: Maintains ratio and fills container  
- C: Crops without scaling  
- D: Removes overflow  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Debugging & Real Scenarios

---

**39. Why is `position: sticky` not working?**

- A: Needs JS  
- B: Parent has overflow hidden/scroll  
- C: Needs flex  
- D: Only works in grid  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**40. Why is flex item overflowing?**

- A: flex-grow issue  
- B: min-width default (auto)  
- C: margin issue  
- D: z-index issue  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**41. Why does `100vh` cause issues on mobile?**

- A: CSS bug  
- B: Includes browser UI height  
- C: Doesn't support flex  
- D: Only for desktop  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Accessibility & UX

---

**42. Why avoid removing outline?**

- A: Performance  
- B: Accessibility (keyboard navigation)  
- C: SEO  
- D: Layout  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**43. Best unit for font scaling?**

- A: px  
- B: rem  
- C: vh  
- D: %  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Architecture & Scaling

---

**44. What is a design system?**

- A: CSS file  
- B: Reusable UI rules/components  
- C: JS framework  
- D: API layer  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**45. What problem do CSS variables solve?**

- A: Performance  
- B: Reusability & theming  
- C: Layout  
- D: Animation  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Animations Deep Dive

---

**46. Which is more performant?**

- A: left/top  
- B: transform  
- C: margin  
- D: padding  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**47. What is `requestAnimationFrame` used for?**

- A: CSS only  
- B: Sync animations with browser repaint  
- C: Layout calculation  
- D: Debugging  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

### 🔹 Edge & Trick Questions

---

**48. What happens if parent has `font-size: 0`?**

- A: Nothing  
- B: Removes inline spacing  
- C: Breaks layout  
- D: Hides text  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**49. Why `line-height` matters?**

- A: Color  
- B: Vertical spacing/readability  
- C: Width  
- D: Grid  

<details>
<summary><b>Answer</b></summary>

**B**

</details>

---

**50. What is `pointer-events: none`?**

- A: Disables hover  
- B: Disables mouse interactions  
- C: Hides element  
- D: Removes element  

<details>
<summary><b>Answer</b></summary>

**B**

</details>
