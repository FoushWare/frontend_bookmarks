'use client';

import { useState } from 'react';
import Link from 'next/link';
import CodeEditor from '@/components/CodeEditor';
import PageLayout from '@/components/PageLayout';
import PageSidebar from '@/components/PageSidebar';
import { getTopicNavigation } from '@/data/navigation';

export default function PriceRatingExercise() {
  const [showSolution, setShowSolution] = useState(false);
  const [showHints, setShowHints] = useState<Record<string, boolean>>({});
  const topicNav = getTopicNavigation('flexbox');

  const toggleHint = (hintId: string) => {
    setShowHints(prev => ({ ...prev, [hintId]: !prev[hintId] }));
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
      <div style={{ background: 'linear-gradient(180deg, var(--bg) 0%, var(--surface) 100%)', minHeight: '100vh' }}>
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '16px' }}>
            <span style={{ fontFamily: 'monospace', fontSize: '12px', padding: '6px 12px', borderRadius: '8px', background: 'var(--yellow-dim)', color: 'var(--yellow)', border: '1px solid rgba(255,209,102,.3)', fontWeight: 600 }}>04 / 08</span>
            <span style={{ fontFamily: 'monospace', fontSize: '12px', padding: '6px 12px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.1)', color: '#059669', border: '1px solid var(--border)', fontWeight: 600 }}>Beginner</span>
          </div>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 700, color: 'var(--yellow)', background: 'var(--yellow-dim)', border: '1px solid ' + 'rgba(255,209,102,.35)', padding: '6px 14px', borderRadius: '999px', marginBottom: '16px' }}>
            <span>🛒</span>
            <span>Component Reference</span>
            <span style={{ opacity: 0.5 }}>|</span>
            <span style={{ fontSize: '0.9em', color: 'var(--muted)', direction: 'rtl' }}>مرجع مكوّن</span>
          </div>
          <h1 style={{ fontSize: '48px', fontWeight: 800, margin: '0 0 12px', background: 'linear-gradient(135deg, var(--text) 0%, var(--yellow) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Price / Rating
          </h1>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'monospace', fontSize: '12px', padding: '6px 12px', borderRadius: '8px', border: '1px solid var(--border)', color: 'var(--yellow)', borderColor: 'rgba(255,209,102,.35)', background: 'var(--yellow-dim)', fontWeight: 600 }}>1 Flex Container</span>
            <span style={{ fontFamily: 'monospace', fontSize: '12px', padding: '6px 12px', borderRadius: '8px', border: '1px solid var(--border)', color: 'var(--muted)', fontWeight: 600 }}>~10 min · ~١٠ دقيقة</span>
          </div>
        </div>

        <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '40px', marginTop: '0', boxShadow: '0 4px 20px -8px rgba(0,0,0,0.3)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--yellow) 0%, var(--coral) 100%)', color: '#3a3018', fontFamily: 'monospace', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(255,209,102,0.3)' }}>1</span>
            <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--yellow)', letterSpacing: '0.5px' }}>PROJECT BRIEF · بريف المشروع</span>
          </div>
          <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 16px', background: 'linear-gradient(135deg, var(--text) 0%, var(--yellow) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            <span style={{ fontFamily: 'monospace', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '8px', background: 'var(--coral)', color: '#3a1607', marginRight: '12px' }}>EN</span>
            What you're building
            <span style={{ fontFamily: 'monospace', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '8px', background: 'var(--purple)', color: '#1c1533', marginRight: '12px' }}>AR</span>
            <span style={{ direction: 'rtl', unicodeBidi: 'isolate' }}>اللي هتبنيه</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '24px' }}>
            <div style={{ direction: 'ltr', textAlign: 'left', fontSize: '15px', lineHeight: 1.8, color: '#dfe2f2' }}>Build a price display with crossed-out original price and star rating. The current price and old price sit on the same baseline, while stars are evenly spaced with optional review count.</div>
            <div style={{ direction: 'rtl', textAlign: 'right', unicodeBidi: 'isolate', fontSize: '15px', lineHeight: 1.8, color: '#dfe2f2' }}>ابنِ عرض سعر مع سعر أصلي مشطوب وتقييم بالنجوم. السعر الحالي والقديم على نفس خط الأساس، والنجوم متباعدة بالتساوي مع عدد التقييمات اختياري.</div>
          </div>
          <h2 style={{ fontSize: '18px', fontWeight: 700, margin: '24px 0 16px', color: 'var(--yellow)' }}>Requirements · المتطلبات</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              { en: 'Current price and old price on same baseline', ar: 'السعر الحالي والقديم على نفس خط الأساس' },
              { en: 'Old price has strikethrough decoration', ar: 'السعر القديم عليه خط مشطوب' },
              { en: 'Stars evenly spaced with consistent gap', ar: 'النجوم متباعدة بالتساوي مع مسافة ثابتة' },
              { en: 'Review count appears after stars with gap', ar: 'عدد التقييمات بيظهر بعد النجوم مع مسافة' },
            ].map((req, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', padding: '16px 0', borderBottom: '1px solid var(--border)', alignItems: 'start' }}>
                <div style={{ direction: 'ltr', textAlign: 'left', fontSize: '14px', lineHeight: 1.6 }}>{req.en}</div>
                <div style={{ direction: 'rtl', textAlign: 'right', unicodeBidi: 'isolate', fontSize: '14px', lineHeight: 1.6 }}>{req.ar}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '40px', marginTop: '32px', boxShadow: '0 4px 20px -8px rgba(0,0,0,0.3)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--yellow) 0%, var(--coral) 100%)', color: '#3a3018', fontFamily: 'monospace', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(255,209,102,0.3)' }}>2</span>
            <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--yellow)', letterSpacing: '0.5px' }}>CODE & PREVIEW · الكود والمعاينة</span>
          </div>
          <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 16px', background: 'linear-gradient(135deg, var(--text) 0%, var(--yellow) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Build and Preview</h2>
          <p style={{ color: 'var(--muted)', fontSize: '15px', margin: '0 0 24px', lineHeight: 1.6 }}>
            Write HTML, CSS, and JavaScript. The live preview updates automatically below.
          </p>

          <CodeEditor
            height="500px"
            initialHtml={`<div class="price-rating">
  <div class="rating">
    <span>⭐</span>
    <span>⭐</span>
    <span>⭐</span>
    <span>⭐</span>
    <span>⭐</span>
    <span class="count">(128)</span>
  </div>
  <div class="price">
    <span class="current">$63.99</span>
    <span class="old">$79.99</span>
  </div>
</div>`}
            initialCss={`/* Add your CSS here */`}
            initialJs={`// Add interactivity here`}
          />
        </section>

        <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '40px', marginTop: '32px', boxShadow: '0 4px 20px -8px rgba(0,0,0,0.3)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--teal) 0%, var(--blue) 100%)', color: '#0e2440', fontFamily: 'monospace', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(94,234,212,0.3)' }}>3</span>
              <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--teal)', letterSpacing: '0.5px' }}>SOLUTION</span>
            </div>
            <button onClick={() => setShowSolution(!showSolution)} style={{ padding: '8px 16px', background: showSolution ? 'var(--surface-2)' : 'var(--teal)', color: showSolution ? 'var(--teal)' : '#0b1f1b', border: showSolution ? '1px solid var(--teal)' : 'none', borderRadius: '8px', fontWeight: 700, fontSize: '13px', cursor: 'pointer' }}>
              {showSolution ? '✕ Hide' : '👁️ Show Solution'}
            </button>
          </div>
          <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 16px', color: 'var(--text)' }}>Compare with the solution</h2>
          <p style={{ color: 'var(--muted)', fontSize: '15px', margin: '0 0 24px', lineHeight: 1.6 }}>
            Stuck? Click "Show Solution" to see the complete code and preview for this exercise.
          </p>

          {showSolution && (
            <CodeEditor
              height="500px"
              initialHtml={`<div class="price-rating">
  <div class="rating">
    <span>⭐</span>
    <span>⭐</span>
    <span>⭐</span>
    <span>⭐</span>
    <span>⭐</span>
    <span class="count">(128)</span>
  </div>
  <div class="price">
    <span class="current">$63.99</span>
    <span class="old">$79.99</span>
  </div>
</div>`}
              initialCss={`.price-rating {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.rating {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
}

.count {
  color: #8d93ac;
  font-size: 12px;
  margin-left: 4px;
}

.price {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.current {
  font-size: 18px;
  font-weight: 800;
  color: #eef0f8;
}

.old {
  font-size: 14px;
  color: #8d93ac;
  text-decoration: line-through;
}`}
              initialJs={`// Optional: Add hover effect
const rating = document.querySelector('.rating');
rating.style.cursor = 'pointer';
rating.addEventListener('click', () => {
  alert('Thank you for your rating!');
});`}
            />
          )}
        </section>

        <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '40px', marginTop: '32px', boxShadow: '0 4px 20px -8px rgba(0,0,0,0.3)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--yellow) 0%, var(--coral) 100%)', color: '#3a3018', fontFamily: 'monospace', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(255,209,102,0.3)' }}>4</span>
            <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--yellow)', letterSpacing: '0.5px' }}>GUIDES · الشرح</span>
          </div>

          <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 24px', background: 'linear-gradient(135deg, var(--text) 0%, var(--yellow) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Build steps</h2>
          {[
            { title: 'HTML skeleton / هيكل الـHTML', hint: 'Rating div + price div in column.', code: '' },
            { title: 'Rating Flex row', hint: 'display:flex; align-items:center; gap:4px;', code: 'display:flex; align-items:center; gap:4px;' },
            { title: 'Price baseline', hint: 'display:flex; align-items:baseline; gap:8px;', code: 'display:flex; align-items:baseline; gap:8px;' },
            { title: 'Strikethrough', hint: 'text-decoration:line-through;', code: 'text-decoration:line-through;' },
          ].map((step, i) => (
            <div key={i} style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '16px', padding: '24px', marginBottom: '16px', transition: 'all 0.2s ease' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                <span style={{ width: '30px', height: '30px', borderRadius: '9px', background: 'var(--yellow)', color: '#3a3018', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto', fontSize: '14px' }}>{i + 1}</span>
                <h3 style={{ fontSize: '15.5px', fontWeight: 700, margin: 0 }}>{step.title}</h3>
              </div>
              <button onClick={() => toggleHint(`step-${i}`)} style={{ fontFamily: 'monospace', background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--yellow)', borderRadius: '8px', padding: '6px 12px', fontSize: '12px', cursor: 'pointer', marginTop: '6px' }}>💡 Hint</button>
              {showHints[`step-${i}`] && (
                <div style={{ marginTop: '10px', background: 'var(--bg)', border: '1px dashed rgba(255,209,102,.4)', borderRadius: '10px', padding: '12px 14px', fontSize: '13px', color: 'var(--yellow)' }}>
                  {step.hint}
                  {step.code && <div style={{ marginTop: '8px', fontFamily: 'monospace', fontSize: '12px', opacity: 0.8 }}>{step.code}</div>}
                </div>
              )}
            </div>
          ))}
        </section>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', marginTop: '32px' }}>
          <Link href="/exercises/flexbox/cart-item" style={{ padding: '12px 24px', background: 'var(--surface-2)', color: 'var(--text)', textDecoration: 'none', borderRadius: '8px', fontWeight: 700, fontSize: '14px', border: '1px solid var(--border)' }}>← Previous: Cart Item</Link>
          <Link href="/exercises/flexbox/filter-sidebar" style={{ padding: '12px 24px', background: 'var(--yellow)', color: '#3a3018', textDecoration: 'none', borderRadius: '8px', fontWeight: 700, fontSize: '14px' }}>Next: Filter Sidebar →</Link>
        </div>

        <footer style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '13px', marginTop: '60px', padding: '24px', borderTop: '1px solid var(--border)' }}>
          🛒 E-commerce Track · Price / Rating · Flexbox Exercise #4
        </footer>
      </div>
    </PageLayout>
  );
}
