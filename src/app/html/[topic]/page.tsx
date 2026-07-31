import { notFound } from 'next/navigation';
import TopicPage from '@/components/TopicPage';
import { ResourceSection } from '@/components/ResourceGuide';

interface TopicData {
  title: string;
  icon: string;
  description: string;
  sections: ResourceSection[];
}

const htmlTopicDetails: Record<string, TopicData> = {
  semantics: {
    title: 'HTML Semantics',
    icon: '🏗️',
    description: 'Use correct HTML elements to give meaning and structure to web content.',
    sections: [
      {
        title: 'References',
        icon: '📖',
        links: [
          { title: 'MDN HTML Elements', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element', description: 'Complete reference of HTML elements' },
        ],
      },
    ],
  },
  accessibility: {
    title: 'HTML Accessibility',
    icon: '♿',
    description: 'Ensure web applications are accessible to all users using ARIA, proper roles, and keyboard navigation.',
    sections: [
      {
        title: 'References',
        icon: '📖',
        links: [
          { title: 'W3C WAI-ARIA Authoring Practices', url: 'https://www.w3.org/WAI/ARIA/apg/', description: 'Official accessibility practices' },
        ],
      },
    ],
  },
  forms: {
    title: 'HTML Forms',
    icon: '📝',
    description: 'Build user-friendly, accessible form controls, inputs, and built-in validation.',
    sections: [
      {
        title: 'References',
        icon: '📖',
        links: [
          { title: 'MDN Web Forms Guide', url: 'https://developer.mozilla.org/en-US/docs/Learn/Forms', description: 'Web forms guide' },
        ],
      },
    ],
  },
  media: {
    title: 'HTML Media',
    icon: '🎬',
    description: 'Embed images, audio, video, picture elements, and responsive assets.',
    sections: [
      {
        title: 'References',
        icon: '📖',
        links: [
          { title: 'MDN Media Elements', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding', description: 'Multimedia and embedding guide' },
        ],
      },
    ],
  },
  seo: {
    title: 'HTML SEO & Meta Tags',
    icon: '🔍',
    description: 'Optimize page discovery with structured metadata, Open Graph, and search engines.',
    sections: [
      {
        title: 'References',
        icon: '📖',
        links: [
          { title: 'Google Search Central Docs', url: 'https://developers.google.com/search/docs', description: 'SEO documentation' },
        ],
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(htmlTopicDetails).map((topic) => ({ topic }));
}

export default async function HtmlTopicSubpage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;
  const data = htmlTopicDetails[topic];

  if (!data) {
    notFound();
  }

  return (
    <TopicPage
      title={data.title}
      category="HTML"
      categorySlug="html"
      description={data.description}
      icon={data.icon}
      sections={data.sections}
    />
  );
}
