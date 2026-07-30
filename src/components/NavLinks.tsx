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
      { label: 'HTML', href: '/frontend_bookmarks/html' },
      { label: 'CSS', href: '/frontend_bookmarks/css' },
      { label: 'JavaScript', href: '/frontend_bookmarks/javascript' },
      { label: 'Patterns', href: '/frontend_bookmarks/patterns' },
    ],
  },
  {
    title: 'Practice',
    items: [
      { label: 'Questions', href: '/frontend_bookmarks/questions' },
      { label: 'Challenges', href: '/frontend_bookmarks/challenges' },
      { label: 'Projects', href: '/frontend_bookmarks/projects' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'Frontend Mentor', href: '/frontend_bookmarks/frontend-mentor' },
      { label: 'Senior Interview', href: '/frontend_bookmarks/senior-interview' },
    ],
  },
];

export function NavLinks({ isMobile = false }: NavLinksProps) {
  const baseClasses = isMobile
    ? 'md:hidden fixed top-[60px] left-0 right-0 bg-bg-primary flex-col p-5 gap-0 -translate-y-full opacity-0 invisible transition-all duration-300 shadow-lg list-none'
    : 'hidden md:flex gap-[30px] list-none items-center';

  return (
    <ul className={baseClasses} id={isMobile ? 'nav-links-mobile' : 'nav-links'}>
      {navSections.map((section) => (
        <NavDropdown key={section.title} title={section.title} items={section.items} isMobile={isMobile} />
      ))}
    </ul>
  );
}

export default NavLinks;
