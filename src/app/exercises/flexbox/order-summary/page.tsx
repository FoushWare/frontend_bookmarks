'use client';

import { useState } from 'react';
import Link from 'next/link';
import CodeEditor from '@/components/CodeEditor';
import PageLayout from '@/components/PageLayout';
import PageSidebar from '@/components/PageSidebar';
import { getTopicNavigation } from '@/data/navigation';

export default function OrderSummaryExercise() {
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
            <span style={{ fontFamily: 'monospace', fontSize: '12px', padding: '6px 12px', borderRadius: '8px', background: 'var(--yellow-dim)', color: 'var(--yellow)', border: '1px solid rgba(255,209,102,.3)', fontWeight: 600 }}>06 / 08</span>
            <span style={{ fontFamily: 'monospace', fontSize: '12px', padding: '6px 12px', borderRadius: '8px', background: 'rgba(245, 158, 11, 0.1)', color: '#d97706', border: '1px solid var(--border)', fontWeight: 600 }}>Intermediate</span>
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
            Order Summary
          </h1>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'monospace', fontSize: '12px', padding: '6px 12px', borderRadius: '8px', border: '1px solid var(--border)', color: 'var(--yellow)', borderColor: 'rgba(255,209,102,.35)', background: 'var(--yellow-dim)', fontWeight: 600 }}>2 Flex Containers</span>
            <span style={{ fontFamily: 'monospace', fontSize: '12px', padding: '6px 12px', borderRadius: '8px', border: '1px solid var(--border)', color: 'var(--muted)', fontWeight: 600 }}>~20 min · ~٢٠ دقيقة</span>
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
            <div style={{ direction: 'ltr', textAlign: 'left', fontSize: '15px', lineHeight: 1.8, color: '#dfe2f2' }}>Build an order summary component with item list, subtotal, shipping, tax, and total. The summary uses nested flexbox for item rows and proper spacing between price columns.</div>
            <div style={{ direction: 'rtl', textAlign: 'right', unicodeBidi: 'isolate', fontSize: '15px', lineHeight: 1.8, color: '#dfe2f2' }}>ابنِ ملخص طلب مع قائمة عناصر ومجموع فرعي وشحن وضريبة وإجمالي. الملخص بيستخدم Flexbox متداخل لصفوف العناصر ومسافات صح بين أعمدة الأسعار.</div>
          </div>
          <h2 style={{ fontSize: '18px', fontWeight: 700, margin: '24px 0 16px', color: 'var(--yellow)' }}>Requirements · المتطلبات</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              { en: 'Item rows use Flex with space-between for name/price', ar: 'صفوف العناصر بتستخدم Flex مع space-between للاسم/السعر' },
              { en: 'Price values aligned to the right', ar: 'قيم الأسعار متحاذية لليمين' },
              { en: 'Subtotal, shipping, tax, total rows evenly spaced', ar: 'صفوف المجموع الفرعي والشحن والضريبة والإجمالي متباعدة بالتساوي' },
              { en: 'Total row has larger font and bold weight', ar: 'صف الإجمالي عنده خط أكبر ووزن عريض' },
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
            height="600px"
            initialHtml={`<div class="order-summary">
  <div class="summary-item">
    <span>Subtotal</span>
    <span>$191.97</span>
  </div>
  <div class="summary-item">
    <span>Shipping</span>
    <span>$5.00</span>
  </div>
  <div class="summary-item">
    <span>Tax</span>
    <span>$15.36</span>
  </div>
  <div class="summary-item total">
    <span>Total</span>
    <span>$212.33</span>
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
              height="600px"
              initialHtml={`<div class="order-summary">
  <div class="summary-item">
    <span>Subtotal</span>
    <span>$191.97</span>
  </div>
  <div class="summary-item">
    <span>Shipping</span>
    <span>$5.00</span>
  </div>
  <div class="summary-item">
    <span>Tax</span>
    <span>$15.36</span>
  </div>
  <div class="summary-item total">
    <span>Total</span>
    <span>$212.33</span>
  </div>
</div>`}
              initialCss={`.order-summary {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;
  background: #212844;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 16px;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #dfe2f2;
}

.summary-item.total {
  font-size: 16px;
  font-weight: 700;
  color: #eef0f8;
  padding-top: 12px;
  border-top: 1px solid rgba(255,255,255,0.1);
}`}
              initialJs={`// Optional: Add animation on total
const total = document.querySelector('.total');
total.style.transition = 'transform 0.3s ease';
total.addEventListener('mouseenter', () => {
  total.style.transform = 'scale(1.02)';
});
total.addEventListener('mouseleave', () => {
  total.style.transform = 'scale(1)';
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
            { title: 'HTML skeleton / هيكل الـHTML', hint: 'Summary items with label and value.', code: '' },
            { title: 'Column Flex layout', hint: 'display:flex; flex-direction:column; gap:12px;', code: 'display:flex; flex-direction:column; gap:12px;' },
            { title: 'Row space-between', hint: 'display:flex; justify-content:space-between;', code: 'display:flex; justify-content:space-between;' },
            { title: 'Total styling', hint: 'font-weight:700; padding-top:12px; border-top', code: 'font-weight:700; padding-top:12px;' },
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
          <Link href="/exercises/flexbox/filter-sidebar" style={{ padding: '12px 24px', background: 'var(--surface-2)', color: 'var(--text)', textDecoration: 'none', borderRadius: '8px', fontWeight: 700, fontSize: '14px', border: '1px solid var(--border)' }}>← Previous: Filter Sidebar</Link>
          <Link href="/exercises/flexbox/announcement-bar" style={{ padding: '12px 24px', background: 'var(--yellow)', color: '#3a3018', textDecoration: 'none', borderRadius: '8px', fontWeight: 700, fontSize: '14px' }}>Next: Announcement Bar →</Link>
        </div>

        <footer style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '13px', marginTop: '60px', padding: '24px', borderTop: '1px solid var(--border)' }}>
          🛒 E-commerce Track · Order Summary · Flexbox Exercise #6
        </footer>
      </div>
    </PageLayout>
  );
}
