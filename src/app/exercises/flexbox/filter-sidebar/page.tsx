'use client';

import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import PageSidebar from '@/components/PageSidebar';
import { getTopicNavigation } from '@/data/navigation';

export default function FilterSidebarExercise() {
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
      <div style={{ background: 'linear-gradient(180deg, var(--bg) 0%, var(--surface) 100%)', minHeight: '100vh' }}>
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 700, color: 'var(--yellow)', background: 'var(--yellow-dim)', border: '1px solid ' + 'rgba(255,209,102,.35)', padding: '6px 14px', borderRadius: '999px', marginBottom: '16px' }}>
            <span>🛒</span>
            <span>E-commerce Track</span>
          </div>
          <h1 style={{ fontSize: '48px', fontWeight: 800, margin: '0 0 12px', background: 'linear-gradient(135deg, var(--text) 0%, var(--yellow) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Filter Sidebar
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--muted)', maxWidth: '640px', margin: '0 0 24px', lineHeight: 1.6 }}>
            Coming soon - Sidebar with filter categories and price range slider.
          </p>
        </div>

        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '80px 40px', textAlign: 'center' }}>
          <div style={{ fontSize: '64px', marginBottom: '24px' }}>🧰</div>
          <h2 style={{ fontSize: '36px', fontWeight: 800, margin: '0 0 16px', color: 'var(--text)' }}>
            Coming Soon
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--muted)', maxWidth: '600px', margin: '0 auto 32px', lineHeight: 1.6 }}>
            This exercise is currently under development. Complete the Product Card exercise first.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', marginTop: '32px' }}>
          <Link
            href="/exercises/flexbox/price-rating"
            style={{
              padding: '12px 24px',
              background: 'var(--surface-2)',
              color: 'var(--text)',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '14px',
              border: '1px solid var(--border)',
            }}
          >
            ← Previous: Price / Rating
          </Link>
          <Link
            href="/exercises/flexbox/order-summary"
            style={{
              padding: '12px 24px',
              background: 'var(--yellow)',
              color: '#3a3018',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '14px',
            }}
          >
            Next: Order Summary →
          </Link>
        </div>

        <footer style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '13px', marginTop: '60px', padding: '24px', borderTop: '1px solid var(--border)' }}>
          🛒 E-commerce Track · Filter Sidebar · Flexbox Exercise #5
        </footer>
      </div>
    </PageLayout>
  );
}
