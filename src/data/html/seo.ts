import { ResourceSection } from '@/components/ResourceGuide';

export const seoData: ResourceSection[] = [
  {
    title: 'Essential Meta Tags',
    icon: '🏷️',
    difficulty: 'Beginner',
    category: 'SEO',
    interviewFrequency: 3,
    quickSummary: `
      <ul>
        <li>Meta tags provide information about your page to search engines and browsers</li>
        <li><strong>charset</strong> specifies character encoding (UTF-8 is standard)</li>
        <li><strong>viewport</strong> controls responsive design settings</li>
        <li><strong>description</strong> provides page summary for search results (crucial for CTR)</li>
        <li><strong>robots</strong> controls crawler behavior (index, follow, noindex, nofollow)</li>
      </ul>
    `,
    content: `
      <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Essential meta tags</h4>
      <pre class="bg-gray-900 text-green-400 p-3 rounded mb-4 overflow-x-auto text-xs">
&lt;meta charset="UTF-8"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
&lt;meta name="description" content="Page description for search results"&gt;
&lt;meta name="keywords" content="relevant, keywords, for, page"&gt;
&lt;meta name="author" content="Author name"&gt;
&lt;meta name="robots" content="index, follow"&gt;
      </pre>
    `,
    interviewQuestion: {
      question: "What's the purpose of the viewport meta tag?",
      answer: "The viewport meta tag controls how a webpage is displayed on mobile devices. Setting width=device-width makes the page width match the screen width, and initial-scale=1.0 sets the initial zoom level. This is essential for responsive design and mobile-friendly SEO."
    },
    keyTakeaways: [
      "Always include <code>charset=\"UTF-8\"</code> as the first meta tag",
      "<code>viewport</code> meta tag is essential for responsive design",
      "<code>description</code> meta tag impacts click-through rate from search results",
      "<code>robots</code> meta tag controls search engine crawling behavior",
      "<code>keywords</code> meta tag has little SEO value in modern search engines"
    ],
  },
  {
    title: 'References',
    icon: '📖',
    links: [
      { title: 'MDN Meta Tags', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta', description: 'Meta element reference' },
    ],
  },
];
