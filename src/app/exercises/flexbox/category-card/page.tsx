'use client';

import { useState } from 'react';
import Link from 'next/link';
import CodeEditor from '@/components/CodeEditor';
import PageLayout from '@/components/PageLayout';
import PageSidebar from '@/components/PageSidebar';
import { getTopicNavigation } from '@/data/navigation';

export default function CategoryCardExercise() {
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
        {/* Exercise Info */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '16px' }}>
            <span style={{
              fontFamily: 'monospace',
              fontSize: '12px',
              padding: '6px 12px',
              borderRadius: '8px',
              background: 'var(--yellow-dim)',
              color: 'var(--yellow)',
              border: '1px solid rgba(255,209,102,.3)',
              fontWeight: 600
            }}>
              02 / 08
            </span>
            <span style={{
              fontFamily: 'monospace',
              fontSize: '12px',
              padding: '6px 12px',
              borderRadius: '8px',
              background: 'rgba(16, 185, 129, 0.1)',
              color: '#059669',
              border: '1px solid var(--border)',
              fontWeight: 600
            }}>
              Beginner
            </span>
          </div>
        </div>

        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 700, color: 'var(--yellow)', background: 'var(--yellow-dim)', border: '1px solid ' + 'rgba(255,209,102,.35)', padding: '6px 14px', borderRadius: '999px', marginBottom: '16px' }}>
            <span>🛒</span>
            <span>Component Reference</span>
            <span style={{ opacity: 0.5 }}>|</span>
            <span style={{ fontSize: '0.9em', color: 'var(--muted)', direction: 'rtl' }}>مرجع مكوّن</span>
          </div>
          <h1 style={{ fontSize: '48px', fontWeight: 800, margin: '0 0 12px', background: 'linear-gradient(135deg, var(--text) 0%, var(--yellow) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Category Card
          </h1>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'monospace', fontSize: '12px', padding: '6px 12px', borderRadius: '8px', border: '1px solid var(--border)', color: 'var(--yellow)', borderColor: 'rgba(255,209,102,.35)', background: 'var(--yellow-dim)', fontWeight: 600 }}>1 Flex Container + overlay</span>
            <span style={{ fontFamily: 'monospace', fontSize: '12px', padding: '6px 12px', borderRadius: '8px', border: '1px solid var(--border)', color: 'var(--muted)', fontWeight: 600 }}>~15 min · ~١٥ دقيقة</span>
          </div>
        </div>

        {/* Section 1: Project Brief */}
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
            <div style={{ direction: 'ltr', textAlign: 'left', fontSize: '15px', lineHeight: 1.8, color: '#dfe2f2' }}>Build a category thumbnail card: a category image with a semi-transparent overlay containing the category name and item count. These cards appear in the shop homepage and category listing pages.</div>
            <div style={{ direction: 'rtl', textAlign: 'right', unicodeBidi: 'isolate', fontSize: '15px', lineHeight: 1.8, color: '#dfe2f2' }}>ابنِ كارت تصنيف مصغر: صورة تصنيف مع طبقة شبه شفافة فيها اسم التصنيف وعدد العناصر. الكروت دي بتظهر في صفحة المتجر الرئيسية وصفحات قوائم التصنيفات.</div>
          </div>
          <h2 style={{ fontSize: '18px', fontWeight: 700, margin: '24px 0 16px', color: 'var(--yellow)' }}>Requirements · المتطلبات</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              { en: 'Image fills the card completely with object-fit: cover', ar: 'الصورة بتملأ الكارت بالكامل مع object-fit: cover' },
              { en: 'Overlay covers the entire image with semi-transparent background', ar: 'الطبقة بتغطي الصورة بالكامل بخلفية شبه شفافة' },
              { en: 'Category name and count are centered vertically and horizontally', ar: 'اسم التصنيف وعدد العناصر متوسطين عموديًا وأفقيًا' },
              { en: 'Card scales smoothly on hover with slight zoom effect', ar: 'الكارت بيتكبر بنعومة لما الماوس يفوق بتأثير زووم خفيف' },
            ].map((req, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', padding: '16px 0', borderBottom: '1px solid var(--border)', alignItems: 'start' }}>
                <div style={{ direction: 'ltr', textAlign: 'left', fontSize: '14px', lineHeight: 1.6 }}>{req.en}</div>
                <div style={{ direction: 'rtl', textAlign: 'right', unicodeBidi: 'isolate', fontSize: '14px', lineHeight: 1.6 }}>{req.ar}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Code & Preview */}
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
            initialHtml={`<div class="category-card">
  <div class="category-image"></div>
  <div class="overlay">
    <h3 class="category-name">Footwear</h3>
    <span class="item-count">24 items</span>
  </div>
</div>`}
            initialCss={`/* Add your CSS here */`}
            initialJs={`// Add interactivity here`}
          />
        </section>

        {/* Section 3: Solution */}
        <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '40px', marginTop: '32px', boxShadow: '0 4px 20px -8px rgba(0,0,0,0.3)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--teal) 0%, var(--blue) 100%)', color: '#0e2440', fontFamily: 'monospace', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(94,234,212,0.3)' }}>3</span>
              <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--teal)', letterSpacing: '0.5px' }}>SOLUTION</span>
            </div>
            <button
              onClick={() => setShowSolution(!showSolution)}
              style={{
                padding: '8px 16px',
                background: showSolution ? 'var(--surface-2)' : 'var(--teal)',
                color: showSolution ? 'var(--teal)' : '#0b1f1b',
                border: showSolution ? '1px solid var(--teal)' : 'none',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '13px',
                cursor: 'pointer',
              }}
            >
              {showSolution ? '✕ Hide' : '�️ Show Solution'}
            </button>
          </div>
          <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 16px', color: 'var(--text)' }}>Compare with the solution</h2>
          <p style={{ color: 'var(--muted)', fontSize: '15px', margin: '0 0 24px', lineHeight: 1.6 }}>
            Stuck? Click "Show Solution" to see the complete code and preview for this exercise.
          </p>

          {showSolution && (
            <CodeEditor
              height="600px"
              initialHtml={`<div class="category-card">
  <div class="category-image"></div>
  <div class="overlay">
    <h3 class="category-name">Footwear</h3>
    <span class="item-count">24 items</span>
  </div>
</div>`}
              initialCss={`.category-card {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.category-card:hover {
  transform: scale(1.05);
}

.category-image {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #ff6b4a, #5eead4);
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(18, 21, 31, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 20px;
}

.category-name {
  font-size: 18px;
  font-weight: 700;
  color: #eef0f8;
  margin: 0;
  text-align: center;
}

.item-count {
  font-size: 14px;
  color: #8d93ac;
}`}
              initialJs={`// Hover animation
const card = document.querySelector('.category-card');
card.addEventListener('mouseenter', () => {
  card.style.transform = 'scale(1.05)';
});

card.addEventListener('mouseleave', () => {
  card.style.transform = 'scale(1)';
});`}
            />
          )}
        </section>

        {/* Section 4: Guides */}
        <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '40px', marginTop: '32px', boxShadow: '0 4px 20px -8px rgba(0,0,0,0.3)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--yellow) 0%, var(--coral) 100%)', color: '#3a3018', fontFamily: 'monospace', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(255,209,102,0.3)' }}>4</span>
            <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--yellow)', letterSpacing: '0.5px' }}>GUIDES · الشرح</span>
          </div>

          <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 24px', background: 'linear-gradient(135deg, var(--text) 0%, var(--yellow) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Anatomy</h2>
          <div style={{ display: 'flex', gap: '26px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
            <div style={{ background: 'var(--bg)', borderRadius: '16px', padding: '44px 30px', flex: '1 1 340px', display: 'flex', justifyContent: 'center', position: 'relative' }}>
              <div style={{ width: '200px', height: '200px', background: 'linear-gradient(135deg, var(--coral), var(--teal))', borderRadius: '16px', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--yellow)', color: 'var(--yellow)', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap', top: '10px', right: '10px' }}>1 · image</div>
                <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--yellow)', color: 'var(--yellow)', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap', top: '10px', left: '10px' }}>2 · overlay</div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, margin: 0, color: '#eef0f8' }}>Footwear</h3>
                <span style={{ fontSize: '14px', color: '#8d93ac' }}>24 items</span>
              </div>
            </div>
            <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                { en: 'Card — relative positioning', ar: 'الكارت — relative positioning' },
                { en: '1. Image — fills container', ar: '1. الصورة — بتملأ الحاوية' },
                { en: '2. Overlay — absolute, full coverage', ar: '2. الطبقة — absolute، تغطي كله' },
                { en: 'Content — Flex center', ar: 'المحتوى — Flex center' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', padding: '12px 0', borderBottom: '1px solid var(--border)', alignItems: 'start' }}>
                  <div style={{ direction: 'ltr', textAlign: 'left' }}>{item.en}</div>
                  <div style={{ direction: 'rtl', textAlign: 'right', unicodeBidi: 'isolate' }}>{item.ar}</div>
                </div>
              ))}
            </div>
          </div>

          <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '32px 0 24px', background: 'linear-gradient(135deg, var(--text) 0%, var(--yellow) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Build steps</h2>
          {[
            { title: 'HTML skeleton / هيكل الـHTML', hint: 'Image wrapper + overlay div inside.', code: '' },
            { title: 'Card relative + overflow', hint: 'position:relative; overflow:hidden;', code: 'position:relative; overflow:hidden;' },
            { title: 'Image fills container', hint: 'width:100%; height:100%; object-fit:cover;', code: 'width:100%; height:100%; object-fit:cover;' },
            { title: 'Overlay absolute full', hint: 'position:absolute; inset:0; background:rgba(0,0,0,0.7);', code: 'position:absolute; inset:0;' },
            { title: 'Content centered', hint: 'display:flex; align-items:center; justify-content:center;', code: 'display:flex; align-items:center; justify-content:center;' },
          ].map((step, i) => (
            <div key={i} style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '16px', padding: '24px', marginBottom: '16px', transition: 'all 0.2s ease' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                <span style={{ width: '30px', height: '30px', borderRadius: '9px', background: 'var(--yellow)', color: '#3a3018', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto', fontSize: '14px' }}>{i + 1}</span>
                <h3 style={{ fontSize: '15.5px', fontWeight: 700, margin: 0 }}>{step.title}</h3>
              </div>
              <button
                onClick={() => toggleHint(`step-${i}`)}
                style={{ fontFamily: 'monospace', background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--yellow)', borderRadius: '8px', padding: '6px 12px', fontSize: '12px', cursor: 'pointer', marginTop: '6px' }}
              >
                💡 Hint
              </button>
              {showHints[`step-${i}`] && (
                <div style={{ marginTop: '10px', background: 'var(--bg)', border: '1px dashed rgba(255,209,102,.4)', borderRadius: '10px', padding: '12px 14px', fontSize: '13px', color: 'var(--yellow)' }}>
                  {step.hint}
                  {step.code && (
                    <div style={{ marginTop: '8px', fontFamily: 'monospace', fontSize: '12px', opacity: 0.8 }}>
                      {step.code}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', marginTop: '32px' }}>
          <Link
            href="/exercises/flexbox/product-card"
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
            ← Previous: Product Card
          </Link>
          <Link
            href="/exercises/flexbox/cart-item"
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
            Next: Cart Item →
          </Link>
        </div>

        <footer style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '13px', marginTop: '60px', padding: '24px', borderTop: '1px solid var(--border)' }}>
          🛒 E-commerce Track · Category Card · Flexbox Exercise #2
        </footer>
      </div>
    </PageLayout>
  );
}
