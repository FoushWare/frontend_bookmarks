<!-- path: /docs/css-grid/Exercises.md -->

# CSS Grid — Exercises

No answers here by design — ask for `Solutions.md` when you want to check your work.

## Quizzes (Beginner)
1. What's the difference between `1fr` and `100%` as a column value?
2. A grid has `grid-template-columns: repeat(3, 1fr)` and 7 children with no `grid-template-rows`
   set. How many rows exist, and how are they sized?
3. Write the `grid-column` value to span the last 3 columns of a 5-column grid without counting
   from the left.

## Quizzes (Intermediate)
4. When would `auto-fill` produce a visually different result than `auto-fit`, given the same
   number of items and container width?
5. What's the difference between `align-items` and `align-content`?
6. Why might `grid-template-areas` fail to compile (hard error, not just wrong output)?

## Implementation Challenges
7. **Beginner**: Build a 3-column, 2-row photo gallery where one photo spans 2 columns and 2
   rows, using only line-based placement.
8. **Intermediate**: Rebuild the same gallery using `grid-template-areas` instead — compare
   readability.
9. **Intermediate**: Build a responsive card grid that goes from 1 column on mobile to however
   many fit on desktop, using a single `grid-template-columns` declaration (no media queries).
10. **Advanced**: Build a product-card row where each card's title, price, and button align
    horizontally across all cards regardless of title length differences, using `subgrid`.
11. **Advanced**: Take the layout from #10 and make it fully RTL-safe using only logical
    properties — verify it mirrors correctly with `direction: rtl` on a parent.

## Debugging Exercises
12. Given this CSS, an item unexpectedly overflows its column on long unbroken text:
    ```css
    .grid { display: grid; grid-template-columns: 1fr 1fr 1fr; }
    ```
    Identify the fix and explain why the overflow happens.
13. A gallery uses `grid-auto-flow: dense` and a QA report says screen reader users hear items in
    a different order than sighted users see them. Explain the root cause and propose two
    possible fixes.
14. A responsive card grid using `repeat(auto-fit, minmax(200px, 1fr))` isn't responding to
    container resizing inside a flex parent. What's the likely cause?

## Interview-Style Questions
15. Explain how `fr` unit resolution differs from percentage-based sizing when gaps are present.
16. When would you choose nested independent grids over `subgrid`, even though `subgrid` solves
    alignment more precisely?
17. Walk through how you'd decide, for a new component, whether it should be Grid-owned or
    Flexbox-owned internally.

## Architecture Questions
18. You're building a reusable `<CardGrid>` component for a design system with MUI/
    styled-components. What props would you expose to keep it flexible without letting every
    consumer redefine the responsive breakpoint logic themselves?
19. A large dashboard has 12 independently-updating widget sections, each internally using Grid.
    What would you check first if updating one widget's content is causing visible jank in
    unrelated widgets?
