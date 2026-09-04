'use client';

import { useState } from 'react';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import PageSidebar from '@/components/PageSidebar';
import { getTopicNavigation } from '@/data/navigation';

export default function ProductCardExercise() {
  const [completed, setCompleted] = useState(false);
  const [wishlistActive, setWishlistActive] = useState(false);
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
            <span>🛒</span>
            <span>E-commerce Track</span>
            <span style={{ opacity: 0.5 }}>|</span>
            <span style={{ fontSize: '0.9em', color: 'var(--muted)', direction: 'rtl' }}>مشروع التجارة الإلكترونية</span>
          </div>
          <h1 style={{ fontSize: '48px', fontWeight: 800, margin: '0 0 12px', background: 'linear-gradient(135deg, var(--text) 0%, var(--yellow) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Product Card
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--muted)', maxWidth: '640px', margin: '0 0 24px', lineHeight: 1.6 }}>
            Build a shop product card with image, badge, wishlist, rating, and price. This is the anchor component of the e-commerce track.
          </p>
        </div>

        {/* Exercise Content */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '32px' }}>
          {/* Instructions */}
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 16px', color: 'var(--text)' }}>
              What you're building
            </h2>
            <p style={{ color: 'var(--muted)', marginBottom: '24px', fontSize: '15px', lineHeight: 1.6 }}>
              Build a shop product card: a square product image with a sale badge and a wishlist heart floating on top, then category, title, rating, price (with a crossed-out original price), and an "Add to cart" button.
            </p>

            <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 12px', color: 'var(--text)' }}>
              Requirements
            </h3>
            <ul style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.8, marginBottom: '24px', paddingLeft: '20px' }}>
              <li>Badge and wishlist button float over the image without disturbing the card's flex layout</li>
              <li>Current price and the crossed-out original price sit on the same text baseline</li>
              <li>"Add to cart" always sits at the card's bottom, regardless of title length</li>
              <li>Clicking the heart toggles a filled/outline wishlist state</li>
              <li>Works at desktop, tablet, mobile; supports LTR and RTL</li>
            </ul>

            <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 12px', color: 'var(--text)' }}>
              Flexbox Properties Used
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
              {['display: flex', 'flex-direction: column', 'justify-content', 'align-items', 'position: absolute', 'gap'].map((prop) => (
                <span key={prop} style={{
                  fontFamily: 'monospace',
                  fontSize: '12px',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  background: 'var(--surface-2)',
                  color: 'var(--teal)',
                  border: '1px solid var(--border)'
                }}>
                  {prop}
                </span>
              ))}
            </div>

            <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '12px', padding: '16px', marginBottom: '24px' }}>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text)', marginBottom: '8px' }}>
                💡 Key Flexbox Concept
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>
                Use <code style={{ color: 'var(--yellow)' }}>flex-direction: column</code> on the card to stack image and content vertically. Use <code style={{ color: 'var(--yellow)' }}>margin-top: auto</code> on the button to push it to the bottom regardless of content height.
              </p>
            </div>

            <button
              onClick={() => setCompleted(!completed)}
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '12px',
                background: completed ? 'var(--surface-2)' : 'var(--yellow)',
                color: completed ? 'var(--yellow)' : '#3a3018',
                fontWeight: 800,
                fontSize: '15px',
                cursor: 'pointer',
                border: completed ? '1px solid var(--yellow)' : 'none',
              }}
            >
              {completed ? '✓ Completed' : 'Mark as Complete'}
            </button>
          </div>

          {/* Preview */}
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 16px', color: 'var(--text)' }}>
              Live Preview
            </h2>
            <p style={{ color: 'var(--muted)', marginBottom: '24px', fontSize: '15px' }}>
              Click the heart icon to toggle wishlist state
            </p>

            <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {/* English Card */}
              <div style={{ width: '230px', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 20px 40px -20px rgba(0,0,0,.6)' }}>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', background: 'linear-gradient(135deg, var(--coral), var(--teal))' }}>
                  <span style={{ position: 'absolute', top: '10px', left: '10px', background: 'var(--coral)', color: '#3a1607', fontFamily: 'monospace', fontSize: '10.5px', fontWeight: 800, padding: '3px 8px', borderRadius: '6px' }}>
                    -20%
                  </span>
                  <button
                    onClick={() => setWishlistActive(!wishlistActive)}
                    style={{ position: 'absolute', top: '10px', right: '10px', width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(18,21,31,.65)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                  >
                    <svg viewBox="0 0 24 24" style={{ width: '16px', height: '16px' }}>
                      <path
                        d="M12 20.5s-7.5-4.6-9.8-9.2C.6 7.7 2.3 4 6 4c2.1 0 3.6 1.2 6 3.6C14.4 5.2 15.9 4 18 4c3.7 0 5.4 3.7 3.8 7.3-2.3 4.6-9.8 9.2-9.8 9.2z"
                        fill={wishlistActive ? 'var(--coral)' : 'none'}
                        stroke={wishlistActive ? 'var(--coral)' : '#eef0f8'}
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  <span style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.03em' }}>
                    Footwear
                  </span>
                  <h3 style={{ fontSize: '14px', fontWeight: 700, margin: 0 }}>
                    Cloud Runner Sneaker
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ display: 'flex', gap: '1px' }}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} style={{ color: 'var(--yellow)', fontSize: '12px' }}>★</span>
                      ))}
                    </div>
                    <span style={{ fontSize: '11.5px', color: 'var(--muted)' }}>(128)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                    <span style={{ fontSize: '17px', fontWeight: 800 }}>$63.99</span>
                    <span style={{ fontSize: '12.5px', color: 'var(--muted)', textDecoration: 'line-through' }}>$79.99</span>
                  </div>
                  <div style={{ marginTop: 'auto', paddingTop: '4px' }}>
                    <button style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'var(--teal)', color: '#0b1f1b', fontWeight: 800, fontSize: '13px', padding: '11px', borderRadius: '10px', border: 'none', cursor: 'pointer' }}>
                      🛒 Add to cart
                    </button>
                  </div>
                </div>
              </div>

              {/* Arabic Card */}
              <div style={{ width: '230px', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 20px 40px -20px rgba(0,0,0,.6)', direction: 'rtl' }}>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', background: 'linear-gradient(135deg, var(--coral), var(--teal))' }}>
                  <span style={{ position: 'absolute', top: '10px', right: '10px', background: 'var(--coral)', color: '#3a1607', fontFamily: 'monospace', fontSize: '10.5px', fontWeight: 800, padding: '3px 8px', borderRadius: '6px' }}>
                    -٢٠٪
                  </span>
                  <button
                    onClick={() => setWishlistActive(!wishlistActive)}
                    style={{ position: 'absolute', top: '10px', left: '10px', width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(18,21,31,.65)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                  >
                    <svg viewBox="0 0 24 24" style={{ width: '16px', height: '16px' }}>
                      <path
                        d="M12 20.5s-7.5-4.6-9.8-9.2C.6 7.7 2.3 4 6 4c2.1 0 3.6 1.2 6 3.6C14.4 5.2 15.9 4 18 4c3.7 0 5.4 3.7 3.8 7.3-2.3 4.6-9.8 9.2-9.8 9.2z"
                        fill={wishlistActive ? 'var(--coral)' : 'none'}
                        stroke={wishlistActive ? 'var(--coral)' : '#eef0f8'}
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  <span style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.03em' }}>
                    أحذية
                  </span>
                  <h3 style={{ fontSize: '14px', fontWeight: 700, margin: 0 }}>
                    حذاء كلاود رنر
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ display: 'flex', gap: '1px' }}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} style={{ color: 'var(--yellow)', fontSize: '12px' }}>★</span>
                      ))}
                    </div>
                    <span style={{ fontSize: '11.5px', color: 'var(--muted)' }}>(١٢٨)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                    <span style={{ fontSize: '17px', fontWeight: 800 }}>$٦٣.٩٩</span>
                    <span style={{ fontSize: '12.5px', color: 'var(--muted)', textDecoration: 'line-through' }}>$٧٩.٩٩</span>
                  </div>
                  <div style={{ marginTop: 'auto', paddingTop: '4px' }}>
                    <button style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'var(--teal)', color: '#0b1f1b', fontWeight: 800, fontSize: '13px', padding: '11px', borderRadius: '10px', border: 'none', cursor: 'pointer' }}>
                      🛒 أضف للسلة
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', marginTop: '32px' }}>
          <Link
            href="/projects/flexbox/ecommerce-library"
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
            ← Back to Library
          </Link>
          <Link
            href="/exercises/flexbox/category-card"
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
            Next: Category Card →
          </Link>
        </div>

        <footer style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '13px', marginTop: '60px', padding: '24px', borderTop: '1px solid var(--border)' }}>
          🛒 E-commerce Track · Product Card · Flexbox Exercise #1
        </footer>
      </div>
    </PageLayout>
  );
}
