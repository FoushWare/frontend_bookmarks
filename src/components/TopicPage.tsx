<<<<<<< HEAD
import React from 'react'
import { Link } from 'react-router-dom'

interface TopicPageProps {
  icon: string
  title: string
  description: string
  backLink: string
  backLabel: string
  children?: React.ReactNode
}

function TopicPage({ icon, title, description, backLink, backLabel, children }: TopicPageProps) {
  return (
    <div className="container mx-auto max-w-[1400px] px-5 py-10">
      <div className="bg-gradient-to-br from-primary-600 to-primary-400 text-white p-[60px_20px] rounded-2xl mb-10 text-center">
        <h1 className="text-[3em] font-bold mb-4">{icon} {title}</h1>
        <p className="text-[1.2em] opacity-90">{description}</p>
      </div>
      <div className="bg-white rounded-2xl p-10 shadow-md">
        {children || <p className="text-gray-600">Content will be added soon...</p>}
        <div className="mt-8">
          <Link to={backLink} className="inline-block px-5 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-gray-700 no-underline">
            ← {backLabel}
=======
import Link from 'next/link';
import { ReactNode } from 'react';
import ResourceGuide, { ResourceSection } from './ResourceGuide';

interface TopicPageProps {
  title: string;
  category: string;
  categorySlug: string;
  description: string;
  icon: string;
  sections?: ResourceSection[];
  children?: ReactNode;
}

export function TopicPage({
  title,
  category,
  categorySlug,
  description,
  icon,
  sections = [],
  children,
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
            href={`/${categorySlug}`}
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
            ← Back to {category}
>>>>>>> 305d5e0 (feat: migrate from Astro to Next.js App Router with GFE theme)
          </Link>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  )
}

export default TopicPage
=======
  );
}

export default TopicPage;
>>>>>>> 305d5e0 (feat: migrate from Astro to Next.js App Router with GFE theme)
