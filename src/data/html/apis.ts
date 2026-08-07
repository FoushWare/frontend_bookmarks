import { ResourceSection } from '@/components/ResourceGuide';

export const apisData: ResourceSection[] = [
  {
    title: 'Data Attributes',
    icon: '🔧',
    difficulty: 'Beginner',
    category: 'APIs',
    interviewFrequency: 3,
    quickSummary: `
      <ul>
        <li><code>data-*</code> attributes allow storing custom data on HTML elements</li>
        <li>Access via JavaScript: <code>element.dataset.propertyName</code></li>
        <li>Useful for storing configuration, state, or metadata for JavaScript to use</li>
        <li>Hyphenated in HTML (<code>data-user-id</code>), camelCase in JS (<code>dataset.userId</code>)</li>
      </ul>
    `,
    content: `
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Data attributes example</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;div data-user-id="123" data-role="admin"&gt;User content&lt;/div&gt;

&lt;script&gt;
const element = document.querySelector('[data-user-id]');
console.log(element.dataset.userId); // "123"
console.log(element.dataset.role); // "admin"
&lt;/script&gt;
      </pre>
    `,
    interviewQuestion: {
      question: "How do you access data attributes in JavaScript?",
      answer: "Use the dataset property: element.dataset.propertyName. The data attribute name is converted from kebab-case to camelCase — data-user-id becomes dataset.userId."
    },
    keyTakeaways: [
      "<code>data-*</code> attributes store custom data on HTML elements",
      "Access via <code>element.dataset.propertyName</code> in JavaScript",
      "Hyphenated in HTML, camelCase in JS",
      "Useful for configuration, state, or metadata",
      "Avoid for critical data — it's visible in DOM"
    ],
  },
  {
    title: 'Template Element',
    icon: '📋',
    difficulty: 'Intermediate',
    category: 'APIs',
    interviewFrequency: 2,
    quickSummary: `
      <ul>
        <li><code>&lt;template&gt;</code> element holds inert HTML that isn't rendered until activated</li>
        <li>Content inside template is not parsed as DOM until cloned</li>
        <li>Useful for reusable components, list items, or content to be added dynamically</li>
        <li>Clone via JavaScript: <code>template.content.cloneNode(true)</code></li>
      </ul>
    `,
    content: `
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Template element example</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;template id="user-card"&gt;
  &lt;div class="card"&gt;
    &lt;h2 class="name"&gt;&lt;/h2&gt;
    &lt;p class="email"&gt;&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;div id="container"&gt;&lt;/div&gt;

&lt;script&gt;
const template = document.getElementById('user-card');
const container = document.getElementById('container');

const clone = template.content.cloneNode(true);
clone.querySelector('.name').textContent = 'John Doe';
clone.querySelector('.email').textContent = 'john@example.com';
container.appendChild(clone);
&lt;/script&gt;
      </pre>
    `,
    interviewQuestion: {
      question: "What's the purpose of the template element?",
      answer: "The template element holds HTML that isn't rendered when the page loads. It's useful for defining reusable markup that can be cloned and inserted dynamically via JavaScript, avoiding the need to build HTML strings in your code."
    },
    keyTakeaways: [
      "<code>&lt;template&gt;</code> holds inert HTML not rendered until activated",
      "Content inside template is not parsed as DOM until cloned",
      "Clone via <code>template.content.cloneNode(true)</code>",
      "Useful for reusable components and dynamic content",
      "Avoids building HTML strings in JavaScript"
    ],
  },
  {
    title: 'References',
    icon: '📖',
    links: [
      { title: 'MDN Data Attributes', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*', description: 'Data attributes reference' },
      { title: 'MDN Template Element', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template', description: 'Template element reference' },
    ],
  },
];
