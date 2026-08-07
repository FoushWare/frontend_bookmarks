import { ResourceSection } from '@/components/ResourceGuide';

export const semanticsData: ResourceSection[] = [
  {
    title: 'Document Structure',
    icon: '📄',
    difficulty: 'Beginner',
    category: 'Fundamentals',
    interviewFrequency: 4,
    quickSummary: `
      <ul>
        <li><code>&lt;!DOCTYPE html&gt;</code> triggers standards mode — without it, browsers use quirks mode with inconsistent box model</li>
        <li><code>lang</code> attribute on <code>&lt;html&gt;</code> is required for accessibility (screen reader pronunciation) and SEO</li>
        <li><code>&lt;head&gt;</code> = metadata (not rendered), <code>&lt;body&gt;</code> = visible content</li>
        <li><code>charset</code> must appear in first 1024 bytes to prevent mojibake</li>
        <li><code>viewport</code> meta tag = difference between responsive and broken-on-mobile</li>
      </ul>
    `,
    content: `
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Minimal valid HTML5 document</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;Page Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;!-- visible content --&gt;
&lt;/body&gt;
&lt;/html&gt;
      </pre>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Document Tree Structure</h4>
      <img src="/images/document-tree.svg" alt="HTML Document Tree" style="width: 100%; max-width: 600px; border-radius: 0.5rem; margin-bottom: 1rem;" />
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Quirks Mode vs Standards Mode</h4>
      <table style="width: 100%; border-collapse: collapse; font-size: 0.8rem;">
        <tr style="border-bottom: 1px solid var(--border);">
          <th style="text-align: left; padding: 0.5rem;">Aspect</th>
          <th style="text-align: left; padding: 0.5rem;">Quirks Mode</th>
          <th style="text-align: left; padding: 0.5rem;">Standards Mode</th>
        </tr>
        <tr>
          <td style="padding: 0.5rem;">Trigger</td>
          <td style="padding: 0.5rem;">No/invalid DOCTYPE</td>
          <td style="padding: 0.5rem;">Valid <code>&lt;!DOCTYPE html&gt;</code></td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;">Box Model</td>
          <td style="padding: 0.5rem;">width includes padding & border (old IE)</td>
          <td style="padding: 0.5rem;">width = content only</td>
        </tr>
      </table>
    `,
    interviewQuestion: {
      question: "What happens if you forget the DOCTYPE?",
      answer: "Browser falls back to quirks mode. Box model, table sizing, and CSS resets behave differently across browsers. Always include it."
    },
    keyTakeaways: [
      "Always include <code>&lt;!DOCTYPE html&gt;</code> — know why (quirks vs standards mode)",
      "<code>lang</code> attribute is not optional — accessibility + SEO impact",
      "<code>charset</code> must be early in document (first 1024 bytes)",
      "Viewport meta tag = difference between responsive and broken-on-mobile",
      "<code>&lt;head&gt;</code> = metadata, never visible. <code>&lt;body&gt;</code> = everything rendered."
    ],
  },
  {
    title: 'Semantic Elements',
    icon: '🏗️',
    difficulty: 'Beginner',
    category: 'Semantics',
    interviewFrequency: 5,
    quickSummary: `
      <ul>
        <li>Semantic elements describe <strong>meaning</strong>, not just appearance — <code>&lt;article&gt;</code> tells browsers/screen readers/search engines "this is self-contained content"</li>
        <li>Using semantic HTML is one of the <strong>most common interview topics</strong> — expect questions like "why use <code>&lt;section&gt;</code> instead of <code>&lt;div&gt;</code>?"</li>
        <li>Key benefits: <strong>accessibility</strong> (screen reader landmarks), <strong>SEO</strong> (search engines weight semantic content), <strong>maintainability</strong> (code reads like outline)</li>
        <li>Main layout elements: <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;footer&gt;</code></li>
      </ul>
    `,
    content: `
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Semantic Page Layout</h4>
      <img src="/images/semantic-layout.svg" alt="Semantic HTML5 Layout" style="width: 100%; max-width: 600px; border-radius: 0.5rem; margin-bottom: 1rem;" />
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">The core semantic elements</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;body&gt;
  &lt;header&gt;
    &lt;h1&gt;Site Title&lt;/h1&gt;
  &lt;/header&gt;

  &lt;nav&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;a href="/"&gt;Home&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="/about"&gt;About&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/nav&gt;

  &lt;main&gt;
    &lt;article&gt;
      &lt;h1&gt;Article Title&lt;/h1&gt;
      &lt;p&gt;Article content...&lt;/p&gt;
    &lt;/article&gt;

    &lt;aside&gt;
      &lt;h2&gt;Sidebar&lt;/h2&gt;
      &lt;p&gt;Related content...&lt;/p&gt;
    &lt;/aside&gt;
  &lt;/main&gt;

  &lt;footer&gt;
    &lt;p&gt;&amp;copy; 2024 Site&lt;/p&gt;
  &lt;/footer&gt;
&lt;/body&gt;
      </pre>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">When to use each element</h4>
      <table style="width: 100%; border-collapse: collapse; font-size: 0.8rem;">
        <tr style="border-bottom: 1px solid var(--border);">
          <th style="text-align: left; padding: 0.5rem;">Element</th>
          <th style="text-align: left; padding: 0.5rem;">Use when...</th>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>&lt;header&gt;</code></td>
          <td style="padding: 0.5rem;">Introductory content or navigation</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>&lt;nav&gt;</code></td>
          <td style="padding: 0.5rem;">Major navigation links</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>&lt;main&gt;</code></td>
          <td style="padding: 0.5rem;">Dominant content of the page (unique per page)</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>&lt;article&gt;</code></td>
          <td style="padding: 0.5rem;">Self-contained, reusable content (blog post, news item)</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>&lt;section&gt;</code></td>
          <td style="padding: 0.5rem;">Thematic grouping of content with heading</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>&lt;aside&gt;</code></td>
          <td style="padding: 0.5rem;">Content tangentially related (sidebar, pull-quote)</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>&lt;footer&gt;</code></td>
          <td style="padding: 0.5rem;">Copyright, contact info, related links</td>
        </tr>
      </table>
    `,
    interviewQuestion: {
      question: "Why use <section> instead of <div>?",
      answer: "<section> has semantic meaning — it represents a thematic grouping of content, typically with a heading. Screen readers can navigate by sections, and search engines understand the content structure. <div> has no semantic meaning and is purely for styling/scripting hooks."
    },
    keyTakeaways: [
      "Semantic elements describe meaning, not appearance",
      "Screen readers use semantic elements as landmarks for navigation",
      "Search engines weight semantic content higher for SEO",
      "<code>&lt;main&gt;</code> should be unique per page — don't use more than one",
      "<code>&lt;article&gt;</code> = self-contained content, <code>&lt;section&gt;</code> = thematic grouping"
    ],
  },
  {
    title: 'Heading Hierarchy',
    icon: '📝',
    difficulty: 'Beginner',
    category: 'Semantics',
    interviewFrequency: 4,
    quickSummary: `
      <ul>
        <li>Headings create an <strong>outline structure</strong> — <code>&lt;h1&gt;</code> is the page title, <code>&lt;h2&gt;</code> through <code>&lt;h6&gt;</code> are subsections</li>
        <li><strong>Never skip levels</strong> — going from <code>&lt;h2&gt;</code> to <code>&lt;h4&gt;</code> breaks the outline and confuses screen readers</li>
        <li><strong>One <code>&lt;h1&gt;</code> per page</strong> is the standard — it represents the main topic</li>
        <li>Headings are crucial for <strong>accessibility</strong> (screen reader navigation) and <strong>SEO</strong> (search engines use heading hierarchy to understand content)</li>
      </ul>
    `,
    content: `
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Proper heading hierarchy</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;h1&gt;Main Page Title&lt;/h1&gt;
  &lt;h2&gt;Section 1&lt;/h2&gt;
    &lt;h3&gt;Subsection 1.1&lt;/h3&gt;
    &lt;h3&gt;Subsection 1.2&lt;/h3&gt;
  &lt;h2&gt;Section 2&lt;/h2&gt;
    &lt;h3&gt;Subsection 2.1&lt;/h3&gt;
      &lt;h4&gt;Detail 2.1.1&lt;/h4&gt;
      </pre>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Heading Hierarchy Diagram</h4>
      <img src="/images/heading-hierarchy.svg" alt="Heading Hierarchy" style="width: 100%; max-width: 600px; border-radius: 0.5rem; margin-bottom: 1rem;" />
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Common mistakes to avoid</h4>
      <ul style="margin-bottom: 0.5rem; padding-left: 1.5rem;">
        <li><strong>Skipping levels:</strong> <code>&lt;h2&gt;</code> → <code>&lt;h4&gt;</code> (breaks outline)</li>
        <li><strong>Multiple <code>&lt;h1&gt;</code>s:</strong> Confuses both users and search engines</li>
        <li><strong>Using headings for size:</strong> Choose heading based on hierarchy, not visual size — use CSS for styling</li>
        <li><strong>Nested headings incorrectly:</strong> <code>&lt;h3&gt;</code> should not appear before <code>&lt;h2&gt;</code></li>
      </ul>
    `,
    interviewQuestion: {
      question: "Can you have multiple h1 elements on a page?",
      answer: "The HTML5 spec allows it, but it's not recommended. One h1 per page is the best practice for accessibility and SEO. Multiple h1s confuse the document outline and make it harder for screen readers to understand the page structure."
    },
    keyTakeaways: [
      "One <code>&lt;h1&gt;</code> per page represents the main topic",
      "Never skip heading levels — maintain proper hierarchy",
      "Headings create an outline structure for screen readers",
      "Use headings for semantic meaning, not visual size",
      "Search engines use heading hierarchy to understand content importance"
    ],
  },
  {
    title: 'Text Semantics',
    icon: '📝',
    difficulty: 'Beginner',
    category: 'Semantics',
    interviewFrequency: 3,
    quickSummary: `
      <ul>
        <li>Beyond headings, HTML provides <strong>text-level semantic elements</strong> to give meaning to inline content</li>
        <li><code>&lt;strong&gt;</code> indicates important content (bold by default), <code>&lt;em&gt;</code> indicates emphasis (italic by default)</li>
        <li><code>&lt;b&gt;</code> and <code>&lt;i&gt;</code> are purely visual — use <code>&lt;strong&gt;</code> and <code>&lt;em&gt;</code> for semantic meaning</li>
        <li>Other useful elements: <code>&lt;mark&gt;</code> (highlighted text), <code>&lt;code&gt;</code> (code snippets), <code>&lt;abbr&gt;</code> (abbreviations)</li>
      </ul>
    `,
    content: `
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Semantic vs visual text elements</h4>
      <table style="width: 100%; border-collapse: collapse; font-size: 0.8rem;">
        <tr style="border-bottom: 1px solid var(--border);">
          <th style="text-align: left; padding: 0.5rem;">Semantic (use these)</th>
          <th style="text-align: left; padding: 0.5rem;">Visual (avoid unless needed)</th>
          <th style="text-align: left; padding: 0.5rem;">Purpose</th>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>&lt;strong&gt;</code></td>
          <td style="padding: 0.5rem;"><code>&lt;b&gt;</code></td>
          <td style="padding: 0.5rem;">Important content</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>&lt;em&gt;</code></td>
          <td style="padding: 0.5rem;"><code>&lt;i&gt;</code></td>
          <td style="padding: 0.5rem;">Emphasized content</td>
        </tr>
      </table>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Other useful text semantics</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;p&gt;The &lt;abbr title="HyperText Markup Language"&gt;HTML&lt;/abbr; spec is maintained by the &lt;abbr title="World Wide Web Consortium"&gt;W3C&lt;/abbr&gt;.&lt;/p&gt;

&lt;p&gt;Here's a code example: &lt;code&gt;const x = 5;&lt;/code&gt;&lt;/p&gt;

&lt;p&gt;&lt;mark&gt;This text is highlighted&lt;/mark&gt; for emphasis.&lt;/p&gt;

&lt;p&gt;&lt;time datetime="2024-01-15"&gt;January 15, 2024&lt;/time&gt;&lt;/p&gt;

&lt;p&gt;&lt;data value="42"&gt;The answer&lt;/data&gt; to everything.&lt;/p&gt;
      </pre>
    `,
    interviewQuestion: {
      question: "What's the difference between <strong> and <b>?",
      answer: "<strong> indicates that the content has strong importance (semantic meaning), while <b> is purely for visual styling with no semantic meaning. Screen readers announce strong content with emphasis, while b content is read normally."
    },
    keyTakeaways: [
      "<code>&lt;strong&gt;</code> = important content (semantic), <code>&lt;b&gt;</code> = bold (visual only)",
      "<code>&lt;em&gt;</code> = emphasis (semantic), <code>&lt;i&gt;</code> = italic (visual only)",
      "Use <code>&lt;abbr&gt;</code> with title attribute for abbreviations",
      "<code>&lt;code&gt;</code> for code snippets, <code>&lt;mark&gt;</code> for highlighted text",
      "<code>&lt;time&gt;</code> and <code>&lt;data&gt;</code> provide machine-readable values"
    ],
  },
  {
    title: 'References',
    icon: '📖',
    links: [
      { title: 'MDN HTML Elements Reference', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element', description: 'Complete HTML element reference' },
      { title: 'HTML5 Semantic Elements', url: 'https://developer.mozilla.org/en-US/docs/Glossary/Semantics', description: 'Understanding HTML semantics' },
    ],
  },
];
