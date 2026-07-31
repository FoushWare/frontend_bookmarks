'use client';

import Link from 'next/link';
import { useEffect } from 'react';

/* ─── Category data ──────────────────────────────────────────── */
const categories = [
  {
    href: '/html',
    emoji: '📄',
    title: 'HTML',
    desc: 'Semantics, accessibility, forms, media & SEO best practices for the modern web.',
    badge: 'Beginner',
    badgeClass: 'badge-beginner',
    topics: 5,
    cardClass: 'card-html',
  },
  {
    href: '/css',
    emoji: '🎨',
    title: 'CSS',
    desc: 'Flexbox, Grid, animations, responsive design & cutting-edge layout techniques.',
    badge: 'Intermediate',
    badgeClass: 'badge-intermediate',
    topics: 10,
    cardClass: 'card-css',
  },
  {
    href: '/javascript',
    emoji: '⚡',
    title: 'JavaScript',
    desc: 'Fundamentals to ES2024, async, DOM, OOP, and functional programming patterns.',
    badge: 'Advanced',
    badgeClass: 'badge-advanced',
    topics: 6,
    cardClass: 'card-js',
  },
  {
    href: '/patterns',
    emoji: '🧩',
    title: 'Patterns',
    desc: 'Design patterns, rendering strategies, and architectural patterns at scale.',
    badge: 'Advanced',
    badgeClass: 'badge-advanced',
    topics: 10,
    cardClass: 'card-pat',
  },
  {
    href: '/questions',
    emoji: '💡',
    title: 'Interview Q&A',
    desc: 'Comprehensive Q&A for HTML, CSS, JS, React, TypeScript, performance & system design.',
    badge: 'Senior',
    badgeClass: 'badge-senior',
    topics: 9,
    cardClass: 'card-q',
  },
  {
    href: '/frontend-mentor',
    emoji: '🏆',
    title: 'Frontend Mentor',
    desc: 'Real-world challenges to sharpen your practical UI-building skills.',
    badge: 'Intermediate',
    badgeClass: 'badge-intermediate',
    topics: 2,
    cardClass: 'card-fm',
  },
];

/* ─── Avatar bubbles ─────────────────────────────────────────── */
const avatarEmojis = ['👨‍💻', '👩‍💻', '🧑‍💻', '👨‍🎨', '👩‍🎨', '🧑‍🎨'];

/* ─── Sample code lines for mockup ──────────────────────────────*/
const codeLines = [
  { num: 1,  html: '<span class="code-kw">import</span> <span class="code-txt">React</span> <span class="code-kw">from</span> <span class="code-str">\'react\'</span>;' },
  { num: 2,  html: '' },
  { num: 3,  html: '<span class="code-kw">const</span> <span class="code-fn">TodoList</span> <span class="code-txt">= () =&gt; {</span>' },
  { num: 4,  html: '&nbsp;&nbsp;<span class="code-kw">const</span> <span class="code-txt">[tasks, setTasks]</span> <span class="code-dim">=</span>' },
  { num: 5,  html: '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-fn">useState</span><span class="code-txt">([]);</span>' },
  { num: 6,  html: '' },
  { num: 7,  html: '&nbsp;&nbsp;<span class="code-kw">const</span> <span class="code-fn">addTask</span> <span class="code-txt">= (text) =&gt; {</span>' },
  { num: 8,  html: '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-fn">setTasks</span><span class="code-txt">(prev =&gt; [</span>' },
  { num: 9,  html: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-txt">...prev,</span>' },
  { num: 10, html: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-txt">{ id: </span><span class="code-fn">Date.now</span><span class="code-txt">(), text }</span>' },
  { num: 11, html: '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-txt">]);</span>' },
  { num: 12, html: '&nbsp;&nbsp;<span class="code-txt">};</span>' },
  { num: 13, html: '' },
  { num: 14, html: '&nbsp;&nbsp;<span class="code-kw">return</span> <span class="code-txt">(</span>' },
  { num: 15, html: '&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-dim">&lt;</span><span class="code-kw">div</span> <span class="code-fn">className</span><span class="code-txt">=</span><span class="code-str">"todo-list"</span><span class="code-dim">&gt;</span>' },
  { num: 16, html: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-dim">&lt;</span><span class="code-kw">h1</span><span class="code-dim">&gt;</span><span class="code-txt">Todo List</span><span class="code-dim">&lt;/</span><span class="code-kw">h1</span><span class="code-dim">&gt;</span>' },
];

/* ─── Preview panel ─────────────────────────────────────────────*/
const previewItems = ['Walk the dog', 'Water the plants', 'Wash the dishes'];

export default function HomePage() {
  /* IntersectionObserver fallback for browsers without scroll-driven animations */
  useEffect(() => {
    if (
      typeof window === 'undefined' ||
      CSS.supports('(animation-timeline: view()) and (animation-range: entry)')
    ) return;

    // Mockup tilt fallback
    const mockup = document.querySelector('.mockup-card') as HTMLElement | null;
    if (mockup) {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            const ratio = entry.intersectionRatio;
            const rotateX = 28 * (1 - ratio);
            const scale = 0.88 + 0.12 * ratio;
            const opacity = 0.7 + 0.3 * ratio;
            (entry.target as HTMLElement).style.transform =
              `perspective(1200px) rotateX(${rotateX}deg) scale(${scale})`;
            (entry.target as HTMLElement).style.opacity = String(opacity);
          }
        },
        { threshold: Array.from({ length: 101 }, (_, i) => i / 100) }
      );
      observer.observe(mockup);
    }

    // Card scroll reveals
    const cards = document.querySelectorAll<HTMLElement>('.scroll-reveal');
    const cardObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        }
      },
      { threshold: 0.15 }
    );
    cards.forEach((c) => cardObserver.observe(c));

    return () => {
      cardObserver.disconnect();
    };
  }, []);

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)' }}>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="hero-section">
        <div
          className="hero-content"
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* Left — copy */}
          <div>
            <div className="accent-badge" style={{ marginBottom: '1.5rem' }}>
              <span>✦</span>
              <span>Frontend interview prep platform</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: '-0.04em',
                marginBottom: '1.25rem',
                color: 'var(--text)',
              }}
            >
              Master frontend<br />
              <span
                style={{
                  color: 'var(--accent-dark)',
                }}
              >
                development
              </span>{' '}
              with ease
            </h1>

            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.7,
                color: 'var(--text-muted)',
                marginBottom: '2rem',
                maxWidth: '480px',
              }}
            >
              The complete learning platform for modern frontend engineers. Interactive examples,
              curated references, and real interview prep — all in one place.
            </p>

            {/* CTA row */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
                alignItems: 'center',
                marginBottom: '2rem',
              }}
            >
              <Link href="/css" className="btn-accent">
                Get started now →
              </Link>
              <Link href="/questions" className="btn-ghost">
                Interview prep
              </Link>
            </div>

            {/* Social proof */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.875rem',
                flexWrap: 'wrap',
              }}
            >
              <div className="avatar-stack">
                {avatarEmojis.map((emoji, i) => (
                  <div
                    key={i}
                    className="avatar-bubble"
                    style={{ marginLeft: i === 0 ? 0 : '-0.5rem', fontSize: '1rem' }}
                  >
                    {emoji}
                  </div>
                ))}
              </div>
              <div>
                <div
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--text)',
                  }}
                >
                  2,000+ engineers learning
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Join the community today
                </div>
              </div>
            </div>
          </div>

          {/* Right — animated mockup */}
          <div className="mockup-perspective-wrapper">
            <div className="mockup-card">
              {/* Browser chrome */}
              <div className="mock-browser">
                <div className="mock-dot" style={{ background: '#ff5f57' }} />
                <div className="mock-dot" style={{ background: '#febc2e' }} />
                <div className="mock-dot" style={{ background: '#28c840' }} />
                <div className="mock-urlbar">frontendbookmarks.dev</div>
              </div>

              {/* Editor layout */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  height: '340px',
                  overflow: 'hidden',
                }}
              >
                {/* Code editor panel */}
                <div className="mock-editor" style={{ borderRight: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="editor-tabs">
                    <div className="editor-tab active">App.jsx</div>
                    <div className="editor-tab">styles.css</div>
                  </div>
                  <div className="editor-body" style={{ paddingTop: '0.75rem' }}>
                    <div className="line-nums">
                      {codeLines.map((l) => (
                        <div key={l.num}>{l.num}</div>
                      ))}
                    </div>
                    <div className="code-lines">
                      {codeLines.map((l, i) => (
                        <div
                          key={i}
                          dangerouslySetInnerHTML={{ __html: l.html || '&nbsp;' }}
                          style={{ whiteSpace: 'pre' }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Preview panel */}
                <div
                  style={{
                    background: 'var(--surface)',
                    padding: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      color: 'var(--text-faint)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginBottom: '0.75rem',
                    }}
                  >
                    Browser Preview
                  </div>
                  <div
                    style={{
                      background: 'var(--bg-subtle, var(--surface-2))',
                      borderRadius: '0.5rem',
                      padding: '1rem',
                      flex: 1,
                      border: '1px solid var(--border)',
                    }}
                  >
                    <h2
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        color: 'var(--text)',
                        marginBottom: '0.75rem',
                      }}
                    >
                      Todo List
                    </h2>
                    <div
                      style={{
                        display: 'flex',
                        gap: '0.4rem',
                        marginBottom: '0.75rem',
                      }}
                    >
                      <input
                        readOnly
                        placeholder="Add your task"
                        style={{
                          flex: 1,
                          padding: '0.35rem 0.6rem',
                          borderRadius: '0.375rem',
                          border: '1px solid var(--border-strong)',
                          background: 'var(--surface)',
                          color: 'var(--text)',
                          fontSize: '0.75rem',
                          outline: 'none',
                        }}
                      />
                      <button
                        style={{
                          padding: '0.35rem 0.6rem',
                          borderRadius: '0.375rem',
                          background: 'var(--accent)',
                          color: 'var(--accent-text)',
                          border: 'none',
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                        }}
                      >
                        Submit
                      </button>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {previewItems.map((item, i) => (
                        <li
                          key={i}
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '0.3rem 0',
                            fontSize: '0.78rem',
                            color: 'var(--text-2)',
                            borderBottom: i < previewItems.length - 1
                              ? '1px solid var(--border)'
                              : 'none',
                          }}
                        >
                          <span>• {item}</span>
                          <span
                            style={{
                              fontSize: '0.65rem',
                              color: 'var(--text-faint)',
                              background: 'var(--surface-3)',
                              padding: '0.1rem 0.4rem',
                              borderRadius: '4px',
                            }}
                          >
                            Delete
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CATEGORIES
      ══════════════════════════════════════ */}
      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '5rem 1.5rem 6rem',
        }}
      >
        {/* Section header */}
        <div style={{ marginBottom: '3rem' }}>
          <p className="section-label">Learning Paths</p>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: 'var(--text)',
              marginBottom: '0.75rem',
            }}
          >
            Everything you need to level up
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '520px' }}>
            Curated learning paths, interactive examples, and interview Q&A — structured for how developers actually learn.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1rem',
          }}
        >
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className={`topic-card scroll-reveal ${cat.cardClass}`}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem', marginBottom: '0.875rem' }}>
                <div className="topic-icon">{cat.emoji}</div>
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: 'var(--text)',
                      marginBottom: '0.2rem',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {cat.title}
                  </h3>
                  <span className={`badge ${cat.badgeClass}`}>{cat.badge}</span>
                </div>
              </div>
              <p
                style={{
                  fontSize: '0.875rem',
                  lineHeight: 1.6,
                  color: 'var(--text-muted)',
                  marginBottom: '1.25rem',
                  flex: 1,
                }}
              >
                {cat.desc}
              </p>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '0.8rem',
                  color: 'var(--text-faint)',
                  borderTop: '1px solid var(--border)',
                  paddingTop: '0.875rem',
                }}
              >
                <span>{cat.topics} topics</span>
                <span style={{ color: 'var(--accent-dark)', fontWeight: 600 }}>Explore →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          FOOTER
      ══════════════════════════════════════ */}
      <footer
        style={{
          borderTop: '1px solid var(--border)',
          padding: '2rem 1.5rem',
          textAlign: 'center',
          fontSize: '0.875rem',
          color: 'var(--text-faint)',
        }}
      >
        Built for frontend developers · 🚀 Happy learning
      </footer>

      {/* IntersectionObserver fallback script (inline) */}
      {/* Handled in useEffect above */}
    </div>
  );
}
