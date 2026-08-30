'use client';

import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import PageSidebar from '@/components/PageSidebar';
import { getTopicNavigation } from '@/data/navigation';

export default function MarketingCompletePage() {
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
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 700, color: 'var(--coral)', background: 'var(--coral-dim)', border: '1px solid ' + 'rgba(255,107,74,.35)', padding: '6px 14px', borderRadius: '999px', marginBottom: '16px' }}>
            <span>🎯</span>
            <span>Marketing Project</span>
            <span style={{ opacity: 0.5 }}>|</span>
            <span style={{ fontSize: '0.9em', color: 'var(--muted)' }}>مشروع التسويق</span>
          </div>
          <h1 style={{ fontSize: '48px', fontWeight: 800, margin: '0 0 12px', background: 'linear-gradient(135deg, var(--text) 0%, var(--teal) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Complete Marketing Page
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--muted)', maxWidth: '640px', margin: '0 0 24px', lineHeight: 1.6 }}>
            All 8 marketing components assembled into a complete landing page. This is what you'll build by completing all the exercises.
          </p>
          
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link
              href="/projects/flexbox/marketing-library"
              style={{
                padding: '12px 24px',
                background: 'var(--coral)',
                color: '#0e2440',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '14px',
              }}
            >
              ← Back to Component Library
            </Link>
            <Link
              href="/exercises/flexbox"
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
              Start Exercises
            </Link>
          </div>
        </div>

        {/* Complete Marketing Page Mockup */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '0', marginBottom: '32px', overflow: 'hidden', boxShadow: '0 4px 20px -8px rgba(0,0,0,0.3)' }}>
          
          {/* Navigation Bar */}
          <div style={{ background: 'var(--surface-2)', padding: '20px 32px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, var(--coral), var(--pink))', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
                🚀
              </div>
              <span style={{ fontSize: '18px', fontWeight: 700 }}>BrandName</span>
            </div>
            <div style={{ display: 'flex', gap: '24px', fontSize: '14px', fontWeight: 500 }}>
              <a href="#" style={{ color: 'var(--text)', textDecoration: 'none' }}>Products</a>
              <a href="#" style={{ color: 'var(--text)', textDecoration: 'none' }}>Features</a>
              <a href="#" style={{ color: 'var(--text)', textDecoration: 'none' }}>Pricing</a>
              <a href="#" style={{ color: 'var(--text)', textDecoration: 'none' }}>About</a>
            </div>
            <button style={{ padding: '10px 20px', background: 'linear-gradient(135deg, var(--coral), var(--teal))', border: 'none', borderRadius: '8px', color: '#0e2440', fontWeight: 700, cursor: 'pointer' }}>
              Get Started
            </button>
          </div>

          {/* Hero Section */}
          <div style={{ padding: '80px 32px', textAlign: 'center', background: 'linear-gradient(180deg, var(--surface) 0%, var(--surface-2) 100%)' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 700, color: 'var(--teal)', background: 'var(--teal-dim)', border: '1px solid ' + 'rgba(94,234,212,.35)', padding: '6px 14px', borderRadius: '999px', marginBottom: '24px' }}>
              <span>🎉</span>
              <span>New Release v2.0</span>
            </div>
            <h2 style={{ fontSize: '56px', fontWeight: 800, margin: '0 0 20px', color: 'var(--text)' }}>
              Build Better Products
              <br />
              <span style={{ color: 'var(--coral)' }}>Faster</span>
            </h2>
            <p style={{ fontSize: '20px', color: 'var(--muted)', maxWidth: '600px', margin: '0 auto 32px', lineHeight: 1.6 }}>
              The all-in-one platform for modern development teams. Ship faster with our powerful tools and beautiful components.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button style={{ padding: '16px 32px', background: 'linear-gradient(135deg, var(--coral), var(--teal))', border: 'none', borderRadius: '12px', color: '#0e2440', fontWeight: 700, fontSize: '16px', cursor: 'pointer' }}>
                Start Free Trial
              </button>
              <button style={{ padding: '16px 32px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', color: 'var(--text)', fontWeight: 700, fontSize: '16px', cursor: 'pointer' }}>
                Watch Demo
              </button>
            </div>
          </div>

          {/* Social Proof */}
          <div style={{ padding: '32px', background: 'var(--surface-2)', borderBottom: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '28px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        border: '2.5px solid var(--surface-2)',
                        background: `linear-gradient(135deg, hsl(${210 + i * 30}, 70%, 60%), hsl(${240 + i * 30}, 70%, 50%))`,
                        marginLeft: i > 1 ? '-12px' : 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        fontWeight: 700,
                        color: '#fff',
                      }}
                    >
                      {i === 1 ? 'MK' : i === 2 ? 'JD' : i === 3 ? 'AS' : 'RB'}
                    </div>
                  ))}
                  <div style={{ 
                    width: '38px', 
                    height: '38px', 
                    borderRadius: '50%', 
                    border: '2.5px solid var(--surface-2)', 
                    marginLeft: '-12px',
                    background: 'var(--bg)', 
                    color: 'var(--muted)', 
                    fontFamily: 'monospace', 
                    fontSize: '10.5px', 
                    fontWeight: 700, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                  }}>
                    +2K
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span key={i} style={{ fontSize: '15px' }}>⭐</span>
                    ))}
                  </div>
                  <div style={{ fontSize: '12.5px', color: 'var(--muted)' }}>
                    <b style={{ color: 'var(--text)' }}>4.9 / 5</b> from 2,000+ happy customers
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '26px', flexWrap: 'wrap' }}>
                {['Nimbus', 'Cedar', 'Delta', 'Vero'].map((name) => (
                  <div key={name} style={{ fontSize: '14px', fontWeight: 700, color: 'var(--muted)', opacity: 0.55 }}>
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div style={{ padding: '80px 32px' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h3 style={{ fontSize: '36px', fontWeight: 800, margin: '0 0 16px', color: 'var(--text)' }}>
                Everything You Need
              </h3>
              <p style={{ fontSize: '18px', color: 'var(--muted)', maxWidth: '600px', margin: '0 auto' }}>
                Powerful features to help you build, ship, and scale your products
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {[
                { icon: '⚡', title: 'Lightning Fast', desc: 'Optimized performance with instant load times' },
                { icon: '🔒', title: 'Secure by Default', desc: 'Enterprise-grade security built-in' },
                { icon: '🎨', title: 'Beautiful Design', desc: 'Stunning components out of the box' },
                { icon: '🔄', title: 'Real-time Sync', desc: 'Collaborate with your team instantly' },
                { icon: '📊', title: 'Analytics', desc: 'Deep insights into your product usage' },
                { icon: '🌍', title: 'Global Scale', desc: 'Deploy worldwide with one click' },
              ].map((feature, i) => (
                <div key={i} style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '16px', padding: '24px' }}>
                  <div style={{ fontSize: '32px', marginBottom: '16px' }}>{feature.icon}</div>
                  <h4 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: 'var(--text)' }}>{feature.title}</h4>
                  <p style={{ fontSize: '14px', color: 'var(--muted)', margin: 0, lineHeight: 1.6 }}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div style={{ padding: '80px 32px', background: 'var(--surface-2)' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h3 style={{ fontSize: '36px', fontWeight: 800, margin: '0 0 16px', color: 'var(--text)' }}>
                Loved by Developers
              </h3>
              <p style={{ fontSize: '18px', color: 'var(--muted)', maxWidth: '600px', margin: '0 auto' }}>
                See what our customers are saying about us
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              {[
                { name: 'Sarah Chen', role: 'CTO at TechCorp', text: 'This platform transformed our development workflow. We ship 3x faster now.' },
                { name: 'Mike Johnson', role: 'Lead Developer', text: 'The component library is incredible. Saved us months of development time.' },
                { name: 'Emily Davis', role: 'Product Manager', text: 'Best investment we made. Our team productivity increased dramatically.' },
              ].map((testimonial, i) => (
                <div key={i} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '16px', padding: '24px' }}>
                  <div style={{ display: 'flex', gap: '2px', marginBottom: '16px' }}>
                    {[1, 2, 3, 4, 5].map((j) => (
                      <span key={j} style={{ fontSize: '16px' }}>⭐</span>
                    ))}
                  </div>
                  <p style={{ fontSize: '16px', color: 'var(--text)', marginBottom: '20px', lineHeight: 1.6, fontStyle: 'italic' }}>
                    "{testimonial.text}"
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ 
                      width: '48px', 
                      height: '48px', 
                      borderRadius: '50%', 
                      background: `linear-gradient(135deg, hsl(${200 + i * 40}, 70%, 60%), hsl(${230 + i * 40}, 70%, 50%))`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '16px',
                      fontWeight: 700,
                      color: '#fff',
                    }}>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text)' }}>{testimonial.name}</div>
                      <div style={{ fontSize: '12px', color: 'var(--muted)' }}>{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div style={{ padding: '80px 32px' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h3 style={{ fontSize: '36px', fontWeight: 800, margin: '0 0 16px', color: 'var(--text)' }}>
                Simple Pricing
              </h3>
              <p style={{ fontSize: '18px', color: 'var(--muted)', maxWidth: '600px', margin: '0 auto' }}>
                Choose the plan that works for you
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', maxWidth: '900px', margin: '0 auto' }}>
              {[
                { name: 'Starter', price: '$9', features: ['5 Projects', '10GB Storage', 'Basic Support'], highlight: false },
                { name: 'Pro', price: '$29', features: ['Unlimited Projects', '100GB Storage', 'Priority Support', 'Advanced Analytics'], highlight: true },
                { name: 'Enterprise', price: '$99', features: ['Everything in Pro', 'Custom Integrations', 'Dedicated Support', 'SLA Guarantee'], highlight: false },
              ].map((plan, i) => (
                <div key={i} style={{ 
                  background: 'var(--surface-2)', 
                  border: plan.highlight ? '2px solid var(--coral)' : '1px solid var(--border)', 
                  borderRadius: '16px', 
                  padding: '32px',
                  position: 'relative',
                }}>
                  {plan.highlight && (
                    <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'var(--coral)', color: '#0e2440', padding: '4px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: 700 }}>
                      Most Popular
                    </div>
                  )}
                  <h4 style={{ fontSize: '20px', fontWeight: 700, margin: '0 0 8px', color: 'var(--text)' }}>{plan.name}</h4>
                  <div style={{ fontSize: '48px', fontWeight: 800, color: plan.highlight ? 'var(--coral)' : 'var(--text)', marginBottom: '24px' }}>
                    {plan.price}
                    <span style={{ fontSize: '16px', fontWeight: 400, color: 'var(--muted)' }}>/mo</span>
                  </div>
                  <ul style={{ margin: '0 0 24px', padding: 0, listStyle: 'none' }}>
                    {plan.features.map((feature, j) => (
                      <li key={j} style={{ fontSize: '14px', color: 'var(--text)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ color: 'var(--teal)' }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button style={{ 
                    width: '100%', 
                    padding: '14px', 
                    background: plan.highlight ? 'var(--coral)' : 'var(--surface)', 
                    border: plan.highlight ? 'none' : '1px solid var(--border)', 
                    borderRadius: '8px', 
                    color: plan.highlight ? '#0e2440' : 'var(--text)', 
                    fontWeight: 700, 
                    cursor: 'pointer' 
                  }}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div style={{ padding: '80px 32px', background: 'linear-gradient(135deg, var(--coral-dim), var(--teal-dim))', textAlign: 'center' }}>
            <h3 style={{ fontSize: '36px', fontWeight: 800, margin: '0 0 16px', color: 'var(--text)' }}>
              Ready to Get Started?
            </h3>
            <p style={{ fontSize: '18px', color: 'var(--muted)', maxWidth: '600px', margin: '0 auto 32px' }}>
              Join thousands of developers building amazing products
            </p>
            <button style={{ padding: '16px 32px', background: 'linear-gradient(135deg, var(--coral), var(--teal))', border: 'none', borderRadius: '12px', color: '#0e2440', fontWeight: 700, fontSize: '16px', cursor: 'pointer' }}>
              Start Free Trial
            </button>
          </div>

          {/* Footer */}
          <div style={{ padding: '48px 32px', background: 'var(--surface-2)', borderTop: '1px solid var(--border)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', marginBottom: '32px' }}>
              <div>
                <div style={{ fontSize: '18px', fontWeight: 700, marginBottom: '16px', color: 'var(--text)' }}>Product</div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                  {['Features', 'Pricing', 'Security', 'Roadmap'].map((item) => (
                    <li key={item} style={{ marginBottom: '12px' }}>
                      <a href="#" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '14px' }}>{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div style={{ fontSize: '18px', fontWeight: 700, marginBottom: '16px', color: 'var(--text)' }}>Company</div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                  {['About', 'Blog', 'Careers', 'Contact'].map((item) => (
                    <li key={item} style={{ marginBottom: '12px' }}>
                      <a href="#" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '14px' }}>{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div style={{ fontSize: '18px', fontWeight: 700, marginBottom: '16px', color: 'var(--text)' }}>Resources</div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                  {['Documentation', 'API Reference', 'Community', 'Support'].map((item) => (
                    <li key={item} style={{ marginBottom: '12px' }}>
                      <a href="#" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '14px' }}>{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div style={{ fontSize: '18px', fontWeight: 700, marginBottom: '16px', color: 'var(--text)' }}>Legal</div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                  {['Privacy', 'Terms', 'Cookie Policy'].map((item) => (
                    <li key={item} style={{ marginBottom: '12px' }}>
                      <a href="#" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '14px' }}>{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '24px', borderTop: '1px solid var(--border)', flexWrap: 'wrap', gap: '16px' }}>
              <div style={{ fontSize: '14px', color: 'var(--muted)' }}>
                © 2024 BrandName. All rights reserved.
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                {['Twitter', 'GitHub', 'LinkedIn'].map((social) => (
                  <a key={social} href="#" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '14px' }}>
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Component Breakdown */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '40px', marginBottom: '32px' }}>
          <h3 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 24px', color: 'var(--text)' }}>
            Component Breakdown
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            {[
              { icon: '🧭', name: 'Navigation Bar', section: 'Header' },
              { icon: '⭐', name: 'Social Proof', section: 'Hero' },
              { icon: '🎯', name: 'Feature Card', section: 'Features' },
              { icon: '💬', name: 'Testimonial Card', section: 'Testimonials' },
              { icon: '💰', name: 'Pricing Card', section: 'Pricing' },
              { icon: '🔘', name: 'CTA Button', section: 'Hero & CTA' },
              { icon: '📝', name: 'Blog Card', section: 'Blog (upcoming)' },
              { icon: '📋', name: 'Footer', section: 'Footer' },
            ].map((comp, i) => (
              <div key={i} style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ fontSize: '24px' }}>{comp.icon}</div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text)' }}>{comp.name}</div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)' }}>{comp.section}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <footer style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '13px', marginTop: '60px', padding: '24px', borderTop: '1px solid var(--border)' }}>
          🎯 Marketing Project · Complete Page Design · Flexbox Component Library
        </footer>
      </div>
    </PageLayout>
  );
}