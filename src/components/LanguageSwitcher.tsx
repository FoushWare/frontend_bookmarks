'use client';

import { useEffect, useState } from 'react';

export default function LanguageSwitcher() {
  const [currentLocale, setCurrentLocale] = useState('ar');

  useEffect(() => {
    const lang = localStorage.getItem('language') || 'ar';
    setCurrentLocale(lang);
  }, []);

  const toggleLanguage = () => {
    const newLocale = currentLocale === 'en' ? 'ar' : 'en';
    localStorage.setItem('language', newLocale);
    setCurrentLocale(newLocale);
    
    // Update document attributes
    const isArabic = newLocale === 'ar';
    document.documentElement.lang = newLocale;
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.documentElement.style.fontFamily = isArabic ? "'Cairo', sans-serif" : "'Inter', sans-serif";
    
    // Reload page to apply changes
    window.location.reload();
  };

  return (
    <button
      onClick={toggleLanguage}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.5rem 0.75rem',
        borderRadius: '0.5rem',
        border: '1px solid var(--border)',
        background: 'var(--surface)',
        color: 'var(--text)',
        cursor: 'pointer',
        fontSize: '0.875rem',
        fontWeight: 600,
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--accent)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)';
      }}
      title={currentLocale === 'en' ? 'Switch to Arabic' : 'Switch to English'}
    >
      <span style={{ textTransform: 'uppercase' }}>
        {currentLocale === 'en' ? 'العربية' : 'EN'}
      </span>
    </button>
  );
}
