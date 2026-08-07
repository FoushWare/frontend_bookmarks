export interface ResourceLink {
  title: string;
  url: string;
  description?: string;
}

export interface ResourceSection {
  title: string;
  icon: string;
  content?: string;
  links?: ResourceLink[];
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  category?: string;
  interviewFrequency?: number;
  quickSummary?: string;
  interviewQuestion?: {
    question: string;
    answer: string;
  };
  keyTakeaways?: string[];
}

interface ResourceGuideProps {
  sections: ResourceSection[];
}

export function ResourceGuide({ sections }: ResourceGuideProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        marginBottom: '2rem',
      }}
    >
      {sections.map((section, sIdx) => (
        <div
          key={sIdx}
          style={{
            background: 'var(--surface)',
            borderRadius: '1rem',
            border: '1px solid var(--border)',
            overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          }}
        >
          {/* Card Header */}
          <div
            style={{
              background: 'linear-gradient(135deg, var(--surface-2), var(--surface-3))',
              padding: '1.5rem 2rem',
              borderBottom: '1px solid var(--border)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '2rem', lineHeight: 1 }}>{section.icon}</span>
              <div>
                <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.02em' }}>
                  #{sIdx + 1}: {section.title}
                </h2>
                {(section.difficulty || section.category || section.interviewFrequency) && (
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.25rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    {section.difficulty && (
                      <span style={{ background: 'rgba(16,185,129,0.1)', color: '#059669', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600 }}>
                        {section.difficulty}
                      </span>
                    )}
                    {section.category && (
                      <span style={{ background: 'rgba(99,102,241,0.1)', color: '#4f46e5', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600 }}>
                        {section.category}
                      </span>
                    )}
                    {section.interviewFrequency && (
                      <span style={{ color: '#f59e0b', fontSize: '0.875rem' }}>
                        {'⭐'.repeat(section.interviewFrequency)}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Card Content */}
          <div style={{ padding: '2rem' }}>
            {/* Quick Summary */}
            {section.quickSummary && (
              <div style={{ marginBottom: '2rem', padding: '1.5rem', background: 'linear-gradient(135deg, rgba(16,185,129,0.08), rgba(16,185,129,0.04))', borderRadius: '0.75rem', border: '1px solid rgba(16,185,129,0.25)' }}>
                <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#10b981', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>⚡</span> Quick Summary
                </div>
                <div dangerouslySetInnerHTML={{ __html: section.quickSummary }} style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--text)' }} />
              </div>
            )}

            {/* Content */}
            {section.content && (
              <div style={{ marginBottom: '2rem' }}>
                <div dangerouslySetInnerHTML={{ __html: section.content }} style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--text)' }} />
              </div>
            )}

            {/* Interview Question */}
            {section.interviewQuestion && (
              <div style={{ marginBottom: '2rem', padding: '1.5rem', background: 'linear-gradient(135deg, rgba(245,158,11,0.12), rgba(245,158,11,0.05))', borderRadius: '0.75rem', border: '1px solid rgba(245,158,11,0.3)' }}>
                <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#f59e0b', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>🎯</span> Interview Question
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <span style={{ fontWeight: 600, color: 'var(--text)', fontSize: '0.9rem' }}>Q: </span>
                  <span style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--text)' }}>{section.interviewQuestion?.question}</span>
                </div>
                <div>
                  <span style={{ fontWeight: 600, color: 'var(--text)', fontSize: '0.9rem' }}>A: </span>
                  <span style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--text)' }}>{section.interviewQuestion?.answer}</span>
                </div>
              </div>
            )}

            {/* Key Takeaways */}
            {section.keyTakeaways && section.keyTakeaways.length > 0 && (
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>✅</span> Key Takeaways
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.75rem' }}>
                  {section.keyTakeaways.map((takeaway, tIdx) => (
                    <li key={tIdx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', padding: '0.875rem', background: 'rgba(99,102,241,0.08)', borderRadius: '0.5rem', border: '1px solid rgba(99,102,241,0.15)' }}>
                      <span style={{ color: '#10b981', fontSize: '1.25rem', lineHeight: 1, marginTop: '-0.125rem' }}>✓</span>
                      <span dangerouslySetInnerHTML={{ __html: takeaway }} style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--text)', flex: 1 }} />
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Links */}
            {section.links && section.links.length > 0 && (
              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>📖</span> References
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.75rem' }}>
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.25rem',
                          textDecoration: 'none',
                          color: 'var(--text)',
                          padding: '1rem',
                          background: 'var(--surface-2)',
                          borderRadius: '0.5rem',
                          border: '1px solid var(--border)',
                          transition: 'all 0.2s ease',
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.background = 'var(--surface-3)';
                          e.currentTarget.style.borderColor = 'var(--accent)';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.background = 'var(--surface-2)';
                          e.currentTarget.style.borderColor = 'var(--border)';
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--accent-dark)' }}>
                            {link.title}
                          </span>
                          <span style={{ color: 'var(--accent)', fontSize: '1.25rem' }}>→</span>
                        </div>
                        {link.description && (
                          <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                            {link.description}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ResourceGuide;
