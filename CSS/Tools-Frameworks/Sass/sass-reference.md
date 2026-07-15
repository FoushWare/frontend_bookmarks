# Sass (SCSS) Reference Guide

## What is Sass?

Sass (Syntactically Awesome Style Sheets) is a CSS preprocessor that extends CSS with features like variables, nesting, mixins, and functions. It compiles to standard CSS and helps write more maintainable and organized stylesheets.

## Installation

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

## Variables

Variables store values that can be reused throughout your stylesheet.

```scss
// Define variables
$primary-color: #667eea;
$secondary-color: #764ba2;
$font-size-base: 16px;
$spacing-unit: 8px;

// Use variables
.button {
  background-color: $primary-color;
  font-size: $font-size-base;
  padding: $spacing-unit * 2;
}
```

## Nesting

Sass allows you to nest selectors within each other, following the same visual hierarchy as HTML.

```scss
.navbar {
  background: #fff;
  
  .logo {
    font-size: 1.5em;
  }
  
  .nav-links {
    display: flex;
    
    a {
      color: #333;
      
      &:hover {
        color: $primary-color;
      }
    }
  }
}
```

## Mixins

Mixins allow you to define reusable CSS rule sets.

```scss
// Define a mixin
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin button($bg-color, $text-color: #fff) {
  padding: 12px 24px;
  background-color: $bg-color;
  color: $text-color;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
}

// Use mixins
.card {
  @include flex-center;
  height: 200px;
}

.primary-button {
  @include button($primary-color);
}

.secondary-button {
  @include button($secondary-color);
}
```

## Functions

Sass provides built-in functions and allows you to create custom functions.

```scss
// Built-in functions
$color: #667eea;
lighten($color, 10%);    // Lighten color
darken($color, 10%);     // Darken color
rgba($color, 0.5);       // Add transparency
percentage(0.5);         // Convert to percentage

// Custom function
@function px-to-rem($px) {
  @return ($px / 16px) * 1rem;
}

.container {
  padding: px-to-rem(16px);
}
```

## Inheritance (Extend)

Inheritance allows selectors to share styles with another selector.

```scss
.button {
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.primary-button {
  @extend .button;
  background-color: $primary-color;
  color: white;
}

.secondary-button {
  @extend .button;
  background-color: $secondary-color;
  color: white;
}
```

## Operators

Sass supports mathematical operators in property values.

```scss
.container {
  width: 100% - 20px;
  padding: 10px + 5px;
  margin: 20px / 2;
  font-size: 16px * 1.5;
}
```

## Conditionals

Use `@if`, `@else if`, and `@else` for conditional logic.

```scss
@mixin theme($theme) {
  @if $theme == 'light' {
    background: #fff;
    color: #333;
  } @else if $theme == 'dark' {
    background: #1a1a2e;
    color: #eaeaea;
  } @else {
    background: #f0f0f0;
    color: #666;
  }
}

body {
  @include theme('light');
}
```

## Loops

Sass supports `@for`, `@each`, and `@while` loops.

```scss
// @for loop
@for $i from 1 through 3 {
  .col-#{$i} {
    width: percentage($i / 3);
  }
}

// @each loop
$colors: (primary: #667eea, secondary: #764ba2, success: #27ae60);

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

## Maps

Maps are like associative arrays that store key-value pairs.

```scss
$breakpoints: (
  small: 480px,
  medium: 768px,
  large: 1024px,
  xlarge: 1200px
);

@mixin respond-to($breakpoint) {
  @if map-has-key($breakpoints, $breakpoint) {
    @media (min-width: map-get($breakpoints, $breakpoint)) {
      @content;
    }
  }
}

.container {
  @include respond-to(medium) {
    max-width: 720px;
  }
}
```

## Modules (Partials)

Partials are Sass files that start with an underscore and are meant to be imported.

```scss
// _variables.scss
$primary-color: #667eea;
$secondary-color: #764ba2;

// _mixins.scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// styles.scss
@import 'variables';
@import 'mixins';

.container {
  @include flex-center;
  background: $primary-color;
}
```

## Import vs Use

Modern Sass recommends using `@use` instead of `@import`.

```scss
// Old way (@import)
@import 'variables';
@import 'mixins';

// New way (@use)
@use 'variables' as var;
@use 'mixins' as mix;

.container {
  @include mix.flex-center;
  background: var.$primary-color;
}
```

## Comments

```scss
// Single-line comment (removed in compiled CSS)

/* Multi-line comment (preserved in compiled CSS) */

/*!
  Critical comment (always preserved)
  Useful for copyright notices
*/
```

## Best Practices

1. **Use variables for colors, fonts, and spacing** - Makes it easy to maintain consistency
2. **Nest selectively** - Avoid deep nesting (max 3 levels)
3. **Use mixins for complex patterns** - Keep DRY (Don't Repeat Yourself)
4. **Organize with partials** - Split large files into smaller, focused modules
5. **Use meaningful names** - Make your code self-documenting
6. **Leverage functions for calculations** - Keep your math organized
7. **Use maps for related values** - Group related data together

## File Structure Example

```
styles/
├── main.scss
├── abstracts/
│   ├── _variables.scss
│   ├── _functions.scss
│   └── _mixins.scss
├── base/
│   ├── _reset.scss
│   └── _typography.scss
├── components/
│   ├── _buttons.scss
│   ├── _cards.scss
│   └── _forms.scss
├── layout/
│   ├── _header.scss
│   ├── _footer.scss
│   └── _grid.scss
└── pages/
    ├── _home.scss
    └── _about.scss
```

## Common Patterns

### Responsive Mixin

```scss
@mixin respond-to($breakpoint) {
  @if $breakpoint == 'mobile' {
    @media (max-width: 767px) { @content; }
  } @else if $breakpoint == 'tablet' {
    @media (min-width: 768px) and (max-width: 1023px) { @content; }
  } @else if $breakpoint == 'desktop' {
    @media (min-width: 1024px) { @content; }
  }
}
```

### BEM with Sass

```scss
.block {
  &__element {
    // element styles
  }
  
  &--modifier {
    // modifier styles
  }
}
```

### Theme System

```scss
$themes: (
  light: (
    bg: #fff,
    text: #333,
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
}
```
