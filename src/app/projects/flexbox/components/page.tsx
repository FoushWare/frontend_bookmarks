import Link from 'next/link';

export default function IndividualComponentsPage() {
  const componentProjects = [
    {
      id: 'button',
      title: 'Button Component',
      icon: '🔘',
      description: 'Build a flexible button component with different sizes and variants',
      difficulty: 'beginner',
      flexboxConcepts: ['justify-content', 'align-items', 'gap'],
      source: 'Frontend Mentor',
    },
    {
      id: 'card',
      title: 'Card Component',
      icon: '🃏',
      description: 'Create a card component with image, title, and content',
      difficulty: 'beginner',
      flexboxConcepts: ['flex-direction', 'justify-content', 'align-items'],
      source: 'GreatFrontend',
    },
    {
      id: 'navbar',
      title: 'Navbar Component',
      icon: '🧭',
      description: 'Build a responsive navigation bar with logo and menu',
      difficulty: 'intermediate',
      flexboxConcepts: ['justify-content', 'align-items', 'flex-wrap'],
      source: 'Frontend Mentor',
    },
    {
      id: 'badge',
      title: 'Badge Component',
      icon: '🏷️',
      description: 'Create badge components with icons and text',
      difficulty: 'beginner',
      flexboxConcepts: ['justify-content', 'align-items', 'gap'],
      source: 'GreatFrontend',
    },
    {
      id: 'avatar',
      title: 'Avatar Component',
      icon: '👤',
      description: 'Build avatar components with different sizes and status indicators',
      difficulty: 'beginner',
      flexboxConcepts: ['justify-content', 'align-items'],
      source: 'Frontend Mentor',
    },
    {
      id: 'input-group',
      title: 'Input Group Component',
      icon: '📝',
      description: 'Create input groups with labels, inputs, and helper text',
      difficulty: 'intermediate',
      flexboxConcepts: ['flex-direction', 'justify-content', 'align-items'],
      source: 'GreatFrontend',
    },
    {
      id: 'list',
      title: 'List Component',
      icon: '📋',
      description: 'Build list components with icons and actions',
      difficulty: 'beginner',
      flexboxConcepts: ['justify-content', 'align-items', 'gap'],
      source: 'Frontend Mentor',
    },
    {
      id: 'modal',
      title: 'Modal Component',
      icon: '🪟',
      description: 'Create a modal component with header, body, and footer',
      difficulty: 'advanced',
      flexboxConcepts: ['flex-direction', 'justify-content', 'align-items'],
      source: 'GreatFrontend',
    },
    {
      id: 'tooltip',
      title: 'Tooltip Component',
      icon: '💡',
      description: 'Build tooltip components with positioning using flexbox',
      difficulty: 'intermediate',
      flexboxConcepts: ['justify-content', 'align-items'],
      source: 'Frontend Mentor',
    },
    {
      id: 'progress-bar',
      title: 'Progress Bar Component',
      icon: '📊',
      description: 'Create progress bar components with labels',
      difficulty: 'beginner',
      flexboxConcepts: ['justify-content', 'align-items'],
      source: 'GreatFrontend',
    },
  ];

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--text)', marginBottom: '1rem' }}>
          🧩 Individual Components
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
          Practice building individual UI components using flexbox. Each component focuses on specific flexbox properties while creating reusable UI elements from real-world projects.
        </p>
      </div>

      {/* Filter by Source */}
      <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <span style={{ fontWeight: 600, color: 'var(--text)', alignSelf: 'center' }}>Source:</span>
        {['Frontend Mentor', 'GreatFrontend'].map((source) => (
          <span
            key={source}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
              fontWeight: 500,
              backgroundColor: 'var(--surface-2)',
              color: 'var(--text-muted)',
              border: '1px solid var(--border)',
            }}
          >
            {source}
          </span>
        ))}
      </div>

      {/* Component Projects */}
      <div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {componentProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/flexbox/${project.id}`}
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <div
                style={{
                  background: 'var(--surface-2)',
                  border: '1px solid var(--border)',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  transition: 'all 0.2s',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{project.icon}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.5rem' }}>
                  {project.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, flex: 1, marginBottom: '1rem' }}>
                  {project.description}
                </p>
                <div style={{ marginBottom: '1rem' }}>
                  <strong style={{ color: 'var(--text)', fontSize: '0.875rem' }}>Flexbox Concepts:</strong>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                    {project.flexboxConcepts.map((concept) => (
                      <code
                        key={concept}
                        style={{
                          padding: '0.25rem 0.5rem',
                          borderRadius: '0.25rem',
                          fontSize: '0.75rem',
                          backgroundColor: 'var(--surface-3)',
                          color: 'var(--accent)',
                          fontFamily: 'monospace',
                        }}
                      >
                        {concept}
                      </code>
                    ))}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
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
                      backgroundColor: 'var(--surface-3)',
                      color: 'var(--text-muted)',
                    }}
                  >
                    📚 {project.source}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <Link
          href="/projects/flexbox"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: 'var(--surface-2)',
            color: 'var(--text)',
            textDecoration: 'none',
            borderRadius: '0.5rem',
            fontWeight: 600,
            transition: 'opacity 0.2s',
            border: '1px solid var(--border)',
          }}
        >
          ← Back to Flexbox Projects
        </Link>
      </div>
    </div>
  );
}
