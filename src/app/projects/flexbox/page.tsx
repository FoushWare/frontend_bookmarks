'use client';

import { useState } from 'react';
import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import PageSidebar from '@/components/PageSidebar';
import { getTopicNavigation } from '@/data/navigation';

const marketingComponents = [
  { id: 'testimonial-card', title: 'Testimonial Card', icon: '💬', path: '/exercises/flexbox/testimonial-card', difficulty: 'beginner' },
  { id: 'blog-card', title: 'Blog Card', icon: '📝', path: '/exercises/flexbox/blog-card', difficulty: 'beginner' },
  { id: 'feature-card', title: 'Feature Card', icon: '🎯', path: '/exercises/flexbox/feature-card', difficulty: 'intermediate' },
  { id: 'pricing-card', title: 'Pricing Card', icon: '💰', path: '/exercises/flexbox/pricing-card', difficulty: 'intermediate' },
  { id: 'cta-button', title: 'CTA Button', icon: '🔘', path: '/exercises/flexbox/cta-button', difficulty: 'beginner' },
  { id: 'navigation-bar', title: 'Navigation Bar', icon: '🧭', path: '/exercises/flexbox/navigation-bar', difficulty: 'intermediate' },
  { id: 'footer', title: 'Footer', icon: '📋', path: '/exercises/flexbox/footer', difficulty: 'intermediate' },
  { id: 'social-proof', title: 'Social Proof', icon: '⭐', path: '/exercises/flexbox/social-proof', difficulty: 'intermediate' },
];

const ecommerceComponents = [
  { id: 'product-card', title: 'Product Card', icon: '🛍️', path: '/exercises/flexbox/product-card', difficulty: 'intermediate', status: 'available' },
  { id: 'category-card', title: 'Category Card', icon: '🗂️', path: '/exercises/flexbox/category-card', difficulty: 'beginner', status: 'coming-soon' },
  { id: 'cart-item', title: 'Cart Item', icon: '🛒', path: '/exercises/flexbox/cart-item', difficulty: 'intermediate', status: 'coming-soon' },
  { id: 'price-rating', title: 'Price / Rating', icon: '⭐', path: '/exercises/flexbox/price-rating', difficulty: 'beginner', status: 'coming-soon' },
  { id: 'filter-sidebar', title: 'Filter Sidebar', icon: '🧰', path: '/exercises/flexbox/filter-sidebar', difficulty: 'advanced', status: 'coming-soon' },
  { id: 'order-summary', title: 'Order Summary', icon: '🧮', path: '/exercises/flexbox/order-summary', difficulty: 'intermediate', status: 'coming-soon' },
  { id: 'announcement-bar', title: 'Announcement Bar', icon: '📢', path: '/exercises/flexbox/announcement-bar', difficulty: 'beginner', status: 'coming-soon' },
  { id: 'empty-state', title: 'Empty State', icon: '📭', path: '/exercises/flexbox/empty-state', difficulty: 'beginner', status: 'coming-soon' },
];

const uncategorizedComponents = [
  { id: 'avatar', title: 'Avatar', icon: '👤', path: '#', difficulty: 'beginner', status: 'coming-soon' },
  { id: 'badge', title: 'Badge', icon: '🏷️', path: '#', difficulty: 'beginner', status: 'coming-soon' },
  { id: 'button-group', title: 'Button Group', icon: '🔘', path: '#', difficulty: 'intermediate', status: 'coming-soon' },
  { id: 'card', title: 'Card', icon: '📄', path: '#', difficulty: 'beginner', status: 'coming-soon' },
  { id: 'divider', title: 'Divider', icon: '➖', path: '#', difficulty: 'beginner', status: 'coming-soon' },
  { id: 'input-group', title: 'Input Group', icon: '📝', path: '#', difficulty: 'intermediate', status: 'coming-soon' },
  { id: 'toast', title: 'Toast Notification', icon: '🔔', path: '#', difficulty: 'intermediate', status: 'coming-soon' },
  { id: 'modal', title: 'Modal', icon: '🪟', path: '#', difficulty: 'advanced', status: 'coming-soon' },
];

export default function FlexboxProjectsPage() {
  const [expandedSections, setExpandedSections] = useState({ componentLibrary: true, uncategorized: false });
  const topicNav = getTopicNavigation('flexbox');

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

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
          📦 Flexbox Projects
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
          Build real-world components and complete projects with flexbox
        </p>
      </div>

      {/* Component Library Section */}
      <div style={{ marginBottom: '2rem' }}>
        <div
          onClick={() => toggleSection('componentLibrary')}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '16px',
            padding: '1.5rem',
            cursor: 'pointer',
            marginBottom: '1rem',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--border-strong)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--border)';
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ fontSize: '2.5rem' }}>🛠️</div>
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', margin: '0 0 0.25rem' }}>
                Component Library
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
                Complete projects with combined components
              </p>
            </div>
          </div>
          <div style={{ 
            fontSize: '1.5rem', 
            transform: expandedSections.componentLibrary ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease'
          }}>
            ▼
          </div>
        </div>

        {expandedSections.componentLibrary && (
          <div style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
            {/* Marketing Project */}
            <div style={{ marginBottom: '1rem' }}>
              <Link
                href="/projects/flexbox/marketing-library"
                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
              >
                <div
                  style={{
                    background: 'var(--surface-2)',
                    border: '1px solid var(--border)',
                    borderRadius: '14px',
                    padding: '1.25rem',
                    marginBottom: '0.5rem',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--coral)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                    <div style={{ fontSize: '2rem' }}>🎯</div>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)', margin: '0 0 0.25rem' }}>
                        Marketing Project
                      </h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>
                        Complete marketing page with 8 components
                      </p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{ 
                      padding: '0.25rem 0.75rem', 
                      borderRadius: '999px', 
                      fontSize: '0.75rem', 
                      fontWeight: 600, 
                      backgroundColor: 'rgba(94, 234, 212, 0.1)', 
                      color: '#059669' 
                    }}>
                      8 Components
                    </span>
                    <span style={{ 
                      padding: '0.25rem 0.75rem', 
                      borderRadius: '999px', 
                      fontSize: '0.75rem', 
                      fontWeight: 500, 
                      backgroundColor: 'var(--bg)', 
                      color: 'var(--text-muted)' 
                    }}>
                      Complete Track
                    </span>
                  </div>
                </div>
              </Link>
              <Link
                href="/projects/flexbox/marketing-library/complete-page"
                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
              >
                <div
                  style={{
                    background: 'var(--bg)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    padding: '0.75rem 1.25rem',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--teal)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <span style={{ fontSize: '1rem' }}>📄</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)' }}>
                    View Complete Page Design
                  </span>
                </div>
              </Link>
            </div>

            {/* Marketing Components */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {marketingComponents.map((component) => (
                <Link
                  key={component.id}
                  href={component.path}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div
                    style={{
                      background: 'var(--bg)',
                      border: '1px solid var(--border)',
                      borderRadius: '12px',
                      padding: '1rem',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--teal)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div style={{ fontSize: '1.5rem' }}>{component.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.25rem' }}>
                        {component.title}
                      </div>
                      <span style={{ 
                        fontSize: '0.7rem', 
                        padding: '0.15rem 0.5rem', 
                        borderRadius: '999px', 
                        fontWeight: 600,
                        backgroundColor: component.difficulty === 'beginner' 
                          ? 'rgba(16, 185, 129, 0.1)' 
                          : component.difficulty === 'intermediate'
                          ? 'rgba(245, 158, 11, 0.1)'
                          : 'rgba(239, 68, 68, 0.1)', 
                        color: component.difficulty === 'beginner' 
                          ? '#059669' 
                          : component.difficulty === 'intermediate'
                          ? '#d97706'
                          : '#dc2626' 
                      }}>
                        {component.difficulty}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* E-commerce Project */}
            <div style={{ marginBottom: '1rem' }}>
              <Link
                href="/projects/flexbox/ecommerce-library"
                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
              >
                <div
                  style={{
                    background: 'var(--surface-2)',
                    border: '1px solid var(--border)',
                    borderRadius: '14px',
                    padding: '1.25rem',
                    marginBottom: '0.5rem',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--yellow)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                    <div style={{ fontSize: '2rem' }}>🛍️</div>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)', margin: '0 0 0.25rem' }}>
                        E-commerce Project
                      </h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>
                        Complete e-commerce store with product cards, cart, and checkout
                      </p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{
                      padding: '0.25rem 0.75rem',
                      borderRadius: '999px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      backgroundColor: 'rgba(255, 209, 102, 0.1)',
                      color: '#d97706'
                    }}>
                      8 Components
                    </span>
                    <span style={{
                      padding: '0.25rem 0.75rem',
                      borderRadius: '999px',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      backgroundColor: 'rgba(16, 185, 129, 0.1)',
                      color: '#059669'
                    }}>
                      In Progress
                    </span>
                  </div>
                </div>
              </Link>
              <Link
                href="/projects/flexbox/ecommerce-library/complete-page"
                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
              >
                <div
                  style={{
                    background: 'var(--bg)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    padding: '0.75rem 1.25rem',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--yellow)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <span style={{ fontSize: '1rem' }}>📄</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)' }}>
                    View Complete Page Design
                  </span>
                </div>
              </Link>
            </div>

            {/* E-commerce Components */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.75rem' }}>
              {ecommerceComponents.map((component) => (
                <Link
                  key={component.id}
                  href={component.path === '#' ? '#' : component.path}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div
                    style={{
                      background: 'var(--bg)',
                      border: '1px solid var(--border)',
                      borderRadius: '12px',
                      padding: '1rem',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      opacity: component.status === 'coming-soon' ? 0.6 : 1,
                      cursor: component.status === 'coming-soon' ? 'not-allowed' : 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      if (component.status !== 'coming-soon') {
                        e.currentTarget.style.borderColor = 'var(--yellow)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div style={{ fontSize: '1.5rem' }}>{component.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.25rem' }}>
                        {component.title}
                      </div>
                      <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
                        <span style={{
                          fontSize: '0.7rem',
                          padding: '0.15rem 0.5rem',
                          borderRadius: '999px',
                          fontWeight: 600,
                          backgroundColor: component.difficulty === 'beginner'
                            ? 'rgba(16, 185, 129, 0.1)'
                            : component.difficulty === 'intermediate'
                            ? 'rgba(245, 158, 11, 0.1)'
                            : 'rgba(239, 68, 68, 0.1)',
                          color: component.difficulty === 'beginner'
                            ? '#059669'
                            : component.difficulty === 'intermediate'
                            ? '#d97706'
                            : '#dc2626'
                        }}>
                          {component.difficulty}
                        </span>
                        {component.status === 'coming-soon' && (
                          <span style={{
                            fontSize: '0.7rem',
                            padding: '0.15rem 0.5rem',
                            borderRadius: '999px',
                            fontWeight: 600,
                            backgroundColor: 'var(--surface-2)',
                            color: 'var(--text-muted)'
                          }}>
                            Coming Soon
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Uncategorized Components Section */}
      <div style={{ marginBottom: '2rem' }}>
        <div
          onClick={() => toggleSection('uncategorized')}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '16px',
            padding: '1.5rem',
            cursor: 'pointer',
            marginBottom: '1rem',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--border-strong)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--border)';
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ fontSize: '2.5rem' }}>📦</div>
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', margin: '0 0 0.25rem' }}>
                Uncategorized Components
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
                Individual flexbox components not tied to a specific project
              </p>
            </div>
          </div>
          <div style={{ 
            fontSize: '1.5rem', 
            transform: expandedSections.uncategorized ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease'
          }}>
            ▼
          </div>
        </div>

        {expandedSections.uncategorized && (
          <div style={{ marginLeft: '1rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.75rem' }}>
              {uncategorizedComponents.map((component) => (
                <div
                  key={component.id}
                  style={{
                    background: 'var(--surface-2)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    padding: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    opacity: component.status === 'coming-soon' ? 0.6 : 1,
                  }}
                >
                  <div style={{ fontSize: '1.5rem' }}>{component.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.25rem' }}>
                      {component.title}
                    </div>
                    <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
                      <span style={{ 
                        fontSize: '0.7rem', 
                        padding: '0.15rem 0.5rem', 
                        borderRadius: '999px', 
                        fontWeight: 600,
                        backgroundColor: component.difficulty === 'beginner' 
                          ? 'rgba(16, 185, 129, 0.1)' 
                          : component.difficulty === 'intermediate'
                          ? 'rgba(245, 158, 11, 0.1)'
                          : 'rgba(239, 68, 68, 0.1)', 
                        color: component.difficulty === 'beginner' 
                          ? '#059669' 
                          : component.difficulty === 'intermediate'
                          ? '#d97706'
                          : '#dc2626' 
                      }}>
                        {component.difficulty}
                      </span>
                      {component.status === 'coming-soon' && (
                        <span style={{ 
                          fontSize: '0.7rem', 
                          padding: '0.15rem 0.5rem', 
                          borderRadius: '999px', 
                          fontWeight: 600,
                          backgroundColor: 'var(--bg)', 
                          color: 'var(--text-muted)' 
                        }}>
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div style={{ textAlign: 'center' }}>
        <Link
          href="/projects"
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
          }}
          className="nav-btn-trigger"
        >
          ← Back to All Projects
        </Link>
      </div>
    </PageLayout>
  );
}