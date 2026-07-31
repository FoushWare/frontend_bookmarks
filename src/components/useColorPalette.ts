'use client';
import { useState, useEffect, useCallback } from 'react';

export interface ColorPalette {
  id: string;
  name: string;
  accent: string;
  accentDark: string;
  accentText: string;
  preview: string;
}

export const COLOR_PALETTES: ColorPalette[] = [
  {
    id: 'lime',
    name: 'Lime (GFE)',
    accent: '#b5f23d',
    accentDark: '#96d121',
    accentText: '#1a2e00',
    preview: '#b5f23d',
  },
  {
    id: 'emerald',
    name: 'Emerald',
    accent: '#10b981',
    accentDark: '#059669',
    accentText: '#ffffff',
    preview: '#10b981',
  },
  {
    id: 'indigo',
    name: 'Indigo',
    accent: '#6366f1',
    accentDark: '#4f46e5',
    accentText: '#ffffff',
    preview: '#6366f1',
  },
  {
    id: 'cyan',
    name: 'Ocean Cyan',
    accent: '#06b6d4',
    accentDark: '#0284c7',
    accentText: '#ffffff',
    preview: '#06b6d4',
  },
  {
    id: 'rose',
    name: 'Sunset Rose',
    accent: '#f43f5e',
    accentDark: '#e11d48',
    accentText: '#ffffff',
    preview: '#f43f5e',
  },
  {
    id: 'amber',
    name: 'Amber Gold',
    accent: '#f59e0b',
    accentDark: '#d97706',
    accentText: '#ffffff',
    preview: '#f59e0b',
  },
];

export function applyPalette(palette: ColorPalette) {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  root.style.setProperty('--accent', palette.accent);
  root.style.setProperty('--accent-dark', palette.accentDark);
  root.style.setProperty('--accent-text', palette.accentText);
}

export function useColorPalette() {
  const [activeId, setActiveId] = useState<string>('lime');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('color-palette');
    const match = COLOR_PALETTES.find((p) => p.id === saved) || COLOR_PALETTES[0];
    setActiveId(match.id);
    applyPalette(match);
  }, []);

  const selectPalette = useCallback((id: string) => {
    const match = COLOR_PALETTES.find((p) => p.id === id);
    if (!match) return;
    setActiveId(match.id);
    localStorage.setItem('color-palette', match.id);
    applyPalette(match);
  }, []);

  return { activeId, mounted, selectPalette, palettes: COLOR_PALETTES };
}
