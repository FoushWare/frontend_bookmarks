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
        title: 'Practice Tools',
        icon: '�️',
        links: [
          { title: 'CSS Gradient Generator', url: 'https://cssgradient.io', description: 'Interactive gradient tool' },
          { title: 'Gradient Magic', url: 'https://gradientmagic.com', description: 'Beautiful gradient presets' },
        ],
      },
      {
        title: 'References & Guides',
        icon: '📖',
        links: [
          { title: 'MDN Background Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background', description: 'Official reference' },
          { title: 'CSS-Tricks Gradients', url: 'https://css-tricks.com/css-gradients/', description: 'Complete gradient guide' },
        ],
      },
    ],
    content: (
      <div className="article-content">
        <h1>CSS Background Reference Guide</h1>
        <p>A practical reference for CSS background properties — colors, images, gradients, clip paths, and blend modes.</p>

        <blockquote>
          <p>Background properties control what appears behind an element's content. Use them for solid colors, images, gradients, patterns, and creative visual effects.</p>
        </blockquote>

        <hr />

        <h2>1. background-color</h2>
        <pre><code>{`.element {
  background-color: #ff6b6b;           /* hex */
  background-color: rgb(255, 107, 107); /* rgb */
  background-color: rgba(255, 107, 107, 0.5); /* rgba with opacity */
  background-color: hsl(0, 72%, 71%);   /* hsl */
  background-color: transparent;       /* transparent */
}`}</code></pre>

        <hr />

        <h2>2. background-image</h2>
        <pre><code>{`.element {
  background-image: url('image.jpg');
  background-image: url('pattern.png'), url('overlay.png'); /* multiple images */
  background-image: linear-gradient(to right, #ff6b6b, #4ecdc4); /* gradient */
}`}</code></pre>

        <hr />

        <h2>3. Linear Gradients</h2>
        <div className="article-image-box">
          <img src="/css-flex-grid/linear-gradient.svg" alt="linear-gradient diagram" />
        </div>
        <pre><code>{`.element {
  background: linear-gradient(to right, #ff6b6b, #4ecdc4);
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  background: linear-gradient(to bottom, #ff6b6b 0%, #4ecdc4 50%, #45b7d1 100%);
  background: linear-gradient(90deg, rgba(255,107,107,0.8), rgba(78,205,196,0.8));
}`}</code></pre>

        <hr />

        <h2>4. Radial Gradients</h2>
        <div className="article-image-box">
          <img src="/css-flex-grid/radial-gradient.svg" alt="radial-gradient diagram" />
        </div>
        <pre><code>{`.element {
  background: radial-gradient(circle, #ff6b6b, #4ecdc4);
  background: radial-gradient(circle at center, #ff6b6b, #4ecdc4);
  background: radial-gradient(circle at top right, #ff6b6b, #4ecdc4);
  background: radial-gradient(ellipse at center, #ff6b6b, #4ecdc4);
}`}</code></pre>

        <hr />

        <h2>5. background-position</h2>
        <pre><code>{`.element {
  background-position: center;
  background-position: top right;
  background-position: 50% 50%;
  background-position: 10px 20px;
  background-position: left center;
}`}</code></pre>

        <hr />

        <h2>6. background-size</h2>
        <pre><code>{`.element {
  background-size: cover;      /* covers entire container */
  background-size: contain;     /* fits image within container */
  background-size: 100% 100%;   /* stretch to fill */
  background-size: 50% auto;    /* custom dimensions */
  background-size: 200px 150px; /* fixed dimensions */
}`}</code></pre>

        <hr />

        <h2>7. background-repeat</h2>
        <pre><code>{`.element {
  background-repeat: repeat;      /* default: repeat both directions */
  background-repeat: repeat-x;    /* repeat horizontally only */
  background-repeat: repeat-y;    /* repeat vertically only */
  background-repeat: no-repeat;  /* don't repeat */
  background-repeat: space;       /* distribute with space */
  background-repeat: round;       /* distribute with scaling */
}`}</code></pre>

        <hr />

        <h2>8. background-attachment</h2>
        <pre><code>{`.element {
  background-attachment: scroll;  /* default: scrolls with page */
  background-attachment: fixed;   /* fixed to viewport */
  background-attachment: local;   /* scrolls with element content */
}`}</code></pre>

        <hr />

        <h2>9. background-clip</h2>
        <pre><code>{`.element {
  background-clip: border-box;  /* default: extends to border */
  background-clip: padding-box; /* extends to padding */
  background-clip: content-box; /* extends to content */
  background-clip: text;        /* clips to text (with -webkit- prefix) */
}`}</code></pre>

        <hr />

        <h2>10. background-origin</h2>
        <pre><code>{`.element {
  background-origin: border-box;  /* default: positions from border */
  background-origin: padding-box; /* positions from padding */
  background-origin: content-box; /* positions from content */
}`}</code></pre>

        <hr />

        <h2>11. Shorthand — background</h2>
        <pre><code>{`.element {
  background: #ff6b6b url('image.jpg') no-repeat center/cover;
  /* color | image | repeat | position / size */
}`}</code></pre>

        <hr />

        <h2>12. Common Patterns</h2>
        <h3>Text Gradient</h3>
        <pre><code>{`.gradient-text {
  background: linear-gradient(to right, #ff6b6b, #4ecdc4);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}`}</code></pre>

        <h3>Pattern Overlay</h3>
        <pre><code>{`.pattern-overlay {
  background:
    linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
    url('pattern.png');
}`}</code></pre>

        <h3>Fixed Parallax Background</h3>
        <pre><code>{`.parallax {
  background: url('image.jpg') no-repeat center center fixed;
  background-size: cover;
}`}</code></pre>
      </div>
    ),
  },
  border: {
    title: 'Border',
    icon: '🔲',
    description: 'Master borders, outline, border-radius, and box shadows.',
    sections: [
      {
        title: 'Practice Tools',
        icon: '🛠️',
        links: [
          { title: 'Border Radius Generator', url: 'https://border-radius.com', description: 'Interactive border-radius tool' },
          { title: 'Box Shadow Generator', url: 'https://cssgenerator.org/box-shadow-css-generator.html', description: 'Box shadow visualizer' },
        ],
      },
      {
        title: 'References & Guides',
        icon: '📖',
        links: [
          { title: 'MDN Border Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border', description: 'Official documentation' },
          { title: 'CSS-Tricks Border Radius', url: 'https://css-tricks.com/almanac/properties/b/border-radius/', description: 'Border-radius guide' },
        ],
      },
    ],
    content: (
      <div className="article-content">
        <h1>CSS Border Reference Guide</h1>
        <p>A practical reference for CSS border properties — borders, outlines, border-radius, and box shadows.</p>

        <blockquote>
          <p>Border properties define the boundaries of elements. Use them for visual separation, emphasis, and decorative effects.</p>
        </blockquote>

        <hr />

        <h2>1. border-width, border-style, border-color</h2>
        <pre><code>{`.element {
  border-width: 2px;
  border-style: solid;
  border-color: #ff6b6b;
}

/* shorthand */
.element {
  border: 2px solid #ff6b6b;
}`}</code></pre>

        <hr />

        <h2>2. border-style values</h2>
        <pre><code>{`.element {
  border-style: solid;      /* solid line */
  border-style: dashed;     /* dashed line */
  border-style: dotted;     /* dotted line */
  border-style: double;     /* double line */
  border-style: groove;     /* 3D groove */
  border-style: ridge;      /* 3D ridge */
  border-style: inset;      /* 3D inset */
  border-style: outset;     /* 3D outset */
  border-style: none;       /* no border */
  border-style: hidden;     /* same as none for table borders */
}`}</code></pre>

        <hr />

        <h2>3. Individual sides</h2>
        <pre><code>{`.element {
  border-top: 2px solid #ff6b6b;
  border-right: 2px solid #4ecdc4;
  border-bottom: 2px solid #45b7d1;
  border-left: 2px solid #96ceb4;
}

/* shorthand for all sides */
.element {
  border: 2px solid #ff6b6b;
}`}</code></pre>

        <hr />

        <h2>4. border-radius</h2>
        <div className="article-image-box">
          <img src="/css-flex-grid/border-radius.svg" alt="border-radius diagram" />
        </div>
        <pre><code>{`.element {
  border-radius: 8px;           /* all corners */
  border-radius: 8px 16px;      /* top-left/bottom-right, top-right/bottom-left */
  border-radius: 8px 16px 4px 20px; /* top-left, top-right, bottom-right, bottom-left */
  border-radius: 50%;           /* circle */
  border-radius: 8px / 16px;    /* horizontal radius / vertical radius */
}`}</code></pre>

        <hr />

        <h2>5. Individual corner radius</h2>
        <pre><code>{`.element {
  border-top-left-radius: 8px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 20px;
}`}</code></pre>

        <hr />

        <h2>6. outline</h2>
        <pre><code>{`.element {
  outline: 2px solid #ff6b6b;
  outline-offset: 4px;
}

/* focus state for accessibility */
.element:focus {
  outline: 2px solid #4ecdc4;
  outline-offset: 2px;
}`}</code></pre>
        <p><strong>Key difference:</strong> outline doesn't affect layout (doesn't take up space), while border does.</p>

        <hr />

        <h2>7. box-shadow</h2>
        <div className="article-image-box">
          <img src="/css-flex-grid/box-shadow.svg" alt="box-shadow diagram" />
        </div>
        <pre><code>{`.element {
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
  /* offset-x | offset-y | blur-radius | color */
}

.element {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  /* subtle shadow */
}

.element {
  box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.2);
  /* inset shadow */
}

.element {
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
  /* multiple shadows */
}`}</code></pre>

        <hr />

        <h2>8. Common Patterns</h2>
        <h3>Card with shadow</h3>
        <pre><code>{`.card {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}`}</code></pre>

        <h3>Circular avatar</h3>
        <pre><code>{`.avatar {
  border: 3px solid #fff;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}`}</code></pre>

        <h3>Button with hover effect</h3>
        <pre><code>{`.button {
  border: 2px solid #ff6b6b;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.button:hover {
  border-color: #4ecdc4;
  box-shadow: 0 4px 12px rgba(78, 205, 196, 0.3);
}`}</code></pre>

        <h3>Glassmorphism border</h3>
        <pre><code>{`.glass {
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  backdrop-filter: blur(10px);
}`}</code></pre>
      </div>
    ),
  },
  frameworks: {
    title: 'CSS Frameworks',
    icon: '⚡',
    description: 'Explore utility-first and component frameworks like Tailwind CSS, Bootstrap, and Bulma.',
    sections: [
      {
        title: 'Practice Tools',
        icon: '�️',
        links: [
          { title: 'Tailwind CSS Docs', url: 'https://tailwindcss.com/docs', description: 'Utility-first CSS framework' },
          { title: 'Bootstrap Docs', url: 'https://getbootstrap.com/docs', description: 'Component framework' },
          { title: 'Tailwind UI', url: 'https://tailwindui.com/', description: 'Tailwind component templates' },
        ],
      },
      {
        title: 'References & Guides',
        icon: '📖',
        links: [
          { title: 'CSS Framework Comparison', url: 'https://www.sitepoint.com/css-frameworks-2023/', description: 'Framework comparison guide' },
          { title: 'MDN CSS Frameworks', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design', description: 'Framework considerations' },
        ],
      },
    ],
    content: (
      <div className="article-content">
        <h1>CSS Frameworks Reference Guide</h1>
        <p>A practical reference for CSS frameworks — utility-first frameworks like Tailwind CSS, component frameworks like Bootstrap, and when to use them.</p>

        <blockquote>
          <p>CSS frameworks provide pre-built components and utility classes to speed up development. Choose based on your project needs and team preferences.</p>
        </blockquote>

        <hr />

        <h2>1. Utility-First Frameworks (Tailwind CSS)</h2>
        <pre><code>{`/* Tailwind CSS example */
<div class="flex items-center justify-between p-4 bg-white rounded-lg shadow">
  <h1 class="text-2xl font-bold text-gray-900">Title</h1>
  <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
    Action
  </button>
</div>`}</code></pre>
        <p><strong>Pros:</strong> Highly customizable, small bundle size with purging, consistent design system.</p>
        <p><strong>Cons:</strong> Can be verbose, learning curve for utility classes.</p>

        <hr />

        <h2>2. Component Frameworks (Bootstrap)</h2>
        <pre><code>{`/* Bootstrap example */
<div class="d-flex justify-content-between align-items-center p-4 bg-white rounded shadow">
  <h1 class="h2 fw-bold text-dark">Title</h1>
  <button class="btn btn-primary">Action</button>
</div>`}</code></pre>
        <p><strong>Pros:</strong> Quick prototyping, pre-built components, large community.</p>
        <p><strong>Cons:</strong> Less customizable, larger bundle size, "Bootstrap look".</p>

        <hr />

        <h2>3. CSS-in-JS Frameworks (Styled Components)</h2>
        <pre><code>{`/* Styled Components example */
const Card = styled.div\`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
\`;`}</code></pre>
        <p><strong>Pros:</strong> Component-scoped styles, dynamic styling, TypeScript support.</p>
        <p><strong>Cons:</strong> Runtime overhead, larger bundle size.</p>

        <hr />

        <h2>4. When to Use a Framework</h2>
        <pre><code>{`/* Use a framework when: */
- You need to ship quickly
- Team has varying CSS skill levels
- Consistent design system is required
- You're building a dashboard/admin panel

/* Skip a framework when: */
- Building a highly custom design
- Performance is critical
- Learning CSS fundamentals
- Building a small simple site`}</code></pre>

        <hr />

        <h2>5. Tailwind CSS Key Concepts</h2>
        <pre><code>{`/* Responsive prefixes */
<div class="p-4 md:p-8 lg:p-12">

/* State variants */
<button class="hover:bg-blue-600 focus:ring-2 active:bg-blue-700">

/* Dark mode */
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">

/* Custom configuration */
/* tailwind.config.js */
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: '#ff6b6b',
      }
    }
  }
}`}</code></pre>

        <hr />

        <h2>6. Bootstrap Key Concepts</h2>
        <pre><code>{`/* Grid system */
<div class="container">
  <div class="row">
    <div class="col-md-6 col-lg-4">Column</div>
  </div>
</div>

/* Utility classes */
<div class="d-flex justify-content-center align-items-center">
<div class="mt-4 mb-4 mx-auto p-4">

/* Components */
<button class="btn btn-primary btn-lg">
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">`}</code></pre>

        <hr />

        <h2>7. Common Patterns</h2>
        <h3>Tailwind card component</h3>
        <pre><code>{`<div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
  <img class="w-full" src="image.jpg" alt="Card">
  <div class="px-6 py-4">
    <h3 class="font-bold text-xl mb-2">Card Title</h3>
    <p class="text-gray-700 text-base">Card content</p>
  </div>
</div>`}</code></pre>

        <h3>Bootstrap card component</h3>
        <pre><code>{`<div class="card">
  <img src="image.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card Title</h5>
    <p class="card-text">Card content</p>
  </div>
</div>`}</code></pre>

        <hr />

        <h2>8. Framework Best Practices</h2>
        <ul>
          <li>Choose based on project needs and team expertise</li>
          <li>Configure frameworks to match your design system</li>
          <li>Don't override framework styles unnecessarily</li>
          <li>Use framework components as starting points, customize as needed</li>
          <li>Consider bundle size and performance impact</li>
          <li>Learn CSS fundamentals even when using frameworks</li>
        </ul>
      </div>
    ),
  },
  images: {
    title: 'CSS Images & Media',
    icon: '🖼️',
    description: 'Master object-fit, aspect-ratio, responsiveness, and picture elements.',
    sections: [
      {
        title: 'Practice Tools',
        icon: '🛠️',
        links: [
          { title: 'Object Fit Visualizer', url: 'https://css-tricks.com/almanac/properties/o/object-fit/', description: 'Interactive object-fit demo' },
          { title: 'Responsive Image Tester', url: 'https://www.responsinator.com/', description: 'Test responsive images' },
        ],
      },
      {
        title: 'References & Guides',
        icon: '📖',
        links: [
          { title: 'MDN object-fit Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit', description: 'Object fit guide' },
          { title: 'MDN aspect-ratio Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio', description: 'Aspect ratio reference' },
        ],
      },
    ],
    content: (
      <div className="article-content">
        <h1>CSS Images & Media Reference Guide</h1>
        <p>A practical reference for CSS image properties — object-fit, aspect-ratio, responsiveness, and media handling.</p>

        <blockquote>
          <p>Image properties control how images are sized, positioned, and displayed within their containers. Use them for responsive, accessible, and performant image handling.</p>
        </blockquote>

        <hr />

        <h2>1. object-fit</h2>
        <div className="article-image-box">
          <img src="/css-flex-grid/object-fit.svg" alt="object-fit diagram" />
        </div>
        <pre><code>{`.image {
  object-fit: fill;     /* default: stretches to fill */
  object-fit: contain;  /* scales to fit within, preserves aspect ratio */
  object-fit: cover;    /* scales to cover, preserves aspect ratio */
  object-fit: none;     /* doesn't scale, uses original size */
  object-fit: scale-down; /* scales down to fit if needed */
}`}</code></pre>

        <hr />

        <h2>2. object-position</h2>
        <pre><code>{`.image {
  object-position: center;
  object-position: top right;
  object-position: 50% 50%;
  object-position: 10px 20px;
}`}</code></pre>
        <p>Works with <code>object-fit: cover</code> to control which part of the image is visible.</p>

        <hr />

        <h2>3. aspect-ratio</h2>
        <pre><code>{`.image {
  aspect-ratio: 16 / 9;
  aspect-ratio: 4 / 3;
  aspect-ratio: 1 / 1;  /* square */
  aspect-ratio: auto;   /* default: uses intrinsic aspect ratio */
}`}</code></pre>
        <p>Maintains aspect ratio without padding hacks. Works with any element, not just images.</p>

        <hr />

        <h2>4. Responsive Images with max-width</h2>
        <pre><code>{`.image {
  max-width: 100%;
  height: auto;
  display: block;
}`}</code></pre>
        <p>Ensures images scale down on smaller screens while maintaining aspect ratio.</p>

        <hr />

        <h2>5. image-rendering</h2>
        <pre><code>{`.pixel-art {
  image-rendering: pixelated;  /* sharp pixels for pixel art */
}

.smooth-image {
  image-rendering: auto;      /* default: smooth scaling */
  image-rendering: crisp-edges; /* sharp edges */
}`}</code></pre>

        <hr />

        <h2>6. Common Patterns</h2>
        <h3>Responsive image container</h3>
        <pre><code>{`.image-container {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}`}</code></pre>

        <h3>Circular profile image</h3>
        <pre><code>{`.avatar {
  width: 120px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  object-fit: cover;
}`}</code></pre>

        <h3>Hero background image</h3>
        <pre><code>{`.hero {
  width: 100%;
  height: 60vh;
  background-image: url('hero.jpg');
  background-size: cover;
  background-position: center;
}`}</code></pre>

        <h3>Gallery grid</h3>
        <pre><code>{`.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}

.gallery img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}`}</code></pre>

        <hr />

        <h2>7. Performance Tips</h2>
        <ul>
          <li>Use <code>loading="lazy"</code> on below-the-fold images</li>
          <li>Provide <code>width</code> and <code>height</code> attributes to prevent layout shift</li>
          <li>Use modern image formats (WebP, AVIF) with fallbacks</li>
          <li>Consider <code>srcset</code> and <code>sizes</code> for responsive images</li>
        </ul>
      </div>
    ),
  },
  responsive: {
    title: 'Responsive Design',
    icon: '📱',
    description: 'Master media queries, fluid typography, container queries, and mobile-first design.',
    sections: [
      {
        title: 'Practice Tools',
        icon: '🛠️',
        links: [
          { title: 'Responsinator', url: 'https://www.responsinator.com/', description: 'Test responsive designs' },
          { title: 'Media Query Generator', url: 'https://responsivebreakpoints.com/', description: 'Breakpoint generator' },
        ],
      },
      {
        title: 'References & Guides',
        icon: '📖',
        links: [
          { title: 'MDN Responsive Design', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design', description: 'Responsive design guide' },
          { title: 'MDN Media Queries', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries', description: 'Media queries reference' },
        ],
      },
    ],
    content: (
      <div className="article-content">
        <h1>CSS Responsive Design Reference Guide</h1>
        <p>A practical reference for CSS responsive design — media queries, fluid typography, container queries, and mobile-first design.</p>

        <blockquote>
          <p>Responsive design ensures your layouts adapt to different screen sizes and devices. Use media queries, fluid units, and modern CSS for adaptable interfaces.</p>
        </blockquote>

        <hr />

        <h2>1. Media Queries</h2>
        <pre><code>{`/* Basic media query */
@media (max-width: 768px) {
  .container {
    padding: 16px;
  }
}

/* Min-width (mobile-first) */
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

/* Range */
@media (min-width: 768px) and (max-width: 1024px) {
  .container {
    max-width: 960px;
  }
}`}</code></pre>

        <hr />

        <h2>2. Common Breakpoints</h2>
        <pre><code>{`/* Mobile-first approach */
/* Mobile: default styles */

/* Tablet */
@media (min-width: 640px) {
  /* tablet styles */
}

/* Desktop */
@media (min-width: 1024px) {
  /* desktop styles */
}

/* Large desktop */
@media (min-width: 1280px) {
  /* large desktop styles */
}`}</code></pre>

        <hr />

        <h2>3. Media Query Features</h2>
        <pre><code>{`/* Width */
@media (min-width: 768px) { }

/* Height */
@media (min-height: 500px) { }

/* Orientation */
@media (orientation: portrait) { }
@media (orientation: landscape) { }

/* Resolution */
@media (min-resolution: 2dppx) { }

/* Dark mode */
@media (prefers-color-scheme: dark) { }

/* Reduced motion */
@media (prefers-reduced-motion: reduce) { }

/* Print */
@media print { }`}</code></pre>

        <hr />

        <h2>4. Fluid Layouts</h2>
        <pre><code>{`.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}`}</code></pre>

        <hr />

        <h2>5. Fluid Typography</h2>
        <pre><code>{`/* Using clamp() */
body {
  font-size: clamp(16px, 2.5vw, 20px);
}

h1 {
  font-size: clamp(24px, 5vw, 48px);
}

/* Using viewport units */
.element {
  font-size: 4vw;
}`}</code></pre>

        <hr />

        <h2>6. Container Queries (Modern)</h2>
        <pre><code>{`.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    flex-direction: row;
  }
}`}</code></pre>
        <p>Container queries respond to the container's size, not the viewport.</p>

        <hr />

        <h2>7. Common Patterns</h2>
        <h3>Responsive navigation</h3>
        <pre><code>{`.nav {
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .nav {
    flex-direction: row;
  }
}`}</code></pre>

        <h3>Responsive grid</h3>
        <pre><code>{`.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}`}</code></pre>

        <h3>Hide elements on mobile</h3>
        <pre><code>{`.desktop-only {
  display: none;
}

@media (min-width: 768px) {
  .desktop-only {
    display: block;
  }
}`}</code></pre>

        <hr />

        <h2>8. Responsive Best Practices</h2>
        <ul>
          <li>Use mobile-first approach (min-width media queries)</li>
          <li>Use relative units (%, rem, vw, vh) for fluid layouts</li>
          <li>Use <code>clamp()</code> for fluid typography</li>
          <li>Test on real devices, not just browser resize</li>
          <li>Consider <code>prefers-reduced-motion</code> for accessibility</li>
          <li>Use container queries for component-level responsiveness</li>
        </ul>
      </div>
    ),
  },
  sizing: {
    title: 'CSS Sizing',
    icon: '📐',
    description: 'Understand width, height, min/max dimensions, clamp(), calc(), and viewport units.',
    sections: [
      {
        title: 'Practice Tools',
        icon: '🛠️',
        links: [
          { title: 'CSS Calc Visualizer', url: 'https://css-tricks.com/a-guide-to-calc-in-css/', description: 'Interactive calc() demo' },
          { title: 'Clamp Generator', url: 'https://moderncss.dev/clamp/', description: 'Fluid typography generator' },
        ],
      },
      {
        title: 'References & Guides',
        icon: '📖',
        links: [
          { title: 'MDN Box Sizing', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing', description: 'Box sizing reference' },
          { title: 'MDN Viewport Units', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/length', description: 'Length units reference' },
        ],
      },
    ],
    content: (
      <div className="article-content">
        <h1>CSS Sizing Reference Guide</h1>
        <p>A practical reference for CSS sizing properties — width, height, min/max dimensions, calc(), clamp(), and viewport units.</p>

        <blockquote>
          <p>Sizing properties control element dimensions. Understanding fixed, fluid, and responsive sizing is essential for adaptable layouts.</p>
        </blockquote>

        <hr />

        <h2>1. width and height</h2>
        <pre><code>{`.element {
  width: 300px;
  height: 200px;
}

/* Fluid sizing */
.element {
  width: 100%;
  height: auto;
}

/* Viewport units */
.element {
  width: 50vw;  /* 50% of viewport width */
  height: 100vh; /* 100% of viewport height */
}`}</code></pre>

        <hr />

        <h2>2. min-width, max-width, min-height, max-height</h2>
        <pre><code>{`.element {
  min-width: 200px;
  max-width: 800px;
  min-height: 100px;
  max-height: 600px;
}

/* Responsive container */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}`}</code></pre>

        <hr />

        <h2>3. calc()</h2>
        <pre><code>{`.element {
  width: calc(100% - 32px);
  height: calc(50vh + 20px);
  margin: calc(10px * 2);
  font-size: calc(16px + 1vw);
}

/* Complex calculations */
.element {
  width: calc((100% - 64px) / 3);
  height: calc(100vh - 80px);
}`}</code></pre>

        <hr />

        <h2>4. clamp()</h2>
        <pre><code>{`.element {
  font-size: clamp(16px, 4vw, 24px);
  /* minimum: 16px, preferred: 4vw, maximum: 24px */
}

/* Responsive width */
.element {
  width: clamp(300px, 80%, 800px);
}

/* Responsive padding */
.element {
  padding: clamp(16px, 5vw, 32px);
}`}</code></pre>

        <hr />

        <h2>5. Viewport Units</h2>
        <pre><code>{`.element {
  width: 100vw;   /* viewport width */
  height: 100vh;  /* viewport height */
  font-size: 4vw; /* responsive to viewport width */
  padding: 2vmin; /* smaller of vw or vh */
  margin: 2vmax;  /* larger of vw or vh */
}`}</code></pre>

        <hr />

        <h2>6. Percentage vs Fixed Units</h2>
        <pre><code>{`/* Fixed units */
.element {
  width: 300px;
  height: 200px;
}

/* Percentage (relative to parent) */
.element {
  width: 50%;
  height: 50%;
}

/* Viewport units (relative to viewport) */
.element {
  width: 50vw;
  height: 50vh;
}`}</code></pre>

        <hr />

        <h2>7. Common Patterns</h2>
        <h3>Responsive container</h3>
        <pre><code>{`.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}`}</code></pre>

        <h3>Fluid typography</h3>
        <pre><code>{`body {
  font-size: clamp(16px, 2.5vw, 20px);
}

h1 {
  font-size: clamp(24px, 5vw, 48px);
}`}</code></pre>

        <h3>Full-screen section</h3>
        <pre><code>{`.hero {
  width: 100%;
  height: 100vh;
  min-height: 500px;
}`}</code></pre>

        <h3>Responsive card grid</h3>
        <pre><code>{`.card {
  width: calc((100% - 32px) / 3);
  min-width: 280px;
}`}</code></pre>

        <hr />

        <h2>8. Sizing Best Practices</h2>
        <ul>
          <li>Use <code>max-width</code> with <code>width: 100%</code> for responsive containers</li>
          <li>Use <code>clamp()</code> for fluid typography and spacing</li>
          <li>Prefer <code>calc()</code> for complex calculations</li>
          <li>Use viewport units sparingly — they can cause issues on mobile</li>
          <li>Always provide <code>min-height</code> for full-screen sections</li>
          <li>Use <code>height: auto</code> to let content determine height</li>
        </ul>
      </div>
    ),
  },
  spacing: {
    title: 'CSS Spacing',
    icon: '📏',
    description: 'Master margins, padding, box model, collapse, and gap properties.',
    sections: [
      {
        title: 'Practice Tools',
        icon: '🛠️',
        links: [
          { title: 'Box Model Visualizer', url: 'https://css-tricks.com/almanac/properties/b/box-sizing/', description: 'Interactive box model demo' },
          { title: 'Margin Collapse Demo', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing', description: 'Margin collapse examples' },
        ],
      },
      {
        title: 'References & Guides',
        icon: '📖',
        links: [
          { title: 'MDN Margin Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/margin', description: 'Margin reference' },
          { title: 'MDN Padding Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/padding', description: 'Padding reference' },
        ],
      },
    ],
    content: (
      <div className="article-content">
        <h1>CSS Spacing Reference Guide</h1>
        <p>A practical reference for CSS spacing properties — margins, padding, box model, collapse, and gap.</p>

        <blockquote>
          <p>Spacing properties control the space around and inside elements. Understanding the box model and margin collapse is essential for precise layout control.</p>
        </blockquote>

        <hr />

        <h2>1. The Box Model</h2>
        <div className="article-image-box">
          <img src="/css-flex-grid/box-model.svg" alt="box model diagram" />
        </div>
        <pre><code>{`/* From outside in: */
/* margin → border → padding → content */`}</code></pre>

        <hr />

        <h2>2. margin</h2>
        <pre><code>{`.element {
  margin: 16px;           /* all sides */
  margin: 16px 24px;      /* top/bottom, left/right */
  margin: 16px 24px 8px 32px; /* top, right, bottom, left */
  margin: auto;           /* centers horizontally in block layout */
  margin: 0;              /* no margin */
}

/* Individual sides */
.element {
  margin-top: 16px;
  margin-right: 24px;
  margin-bottom: 8px;
  margin-left: 32px;
}`}</code></pre>

        <hr />

        <h2>3. padding</h2>
        <pre><code>{`.element {
  padding: 16px;           /* all sides */
  padding: 16px 24px;      /* top/bottom, left/right */
  padding: 16px 24px 8px 32px; /* top, right, bottom, left */
  padding: 0;              /* no padding */
}

/* Individual sides */
.element {
  padding-top: 16px;
  padding-right: 24px;
  padding-bottom: 8px;
  padding-left: 32px;
}`}</code></pre>

        <hr />

        <h2>4. box-sizing</h2>
        <pre><code>{`/* Default: content-box */
.element {
  box-sizing: content-box;
  /* width applies to content only, padding/border add to total */
}

/* Recommended: border-box */
.element {
  box-sizing: border-box;
  /* width includes padding and border */
}

/* Global reset */
*, *::before, *::after {
  box-sizing: border-box;
}`}</code></pre>

        <hr />

        <h2>5. Margin Collapse</h2>
        <pre><code>{`/* Adjacent vertical margins collapse to the larger value */
.element1 { margin-bottom: 20px; }
.element2 { margin-top: 30px; }
/* Result: 30px between them (not 50px) */

/* Parent-child margin collapse */
.parent { margin-top: 20px; }
.child { margin-top: 30px; }
/* Result: 30px (not 50px) */

/* Prevent collapse */
.parent {
  overflow: hidden;  /* creates new block formatting context */
  /* or */
  display: flex;
  /* or */
  padding-top: 1px;
}`}</code></pre>

        <hr />

        <h2>6. gap (Flexbox & Grid)</h2>
        <pre><code>{`.container {
  display: flex;
  gap: 16px;          /* same gap row and column */
  gap: 16px 24px;      /* row-gap column-gap */
}

.grid {
  display: grid;
  gap: 16px;
  row-gap: 16px;
  column-gap: 24px;
}`}</code></pre>
        <p><code>gap</code> only works with Flexbox and Grid — not with block layout.</p>

        <hr />

        <h2>7. Common Patterns</h2>
        <h3>Card with padding</h3>
        <pre><code>{`.card {
  padding: 24px;
  margin: 16px;
}`}</code></pre>

        <h3>Centered container</h3>
        <pre><code>{`.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}`}</code></pre>

        <h3>Section spacing</h3>
        <pre><code>{`section {
  padding: 64px 0;
  margin-bottom: 32px;
}`}</code></pre>

        <h3>Flex gap for list items</h3>
        <pre><code>{`.list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}`}</code></pre>

        <hr />

        <h2>8. Spacing Best Practices</h2>
        <ul>
          <li>Use <code>border-box</code> globally for predictable sizing</li>
          <li>Prefer <code>gap</code> over margins for Flexbox/Grid layouts</li>
          <li>Be aware of margin collapse — it can cause unexpected spacing</li>
          <li>Use consistent spacing units (4px, 8px, 16px, 24px, 32px, etc.)</li>
          <li>Use <code>margin: auto</code> for horizontal centering in block layout</li>
        </ul>
      </div>
    ),
  },
  typography: {
    title: 'CSS Typography',
    icon: '🔤',
    description: 'Master web fonts, font-family, line-height, text alignment, and web font loading.',
    sections: [
      {
        title: 'Practice Tools',
        icon: '�️',
        links: [
          { title: 'Google Fonts', url: 'https://fonts.google.com', description: 'Web font library' },
          { title: 'Type Scale Calculator', url: 'https://typescale.com/', description: 'Modular scale generator' },
        ],
      },
      {
        title: 'References & Guides',
        icon: '📖',
        links: [
          { title: 'MDN Typography', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals', description: 'Typography fundamentals' },
          { title: 'CSS-Tricks Font Family', url: 'https://css-tricks.com/almanac/properties/f/font-family/', description: 'Font family guide' },
        ],
      },
    ],
    content: (
      <div className="article-content">
        <h1>CSS Typography Reference Guide</h1>
        <p>A practical reference for CSS typography properties — fonts, text styling, alignment, and web font loading.</p>

        <blockquote>
          <p>Typography properties control how text is displayed. Good typography improves readability, accessibility, and user experience.</p>
        </blockquote>

        <hr />

        <h2>1. font-family</h2>
        <pre><code>{`/* Font stack with fallbacks */
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

/* Serif font stack */
body {
  font-family: Georgia, 'Times New Roman', Times, serif;
}

/* Monospace font stack */
code {
  font-family: 'Fira Code', 'Courier New', monospace;
}`}</code></pre>

        <hr />

        <h2>2. font-size</h2>
        <pre><code>{`.element {
  font-size: 16px;
  font-size: 1rem;      /* relative to root font size */
  font-size: 1.5em;     /* relative to parent font size */
  font-size: 150%;      /* percentage of parent */
  font-size: clamp(16px, 2.5vw, 20px); /* fluid typography */
}`}</code></pre>

        <hr />

        <h2>3. font-weight</h2>
        <pre><code>{`.element {
  font-weight: 100;    /* thin */
  font-weight: 300;    /* light */
  font-weight: 400;    /* normal */
  font-weight: 500;    /* medium */
  font-weight: 600;    /* semibold */
  font-weight: 700;    /* bold */
  font-weight: 900;    /* black */
  font-weight: normal;
  font-weight: bold;
}`}</code></pre>

        <hr />

        <h2>4. line-height</h2>
        <pre><code>{`.element {
  line-height: 1.5;     /* unitless: recommended */
  line-height: 1.5em;    /* relative to font size */
  line-height: 24px;    /* fixed value */
  line-height: normal;  /* browser default (~1.2) */
}`}</code></pre>
        <p>Use unitless values for better scaling with font-size changes.</p>

        <hr />

        <h2>5. text-align</h2>
        <pre><code>{`.element {
  text-align: left;
  text-align: right;
  text-align: center;
  text-align: justify;
  text-align: start;   /* follows text direction */
  text-align: end;     /* follows text direction */
}`}</code></pre>

        <hr />

        <h2>6. text-decoration</h2>
        <pre><code>{`.element {
  text-decoration: none;
  text-decoration: underline;
  text-decoration: line-through;
  text-decoration: overline;
  text-decoration: underline line-through;
  text-decoration: underline wavy red;
}`}</code></pre>

        <hr />

        <h2>7. text-transform</h2>
        <pre><code>{`.element {
  text-transform: none;
  text-transform: uppercase;
  text-transform: lowercase;
  text-transform: capitalize;
}`}</code></pre>

        <hr />

        <h2>8. letter-spacing and word-spacing</h2>
        <pre><code>{`.element {
  letter-spacing: 0.5px;
  letter-spacing: 0.1em;
  letter-spacing: -0.5px; /* tighter spacing */
}

.element {
  word-spacing: 4px;
  word-spacing: 0.5em;
}`}</code></pre>

        <hr />

        <h2>9. Common Patterns</h2>
        <h3>Fluid typography scale</h3>
        <pre><code>{`:root {
  font-size: 16px;
}

html {
  font-size: clamp(16px, 2.5vw, 20px);
}

h1 { font-size: clamp(24px, 5vw, 48px); line-height: 1.2; }
h2 { font-size: clamp(20px, 4vw, 36px); line-height: 1.3; }
h3 { font-size: clamp(18px, 3vw, 28px); line-height: 1.4; }
p { font-size: 1rem; line-height: 1.6; }`}</code></pre>

        <h3>Readable body text</h3>
        <pre><code>{`body {
  font-family: system-ui, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  max-width: 65ch;  /* optimal reading length */
}`}</code></pre>

        <h3>Heading hierarchy</h3>
        <pre><code>{`h1 {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

h2 {
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.3;
}`}</code></pre>

        <hr />

        <h2>10. Typography Best Practices</h2>
        <ul>
          <li>Use unitless <code>line-height</code> for better scaling</li>
          <li>Limit line length to 60-75 characters for readability</li>
          <li>Use <code>clamp()</code> for fluid typography</li>
          <li>Provide font stacks with fallbacks</li>
          <li>Use appropriate font weights for hierarchy</li>
          <li>Consider <code>max-width: 65ch</code> for body text</li>
        </ul>
      </div>
    ),
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
