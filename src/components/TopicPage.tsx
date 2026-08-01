'use client';
import Link from 'next/link';
import { ReactNode } from 'react';
import ResourceGuide, { ResourceSection } from './ResourceGuide';

interface TopicPageProps {
  title: string;
  category?: string;
  categorySlug?: string;
  description: string;
  icon: string;
  sections?: ResourceSection[];
  children?: ReactNode;
  backLink?: string;
  backLabel?: string;
}

export function TopicPage({
  title,
  category,
  categorySlug,
  description,
  icon,
  sections = [],
  children,
  backLink,
  backLabel,
}: TopicPageProps) {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
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
              letterSpacing: '-0.03em',
              marginBottom: '0.5rem',
            }}
          >
            {title}
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', maxWidth: '580px', lineHeight: 1.6, margin: 0 }}>
            {description}
          </p>
        </div>
      </div>

      {sections.length > 0 && <ResourceGuide sections={sections} />}

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
            Topic documentation and guides are available for {title}. Check the reference links above or practice with interactive projects.
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
            ← Back to {backLabel ? backLabel : (category ?? title)}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopicPage;
