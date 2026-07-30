interface NavItem {
  label: string;
  href: string;
}

interface NavDropdownProps {
  title: string;
  items: NavItem[];
}

export function NavDropdown({ title, items }: NavDropdownProps) {
  return (
    <li className="relative group">
      <a
        href={items[0]?.href || '#'}
        className="no-underline text-text-primary font-medium transition-all duration-200 px-[14px] py-2 rounded-lg flex items-center gap-1 relative hover:text-primary-600 hover:bg-bg-tertiary after:content-['▼'] after:text-[0.65em] after:ml-[6px] after:opacity-50 after:transition-transform after:duration-200 group-hover:after:rotate-180 group-hover:after:opacity-100"
      >
        {title}
      </a>
      <ul className="absolute top-[calc(100%+8px)] left-0 bg-bg-secondary rounded-xl shadow-xl py-2 min-w-[180px] opacity-0 invisible -translate-y-2 transition-all duration-250 ease list-none z-[1001] border border-border group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="block px-[18px] py-[10px] no-underline text-text-primary font-medium transition-all duration-200 whitespace-nowrap text-[0.95em] hover:text-primary-600 hover:bg-bg-tertiary hover:pl-[22px]"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default NavDropdown;
