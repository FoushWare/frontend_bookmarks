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
  const [activeTab, setActiveTab] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
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
            <span>⭐</span>
            <span>Component Reference</span>
            <span style={{ opacity: 0.5 }}>|</span>
            <span style={{ fontSize: '0.9em', color: 'var(--muted)', direction: 'rtl' }}>مرجع مكوّن</span>
          </div>
          <h1 style={{ fontSize: '48px', fontWeight: 800, margin: '0 0 12px', background: 'linear-gradient(135deg, var(--text) 0%, var(--yellow) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Price & Rating Block
          </h1>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'monospace', fontSize: '12px', padding: '6px 12px', borderRadius: '8px', border: '1px solid var(--border)', color: 'var(--yellow)', borderColor: 'rgba(255,209,102,.35)', background: 'var(--yellow-dim)', fontWeight: 600 }}>2 Flex Containers</span>
            <span style={{ fontFamily: 'monospace', fontSize: '12px', padding: '6px 12px', borderRadius: '8px', border: '1px solid var(--border)', color: 'var(--muted)', fontWeight: 600 }}>~15 min · ~١٥ دقيقة</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '14px', padding: '16px 18px', margin: '0 0 32px', fontSize: '14px', color: '#dfe2f2' }}>
          <span style={{ fontSize: '19px', flex: '0 0 auto' }}>♻️</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', lineHeight: 1.3 }}>
            <span style={{ direction: 'ltr', textAlign: 'left' }}>You've already built this exact pattern 3 times — the Pricing Card, the Product Card, and the Cart Item all have their own price row. This component extracts it once, properly, so the other 3 could import it instead of duplicating the CSS.</span>
            <span style={{ fontSize: '0.9em', color: 'var(--muted)', direction: 'rtl', textAlign: 'right', unicodeBidi: 'isolate' }}>أنت فعلًا بنيت النمط ده بالظبط ٣ مرات — Pricing Card وProduct Card وCart Item كلهم عندهم صف سعر بتاعهم. المكوّن ده بيستخرجه مرة واحدة، صح، عشان الـ٣ التانيين يقدروا يستوردوه بدل ما يكرروا الـCSS.</span>
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
            <div style={{ direction: 'ltr', textAlign: 'left', fontSize: '15px', lineHeight: 1.8, color: '#dfe2f2' }}>Build one reusable block combining a star rating row and a price row (current price, crossed-out original, discount tag), plus a second "inline" variant that lays the same two rows side by side with a vertical divider between them — same HTML, one modifier class swaps the whole layout.</div>
            <div style={{ direction: 'rtl', textAlign: 'right', unicodeBidi: 'isolate', fontSize: '15px', lineHeight: 1.8, color: '#dfe2f2' }}>ابنِ بلوك واحد قابل لإعادة الاستخدام بيجمع صف تقييم بالنجوم وصف سعر (السعر الحالي، الأصلي المشطوب، تاج الخصم)، زائد نسخة تانية "أفقية" بتحط نفس الصفين جنب بعض بخط فاصل رأسي بينهم — نفس الـHTML، كلاس تعديل واحد بيبدّل التصميم كله.</div>
          </div>
          <h2 style={{ fontSize: '18px', fontWeight: 700, margin: '24px 0 16px', color: 'var(--yellow)' }}>Requirements · المتطلبات</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              { en: 'Default layout stacks rating above price; an .inline modifier lays them side by side instead', ar: 'التصميم الافتراضي بيحط التقييم فوق السعر؛ كلاس تعديل .inline بيحطهم جنب بعض بدل كده' },
              { en: 'The divider between rating and price (inline variant) always matches their full height automatically', ar: 'الخط الفاصل بين التقييم والسعر (النسخة الأفقية) دايمًا بيطابق ارتفاعهم الكامل تلقائيًا' },
              { en: 'The discount tag wraps onto a new line gracefully if the row gets too narrow, instead of overflowing', ar: 'تاج الخصم بيلف لسطر جديد بشكل نضيف لو الصف ضاق، بدل ما يفيض' },
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
            <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--yellow)', letterSpacing: '0.5px' }}>DESIGN PREVIEW · معاينة التصميم</span>
          </div>
          <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 16px', background: 'linear-gradient(135deg, var(--text) 0%, var(--yellow) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Both variants — English & Arabic together</h2>
          <p style={{ color: 'var(--muted)', fontSize: '15px', margin: '0 0 24px', lineHeight: 1.6 }}>
            Same component, two layouts — stacked (default) and inline (with divider).
          </p>

          <div style={{ display: 'flex', gap: '8px', marginBottom: '18px', flexWrap: 'wrap' }}>
            {[
              { id: 'desktop', label: '🖥️ Desktop', width: '≥1024px' },
              { id: 'tablet', label: '📱 Tablet', width: '768px' },
              { id: 'mobile', label: '📱 Mobile', width: '375px' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                style={{
                  fontFamily: 'monospace',
                  background: activeTab === tab.id ? 'var(--yellow)' : 'var(--surface-2)',
                  color: activeTab === tab.id ? '#3a3018' : 'var(--text)',
                  border: activeTab === tab.id ? '1px solid var(--yellow)' : '1px solid var(--border)',
                  padding: '9px 16px',
                  borderRadius: '9px',
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: activeTab === tab.id ? 700 : 400,
                }}
              >
                {tab.label} <span style={{ opacity: 0.6 }}>{tab.width}</span>
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <span style={{ fontFamily: 'monospace', fontSize: '11px', padding: '3px 10px', borderRadius: '999px', color: 'var(--blue)', background: 'rgba(96,165,250,.12)', border: '1px solid rgba(96,165,250,.3)', marginBottom: '8px', display: 'inline-block' }}>EN · English</span>
              <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '16px', padding: '22px', display: 'inline-flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ fontFamily: 'monospace', fontSize: '10.5px', color: 'var(--muted)', marginBottom: '2px' }}>.pr-block (stacked)</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ display: 'flex', gap: '1px' }}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} style={{ fontSize: '13px' }}>⭐</span>
                      ))}
                    </div>
                    <span style={{ fontSize: '11.5px', color: 'var(--muted)' }}>4.8 (128)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '19px', fontWeight: 800 }}>$63.99</span>
                    <span style={{ fontSize: '12.5px', color: 'var(--muted)', textDecoration: 'line-through' }}>$79.99</span>
                    <span style={{ fontFamily: 'monospace', fontSize: '10.5px', fontWeight: 800, color: 'var(--coral)', background: 'var(--coral-dim)', padding: '2px 7px', borderRadius: '6px', alignSelf: 'center' }}>-20%</span>
                  </div>
                </div>
                <div style={{ fontFamily: 'monospace', fontSize: '10.5px', color: 'var(--muted)', marginTop: '8px' }}>.pr-block.inline</div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ display: 'flex', gap: '1px' }}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} style={{ fontSize: '13px' }}>⭐</span>
                      ))}
                    </div>
                    <span style={{ fontSize: '11.5px', color: 'var(--muted)' }}>4.8 (128)</span>
                  </div>
                  <div style={{ width: '1px', alignSelf: 'stretch', background: 'var(--border)' }} />
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '19px', fontWeight: 800 }}>$63.99</span>
                    <span style={{ fontSize: '12.5px', color: 'var(--muted)', textDecoration: 'line-through' }}>$79.99</span>
                    <span style={{ fontFamily: 'monospace', fontSize: '10.5px', fontWeight: 800, color: 'var(--coral)', background: 'var(--coral-dim)', padding: '2px 7px', borderRadius: '6px', alignSelf: 'center' }}>-20%</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span style={{ fontFamily: 'monospace', fontSize: '11px', padding: '3px 10px', borderRadius: '999px', color: 'var(--purple)', background: 'rgba(167,139,250,.12)', border: '1px solid rgba(167,139,250,.3)', marginBottom: '8px', display: 'inline-block', alignSelf: 'flex-end' }}>AR · عربي</span>
              <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '16px', padding: '22px', display: 'inline-flex', flexDirection: 'column', gap: '8px', direction: 'rtl' }}>
                <div style={{ fontFamily: 'monospace', fontSize: '10.5px', color: 'var(--muted)', marginBottom: '2px' }}>.pr-block (stacked)</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ display: 'flex', gap: '1px' }}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} style={{ fontSize: '13px' }}>⭐</span>
                      ))}
                    </div>
                    <span style={{ fontSize: '11.5px', color: 'var(--muted)' }}>٤.٨ (١٢٨)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '19px', fontWeight: 800 }}>٦٣.٩٩$</span>
                    <span style={{ fontSize: '12.5px', color: 'var(--muted)', textDecoration: 'line-through' }}>٧٩.٩٩$</span>
                    <span style={{ fontFamily: 'monospace', fontSize: '10.5px', fontWeight: 800, color: 'var(--coral)', background: 'var(--coral-dim)', padding: '2px 7px', borderRadius: '6px', alignSelf: 'center' }}>-٢٠٪</span>
                  </div>
                </div>
                <div style={{ fontFamily: 'monospace', fontSize: '10.5px', color: 'var(--muted)', marginTop: '8px' }}>.pr-block.inline</div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ display: 'flex', gap: '1px' }}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} style={{ fontSize: '13px' }}>⭐</span>
                      ))}
                    </div>
                    <span style={{ fontSize: '11.5px', color: 'var(--muted)' }}>٤.٨ (١٢٨)</span>
                  </div>
                  <div style={{ width: '1px', alignSelf: 'stretch', background: 'var(--border)' }} />
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '19px', fontWeight: 800 }}>٦٣.٩٩$</span>
                    <span style={{ fontSize: '12.5px', color: 'var(--muted)', textDecoration: 'line-through' }}>٧٩.٩٩$</span>
                    <span style={{ fontFamily: 'monospace', fontSize: '10.5px', fontWeight: 800, color: 'var(--coral)', background: 'var(--coral-dim)', padding: '2px 7px', borderRadius: '6px', alignSelf: 'center' }}>-٢٠٪</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '40px', marginTop: '32px', boxShadow: '0 4px 20px -8px rgba(0,0,0,0.3)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--yellow) 0%, var(--coral) 100%)', color: '#3a3018', fontFamily: 'monospace', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(255,209,102,0.3)' }}>3</span>
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
    <span class="discount">-20%</span>
  </div>
</div>`}
            initialCss={`/* Add your CSS here */`}
            initialJs={`// Add interactivity here`}
          />
        </section>

        <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '40px', marginTop: '32px', boxShadow: '0 4px 20px -8px rgba(0,0,0,0.3)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--teal) 0%, var(--blue) 100%)', color: '#0e2440', fontFamily: 'monospace', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(94,234,212,0.3)' }}>4</span>
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
    <span class="discount">-20%</span>
  </div>
</div>`}
              initialCss={`.price-rating {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.rating {
  display: flex;
  align-items: center;
  gap: 6px;
}

.rating .stars {
  display: flex;
  gap: 1px;
}

.count {
  font-size: 11.5px;
  color: #8d93ac;
}

.price {
  display: flex;
  align-items: baseline;
  gap: 8px;
  flex-wrap: wrap;
}

.current {
  font-size: 19px;
  font-weight: 800;
}

.old {
  font-size: 12.5px;
  color: #8d93ac;
  text-decoration: line-through;
}

.discount {
  font-family: monospace;
  font-size: 10.5px;
  font-weight: 800;
  color: #ff6b4a;
  background: #3a2620;
  padding: 2px 7px;
  border-radius: 6px;
  align-self: center;
}

/* Inline variant */
.price-rating.inline {
  flex-direction: row;
  align-items: center;
  gap: 14px;
}

.price-rating.inline .divider {
  width: 1px;
  align-self: stretch;
  background: rgba(255,255,255,0.1);
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
            <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--yellow) 0%, var(--coral) 100%)', color: '#3a3018', fontFamily: 'monospace', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(255,209,102,0.3)' }}>5</span>
            <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--yellow)', letterSpacing: '0.5px' }}>GUIDES · الشرح</span>
          </div>

          <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 24px', background: 'linear-gradient(135deg, var(--text) 0%, var(--yellow) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Anatomy</h2>
          <div style={{ display: 'flex', gap: '26px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
            <div style={{ background: 'var(--bg)', borderRadius: '16px', padding: '34px 30px', flex: '1 1 300px', display: 'flex', justifyContent: 'center', position: 'relative' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', position: 'relative' }}>
                <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--yellow)', color: 'var(--yellow)', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap', top: '-16px', left: '6px' }}>1 · rating</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ display: 'flex', gap: '1px' }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} style={{ fontSize: '13px' }}>⭐</span>
                    ))}
                  </div>
                  <span style={{ fontSize: '11.5px', color: 'var(--muted)' }}>4.8 (128)</span>
                </div>
                <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--yellow)', color: 'var(--yellow)', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap', bottom: '-16px', left: '6px' }}>2 · price</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  <span style={{ fontSize: '19px', fontWeight: 800 }}>$63.99</span>
                  <span style={{ fontSize: '12.5px', color: 'var(--muted)', textDecoration: 'line-through' }}>$79.99</span>
                  <span style={{ fontFamily: 'monospace', fontSize: '10.5px', fontWeight: 800, color: 'var(--coral)', background: 'var(--coral-dim)', padding: '2px 7px', borderRadius: '6px', alignSelf: 'center' }}>-20%</span>
                </div>
              </div>
            </div>
            <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                { en: 'Block — Flex column + gap:7px', ar: 'البلوك — Flex column + gap:7px' },
                { en: '1. Rating — Flex row, gap:6px', ar: '1. التقييم — Flex row, gap:6px' },
                { en: '2. Price — Flex row, baseline', ar: '2. السعر — Flex row, baseline' },
                { en: 'Inline variant — Flex row + divider', ar: 'النسخة الأفقية — Flex row + خط فاصل' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', padding: '12px 0', borderBottom: '1px solid var(--border)', alignItems: 'start' }}>
                  <div style={{ direction: 'ltr', textAlign: 'left' }}>{item.en}</div>
                  <div style={{ direction: 'rtl', textAlign: 'right', unicodeBidi: 'isolate' }}>{item.ar}</div>
                </div>
              ))}
            </div>
          </div>

          <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '32px 0 24px', background: 'linear-gradient(135deg, var(--text) 0%, var(--yellow) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Spec</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '6px' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', fontSize: '12px', color: 'var(--muted)', fontWeight: 700, padding: '8px 10px', borderBottom: '1px solid var(--border)' }}>Element / العنصر</th>
                <th style={{ textAlign: 'left', fontSize: '12px', color: 'var(--muted)', fontWeight: 700, padding: '8px 10px', borderBottom: '1px solid var(--border)' }}>Property / الخاصية</th>
                <th style={{ textAlign: 'left', fontSize: '12px', color: 'var(--muted)', fontWeight: 700, padding: '8px 10px', borderBottom: '1px solid var(--border)' }}>Value / القيمة</th>
              </tr>
            </thead>
            <tbody>
              {[
                { element: 'Block / البلوك', property: 'Gap / المسافة', value: '7px' },
                { element: 'Rating / التقييم', property: 'Gap / المسافة', value: '6px' },
                { element: 'Price / السعر', property: 'Gap / المسافة', value: '8px' },
                { element: 'Current price / السعر الحالي', property: 'Size / الحجم', value: '19px' },
                { element: 'Divider / الخط الفاصل', property: 'Height / الارتفاع', value: 'auto (self-stretch)' },
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '10px', fontSize: '13.5px', verticalAlign: 'top' }}>{row.element}</td>
                  <td style={{ padding: '10px', fontSize: '13.5px', verticalAlign: 'top' }}>{row.property}</td>
                  <td style={{ padding: '10px', fontSize: '13.5px', verticalAlign: 'top' }}><code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '4px 10px', fontSize: '0.88em' }}>{row.value}</code></td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '32px 0 24px', background: 'linear-gradient(135deg, var(--text) 0%, var(--yellow) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Build steps</h2>
          {[
            { title: 'HTML skeleton / هيكل الـHTML', hint: 'Rating div + price div in container.', code: '' },
            { title: 'Column Flex + gap', hint: 'display:flex; flex-direction:column; gap:7px;', code: 'display:flex; flex-direction:column; gap:7px;' },
            { title: 'Rating Flex row', hint: 'display:flex; align-items:center; gap:6px;', code: 'display:flex; align-items:center; gap:6px;' },
            { title: 'Price baseline', hint: 'display:flex; align-items:baseline; gap:8px;', code: 'display:flex; align-items:baseline; gap:8px;' },
            { title: 'Inline variant', hint: '.inline { flex-direction:row; } + divider', code: '.inline { flex-direction:row; }' },
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
