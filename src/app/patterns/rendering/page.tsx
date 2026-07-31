import TopicPage from '@/components/TopicPage';

const renderingSections = [
  {
    title: 'References & Guides',
    icon: '📖',
    links: [
      { title: 'Google Web Dev Rendering Guide', url: 'https://web.dev/articles/rendering', description: 'Overview of web rendering strategies' },
      { title: 'React Official Rendering Docs', url: 'https://react.dev/learn/rendering', description: 'How React renders components' },
    ],
  },
];

export function generateStaticParams() {
  return [{ topic: 'rendering' }];
}

export default function RenderingPatternPage() {
  return (
    <TopicPage
      title="Modern Web Rendering"
      category="Patterns"
      categorySlug="patterns"
      description="A reference guide covering how web rendering evolved, when to use each strategy (CSR, SSR, SSG, ISR, RSC), and the full request journey."
      icon="🎨"
      sections={renderingSections}
    >
      <div className="article-content">
        {/* Video Overview */}
        <div className="video-box">
          <h3>📹 Modern Web Rendering Overview</h3>
          <div className="video-wrapper">
            <video controls poster="/Redndering/images/0-what-is-rendering.png">
              <source src="/video/Modern_Web_Rendering.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <h1>Modern Web Rendering: CSR → SSR → SSG → ISR → RSC</h1>

        <p>
          A reference guide covering how web rendering evolved, when to use each strategy,
          and the full journey a React app takes from local dev to painted pixels.
        </p>

        <blockquote>
          <p>
            Source: synthesized from personal NotebookLM study artifacts (audio + video
            transcripts on Modern Web Rendering and the React Request Journey).
          </p>
        </blockquote>

        <hr />

        <h2>0. What Does &quot;Rendering&quot; Actually Mean?</h2>

        <p>
          Every strategy in this guide is really just answering the same two questions differently:
        </p>

        <ul>
          <li><strong>Where</strong> does the HTML get generated — on the server, or in the user&apos;s browser?</li>
          <li><strong>Whose CPU</strong> does the work — the server&apos;s, or the visitor&apos;s device?</li>
        </ul>

        <p>
          That&apos;s it. Everything else (CSR, SSR, SSG, ISR, RSC) is just a different combination of answers to those two questions.
        </p>

        <div className="article-image-box">
          <img src="/Redndering/images/0-what-is-rendering.png" alt="What is rendering diagram" />
        </div>

        <table>
          <thead>
            <tr>
              <th>Strategy Type</th>
              <th>HTML generated <strong>where</strong>?</th>
              <th>Using <strong>whose CPU</strong>?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Server-side</strong> (SSR, SSG, ISR, RSC)</td>
              <td>On the server (or at build time)</td>
              <td>The server&apos;s CPU/RAM</td>
            </tr>
            <tr>
              <td><strong>Client-side</strong> (CSR)</td>
              <td>In the browser, after JS runs</td>
              <td>The user&apos;s own device</td>
            </tr>
          </tbody>
        </table>

        <hr />

        <h2>1. The Rendering Spectrum</h2>

        <p>
          Each step didn&apos;t replace the last — it added a new tool. Modern frameworks (Next.js, Remix)
          let you mix all five <strong>per route, even per component</strong>.
        </p>

        <div className="article-image-box">
          <img src="/Redndering/images/1-timeline-overview.png" alt="Timeline overview of rendering evolution" />
        </div>

        <hr />

        <h2>2. Client-Side Rendering (CSR)</h2>

        <p>
          The server is basically a file host: it hands back an empty <code>&lt;div id=&quot;root&quot;&gt;</code>
          and a JavaScript bundle. The browser&apos;s CPU does all the work — fetching data, building the DOM, painting pixels.
        </p>

        <div className="article-image-box">
          <img src="/Redndering/images/2-csr-flow.png" alt="Client-side rendering flow diagram" />
        </div>

        <p><strong>Optimizations:</strong></p>
        <ul>
          <li><strong>Code splitting</strong> — only ship the JS needed for the current route</li>
          <li><strong>Prefetching</strong> — fetch data before the user clicks</li>
        </ul>

        <p><strong>Trade-off:</strong> TTFB is fast, but FCP/LCP lag because the UI is gated behind bundle download + sequential fetches.</p>

        <hr />

        <h2>3. Server-Side Rendering (SSR)</h2>

        <p>
          The server generates full HTML <strong>on every request</strong>, solving the blank-screen problem.
        </p>

        <div className="article-image-box">
          <img src="/Redndering/images/3-ssr-flow.png" alt="Server-side rendering flow diagram" />
        </div>

        <p><strong>Best for:</strong> dashboards, checkout pages — anywhere data freshness is non-negotiable.</p>

        <p><strong>Trade-off:</strong> excellent LCP and SEO, but higher infra cost since the server burns CPU/RAM per visitor.</p>

        <hr />

        <h2>4. Static Site Generation (SSG)</h2>

        <p>
          Rendering moves to <strong>build time</strong>. HTML is &quot;frozen&quot; and served from a CDN edge — no server compute per request.
        </p>

        <div className="article-image-box">
          <img src="/Redndering/images/4-ssg-isr-flow.png" alt="SSG and ISR flow diagram" />
        </div>

        <p><strong>Best for:</strong> blogs, docs, marketing pages — content that doesn&apos;t change often.</p>

        <p><strong>Trade-off:</strong> lowest possible TTFB, but content is only as fresh as the last build.</p>

        <hr />

        <h2>5. Incremental Static Regeneration (ISR)</h2>

        <p>
          A hybrid: pages stay static, but regenerate in the background after a set interval.
        </p>

        <p><strong>Best for:</strong> e-commerce catalogs, news feeds — mostly-static content that still needs periodic freshness.</p>

        <hr />

        <h2>6. React Server Components (RSC)</h2>

        <p>
          Not just &quot;SSR v2.&quot; RSC lets server and client components work in true synergy: server components never ship to the browser at all.
        </p>

        <div className="article-image-box">
          <img src="/Redndering/images/5-rsc-diagram.png" alt="React Server Components diagram" />
        </div>

        <p><strong>Key properties:</strong></p>
        <ul>
          <li>Server components access DB/filesystem directly — no intermediate API</li>
          <li>They render to an <strong>RSC payload</strong>, not HTML</li>
          <li>Client merges the payload into the existing UI tree <strong>without losing state</strong> and <strong>without hydrating</strong> those server-only parts</li>
          <li>Can shrink client JS bundles by roughly <strong>30–50%</strong></li>
        </ul>

        <hr />

        <h2>7. Comparison Table</h2>

        <table>
          <thead>
            <tr>
              <th>Strategy</th>
              <th>Rendered When</th>
              <th>TTFB</th>
              <th>LCP</th>
              <th>Server Cost</th>
              <th>Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>CSR</strong></td>
              <td>In browser</td>
              <td>Fast</td>
              <td>Slow (bundle-gated)</td>
              <td>Low</td>
              <td>SPAs, internal tools, fast HMR in dev</td>
            </tr>
            <tr>
              <td><strong>SSR</strong></td>
              <td>Per request</td>
              <td>Medium</td>
              <td>Fast</td>
              <td>High (per visitor)</td>
              <td>Dashboards, checkout, personalized pages</td>
            </tr>
            <tr>
              <td><strong>SSG</strong></td>
              <td>At build time</td>
              <td>Fastest</td>
              <td>Fast</td>
              <td>Lowest (CDN only)</td>
              <td>Blogs, docs, marketing</td>
            </tr>
            <tr>
              <td><strong>ISR</strong></td>
              <td>Build + background refresh</td>
              <td>Fastest</td>
              <td>Fast</td>
              <td>Low</td>
              <td>Catalogs, news feeds</td>
            </tr>
            <tr>
              <td><strong>RSC</strong></td>
              <td>On server, per request</td>
              <td>Fast</td>
              <td>Fast</td>
              <td>Medium</td>
              <td>Data-heavy components, minimizing JS bundle</td>
            </tr>
          </tbody>
        </table>

        <hr />

        <h2>8. The Full Request Journey</h2>

        <p>From <code>npm run dev</code> to painted pixels in the user&apos;s browser.</p>

        <div className="article-image-box">
          <img src="/Redndering/images/6-request-journey.png" alt="Full request journey diagram" />
        </div>

        <p><strong>Step-by-step:</strong></p>

        <ol>
          <li><strong>Local dev</strong> — CSR + HMR for fast iteration while coding</li>
          <li><strong>CI/CD build</strong> — the pipeline branches: SSG pre-renders HTML now; SSR only compiles logic and waits for a live request</li>
          <li><strong>Packaging</strong> — Docker containers give process isolation and environment consistency (Nginx for static files, Node.js for on-demand rendering)</li>
          <li><strong>Network</strong> — DNS resolves the domain, TCP/TLS secures the connection, the browser sends its <code>GET</code> request</li>
          <li><strong>Critical Rendering Path</strong> — parse HTML → DOM, parse CSS → CSSOM, execute JS, layout, then paint — this is when the user actually sees and can use the page</li>
        </ol>

        {/* Video 2 */}
        <div className="video-box">
          <h3>📹 The Full Request Journey Video</h3>
          <div className="video-wrapper">
            <video controls poster="/Redndering/images/6-request-journey.png">
              <source src="/video/React_Request_Journey.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </TopicPage>
  );
}
