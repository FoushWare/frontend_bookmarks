import { ResourceSection } from '@/components/ResourceGuide';

export const tablesData: ResourceSection[] = [
  {
    title: 'Table Structure & Accessible Tables',
    icon: '📊',
    difficulty: 'Intermediate',
    category: 'Tables',
    interviewFrequency: 3,
    quickSummary: `
      <ul>
        <li>Tables should be reserved for <strong>genuinely tabular data</strong> (rows/columns of related data points) — never for page layout. This was common in the 1990s/2000s and is now a well-known anti-pattern.</li>
        <li>Full semantic structure: <code>&lt;caption&gt;</code>, <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;tfoot&gt;</code>, with <code>&lt;th scope="col"&gt;</code> / <code>&lt;th scope="row"&gt;</code> — each piece has a real accessibility purpose.</li>
        <li><code>scope</code> is the single most important accessibility attribute here — it tells screen readers <strong>which header applies to which cell</strong>, especially critical for complex tables.</li>
        <li><code>&lt;caption&gt;</code> is the table's accessible name/title — often forgotten, genuinely useful.</li>
      </ul>
    `,
    content: `
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Full Accessible Table Structure</h4>
      <img src="/images/accessible-table-anatomy.svg" alt="Accessible Table Anatomy" style="width: 100%; max-width: 600px; border-radius: 0.5rem; margin-bottom: 1rem;" />
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Full semantic table example</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;table&gt;
  &lt;caption&gt;Q3 2026 sales by region&lt;/caption&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th scope="col"&gt;Region&lt;/th&gt;
      &lt;th scope="col"&gt;Revenue&lt;/th&gt;
      &lt;th scope="col"&gt;Growth&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;th scope="row"&gt;West&lt;/th&gt;
      &lt;td&gt;$1.2M&lt;/td&gt;
      &lt;td&gt;+12%&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;th scope="row"&gt;East&lt;/th&gt;
      &lt;td&gt;$980K&lt;/td&gt;
      &lt;td&gt;+8%&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
  &lt;tfoot&gt;
    &lt;tr&gt;
      &lt;th scope="row"&gt;Total&lt;/th&gt;
      &lt;td&gt;$2.18M&lt;/td&gt;
      &lt;td&gt;+10%&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tfoot&gt;
&lt;/table&gt;
      </pre>
      <table style="width: 100%; border-collapse: collapse; font-size: 0.8rem; margin-bottom: 1rem;">
        <tr style="border-bottom: 1px solid var(--border);">
          <th style="text-align: left; padding: 0.5rem;">Element</th>
          <th style="text-align: left; padding: 0.5rem;">Purpose</th>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>&lt;caption&gt;</code></td>
          <td style="padding: 0.5rem;">Table's title/accessible name — announced by screen readers before reading the table</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>&lt;thead&gt;</code></td>
          <td style="padding: 0.5rem;">Column headers, semantically separated from body data</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>&lt;tbody&gt;</code></td>
          <td style="padding: 0.5rem;">The actual data rows</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>&lt;tfoot&gt;</code></td>
          <td style="padding: 0.5rem;">Summary rows (totals, averages) — semantically distinct from regular data</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>&lt;th scope="col"&gt;</code></td>
          <td style="padding: 0.5rem;">Marks a cell as a column header</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>&lt;th scope="row"&gt;</code></td>
          <td style="padding: 0.5rem;">Marks a cell as a row header (can appear inside tbody)</td>
        </tr>
      </table>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Why <code>scope</code> matters</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;!-- Without scope, screen reader hears just "$1.2M" --&gt;
&lt;td&gt;$1.2M&lt;/td&gt;

&lt;!-- With row header + scope, they hear "West, Revenue, $1.2M" --&gt;
&lt;th scope="row"&gt;West&lt;/th&gt;
&lt;td&gt;$1.2M&lt;/td&gt;
      </pre>
      <p style="margin-bottom: 0.5rem;">A sighted user visually scans across a row and up a column simultaneously — a screen reader user navigating cell-by-cell has no equivalent spatial context <strong>unless</strong> <code>scope</code> explicitly provides it.</p>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">The anti-pattern: tables for layout</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;!-- ❌ Ancient anti-pattern --&gt;
&lt;table&gt;
  &lt;tr&gt;
    &lt;td&gt;&lt;nav&gt;...&lt;/nav&gt;&lt;/td&gt;
    &lt;td&gt;&lt;main&gt;...&lt;/main&gt;&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
      </pre>
      <p style="margin-bottom: 0.5rem;"><strong>Why this is broken:</strong> Screen readers announce table semantics for every cell — "table, row 1 of 1, column 1 of 2" — which is completely meaningless noise when the table exists purely for visual positioning. CSS Grid/Flexbox handle layout without those false semantics.</p>
    `,
    interviewQuestion: {
      question: "Why is scope=\"col\"/scope=\"row\" important on table headers?",
      answer: "It explicitly tells screen readers which header(s) apply to each data cell — without it, a screen reader user navigating cell-by-cell loses the row/column context that a sighted user gets for free by visually scanning across and up."
    },
    keyTakeaways: [
      "<code>&lt;caption&gt;</code> = table's accessible title, announced before content — easy to forget, genuinely useful",
      "<code>scope=\"col\"</code>/<code>scope=\"row\"</code> on <code>&lt;th&gt;</code> is the key mechanism giving screen readers row/column context per cell",
      "<code>&lt;th&gt;</code> can appear inside <code>&lt;tbody&gt;</code> as a row header, not just inside <code>&lt;thead&gt;</code>",
      "Never use <code>&lt;table&gt;</code> for page layout — CSS Grid/Flexbox is correct, tables create real accessibility noise",
      "Responsive tables are a genuinely hard problem — horizontal scroll wrapper is the simplest baseline solution"
    ],
  },
  {
    title: 'References',
    icon: '📖',
    links: [
      { title: 'MDN Tables', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table', description: 'Table element reference' },
    ],
  },
];
