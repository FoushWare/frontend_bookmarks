import { notFound } from 'next/navigation';
import TopicPage from '@/components/TopicPage';
import { ResourceSection } from '@/components/ResourceGuide';
import Link from 'next/link';

interface TopicData {
  title: string;
  icon: string;
  description: string;
  sections: ResourceSection[];
  content?: React.ReactNode;
}

const cssTopicDetails: Record<string, TopicData> = {
  flexbox: {
    title: 'Flexbox',
    icon: '📦',
    description: 'Master flexible box layout for one-dimensional layouts along a main axis and cross axis.',
    sections: [
      {
        title: 'Practice Projects',
        icon: '🛠️',
        links: [
          {
            title: 'Flexbox Projects',
            url: '/projects/flexbox',
            description: 'Interactive coding challenges to master flexbox concepts',
          },
        ],
      },
      {
        title: 'Gaming Practice',
        icon: '🎮',
        links: [
          { title: 'Flexbox Froggy', url: 'https://flexboxfroggy.com', description: 'Help a frog reach its lilypad with flexbox' },
          { title: 'Flexbox Defense', url: 'http://flexboxdefense.com', description: 'Tower defense game powered by flexbox' },
        ],
      },
      {
        title: 'References & Guides',
        icon: '📖',
        links: [
          { title: 'CSS-Tricks Flexbox Guide', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox', description: 'Complete visual guide' },
          { title: 'MDN Flexbox Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout', description: 'Official documentation' },
        ],
      },
    ],
    content: (
      <div className="article-content">
        <h1>Flexbox Reference Guide</h1>
        <p>A practical, visual reference for CSS Flexbox — one-dimensional layout along a <strong>main axis</strong> and a <strong>cross axis</strong>.</p>

        <blockquote>
          <p>Flexbox lays out children of a container in a single row or column, distributing space and alignment along that line. For two-dimensional layout (rows <em>and</em> columns together), reach for <Link href="/css/grid">Grid</Link> instead.</p>
        </blockquote>

        <hr />

        <h2>1. The Two Axes</h2>
        <p>Every flex container has:</p>
        <ul>
          <li>A <strong>main axis</strong> — the direction items are laid out (controlled by <code>flex-direction</code>)</li>
          <li>A <strong>cross axis</strong> — perpendicular to the main axis</li>
        </ul>
        <p>Everything in flexbox (<code>justify-content</code>, <code>align-items</code>, <code>flex-grow</code>, etc.) is defined <strong>relative to these axes</strong>, not literally &quot;horizontal/vertical.&quot;</p>
        <pre><code>{`.container {
  display: flex;
}`}</code></pre>

        <hr />

        <h2>2. flex-direction</h2>
        <p>Sets the main axis and the order items flow along it.</p>
        <div className="article-image-box">
          <img src="/css-flex-grid/flex-direction.svg" alt="flex-direction diagram" />
        </div>
        <pre><code>{`.container { flex-direction: row; }            /* default: left → right */
.container { flex-direction: row-reverse; }    /* right → left */
.container { flex-direction: column; }         /* top → bottom */
.container { flex-direction: column-reverse; } /* bottom → top */`}</code></pre>

        <hr />

        <h2>3. justify-content — alignment along the main axis</h2>
        <div className="article-image-box">
          <img src="/css-flex-grid/flex-justify-content.svg" alt="justify-content diagram" />
        </div>
        <pre><code>{`.container { justify-content: flex-start; }    /* default: pack at start */
.container { justify-content: flex-end; }      /* pack at end */
.container { justify-content: center; }        /* pack at center */
.container { justify-content: space-between; } /* first/last flush, gaps equal */
.container { justify-content: space-around; }  /* equal space around each item */
.container { justify-content: space-evenly; }  /* equal space between AND at edges */`}</code></pre>

        <hr />

        <h2>4. align-items — alignment along the cross axis</h2>
        <div className="article-image-box">
          <img src="/css-flex-grid/flex-align-items.svg" alt="align-items diagram" />
        </div>
        <pre><code>{`.container { align-items: flex-start; } /* top of the cross axis */
.container { align-items: center; }     /* centered on the cross axis */
.container { align-items: flex-end; }   /* bottom of the cross axis */
.container { align-items: stretch; }    /* default: fill the cross axis */
.container { align-items: baseline; }   /* align by text baseline */`}</code></pre>

        <hr />

        <h2>5. flex-wrap</h2>
        <div className="article-image-box">
          <img src="/css-flex-grid/flex-wrap.svg" alt="flex-wrap diagram" />
        </div>
        <pre><code>{`.container { flex-wrap: nowrap; }       /* default: single line, items shrink */
.container { flex-wrap: wrap; }         /* overflow moves to new lines */
.container { flex-wrap: wrap-reverse; } /* wraps, but stacks new lines above */`}</code></pre>

        <hr />

        <h2>6. flex-grow, flex-shrink, flex-basis</h2>
        <div className="article-image-box">
          <img src="/css-flex-grid/flex-grow-shrink-basis.svg" alt="flex-grow-shrink-basis diagram" />
        </div>
        <pre><code>{`.item {
  flex-grow: 1;    /* share of extra space this item takes */
  flex-shrink: 1;  /* how much this item shrinks when space is tight */
  flex-basis: 200px; /* starting size before grow/shrink kicks in */
}

/* shorthand — almost always prefer this */
.item { flex: 1 1 200px; }`}</code></pre>

        <hr />

        <h2>7. gap</h2>
        <pre><code>{`.container {
  display: flex;
  gap: 16px;          /* same gap row and column */
  gap: 16px 24px;      /* row-gap column-gap */
}`}</code></pre>

        <hr />

        <h2>8. Common Patterns</h2>
        <h3>Perfect centering (both axes)</h3>
        <pre><code>{`.container {
  display: flex;
  justify-content: center;
  align-items: center;
}`}</code></pre>

        <h3>Sticky footer</h3>
        <pre><code>{`.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main-content { flex: 1; }`}</code></pre>

        <hr />
        <p><em>Related: <Link href="/css/grid">CSS Grid Reference</Link></em></p>
      </div>
    ),
  },
  grid: {
    title: 'CSS Grid',
    icon: '🔲',
    description: 'Master two-dimensional layout controlling rows and columns simultaneously.',
    sections: [
      {
        title: 'Practice Projects',
        icon: '🛠️',
        links: [
          { title: 'Grid Projects', url: '/projects/grid', description: 'Interactive coding challenges to master grid concepts' },
        ],
      },
      {
        title: 'Gaming Practice',
        icon: '🎮',
        links: [
          { title: 'CSS Grid Garden', url: 'https://cssgridgarden.com', description: 'Learn grid layout while growing a carrot garden' },
        ],
      },
      {
        title: 'References & Guides',
        icon: '📖',
        links: [
          { title: 'CSS-Tricks Grid Guide', url: 'https://css-tricks.com/snippets/css/complete-guide-grid', description: 'Comprehensive guide' },
          { title: 'MDN Grid Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout', description: 'Official reference' },
        ],
      },
    ],
    content: (
      <div className="article-content">
        <h1>CSS Grid Reference Guide</h1>
        <p>A practical, visual reference for CSS Grid — <strong>two-dimensional</strong> layout, controlling rows and columns together.</p>

        <blockquote>
          <p>Where Flexbox is best at distributing items along one line, Grid is best when you need to control both rows and columns at once. See <Link href="/css/flexbox">Flexbox Reference</Link> for one-dimensional layout.</p>
        </blockquote>

        <hr />

        <h2>1. Setting Up a Grid</h2>
        <pre><code>{`.container {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: 80px auto 60px;
  gap: 16px;
}`}</code></pre>

        <hr />

        <h2>2. grid-template-columns / grid-template-rows and fr</h2>
        <p><code>fr</code> (fraction unit) distributes <em>remaining</em> space proportionally.</p>
        <div className="article-image-box">
          <img src="/css-flex-grid/grid-template-columns.svg" alt="grid-template-columns diagram" />
        </div>
        <pre><code>{`.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 80px 80px;
}`}</code></pre>

        <hr />

        <h2>3. grid-template-areas — naming your layout</h2>
        <div className="article-image-box">
          <img src="/css-flex-grid/grid-template-areas.svg" alt="grid-template-areas diagram" />
        </div>
        <pre><code>{`.layout {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 80px 1fr 60px;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }`}</code></pre>

        <hr />

        <h2>4. Line-based placement — grid-column / grid-row</h2>
        <div className="article-image-box">
          <img src="/css-flex-grid/grid-line-placement.svg" alt="grid-line-placement diagram" />
        </div>
        <pre><code>{`.item {
  grid-column: 2 / 4; /* start at col line 2, end at col line 4 */
  grid-row: 1 / 3;    /* start at row line 1, end at row line 3 */
}`}</code></pre>

        <hr />

        <h2>5. Responsive Grids without Media Queries (auto-fit &amp; minmax)</h2>
        <div className="article-image-box">
          <img src="/css-flex-grid/grid-auto-fit-minmax.svg" alt="grid-auto-fit-minmax diagram" />
        </div>
        <pre><code>{`.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}`}</code></pre>

        <hr />

        <h2>6. Common Grid Patterns</h2>
        <h3>Holy Grail Layout</h3>
        <pre><code>{`.page {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "nav    main   aside"
    "footer footer footer";
  min-height: 100vh;
}`}</code></pre>

        <hr />
        <p><em>Related: <Link href="/css/flexbox">Flexbox Reference</Link></em></p>
      </div>
    ),
  },
  background: {
    title: 'Background',
    icon: '🖼️',
    description: 'Master background colors, images, gradients, clip paths, and blend modes.',
    sections: [
      {
        title: 'References',
        icon: '📖',
        links: [
          { title: 'CSS Gradient Generator', url: 'https://cssgradient.io', description: 'Interactive gradient tool' },
          { title: 'MDN Background Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background', description: 'Official reference' },
        ],
      },
    ],
  },
  border: {
    title: 'Border',
    icon: '🔲',
    description: 'Master borders, outline, border-radius, and box shadows.',
    sections: [
      {
        title: 'References',
        icon: '📖',
        links: [
          { title: 'MDN Border Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border', description: 'Official documentation' },
        ],
      },
    ],
  },
  frameworks: {
    title: 'CSS Frameworks',
    icon: '⚡',
    description: 'Explore utility-first and component frameworks like Tailwind CSS, Bootstrap, and Bulma.',
    sections: [
      {
        title: 'Frameworks',
        icon: '🚀',
        links: [
          { title: 'Tailwind CSS Docs', url: 'https://tailwindcss.com/docs', description: 'Utility-first CSS framework' },
        ],
      },
    ],
  },
  images: {
    title: 'CSS Images & Media',
    icon: '🖼️',
    description: 'Master object-fit, aspect-ratio, responsiveness, and picture elements.',
    sections: [
      {
        title: 'References',
        icon: '📖',
        links: [
          { title: 'MDN object-fit Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit', description: 'Object fit guide' },
        ],
      },
    ],
  },
  responsive: {
    title: 'Responsive Design',
    icon: '📱',
    description: 'Master media queries, fluid typography, container queries, and mobile-first design.',
    sections: [
      {
        title: 'References',
        icon: '📖',
        links: [
          { title: 'MDN Responsive Design', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design', description: 'Responsive design guide' },
        ],
      },
    ],
  },
  sizing: {
    title: 'CSS Sizing',
    icon: '📐',
    description: 'Understand width, height, min/max dimensions, clamp(), calc(), and viewport units.',
    sections: [
      {
        title: 'References',
        icon: '📖',
        links: [
          { title: 'MDN Box Sizing', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing', description: 'Box sizing reference' },
        ],
      },
    ],
  },
  spacing: {
    title: 'CSS Spacing',
    icon: '📏',
    description: 'Master margins, padding, box model, collapse, and gap properties.',
    sections: [
      {
        title: 'References',
        icon: '📖',
        links: [
          { title: 'MDN Margin Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/margin', description: 'Margin reference' },
        ],
      },
    ],
  },
  typography: {
    title: 'CSS Typography',
    icon: '🔤',
    description: 'Master web fonts, font-family, line-height, text alignment, and web font loading.',
    sections: [
      {
        title: 'References',
        icon: '📖',
        links: [
          { title: 'Google Fonts', url: 'https://fonts.google.com', description: 'Web font library' },
          { title: 'MDN Typography', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals', description: 'Typography fundamentals' },
        ],
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(cssTopicDetails).map((topic) => ({ topic }));
}

export default async function CssTopicSubpage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;
  const data = cssTopicDetails[topic];

  if (!data) {
    notFound();
  }

  return (
    <TopicPage
      title={data.title}
      category="CSS"
      categorySlug="css"
      description={data.description}
      icon={data.icon}
      sections={data.sections}
    >
      {data.content}
    </TopicPage>
  );
}
