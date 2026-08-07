import { notFound } from 'next/navigation';
import TopicPage from '@/components/TopicPage';
import { ResourceSection } from '@/components/ResourceGuide';
import { semanticsData } from '@/data/html/semantics';
import { accessibilityData } from '@/data/html/accessibility';
import { formsData } from '@/data/html/forms';
import { mediaData } from '@/data/html/media';
import { seoData } from '@/data/html/seo';
import { tablesData } from '@/data/html/tables';
import { performanceData } from '@/data/html/performance';
import { apisData } from '@/data/html/apis';
import { interviewData } from '@/data/html/interview';

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
    sections: semanticsData,
  },
  accessibility: {
    title: 'HTML Accessibility',
    icon: '♿',
    description: 'Make your HTML accessible to all users with ARIA, semantic elements, and proper labeling.',
    sections: accessibilityData,
  },
  forms: {
    title: 'HTML Forms',
    icon: '📝',
    description: 'Build interactive forms with proper validation, accessibility, and submission handling.',
    sections: formsData,
  },
  media: {
    title: 'HTML Media',
    icon: '🎬',
    description: 'Embed images, audio, video, picture elements, and responsive assets.',
    sections: mediaData,
  },
  seo: {
    title: 'HTML SEO & Meta Tags',
    icon: '🔍',
    description: 'Optimize page discovery with structured metadata, Open Graph, and search engines.',
    sections: seoData,
  },
  tables: {
    title: 'HTML Tables',
    icon: '📊',
    description: 'Create accessible data tables with proper structure and semantic markup.',
    sections: tablesData,
  },
  performance: {
    title: 'HTML Performance & Loading',
    icon: '⚡',
    description: 'Optimize resource loading with hints, lazy loading, and script placement strategies.',
    sections: performanceData,
  },
  apis: {
    title: 'HTML5 APIs & Misc',
    icon: '🔧',
    description: 'Use data attributes, templates, and modern HTML5 features for enhanced functionality.',
    sections: apisData,
  },
  interview: {
    title: 'HTML Interview Traps',
    icon: '🎯',
    description: 'Master common HTML gotchas, tricky behaviors, and interview questions.',
    sections: interviewData,
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
