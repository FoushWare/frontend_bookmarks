# Sass (SCSS) Interview Questions

## Basic Questions

### 1. What is Sass and why would you use it?

Sass (Syntactically Awesome Style Sheets) is a CSS preprocessor that extends CSS with features like variables, nesting, mixins, functions, and inheritance. It helps write more maintainable, organized, and efficient CSS by allowing you to use programming constructs in your stylesheets.

### 2. What are the two syntaxes of Sass?

Sass has two syntaxes:
- **Sass (indented syntax)**: Uses indentation instead of braces and semicolons
- **SCSS (Sassy CSS)**: Uses CSS-like syntax with braces and semicolons, making it easier to migrate from regular CSS

### 3. How do you install Sass?

```bash
# Using npm
npm install -g sass

# Using yarn
yarn global add sass

# Compile SCSS to CSS
sass input.scss output.css

# Watch for changes
sass --watch input.scss output.css
```

### 4. What are Sass variables and how do you use them?

Variables store values that can be reused throughout your stylesheet:

```scss
$primary-color: #667eea;
$font-size-base: 16px;

.button {
  background-color: $primary-color;
  font-size: $font-size-base;
}
```

### 5. What is nesting in Sass?

Nesting allows you to nest selectors within each other, following the same visual hierarchy as HTML:

```scss
.navbar {
  background: #fff;
  
  .logo {
    font-size: 1.5em;
  }
  
  .nav-links a {
    color: #333;
    
    &:hover {
      color: $primary-color;
    }
  }
}
```

## Intermediate Questions

### 6. What are mixins and when would you use them?

Mixins allow you to define reusable CSS rule sets with parameters:

```scss
@mixin button($bg-color, $text-color: #fff) {
  padding: 12px 24px;
  background-color: $bg-color;
  color: $text-color;
  border: none;
  border-radius: 4px;
}

.primary-button {
  @include button(#667eea);
}
```

Use mixins for:
- Cross-browser compatibility (vendor prefixes)
- Reusable design patterns
- Complex calculations
- Responsive breakpoints

### 7. What is the difference between @include and @extend?

- **@include**: Includes the content of a mixin, copying the styles to the selector
- **@extend**: Shares styles with another selector, creating a single rule in the compiled CSS

```scss
// Mixin - copies styles
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  @include flex-center;
}

// Extend - shares styles
.button {
  padding: 12px 24px;
  border: none;
}

.primary-button {
  @extend .button;
  background: #667eea;
}
```

### 8. What are Sass functions?

Functions perform calculations and return values:

```scss
// Built-in functions
lighten(#667eea, 10%);    // Lighten color
darken(#667eea, 10%);     // Darken color
rgba(#667eea, 0.5);       // Add transparency
percentage(0.5);          // Convert to percentage

// Custom functions
@function px-to-rem($px) {
  @return ($px / 16px) * 1rem;
}

.container {
  padding: px-to-rem(16px);
}
```

### 9. How do you use loops in Sass?

Sass supports three types of loops:

```scss
// @for loop
@for $i from 1 through 3 {
  .col-#{$i} {
    width: percentage($i / 3);
  }
}

// @each loop
$colors: (primary: #667eea, secondary: #764ba2);

@each $name, $color in $colors {
  .btn-#{$name} {
    background-color: $color;
  }
}

// @while loop
$i: 1;
@while $i <= 3 {
  .item-#{$i} {
    margin-left: ($i - 1) * 10px;
  }
  $i: $i + 1;
}
```

### 10. What are Sass maps?

Maps are like associative arrays that store key-value pairs:

```scss
$breakpoints: (
  small: 480px,
  medium: 768px,
  large: 1024px
);

@mixin respond-to($breakpoint) {
  @if map-has-key($breakpoints, $breakpoint) {
    @media (min-width: map-get($breakpoints, $breakpoint)) {
      @content;
    }
  }
}
```

## Advanced Questions

### 11. What is the difference between @import and @use?

**@import (old way)**:
- Loads the entire file every time it's imported
- Can cause namespace conflicts
- Being deprecated in modern Sass

**@use (new way)**:
- Loads each file only once
- Creates a namespace to prevent conflicts
- Provides better module system
- Recommended for modern Sass projects

```scss
// Old way
@import 'variables';
@import 'mixins';

// New way
@use 'variables' as var;
@use 'mixins' as mix;

.container {
  @include mix.flex-center;
  background: var.$primary-color;
}
```

### 12. What are partials and how do you use them?

Partials are Sass files that start with an underscore and are meant to be imported. They don't generate their own CSS file:

```scss
// _variables.scss
$primary-color: #667eea;

// _mixins.scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// styles.scss
@use 'variables';
@use 'mixins';
```

### 13. How do you handle responsive design with Sass?

```scss
$breakpoints: (
  mobile: 480px,
  tablet: 768px,
  desktop: 1024px
);

@mixin respond-to($breakpoint) {
  @if map-has-key($breakpoints, $breakpoint) {
    @media (min-width: map-get($breakpoints, $breakpoint)) {
      @content;
    }
  }
}

.container {
  padding: 10px;
  
  @include respond-to(tablet) {
    padding: 20px;
  }
  
  @include respond-to(desktop) {
    padding: 30px;
  }
}
```

### 14. What is the parent selector (&) in Sass?

The parent selector (&) refers to the parent selector in nested rules:

```scss
.button {
  background: #667eea;
  
  &:hover {
    background: #764ba2;
  }
  
  &.primary {
    background: #667eea;
  }
  
  &__icon {
    margin-right: 8px;
  }
}
```

### 15. How do you create a theme system with Sass?

```scss
$themes: (
  light: (
    bg: #ffffff,
    text: #333333,
    primary: #667eea
  ),
  dark: (
    bg: #1a1a2e,
    text: #eaeaea,
    primary: #667eea
  )
);

@mixin theme($theme-name) {
  $theme: map-get($themes, $theme-name);
  
  background: map-get($theme, bg);
  color: map-get($theme, text);
  
  .button {
    background: map-get($theme, primary);
  }
}

body {
  @include theme('light');
}

body.dark-mode {
  @include theme('dark');
}
```

## Practical Questions

### 16. How would you organize a large Sass project?

```
styles/
├── main.scss
├── abstracts/
│   ├── _variables.scss
│   ├── _functions.scss
│   ├── _mixins.scss
│   └── _placeholders.scss
├── base/
│   ├── _reset.scss
│   ├── _typography.scss
│   └── _utilities.scss
├── components/
│   ├── _buttons.scss
│   ├── _cards.scss
│   ├── _forms.scss
│   └── _modals.scss
├── layout/
│   ├── _header.scss
│   ├── _footer.scss
│   ├── _grid.scss
│   └── _sidebar.scss
├── pages/
│   ├── _home.scss
│   ├── _about.scss
│   └── _contact.scss
└── themes/
    ├── _light.scss
    └── _dark.scss
```

### 17. How do you handle vendor prefixes with Sass?

```scss
@mixin prefix($property, $value, $prefixes: webkit moz ms) {
  @each $prefix in $prefixes {
    #{'-' + $prefix + '-' + $property}: $value;
  }
  #{$property}: $value;
}

.button {
  @include prefix(transform, rotate(45deg));
  @include prefix(transition, all 0.3s ease);
}
```

### 18. How do you create a responsive grid system with Sass?

```scss
$grid-columns: 12;
$grid-gutter: 20px;

@mixin make-row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -($grid-gutter / 2);
}

@mixin make-col($size) {
  flex: 0 0 percentage($size / $grid-columns);
  max-width: percentage($size / $grid-columns);
  padding: 0 ($grid-gutter / 2);
}

.row {
  @include make-row;
}

.col-6 {
  @include make-col(6);
}

.col-4 {
  @include make-col(4);
}
```

### 19. How do you implement BEM methodology with Sass?

```scss
.block {
  &__element {
    // element styles
  }
  
  &--modifier {
    // modifier styles
  }
  
  &__element--modifier {
    // element with modifier
  }
}

// Example
.card {
  background: white;
  padding: 20px;
  
  &__title {
    font-size: 1.5em;
    margin-bottom: 10px;
  }
  
  &__content {
    color: #666;
  }
  
  &--featured {
    border: 2px solid #667eea;
  }
}
```

### 20. How do you create utility classes with Sass?

```scss
$spacing-units: (0, 4, 8, 12, 16, 20, 24, 32, 40, 48);

@each $value in $spacing-units {
  .m-#{$value} {
    margin: #{$value}px;
  }
  
  .p-#{$value} {
    padding: #{$value}px;
  }
  
  .mt-#{$value} {
    margin-top: #{$value}px;
  }
  
  .mb-#{$value} {
    margin-bottom: #{$value}px;
  }
}
```

## Troubleshooting Questions

### 21. Why is my Sass not compiling to CSS?

Common issues:
- Sass not installed globally or locally
- Wrong file extension (.scss vs .sass)
- Syntax errors in your Sass file
- File path issues with imports
- Watch command not running

### 22. How do you debug Sass compilation errors?

- Check the error message for line numbers
- Validate syntax with online Sass validators
- Check for missing semicolons or braces
- Verify import paths are correct
- Use `sass --trace` for detailed error information

### 23. Why are my variables not working?

- Variables must be defined before use
- Check for typos in variable names
- Ensure variables are in the correct scope
- Verify imports are loading the variable files
- Check if you're using the correct syntax ($variable-name)

### 24. How do you handle circular dependencies in Sass?

- Reorganize your file structure to avoid circular imports
- Use @use instead of @import for better module handling
- Split shared code into separate modules
- Use forward rules to re-export modules

### 25. Why is my compiled CSS larger than expected?

- Check for duplicate styles from @extend
- Review mixin usage for unnecessary repetition
- Consider using functions instead of mixins for calculations
- Use CSS purging tools like PurgeCSS
- Check for unused imports

## Performance Questions

### 26. How does Sass affect build performance?

- Compilation time increases with file size and complexity
- Deep nesting can slow down compilation
- Too many imports can affect performance
- Complex functions and loops add overhead
- Use watch mode for development, compile once for production

### 27. How do you optimize Sass for performance?

- Limit nesting depth (max 3 levels)
- Use functions instead of mixins for calculations
- Avoid excessive use of @extend
- Split large files into smaller modules
- Use @use instead of @import for better caching
- Minimize complex loops and conditionals

### 28. What are the best practices for Sass performance?

- Use variables for repeated values
- Prefer mixins over @extend for most cases
- Keep functions simple and focused
- Use partials for better organization
- Compile with source maps for debugging
- Minimize the number of files imported

### 29. How do you handle large Sass projects efficiently?

- Use a clear file structure and naming convention
- Implement a modular architecture
- Use @use for better module management
- Create a build process with task runners
- Use linting tools like Stylelint
- Implement code review for Sass files

### 30. What tools can help with Sass development?

- **Prepros**: GUI for compiling Sass
- **VS Code extensions**: Live Sass Compiler, Sass Lint
- **Koala**: Cross-platform compiler
- **CodeKit**: Mac-based compiler
- **Node-sass / Dart-sass**: Command-line compilers
- **Stylelint**: Linting tool for Sass

## Edge Cases

### 31. How do you handle special characters in Sass?

Use interpolation or escape characters:

```scss
$icon: "\f007";

.icon:before {
  content: #{$icon};
}
```

### 32. How do you work with CSS custom properties in Sass?

```scss
:root {
  --primary-color: #667eea;
  --spacing: 16px;
}

.button {
  background: var(--primary-color);
  padding: var(--spacing);
}

// You can also use Sass variables to set CSS custom properties
$primary: #667eea;

:root {
  --primary-color: #{$primary};
}
```

### 33. How do you handle CSS modules with Sass?

```scss
.button {
  background: $primary-color;
  padding: 12px 24px;
  
  &:hover {
    background: darken($primary-color, 10%);
  }
}
```

### 34. How do you integrate Sass with CSS-in-JS solutions?

```javascript
// styled-components with Sass
import styled from 'styled-components';
import { css } from 'styled-components';

const Button = styled.button`
  background: ${props => props.theme.primary};
  padding: 12px 24px;
  
  &:hover {
    background: ${props => darken(props.theme.primary, 10%)};
  }
`;
```

### 35. How do you handle legacy CSS migration to Sass?

- Start by renaming .css files to .scss
- Gradually introduce variables for repeated values
- Refactor nested selectors using Sass nesting
- Extract common patterns into mixins
- Organize files using partials
- Migrate incrementally to avoid breaking changes

## Modern Sass Features

### 36. What are the latest features in modern Sass?

- **@use and @forward**: Modern module system
- **CSS Modules**: Better scoping
- **Built-in modules**: math, color, string, etc.
- **@content blocks**: Pass content to mixins
- **Sass maps**: Better data structures
- **Improved error messages**: Better debugging

### 37. How do you use the built-in Sass modules?

```scss
@use "sass:math";
@use "sass:color";
@use "sass:string";

.container {
  padding: math.div(20px, 2);
  background: color.adjust(#667eea, $lightness: 10%);
  content: string.slice("Hello World", 1, 5);
}
```

### 38. What is @forward in Sass?

@forward allows you to re-export modules:

```scss
// _mixins.scss
@forward 'buttons';
@forward 'forms';
@forward 'layout';

// styles.scss
@use 'mixins';

// Now you can access all forwarded modules
@include button-primary;
```

### 39. How do you use @content blocks in mixins?

```scss
@mixin respond-to($breakpoint) {
  @media (min-width: $breakpoint) {
    @content;
  }
}

.container {
  padding: 10px;
  
  @include respond-to(768px) {
    padding: 20px;
    
    .content {
      font-size: 1.2em;
    }
  }
}
```

### 40. How do you handle color operations with the color module?

```scss
@use "sass:color";

.button {
  background: #667eea;
  
  &:hover {
    background: color.adjust(#667eea, $lightness: -10%);
  }
  
  &:active {
    background: color.scale(#667eea, $saturation: -20%);
  }
}
```

## Real-World Scenarios

### 41. How would you create a design system with Sass?

```scss
// _design-tokens.scss
$colors: (
  primary: #667eea,
  secondary: #764ba2,
  success: #27ae60,
  warning: #f39c12,
  error: #e74c3c
);

$spacing: (4, 8, 12, 16, 20, 24, 32, 40, 48);

$typography: (
  xs: 0.75rem,
  sm: 0.875rem,
  base: 1rem,
  lg: 1.125rem,
  xl: 1.25rem,
  2xl: 1.5rem
);

$border-radius: (
  sm: 4px,
  md: 8px,
  lg: 12px,
  xl: 16px
);
```

### 42. How do you handle internationalization with Sass?

```scss
$ltr: true;
$rtl: false;

@if $rtl {
  body {
    direction: rtl;
  }
}

.button {
  margin-right: 10px;
  
  @if $rtl {
    margin-right: 0;
    margin-left: 10px;
  }
}
```

### 43. How do you create accessible color palettes with Sass?

```scss
@function accessible-color($color, $contrast: 4.5) {
  @while (contrast-ratio($color, white) < $contrast) {
    $color: darken($color, 1%);
  }
  @return $color;
}

.button {
  background: accessible-color(#667eea);
  color: white;
}
```

### 44. How do you handle animation keyframes with Sass?

```scss
@mixin keyframes($name) {
  @keyframes #{$name} {
    @content;
  }
}

@include keyframes(fadeIn) {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.element {
  animation: fadeIn 0.3s ease;
}
```

### 45. How do you integrate Sass with modern build tools?

```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
};

// Vite
export default {
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`
      }
    }
  }
};
```
