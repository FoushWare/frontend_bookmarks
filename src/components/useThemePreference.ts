import { useState, useEffect, useCallback } from 'react';

export type ThemePref = 'light' | 'dark' | 'system';
type ResolvedTheme = 'light' | 'dark';

function resolveSystemTheme(): ResolvedTheme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function useThemePreference() {
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

  return { pref, resolved, mounted, setThemePref };
}
