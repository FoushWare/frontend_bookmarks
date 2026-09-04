export interface PageNavigation {
  label: string;
  href: string;
}

export interface ContentSection {
  id: string;
  title: string;
}

export interface TopicNavigation {
  slug: string;
  title: string;
  titleAr: string;
  category: string;
  categoryAr: string;
  navigation: PageNavigation[];
  navigationAr: PageNavigation[];
  sections?: ContentSection[];
  sectionsAr?: ContentSection[];
}

export const topicNavigation: Record<string, TopicNavigation> = {
  flexbox: {
    slug: 'flexbox',
    title: 'Flexbox',
    titleAr: 'فليكس بوكس',
    category: 'CSS',
    categoryAr: 'CSS',
    navigation: [
      { label: 'Overview', href: '/css/flexbox' },
      { label: 'Projects', href: '/projects/flexbox' },
      { label: 'Exercises', href: '/exercises/flexbox' },
    ],
    navigationAr: [
      { label: 'نظرة عامة', href: '/css/flexbox' },
      { label: 'المشاريع', href: '/projects/flexbox' },
      { label: 'التمارين', href: '/exercises/flexbox' },
    ],
    sections: [
      { id: 'container-and-items', title: "Who's the Container, and who are the Items?" },
      { id: 'flex-direction', title: 'flex-direction' },
      { id: 'justify-content', title: 'justify-content' },
      { id: 'align-items', title: 'align-items' },
      { id: 'align-self', title: 'align-self' },
      { id: 'flex-flow', title: 'flex-flow' },
      { id: 'flex-grow-shrink-basis', title: 'flex-grow, flex-shrink, flex-basis' },
      { id: 'order', title: 'order' },
      { id: 'justify-content-gallery', title: 'justify-content Gallery' },
      { id: 'align-items-gallery', title: 'align-items Gallery' },
    ],
    sectionsAr: [
      { id: 'container-and-items', title: 'من هو الحاوية ومن هم العناصر؟' },
      { id: 'flex-direction', title: 'flex-direction' },
      { id: 'justify-content', title: 'justify-content' },
      { id: 'align-items', title: 'align-items' },
      { id: 'align-self', title: 'align-self' },
      { id: 'flex-flow', title: 'flex-flow' },
      { id: 'flex-grow-shrink-basis', title: 'flex-grow, flex-shrink, flex-basis' },
      { id: 'order', title: 'order' },
      { id: 'justify-content-gallery', title: 'معرض justify-content' },
      { id: 'align-items-gallery', title: 'معرض align-items' },
    ],
  },
  grid: {
    slug: 'grid',
    title: 'Grid',
    titleAr: 'الشبكة',
    category: 'CSS',
    categoryAr: 'CSS',
    navigation: [
      { label: 'Overview', href: '/css/grid' },
      { label: 'Projects', href: '/projects/grid' },
    ],
    navigationAr: [
      { label: 'نظرة عامة', href: '/css/grid' },
      { label: 'المشاريع', href: '/projects/grid' },
    ],
  },
  background: {
    slug: 'background',
    title: 'Background',
    titleAr: 'الخلفية',
    category: 'CSS',
    categoryAr: 'CSS',
    navigation: [
      { label: 'Overview', href: '/css/background' },
    ],
    navigationAr: [
      { label: 'نظرة عامة', href: '/css/background' },
    ],
  },
  typography: {
    slug: 'typography',
    title: 'Typography',
    titleAr: 'الطباعة',
    category: 'CSS',
    categoryAr: 'CSS',
    navigation: [
      { label: 'Overview', href: '/css/typography' },
    ],
    navigationAr: [
      { label: 'نظرة عامة', href: '/css/typography' },
    ],
  },
  // HTML topics
  accessibility: {
    slug: 'accessibility',
    title: 'Accessibility',
    titleAr: 'إمكانية الوصول',
    category: 'HTML',
    categoryAr: 'HTML',
    navigation: [
      { label: 'Overview', href: '/html/accessibility' },
    ],
    navigationAr: [
      { label: 'نظرة عامة', href: '/html/accessibility' },
    ],
  },
  apis: {
    slug: 'apis',
    title: 'APIs',
    titleAr: 'واجهات برمجة التطبيقات',
    category: 'HTML',
    categoryAr: 'HTML',
    navigation: [
      { label: 'Overview', href: '/html/apis' },
    ],
    navigationAr: [
      { label: 'نظرة عامة', href: '/html/apis' },
    ],
  },
  forms: {
    slug: 'forms',
    title: 'Forms',
    titleAr: 'النماذج',
    category: 'HTML',
    categoryAr: 'HTML',
    navigation: [
      { label: 'Overview', href: '/html/forms' },
    ],
    navigationAr: [
      { label: 'نظرة عامة', href: '/html/forms' },
    ],
  },
  interview: {
    slug: 'interview',
    title: 'Interview',
    titleAr: 'المقابلة',
    category: 'HTML',
    categoryAr: 'HTML',
    navigation: [
      { label: 'Overview', href: '/html/interview' },
    ],
    navigationAr: [
      { label: 'نظرة عامة', href: '/html/interview' },
    ],
  },
  media: {
    slug: 'media',
    title: 'Media',
    titleAr: 'الوسائط',
    category: 'HTML',
    categoryAr: 'HTML',
    navigation: [
      { label: 'Overview', href: '/html/media' },
    ],
    navigationAr: [
      { label: 'نظرة عامة', href: '/html/media' },
    ],
  },
  performance: {
    slug: 'performance',
    title: 'Performance',
    titleAr: 'الأداء',
    category: 'HTML',
    categoryAr: 'HTML',
    navigation: [
      { label: 'Overview', href: '/html/performance' },
    ],
    navigationAr: [
      { label: 'نظرة عامة', href: '/html/performance' },
    ],
  },
  semantics: {
    slug: 'semantics',
    title: 'Semantics',
    titleAr: 'الدلالات',
    category: 'HTML',
    categoryAr: 'HTML',
    navigation: [
      { label: 'Overview', href: '/html/semantics' },
    ],
    navigationAr: [
      { label: 'نظرة عامة', href: '/html/semantics' },
    ],
  },
  seo: {
    slug: 'seo',
    title: 'SEO',
    titleAr: 'تحسين محركات البحث',
    category: 'HTML',
    categoryAr: 'HTML',
    navigation: [
      { label: 'Overview', href: '/html/seo' },
    ],
    navigationAr: [
      { label: 'نظرة عامة', href: '/html/seo' },
    ],
  },
  tables: {
    slug: 'tables',
    title: 'Tables',
    titleAr: 'الجداول',
    category: 'HTML',
    categoryAr: 'HTML',
    navigation: [
      { label: 'Overview', href: '/html/tables' },
    ],
    navigationAr: [
      { label: 'نظرة عامة', href: '/html/tables' },
    ],
  },
  // JavaScript topics
  fundamentals: {
    slug: 'fundamentals',
    title: 'JavaScript Fundamentals',
    titleAr: 'أساسيات JavaScript',
    category: 'JavaScript',
    categoryAr: 'JavaScript',
    navigation: [
      { label: 'Overview', href: '/javascript/fundamentals' },
    ],
    navigationAr: [
      { label: 'نظرة عامة', href: '/javascript/fundamentals' },
    ],
  },
  es6: {
    slug: 'es6',
    title: 'ES6+ Modern Features',
    titleAr: 'ميزات ES6+ الحديثة',
    category: 'JavaScript',
    categoryAr: 'JavaScript',
    navigation: [
      { label: 'Overview', href: '/javascript/es6' },
    ],
    navigationAr: [
      { label: 'نظرة عامة', href: '/javascript/es6' },
    ],
  },
  async: {
    slug: 'async',
    title: 'Async Programming',
    titleAr: 'البرمجة غير المتزامنة',
    category: 'JavaScript',
    categoryAr: 'JavaScript',
    navigation: [
      { label: 'Overview', href: '/javascript/async' },
    ],
    navigationAr: [
      { label: 'نظرة عامة', href: '/javascript/async' },
    ],
  },
  dom: {
    slug: 'dom',
    title: 'DOM Manipulation',
    titleAr: 'التعامل مع DOM',
    category: 'JavaScript',
    categoryAr: 'JavaScript',
    navigation: [
      { label: 'Overview', href: '/javascript/dom' },
    ],
    navigationAr: [
      { label: 'نظرة عامة', href: '/javascript/dom' },
    ],
  },
  functional: {
    slug: 'functional',
    title: 'Functional Programming',
    titleAr: 'البرمجة الوظيفية',
    category: 'JavaScript',
    categoryAr: 'JavaScript',
    navigation: [
      { label: 'Overview', href: '/javascript/functional' },
    ],
    navigationAr: [
      { label: 'نظرة عامة', href: '/javascript/functional' },
    ],
  },
  oop: {
    slug: 'oop',
    title: 'Object Oriented JS',
    titleAr: 'البرمجة الكائنية في JavaScript',
    category: 'JavaScript',
    categoryAr: 'JavaScript',
    navigation: [
      { label: 'Overview', href: '/javascript/oop' },
    ],
    navigationAr: [
      { label: 'نظرة عامة', href: '/javascript/oop' },
    ],
  },
};

export function getTopicNavigation(topic: string): TopicNavigation | undefined {
  return topicNavigation[topic];
}

export function getTopicNavigationByPath(path: string): TopicNavigation | undefined {
  // Extract topic from path like /css/flexbox or /projects/flexbox
  const match = path.match(/\/(?:css|projects)\/([^\/]+)/);
  if (match) {
    return topicNavigation[match[1]];
  }
  return undefined;
}