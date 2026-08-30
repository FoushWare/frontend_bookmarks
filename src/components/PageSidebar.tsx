'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PageNavigation, ContentSection } from '@/data/navigation';
import { useTranslation } from '@/hooks/useTranslation';
import { cssTranslations } from '@/data/translations/css.en';
import { cssTranslations as cssTranslationsAr } from '@/data/translations/css.ar';
import { htmlTranslations } from '@/data/translations/html.en';
import { htmlTranslations as htmlTranslationsAr } from '@/data/translations/html.ar';
import { javascriptTranslations } from '@/data/translations/javascript.en';
import { javascriptTranslations as javascriptTranslationsAr } from '@/data/translations/javascript.ar';

interface PageSidebarProps {
  category: string;
  topic: string;
  topicAr?: string;
  navigation: PageNavigation[];
  navigationAr?: PageNavigation[];
  sections?: ContentSection[];
  sectionsAr?: ContentSection[];
  currentPath?: string;
}

export default function PageSidebar({
  category,
  topic,
  topicAr,
  navigation,
  navigationAr,
  sections = [],
  sectionsAr = [],
  currentPath,
}: PageSidebarProps) {
  const pathname = usePathname() || currentPath;
  const [isRTL, setIsRTL] = React.useState(false);

  React.useEffect(() => {
    const dir = document.documentElement.dir;
    setIsRTL(dir === 'rtl');
  }, []);

  // Get appropriate translations based on category
  const getTranslations = () => {
    const categoryLower = category.toLowerCase();
    if (categoryLower === 'css') {
      return { en: cssTranslations, ar: cssTranslationsAr };
    } else if (categoryLower === 'html') {
      return { en: htmlTranslations, ar: htmlTranslationsAr };
    } else if (categoryLower === 'javascript') {
      return { en: javascriptTranslations, ar: javascriptTranslationsAr };
    }
    return { en: cssTranslations, ar: cssTranslationsAr };
  };

  const { t, locale } = useTranslation(getTranslations());

  const currentNavigation = locale === 'ar' && navigationAr ? navigationAr : navigation;
  const currentSections = locale === 'ar' && sectionsAr ? sectionsAr : sections;
  const currentTopic = locale === 'ar' && topicAr ? topicAr : topic;
  const currentCategory = locale === 'ar' && topicAr ? topicAr : category;

  const isActive = (href: string) => {
    if (!pathname) return false;
    // Exact match for overview
    if (href === `/css/${topic}`) {
      return pathname === href;
    }
    // For exercises and projects, check if we're on any page under that path
    if (href === `/exercises/${topic}`) {
      return pathname.startsWith(`/exercises/${topic}`);
    }
    if (href === `/projects/${topic}`) {
      return pathname.startsWith(`/projects/${topic}`);
    }
    return pathname.startsWith(href);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="page-sidebar-nav">
      {/* Category header */}
      <div className="page-sidebar-category">
        {currentCategory}
      </div>

      {/* Topic header */}
      <div className="page-sidebar-topic">
        {currentTopic.toUpperCase()}
      </div>

      {/* Page Navigation */}
      {currentNavigation.length > 0 && (
        <>
          <div className="page-nav-section">
            {t('general.tableOfContents')}
          </div>
          <ul className="page-nav-list">
            {currentNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`page-nav-link ${isActive(item.href) ? 'page-nav-active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Content Navigation - On This Page */}
      {currentSections.length > 0 && (
        <>
          <div className="page-nav-divider" />
          <div className="page-nav-section">
            {locale === 'ar' ? 'في هذه الصفحة' : 'On This Page'}
          </div>
          <ul className="page-nav-list">
            {currentSections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className="page-nav-link page-nav-section-link"
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </nav>
  );
}