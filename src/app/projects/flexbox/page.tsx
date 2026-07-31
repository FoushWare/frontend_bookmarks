import Link from 'next/link';
import { flexboxProjects } from '@/data/flexbox-projects';

export default function FlexboxProjectsPage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--text)', marginBottom: '1rem' }}>
          📦 Flexbox Projects
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
          Interactive projects to master Flexbox properties one at a time
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem',
        }}
      >
        {flexboxProjects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/flexbox/${project.id}`}
            className="topic-card"
            style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
              {project.difficulty === 'beginner' && '🟢'}
              {project.difficulty === 'intermediate' && '🟡'}
              {project.difficulty === 'advanced' && '🔴'}
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.5rem' }}>
              {project.title}
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, flex: 1, marginBottom: '1.5rem' }}>
              {project.expectedResult}
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span
                style={{
                  padding: '0.25rem 0.75rem',
                  borderRadius: '1rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  backgroundColor:
                    project.difficulty === 'beginner'
                      ? 'rgba(16, 185, 129, 0.1)'
                      : project.difficulty === 'intermediate'
                      ? 'rgba(245, 158, 11, 0.1)'
                      : 'rgba(239, 68, 68, 0.1)',
                  color:
                    project.difficulty === 'beginner'
                      ? '#059669'
                      : project.difficulty === 'intermediate'
                      ? '#d97706'
                      : '#dc2626',
                }}
              >
                {project.difficulty.charAt(0).toUpperCase() + project.difficulty.slice(1)}
              </span>
              <span
                style={{
                  padding: '0.25rem 0.75rem',
                  borderRadius: '1rem',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  backgroundColor: 'var(--surface-2)',
                  color: 'var(--text-muted)',
                }}
              >
                {project.tests.length} tests
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div style={{ textAlign: 'center' }}>
        <Link
          href="/projects"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: 'var(--accent)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '0.5rem',
            fontWeight: 600,
            transition: 'opacity 0.2s',
          }}
          className="nav-btn-trigger"
        >
          ← Back to All Projects
        </Link>
      </div>
    </div>
  );
}
