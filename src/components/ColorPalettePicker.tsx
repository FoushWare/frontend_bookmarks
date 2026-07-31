'use client';

import { useState, useRef, useEffect } from 'react';
import { useColorPalette } from './useColorPalette';

export function ColorPalettePicker() {
  const { activeId, mounted, selectPalette, palettes } = useColorPalette();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const activePalette = palettes.find((p) => p.id === activeId) || palettes[0];

  return (
    <div ref={ref} style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
      {/* Palette Trigger Button */}
      <button
        type="button"
        aria-label="Select accent color theme"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="nav-btn-trigger"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.35rem',
          height: '2rem',
          padding: '0 0.6rem',
          borderRadius: '9999px',
          background: 'var(--surface-2)',
          border: '1px solid var(--border)',
          cursor: 'pointer',
          color: 'var(--text)',
          transition: 'all 0.15s ease',
        }}
      >
        {/* Palette SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.92 0 1.5-.78 1.5-1.5 0-.42-.15-.8-.4-1.12-.27-.33-.4-.73-.4-1.18 0-.97.8-1.75 1.8-1.75h2.2c3.2 0 5.8-2.6 5.8-5.8 0-4.75-4.67-8.65-10.5-8.65Z" />
        </svg>

        {/* Color Dot Preview */}
        {mounted && (
          <span
            style={{
              width: '0.65rem',
              height: '0.65rem',
              borderRadius: '50%',
              background: activePalette.preview,
              boxShadow: '0 0 4px rgba(0,0,0,0.2)',
              display: 'inline-block',
            }}
          />
        )}
      </button>

      {/* Palette Selection Dropdown */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 'calc(100% + 0.5rem)',
          width: '13.5rem',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '0.875rem',
          boxShadow: '0 12px 32px -4px rgba(0,0,0,0.15)',
          padding: '0.5rem',
          zIndex: 100,
          opacity: open ? 1 : 0,
          visibility: open ? 'visible' : 'hidden',
          transform: open ? 'translateY(0)' : 'translateY(-6px)',
          transition: 'all 0.15s ease',
        }}
      >
        <div
          style={{
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'var(--text-faint)',
            padding: '0.35rem 0.5rem 0.5rem',
            borderBottom: '1px solid var(--border)',
            marginBottom: '0.35rem',
          }}
        >
          Accent Color Theme
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
          {palettes.map((p) => {
            const isSelected = mounted && activeId === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => {
                  selectPalette(p.id);
                  setOpen(false);
                }}
                className="nav-dropdown-item"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  width: '100%',
                  padding: '0.45rem 0.6rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  background: isSelected ? 'var(--surface-2)' : 'transparent',
                  color: 'var(--text)',
                  fontSize: '0.825rem',
                  fontWeight: isSelected ? 600 : 400,
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'background 0.12s ease',
                }}
              >
                {/* Swatch circle */}
                <span
                  style={{
                    width: '0.875rem',
                    height: '0.875rem',
                    borderRadius: '50%',
                    background: p.preview,
                    flexShrink: 0,
                    boxShadow: '0 0 4px rgba(0,0,0,0.15)',
                  }}
                />
                <span style={{ flex: 1 }}>{p.name}</span>
                {isSelected && (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--accent-dark)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ColorPalettePicker;
