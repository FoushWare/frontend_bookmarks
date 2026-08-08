import { ResourceSection } from '@/components/ResourceGuide';

export const mediaData: ResourceSection[] = [
  {
    title: 'Images Deep Dive',
    icon: '🖼️',
    difficulty: 'Intermediate',
    category: 'Performance',
    interviewFrequency: 4,
    quickSummary: `
      <ul>
        <li>Modern responsive images aren't about CSS <code>max-width: 100%</code> alone — <code>srcset</code> + <code>sizes</code> let the <strong>browser itself</strong> choose the best-fit image file based on viewport width and device pixel ratio, saving real bandwidth</li>
        <li><code>&lt;picture&gt;</code> solves a <strong>different</strong> problem than <code>srcset</code>/<code>sizes</code>: "art direction" (different crops/images per breakpoint) and format fallback (serve AVIF/WebP with a JPEG fallback for older browsers)</li>
        <li><code>loading="lazy"</code> gives free lazy-loading with zero JavaScript and no Intersection Observer code needed</li>
      </ul>
    `,
    content: `
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">How srcset + sizes Choose an Image</h4>
      <img src="/images/responsive-images.svg" alt="Responsive Images Diagram" style="width: 100%; max-width: 600px; border-radius: 0.5rem; margin-bottom: 1rem;" />
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;"><code>srcset</code> + <code>sizes</code> — width descriptors</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;img
  src="medium.jpg"
  srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
  sizes="(max-width: 600px) 100vw, 50vw"
  alt="Mountain landscape at sunset"
&gt;
      </pre>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;"><code>&lt;picture&gt;</code> — art direction and format fallback</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;picture&gt;
  &lt;source srcset="photo.avif" type="image/avif"&gt;
  &lt;source srcset="photo.webp" type="image/webp"&gt;
  &lt;img src="photo.jpg" alt="Product photo"&gt;
&lt;/picture&gt;
      </pre>
    `,
    interviewQuestion: {
      question: "What's the difference between srcset/sizes and <picture>?",
      answer: "srcset/sizes lets the browser choose the best-fit resolution of the same image based on viewport size and pixel density. <picture> is for serving genuinely different image sources — different crops for art direction, or modern image formats with fallbacks — where the developer, not the browser, decides which source applies via media or type conditions."
    },
    keyTakeaways: [
      "<code>srcset</code> + <code>sizes</code> = same image, browser picks best resolution based on viewport + DPR",
      "<code>&lt;picture&gt;</code> = different images per condition (art direction) or format fallback (AVIF/WebP → JPEG)",
      "Never <code>loading=\"lazy\"</code> an above-the-fold/LCP image — it delays what should load immediately",
      "Always set <code>width</code>/<code>height</code> attributes to prevent layout shift, even with responsive CSS overriding display size",
      "Modern formats (AVIF, WebP) via <code>&lt;picture&gt;</code> can cut image size 30-50% vs JPEG at similar quality"
    ],
  },
  {
    title: 'Video & Audio',
    icon: '🎬',
    difficulty: 'Intermediate',
    category: 'Media',
    interviewFrequency: 3,
    quickSummary: `
      <ul>
        <li><code>&lt;video&gt;</code> and <code>&lt;audio&gt;</code> support multiple <code>&lt;source&gt;</code> children so the browser can pick whichever format it actually supports — no single video/audio format works everywhere</li>
        <li><code>&lt;track&gt;</code> adds captions/subtitles — not just a nice-to-have, it's a real accessibility requirement (WCAG) for any video with spoken content</li>
        <li>The classic gotcha: <strong>autoplay only works if the video is also muted</strong>, or the user has already interacted with the page. Browsers block unmuted autoplay to stop unwanted noise</li>
        <li><code>preload</code> controls how much the browser fetches before playback starts — a real, often-overlooked performance lever</li>
      </ul>
    `,
    content: `
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Video Element Structure</h4>
      <img src="/images/video-element-structure.svg" alt="Video Element Structure" style="width: 100%; max-width: 600px; border-radius: 0.5rem; margin-bottom: 1rem;" />
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Multiple sources — letting the browser pick a supported format</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;video controls poster="thumbnail.jpg" width="800" height="450"&gt;
  &lt;source src="video.webm" type="video/webm"&gt;
  &lt;source src="video.mp4" type="video/mp4"&gt;
  &lt;track kind="captions" src="captions-en.vtt" srclang="en" label="English" default&gt;
  &lt;p&gt;Your browser doesn't support HTML5 video. &lt;a href="video.mp4"&gt;Download it here&lt;/a&gt;.&lt;/p&gt;
&lt;/video&gt;
      </pre>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;"><code>&lt;track&gt;</code> — captions aren't optional for accessibility</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;video controls&gt;
  &lt;source src="video.mp4" type="video/mp4"&gt;
  &lt;track kind="captions" src="en.vtt" srclang="en" label="English" default&gt;
  &lt;track kind="captions" src="es.vtt" srclang="es" label="Español"&gt;
  &lt;track kind="descriptions" src="en-desc.vtt" srclang="en" label="Audio descriptions"&gt;
&lt;/video&gt;
      </pre>
      <table style="width: 100%; border-collapse: collapse; font-size: 0.8rem; margin-bottom: 1rem;">
        <tr style="border-bottom: 1px solid var(--border);">
          <th style="text-align: left; padding: 0.5rem;">kind value</th>
          <th style="text-align: left; padding: 0.5rem;">Purpose</th>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>captions</code></td>
          <td style="padding: 0.5rem;">Transcribes dialogue + non-speech sounds for deaf/hard-of-hearing</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>subtitles</code></td>
          <td style="padding: 0.5rem;">Just dialogue translation, assumes viewer can hear</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>descriptions</code></td>
          <td style="padding: 0.5rem;">Narrates visual content for blind/low-vision users</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>chapters</code></td>
          <td style="padding: 0.5rem;">Navigation points within the video</td>
        </tr>
      </table>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Autoplay — the muted requirement</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;!-- ❌ Will be blocked by modern browsers --&gt;
&lt;video autoplay&gt;
  &lt;source src="video.mp4" type="video/mp4"&gt;
&lt;/video&gt;

&lt;!-- ✅ Works — muted autoplay is allowed --&gt;
&lt;video autoplay muted loop playsinline&gt;
  &lt;source src="video.mp4" type="video/mp4"&gt;
&lt;/video&gt;
      </pre>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;"><code>preload</code> — a real performance lever</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;video preload="none"&gt;    &lt;!-- Don't fetch until user hits play --&gt;
&lt;video preload="metadata"&gt; &lt;!-- Fetch just duration/dimensions --&gt;
&lt;video preload="auto"&gt;     &lt;!-- Browser decides, often fetches data upfront --&gt;
      </pre>
    `,
    interviewQuestion: {
      question: "What's the difference between captions and subtitles on a <track> element?",
      answer: "Captions transcribe spoken dialogue and important non-speech audio cues (like '[phone ringing]'), intended for deaf/hard-of-hearing users. Subtitles only translate dialogue and assume the viewer can already hear sound effects — they're for language accessibility, not hearing accessibility."
    },
    keyTakeaways: [
      "Multiple <code>&lt;source&gt;</code> elements let the browser pick a supported format — browser tries top to bottom",
      "<code>&lt;track kind=\"captions\"&gt;</code> is an accessibility requirement, not a nice-to-have — know captions vs subtitles vs descriptions",
      "<code>autoplay</code> requires <code>muted</code> to reliably work in modern browsers",
      "<code>playsinline</code> prevents iOS Safari from forcing fullscreen on autoplay",
      "<code>preload=\"none\"/\"metadata\"/\"auto\"</code> is a real, often-overlooked bandwidth/performance lever"
    ],
  },
  {
    title: 'iframe & Security',
    icon: '🔒',
    difficulty: 'Advanced',
    category: 'Media',
    interviewFrequency: 3,
    quickSummary: `
      <ul>
        <li><code>&lt;iframe&gt;</code> embeds another document inside your page — but by default, it runs with <strong>full privileges</strong>: scripts, forms, popups, same-origin access, all enabled. This is a real security surface.</li>
        <li><code>sandbox</code> flips the default to <strong>deny everything</strong>, then you add back only the specific capabilities the embedded content actually needs.</li>
        <li>Critical gotcha: combining <code>allow-scripts</code> + <code>allow-same-origin</code> together lets the framed content <strong>remove its own sandbox restrictions via JavaScript</strong> — effectively defeating the sandbox entirely.</li>
        <li><code>loading="lazy"</code> works on iframes too, just like images — genuinely useful for embedded maps/videos/widgets.</li>
      </ul>
    `,
    content: `
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">iframe Sandbox Permissions</h4>
      <img src="/images/iframe-sandbox.svg" alt="iframe Sandbox Diagram" style="width: 100%; max-width: 600px; border-radius: 0.5rem; margin-bottom: 1rem;" />
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Basic embed and why security matters here</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;iframe src="https://example.com/widget" title="Weather widget"&gt;&lt;/iframe&gt;
      </pre>
      <p style="margin-bottom: 0.5rem;"><code>title</code> is required for accessibility — screen readers announce it so users know what the embedded frame contains before deciding whether to interact with it.</p>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;"><code>sandbox</code> — deny by default, add back selectively</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;!-- Maximally restrictive: sandbox with no value = everything blocked --&gt;
&lt;iframe src="untrusted-content.html" sandbox title="Preview"&gt;&lt;/iframe&gt;

&lt;!-- Add back only what's actually needed --&gt;
&lt;iframe
  src="widget.html"
  sandbox="allow-scripts allow-forms"
  title="Contact form widget"
&gt;&lt;/iframe&gt;
      </pre>
      <table style="width: 100%; border-collapse: collapse; font-size: 0.8rem; margin-bottom: 1rem;">
        <tr style="border-bottom: 1px solid var(--border);">
          <th style="text-align: left; padding: 0.5rem;">Sandbox flag</th>
          <th style="text-align: left; padding: 0.5rem;">What it re-enables</th>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>allow-scripts</code></td>
          <td style="padding: 0.5rem;">JavaScript execution inside the frame</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>allow-same-origin</code></td>
          <td style="padding: 0.5rem;">Treats frame as same-origin (cookie/storage access)</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>allow-forms</code></td>
          <td style="padding: 0.5rem;">Form submission</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>allow-popups</code></td>
          <td style="padding: 0.5rem;"><code>window.open()</code>, <code>target="_blank"</code> links</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>allow-modals</code></td>
          <td style="padding: 0.5rem;"><code>alert()</code>, <code>confirm()</code>, <code>prompt()</code></td>
        </tr>
        <tr>
          <td style="padding: 0.5rem;"><code>allow-top-navigation</code></td>
          <td style="padding: 0.5rem;">Frame can navigate the parent page — usually dangerous</td>
        </tr>
      </table>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">The critical combo to know: <code>allow-scripts</code> + <code>allow-same-origin</code></h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;!-- ⚠️ This combination effectively defeats the sandbox --&gt;
&lt;iframe sandbox="allow-scripts allow-same-origin" src="untrusted.html"&gt;&lt;/iframe&gt;
      </pre>
      <p style="margin-bottom: 0.5rem;"><strong>Why this is a well-known gotcha:</strong> <code>allow-scripts</code> alone lets JS run, but the frame is still isolated to a unique opaque origin. <code>allow-same-origin</code> alone gives origin access, but with no scripts to exploit it. <strong>Together</strong>, the frame's own JavaScript can leverage same-origin privileges — effectively neutralizing the sandbox.</p>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;"><code>allow</code> attribute — a different mechanism, for browser features</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;iframe
  src="https://meet.example.com/room"
  allow="camera; microphone; fullscreen"
  title="Video call"
&gt;&lt;/iframe&gt;
      </pre>
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;"><code>loading="lazy"</code> on iframes</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;iframe src="https://maps.example.com/embed" loading="lazy" title="Store location map"&gt;&lt;/iframe&gt;
      </pre>
    `,
    interviewQuestion: {
      question: "Why is combining sandbox=\"allow-scripts allow-same-origin\" risky?",
      answer: "Individually, each restriction is meaningful — scripts alone can't access same-origin data, and same-origin alone has no scripts to exploit it. Combined, the framed content's own JavaScript gains enough capability to effectively neutralize the sandbox, so this pairing should only be used for fully trusted content."
    },
    keyTakeaways: [
      "iframes run with full privileges by default — <code>sandbox</code> flips that to deny-by-default",
      "Never combine <code>allow-scripts</code> + <code>allow-same-origin</code> for untrusted content — it effectively defeats the sandbox",
      "<code>title</code> on an iframe is required for accessibility, announced by screen readers",
      "<code>allow</code> (Permissions Policy) ≠ <code>sandbox</code> — different mechanisms for different concerns",
      "<code>loading=\"lazy\"</code> works on iframes exactly like it does on images"
    ],
  },
  {
    title: 'References',
    icon: '📖',
    links: [
      { title: 'MDN Image and Video Guide', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding', description: 'HTML media guide' },
      { title: 'Responsive Images', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images', description: 'Responsive image techniques' },
      { title: 'MDN Video Element', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video', description: 'Video element reference' },
      { title: 'MDN Audio Element', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio', description: 'Audio element reference' },
      { title: 'MDN iframe Element', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe', description: 'iframe element reference' },
    ],
  },
];
