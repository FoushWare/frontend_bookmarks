import Link from 'next/link';

const questionCategories = [
  { slug: 'css', title: 'CSS & Styling', description: 'Master CSS fundamentals, layouts, frameworks, and styling best practices', icon: '🎨' },
  { slug: 'html', title: 'HTML & Semantics', description: 'Master HTML structure, semantics, accessibility, and modern best practices', icon: '📄' },
  { slug: 'javascript', title: 'JavaScript', description: 'Master JavaScript fundamentals, ES6+, async programming, and modern patterns', icon: '⚡' },
  { slug: 'react', title: 'React', description: 'Master React concepts, hooks, state management, and best practices', icon: '⚛️' },
  { slug: 'typescript', title: 'TypeScript', description: 'Master TypeScript types, generics, interfaces, and advanced patterns', icon: '📘' },
  { slug: 'performance', title: 'Performance', description: 'Master web performance optimization, metrics, and best practices', icon: '🚀' },
  { slug: 'security', title: 'Security', description: 'Master web security concepts, vulnerabilities, and protection strategies', icon: '🔒' },
  { slug: 'system-design-frontend', title: 'System Design', description: 'Master frontend system design, architecture, and scalability patterns', icon: '🏗️' },
  { slug: 'patterns', title: 'Design Patterns', description: 'Master design patterns, rendering patterns, and architectural patterns', icon: '🧩' },
];

export default function QuestionsPage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
      {/* Hero */}
      <div
        style={{
          background: 'linear-gradient(135deg, #06b6d4, #0284c7)',
          borderRadius: '1.25rem',
          padding: '3.5rem 2rem',
          marginBottom: '3rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>💡</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: 'white', letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>
            Interview Q&A
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', maxWidth: '560px', lineHeight: 1.6 }}>
            Practice and prepare for frontend developer interviews with comprehensive question banks
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
        {questionCategories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/questions/${cat.slug}`}
            className="topic-card card-q"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem', marginBottom: '0.75rem' }}>
              <div className="topic-icon">{cat.icon}</div>
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.25rem' }}>
                  {cat.title}
                </h3>
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
