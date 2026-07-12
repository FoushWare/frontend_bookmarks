<!-- path: /docs/css-grid/Best-Practices.md -->

# CSS Grid — Best Practices

- **Prefer named areas over line numbers** once a layout has more than 2-3 items — it's
  self-documenting and safer for teammates to modify.
- **Use logical properties and logical alignment keywords** (`start`/`end`, `margin-inline-*`)
  instead of `left`/`right` wherever a layout needs to support RTL — this removes the need for
  most direction-specific overrides.
- **Centralize responsive grid patterns** (`repeat(auto-fit, minmax(...))` + `clamp()`) into a
  shared component or design token rather than repeating slightly different versions across the
  codebase.
- **Use `minmax(0, 1fr)` deliberately, not reflexively** — understand it's specifically fixing
  the "content forces track wider than intended" problem, so you know when it's actually needed.
- **Keep DOM order matching intended reading order** — don't rely on `grid-auto-flow: dense` or
  heavy placement overrides to fix a layout that should really be reordered in the markup.
- **Animate `transform`, not grid structure properties** — `grid-template-columns`,
  `grid-template-rows`, and placement changes are not smoothly interpolated.
- **Reach for `subgrid` before deep nested grids** when the goal is alignment across a row of
  independently-sized items, where current browser support allows it.
- **Verify feature support before depending on it in production** — `subgrid` and CSS masonry
  are newer than core Grid; check current engine support rather than assuming.
- **Decide Grid-ownership vs. Flex-ownership per component**, and stay consistent — mixing
  inconsistently across similar components is a common source of layout bugs during redesigns.
- **Use `contain: layout` on independent dashboard sections** at scale, to scope recalculation
  and avoid cross-widget jank.
