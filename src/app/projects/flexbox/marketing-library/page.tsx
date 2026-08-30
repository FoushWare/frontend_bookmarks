'use client';

import { useState } from 'react';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import PageSidebar from '@/components/PageSidebar';
import { getTopicNavigation } from '@/data/navigation';

const exercises = [
  {
    id: 'testimonial-card',
    title: 'Testimonial Card',
    description: 'Customer quote with avatar, name, and role',
    icon: '💬',
    number: '01',
    difficulty: 'beginner',
    path: '/exercises/flexbox/testimonial-card',
  },
  {
    id: 'blog-card',
    title: 'Blog Card',
    description: 'Article preview with image, title, and metadata',
    icon: '📝',
    number: '02',
    difficulty: 'beginner',
    path: '/exercises/flexbox/blog-card',
  },
  {
    id: 'feature-card',
    title: 'Feature Card',
    description: 'Product feature with icon, title, and description',
    icon: '🎯',
    number: '03',
    difficulty: 'intermediate',
    path: '/exercises/flexbox/feature-card',
  },
  {
    id: 'pricing-card',
    title: 'Pricing Card',
    description: 'Pricing tier with features and CTA button',
    icon: '💰',
    number: '04',
    difficulty: 'intermediate',
    path: '/exercises/flexbox/pricing-card',
  },
  {
    id: 'cta-button',
    title: 'CTA Button',
    description: 'Call-to-action button with hover effects',
    icon: '🔘',
    number: '05',
    difficulty: 'beginner',
    path: '/exercises/flexbox/cta-button',
  },
  {
    id: 'navigation-bar',
    title: 'Navigation Bar',
    description: 'Responsive navigation with logo and links',
    icon: '🧭',
    number: '06',
    difficulty: 'intermediate',
    path: '/exercises/flexbox/navigation-bar',
  },
  {
    id: 'footer',
    title: 'Footer',
    description: 'Website footer with links and copyright',
    icon: '📋',
    number: '07',
    difficulty: 'intermediate',
    path: '/exercises/flexbox/footer',
  },
  {
    id: 'social-proof',
    title: 'Social Proof',
    description: 'Trusted by strip with avatars, ratings, and logos',
    icon: '⭐',
    number: '08',
    difficulty: 'intermediate',
    path: '/exercises/flexbox/social-proof',
  },
];

export default function MarketingLibraryPage() {
  const [completedExercises, setCompletedExercises] = useState<Set<string>>(new Set());
  const [activeExercise, setActiveExercise] = useState<string | null>(null);

  const toggleComplete = (exerciseId: string) => {
    setCompletedExercises(prev => {
      const newSet = new Set(prev);
      if (newSet.has(exerciseId)) {
        newSet.delete(exerciseId);
      } else {
        newSet.add(exerciseId);
      }
      return newSet;
    });
  };

  const topicNav = getTopicNavigation('flexbox');
  const progress = (completedExercises.size / 8) * 100;

  return (
    <PageLayout
      sidebar={
        <PageSidebar
          category="CSS"
          topic="Flexbox"
          navigation={topicNav?.navigation || []}
        />
      }
    >
      <div style={{ background: 'linear-gradient(180deg, var(--bg) 0%, var(--surface) 100%)', minHeight: '100vh' }}>
        {/* Library Info */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 700, color: 'var(--coral)', background: 'var(--coral-dim)', border: '1px solid rgba(255,107,74,.35)', padding: '6px 14px', borderRadius: '999px', marginBottom: '16px' }}>
            <span>🛠️</span>
            <span>Component Library</span>
            <span style={{ opacity: 0.5 }}>|</span>
            <span style={{ fontSize: '0.9em', color: 'var(--muted)', direction: 'rtl' }}>مكتبة المكونات</span>
          </div>
          <h1 style={{ fontSize: '48px', fontWeight: 800, margin: '0 0 12px', background: 'linear-gradient(135deg, var(--text) 0%, var(--teal) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Marketing Component Library
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--muted)', maxWidth: '640px', margin: '0 0 24px', lineHeight: 1.6 }}>
            Build a complete marketing component library using flexbox. Complete all 7 exercises to master real-world flexbox patterns.
          </p>
        </div>

        {/* Complete Library Preview */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '40px', marginBottom: '32px', boxShadow: '0 4px 20px -8px rgba(0,0,0,0.3)' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 24px', color: 'var(--text)' }}>
            Complete Library Preview
          </h2>
          <p style={{ color: 'var(--muted)', marginBottom: '24px', fontSize: '15px' }}>
            When all components are combined, they form a cohesive marketing page. Here's what you'll build:
          </p>
          
          {/* Marketing Page Mockup */}
          <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '16px', padding: '32px', maxWidth: '800px', margin: '0 auto' }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', background: 'var(--coral)', borderRadius: '8px' }} />
                <span style={{ fontSize: '18px', fontWeight: 700 }}>BrandLogo</span>
              </div>
              <div style={{ display: 'flex', gap: '16px', fontSize: '14px' }}>
                <span>Products</span>
                <span>Features</span>
                <span>Pricing</span>
                <span>Contact</span>
              </div>
            </div>
            
            {/* Hero Section */}
            <div style={{ textAlign: 'center', marginBottom: '32px', padding: '32px', background: 'var(--surface-2)', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '12px' }}>Build Better Products Faster</h3>
              <p style={{ color: 'var(--muted)', marginBottom: '16px' }}>The all-in-one platform for modern development teams</p>
              <button style={{ padding: '12px 24px', background: 'linear-gradient(135deg, var(--coral) 0%, var(--teal) 100%)', border: 'none', borderRadius: '8px', color: '#0e2440', fontWeight: 700, cursor: 'pointer' }}>
                Get Started
              </button>
            </div>

            {/* Components Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {/* Testimonial Cards */}
              <div style={{ background: 'var(--surface-2)', borderRadius: '12px', padding: '16px' }}>
                <div style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '8px' }}>Testimonials</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[1, 2].map((i) => (
                    <div key={i} style={{ background: 'var(--bg)', borderRadius: '8px', padding: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '32px', height: '32px', background: 'var(--coral)', borderRadius: '50%' }} />
                      <div>
                        <div style={{ fontSize: '12px', fontWeight: 600 }}>User {i}</div>
                        <div style={{ fontSize: '10px', color: 'var(--muted)' }}>Developer</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Feature Cards */}
              <div style={{ background: 'var(--surface-2)', borderRadius: '12px', padding: '16px' }}>
                <div style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '8px' }}>Features</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[1, 2, 3].map((i) => (
                    <div key={i} style={{ background: 'var(--bg)', borderRadius: '8px', padding: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '32px', height: '32px', background: 'var(--teal)', borderRadius: '8px' }} />
                      <div>
                        <div style={{ fontSize: '12px', fontWeight: 600 }}>Feature {i}</div>
                        <div style={{ fontSize: '10px', color: 'var(--muted)' }}>Description</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Cards */}
              <div style={{ background: 'var(--surface-2)', borderRadius: '12px', padding: '16px' }}>
                <div style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '8px' }}>Pricing</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    { price: '$9', name: 'Basic' },
                    { price: '$29', name: 'Pro' },
                    { price: '$99', name: 'Enterprise' }
                  ].map((plan, i) => (
                    <div key={i} style={{ background: 'var(--bg)', borderRadius: '8px', padding: '12px', border: '1px solid var(--border)' }}>
                      <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '4px' }}>{plan.name}</div>
                      <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--teal)' }}>{plan.price}</div>
                      <button style={{ marginTop: '8px', padding: '6px 12px', background: 'var(--coral)', border: 'none', borderRadius: '4px', fontSize: '11px', fontWeight: 600, color: '#0e2440', cursor: 'pointer' }}>
                        Choose
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Preview */}
            <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--muted)' }}>
              <span>© 2024 Brand</span>
              <div style={{ display: 'flex', gap: '16px' }}>
                <span>About</span>
                <span>Privacy</span>
                <span>Terms</span>
              </div>
            </div>
          </div>
        </div>

        {/* Exercise List */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '40px', boxShadow: '0 4px 20px -8px rgba(0,0,0,0.3)' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 24px', color: 'var(--text)' }}>
            Build Each Component
          </h2>
          <p style={{ color: 'var(--muted)', marginBottom: '32px', fontSize: '15px' }}>
            Complete each exercise in order to build the complete library. Click on any component to start practicing.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
            {exercises.map((exercise) => (
              <Link
                key={exercise.id}
                href={exercise.path}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div
                  style={{
                    background: 'var(--surface-2)',
                    border: completedExercises.has(exercise.id) ? '2px solid var(--teal)' : '1px solid var(--border)',
                    borderRadius: '16px',
                    padding: '24px',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                    position: 'relative',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-strong)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = completedExercises.has(exercise.id) ? 'var(--teal)' : 'var(--border)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Completion badge */}
                  {completedExercises.has(exercise.id) && (
                    <div style={{ position: 'absolute', top: '16px', right: '16px', width: '24px', height: '24px', background: 'var(--teal)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0e2440', fontSize: '14px', fontWeight: 700 }}>
                      ✓
                    </div>
                  )}

                  <div style={{ fontSize: '32px', marginBottom: '16px' }}>{exercise.icon}</div>
                  
                  <div style={{ 
                    fontFamily: 'monospace', 
                    fontSize: '11px', 
                    padding: '4px 8px', 
                    borderRadius: '6px', 
                    background: 'var(--coral-dim)', 
                    color: 'var(--coral)', 
                    border: '1px solid rgba(255,107,74,.3)', 
                    fontWeight: 600,
                    display: 'inline-block',
                    marginBottom: '12px'
                  }}>
                    {exercise.number} / 07
                  </div>

                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text)', marginBottom: '8px' }}>
                    {exercise.title}
                  </h3>
                  
                  <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.5, marginBottom: '16px' }}>
                    {exercise.description}
                  </p>

                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <span style={{ 
                      fontSize: '12px', 
                      padding: '4px 10px', 
                      borderRadius: '999px', 
                      background: exercise.difficulty === 'beginner' 
                        ? 'rgba(16, 185, 129, 0.1)' 
                        : 'rgba(245, 158, 11, 0.1)', 
                      color: exercise.difficulty === 'beginner' 
                        ? '#059669' 
                        : '#d97706', 
                      fontWeight: 600 
                    }}>
                      {exercise.difficulty.charAt(0).toUpperCase() + exercise.difficulty.slice(1)}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Completion Message */}
          {completedExercises.size === 8 && (
            <div style={{ 
              marginTop: '32px', 
              padding: '24px', 
              background: 'linear-gradient(135deg, var(--teal-dim) 0%, var(--blue-dim) 100%)', 
              border: '1px solid rgba(94,234,212,.3)', 
              borderRadius: '16px', 
              textAlign: 'center',
              color: 'var(--teal)',
              fontSize: '16px',
              fontWeight: 700
            }}>
              🎉 Congratulations! You've completed the entire Marketing Component Library!
            </div>
          )}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link
            href="/exercises/flexbox"
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
              marginBottom: '1rem',
            }}
          >
            📝 Start Individual Exercises
          </Link>
          <div style={{ marginTop: '1rem' }}>
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
              ← Back to All Projects
            </Link>
          </div>
        </div>

        <footer style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '13px', marginTop: '60px', padding: '24px', borderTop: '1px solid var(--border)' }}>
          🛠️ Component Library · Marketing Track · Flexbox Exercises
        </footer>
      </div>
    </PageLayout>
  );
}