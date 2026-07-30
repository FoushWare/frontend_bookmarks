import { useState, useRef, useEffect } from 'react';

interface NavItem {
  label: string;
  href: string;
}

interface NavDropdownProps {
  title: string;
  items: NavItem[];
  isMobile?: boolean;
}

export function NavDropdown({ title, items, isMobile = false }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (isMobile) return;
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [isMobile]);

  // MOBILE: accordion style
  if (isMobile) {
    return (
      <li className="border-b border-border last:border-0">
        <button
          className="w-full flex justify-between items-center py-3 px-1 text-text-primary font-medium"
          onClick={() => setOpen(!open)}
        >
          {title}
          <svg
            className={`w-4 h-4 text-text-secondary transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div className={`overflow-hidden transition-all duration-200 ${open ? 'max-h-96 pb-2' : 'max-h-0'}`}>
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block py-2 pl-4 text-sm text-text-secondary hover:text-primary-600 dark:hover:text-primary-400"
            >
              {item.label}
            </a>
          ))}
        </div>
      </li>
    );
  }

  // DESKTOP: hover/click dropdown
  return (
    <li className="relative" ref={ref}>
      <button
        className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-text-primary
                   hover:text-primary-600 dark:hover:text-primary-400
                   hover:bg-surface-2 transition-colors duration-150"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {title}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`absolute left-0 mt-1 w-48 rounded-lg shadow-lg bg-surface border border-border
                    origin-top-left transition-all duration-150 z-50
                    ${open ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'}`}
      >
        <div className="py-1">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-sm text-text-primary
                         hover:bg-primary-50 dark:hover:bg-surface-2
                         hover:text-primary-700 dark:hover:text-primary-400
                         transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </li>
  );
}

export default NavDropdown;
