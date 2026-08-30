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
  category: string;
  navigation: PageNavigation[];
  sections?: ContentSection[];
}

export const topicNavigation: Record<string, TopicNavigation> = {
  flexbox: {
    slug: 'flexbox',
    title: 'Flexbox',
    category: 'CSS',
    navigation: [
      { label: 'Overview', href: '/css/flexbox' },
      { label: 'Projects', href: '/projects/flexbox' },
      { label: 'Exercises', href: '/exercises/flexbox' },
    ],
    sections: [
      { id: 'container-and-items', title: "Who's the Container, and who are the Items?" },
      { id: 'flex-direction', title: 'flex-direction' },
      { id: 'justify-content', title: 'justify-content' },
      { id: 'align-items', title: 'align-items' },
      { id: 'flex-grow-shrink-basis', title: 'flex-grow, flex-shrink, flex-basis' },
      { id: 'order', title: 'order' },
      { id: 'justify-content-gallery', title: 'justify-content Gallery' },
      { id: 'align-items-gallery', title: 'align-items Gallery' },
    ],
  },
  grid: {
    slug: 'grid',
    title: 'Grid',
    category: 'CSS',
    navigation: [
      { label: 'Overview', href: '/css/grid' },
      { label: 'Projects', href: '/projects/grid' },
    ],
  },
  background: {
    slug: 'background',
    title: 'Background',
    category: 'CSS',
    navigation: [
      { label: 'Overview', href: '/css/background' },
    ],
  },
  typography: {
    slug: 'typography',
    title: 'Typography',
    category: 'CSS',
    navigation: [
      { label: 'Overview', href: '/css/typography' },
    ],
  },
  // HTML topics
  accessibility: {
    slug: 'accessibility',
    title: 'Accessibility',
    category: 'HTML',
    navigation: [
      { label: 'Overview', href: '/html/accessibility' },
    ],
  },
  apis: {
    slug: 'apis',
    title: 'APIs',
    category: 'HTML',
    navigation: [
      { label: 'Overview', href: '/html/apis' },
    ],
  },
  forms: {
    slug: 'forms',
    title: 'Forms',
    category: 'HTML',
    navigation: [
      { label: 'Overview', href: '/html/forms' },
    ],
  },
  interview: {
    slug: 'interview',
    title: 'Interview',
    category: 'HTML',
    navigation: [
      { label: 'Overview', href: '/html/interview' },
    ],
  },
  media: {
    slug: 'media',
    title: 'Media',
    category: 'HTML',
    navigation: [
      { label: 'Overview', href: '/html/media' },
    ],
  },
  performance: {
    slug: 'performance',
    title: 'Performance',
    category: 'HTML',
    navigation: [
      { label: 'Overview', href: '/html/performance' },
    ],
  },
  semantics: {
    slug: 'semantics',
    title: 'Semantics',
    category: 'HTML',
    navigation: [
      { label: 'Overview', href: '/html/semantics' },
    ],
  },
  seo: {
    slug: 'seo',
    title: 'SEO',
    category: 'HTML',
    navigation: [
      { label: 'Overview', href: '/html/seo' },
    ],
  },
  tables: {
    slug: 'tables',
    title: 'Tables',
    category: 'HTML',
    navigation: [
      { label: 'Overview', href: '/html/tables' },
    ],
  },
  // JavaScript topics
  fundamentals: {
    slug: 'fundamentals',
    title: 'JavaScript Fundamentals',
    category: 'JavaScript',
    navigation: [
      { label: 'Overview', href: '/javascript/fundamentals' },
    ],
  },
  es6: {
    slug: 'es6',
    title: 'ES6+ Modern Features',
    category: 'JavaScript',
    navigation: [
      { label: 'Overview', href: '/javascript/es6' },
    ],
  },
  async: {
    slug: 'async',
    title: 'Async Programming',
    category: 'JavaScript',
    navigation: [
      { label: 'Overview', href: '/javascript/async' },
    ],
  },
  dom: {
    slug: 'dom',
    title: 'DOM Manipulation',
    category: 'JavaScript',
    navigation: [
      { label: 'Overview', href: '/javascript/dom' },
    ],
  },
  functional: {
    slug: 'functional',
    title: 'Functional Programming',
    category: 'JavaScript',
    navigation: [
      { label: 'Overview', href: '/javascript/functional' },
    ],
  },
  oop: {
    slug: 'oop',
    title: 'Object Oriented JS',
    category: 'JavaScript',
    navigation: [
      { label: 'Overview', href: '/javascript/oop' },
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