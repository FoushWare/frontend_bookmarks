import React, { useState, useEffect, useCallback } from 'react';

type ThemePref = 'light' | 'dark' | 'system';
type ResolvedTheme = 'light' | 'dark';

function resolveSystemTheme(): ResolvedTheme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function ThemeToggle() {
  const [pref, setPref] = useState<ThemePref>('system');
  const [resolved, setResolved] = useState<ResolvedTheme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('theme') as ThemePref | null;
    const initialPref = saved ?? 'system';
    const initialResolved = initialPref === 'system' ? resolveSystemTheme() : initialPref;
    setPref(initialPref);
    setResolved(initialResolved);
    if (initialResolved === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => {
      setPref((current) => {
        if (current === 'system') {
          const next = resolveSystemTheme();
          setResolved(next);
          if (next === 'dark') {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        }
        return current;
      });
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const setThemePref = useCallback((next: ThemePref) => {
    setPref(next);
    localStorage.setItem('theme', next);
    const nextResolved = next === 'system' ? resolveSystemTheme() : next;
    setResolved(nextResolved);
    if (nextResolved === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const icons = {
    light: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
    dark: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    ),
    system: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  };

  const options: ThemePref[] = ['light', 'dark', 'system'];
  const activePref = mounted ? pref : 'system';

  const handleKeyDown = (e: React.KeyboardEvent, opt: ThemePref) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setThemePref(opt);
    }
  };

  return (
    <div className="inline-flex gap-[10px] p-[6px] rounded-[999px] bg-surface-2 border border-border" role="radiogroup" aria-label="Theme preference">
      {options.map((opt) => (
        <button
          key={opt}
          role="radio"
          tabIndex={0}
          aria-checked={activePref === opt}
          aria-label={opt}
          className={`flex items-center justify-center w-9 h-9 rounded-full cursor-pointer text-text-secondary transition-all duration-150 ${activePref === opt ? 'bg-primary-600 text-white' : ''} focus-visible:outline-2 focus-visible:outline-primary-600 focus-visible:outline-offset-2`}
          onClick={() => mounted && setThemePref(opt)}
          onKeyDown={(e) => mounted && handleKeyDown(e, opt)}
        >
          {icons[opt]}
        </button>
      ))}
    </div>
  );
}

export default ThemeToggle;
