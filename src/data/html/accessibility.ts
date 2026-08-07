import { ResourceSection } from '@/components/ResourceGuide';

export const accessibilityData: ResourceSection[] = [
  {
    title: 'ARIA Roles',
    icon: '♿',
    difficulty: 'Intermediate',
    category: 'Accessibility',
    interviewFrequency: 4,
    quickSummary: `
      <ul>
        <li>ARIA (Accessible Rich Internet Applications) roles add semantic meaning when HTML elements aren't enough</li>
        <li><strong>Landmark roles:</strong> <code>role="banner"</code>, <code>role="navigation"</code>, <code>role="main"</code>, <code>role="complementary"</code>, <code>role="contentinfo"</code></li>
        <li><strong>Widget roles:</strong> <code>role="button"</code>, <code>role="dialog"</code>, <code>role="tablist"</code>, <code>role="menu"</code></li>
        <li><strong>Golden rule:</strong> Use native HTML elements first — ARIA is a fallback when semantic HTML doesn't exist</li>
      </ul>
    `,
    content: `
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">ARIA Roles Diagram</h4>
      <img src="/images/aria-roles.svg" alt="ARIA Roles" style="width: 100%; max-width: 600px; border-radius: 0.5rem; margin-bottom: 1rem;" />
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Common landmark roles</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;header role="banner"&gt;...&lt;/header&gt;
&lt;nav role="navigation"&gt;...&lt;/nav&gt;
&lt;main role="main"&gt;...&lt;/main&gt;
&lt;aside role="complementary"&gt;...&lt;/aside&gt;
&lt;footer role="contentinfo"&gt;...&lt;/footer&gt;
      </pre>
      <p style="margin-bottom: 0.5rem;"><strong>Note:</strong> HTML5 semantic elements like <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code> already have implicit ARIA roles. You rarely need to add <code>role</code> attributes to them unless you're fixing legacy code.</p>
    `,
    interviewQuestion: {
      question: "When should you use ARIA roles vs native HTML elements?",
      answer: "Always use native HTML elements first — they have built-in accessibility and ARIA roles. Only use ARIA roles when you're working with non-semantic elements (like divs) that need accessibility meaning, or when HTML doesn't have an element for what you're building (like a complex widget)."
    },
    keyTakeaways: [
      "Native HTML elements have implicit ARIA roles — use them first",
      "ARIA roles are a fallback when semantic HTML doesn't exist",
      "Landmark roles help screen readers navigate page structure",
      "Widget roles describe interactive components (tabs, menus, dialogs)",
      "The 'no ARIA is better than bad ARIA' principle"
    ],
  },
  {
    title: 'ARIA States & Properties',
    icon: '⚙️',
    difficulty: 'Intermediate',
    category: 'Accessibility',
    interviewFrequency: 3,
    quickSummary: `
      <ul>
        <li>ARIA states and properties provide additional information about element state and behavior</li>
        <li><strong>States:</strong> <code>aria-expanded</code>, <code>aria-checked</code>, <code>aria-disabled</code>, <code>aria-hidden</code></li>
        <li><strong>Properties:</strong> <code>aria-label</code>, <code>aria-describedby</code>, <code>aria-live</code>, <code>aria-owns</code></li>
        <li>States change dynamically (user interactions), properties are more static</li>
      </ul>
    `,
    content: `
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">ARIA States & Properties Diagram</h4>
      <img src="/images/aria-states.svg" alt="ARIA States and Properties" style="width: 100%; max-width: 600px; border-radius: 0.5rem; margin-bottom: 1rem;" />
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Common ARIA states</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;button aria-expanded="false"&gt;Toggle menu&lt;/button&gt;
&lt;input type="checkbox" aria-checked="true"&gt;
&lt;div aria-hidden="true"&gt;Hidden content&lt;/div&gt;
&lt;button aria-disabled="true"&gt;Disabled button&lt;/button&gt;
      </pre>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Common ARIA properties</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;button aria-label="Close dialog"&gt;✕&lt;/button&gt;
&lt;input aria-describedby="help-text"&gt;
&lt;span id="help-text"&gt;Enter your email address&lt;/span&gt;

&lt;div aria-live="polite"&gt;Status updates go here&lt;/div&gt;
      </pre>
    `,
    interviewQuestion: {
      question: "What's the difference between aria-hidden and display: none?",
      answer: "aria-hidden removes content from the accessibility tree (screen readers won't see it) but the element remains in the DOM and can still be visible. display: none removes the element from both the visual layout and the accessibility tree. Use aria-hidden when you want content visible but not announced to screen readers."
    },
    keyTakeaways: [
      "States change dynamically (expanded, checked, disabled)",
      "Properties are more static (label, describedby, live)",
      "<code>aria-label</code> provides accessible names for icon-only buttons",
      "<code>aria-live</code> announces dynamic content changes (polite/assertive)",
      "<code>aria-hidden</code> removes content from accessibility tree only"
    ],
  },
  {
    title: 'Accessible Names',
    icon: '🏷️',
    difficulty: 'Beginner',
    category: 'Accessibility',
    interviewFrequency: 4,
    quickSummary: `
      <ul>
        <li>Every interactive element needs an <strong>accessible name</strong> — what screen readers announce</li>
        <li>For form inputs: use <code>&lt;label&gt;</code> with <code>for</code> attribute, or wrap the input</li>
        <li>For icon-only buttons: use <code>aria-label</code> or <code>aria-labelledby</code></li>
        <li>For images: use <code>alt</code> text (empty <code>alt=""</code> for decorative images)</li>
        <li>Accessible names are computed from: content, aria-label, aria-labelledby, title (in that order)</li>
      </ul>
    `,
    content: `
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Accessible Names Diagram</h4>
      <img src="/images/accessible-names.svg" alt="Accessible Names" style="width: 100%; max-width: 600px; border-radius: 0.5rem; margin-bottom: 1rem;" />
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Labeling form inputs</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;!-- Explicit labeling (preferred) --&gt;
&lt;label for="email"&gt;Email address&lt;/label&gt;
&lt;input id="email" type="email"&gt;

&lt;!-- Implicit labeling --&gt;
&lt;label&gt;
  Email address
  &lt;input type="email"&gt;
&lt;/label&gt;
      </pre>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Labeling icon-only buttons</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;button aria-label="Close dialog"&gt;✕&lt;/button&gt;
&lt;button aria-label="Search"&gt;🔍&lt;/button&gt;
&lt;button aria-label="Settings"&gt;⚙️&lt;/button&gt;
      </pre>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Accessible name computation</h4>
      <p style="margin-bottom: 0.5rem;">The browser computes the accessible name in this priority order:</p>
      <ol style="margin-bottom: 0.5rem; padding-left: 1.5rem;">
        <li><code>aria-label</code> attribute</li>
        <li><code>aria-labelledby</code> (references another element's text)</li>
        <li>Element content (text inside the element)</li>
        <li><code>title</code> attribute (fallback, not reliable)</li>
      </ol>
    `,
    interviewQuestion: {
      question: "How do you provide an accessible name for an icon-only button?",
      answer: "Use aria-label to provide a descriptive name: <button aria-label=\"Close dialog\">✕</button>. Screen readers will announce 'Close dialog button' instead of just 'X button'."
    },
    keyTakeaways: [
      "Every interactive element needs an accessible name",
      "Use <code>&lt;label&gt;</code> with <code>for</code> attribute for form inputs",
      "Use <code>aria-label</code> for icon-only buttons and controls",
      "Use <code>alt</code> text for images (empty for decorative)",
      "Accessible name computation: aria-label → aria-labelledby → content → title"
    ],
  },
  {
    title: 'References',
    icon: '📖',
    links: [
      { title: 'MDN ARIA Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA', description: 'Complete ARIA reference' },
      { title: 'WAI-ARIA Authoring Practices', url: 'https://www.w3.org/WAI/ARIA/apg/', description: 'Official ARIA design patterns' },
    ],
  },
];
