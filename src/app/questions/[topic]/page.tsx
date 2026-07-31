import { notFound } from 'next/navigation';
import TopicPage from '@/components/TopicPage';
import { ResourceSection } from '@/components/ResourceGuide';

interface TopicData {
  title: string;
  icon: string;
  description: string;
  sections: ResourceSection[];
}

const questionDetails: Record<string, TopicData> = {
  css: {
    title: 'CSS Interview Questions',
    icon: '🎨',
    description: 'Comprehensive CSS interview questions covering fundamentals, layouts, and best practices.',
    sections: [
      {
        title: 'References',
        icon: '📖',
        links: [
          { title: 'CSS Tricks', url: 'https://css-tricks.com', description: 'Tips and tricks for CSS' },
          { title: 'MDN CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', description: 'MDN CSS reference' },
        ],
      },
    ],
  },
  html: {
    title: 'HTML Interview Questions',
    icon: '📄',
    description: 'Key HTML interview questions covering semantics, accessibility, and modern practices.',
    sections: [
      {
        title: 'References',
        icon: '📖',
        links: [
          { title: 'MDN HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', description: 'HTML reference' },
        ],
      },
    ],
  },
  javascript: {
    title: 'JavaScript Interview Questions',
    icon: '⚡',
    description: 'Advanced JavaScript interview questions covering ES6+, async patterns, and performance.',
    sections: [
      {
        title: 'References',
        icon: '📖',
        links: [
          { title: 'JavaScript.info', url: 'https://javascript.info', description: 'Modern JavaScript guide' },
        ],
      },
    ],
  },
  react: {
    title: 'React Interview Questions',
    icon: '⚛️',
    description: 'React-specific interview questions focusing on hooks, state management, and performance.',
    sections: [
      {
        title: 'References',
        icon: '📖',
        links: [
          { title: 'React Docs', url: 'https://react.dev', description: 'Official React documentation' },
        ],
      },
    ],
  },
  typescript: {
    title: 'TypeScript Interview Questions',
    icon: '📘',
    description: 'TypeScript interview questions covering types, generics, and advanced patterns.',
    sections: [
      {
        title: 'References',
        icon: '📖',
        links: [
          { title: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/handbook/intro.html', description: 'Official handbook' },
        ],
      },
    ],
  },
  performance: {
    title: 'Performance Interview Questions',
    icon: '🚀',
    description: 'Performance-focused interview questions for front‑end optimization.',
    sections: [
      {
        title: 'References',
        icon: '📖',
        links: [
          { title: 'Web Vitals', url: 'https://web.dev/vitals/', description: 'Google Web Vitals guide' },
        ],
      },
    ],
  },
  security: {
    title: 'Security Interview Questions',
    icon: '🔒',
    description: 'Security‑related interview questions covering XSS, CSP, and best practices.',
    sections: [
      {
        title: 'References',
        icon: '📖',
        links: [
          { title: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/', description: 'OWASP security guide' },
        ],
      },
    ],
  },
  'system-design-frontend': {
    title: 'Frontend System Design Interview Questions',
    icon: '🏗️',
    description: 'System design questions focused on frontend architecture and scalability.',
    sections: [
      {
        title: 'References',
        icon: '📖',
        links: [
          { title: 'Frontend System Design', url: 'https://frontendmasters.com', description: 'Resources for system design' },
        ],
      },
    ],
  },
  patterns: {
    title: 'Design Patterns Interview Questions',
    icon: '🧩',
    description: 'Questions about software design patterns and architectural solutions.',
    sections: [
      {
        title: 'References',
        icon: '📖',
        links: [
          { title: 'Refactoring Guru', url: 'https://refactoring.guru', description: 'Pattern catalog' },
        ],
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(questionDetails).map((topic) => ({ topic }));
}

export default async function QuestionTopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;
  const data = questionDetails[topic];
  if (!data) {
    notFound();
  }
  return (
    <TopicPage
      title={data.title}
      category="Interview Questions"
      categorySlug="questions"
      description={data.description}
      icon={data.icon}
      sections={data.sections}
    />
  );
}
