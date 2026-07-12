<!-- path: /docs/css-grid/Project.md -->

# CSS Grid — Projects

Progressively harder, each buildable in isolation.

## Project 1 — Dashboard Shell (Beginner)
**Objectives**: Build a fixed header/sidebar/main/footer page shell.
**Required skills**: `display: grid`, `grid-template-columns/rows`, `fr`, `gap`.
**Bonus challenges**: Make the sidebar collapsible without breaking the grid structure.
**Real-world improvements**: Add a sticky header using `position: sticky` layered on the grid.
**Expected folder structure**:
```
/project-1-dashboard-shell
  index.html
  styles.css
```

## Project 2 — Responsive Card Gallery (Intermediate)
**Objectives**: Build a card gallery that reflows from 1 to N columns with zero media queries.
**Required skills**: `repeat(auto-fit, minmax())`, `gap`, alignment properties.
**Bonus challenges**: Add one "featured" card spanning 2x2 using `grid-template-areas`.
**Real-world improvements**: Add `clamp()` for fluid minimum card width (Advanced concept,
optional preview).
**Expected folder structure**:
```
/project-2-card-gallery
  index.html
  styles.css
  /assets
    /images
```

## Project 3 — Bilingual Product Grid (Advanced)
**Objectives**: Build a product-card row (image, title, price, button) that aligns internals
across cards using `subgrid`, fully RTL-safe for EN/AR.
**Required skills**: `subgrid`, logical properties, `direction: rtl` testing.
**Bonus challenges**: Verify with browser DevTools that no `left`/`right` physical properties
leak into the RTL rendering.
**Real-world improvements**: Wrap it as a reusable component (directly transferable to your
MUI/styled-components stack).
**Expected folder structure**:
```
/project-3-bilingual-product-grid
  index.html
  styles.css
  styles.rtl-test.html
```

## Project 4 — Dashboard with Performance Constraints (Expert)
**Objectives**: Build a 12-widget dashboard where updating one widget's content must not cause
layout jank in unrelated widgets.
**Required skills**: `contain: layout`, profiling with browser DevTools Performance panel.
**Bonus challenges**: Add a widget-reorder interaction animated via `transform`, not grid
placement changes.
**Real-world improvements**: Document a before/after performance trace showing the effect of
`contain: layout`.
**Expected folder structure**:
```
/project-4-dashboard-performance
  index.html
  styles.css
  /scripts
    widget-updates.js
  PERFORMANCE-NOTES.md
```
