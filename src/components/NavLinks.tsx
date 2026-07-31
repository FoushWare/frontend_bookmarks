'use client';
import { NavDropdown } from './NavDropdown';

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

const navSections: NavSection[] = [
  {
    title: 'Fundamentals',
    items: [
      { label: 'HTML', href: '/html' },
      { label: 'CSS', href: '/css' },
      { label: 'JavaScript', href: '/javascript' },
      { label: 'Patterns', href: '/patterns' },
    ],
  },
  {
    title: 'Practice',
    items: [
      { label: 'Questions', href: '/questions' },
      { label: 'Challenges', href: '/challenges' },
      { label: 'Projects', href: '/projects' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'Frontend Mentor', href: '/frontend-mentor' },
      { label: 'Senior Interview', href: '/senior-interview' },
    ],
  },
];

export function NavLinks({ isMobile = false }: NavLinksProps) {
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
