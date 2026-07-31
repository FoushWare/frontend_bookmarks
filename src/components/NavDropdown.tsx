'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

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

  if (isMobile) {
    return (
      <li style={{ borderBottom: '1px solid var(--border)' }}>
        <button
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0.75rem 0.25rem',
            background: 'none',
            border: 'none',
            color: 'var(--text)',
            fontSize: '0.9375rem',
            fontWeight: 500,
            cursor: 'pointer',
          }}
          onClick={() => setOpen(!open)}
        >
          {title}
          <svg
            style={{
              width: '1rem',
              height: '1rem',
              color: 'var(--text-muted)',
              transition: 'transform 0.2s ease',
              transform: open ? 'rotate(180deg)' : 'rotate(0)',
            }}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div
          style={{
            overflow: 'hidden',
            maxHeight: open ? '24rem' : '0',
            transition: 'max-height 0.2s ease',
            paddingBottom: open ? '0.5rem' : '0',
          }}
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-dropdown-item"
              style={{
                display: 'block',
                padding: '0.5rem 1rem',
                fontSize: '0.875rem',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                transition: 'color 0.15s ease',
              }}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </li>
    );
  }

  return (
    <li style={{ position: 'relative', listStyle: 'none' }} ref={ref}>
      <button
        className="nav-btn-trigger"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.25rem',
          padding: '0.5rem 0.75rem',
          borderRadius: '0.5rem',
          fontSize: '0.875rem',
          fontWeight: 500,
          color: 'var(--text-2)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          transition: 'color 0.15s ease, background 0.15s ease',
        }}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {title}
        <svg
          style={{
            width: '0.875rem',
            height: '0.875rem',
            transition: 'transform 0.2s ease',
            transform: open ? 'rotate(180deg)' : 'rotate(0)',
          }}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        style={{
          position: 'absolute',
          left: 0,
          marginTop: '0.25rem',
          width: '12rem',
          borderRadius: '0.75rem',
          boxShadow: '0 10px 40px -8px rgba(0,0,0,0.12), 0 4px 12px -4px rgba(0,0,0,0.08)',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          zIndex: 50,
          transformOrigin: 'top left',
          transition: 'all 0.15s ease',
          opacity: open ? 1 : 0,
          visibility: open ? 'visible' as const : 'hidden' as const,
          transform: open ? 'translateY(0)' : 'translateY(-4px)',
        }}
      >
        <div style={{ padding: '0.375rem' }}>
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-dropdown-item"
              style={{
                display: 'block',
                padding: '0.5rem 0.75rem',
                fontSize: '0.875rem',
                color: 'var(--text-2)',
                textDecoration: 'none',
                borderRadius: '0.375rem',
                transition: 'background 0.12s ease, color 0.12s ease',
              }}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </li>
  );
}

export default NavDropdown;
