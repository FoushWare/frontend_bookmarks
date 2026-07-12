<!-- path: /docs/css-grid/Cheat-Sheet.md -->

# CSS Grid — Cheat Sheet

## Setup
| Property | Purpose |
|---|---|
| `display: grid` | Activate grid on the container |
| `grid-template-columns` / `-rows` | Define explicit tracks |
| `grid-template-areas` | Name regions as an ASCII map |
| `gap` / `row-gap` / `column-gap` | Space between tracks |

## Sizing
| Value | Meaning |
|---|---|
| `fr` | Share of leftover space |
| `minmax(min, max)` | Floor + ceiling for a track |
| `repeat(N, size)` | Shorthand for repeated tracks |
| `repeat(auto-fill, minmax(min, 1fr))` | Reserve empty slots |
| `repeat(auto-fit, minmax(min, 1fr))` | Collapse empty slots, stretch items |
| `clamp(min, preferred, max)` | Fluid sizing without breakpoints |

## Placement
| Property | Purpose |
|---|---|
| `grid-column` / `grid-row` | `start / end` by line number |
| `span N` | Relative placement, N tracks |
| `grid-area` | Assign to a named area |
| `grid-auto-flow: row \| column \| dense` | Auto-placement order |
| `grid-auto-rows` / `-columns` | Size implicit tracks |

## Alignment
| Property | Axis | Applies to |
|---|---|---|
| `justify-items` / `align-items` | inline / block | all items (default) |
| `justify-self` / `align-self` | inline / block | one item (override) |
| `justify-content` / `align-content` | inline / block | track set within container |
| `place-items` / `place-self` | both | shorthand |

## RTL-safety quick rules
- Use `start`/`end` alignment keywords, not `left`/`right`.
- Use `margin-inline-*` / `padding-inline-*`, not `margin-left`/`margin-right`.
- Prefer named areas/lines over raw line numbers for layouts that must mirror.

## Decision shortcuts
- Two dimensions at once → **Grid**. One dimension, content-driven → **Flexbox**.
- Need cards aligned across a row → **subgrid** (support permitting) over deep nesting.
- Animating position → animate `transform`, never grid structure properties directly.
