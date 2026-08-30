'use client';

import PageLayout from './PageLayout';
import PageSidebar from './PageSidebar';
import { PageNavigation, ContentSection } from '@/data/navigation';

interface TopicPageLayoutProps {
  category: string;
  topic: string;
  navigation: PageNavigation[];
  sections?: ContentSection[];
  children: React.ReactNode;
}

export default function TopicPageLayout({
  category,
  topic,
  navigation,
  sections,
  children,
}: TopicPageLayoutProps) {
  return (
    <PageLayout
      sidebar={
        <PageSidebar
          category={category}
          topic={topic}
          navigation={navigation}
          sections={sections}
        />
      }
    >
      {children}
    </PageLayout>
  );
}