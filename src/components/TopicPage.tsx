'use client';
import Link from 'next/link';
import { ReactNode } from 'react';
import ResourceGuide, { ResourceSection } from './ResourceGuide';
import { useTranslation } from '@/hooks/useTranslation';
import { topicTranslations as topicTranslationsEn } from '@/data/translations/topic.en';
import { topicTranslations as topicTranslationsAr } from '@/data/translations/topic.ar';

interface TopicPageProps {
  title: string;
  titleAr?: string;
  category?: string;
  categorySlug?: string;
  description: string;
  descriptionAr?: string;
  icon: string;
  sections?: ResourceSection[];
  sectionsAr?: ResourceSection[];
  children?: ReactNode;
  backLink?: string;
  backLabel?: string;
}

export function TopicPage({
  title,
  titleAr,
  category,
  categorySlug,
  description,
  descriptionAr,
  icon,
  sections = [],
  sectionsAr = [],
  children,
  backLink,
  backLabel,
}: TopicPageProps) {
  const translations = { en: topicTranslationsEn, ar: topicTranslationsAr };
  const { t, mounted, locale } = useTranslation(translations);

  if (!mounted) return null;

  const currentTitle = locale === 'ar' && titleAr ? titleAr : title;
  const currentDescription = locale === 'ar' && descriptionAr ? descriptionAr : description;
  const currentSections = locale === 'ar' && sectionsAr.length > 0 ? sectionsAr : sections;

  return (
    <div style={{ width: '100%' }}>
      {/* Hero Header */}
      <div
        style={{
          background: 'linear-gradient(135deg, var(--surface-2), var(--surface-3))',
          border: '1px solid var(--border)',
          borderRadius: '1.25rem',
          padding: '3rem 2rem',
          marginBottom: '2.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '2.75rem', marginBottom: '0.5rem' }}>{icon}</div>
          <h1
            style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
              fontWeight: 900,
              color: 'var(--text)',
              letterSpacing: locale === 'ar' ? '0' : '-0.03em',
              marginBottom: '0.5rem',
            }}
          >
            {currentTitle}
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', maxWidth: '580px', lineHeight: 1.6, margin: 0 }}>
            {currentDescription}
          </p>
        </div>
      </div>

      {currentSections.length > 0 && <ResourceGuide sections={currentSections} />}

      <div
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '1.25rem',
          padding: '2rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
        }}
      >
        {children ? (
          children
        ) : (
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
            {t('noContent').replace('{title}', currentTitle)}
          </p>
        )}

        <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border)' }}>
          <Link
            href={backLink ? backLink : (categorySlug ? `/${categorySlug}` : '#')}
            className="btn-ghost"
            style={{
              fontSize: '0.875rem',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
            }}
          >
            {t('backTo')} {backLabel ? backLabel : (category ?? currentTitle)}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopicPage;