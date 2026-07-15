# TailwindCSS Reference Guide

## What is TailwindCSS?

TailwindCSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without leaving your HTML. It focuses on rapid UI development with a highly customizable design system.

## Installation

```bash
# Using npm
npm install -D tailwindcss
npx tailwindcss init

# Using yarn
yarn add -D tailwindcss
yarn tailwindcss init

# Using PostCSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## Configuration

```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#667eea',
        secondary: '#764ba2',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: []
}
```

## Core Concepts

### Utility-First Approach

Instead of writing custom CSS, use pre-defined utility classes:

```html
<!-- Traditional CSS -->
<div class="card">
  <h2 class="title">Title</h2>
</div>

<style>
  .card {
    background: white;
    border-radius: 8px;
    padding: 20px;
  }
  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }
</style>

<!-- TailwindCSS -->
<div class="bg-white rounded-lg p-5">
  <h2 class="text-xl font-bold">Title</h2>
</div>
```

### Responsive Design

Use responsive prefixes for different breakpoints:

```html
<div class="p-4 md:p-6 lg:p-8">
  Responsive padding
</div>
```

Default breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## Layout Utilities

### Display

```html
<div class="block">Block element</div>
<div class="inline">Inline element</div>
<div class="inline-block">Inline-block element</div>
<div class="flex">Flex container</div>
<div class="grid">Grid container</div>
<div class="hidden">Hidden element</div>
```

### Flexbox

```html
<div class="flex">Flex container</div>
<div class="flex-row">Row direction</div>
<div class="flex-col">Column direction</div>
<div class="justify-center">Justify center</div>
<div class="justify-between">Space between</div>
<div class="items-center">Align items center</div>
<div class="flex-wrap">Wrap flex items</div>
<div class="flex-1">Flex grow</div>
<div class="flex-none">No flex grow</div>
```

### Grid

```html
<div class="grid grid-cols-3">3 columns</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">Responsive grid</div>
<div class="grid gap-4">Grid gap</div>
<div class="col-span-2">Span 2 columns</div>
<div class="row-span-2">Span 2 rows</div>
```

## Spacing Utilities

### Padding

```html
<div class="p-0">No padding</div>
<div class="p-4">Padding 1rem (16px)</div>
<div class="px-4">Horizontal padding</div>
<div class="py-4">Vertical padding</div>
<div class="pt-4">Top padding</div>
<div class="pr-4">Right padding</div>
<div class="pb-4">Bottom padding</div>
<div class="pl-4">Left padding</div>
```

### Margin

```html
<div class="m-0">No margin</div>
<div class="m-4">Margin 1rem (16px)</div>
<div class="mx-auto">Horizontal auto margin</div>
<div class="my-4">Vertical margin</div>
<div class="mt-4">Top margin</div>
<div class="mr-4">Right margin</div>
<div class="mb-4">Bottom margin</div>
<div class="ml-4">Left margin</div>
```

### Gap

```html
<div class="gap-2">Gap 0.5rem (8px)</div>
<div class="gap-4">Gap 1rem (16px)</div>
<div class="gap-x-4">Horizontal gap</div>
<div class="gap-y-4">Vertical gap</div>
```

## Typography Utilities

### Font Size

```html
<div class="text-xs">Extra small (0.75rem)</div>
<div class="text-sm">Small (0.875rem)</div>
<div class="text-base">Base (1rem)</div>
<div class="text-lg">Large (1.125rem)</div>
<div class="text-xl">Extra large (1.25rem)</div>
<div class="text-2xl">2X large (1.5rem)</div>
<div class="text-3xl">3X large (1.875rem)</div>
```

### Font Weight

```html
<div class="font-light">Light (300)</div>
<div class="font-normal">Normal (400)</div>
<div class="font-medium">Medium (500)</div>
<div class="font-semibold">Semi-bold (600)</div>
<div class="font-bold">Bold (700)</div>
```

### Text Alignment

```html
<div class="text-left">Left aligned</div>
<div class="text-center">Center aligned</div>
<div class="text-right">Right aligned</div>
<div class="text-justify">Justified</div>
```

### Text Color

```html
<div class="text-gray-900">Dark gray text</div>
<div class="text-blue-500">Blue text</div>
<div class="text-white">White text</div>
<div class="text-transparent">Transparent text</div>
```

## Color Utilities

### Background Colors

```html
<div class="bg-white">White background</div>
<div class="bg-gray-100">Light gray background</div>
<div class="bg-blue-500">Blue background</div>
<div class="bg-gradient-to-r from-purple-500 to-pink-500">Gradient</div>
```

### Text Colors

```html
<div class="text-gray-900">Dark text</div>
<div class="text-blue-500">Blue text</div>
<div class="text-white">White text</div>
```

### Border Colors

```html
<div class="border border-gray-300">Gray border</div>
<div class="border-2 border-blue-500">Blue border</div>
```

## Border Utilities

### Border Radius

```html
<div class="rounded-none">No radius</div>
<div class="rounded-sm">Small radius (0.125rem)</div>
<div class="rounded">Default radius (0.25rem)</div>
<div class="rounded-lg">Large radius (0.5rem)</div>
<div class="rounded-full">Full radius (50%)</div>
```

### Border Width

```html
<div class="border">Default border (1px)</div>
<div class="border-2">2px border</div>
<div class="border-4">4px border</div>
<div class="border-t">Top border</div>
<div class="border-r">Right border</div>
<div class="border-b">Bottom border</div>
<div class="border-l">Left border</div>
```

## Sizing Utilities

### Width

```html
<div class="w-full">Full width</div>
<div class="w-1/2">Half width</div>
<div class="w-64">Fixed width (16rem)</div>
<div class="w-auto">Auto width</div>
<div class="w-screen">Viewport width</div>
```

### Height

```html
<div class="h-full">Full height</div>
<div class="h-64">Fixed height (16rem)</div>
<div class="h-auto">Auto height</div>
<div class="h-screen">Viewport height</div>
```

### Max Width/Height

```html
<div class="max-w-md">Max width (28rem)</div>
<div class="max-w-lg">Max width (32rem)</div>
<div class="max-w-xl">Max width (36rem)</div>
<div class="max-h-screen">Max viewport height</div>
```

## Position Utilities

```html
<div class="static">Static positioning</div>
<div class="relative">Relative positioning</div>
<div class="absolute">Absolute positioning</div>
<div class="fixed">Fixed positioning</div>
<div class="sticky">Sticky positioning</div>
<div class="top-0">Top 0</div>
<div class="right-0">Right 0</div>
<div class="bottom-0">Bottom 0</div>
<div class="left-0">Left 0</div>
```

## Flexbox Utilities

```html
<div class="flex">Flex container</div>
<div class="flex-row">Row direction</div>
<div class="flex-row-reverse">Row reverse</div>
<div class="flex-col">Column direction</div>
<div class="flex-col-reverse">Column reverse</div>
<div class="flex-wrap">Wrap</div>
<div class="flex-nowrap">No wrap</div>
<div class="justify-start">Justify start</div>
<div class="justify-center">Justify center</div>
<div class="justify-end">Justify end</div>
<div class="justify-between">Space between</div>
<div class="justify-around">Space around</div>
<div class="items-start">Items start</div>
<div class="items-center">Items center</div>
<div class="items-end">Items end</div>
<div class="items-stretch">Items stretch</div>
```

## Grid Utilities

```html
<div class="grid">Grid container</div>
<div class="grid-cols-1">1 column</div>
<div class="grid-cols-2">2 columns</div>
<div class="grid-cols-3">3 columns</div>
<div class="grid-cols-4">4 columns</div>
<div class="grid-cols-6">6 columns</div>
<div class="grid-cols-12">12 columns</div>
<div class="grid-rows-1">1 row</div>
<div class="grid-rows-2">2 rows</div>
<div class="col-span-1">Span 1 column</div>
<div class="col-span-2">Span 2 columns</div>
<div class="row-span-1">Span 1 row</div>
<div class="row-span-2">Span 2 rows</div>
```

## Shadow Utilities

```html
<div class="shadow-none">No shadow</div>
<div class="shadow-sm">Small shadow</div>
<div class="shadow">Default shadow</div>
<div class="shadow-md">Medium shadow</div>
<div class="shadow-lg">Large shadow</div>
<div class="shadow-xl">Extra large shadow</div>
<div class="shadow-2xl">2X large shadow</div>
```

## Opacity Utilities

```html
<div class="opacity-0">Fully transparent</div>
<div class="opacity-25">25% opacity</div>
<div class="opacity-50">50% opacity</div>
<div class="opacity-75">75% opacity</div>
<div class="opacity-100">Fully opaque</div>
```

## Transition Utilities

```html
<div class="transition">Default transition</div>
<div class="transition-all">All properties</div>
<div class="transition-colors">Color properties</div>
<div class="transition-opacity">Opacity property</div>
<div class="duration-75">75ms duration</div>
<div class="duration-150">150ms duration</div>
<div class="duration-300">300ms duration</div>
<div class="duration-500">500ms duration</div>
<div class="ease-in">Ease in timing</div>
<div class="ease-out">Ease out timing</div>
<div class="ease-in-out">Ease in out timing</div>
```

## Transform Utilities

```html
<div class="scale-0">Scale 0</div>
<div class="scale-50">Scale 50%</div>
<div class="scale-100">Scale 100%</div>
<div class="scale-150">Scale 150%</div>
<div class="rotate-0">No rotation</div>
<div class="rotate-45">Rotate 45deg</div>
<div class="rotate-90">Rotate 90deg</div>
<div class="translate-x-0">No translate</div>
<div class="translate-x-4">Translate right</div>
<div class="-translate-x-4">Translate left</div>
```

## Interactive States

### Hover

```html
<div class="hover:bg-blue-500">Hover background</div>
<div class="hover:text-blue-500">Hover text color</div>
<div class="hover:scale-105">Hover scale</div>
<div class="hover:shadow-lg">Hover shadow</div>
```

### Focus

```html
<input class="focus:outline-none focus:ring-2 focus:ring-blue-500">
```

### Active

```html
<button class="active:bg-blue-700">Active background</button>
```

## Custom Configuration

### Extending Theme

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          900: '#0c4a6e',
        }
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      fontSize: {
        'xxs': '0.65rem',
      }
    }
  }
}
```

### Custom Utilities

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      }
    }
  }
}
```

## Plugins

### Official Plugins

```bash
# Forms plugin
npm install -D @tailwindcss/forms

# Typography plugin
npm install -D @tailwindcss/typography

# Aspect ratio plugin
npm install -D @tailwindcss/aspect-ratio

# Container queries
npm install -D @tailwindcss/container-queries
```

```javascript
// tailwind.config.js
module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ]
}
```

## Best Practices

1. **Extract components**: Use @apply for repeated patterns
2. **Responsive-first**: Start with mobile, add responsive prefixes
3. **Customize theme**: Extend the theme instead of overriding
4. **Use JIT mode**: Enable Just-In-Time compilation for better performance
5. **Purge unused styles**: Configure content paths to remove unused CSS
6. **Group related classes**: Use logical grouping in HTML
7. **Use semantic HTML**: Combine utilities with semantic structure

## Common Patterns

### Center Content

```html
<div class="flex items-center justify-center min-h-screen">
  Centered content
</div>
```

### Card Component

```html
<div class="bg-white rounded-lg shadow-md p-6">
  <h3 class="text-xl font-bold mb-2">Card Title</h3>
  <p class="text-gray-600">Card content</p>
</div>
```

### Button Component

```html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button
</button>
```

### Navigation

```html
<nav class="flex items-center justify-between p-4 bg-white shadow">
  <div class="text-xl font-bold">Logo</div>
  <div class="flex space-x-4">
    <a href="#" class="hover:text-blue-500">Home</a>
    <a href="#" class="hover:text-blue-500">About</a>
    <a href="#" class="hover:text-blue-500">Contact</a>
  </div>
</nav>
```

### Grid Layout

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="bg-white p-4 rounded">Item 1</div>
  <div class="bg-white p-4 rounded">Item 2</div>
  <div class="bg-white p-4 rounded">Item 3</div>
</div>
```
