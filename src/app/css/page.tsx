import Link from 'next/link';
import cssTopics from '@/data/css-topics.json';

const badgeStyle = (level: string) => {
  switch (level) {
    case 'beginner': return { background: 'rgba(16,185,129,0.1)', color: '#059669' };
    case 'intermediate': return { background: 'rgba(245,158,11,0.1)', color: '#d97706' };
    case 'advanced': return { background: 'rgba(239,68,68,0.1)', color: '#dc2626' };
    default: return { background: 'rgba(99,102,241,0.1)', color: '#4f46e5' };
  }
};

export default function CssPage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
      {/* Hero */}
      <div
        style={{
          background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
          borderRadius: '1.25rem',
          padding: '3.5rem 2rem',
          marginBottom: '3rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>🎨</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: 'white', letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>
            CSS
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', maxWidth: '560px', lineHeight: 1.6 }}>
            Master CSS layouts with Flexbox and Grid, styling, animations, and responsive design
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
        {cssTopics.map((topic) => (
          <div
            key={topic.slug}
            className="topic-card"
            style={{ color: 'inherit' }}
          >
            <Link href={`/css/${topic.slug}`} style={{ textDecoration: 'none', color: 'inherit', flex: 1 }}>
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
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {topic.description}
              </p>
            </Link>
            {/* Resource links */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', paddingTop: '0.875rem', borderTop: '1px solid var(--border)', marginTop: '1rem' }}>
              {topic.referenceUrl && (
                <a href={topic.referenceUrl} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', padding: '0.25rem 0.6rem', background: 'var(--surface-2)', borderRadius: '0.375rem', fontSize: '0.75rem', fontWeight: 500, color: 'var(--text-2)', textDecoration: 'none', transition: 'color 0.15s ease' }}>
                  📖 Reference
                </a>
              )}
              {topic.examplesUrl && (
                <a href={topic.examplesUrl} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', padding: '0.25rem 0.6rem', background: 'var(--surface-2)', borderRadius: '0.375rem', fontSize: '0.75rem', fontWeight: 500, color: 'var(--text-2)', textDecoration: 'none' }}>
                  💡 Examples
                </a>
              )}
              {topic.projectsUrl && (
                <a href={topic.projectsUrl} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', padding: '0.25rem 0.6rem', background: 'var(--surface-2)', borderRadius: '0.375rem', fontSize: '0.75rem', fontWeight: 500, color: 'var(--text-2)', textDecoration: 'none' }}>
                  🚀 Projects
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
