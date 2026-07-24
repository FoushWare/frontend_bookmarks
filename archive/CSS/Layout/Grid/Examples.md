<!-- path: /docs/css-grid/Examples.md -->

# CSS Grid — Examples

Minimal, runnable examples. Each isolates one concept before combining.

## Beginner

```css
/* Basic grid with fixed + flexible columns */
.example-1 {
  display: grid;
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: 80px auto;
  gap: 16px;
}
```

```css
/* Implicit rows with predictable sizing */
.example-2 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
  gap: 8px;
}
```

```css
/* Line-based placement, spanning */
.example-3 .featured {
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
}
```

## Intermediate

```css
/* Named areas page shell */
.example-4 {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  min-height: 100vh;
}
.example-4 > header  { grid-area: header; }
.example-4 > aside   { grid-area: sidebar; }
.example-4 > main    { grid-area: main; }
.example-4 > footer  { grid-area: footer; }
```

```css
/* Responsive card grid, no media queries */
.example-5 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}
```

```css
/* Alignment: center a single grid within a tall container */
.example-6 {
  display: grid;
  align-content: center;
  justify-items: center;
  min-height: 100vh;
}
```

## Advanced

```css
/* Fluid responsive minimum with clamp() */
.example-7 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(clamp(150px, 20vw, 250px), 1fr));
  gap: 16px;
}
```

```css
/* Subgrid: align card internals to outer row tracks */
.example-8 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.example-8 .card {
  display: grid;
  grid-row: span 3;
  grid-template-rows: subgrid;
}
```

```css
/* RTL-safe spacing with logical properties */
.example-9 .card {
  margin-inline-start: 16px;
  padding-inline: 12px;
}
[dir="rtl"] .example-9 {
  /* no overrides needed — logical properties flip automatically */
}
```

## Expert

```css
/* Scoping layout recalculation on a large dashboard */
.example-10 .dashboard-section {
  contain: layout;
}
```

```css
/* Animating grid item position via transform, not grid-column */
.example-11 .item {
  transition: transform 200ms ease;
}
/* JS toggles a translate() transform rather than changing grid-column directly */
```
