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
import { getTopicNavigation } from '@/data/navigation';

interface TopicData {
  title: string;
  titleAr: string;
  icon: string;
  description: string;
  descriptionAr: string;
  sections: ResourceSection[];
}

const htmlTopicDetails: Record<string, TopicData> = {
  semantics: {
    title: 'HTML Semantics',
    titleAr: 'دلالات HTML',
    icon: '🏗️',
    description: 'Use correct HTML elements to give meaning and structure to web content.',
    descriptionAr: 'استخدم عناصر HTML الصحيحة لإعطاء المعنى والهيكل لمحتوى الويب.',
    sections: semanticsData,
  },
  accessibility: {
    title: 'HTML Accessibility',
    titleAr: 'إمكانية الوصول في HTML',
    icon: '♿',
    description: 'Make your HTML accessible to all users with ARIA, semantic elements, and proper labeling.',
    descriptionAr: 'اجعل HTML الخاص بك متاحًا لجميع المستخدمين باستخدام ARIA والعناصر الدلالية والتسمية الصحيحة.',
    sections: accessibilityData,
  },
  forms: {
    title: 'HTML Forms',
    titleAr: 'نماذج HTML',
    icon: '📝',
    description: 'Build interactive forms with proper validation, accessibility, and submission handling.',
    descriptionAr: 'ابنِ نماذج تفاعلية مع التحقق الصحيح وإمكانية الوصول ومعالجة الإرسال.',
    sections: formsData,
  },
  media: {
    title: 'HTML Media',
    titleAr: 'وسائط HTML',
    icon: '🎬',
    description: 'Embed images, audio, video, picture elements, and responsive assets.',
    descriptionAr: 'قم بتضمين الصور والصوت والفيديو وعناصر الصورة والأصول المتجاوبة.',
    sections: mediaData,
  },
  seo: {
    title: 'HTML SEO & Meta Tags',
    titleAr: 'تحسين محركات البحث والعلامات الوصفية في HTML',
    icon: '🔍',
    description: 'Optimize page discovery with structured metadata, Open Graph, and search engines.',
    descriptionAr: 'حسن اكتشاف الصفحة باستخدام البيانات الوصفية المنظمة و Open Graph ومحركات البحث.',
    sections: seoData,
  },
  tables: {
    title: 'HTML Tables',
    titleAr: 'جداول HTML',
    icon: '📊',
    description: 'Create accessible data tables with proper structure and semantic markup.',
    descriptionAr: 'أنشئ جداول بيانات متاحة مع الهيكل الصحيح والعلامات الدلالية.',
    sections: tablesData,
  },
  performance: {
    title: 'HTML Performance & Loading',
    titleAr: 'أداء وتحميل HTML',
    icon: '⚡',
    description: 'Optimize resource loading with hints, lazy loading, and script placement strategies.',
    descriptionAr: 'حسن تحميل الموارد باستخدام التلميحات والتحميل البطيء واستراتيجيات وضع السكريبت.',
    sections: performanceData,
  },
  apis: {
    title: 'HTML5 APIs & Misc',
    titleAr: 'واجهات برمجة تطبيقات HTML5 والمتنوعات',
    icon: '🔧',
    description: 'Use data attributes, templates, and modern HTML5 features for enhanced functionality.',
    descriptionAr: 'استخدم سمات البيانات والقوالب وميزات HTML5 الحديثة لتحسين الوظائف.',
    sections: apisData,
  },
  interview: {
    title: 'HTML Interview Traps',
    titleAr: 'فخاخ مقابلات HTML',
    icon: '🎯',
    description: 'Master common HTML gotchas, tricky behaviors, and interview questions.',
    descriptionAr: 'أتقن المشاكل الشائعة في HTML والسلوكيات الصعبة وأسئلة المقابلات.',
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
      titleAr={data.titleAr}
      category="HTML"
      categorySlug="html"
      description={data.description}
      descriptionAr={data.descriptionAr}
      icon={data.icon}
      sections={data.sections}
    />
  );
}
