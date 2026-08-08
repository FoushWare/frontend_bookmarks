import { ResourceSection } from '@/components/ResourceGuide';

export const seoData: ResourceSection[] = [
  {
    title: 'Meta Tags',
    icon: '🏷️',
    difficulty: 'Intermediate',
    category: 'SEO',
    interviewFrequency: 3,
    quickSummary: `
      <ul>
        <li>Meta tags split into two real categories: <strong>core/SEO tags</strong> (charset, viewport, description, robots) that affect search engines and rendering, and <strong>social sharing tags</strong> (Open Graph, Twitter Card) that control how links look when shared on social platforms.</li>
        <li><code>&lt;meta name="description"&gt;</code> doesn't directly boost ranking, but strongly influences <strong>click-through rate</strong> — it's the snippet text shown under your title in search results.</li>
        <li><code>og:</code> (Open Graph) tags are what actually generate the rich preview card (image + title + description) when a link is shared on Slack, Twitter/X, LinkedIn, Facebook, etc. — without them, shared links look like plain, unstyled text.</li>
        <li><code>&lt;link rel="canonical"&gt;</code> solves a real, common SEO problem: duplicate content across multiple URLs.</li>
      </ul>
    `,
    content: `
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Essential Meta Tags & Social Preview</h4>
      <img src="/images/meta-tags-overview.svg" alt="Meta Tags Overview" style="width: 100%; max-width: 600px; border-radius: 0.5rem; margin-bottom: 1rem;" />
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Core meta tags</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;Product Name | Company&lt;/title&gt;
  &lt;meta name="description" content="A concise, compelling summary of this page's content, ideally 150-160 characters."&gt;
  &lt;link rel="canonical" href="https://example.com/products/widget"&gt;
  &lt;meta name="robots" content="index, follow"&gt;
&lt;/head&gt;
      </pre>
      <table style="width: 100%; border-collapse: collapse; font-size: 0.8rem; margin-bottom: 1rem;">
        <tr style="border-bottom: 1px solid var(--border);">
          <th style="text-align: left; padding: 0.5rem;">Tag</th>
          <th style="text-align: left; padding: 0.5rem;">Purpose</th>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>description</code></td>
          <td style="padding: 0.5rem;">Shown as snippet text in search results — affects CTR, not ranking directly</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>robots</code></td>
          <td style="padding: 0.5rem;">Controls whether search engines index this page and follow its links</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>canonical</code></td>
          <td style="padding: 0.5rem;">Declares the "official" URL when same content is reachable via multiple URLs</td>
        </tr>
      </table>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;"><code>&lt;meta name="description"&gt;</code> — writing it well</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;!-- ❌ Too vague, doesn't encourage clicks --&gt;
&lt;meta name="description" content="Welcome to our website"&gt;

&lt;!-- ❌ Keyword-stuffed, reads unnaturally --&gt;
&lt;meta name="description" content="shoes, running shoes, best running shoes, buy shoes online, cheap shoes"&gt;

&lt;!-- ✅ Specific, natural, states the actual value --&gt;
&lt;meta name="description" content="Lightweight trail running shoes engineered for rocky terrain. Free shipping and 30-day returns."&gt;
      </pre>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;"><code>&lt;link rel="canonical"&gt;</code> — solving duplicate content</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
https://example.com/products/widget
https://example.com/products/widget?ref=homepage
https://example.com/products/widget?utm_source=newsletter

&lt;!-- On ALL versions, point to the single "real" URL --&gt;
&lt;link rel="canonical" href="https://example.com/products/widget"&gt;
      </pre>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Open Graph — rich share preview</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;meta property="og:title" content="Trail Runner Pro - Lightweight Running Shoes"&gt;
&lt;meta property="og:description" content="Engineered for rocky terrain. Free shipping and 30-day returns."&gt;
&lt;meta property="og:image" content="https://example.com/images/trail-runner-pro-share.jpg"&gt;
&lt;meta property="og:url" content="https://example.com/products/trail-runner-pro"&gt;
&lt;meta property="og:type" content="website"&gt;
      </pre>
      <p style="margin-bottom: 0.5rem;"><strong>og:image requirements:</strong> Minimum ~1200×630px, must be absolute URL (https://...), keep file size reasonable.</p>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Twitter Card tags</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;meta name="twitter:card" content="summary_large_image"&gt;
&lt;meta name="twitter:title" content="Trail Runner Pro"&gt;
&lt;meta name="twitter:description" content="Engineered for rocky terrain."&gt;
&lt;meta name="twitter:image" content="https://example.com/images/share.jpg"&gt;
      </pre>
    `,
    interviewQuestion: {
      question: "Does <meta name=\"description\"> directly affect search ranking?",
      answer: "Not directly as a ranking factor, but it strongly influences click-through rate from search results, since it's the snippet text shown under the page title — and CTR itself can indirectly correlate with performance signals search engines do consider."
    },
    keyTakeaways: [
      "<code>description</code> affects click-through rate, not direct ranking — keep it ~150-160 characters, specific and compelling",
      "<code>&lt;link rel=\"canonical\"&gt;</code> consolidates duplicate-content URLs (especially tracking-parameter variants) into one indexed version",
      "<code>og:</code> tags build the rich preview card on social/chat shares — without them, links look plain",
      "<code>og:image</code> must be an absolute URL, ideally ≥1200×630px",
      "Twitter/X reads its own <code>twitter:</code> tags in preference to <code>og:</code> — include both for full coverage"
    ],
  },
  {
    title: 'Link Tags & rel Types',
    icon: '🔗',
    difficulty: 'Intermediate',
    category: 'SEO',
    interviewFrequency: 3,
    quickSummary: `
      <ul>
        <li><code>&lt;link&gt;</code> isn't just for stylesheets — the <code>rel</code> attribute defines dozens of relationship types: favicons, canonical URLs, RSS feeds, PWA manifests, and critically, <strong>resource hints</strong> for performance.</li>
        <li>Resource hints (<code>preload</code>, <code>prefetch</code>, <code>preconnect</code>, <code>dns-prefetch</code>) are a genuinely high-value interview topic — they let you influence browser loading priority without any JavaScript.</li>
        <li>Know the difference precisely: <strong>preload</strong> = "I need this now, for this page." <strong>prefetch</strong> = "I'll probably need this later, for the next page."</li>
        <li><code>rel="noopener"</code> on <code>target="_blank"</code> links is a real, commonly-tested security fix — most developers have written the vulnerable version without realizing it.</li>
      </ul>
    `,
    content: `
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">rel Types and Resource Hint Timing</h4>
      <img src="/images/rel-types-and-hints.svg" alt="Rel Types and Resource Hints" style="width: 100%; max-width: 600px; border-radius: 0.5rem; margin-bottom: 1rem;" />
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Common <code>rel</code> values beyond stylesheet</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;link rel="stylesheet" href="styles.css"&gt;
&lt;link rel="icon" href="/favicon.ico"&gt;
&lt;link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png"&gt;
&lt;link rel="canonical" href="https://example.com/page"&gt;
&lt;link rel="alternate" type="application/rss+xml" href="/feed.xml" title="Blog RSS Feed"&gt;
&lt;link rel="alternate" hreflang="es" href="https://example.com/es/page"&gt;
&lt;link rel="manifest" href="/manifest.json"&gt;
      </pre>
      <p style="margin-bottom: 0.5rem;"><code>rel="alternate"</code> + <code>hreflang</code> — tells search engines about translated versions of the same page, important for internationalized sites.</p>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Resource hints — the performance-critical part</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;link rel="dns-prefetch" href="https://api.example.com"&gt;
&lt;link rel="preconnect" href="https://fonts.googleapis.com"&gt;
&lt;link rel="preconnect" href="https://fonts.gstatic.com" crossorigin&gt;
&lt;link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin&gt;
&lt;link rel="prefetch" href="/next-page-bundle.js"&gt;
      </pre>
      <table style="width: 100%; border-collapse: collapse; font-size: 0.8rem; margin-bottom: 1rem;">
        <tr style="border-bottom: 1px solid var(--border);">
          <th style="text-align: left; padding: 0.5rem;">Hint</th>
          <th style="text-align: left; padding: 0.5rem;">What it does</th>
          <th style="text-align: left; padding: 0.5rem;">Priority</th>
          <th style="text-align: left; padding: 0.5rem;">Use when</th>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>dns-prefetch</code></td>
          <td style="padding: 0.5rem;">Resolves DNS only</td>
          <td style="padding: 0.5rem;">Very low</td>
          <td style="padding: 0.5rem;">You'll connect to a domain but not yet exactly what for</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>preconnect</code></td>
          <td style="padding: 0.5rem;">DNS + TCP + TLS handshake</td>
          <td style="padding: 0.5rem;">Low</td>
          <td style="padding: 0.5rem;">You'll fetch from this origin very soon (fonts, API)</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>preload</code></td>
          <td style="padding: 0.5rem;">Fetches specific resource, high priority</td>
          <td style="padding: 0.5rem;">High</td>
          <td style="padding: 0.5rem;">Critical resource for THIS page that browser wouldn't discover early enough</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>prefetch</code></td>
          <td style="padding: 0.5rem;">Fetches resource, low priority, cached for later</td>
          <td style="padding: 0.5rem;">Very low</td>
          <td style="padding: 0.5rem;">Something needed on the likely next page, not this one</td>
        </tr>
      </table>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;"><code>preload</code> vs <code>prefetch</code> — the exact distinction</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;!-- preload: THIS page needs this font immediately --&gt;
&lt;link rel="preload" href="/fonts/inter-bold.woff2" as="font" type="font/woff2" crossorigin&gt;

&lt;!-- prefetch: user will PROBABLY navigate to /checkout next --&gt;
&lt;link rel="prefetch" href="/checkout-bundle.js"&gt;
      </pre>
      <p style="margin-bottom: 0.5rem;"><strong>Required <code>as</code> attribute on preload:</strong> must match the resource type (<code>font</code>, <code>style</code>, <code>script</code>, <code>image</code>) — without it, the browser may fetch it twice.</p>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;"><code>rel="noopener"</code> — the security fix</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;!-- ❌ Vulnerable: new tab can access window.opener --&gt;
&lt;a href="https://external-site.com" target="_blank"&gt;External link&lt;/a&gt;

&lt;!-- ✅ Fixed --&gt;
&lt;a href="https://external-site.com" target="_blank" rel="noopener noreferrer"&gt;External link&lt;/a&gt;
      </pre>
      <p style="margin-bottom: 0.5rem;"><strong>The vulnerability:</strong> The newly opened tab gets a <code>window.opener</code> reference back to your original page — malicious content could silently redirect your original tab to a phishing page.</p>
    `,
    interviewQuestion: {
      question: "What's the difference between rel=\"preload\" and rel=\"prefetch\"?",
      answer: "preload fetches a resource at high priority for the current page — used when the browser's default discovery order would find it too late. prefetch fetches at low priority for a resource likely needed on the next navigation, not the current page."
    },
    keyTakeaways: [
      "<code>preload</code> = high priority, current page, resource discovered too late otherwise. <code>prefetch</code> = low priority, speculative, for the likely next page",
      "<code>preconnect</code>/<code>dns-prefetch</code> warm up the connection to a domain before you actually need to fetch from it",
      "<code>rel=\"noopener noreferrer\"</code> on <code>target=\"_blank\"</code> links prevents the new tab from hijacking the original tab via <code>window.opener</code>",
      "<code>preload</code> requires a matching <code>as</code> attribute or the resource may be fetched twice",
      "<code>rel=\"alternate\" hreflang=\"...\"</code> is the correct pattern for internationalized page variants"
    ],
  },
  {
    title: 'Structured Data Basics (JSON-LD)',
    icon: '🏗️',
    difficulty: 'Intermediate',
    category: 'SEO',
    interviewFrequency: 3,
    quickSummary: `
      <ul>
        <li>Structured data is a standardized vocabulary (schema.org) that tells search engines <strong>exactly what your content means</strong> — not just "here's some text," but "this is a Product named X, priced $Y, with Z reviews."</li>
        <li><strong>JSON-LD</strong> (JSON for Linking Data) is the modern, Google-recommended format — a single <code>&lt;script type="application/ld+json"&gt;</code> block, completely separate from your visible HTML.</li>
        <li>Structured data does <strong>not</strong> directly boost search ranking — its real value is eligibility for <strong>rich results</strong> (star ratings, price, images directly in search results), which significantly improves click-through rate.</li>
        <li>This is a genuinely practical, implementable skill — a good one to have a real code example ready for.</li>
      </ul>
    `,
    content: `
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">From JSON-LD to Rich Search Result</h4>
      <img src="/images/json-ld-rich-result.svg" alt="JSON-LD Rich Result Diagram" style="width: 100%; max-width: 600px; border-radius: 0.5rem; margin-bottom: 1rem;" />
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Basic JSON-LD structure</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;script type="application/ld+json"&gt;
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Trail Runner Pro",
  "image": "https://example.com/images/trail-runner-pro.jpg",
  "description": "Lightweight trail running shoes engineered for rocky terrain.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "89.99",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "238"
  }
}
&lt;/script&gt;
      </pre>
      <p style="margin-bottom: 0.5rem;"><strong>Why JSON-LD over other formats:</strong> Google explicitly recommends JSON-LD because it's completely decoupled from your visible markup — you can generate it programmatically from the same data source as your UI without entangling the two.</p>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Common <code>@type</code> values you'll actually use</h4>
      <table style="width: 100%; border-collapse: collapse; font-size: 0.8rem; margin-bottom: 1rem;">
        <tr style="border-bottom: 1px solid var(--border);">
          <th style="text-align: left; padding: 0.5rem;">@type</th>
          <th style="text-align: left; padding: 0.5rem;">Use case</th>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>Product</code></td>
          <td style="padding: 0.5rem;">E-commerce product pages — price, availability, ratings</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>Article</code> / <code>BlogPosting</code></td>
          <td style="padding: 0.5rem;">Blog posts, news articles — author, publish date, headline</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>Organization</code></td>
          <td style="padding: 0.5rem;">Company info — logo, social profiles, contact info</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>BreadcrumbList</code></td>
          <td style="padding: 0.5rem;">Shows breadcrumb navigation directly in search results</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>FAQPage</code></td>
          <td style="padding: 0.5rem;">Expandable Q&A directly in search results</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>Review</code> / <code>AggregateRating</code></td>
          <td style="padding: 0.5rem;">Star ratings shown next to search results</td>
        </tr>
      </table>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;"><code>BreadcrumbList</code> — practical example</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://example.com" },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://example.com/products" },
    { "@type": "ListItem", "position": 3, "name": "Trail Runner Pro", "item": "https://example.com/products/trail-runner-pro" }
  ]
}
      </pre>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;"><code>FAQPage</code> — expandable search results</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is your return policy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer a 30-day return window on all unworn items."
      }
    }
  ]
}
      </pre>
      <p style="margin-bottom: 0.5rem;"><strong>Important:</strong> Structured data content should match visible content on the page — Google's guidelines explicitly warn against adding structured data for content that isn't actually shown to users.</p>
    `,
    interviewQuestion: {
      question: "Does adding structured data directly improve your search ranking?",
      answer: "Not directly — it doesn't act as a ranking factor by itself. Its real value is making the page eligible for rich result formatting (star ratings, price, breadcrumbs shown directly in search results), which improves click-through rate, which can indirectly influence performance signals search engines do weigh."
    },
    keyTakeaways: [
      "JSON-LD = single <code>&lt;script type=\"application/ld+json\"&gt;</code> block, decoupled from visible HTML — Google's recommended format",
      "Structured data ≠ ranking boost — it's eligibility for rich result formatting, which drives click-through rate",
      "Common types to know: Product, Article, BreadcrumbList, FAQPage, Review/AggregateRating",
      "Structured data content must match what's actually visible on the page — mismatches can trigger penalties",
      "Google's Rich Results Test is the standard practical validation tool"
    ],
  },
  {
    title: 'References',
    icon: '📖',
    links: [
      { title: 'MDN Link Types', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel', description: 'Link rel attribute reference' },
      { title: 'MDN Resource Hints', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preload', description: 'Resource hints documentation' },
      { title: 'MDN Meta Tags', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta', description: 'Meta element reference' },
      { title: 'Schema.org', url: 'https://schema.org/', description: 'Structured data vocabulary' },
      { title: 'Google Rich Results Test', url: 'https://search.google.com/test/rich-results', description: 'Validate structured data' },
    ],
  },
];
