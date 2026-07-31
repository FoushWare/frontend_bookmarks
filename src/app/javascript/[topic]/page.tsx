import { notFound } from 'next/navigation';
import TopicPage from '@/components/TopicPage';
import { ResourceSection } from '@/components/ResourceGuide';

interface TopicData {
  title: string;
  icon: string;
  description: string;
  sections: ResourceSection[];
}

const jsTopicDetails: Record<string, TopicData> = {
  fundamentals: {
    title: 'JavaScript Fundamentals',
    icon: '📚',
    description: 'Master variables, data types, closures, hoisting, execution context, and core JS mechanics.',
    sections: [
      {
        title: 'References',
        icon: '📖',
        links: [
          { title: 'MDN JavaScript Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide', description: 'Comprehensive JS reference' },
          { title: 'javascript.info', url: 'https://javascript.info', description: 'Modern JavaScript tutorial' },
        ],
      },
    ],
  },
  es6: {
    title: 'ES6+ Modern Features',
    icon: '✨',
    description: 'Master arrow functions, destructuring, spread/rest, template literals, optional chaining, and nullish coalescing.',
    sections: [
      {
        title: 'References',
        icon: '📖',
        links: [
          { title: 'ES6 Overview', url: 'https://es6-features.org', description: 'ECMAScript 6 feature comparison' },
        ],
      },
    ],
  },
  async: {
    title: 'Async Programming',
    icon: '⏳',
    description: 'Master event loop, microtasks vs macrotasks, promises, async/await, and error handling.',
    sections: [
      {
        title: 'References',
        icon: '📖',
        links: [
          { title: 'MDN Asynchronous JS', url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous', description: 'Asynchronous programming guide' },
        ],
      },
    ],
  },
  dom: {
    title: 'DOM Manipulation',
    icon: '🌐',
    description: 'Master DOM querying, events, bubbling, capturing, performance, and custom events.',
    sections: [
      {
        title: 'References',
        icon: '📖',
        links: [
          { title: 'MDN DOM API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model', description: 'DOM API documentation' },
        ],
      },
    ],
  },
  functional: {
    title: 'Functional Programming',
    icon: '🔧',
    description: 'Master immutability, pure functions, currying, composition, map, filter, and reduce.',
    sections: [
      {
        title: 'References',
        icon: '📖',
        links: [
          { title: 'Functional Light JS', url: 'https://github.com/getify/Functional-Light-JS', description: 'Pragmatic functional JS guide' },
        ],
      },
    ],
  },
  oop: {
    title: 'Object Oriented JS',
    icon: '🏗️',
    description: 'Master prototypes, constructor functions, ES6 classes, private fields, and inheritance.',
    sections: [
      {
        title: 'References',
        icon: '📖',
        links: [
          { title: 'MDN Classes Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes', description: 'ES6 Classes guide' },
        ],
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(jsTopicDetails).map((topic) => ({ topic }));
}

export default async function JsTopicSubpage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;
  const data = jsTopicDetails[topic];

  if (!data) {
    notFound();
  }

  return (
    <TopicPage
      title={data.title}
      category="JavaScript"
      categorySlug="javascript"
      description={data.description}
      icon={data.icon}
      sections={data.sections}
    />
  );
}
