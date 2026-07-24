<!-- path: /docs/css-grid/Deep-Dive.md -->

# CSS Grid — Deep Dive (Advanced / Expert)

## Advanced Stage

### Responsive patterns without media queries
`repeat(auto-fit, minmax(min, 1fr))` (Intermediate) is the base pattern. Combine with
`clamp()` for fluid track minimums that scale with viewport instead of jumping at breakpoints:

```css
grid-template-columns: repeat(auto-fit, minmax(clamp(150px, 20vw, 250px), 1fr));
```

This removes most manual breakpoint math for card/gallery layouts — the grid recalculates
column count continuously as the viewport resizes, rather than snapping at fixed widths.

### Nested grids vs. `subgrid`
A nested grid (independent `display: grid` inside a grid item) is appropriate when the inner
content has genuinely independent structure. `subgrid` is appropriate when the inner content
should visually align to the *outer* grid's tracks — e.g. product cards in a row where titles,
prices, and buttons must line up horizontally across cards despite each card having different
content length. Defaulting to nested grids here produces the classic "misaligned card row" bug.

### RTL & logical properties in Grid
Your bilingual EN/AR work benefits directly here:
- Prefer `inline-start`/`inline-end` over `left`/`right` in any Grid-adjacent spacing
  (`margin-inline-start`, `inset-inline-start`) so it flips automatically with `direction: rtl`.
- `justify-items`/`justify-self` using `start`/`end` (not `left`/`right`) already flip correctly
  — this is one of Grid's built-in RTL wins over older layout methods.
- Named grid areas do **not** need mirroring in the template string itself; only your visual
  expectation of "left" vs. "right" needs to shift when reading `direction: rtl` output.
- Line-numbered placement (`grid-column: 1 / 3`) is physical, not logical — line 1 is always the
  first line in source order regardless of direction. For RTL-safe layouts prefer named areas or
  named lines over raw numbers when the layout must mirror.

### Grid vs. Flexbox decision-making
| Question | Lean toward |
|---|---|
| Does the layout have structure in two dimensions at once? | Grid |
| Is content driving the size, one dimension at a time (e.g. a toolbar)? | Flexbox |
| Do items need to wrap into a new "row" that's independently sized? | Grid |
| Is this a single row/column of variably-sized items? | Flexbox |
| Do you need precise 2D placement/overlap? | Grid |

In practice, most real UIs use both — Grid for the page/section skeleton, Flexbox for internal
alignment within a grid cell (e.g. a card's own header row).

---

## Expert Stage

### Performance
- Grid layout recalculation is triggered by changes to track-defining properties
  (`grid-template-columns/rows`, and indirectly by content changes in `auto`-sized tracks).
  Animating these directly is expensive — animate `transform`/`opacity` on grid *items* instead
  of animating the grid structure itself.
- `contain: layout` on a grid container can scope layout recalculation to that subtree, useful
  for large dashboards where unrelated sections shouldn't trigger cross-recalculation.
- Large grids (100s of implicit rows/columns, e.g. a spreadsheet-like UI) benefit from
  virtualization (rendering only visible rows) rather than relying on Grid alone — Grid doesn't
  virtualize for you.

### Accessibility & reading order
Grid's visual placement is independent of DOM order by design — this is powerful and risky.
Screen readers and keyboard tab order follow **DOM order**, not visual grid position. If visual
order (via placement or `grid-auto-flow: dense`) diverges significantly from DOM order, keyboard
and screen-reader users experience a different — and confusing — sequence than sighted mouse
users. The newer `reading-flow`/`reading-order` properties address this directly but have
limited browser support as of mid-2026 — verify current support before depending on them, and in
the meantime keep DOM order matching intended reading order rather than relying on visual
reordering alone.

### Grid + animation
Animating grid item position (via changing `grid-column`/`grid-row`) is not smoothly
interpolated by the browser the way `transform` is — items jump rather than animate. For
animated reordering, animate `transform: translate()` on items instead, or use the FLIP
technique (First-Last-Invert-Play) with a JS animation library layered on top of static Grid
placement.

### Masonry-style layouts
True CSS masonry (`grid-template-rows: masonry` in the CSS Grid Level 3 draft) is still limited
in browser support as of mid-2026 — check current status before relying on it in production.
Until it's broadly supported, `grid-auto-flow: dense` (Beginner stage, concept 6) combined with
JS-measured row spans is the common production workaround — but revisit the accessibility note
above, since `dense` reorders visually away from DOM order.

### Senior engineer perspective — production patterns
- **Common mistake at scale**: teams recreate the same responsive grid pattern with slightly
  different breakpoints across the codebase. Centralize it as a design token / reusable
  component (e.g. a `<CardGrid>` wrapper) rather than repeating `repeat(auto-fit, minmax(...))`
  inline everywhere — this is directly applicable to your MUI/styled-components setup.
- **Maintainability**: named `grid-template-areas` layouts are far easier for teammates to
  modify safely than line-numbered ones — prefer areas for any layout more than 2-3 items, even
  if line numbers feel faster to write initially.
- **Architecture decision**: decide early whether a section's structure is "Grid-owned" (skeleton
  defined by the parent) or "Flexbox-owned" (content-driven sizing) — mixing the two
  inconsistently across similar components is a common source of layout bugs during redesigns.
- **Scaling consideration**: deeply nested grids-within-grids-within-flexbox get expensive to
  reason about and to profile. Prefer `subgrid` for alignment needs over deep nesting where
  browser support allows it.
