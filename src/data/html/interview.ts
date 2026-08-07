import { ResourceSection } from '@/components/ResourceGuide';

export const interviewData: ResourceSection[] = [
  {
    title: 'Common Gotchas',
    icon: '🎯',
    difficulty: 'Advanced',
    category: 'Interview',
    interviewFrequency: 5,
    quickSummary: `
      <ul>
        <li>HTML has many <strong>counterintuitive behaviors</strong> that make for great interview questions</li>
        <li><code>&lt;script&gt;</code> placement affects page load — blocking vs async vs defer</li>
        <li><code>&lt;img&gt;</code> without <code>alt</code> is accessible but <code>alt=""</code> (decorative) is intentional</li>
        <li><code>&lt;a&gt;</code> without <code>href</code> is not a link — it's a placeholder with no semantics</li>
        <li><code>&lt;button&gt;</code> inside <code>&lt;a&gt;</code> is invalid HTML and causes unpredictable behavior</li>
      </ul>
    `,
    content: `
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Common HTML gotchas</h4>
      <table style="width: 100%; border-collapse: collapse; font-size: 0.8rem;">
        <tr style="border-bottom: 1px solid var(--border);">
          <th style="text-align: left; padding: 0.5rem;">Gotcha</th>
          <th style="text-align: left; padding: 0.5rem;">Why it's tricky</th>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>script</code> placement</td>
          <td style="padding: 0.5rem;">Blocks rendering unless async/defer</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>alt=""</code> vs no alt</td>
          <td style="padding: 0.5rem;">Empty alt = decorative, missing alt = error</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>&lt;a&gt;</code> without href</td>
          <td style="padding: 0.5rem;">Not a link, no keyboard navigation</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>&lt;button&gt;</code> in <code>&lt;a&gt;</code></td>
          <td style="padding: 0.5rem;">Invalid HTML, unpredictable behavior</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>&lt;div&gt;</code> with onclick</td>
          <td style="padding: 0.5rem;">Not keyboard accessible, use button</td>
        </tr>
      </table>
    `,
    interviewQuestion: {
      question: "What happens if you put a button inside an anchor tag?",
      answer: "It's invalid HTML and browsers handle it inconsistently. Some browsers may treat the button as the link target, others may ignore the button entirely. Never nest interactive elements — use a button with an onclick handler or style a link to look like a button instead."
    },
    keyTakeaways: [
      "Never nest interactive elements (button in a, a in button)",
      "<code>&lt;a&gt;</code> without <code>href</code> is not a link — use button instead",
      "Empty <code>alt=\"\"</code> means decorative, missing alt is an error",
      "<code>&lt;script&gt;</code> blocks rendering unless async/defer",
      "Use <code>&lt;button&gt;</code> for actions, not divs with onclick"
    ],
  },
  {
    title: 'References',
    icon: '📖',
    links: [
      { title: 'MDN HTML Common Pitfalls', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_HTML_elements_appropriately', description: 'Common HTML mistakes' },
    ],
  },
];
