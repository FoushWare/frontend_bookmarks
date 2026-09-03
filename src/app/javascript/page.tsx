import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import { javascriptTranslations } from '@/data/translations/javascript.en';
import { javascriptTranslations as javascriptTranslationsAr } from '@/data/translations/javascript.ar';

const jsTopics = [
  { slug: 'fundamentals', icon: '📚', title: 'Fundamentals', description: 'Master variables, data types, operators, scopes, and core language concepts', level: 'beginner' },
  { slug: 'es6', icon: '✨', title: 'ES6+', description: 'Master modern JavaScript features, arrow functions, destructuring, and modules', level: 'intermediate' },
  { slug: 'async', icon: '⏳', title: 'Async Programming', description: 'Master promises, async/await, event loop, and asynchronous patterns', level: 'advanced' },
  { slug: 'dom', icon: '🌐', title: 'DOM Manipulation', description: 'Master DOM selection, manipulation, event delegation, and browser APIs', level: 'intermediate' },
  { slug: 'functional', icon: '🔧', title: 'Functional Programming', description: 'Master map, filter, reduce, immutability, and pure functional patterns', level: 'advanced' },
  { slug: 'oop', icon: '🏗️', title: 'OOP', description: 'Master classes, prototypes, inheritance, and object-oriented patterns', level: 'intermediate' },
];

const badgeStyle = (level: string) => {
  switch (level) {
    case 'beginner': return { background: 'rgba(16,185,129,0.1)', color: '#059669' };
    case 'intermediate': return { background: 'rgba(245,158,11,0.1)', color: '#d97706' };
    case 'advanced': return { background: 'rgba(239,68,68,0.1)', color: '#dc2626' };
    default: return { background: 'rgba(99,102,241,0.1)', color: '#4f46e5' };
  }
};

export default function JavascriptPage() {
  const translations = { en: javascriptTranslations, ar: javascriptTranslationsAr };
  const { t, mounted } = useTranslation(translations);

  if (!mounted) return null;

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
      {/* Hero */}
      <div
        style={{
          background: 'linear-gradient(135deg, #eab308, #ca8a04)',
          borderRadius: '1.25rem',
          padding: '3.5rem 2rem',
          marginBottom: '3rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>⚡</div>
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
        {jsTopics.map((topic) => (
          <Link
            key={topic.slug}
            href={`/javascript/${topic.slug}`}
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
            {/* Resource sections */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', paddingTop: '0.875rem', borderTop: '1px solid var(--border)', marginTop: '1rem' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  padding: '0.25rem 0.6rem',
                  background: 'var(--surface-2)',
                  borderRadius: '0.375rem',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  color: 'var(--text-2)',
                }}
              >
                📖 {t('general.overview')}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
