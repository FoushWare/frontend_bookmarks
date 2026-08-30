'use client';

import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import PageSidebar from '@/components/PageSidebar';
import { getTopicNavigation } from '@/data/navigation';

export default function EcommerceCompletePage() {
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
        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 700, color: 'var(--yellow)', background: 'var(--yellow-dim)', border: '1px solid ' + 'rgba(255,209,102,.35)', padding: '6px 14px', borderRadius: '999px', marginBottom: '16px' }}>
            <span>🛍️</span>
            <span>E-commerce Project</span>
            <span style={{ opacity: 0.5 }}>|</span>
            <span style={{ fontSize: '0.9em', color: 'var(--muted)' }}>مشروع التجارة الإلكترونية</span>
          </div>
          <h1 style={{ fontSize: '48px', fontWeight: 800, margin: '0 0 12px', background: 'linear-gradient(135deg, var(--text) 0%, var(--yellow) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Complete E-commerce Store
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--muted)', maxWidth: '640px', margin: '0 0 24px', lineHeight: 1.6 }}>
            All e-commerce components assembled into a complete online store. This page is coming soon - complete the exercises to build it.
          </p>
          
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link
              href="/projects/flexbox"
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
              ← Back to Projects
            </Link>
            <Link
              href="/exercises/flexbox"
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
              Start with Marketing First
            </Link>
          </div>
        </div>

        {/* Coming Soon Banner */}
        <div style={{ 
          background: 'linear-gradient(135deg, var(--yellow-dim), var(--coral-dim))', 
          border: '1px solid var(--yellow)', 
          borderRadius: '24px', 
          padding: '80px 40px', 
          textAlign: 'center',
          marginBottom: '32px' 
        }}>
          <div style={{ fontSize: '64px', marginBottom: '24px' }}>🛍️</div>
          <h2 style={{ fontSize: '36px', fontWeight: 800, margin: '0 0 16px', color: 'var(--text)' }}>
            Coming Soon
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--muted)', maxWidth: '600px', margin: '0 auto 32px', lineHeight: 1.6 }}>
            The complete e-commerce store design is currently in development. Complete the Marketing Component Library first to master flexbox fundamentals.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 600, color: 'var(--yellow)', background: 'var(--bg)', padding: '8px 16px', borderRadius: '999px' }}>
            <span>📅</span>
            <span>Estimated: Q2 2025</span>
          </div>
        </div>

        {/* Placeholder Components */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '40px', marginBottom: '32px', opacity: 0.7 }}>
          <h3 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 24px', color: 'var(--text)' }}>
            Planned Components
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            {[
              { icon: '🛍️', name: 'Product Card', status: 'Coming Soon' },
              { icon: '🛒', name: 'Cart Item', status: 'Coming Soon' },
              { icon: '💳', name: 'Checkout Form', status: 'Coming Soon' },
              { icon: '🔍', name: 'Product Filter', status: 'Coming Soon' },
              { icon: '➕', name: 'Quantity Selector', status: 'Coming Soon' },
            ].map((comp, i) => (
              <div key={i} style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ fontSize: '24px' }}>{comp.icon}</div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text)' }}>{comp.name}</div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)' }}>{comp.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Store Preview (Wireframe) */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '40px', marginBottom: '32px' }}>
          <h3 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 24px', color: 'var(--text)' }}>
            Store Layout Preview
          </h3>
          <div style={{ 
            background: 'var(--surface-2)', 
            border: '2px dashed var(--border)', 
            borderRadius: '16px', 
            padding: '60px 40px', 
            textAlign: 'center',
            minHeight: '400px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px', opacity: 0.5 }}>🏪</div>
            <div style={{ fontSize: '18px', color: 'var(--muted)', marginBottom: '8px' }}>Store Preview</div>
            <div style={{ fontSize: '14px', color: 'var(--muted)', opacity: 0.7 }}>
              Navigation → Product Grid → Cart → Checkout
            </div>
          </div>
        </div>

        <footer style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '13px', marginTop: '60px', padding: '24px', borderTop: '1px solid var(--border)' }}>
          🛍️ E-commerce Project · Coming Soon · Flexbox Component Library
        </footer>
      </div>
    </PageLayout>
  );
}