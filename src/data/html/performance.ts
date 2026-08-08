import { ResourceSection } from '@/components/ResourceGuide';

export const performanceData: ResourceSection[] = [
  {
    title: 'Script Loading (defer vs async vs normal)',
    icon: '⚡',
    difficulty: 'Intermediate',
    category: 'Performance',
    interviewFrequency: 5,
    quickSummary: `
      <ul>
        <li>This is one of the <strong>highest-frequency</strong> HTML performance questions in interviews.</li>
        <li>Three modes: <strong>normal</strong> (blocks HTML parsing entirely while fetching + executing), <strong><code>async</code></strong> (fetches in parallel, executes the instant it's ready — order not guaranteed), <strong><code>defer</code></strong> (fetches in parallel, executes after parsing completes, in DOM order).</li>
        <li>Practical rule: <strong><code>defer</code> for scripts that need the DOM or depend on execution order</strong> (most application code); <strong><code>async</code> for independent scripts where order doesn't matter</strong> (analytics, ads).</li>
        <li>Both <code>async</code> and <code>defer</code> only apply to <strong>external</strong> scripts (<code>src="..."</code>) — they have no effect on inline <code>&lt;script&gt;</code> blocks.</li>
      </ul>
    `,
    content: `
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">The Three Loading Timelines</h4>
      <img src="/images/script-loading-timeline.svg" alt="Script Loading Timeline" style="width: 100%; max-width: 600px; border-radius: 0.5rem; margin-bottom: 1rem;" />
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Normal (no attribute) — blocking behavior</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;head&gt;
  &lt;script src="app.js"&gt;&lt;/script&gt;
&lt;/head&gt;
      </pre>
      <p style="margin-bottom: 0.5rem;">Parser stops HTML parsing entirely, fetches the script, executes it, then resumes parsing. This is why the old pattern was placing scripts at the bottom of <code>&lt;body&gt;</code>.</p>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;"><code>async</code> — fetch in parallel, execute immediately when ready</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;script src="analytics.js" async&gt;&lt;/script&gt;
      </pre>
      <p style="margin-bottom: 0.5rem;">Fetches in parallel with parsing, executes immediately when ready. <strong>Order is NOT guaranteed</strong> relative to other async scripts.</p>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;"><code>defer</code> — fetch in parallel, execute after parsing, in order</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;script src="app.js" defer&gt;&lt;/script&gt;
&lt;script src="app-init.js" defer&gt;&lt;/script&gt;
      </pre>
      <p style="margin-bottom: 0.5rem;">Fetches in parallel, executes after parsing completes, in DOM order. <strong>Order IS guaranteed</strong>.</p>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Comparison table</h4>
      <table style="width: 100%; border-collapse: collapse; font-size: 0.8rem; margin-bottom: 1rem;">
        <tr style="border-bottom: 1px solid var(--border);">
          <th style="text-align: left; padding: 0.5rem;">Mode</th>
          <th style="text-align: left; padding: 0.5rem;">Blocks during fetch?</th>
          <th style="text-align: left; padding: 0.5rem;">Blocks during execute?</th>
          <th style="text-align: left; padding: 0.5rem;">Order guaranteed?</th>
        </tr>
        <tr>
          <td style="padding: 0.5rem;">Normal</td>
          <td style="padding: 0.5rem;">Yes</td>
          <td style="padding: 0.5rem;">Yes</td>
          <td style="padding: 0.5rem;">Yes (but blocks everything)</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>async</code></td>
          <td style="padding: 0.5rem;">No</td>
          <td style="padding: 0.5rem;">Yes (briefly)</td>
          <td style="padding: 0.5rem;"><strong>No</strong></td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>defer</code></td>
          <td style="padding: 0.5rem;">No</td>
          <td style="padding: 0.5rem;">No</td>
          <td style="padding: 0.5rem;">Yes</td>
        </tr>
      </table>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Inline scripts — attributes don't apply</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;!-- async/defer have NO effect here --&gt;
&lt;script async&gt;
  console.log('runs immediately, blocking');
&lt;/script&gt;
      </pre>
      <p style="margin-bottom: 0.5rem;"><code>async</code>/<code>defer</code> only affect external scripts with <code>src</code>.</p>
    `,
    interviewQuestion: {
      question: "What's the difference between async and defer?",
      answer: "Both fetch scripts in parallel with HTML parsing without blocking the download. async executes the instant the script finishes downloading (order not guaranteed relative to other scripts), while defer waits until parsing completely finishes and executes scripts in their original document order."
    },
    keyTakeaways: [
      "Normal scripts block HTML parsing during both fetch AND execution",
      "<code>async</code> = parallel fetch, execute ASAP, order NOT guaranteed — use for independent scripts",
      "<code>defer</code> = parallel fetch, execute after parsing, order IS guaranteed — use for most app code",
      "<code>defer</code> scripts can live in <code>&lt;head&gt;</code> — no need for bottom-of-body placement",
      "<code>async</code>/<code>defer</code> have zero effect on inline scripts — only external <code>src</code> scripts",
      "<code>type=\"module\"</code> scripts are deferred by default automatically"
    ],
  },
  {
    title: 'Resource Hints — Strategy & Priority',
    icon: '🎯',
    difficulty: 'Advanced',
    category: 'Performance',
    interviewFrequency: 3,
    quickSummary: `
      <ul>
        <li>Card 20 covered <strong>what</strong> <code>preload</code>/<code>prefetch</code>/<code>preconnect</code>/<code>dns-prefetch</code> each do. This card is about the <strong>strategy</strong>: how to combine them without overusing them, since resource hints have real costs.</li>
        <li>The most common real mistake: <strong>overusing <code>preconnect</code></strong> — each one opens an actual network connection (DNS + TCP + TLS), consuming CPU and memory even if the resource is never fetched.</li>
        <li><code>fetchpriority</code> is a newer, complementary attribute — it fine-tunes priority <strong>independent of</strong> where a resource appears in the HTML or which hint loaded it.</li>
        <li>Resource hints are a <strong>budget</strong>, not a checklist — every hint competes with the page's actual critical resources for limited bandwidth.</li>
      </ul>
    `,
    content: `
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">A Realistic Resource Hint Budget</h4>
      <img src="/images/resource-hints-budget.svg" alt="Resource Hints Budget" style="width: 100%; max-width: 600px; border-radius: 0.5rem; margin-bottom: 1rem;" />
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">The core mistake: treating hints as free</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;!-- ❌ Six preconnects — most browsers cap effective simultaneous connections anyway,
     and each one still costs CPU/memory even when unused --&gt;
&lt;link rel="preconnect" href="https://fonts.googleapis.com"&gt;
&lt;link rel="preconnect" href="https://fonts.gstatic.com"&gt;
&lt;link rel="preconnect" href="https://analytics.example.com"&gt;
&lt;link rel="preconnect" href="https://ads.example.com"&gt;
&lt;link rel="preconnect" href="https://cdn.example.com"&gt;
&lt;link rel="preconnect" href="https://api.example.com"&gt;
      </pre>
      <p style="margin-bottom: 0.5rem;"><strong>Why this backfires:</strong> Each <code>preconnect</code> triggers DNS + TCP + TLS immediately — real work, even if the connection sits idle. Keep <code>preconnect</code> to a small handful of origins you're <strong>highly confident</strong> will be used immediately.</p>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;"><code>fetchpriority</code> — a newer, complementary lever</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;!-- Hero/LCP image: bump priority above default --&gt;
&lt;img src="hero.jpg" alt="..." fetchpriority="high"&gt;

&lt;!-- Below-the-fold decorative image: deprioritize --&gt;
&lt;img src="decorative-banner.jpg" alt="" fetchpriority="low"&gt;

&lt;!-- Also works on preload links and scripts --&gt;
&lt;link rel="preload" href="critical.css" as="style" fetchpriority="high"&gt;
      </pre>
      <p style="margin-bottom: 0.5rem;">Ties to Card 16 — a hero image should get both <code>loading="eager"</code> and <code>fetchpriority="high"</code> for maximum load speed.</p>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Building a realistic hint strategy</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;head&gt;
  &lt;!-- Critical font used in visible heading, only discoverable via CSS --&gt;
  &lt;link rel="preload" href="/fonts/inter-bold.woff2" as="font" type="font/woff2" crossorigin&gt;

  &lt;!-- Origins we KNOW we'll fetch from immediately --&gt;
  &lt;link rel="preconnect" href="https://fonts.gstatic.com" crossorigin&gt;
  &lt;link rel="preconnect" href="https://api.example.com"&gt;

  &lt;!-- On cart page: checkout is highly likely next step --&gt;
  &lt;link rel="prefetch" href="/checkout-bundle.js"&gt;
&lt;/head&gt;
      </pre>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;"><code>dns-prefetch</code> as fallback for older browsers</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;link rel="dns-prefetch" href="https://fonts.gstatic.com"&gt;
&lt;link rel="preconnect" href="https://fonts.gstatic.com" crossorigin&gt;
      </pre>
      <p style="margin-bottom: 0.5rem;">Pairing both means older browsers that don't support full <code>preconnect</code> still get at least the DNS-resolution benefit.</p>
    `,
    interviewQuestion: {
      question: "What's the risk of adding too many preconnect hints?",
      answer: "Each one performs an actual DNS lookup, TCP handshake, and TLS negotiation immediately — real CPU/memory cost, whether or not the connection ends up being used. Overusing it can waste resources on origins that aren't actually fetched from soon, potentially delaying the page's genuinely critical resources."
    },
    keyTakeaways: [
      "Resource hints have real costs (bandwidth, connections, CPU) — treat them as a limited budget",
      "Keep <code>preconnect</code> to a small handful of origins you're confident will be used immediately",
      "<code>fetchpriority=\"high\"/\"low\"</code> overrides the browser's default priority calculation independently of hint type",
      "Pair <code>dns-prefetch</code> + <code>preconnect</code> for the same origin as a broader-browser-support fallback",
      "A hero/LCP image should combine <code>loading=\"eager\"</code> + <code>fetchpriority=\"high\"</code>"
    ],
  },
  {
    title: 'Lazy Loading',
    icon: '�',
    difficulty: 'Intermediate',
    category: 'Performance',
    interviewFrequency: 4,
    quickSummary: `
      <ul>
        <li>Three distinct tools: <strong><code>loading="lazy"</code></strong> (native, zero-JS, images/iframes only), <strong><code>IntersectionObserver</code></strong> (JS API, works on anything, full control), and <strong><code>content-visibility: auto</code></strong> (CSS, skips rendering work rather than deferring a network fetch).</li>
        <li>Key distinction: <code>loading="lazy"</code> and <code>IntersectionObserver</code> defer <strong>fetching</strong> a resource. <code>content-visibility</code> skips <strong>rendering</strong> work (layout/paint) for content that may already be loaded but is offscreen.</li>
        <li>Never lazy-load the LCP or above-the-fold element — this is a frequently-tested performance anti-pattern that actively hurts load performance.</li>
        <li><code>IntersectionObserver</code> replaced the old scroll-event pattern for lazy loading — it runs asynchronously off the main thread.</li>
      </ul>
    `,
    content: `
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Three Ways to Lazy Load</h4>
      <img src="/images/lazy-loading-methods.svg" alt="Lazy Loading Methods" style="width: 100%; max-width: 600px; border-radius: 0.5rem; margin-bottom: 1rem;" />
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;"><code>loading="lazy"</code> — the default first choice</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;img src="photo.jpg" alt="..." loading="lazy"&gt;
&lt;iframe src="https://maps.example.com/embed" loading="lazy" title="Map"&gt;&lt;/iframe&gt;
      </pre>
      <p style="margin-bottom: 0.5rem;">Native, zero JavaScript, well-supported. Only works on <code>&lt;img&gt;</code> and <code>&lt;iframe&gt;</code> — doesn't apply to background images or custom components.</p>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;"><code>IntersectionObserver</code> — the modern JS API</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
const observer = new IntersectionObserver((entries) =&gt; {
  entries.forEach((entry) =&gt; {
    if (entry.isIntersecting) {
      const el = entry.target;
      el.src = el.dataset.src;
      observer.unobserve(el);
    }
  });
}, { rootMargin: '200px' });

document.querySelectorAll('img[data-src]').forEach((img) =&gt; {
  observer.observe(img);
});
      </pre>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;img data-src="photo.jpg" alt="..." class="lazy-placeholder"&gt;
      </pre>
      <p style="margin-bottom: 0.5rem;"><strong>Why this replaced scroll events:</strong> Old lazy loading used <code>scroll</code> events + manual <code>getBoundingClientRect()</code> on every tick — expensive and janky. <code>IntersectionObserver</code> runs asynchronously off the main thread and only fires when visibility changes.</p>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;"><code>content-visibility: auto</code> — CSS-only rendering skip</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
.long-article-section {
  content-visibility: auto;
  contain-intrinsic-size: 0 500px;
}
      </pre>
      <p style="margin-bottom: 0.5rem;">Skips layout/paint work for offscreen content — different from deferring network fetch. Great for very long pages with many sections. <code>contain-intrinsic-size</code> prevents layout shift.</p>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">The anti-pattern to avoid</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;!-- ❌ Never lazy-load the hero/LCP image --&gt;
&lt;img src="hero.jpg" alt="..." loading="lazy"&gt;

&lt;!-- ✅ --&gt;
&lt;img src="hero.jpg" alt="..." loading="eager" fetchpriority="high"&gt;
      </pre>
      <p style="margin-bottom: 0.5rem;">Lazy-loading above-the-fold content actively delays it — hurts LCP and Core Web Vitals.</p>
    `,
    interviewQuestion: {
      question: "What's the difference between loading=\"lazy\" and content-visibility: auto?",
      answer: "loading=\"lazy\" defers the network fetch of an image/iframe until it's near the viewport. content-visibility: auto skips rendering work (layout and paint) for offscreen content that may already be loaded — a different performance lever entirely, more relevant to pages with heavy DOM/layout cost than network cost."
    },
    keyTakeaways: [
      "<code>loading=\"lazy\"</code> = native, zero-JS, images/iframes only — always the first choice when it applies",
      "<code>IntersectionObserver</code> = JS API for anything native lazy loading can't handle, replacing the old expensive scroll-event approach",
      "<code>content-visibility: auto</code> skips rendering work for offscreen content — a different lever than deferring network fetches",
      "<code>contain-intrinsic-size</code> is required alongside <code>content-visibility</code> to prevent layout shift",
      "Never lazy-load the LCP/above-the-fold element — this actively hurts load performance"
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
