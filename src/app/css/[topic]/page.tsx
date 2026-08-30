import { notFound } from 'next/navigation';
import TopicPage from '@/components/TopicPage';
import { ResourceSection } from '@/components/ResourceGuide';
import Link from 'next/link';
import FlexboxLesson from '@/components/FlexboxLesson';
import { getTopicNavigation } from '@/data/navigation';

interface TopicData {
  title: string;
  titleAr: string;
  icon: string;
  description: string;
  descriptionAr: string;
  reference?: ResourceSection[];
  referenceAr?: ResourceSection[];
  exercises?: ResourceSection[];
  exercisesAr?: ResourceSection[];
  games?: ResourceSection[];
  gamesAr?: ResourceSection[];
  projects?: ResourceSection[];
  projectsAr?: ResourceSection[];
  useFlexboxLesson?: boolean;
}

const cssTopicDetails: Record<string, TopicData> = {
  flexbox: {
    title: 'Flexbox',
    titleAr: 'فليكس بوكس',
    icon: '📦',
    description: 'Master flexible box layout for one-dimensional layouts along a main axis and cross axis.',
    descriptionAr: 'أتقن التخطيط المرن للصناديق للتخطيطات أحادية البعد على المحور الرئيسي والمحور المتعامد.',
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
    referenceAr: [
      {
        title: 'المراجع والأدلة',
        icon: '📖',
        links: [
          { title: 'دليل CSS-Tricks لفليكس بوكس', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox', description: 'دليل بصري كامل' },
          { title: 'وثائق MDN لفليكس بوكس', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout', description: 'الوثائق الرسمية' },
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
    exercisesAr: [
      {
        title: 'تمارين التدريب',
        icon: '✏️',
        links: [
          {
            title: 'تحديات فليكس بوكس',
            url: '/exercises/flexbox',
            description: 'تحديات برمجة تفاعلية لإتقان مفاهيم فليكس بوكس',
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
    gamesAr: [
      {
        title: 'التدريب بالألعاب',
        icon: '🎮',
        links: [
          { title: 'ضفدع فليكس بوكس', url: 'https://flexboxfroggy.com', description: 'ساعد ضفدعًا للوصول إلى زهرة زنبق الماء باستخدام فليكس بوكس' },
          { title: 'دفاع فليكس بوكس', url: 'http://flexboxdefense.com', description: 'لعب دفاع الأبراج مدعوم بفليكس بوكس' },
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
    projectsAr: [
      {
        title: 'مشاريع مكتبة المكونات',
        icon: '🛠️',
        links: [
          {
            title: 'مسار التسويق - مكتبة المكونات',
            url: '/projects/flexbox/marketing-library',
            description: 'ابنِ مكتبة مكونات كاملة باستخدام فليكس بوكس',
          },
          {
            title: 'مكونات فردية',
            url: '/projects/flexbox/components',
            description: 'تدرب على مكونات فليكس بوكس الفردية',
          },
        ],
      },
    ],
  },
  grid: {
    title: 'Grid',
    titleAr: 'الشبكة',
    icon: '🔲',
    description: 'Two-dimensional layout system for rows and columns.',
    descriptionAr: 'نظام التخطيط ثنائي الأبعاد للصفوف والأعمدة.',
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
    referenceAr: [
      {
        title: 'المراجع والأدلة',
        icon: '📖',
        links: [
          { title: 'دليل CSS-Tricks للشبكة', url: 'https://css-tricks.com/snippets/css/complete-guide-grid/', description: 'دليل بصري كامل' },
          { title: 'وثائق MDN للشبكة', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout', description: 'الوثائق الرسمية' },
        ],
      },
    ],
  },
  background: {
    title: 'Background',
    titleAr: 'الخلفية',
    icon: '🎨',
    description: 'Control background images, colors, gradients, and more.',
    descriptionAr: 'تحكم في صور الخلفية والألوان والتدرجات والمزيد.',
    reference: [
      {
        title: 'References & Guides',
        icon: '📖',
        links: [
          { title: 'MDN Background Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background', description: 'Official documentation' },
        ],
      },
    ],
    referenceAr: [
      {
        title: 'المراجع والأدلة',
        icon: '📖',
        links: [
          { title: 'وثائق MDN للخلفية', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background', description: 'الوثائق الرسمية' },
        ],
      },
    ],
  },
  typography: {
    title: 'Typography',
    titleAr: 'الطباعة',
    icon: '📝',
    description: 'Font sizing, line height, spacing, and text styling.',
    descriptionAr: 'حجم الخط، ارتفاع السطر، المسافات وتنسيق النص.',
    reference: [
      {
        title: 'References & Guides',
        icon: '📖',
        links: [
          { title: 'MDN Typography Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts', description: 'Official documentation' },
        ],
      },
    ],
    referenceAr: [
      {
        title: 'المراجع والأدلة',
        icon: '📖',
        links: [
          { title: 'وثائق MDN للطباعة', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts', description: 'الوثائق الرسمية' },
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

  const allSectionsAr = [
    ...(data.referenceAr || []),
    ...(data.exercisesAr || []),
    ...(data.gamesAr || []),
    ...(data.projectsAr || []),
  ];

  return (
    <TopicPage
      title={data.title}
      titleAr={data.titleAr}
      category="CSS"
      categorySlug="css"
      description={data.description}
      descriptionAr={data.descriptionAr}
      icon={data.icon}
      sections={allSections}
      sectionsAr={allSectionsAr}
    >
      <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
        Topic documentation and guides are available for {data.title}. Check the reference links above or practice with interactive projects.
      </p>
    </TopicPage>
  );
}