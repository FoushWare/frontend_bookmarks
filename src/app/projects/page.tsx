import Link from 'next/link';

const projects = [
  { slug: 'flexbox', icon: '📦', title: 'Flexbox', description: 'Master flexible box layout with interactive projects', completed: 3, total: 8, status: 'active' },
  { slug: 'grid', icon: '🔲', title: 'Grid', description: 'Master CSS grid for two-dimensional layouts', completed: 2, total: 8, status: 'active' },
  { slug: 'background', icon: '🖼️', title: 'Background', description: 'Master background properties and techniques', completed: 0, total: 0, status: 'coming_soon' },
  { slug: 'border', icon: '🔲', title: 'Border', description: 'Master border properties and styling', completed: 0, total: 0, status: 'coming_soon' },
  { slug: 'images', icon: '🖼️', title: 'Images', description: 'Master image styling and optimization', completed: 0, total: 0, status: 'coming_soon' },
  { slug: 'spacing', icon: '📏', title: 'Spacing', description: 'Master padding, margin, and spacing techniques', completed: 0, total: 0, status: 'coming_soon' },
  { slug: 'sizing', icon: '📐', title: 'Sizing', description: 'Master width, height, and sizing properties', completed: 0, total: 0, status: 'coming_soon' },
  { slug: 'typography', icon: '🔤', title: 'Typography', description: 'Master fonts, text styling, and typography', completed: 0, total: 0, status: 'coming_soon' },
  { slug: 'responsive', icon: '📱', title: 'Responsive', description: 'Master responsive design and media queries', completed: 0, total: 0, status: 'coming_soon' },
];

export default function ProjectsPage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
      {/* Hero */}
      <div
        style={{
          background: 'linear-gradient(135deg, var(--accent), var(--accent-dark))',
          borderRadius: '1.25rem',
          padding: '3.5rem 2rem',
          marginBottom: '3rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>🚀</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: 'white', letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>
            Projects
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', maxWidth: '560px', lineHeight: 1.6 }}>
            Interactive projects to master CSS properties and frontend concepts through hands-on practice.
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
          marginBottom: '4rem',
        }}
      >
        {projects.map((project) => {
          const isComingSoon = project.status === 'coming_soon';
          
          const CardContent = () => (
            <>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem', marginBottom: '0.75rem' }}>
                <div className="topic-icon">{project.icon}</div>
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.25rem' }}>
                    {project.title}
                  </h3>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {isComingSoon ? (
                      <span className="badge" style={{ background: 'rgba(107, 114, 128, 0.1)', color: '#6b7280' }}>Coming Soon</span>
                    ) : (
                      <>
                        <span className="badge" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#059669' }}>{project.completed} Projects</span>
                        <span className="badge" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>{project.total} Total</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {project.description}
              </p>
            </>
          );

          if (isComingSoon) {
            return (
              <div
                key={project.slug}
                className="topic-card"
                style={{ opacity: 0.5, cursor: 'not-allowed' }}
              >
                <CardContent />
              </div>
            );
          }

          return (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="topic-card"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <CardContent />
            </Link>
          );
        })}
      </div>

      {/* Info Section */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem',
      }}>
        <div style={{
          background: 'var(--surface-2)',
          border: '1px solid var(--border)',
          padding: '2rem',
          borderRadius: '1rem',
        }}>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--text)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>🎯</span> How It Works
          </h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Each project focuses on a specific CSS property. You'll see the property description, try different values interactively, and build your understanding through hands-on practice.
          </p>
        </div>

        <div style={{
          background: 'var(--surface-2)',
          border: '1px solid var(--border)',
          padding: '2rem',
          borderRadius: '1rem',
        }}>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--text)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>📚</span> Progressive Learning
          </h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Start with basic properties and work your way up to advanced concepts. Each project builds on the previous ones, helping you develop a deep understanding of CSS.
          </p>
        </div>

        <div style={{
          background: 'var(--surface-2)',
          border: '1px solid var(--border)',
          padding: '2rem',
          borderRadius: '1rem',
        }}>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--text)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>🔄</span> Interactive Practice
          </h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Use the live code editor to experiment with different property values and see the results instantly. Learn by doing, not just reading.
          </p>
        </div>
      </div>
    </div>
  );
}
