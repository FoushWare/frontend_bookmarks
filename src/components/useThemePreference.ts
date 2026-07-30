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
    const initialPref = saved || 'system';
    const initialResolved = initialPref === 'system' ? resolveSystemTheme() : initialPref;
    setPref(initialPref);
    setResolved(initialResolved);
    document.documentElement.setAttribute('data-theme', initialResolved);

    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => {
      setPref((current) => {
        if (current === 'system') {
          const next = resolveSystemTheme();
          setResolved(next);
          document.documentElement.setAttribute('data-theme', next);
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
    document.documentElement.setAttribute('data-theme', nextResolved);
  }, []);

  return { pref, resolved, mounted, setThemePref };
}
