'use client';
import { NavDropdown } from './NavDropdown';
import { useTranslation } from '@/hooks/useTranslation';
import { homeTranslations } from '@/data/translations/home.en';
import { homeTranslations as homeTranslationsAr } from '@/data/translations/home.ar';

interface NavItem {
  label: string;
  href: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

interface NavLinksProps {
  isMobile?: boolean;
}

export function NavLinks({ isMobile = false }: NavLinksProps) {
  const { t, locale } = useTranslation({ en: homeTranslations, ar: homeTranslationsAr });

  const navSections: NavSection[] = [
    {
      title: t('navbar.fundamentals'),
      items: [
        { label: t('navbar.html'), href: '/html' },
        { label: t('navbar.css'), href: '/css' },
        { label: t('navbar.javascript'), href: '/javascript' },
        { label: t('navbar.patterns'), href: '/patterns' },
      ],
    },
    {
      title: t('navbar.practice'),
      items: [
        { label: t('navbar.questions'), href: '/questions' },
        { label: t('navbar.challenges'), href: '/challenges' },
        { label: t('navbar.projects'), href: '/projects' },
      ],
    },
    {
      title: t('navbar.resources'),
      items: [
        { label: t('navbar.frontendMentor'), href: '/frontend-mentor' },
        { label: t('navbar.seniorInterview'), href: '/senior-interview' },
      ],
    },
  ];

  if (isMobile) {
    return (
      <ul
        id="nav-links-mobile"
        style={{
          display: 'none', // toggled by MobileMenuToggle
          position: 'fixed',
          top: '57px',
          left: 0,
          right: 0,
          background: 'var(--bg)',
          flexDirection: 'column',
          padding: '1rem 1.25rem',
          gap: 0,
          listStyle: 'none',
          margin: 0,
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          borderBottom: '1px solid var(--border)',
          zIndex: 99,
          transition: 'all 0.3s ease',
        }}
      >
        {navSections.map((section) => (
          <NavDropdown key={section.title} title={section.title} items={section.items} isMobile />
        ))}
      </ul>
    );
  }

  return (
    <ul
      id="nav-links"
      style={{
        display: 'flex',
        gap: '0.25rem',
        listStyle: 'none',
        alignItems: 'center',
        margin: 0,
        padding: 0,
      }}
      className="hidden md:flex"
    >
      {navSections.map((section) => (
        <NavDropdown key={section.title} title={section.title} items={section.items} />
      ))}
    </ul>
  );
}

export default NavLinks;
