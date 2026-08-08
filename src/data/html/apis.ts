import { ResourceSection } from '@/components/ResourceGuide';

export const apisData: ResourceSection[] = [
  {
    title: 'Data Attributes',
    icon: '🏷️',
    difficulty: 'Beginner',
    category: 'HTML5 APIs & Misc',
    interviewFrequency: 3,
    quickSummary: `
      <ul>
        <li><code>data-*</code> attributes let you attach custom data to HTML elements without inventing non-standard attributes or abusing existing ones — fully valid HTML, accessible via JS through the <code>dataset</code> API.</li>
        <li>Naming conversion: <strong>kebab-case in HTML</strong> (<code>data-user-id</code>) automatically maps to <strong>camelCase in JS</strong> (<code>element.dataset.userId</code>) — a small but frequently-tested detail.</li>
        <li>Real, common uses: CSS/JS state hooks (<code>data-state="open"</code>), and <strong>testing selectors</strong> (<code>data-testid="submit-button"</code>) — genuinely standard practice in modern frontend teams.</li>
        <li>Never use <code>data-*</code> for sensitive or large data — it's plain, visible text sitting directly in the DOM/page source.</li>
      </ul>
    `,
    content: `
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">HTML ↔ JS Naming Conversion</h4>
      <img src="/images/data-attributes-mapping.svg" alt="Data Attributes Mapping" style="width: 100%; max-width: 600px; border-radius: 0.5rem; margin-bottom: 1rem;" />
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Basic usage</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;button data-user-id="42" data-action="delete-account"&gt;
  Delete Account
&lt;/button&gt;
      </pre>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
const btn = document.querySelector('button');
console.log(btn.dataset.userId);   // "42"
console.log(btn.dataset.action);   // "delete-account"

btn.dataset.confirmed = 'true';
// Produces: data-confirmed="true" in the DOM
      </pre>
      <p style="margin-bottom: 0.5rem;"><strong>The naming rule:</strong> Any <code>data-</code> attribute written in kebab-case automatically becomes camelCase when accessed via <code>.dataset</code> — <code>data-user-id</code> becomes <code>dataset.userId</code>.</p>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Use case 1: CSS/JS state hooks</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;div class="accordion-panel" data-state="closed"&gt;...&lt;/div&gt;
      </pre>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
.accordion-panel[data-state="closed"] {
  max-height: 0;
  overflow: hidden;
}
.accordion-panel[data-state="open"] {
  max-height: 500px;
}
      </pre>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
panel.dataset.state = panel.dataset.state === 'open' ? 'closed' : 'open';
      </pre>
      <p style="margin-bottom: 0.5rem;"><code>data-state</code> can represent multiple distinct states cleanly (<code>"open"</code>, <code>"closed"</code>, <code>"opening"</code>, <code>"closing"</code>).</p>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Use case 2: Testing hooks — <code>data-testid</code></h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;button data-testid="submit-button" class="btn-primary"&gt;Submit&lt;/button&gt;
      </pre>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
await page.getByTestId('submit-button').click();
      </pre>
      <p style="margin-bottom: 0.5rem;"><code>data-testid</code> provides a stable selector decoupled from styling and content changes — class renames or copy updates won't break tests.</p>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">What NOT to store</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;!-- ❌ Sensitive data, fully visible in page source --&gt;
&lt;div data-api-key="sk_live_abc123xyz"&gt;&lt;/div&gt;

&lt;!-- ❌ Large datasets --&gt;
&lt;div data-full-product-catalog="[huge JSON blob...]"&gt;&lt;/div&gt;
      </pre>
      <p style="margin-bottom: 0.5rem;">Anything in the DOM is visible via "View Source" or dev tools — <code>data-*</code> attributes are never a security boundary.</p>
    `,
    interviewQuestion: {
      question: "How does data-first-name map to JavaScript?",
      answer: "It automatically converts to camelCase — accessible as element.dataset.firstName. Any data-* attribute's kebab-case name maps to a camelCase property on the .dataset object."
    },
    keyTakeaways: [
      "<code>data-*</code> kebab-case in HTML automatically maps to camelCase on <code>.dataset</code> in JS",
      "<code>data-state=\"...\"</code> attributes can represent multiple distinct states more cleanly than toggling several boolean CSS classes",
      "<code>data-testid</code> is standard practice for stable, content/style-independent test selectors",
      "Never store sensitive or large data in <code>data-*</code> attributes — visible DOM text, not a security boundary",
      "<code>getAttribute</code>/<code>setAttribute</code> work identically for any attribute; <code>dataset</code> is just a convenience specific to <code>data-*</code>"
    ],
  },
  {
    title: 'Template & Slot Elements',
    icon: '🧱',
    difficulty: 'Advanced',
    category: 'HTML5 APIs & Misc',
    interviewFrequency: 3,
    quickSummary: `
      <ul>
        <li><code>&lt;template&gt;</code> holds <strong>inert</strong> HTML — parsed by the browser but never rendered, its images never fetched, its scripts never run — until you explicitly clone its content into the live DOM via JavaScript.</li>
        <li><code>&lt;slot&gt;</code> is a <strong>Web Components</strong> concept — it defines placeholder points inside a component's Shadow DOM where content authored by the consumer gets projected in.</li>
        <li>These are somewhat niche in a React/Next.js world, but they're the <strong>platform-native foundation</strong> that frameworks are built on top of — worth understanding conceptually.</li>
        <li>Interview framing: this tests whether you understand what frameworks are abstracting over, not whether you use these APIs directly.</li>
      </ul>
    `,
    content: `
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Template Cloning & Slot Projection</h4>
      <img src="/images/template-slot.svg" alt="Template and Slot Diagram" style="width: 100%; max-width: 600px; border-radius: 0.5rem; margin-bottom: 1rem;" />
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;"><code>&lt;template&gt;</code> — inert content, cloned on demand</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;template id="row-template"&gt;
  &lt;tr&gt;
    &lt;td class="name"&gt;&lt;/td&gt;
    &lt;td class="email"&gt;&lt;/td&gt;
  &lt;/tr&gt;
&lt;/template&gt;

&lt;table id="user-table"&gt;
  &lt;tbody&gt;&lt;/tbody&gt;
&lt;/table&gt;
      </pre>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
const template = document.getElementById('row-template');
const tbody = document.querySelector('#user-table tbody');

function addRow(user) {
  const clone = template.content.cloneNode(true);
  clone.querySelector('.name').textContent = user.name;
  clone.querySelector('.email').textContent = user.email;
  tbody.appendChild(clone);
}
      </pre>
      <p style="margin-bottom: 0.5rem;"><strong>Why "inert" matters:</strong> Content inside <code>&lt;template&gt;</code> isn't part of the active document — images don't download, scripts don't execute, and <code>querySelector</code> won't find elements inside it. This is different from <code>display: none</code>, where resources still load.</p>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;"><code>&lt;slot&gt;</code> — content projection in Web Components</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
class UserCard extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = \`
      &lt;style&gt;
        .card { border: 1px solid #ccc; padding: 16px; }
      &lt;/style&gt;
      &lt;div class="card"&gt;
        &lt;slot name="name"&gt;Default Name&lt;/slot&gt;
        &lt;div class="title"&gt;&lt;slot name="title"&gt;Default Title&lt;/slot&gt;&lt;/div&gt;
      &lt;/div&gt;
    \`;
  }
}
customElements.define('user-card', UserCard);
      </pre>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;user-card&gt;
  &lt;span slot="name"&gt;Jane Smith&lt;/span&gt;
  &lt;span slot="title"&gt;Senior Engineer&lt;/span&gt;
&lt;/user-card&gt;
      </pre>
      <p style="margin-bottom: 0.5rem;"><strong>React parallel:</strong> <code>&lt;slot&gt;</code> is conceptually similar to React's <code>children</code> prop — it's the native platform primitive those framework concepts were modeled after.</p>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Shadow DOM encapsulation</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
this.attachShadow({ mode: 'open' }); // accessible via element.shadowRoot
// 'closed' = element.shadowRoot returns null, fully encapsulated
      </pre>
      <p style="margin-bottom: 0.5rem;">Styles inside Shadow DOM don't leak out, and outside styles don't leak in — genuine style encapsulation native to the platform.</p>
    `,
    interviewQuestion: {
      question: "What makes <template> different from just using display: none on a hidden <div>?",
      answer: "Content inside <template> is genuinely inert — images don't fetch, scripts don't execute, and it's not part of the active document tree at all. A display: none div is still fully live: its resources load and scripts run, it's just not visually rendered."
    },
    keyTakeaways: [
      "<code>&lt;template&gt;</code> content is genuinely inert — no fetching, no script execution, not found by normal DOM queries — until explicitly cloned",
      "<code>&lt;slot&gt;</code> is the native Web Components equivalent of React's <code>children</code> prop — content projection defined by the component, filled in by its consumer",
      "Shadow DOM provides real, native style encapsulation without needing CSS Modules/styled-components/BEM",
      "<code>&lt;template&gt;</code> + <code>cloneNode()</code> avoids the re-parsing cost and XSS risk of building DOM via <code>innerHTML</code> strings",
      "Understanding these shows you know the platform beneath your framework"
    ],
  },
  {
    title: 'Details & Summary',
    icon: '�',
    difficulty: 'Intermediate',
    category: 'HTML5 APIs & Misc',
    interviewFrequency: 3,
    quickSummary: `
      <ul>
        <li><code>&lt;details&gt;</code> + <code>&lt;summary&gt;</code> gives you a <strong>native, fully accessible disclosure widget</strong> (accordion/collapsible section) with zero JavaScript and zero ARIA attributes needed.</li>
        <li>This directly ties back to ARIA Roles and Keyboard Navigation — a concrete example of "use the native element instead of rebuilding it with <code>div role=\"button\"</code> + custom JS."</li>
        <li>Common interview point: knowing <strong>when native <code>&lt;details&gt;</code> is enough</strong> vs when you genuinely need a custom-built accordion (animation requirements, exclusive-open behavior, complex styling).</li>
        <li>The <code>toggle</code> event and <code>open</code> attribute give you JS/CSS hooks to integrate it into a real application without losing native accessibility benefits.</li>
      </ul>
    `,
    content: `
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Native Disclosure Widget Behavior</h4>
      <img src="/images/details-summary.svg" alt="Details and Summary Diagram" style="width: 100%; max-width: 600px; border-radius: 0.5rem; margin-bottom: 1rem;" />
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Basic usage</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;details&gt;
  &lt;summary&gt;What's your return policy?&lt;/summary&gt;
  &lt;p&gt;We offer a 30-day return window on all unworn items.&lt;/p&gt;
&lt;/details&gt;
      </pre>
      <p style="margin-bottom: 0.5rem;">No JavaScript, no <code>aria-expanded</code>, no keyboard event handlers. The browser gives you click-to-toggle, keyboard support (Enter/Space), and correct accessibility semantics for free.</p>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Styling — removing/replacing the default marker</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
summary {
  list-style: none; /* Firefox */
  cursor: pointer;
}
summary::-webkit-details-marker {
  display: none; /* Chrome/Safari */
}

summary::before {
  content: '▸ ';
}
details[open] summary::before {
  content: '▾ ';
}
      </pre>
      <p style="margin-bottom: 0.5rem;">The <code>[open]</code> CSS attribute selector reflects state automatically — no JS-managed class required.</p>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">The <code>toggle</code> event</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
const details = document.querySelector('details');

details.addEventListener('toggle', () =&gt; {
  console.log(details.open ? 'opened' : 'closed');
  // Analytics tracking, lazy-loading content when expanded, etc.
});
      </pre>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Building an accordion (exclusive-open group)</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;details name="faq-group"&gt;
  &lt;summary&gt;Question 1&lt;/summary&gt;
  &lt;p&gt;Answer 1&lt;/p&gt;
&lt;/details&gt;
&lt;details name="faq-group"&gt;
  &lt;summary&gt;Question 2&lt;/summary&gt;
  &lt;p&gt;Answer 2&lt;/p&gt;
&lt;/details&gt;
      </pre>
      <p style="margin-bottom: 0.5rem;"><strong>Newer platform feature:</strong> Same <code>name</code> attribute across multiple <code>&lt;details&gt;</code> elements creates a native radio-button-style group — opening one automatically closes others, entirely without JavaScript.</p>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">When native <code>&lt;details&gt;</code> isn't enough</h4>
      <p style="margin-bottom: 0.5rem;">Legitimate reasons to build a custom accordion: animated open/close transitions (native toggles instantly), complex custom styling, or non-standard interaction patterns (hover-to-open, programmatic-only control).</p>
    `,
    interviewQuestion: {
      question: "What accessibility features does <details>/<summary> give you for free?",
      answer: "Keyboard support (Enter/Space toggles when the summary is focused), correct expand/collapse semantics announced to screen readers, and proper focus management — all without writing any ARIA attributes or JavaScript event handlers, unlike a custom div role=\"button\" implementation."
    },
    keyTakeaways: [
      "<code>&lt;details&gt;</code>/<code>&lt;summary&gt;</code> gives free keyboard support and accessibility semantics — no ARIA or JS needed for basic use",
      "<code>[open]</code> CSS attribute selector reflects state automatically, no JS-managed class required",
      "Same <code>name</code> attribute across multiple <code>&lt;details&gt;</code> elements creates a native exclusive-open group",
      "<code>toggle</code> event lets you hook JS logic (analytics, lazy loading) into open/close state changes",
      "Reach for a custom accordion only for genuine gaps (animation, non-standard interaction) — not by default"
    ],
  },
];
