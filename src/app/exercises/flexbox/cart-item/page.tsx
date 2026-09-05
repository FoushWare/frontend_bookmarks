'use client';

import { useState } from 'react';
import Link from 'next/link';
import CodeEditor from '@/components/CodeEditor';
import PageLayout from '@/components/PageLayout';
import PageSidebar from '@/components/PageSidebar';
import { getTopicNavigation } from '@/data/navigation';

export default function CartItemExercise() {
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
              03 / 08
            </span>
            <span style={{
              fontFamily: 'monospace',
              fontSize: '12px',
              padding: '6px 12px',
              borderRadius: '8px',
              background: 'rgba(245, 158, 11, 0.1)',
              color: '#d97706',
              border: '1px solid var(--border)',
              fontWeight: 600
            }}>
              Intermediate
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
            Cart Item
          </h1>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'monospace', fontSize: '12px', padding: '6px 12px', borderRadius: '8px', border: '1px solid var(--border)', color: 'var(--yellow)', borderColor: 'rgba(255,209,102,.35)', background: 'var(--yellow-dim)', fontWeight: 600 }}>2 Flex Containers</span>
            <span style={{ fontFamily: 'monospace', fontSize: '12px', padding: '6px 12px', borderRadius: '8px', border: '1px solid var(--border)', color: 'var(--muted)', fontWeight: 600 }}>~20 min · ~٢٠ دقيقة</span>
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
            <div style={{ direction: 'ltr', textAlign: 'left', fontSize: '15px', lineHeight: 1.8, color: '#dfe2f2' }}>Build a shopping cart item: product image, name, variant, price, and quantity controls all in one row. The quantity selector uses nested flexbox for the minus/plus buttons and count display.</div>
            <div style={{ direction: 'rtl', textAlign: 'right', unicodeBidi: 'isolate', fontSize: '15px', lineHeight: 1.8, color: '#dfe2f2' }}>ابنِ عنصر سلة تسوق: صورة منتج واسم ومتغير وسعر وعدد تحكم في صف واحد. مختيار العدد بيستخدم Flexbox متداخل للأزرار (ناقص/زائد) وعرض العدد.</div>
          </div>
          <h2 style={{ fontSize: '18px', fontWeight: 700, margin: '24px 0 16px', color: 'var(--yellow)' }}>Requirements · المتطلبات</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              { en: 'All elements (image, info, quantity, price) in one horizontal row', ar: 'كل العناصر (صورة، معلومات، عدد، سعر) في صف أفقي واحد' },
              { en: 'Quantity selector has minus button, count, and plus button in a row', ar: 'مختيار العدد فيه زرار ناقص وعدد وزرار زائد في صف' },
              { en: 'Image has fixed width, info takes remaining space', ar: 'الصورة عندا عرض ثابت، والمعلومات بتاخد المساحة المتبقية' },
              { en: 'Price and remove button aligned on the right', ar: 'السعر وزرار الحذف متحاذيين على اليمين' },
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
            initialHtml={`<div class="cart-item">
  <div class="product-image"></div>
  <div class="product-info">
    <h3 class="product-name">Cloud Runner Sneaker</h3>
    <span class="product-variant">Size: 42, Color: Black</span>
  </div>
  <div class="quantity-selector">
    <button class="qty-btn minus">−</button>
    <span class="qty-count">1</span>
    <button class="qty-btn plus">+</button>
  </div>
  <div class="price">$63.99</div>
  <button class="remove-btn">×</button>
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
              initialHtml={`<div class="cart-item">
  <div class="product-image"></div>
  <div class="product-info">
    <h3 class="product-name">Cloud Runner Sneaker</h3>
    <span class="product-variant">Size: 42, Color: Black</span>
  </div>
  <div class="quantity-selector">
    <button class="qty-btn minus">−</button>
    <span class="qty-count">1</span>
    <button class="qty-btn plus">+</button>
  </div>
  <div class="price">$63.99</div>
  <button class="remove-btn">×</button>
</div>`}
              initialCss={`.cart-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: #212844;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
}

.product-image {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  background: linear-gradient(135deg, #ff6b4a, #5eead4);
  flex-shrink: 0;
}

.product-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.product-name {
  font-size: 15px;
  font-weight: 700;
  color: #eef0f8;
  margin: 0;
}

.product-variant {
  font-size: 12px;
  color: #8d93ac;
}

.quantity-selector {
  display: flex;
  align-items: center;
  gap: 8px;
}

.qty-btn {
  width: 32px;
  height: 32px;
  border-radius: 6px;
  border: 1px solid rgba(255,255,255,0.1);
  background: #1a2030;
  color: #eef0f8;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.qty-count {
  width: 32px;
  text-align: center;
  font-weight: 700;
  color: #eef0f8;
}

.price {
  font-size: 16px;
  font-weight: 700;
  color: #eef0f8;
  min-width: 60px;
}

.remove-btn {
  width: 32px;
  height: 32px;
  border-radius: 6px;
  border: none;
  background: transparent;
  color: #8d93ac;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.remove-btn:hover {
  color: #ff6b4a;
}`}
              initialJs={`// Quantity controls
const minusBtn = document.querySelector('.minus');
const plusBtn = document.querySelector('.plus');
const qtyCount = document.querySelector('.qty-count');
let count = 1;

minusBtn.addEventListener('click', () => {
  if (count > 1) {
    count--;
    qtyCount.textContent = count;
  }
});

plusBtn.addEventListener('click', () => {
  count++;
  qtyCount.textContent = count;
});

// Remove button
const removeBtn = document.querySelector('.remove-btn');
removeBtn.addEventListener('click', () => {
  removeBtn.textContent = '✓';
  setTimeout(() => {
    removeBtn.textContent = '×';
  }, 1000);
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '20px', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '12px', position: 'relative', width: '100%' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '8px', background: 'linear-gradient(135deg, var(--coral), var(--teal)' }} />
                <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--yellow)', color: 'var(--yellow)', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap', top: '10px', left: '96px' }}>1 · image</div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--yellow)', color: 'var(--yellow)', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap', top: '10px', right: '120px' }}>2 · info</div>
                  <div style={{ fontSize: '14px', fontWeight: 700 }}>Cloud Runner</div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)' }}>Size: 42</div>
                </div>
                <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--yellow)', color: 'var(--yellow)', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap', top: '70px', right: '70px' }}>3 · qty</div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <button style={{ width: '32px', height: '32px', borderRadius: '6px', background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)' }}>−</button>
                  <span style={{ width: '32px', textAlign: 'center', fontWeight: 700 }}>1</span>
                  <button style={{ width: '32px', height: '32px', borderRadius: '6px', background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)' }}>+</button>
                </div>
                <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--yellow)', color: 'var(--yellow)', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap', top: '70px', right: '20px' }}>4 · price</div>
                <div style={{ fontSize: '16px', fontWeight: 700 }}>$63.99</div>
                <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--yellow)', color: 'var(--yellow)', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap', top: '70px', right: '-20px' }}>5 · remove</div>
                <button style={{ width: '32px', height: '32px', borderRadius: '6px', background: 'transparent', border: 'none', color: 'var(--muted)', fontSize: '20px' }}>×</button>
              </div>
            </div>
            <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                { en: 'Row — Flex, align-items center', ar: 'الصف — Flex، align-items center' },
                { en: '1. Image — fixed width, flex-shrink 0', ar: '1. الصورة — عرض ثابت، flex-shrink 0' },
                { en: '2. Info — flex: 1, column direction', ar: '2. المعلومات — flex: 1، column' },
                { en: '3. Qty — nested Flex row', ar: '3. العدد — Flex row متداخل' },
                { en: '4-5. Price & remove — aligned right', ar: '4-٥. السعر والحذف — متحاذيين يمين' },
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
            { title: 'HTML skeleton / هيكل الـHTML', hint: 'Image + info + qty + price + remove in row.', code: '' },
            { title: 'Main row Flex', hint: 'display:flex; align-items:center; gap:16px;', code: 'display:flex; align-items:center; gap:16px;' },
            { title: 'Image fixed width', hint: 'width:80px; flex-shrink:0;', code: 'width:80px; flex-shrink:0;' },
            { title: 'Info takes space', hint: 'flex:1; flex-direction:column;', code: 'flex:1; flex-direction:column;' },
            { title: 'Quantity nested Flex', hint: 'display:flex; align-items:center; gap:8px;', code: 'display:flex; align-items:center; gap:8px;' },
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
            href="/exercises/flexbox/category-card"
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
            ← Previous: Category Card
          </Link>
          <Link
            href="/exercises/flexbox/price-rating"
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
            Next: Price / Rating →
          </Link>
        </div>

        <footer style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '13px', marginTop: '60px', padding: '24px', borderTop: '1px solid var(--border)' }}>
          🛒 E-commerce Track · Cart Item · Flexbox Exercise #3
        </footer>
      </div>
    </PageLayout>
  );
}
