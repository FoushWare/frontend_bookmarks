import { notFound } from 'next/navigation';
import TopicPage from '@/components/TopicPage';
import { ResourceSection } from '@/components/ResourceGuide';

interface TopicData {
  title: string;
  titleAr: string;
  icon: string;
  description: string;
  descriptionAr: string;
  sections: ResourceSection[];
}

const jsTopicDetails: Record<string, TopicData> = {
  fundamentals: {
    title: 'JavaScript Fundamentals',
    titleAr: 'أساسيات JavaScript',
    icon: '📚',
    description: 'Master variables, data types, closures, hoisting, execution context, and core JS mechanics.',
    descriptionAr: 'أتقن المتغيرات وأنواع البيانات والإغلاق والرفع وسياق التنفيذ وميكانيكا JavaScript الأساسية.',
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
    titleAr: 'ميزات ES6+ الحديثة',
    icon: '✨',
    description: 'Master arrow functions, destructuring, spread/rest, template literals, optional chaining, and nullish coalescing.',
    descriptionAr: 'أتقن دوال الأسهم والتدمير والانتشار/البقاء والقوالب الديناميكية والسلسلة الاختيارية والدمج الفارغ.',
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
    titleAr: 'البرمجة غير المتزامنة',
    icon: '⏳',
    description: 'Master event loop, microtasks vs macrotasks, promises, async/await, and error handling.',
    descriptionAr: 'أتقن حلقة الأحداث والمهام الدقيقة مقابل المهام الكبيرة والوعود و async/await ومعالجة الأخطاء.',
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
    titleAr: 'التعامل مع DOM',
    icon: '🌐',
    description: 'Master DOM querying, events, bubbling, capturing, performance, and custom events.',
    descriptionAr: 'أتقن الاستعلام عن DOM والأحداث والفقاعات والالتقاط والأداء والأحداث المخصصة.',
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
    titleAr: 'البرمجة الوظيفية',
    icon: '🔧',
    description: 'Master immutability, pure functions, currying, composition, map, filter, and reduce.',
    descriptionAr: 'أتقن الثبات والدوال النقية وتوابع الكاري والتكوين والخريطة والفلتر والتقليل.',
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
    titleAr: 'البرمجة الكائنية في JavaScript',
    icon: '🏗️',
    description: 'Master prototypes, constructor functions, ES6 classes, private fields, and inheritance.',
    descriptionAr: 'أتقن النماذج الأولية ودوال البناء وفئات ES6 والحقول الخاصة والميراث.',
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
      titleAr={data.titleAr}
      category="JavaScript"
      categorySlug="javascript"
      description={data.description}
      descriptionAr={data.descriptionAr}
      icon={data.icon}
      sections={data.sections}
    />
  );
}
