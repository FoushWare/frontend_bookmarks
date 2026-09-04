'use client';

import { useState } from 'react';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import PageSidebar from '@/components/PageSidebar';
import { getTopicNavigation } from '@/data/navigation';

const exercises = [
  {
    id: 'product-card',
    title: 'Product Card',
    description: 'Shop product card with image, badge, wishlist, rating, and price',
    icon: '🛍️',
    number: '01',
    difficulty: 'intermediate',
    path: '/exercises/flexbox/product-card',
  },
  {
    id: 'category-card',
    title: 'Category Card',
    description: 'Category thumbnail with image overlay and label',
    icon: '🗂️',
    number: '02',
    difficulty: 'beginner',
    path: '/exercises/flexbox/category-card',
  },
  {
    id: 'cart-item',
    title: 'Cart Item',
    description: 'Shopping cart item with image, details, and quantity controls',
    icon: '🧾',
    number: '03',
    difficulty: 'intermediate',
    path: '/exercises/flexbox/cart-item',
  },
  {
    id: 'price-rating',
    title: 'Price / Rating',
    description: 'Price display with discount and star rating component',
    icon: '⭐',
    number: '04',
    difficulty: 'beginner',
    path: '/exercises/flexbox/price-rating',
  },
  {
    id: 'filter-sidebar',
    title: 'Filter Sidebar',
    description: 'Sidebar with filter categories and price range slider',
    icon: '🧰',
    number: '05',
    difficulty: 'advanced',
    path: '/exercises/flexbox/filter-sidebar',
  },
  {
    id: 'order-summary',
    title: 'Order Summary',
    description: 'Checkout order summary with items, taxes, and total',
    icon: '🧮',
    number: '06',
    difficulty: 'intermediate',
    path: '/exercises/flexbox/order-summary',
  },
  {
    id: 'announcement-bar',
    title: 'Announcement Bar',
    description: 'Top banner with promotional message and close button',
    icon: '📢',
    number: '07',
    difficulty: 'beginner',
    path: '/exercises/flexbox/announcement-bar',
  },
  {
    id: 'empty-state',
    title: 'Empty State',
    description: 'Empty cart or search results with helpful message',
    icon: '📭',
    number: '08',
    difficulty: 'beginner',
    path: '/exercises/flexbox/empty-state',
  },
];

export default function EcommerceLibraryPage() {
  const [completedExercises, setCompletedExercises] = useState<Set<string>>(new Set());

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
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 700, color: 'var(--yellow)', background: 'var(--yellow-dim)', border: '1px solid ' + 'rgba(255,209,102,.35)', padding: '6px 14px', borderRadius: '999px', marginBottom: '16px' }}>
            <span>🛒</span>
            <span>E-commerce Track</span>
            <span style={{ opacity: 0.5 }}>|</span>
            <span style={{ fontSize: '0.9em', color: 'var(--muted)', direction: 'rtl' }}>مشروع التجارة الإلكترونية</span>
          </div>
          <h1 style={{ fontSize: '48px', fontWeight: 800, margin: '0 0 12px', background: 'linear-gradient(135deg, var(--text) 0%, var(--yellow) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            E-commerce Component Library
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--muted)', maxWidth: '640px', margin: '0 0 24px', lineHeight: 1.6 }}>
            Build a complete e-commerce component library using flexbox. These components are reused across Home, Shop, Product, Cart, and Checkout pages.
          </p>
        </div>

        {/* Progress Bar */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px', padding: '20px 24px', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '13px', fontWeight: 600, color: 'var(--muted)' }}>
              <span>Progress</span>
              <span>{completedExercises.size} / 8 completed</span>
            </div>
            <div style={{ height: '8px', background: 'var(--bg)', borderRadius: '99px', overflow: 'hidden' }}>
              <div style={{ height: '100%', background: 'linear-gradient(90deg, var(--yellow), var(--coral))', width: `${progress}%`, borderRadius: '99px', transition: 'width 0.3s ease' }} />
            </div>
          </div>
          <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--yellow)' }}>
            {Math.round(progress)}%
          </div>
        </div>

        {/* Component Flow */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '40px', marginBottom: '32px', boxShadow: '0 4px 20px -8px rgba(0,0,0,0.3)' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 16px', color: 'var(--text)' }}>
            Component Flow
          </h2>
          <p style={{ color: 'var(--muted)', marginBottom: '24px', fontSize: '15px' }}>
            Product Card first — every other component either feeds into it or borrows from it.
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
            {exercises.map((exercise, index) => (
              <div key={exercise.id} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  background: completedExercises.has(exercise.id) ? 'var(--yellow-dim)' : 'var(--surface-2)',
                  border: completedExercises.has(exercise.id) ? '2px solid var(--yellow)' : '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '16px',
                  width: '150px',
                  textAlign: 'center',
                  position: 'relative',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onClick={() => toggleComplete(exercise.id)}
                >
                  {completedExercises.has(exercise.id) && (
                    <div style={{ position: 'absolute', top: '8px', right: '8px', width: '20px', height: '20px', background: 'var(--yellow)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3a3018', fontSize: '12px', fontWeight: 700 }}>
                      ✓
                    </div>
                  )}
                  <div style={{ fontSize: '24px', marginBottom: '8px' }}>{exercise.icon}</div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>{exercise.title}</div>
                  <div style={{ fontSize: '10px', color: 'var(--muted)' }}>#{exercise.number}</div>
                </div>
                {index < exercises.length - 1 && (
                  <div style={{ fontSize: '20px', color: 'var(--border)' }}>→</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Exercise List */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '40px', boxShadow: '0 4px 20px -8px rgba(0,0,0,0.3)' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 24px', color: 'var(--text)' }}>
            Build Each Component
          </h2>
          <p style={{ color: 'var(--muted)', marginBottom: '32px', fontSize: '15px' }}>
            Complete each exercise in order to build the complete e-commerce library. Click on any component to start practicing.
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
                    border: completedExercises.has(exercise.id) ? '2px solid var(--yellow)' : '1px solid var(--border)',
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
                    e.currentTarget.style.borderColor = completedExercises.has(exercise.id) ? 'var(--yellow)' : 'var(--border)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Completion badge */}
                  {completedExercises.has(exercise.id) && (
                    <div style={{ position: 'absolute', top: '16px', right: '16px', width: '24px', height: '24px', background: 'var(--yellow)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3a3018', fontSize: '14px', fontWeight: 700 }}>
                      ✓
                    </div>
                  )}

                  <div style={{ fontSize: '32px', marginBottom: '16px' }}>{exercise.icon}</div>

                  <div style={{
                    fontFamily: 'monospace',
                    fontSize: '11px',
                    padding: '4px 8px',
                    borderRadius: '6px',
                    background: 'var(--yellow-dim)',
                    color: 'var(--yellow)',
                    border: '1px solid rgba(255,209,102,.3)',
                    fontWeight: 600,
                    display: 'inline-block',
                    marginBottom: '12px'
                  }}>
                    {exercise.number} / 08
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
                        : exercise.difficulty === 'intermediate'
                        ? 'rgba(245, 158, 11, 0.1)'
                        : 'rgba(239, 68, 68, 0.1)',
                      color: exercise.difficulty === 'beginner'
                        ? '#059669'
                        : exercise.difficulty === 'intermediate'
                        ? '#d97706'
                        : '#dc2626',
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
              background: 'linear-gradient(135deg, var(--yellow-dim) 0%, var(--coral-dim) 100%)',
              border: '1px solid rgba(255,209,102,.3)',
              borderRadius: '16px',
              textAlign: 'center',
              color: 'var(--yellow)',
              fontSize: '16px',
              fontWeight: 700
            }}>
              🎉 Congratulations! You've completed the entire E-commerce Component Library!
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
              backgroundColor: 'var(--yellow)',
              color: '#3a3018',
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
          🛒 E-commerce Track · Component Library · Flexbox Exercises
        </footer>
      </div>
    </PageLayout>
  );
}
