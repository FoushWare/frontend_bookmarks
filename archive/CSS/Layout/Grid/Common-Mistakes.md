<!-- path: /docs/css-grid/Common-Mistakes.md -->

# CSS Grid — Common Mistakes

| Mistake | Why it happens | Fix |
|---|---|---|
| Setting `display: grid` on items instead of the container | Confusing container/item roles | Only the parent needs `display: grid` |
| Thinking `1fr` = fixed % of container | Misreading `fr` as a percentage unit | Remember `fr` divides *leftover* space after fixed tracks/gaps |
| `grid-column: 1 / 2` expecting a 2-track span | Miscounting lines vs. tracks | Lines ≠ tracks; `1 / 2` spans exactly one track |
| Long content overflowing an `fr` column | Bare `fr` has an implicit `auto` minimum | Use `minmax(0, 1fr)` for unpredictable content |
| Inconsistent implicit row heights | `grid-auto-rows` never set, defaults to `auto` | Set `grid-auto-rows` explicitly for predictable galleries |
| Reaching for margin instead of `gap` | Old habit from pre-`gap` CSS | Use `gap`; avoid double-spacing at edges |
| `auto-fill` used when `auto-fit` was intended | The two are easy to confuse by name alone | `auto-fit` collapses empty tracks (stretches existing items); `auto-fill` reserves them |
| `grid-auto-flow: dense` on content-order-sensitive layouts | Optimizing visual density without checking a11y impact | Avoid `dense` where DOM order carries meaning (feeds, forms) |
| Raw line-number placement in RTL layouts | Line numbers are physical, not logical | Prefer named areas/lines for layouts that must mirror |
| Animating `grid-template-columns` directly | Assuming Grid animates like `transform` | Animate `transform`/`opacity` on items instead |
| Deep nested grids-within-flexbox-within-grids | Not considering long-term maintainability | Prefer `subgrid` for alignment; keep ownership (Grid vs Flex) consistent per layer |
| Assuming full support for `subgrid` / CSS masonry without checking | Spec features roll out unevenly across engines | Verify current browser support before depending on either in production |
