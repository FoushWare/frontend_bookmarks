import Link from 'next/link';

const patternCategories = [
  {
    slug: 'rendering',
    icon: '🧩',
    title: 'Modern Web Rendering',
    description: 'A reference guide covering how web rendering evolved, when to use each strategy, and the full journey a React app takes from local dev to painted pixels',
    badge: 'Rendering',
  },
];

export default function PatternsPage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
      {/* Hero */}
      <div
        style={{
          background: 'linear-gradient(135deg, #a855f7, #7e22ce)',
          borderRadius: '1.25rem',
          padding: '3.5rem 2rem',
          marginBottom: '3rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>🧩</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: 'white', letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>
            Patterns
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', maxWidth: '560px', lineHeight: 1.6 }}>
            Master design patterns, rendering patterns, and architectural patterns for building scalable applications
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
        {patternCategories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/patterns/${cat.slug}`}
            className="topic-card card-pat"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem', marginBottom: '0.75rem' }}>
              <div className="topic-icon">{cat.icon}</div>
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.25rem' }}>
                  {cat.title}
                </h3>
                <span className="badge badge-advanced">
                  {cat.badge}
                </span>
              </div>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, flex: 1 }}>
              {cat.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
