export interface ResourceLink {
  title: string;
  url: string;
  description?: string;
}

export interface ResourceSection {
  title: string;
  icon: string;
  links: ResourceLink[];
}

interface ResourceGuideProps {
  sections: ResourceSection[];
}

export function ResourceGuide({ sections }: ResourceGuideProps) {
  return (
    <div
      style={{
        background: 'var(--surface-2)',
        borderRadius: '1.25rem',
        padding: '1.75rem',
        marginBottom: '2rem',
        border: '1px solid var(--border)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}
      >
        {sections.map((section, sIdx) => (
          <div
            key={sIdx}
            className="topic-card"
            style={{
              background: 'var(--surface)',
              borderRadius: '0.875rem',
              padding: '1.25rem',
              border: '1px solid var(--border)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem',
                marginBottom: '1rem',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid var(--border)',
              }}
            >
              <span style={{ fontSize: '1.35rem', lineHeight: 1 }}>{section.icon}</span>
              <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 700, color: 'var(--text)' }}>
                {section.title}
              </h3>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {section.links.map((link, lIdx) => (
                <li key={lIdx}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resource-link-item"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.2rem',
                      textDecoration: 'none',
                      color: 'var(--text)',
                      padding: '0.5rem 0.625rem',
                      borderRadius: '0.375rem',
                      transition: 'background 0.15s ease',
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        color: 'var(--accent-dark)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      {link.title} <span style={{ opacity: 0.7 }}>→</span>
                    </span>
                    {link.description && (
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                        {link.description}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResourceGuide;
