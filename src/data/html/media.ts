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
    title: 'References',
    icon: '📖',
    links: [
      { title: 'MDN Image and Video Guide', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding', description: 'HTML media guide' },
      { title: 'Responsive Images', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images', description: 'Responsive image techniques' },
    ],
  },
];
