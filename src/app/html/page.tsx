'use client';

import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import { htmlTranslations } from '@/data/translations/html.en';
import { htmlTranslations as htmlTranslationsAr } from '@/data/translations/html.ar';

const htmlTopics = [
  { slug: 'semantics', icon: '🏗️', title: 'Semantics', description: 'Master semantic HTML elements and proper document structure', level: 'beginner' },
  { slug: 'accessibility', icon: '♿', title: 'Accessibility', description: 'Master ARIA, screen readers, and inclusive design', level: 'intermediate' },
  { slug: 'forms', icon: '📝', title: 'Forms', description: 'Master form elements, validation, and user input', level: 'intermediate' },
  { slug: 'media', icon: '🎬', title: 'Media', description: 'Master images, video, audio, and responsive media', level: 'beginner' },
  { slug: 'seo', icon: '🔍', title: 'SEO', description: 'Master meta tags, structured data, and search optimization', level: 'intermediate' },
  { slug: 'tables', icon: '📊', title: 'Tables', description: 'Master table structure and accessible data tables', level: 'beginner' },
  { slug: 'performance', icon: '⚡', title: 'Performance & Loading', description: 'Master script loading, resource hints, and lazy loading', level: 'intermediate' },
  { slug: 'apis', icon: '🔧', title: 'HTML5 APIs & Misc', description: 'Master data attributes, templates, and modern HTML features', level: 'intermediate' },
  { slug: 'interview', icon: '🎯', title: 'Interview Traps', description: 'Master common HTML gotchas and interview questions', level: 'advanced' },
];

const badgeStyle = (level: string) => {
  switch (level) {
    case 'beginner': return { background: 'rgba(16,185,129,0.1)', color: '#059669' };
    case 'intermediate': return { background: 'rgba(245,158,11,0.1)', color: '#d97706' };
    case 'advanced': return { background: 'rgba(239,68,68,0.1)', color: '#dc2626' };
    default: return { background: 'rgba(99,102,241,0.1)', color: '#4f46e5' };
  }
};

export default function HtmlPage() {
  const translations = { en: htmlTranslations, ar: htmlTranslationsAr };
  const { t, mounted } = useTranslation(translations);

  if (!mounted) return null;

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
      {/* Hero */}
      <div
        style={{
          background: 'linear-gradient(135deg, #f97316, #ea580c)',
          borderRadius: '1.25rem',
          padding: '3.5rem 2rem',
          marginBottom: '3rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>📄</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: 'white', letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>
            {t('hero.title')}
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', maxWidth: '560px', lineHeight: 1.6 }}>
            {t('hero.description')}
          </p>
        </div>
        <div style={{ position: 'absolute', top: '-20%', right: '-5%', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', pointerEvents: 'none' }} />
      </div>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1rem',
        }}
      >
        {htmlTopics.map((topic) => (
          <Link
            key={topic.slug}
            href={`/html/${topic.slug}`}
            className="topic-card"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem', marginBottom: '0.75rem' }}>
              <div className="topic-icon">{topic.icon}</div>
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.25rem' }}>
                  {topic.title}
                </h3>
                <span className="badge" style={badgeStyle(topic.level)}>
                  {topic.level.charAt(0).toUpperCase() + topic.level.slice(1)}
                </span>
              </div>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, flex: 1 }}>
              {topic.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
