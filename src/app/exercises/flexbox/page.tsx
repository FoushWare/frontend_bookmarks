'use client';

import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import PageSidebar from '@/components/PageSidebar';
import { getTopicNavigation } from '@/data/navigation';

const exercises = [
  {
    id: 'testimonial-card',
    title: 'Testimonial Card',
    description: 'Build a testimonial card with flexbox layout',
    difficulty: 'beginner',
    icon: '💬',
  },
  {
    id: 'blog-card',
    title: 'Blog Card',
    description: 'Create a blog post card with flexbox',
    difficulty: 'beginner',
    icon: '📝',
  },
  {
    id: 'feature-card',
    title: 'Feature Card',
    description: 'Design a feature highlight card',
    difficulty: 'intermediate',
    icon: '🎯',
  },
  {
    id: 'pricing-card',
    title: 'Pricing Card',
    description: 'Build a pricing table with flexbox',
    difficulty: 'intermediate',
    icon: '💰',
  },
  {
    id: 'cta-button',
    title: 'CTA Button',
    description: 'Create call-to-action buttons',
    difficulty: 'beginner',
    icon: '🔘',
  },
  {
    id: 'navigation-bar',
    title: 'Navigation Bar',
    description: 'Build responsive navigation bars',
    difficulty: 'intermediate',
    icon: '🧭',
  },
  {
    id: 'footer',
    title: 'Footer',
    description: 'Design footer layouts with flexbox',
    difficulty: 'intermediate',
    icon: '📋',
  },
  {
    id: 'social-proof',
    title: 'Social Proof',
    description: 'Build trusted by strip with avatars and logos',
    difficulty: 'intermediate',
    icon: '⭐',
  },
];

export default function FlexboxExercisesPage() {
  const topicNav = getTopicNavigation('flexbox');

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
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--text)', marginBottom: '1rem' }}>
          📦 Flexbox Exercises
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
          Practice flexbox concepts with interactive exercises
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
        {exercises.map((exercise) => (
          <Link
            key={exercise.id}
            href={`/exercises/flexbox/${exercise.id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div
              className="exercise-card"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '1rem',
                padding: '1.75rem',
                transition: 'border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
                height: '100%',
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                {exercise.icon}
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.5rem' }}>
                {exercise.title}
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {exercise.description}
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span
                  style={{
                    padding: '0.25rem 0.75rem',
                    borderRadius: '1rem',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    backgroundColor:
                      exercise.difficulty === 'beginner'
                        ? 'rgba(16, 185, 129, 0.1)'
                        : 'rgba(245, 158, 11, 0.1)',
                    color:
                      exercise.difficulty === 'beginner'
                        ? '#059669'
                        : '#d97706',
                  }}
                >
                  {exercise.difficulty.charAt(0).toUpperCase() + exercise.difficulty.slice(1)}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div style={{ textAlign: 'center' }}>
        <Link
          href="/projects/flexbox"
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
          🛠️ View Complete Marketing Library Project
        </Link>
        <div style={{ marginTop: '1rem' }}>
          <Link
            href="/css/flexbox"
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
            ← Back to Flexbox Overview
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}