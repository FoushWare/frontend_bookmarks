import { ResourceSection } from '@/components/ResourceGuide';

export const performanceData: ResourceSection[] = [
  {
    title: 'Resource Hints',
    icon: '⚡',
    difficulty: 'Intermediate',
    category: 'Performance',
    interviewFrequency: 3,
    quickSummary: `
      <ul>
        <li>Resource hints tell the browser <strong>how to prioritize</strong> resource loading</li>
        <li><strong>preload</strong>: fetch high-priority resources early (fonts, critical CSS)</li>
        <li><strong>prefetch</strong>: fetch resources likely needed for next navigation</li>
        <li><strong>preconnect</strong>: establish early connections to important origins</li>
        <li><strong>dns-prefetch</strong>: resolve DNS for origins you'll need soon</li>
      </ul>
    `,
    content: `
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Resource hint types</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;!-- Preload critical resources --&gt;
&lt;link rel="preload" href="critical.css" as="style"&gt;
&lt;link rel="preload" href="font.woff2" as="font" crossorigin&gt;

&lt;!-- Prefetch for next page --&gt;
&lt;link rel="prefetch" href="next-page.js"&gt;

&lt;!-- Preconnect to important origins --&gt;
&lt;link rel="preconnect" href="https://api.example.com"&gt;

&lt;!-- DNS prefetch --&gt;
&lt;link rel="dns-prefetch" href="https://cdn.example.com"&gt;
      </pre>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">When to use each</h4>
      <table style="width: 100%; border-collapse: collapse; font-size: 0.8rem;">
        <tr style="border-bottom: 1px solid var(--border);">
          <th style="text-align: left; padding: 0.5rem;">Hint</th>
          <th style="text-align: left; padding: 0.5rem;">Use case</th>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>preload</code></td>
          <td style="padding: 0.5rem;">Critical resources needed immediately (fonts, hero CSS)</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>prefetch</code></td>
          <td style="padding: 0.5rem;">Resources for likely next navigation</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>preconnect</code></td>
          <td style="padding: 0.5rem;">Important third-party origins (APIs, CDNs)</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>dns-prefetch</code></td>
          <td style="padding: 0.5rem;">Origins you'll need but aren't critical</td>
        </tr>
      </table>
    `,
    interviewQuestion: {
      question: "What's the difference between preload and prefetch?",
      answer: "preload fetches a resource for the current page with high priority — use it for critical resources like fonts or hero CSS. prefetch fetches a resource for likely future navigation with low priority — use it for resources on the next page the user might visit."
    },
    keyTakeaways: [
      "<code>preload</code> for critical resources on current page (fonts, CSS)",
      "<code>prefetch</code> for resources likely needed on next navigation",
      "<code>preconnect</code> for important third-party origins (APIs, CDNs)",
      "<code>dns-prefetch</code> for origins you'll need but aren't critical",
      "Don't overuse resource hints — they can hurt performance if misused"
    ],
  },
  {
    title: 'Lazy Loading',
    icon: '📦',
    difficulty: 'Intermediate',
    category: 'Performance',
    interviewFrequency: 3,
    quickSummary: `
      <ul>
        <li><code>loading="lazy"</code> attribute defers loading offscreen images and iframes until near viewport</li>
        <li>Native lazy loading has good browser support and requires no JavaScript</li>
        <li>Fallback to JavaScript Intersection Observer for older browsers</li>
        <li>Don't lazy load above-the-fold content — it delays LCP</li>
      </ul>
    `,
    content: `
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Native lazy loading</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;img src="image.jpg" loading="lazy" alt="Description"&gt;
&lt;iframe src="video.html" loading="lazy"&gt;&lt;/iframe&gt;
      </pre>
    `,
    interviewQuestion: {
      question: "How does the loading=\"lazy\" attribute work?",
      answer: "The loading=\"lazy\" attribute tells the browser to defer loading the image or iframe until it's near the viewport. The browser calculates a distance threshold and loads the resource when the user scrolls close to it. This reduces initial page load time and saves bandwidth for content the user never sees."
    },
    keyTakeaways: [
      "Use <code>loading=\"lazy\"</code> on below-the-fold images and iframes",
      "Native lazy loading has good browser support",
      "Reduces initial page load time and bandwidth usage",
      "Fallback to Intersection Observer for older browsers if needed",
      "Don't lazy load critical above-the-fold content"
    ],
  },
  {
    title: 'References',
    icon: '📖',
    links: [
      { title: 'MDN Resource Hints', url: 'https://developer.mozilla.org/en-US/docs/Web/Performance/Resource_hints', description: 'Resource hints guide' },
      { title: 'Web.dev Lazy Loading', url: 'https://web.dev/browser-level-image-lazy-loading/', description: 'Native lazy loading guide' },
    ],
  },
];
