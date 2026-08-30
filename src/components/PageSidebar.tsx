'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PageNavigation, ContentSection } from '@/data/navigation';

interface PageSidebarProps {
  category: string;
  topic: string;
  navigation: PageNavigation[];
  sections?: ContentSection[];
  currentPath?: string;
}

export default function PageSidebar({
  category,
  topic,
  navigation,
  sections = [],
  currentPath,
}: PageSidebarProps) {
  const pathname = usePathname() || currentPath;
  const [isRTL, setIsRTL] = React.useState(false);

  React.useEffect(() => {
    const dir = document.documentElement.dir;
    setIsRTL(dir === 'rtl');
  }, []);

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
        {category}
      </div>

      {/* Topic header */}
      <div className="page-sidebar-topic">
        {topic.toUpperCase()}
      </div>

      {/* Page Navigation */}
      {navigation.length > 0 && (
        <>
          <div className="page-nav-section">
            {isRTL ? 'صفحات' : 'Pages'}
          </div>
          <ul className="page-nav-list">
            {navigation.map((item) => (
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
      {sections.length > 0 && (
        <>
          <div className="page-nav-divider" />
          <div className="page-nav-section">
            {isRTL ? 'في هذه الصفحة' : 'On This Page'}
          </div>
          <ul className="page-nav-list">
            {sections.map((section) => (
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