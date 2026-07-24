<!-- path: /docs/css-grid/Interview-Questions.md -->

# CSS Grid — Interview Questions

Organized by stage. No answers included — use for self-testing or mock interviews.

## Beginner
- What's the difference between a grid container and a grid item?
- Explain `fr` vs. `%` for column sizing.
- What's the implicit grid, and when does it get created?
- How do grid line numbers relate to track count (why does a 3-column grid have 4 lines)?

## Intermediate
- Why prefer `grid-template-areas` over line-based placement for page shells?
- What problem does `minmax()` solve that bare `fr` doesn't?
- What's the difference between `auto-fill` and `auto-fit`, and when does it visually matter?
- What's the difference between `align-items` and `align-content`?
- What problem does `subgrid` solve that a regular nested grid doesn't?

## Advanced
- How do you build a fully responsive grid without any media queries? What are the limits of
  that approach?
- How does Grid's alignment system behave differently in RTL vs. LTR, and what should you do
  differently (if anything) in your CSS to support both?
- Give a concrete scenario where you'd choose Flexbox over Grid, and one where the reverse is
  true.

## Expert
- Why is animating `grid-template-columns` directly expensive, and what's the alternative?
- What's the accessibility risk with `grid-auto-flow: dense`, and how would you mitigate it?
- How does `contain: layout` help with performance on a large grid-heavy dashboard?
- Walk through the current state of CSS masonry support and the common production workaround.

## Architecture / Senior-Level
- How would you structure a reusable, design-system-level grid component so teams stop
  reimplementing the same responsive pattern with slightly different breakpoints?
- What's your decision process for "Grid-owned" vs. "Flexbox-owned" structure in a component
  library?
- A teammate's PR uses `grid-column: 1 / 3` for RTL-mirrored layouts and it breaks in Arabic.
  What's the root cause and what would you ask them to change?
