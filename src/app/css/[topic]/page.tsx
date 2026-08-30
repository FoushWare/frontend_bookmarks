import { notFound } from 'next/navigation';
import TopicPage from '@/components/TopicPage';
import { ResourceSection } from '@/components/ResourceGuide';
import Link from 'next/link';
import FlexboxLesson from '@/components/FlexboxLesson';
import { getTopicNavigation } from '@/data/navigation';

interface TopicData {
  title: string;
  icon: string;
  description: string;
  reference?: ResourceSection[];
  exercises?: ResourceSection[];
  games?: ResourceSection[];
  projects?: ResourceSection[];
  useFlexboxLesson?: boolean;
}

const cssTopicDetails: Record<string, TopicData> = {
  flexbox: {
    title: 'Flexbox',
    icon: '📦',
    description: 'Master flexible box layout for one-dimensional layouts along a main axis and cross axis.',
    useFlexboxLesson: true,
    reference: [
      {
        title: 'References & Guides',
        icon: '📖',
        links: [
          { title: 'CSS-Tricks Flexbox Guide', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox', description: 'Complete visual guide' },
          { title: 'MDN Flexbox Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout', description: 'Official documentation' },
        ],
      },
    ],
    exercises: [
      {
        title: 'Practice Exercises',
        icon: '✏️',
        links: [
          {
            title: 'Flexbox Challenges',
            url: '/exercises/flexbox',
            description: 'Interactive coding challenges to master flexbox concepts',
          },
        ],
      },
    ],
    games: [
      {
        title: 'Gaming Practice',
        icon: '🎮',
        links: [
          { title: 'Flexbox Froggy', url: 'https://flexboxfroggy.com', description: 'Help a frog reach its lilypad with flexbox' },
          { title: 'Flexbox Defense', url: 'http://flexboxdefense.com', description: 'Tower defense game powered by flexbox' },
        ],
      },
    ],
    projects: [
      {
        title: 'Component Library Projects',
        icon: '🛠️',
        links: [
          {
            title: 'Marketing Track - Component Library',
            url: '/projects/flexbox/marketing-library',
            description: 'Build a complete component library using flexbox',
          },
          {
            title: 'Individual Components',
            url: '/projects/flexbox/components',
            description: 'Practice with individual flexbox components',
          },
        ],
      },
    ],
  },
  grid: {
    title: 'Grid',
    icon: '🔲',
    description: 'Two-dimensional layout system for rows and columns.',
    reference: [
      {
        title: 'References & Guides',
        icon: '📖',
        links: [
          { title: 'CSS-Tricks Grid Guide', url: 'https://css-tricks.com/snippets/css/complete-guide-grid/', description: 'Complete visual guide' },
          { title: 'MDN Grid Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout', description: 'Official documentation' },
        ],
      },
    ],
  },
  background: {
    title: 'Background',
    icon: '🎨',
    description: 'Control background images, colors, gradients, and more.',
    reference: [
      {
        title: 'References & Guides',
        icon: '📖',
        links: [
          { title: 'MDN Background Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background', description: 'Official documentation' },
        ],
      },
    ],
  },
  typography: {
    title: 'Typography',
    icon: '📝',
    description: 'Font sizing, line height, spacing, and text styling.',
    reference: [
      {
        title: 'References & Guides',
        icon: '📖',
        links: [
          { title: 'MDN Typography Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts', description: 'Official documentation' },
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

  // If flexbox, render the interactive lesson (it's already a client component with layout)
  if (topic === 'flexbox') {
    return <FlexboxLesson />;
  }

  // For other topics, use the standard TopicPage
  const allSections = [
    ...(data.reference || []),
    ...(data.exercises || []),
    ...(data.games || []),
    ...(data.projects || []),
  ];

  return (
    <TopicPage
      title={data.title}
      category="CSS"
      categorySlug="css"
      description={data.description}
      icon={data.icon}
      sections={allSections}
    >
      <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
        Topic documentation and guides are available for {data.title}. Check the reference links above or practice with interactive projects.
      </p>
    </TopicPage>
  );
}