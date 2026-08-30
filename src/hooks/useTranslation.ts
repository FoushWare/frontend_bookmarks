'use client';

import { useState, useEffect } from 'react';

type TranslationKey = string;

export function useTranslation(translations: any) {
  const [locale, setLocale] = useState<'en' | 'ar'>('ar');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const lang = localStorage.getItem('language') || 'ar';
    setLocale(lang as 'en' | 'ar');
    setMounted(true);
  }, []);

  const t = (key: string) => {
    if (!mounted) return key;
    
    const keys = key.split('.');
    let value = translations[locale];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return { t, locale, mounted };
}
