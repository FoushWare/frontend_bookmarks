import { ResourceSection } from '@/components/ResourceGuide';

export const tablesData: ResourceSection[] = [
  {
    title: 'Table Structure',
    icon: '📊',
    difficulty: 'Beginner',
    category: 'Fundamentals',
    interviewFrequency: 3,
    quickSummary: `
      <ul>
        <li>Tables are for <strong>tabular data</strong>, not layout — use CSS Grid or Flexbox for layout</li>
        <li>Core elements: <code>&lt;table&gt;</code>, <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;th&gt;</code>, <code>&lt;td&gt;</code></li>
        <li><code>&lt;th&gt;</code> for header cells, <code>&lt;td&gt;</code> for data cells</li>
        <li><code>scope</code> attribute on <code>&lt;th&gt;</code> indicates whether header applies to row or column</li>
      </ul>
    `,
    content: `
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Basic table structure</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;table&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th scope="col"&gt;Name&lt;/th&gt;
      &lt;th scope="col"&gt;Age&lt;/th&gt;
      &lt;th scope="col"&gt;City&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;John&lt;/td&gt;
      &lt;td&gt;30&lt;/td&gt;
      &lt;td&gt;New York&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
      </pre>
    `,
    interviewQuestion: {
      question: "Why shouldn't you use tables for page layout?",
      answer: "Tables are semantically for tabular data, not layout. Using tables for layout breaks accessibility (screen readers read tables differently), makes the code harder to maintain, and doesn't work well with responsive design. Use CSS Grid or Flexbox for layout instead."
    },
    keyTakeaways: [
      "Tables are for tabular data only, not layout",
      "Use <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code> for semantic structure",
      "<code>&lt;th&gt;</code> for headers, <code>&lt;td&gt;</code> for data cells",
      "<code>scope</code> attribute improves accessibility",
      "Use CSS Grid/Flexbox for layout, not tables"
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
