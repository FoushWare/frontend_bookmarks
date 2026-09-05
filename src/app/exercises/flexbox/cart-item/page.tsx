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
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const topicNav = getTopicNavigation('flexbox');

  const toggleHint = (hintId: string) => {
    setShowHints(prev => ({ ...prev, [hintId]: !prev[hintId] }));
  };

  const updateQuantity = (delta: number) => {
    setQuantity(Math.max(1, quantity + delta));
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
            <span style={{ fontFamily: 'monospace', fontSize: '12px', padding: '6px 12px', borderRadius: '8px', background: 'var(--yellow-dim)', color: 'var(--yellow)', border: '1px solid rgba(255,209,102,.3)', fontWeight: 600 }}>03 / 08</span>
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
            Cart Item
          </h1>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'monospace', fontSize: '12px', padding: '6px 12px', borderRadius: '8px', border: '1px solid var(--border)', color: 'var(--yellow)', borderColor: 'rgba(255,209,102,.35)', background: 'var(--yellow-dim)', fontWeight: 600 }}>3 Flex Containers</span>
            <span style={{ fontFamily: 'monospace', fontSize: '12px', padding: '6px 12px', borderRadius: '8px', border: '1px solid var(--border)', color: 'var(--muted)', fontWeight: 600 }}>~25 min · ~٢٥ دقيقة</span>
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
            <div style={{ direction: 'ltr', textAlign: 'left', fontSize: '15px', lineHeight: 1.8, color: '#dfe2f2' }}>Build one row of the shopping cart: thumbnail, title + variant, a quantity stepper, a price, and a remove button — all in one flex row on desktop, wrapping to two clean lines on mobile. This introduces <code style={{ color: 'var(--yellow)' }}>flex:1</code> used to fill the gap <em>between</em> fixed-width siblings (not to share space equally), plus a forced line-break technique for controlled wrapping.</div>
            <div style={{ direction: 'rtl', textAlign: 'right', unicodeBidi: 'isolate', fontSize: '15px', lineHeight: 1.8, color: '#dfe2f2' }}>ابنِ صف واحد من عربة التسوق: صورة مصغّرة، عنوان + نوع، عداد كمية، سعر، وزرار إزالة — كلهم في صف flex واحد في الديسكتوب، وبيلفوا لسطرين نضاف في الموبايل. ده بيقدّم <code style={{ color: 'var(--yellow)' }}>flex:1</code> مستخدمة عشان تملأ الفراغ <em>بين</em> إخوة بعرض ثابت (مش عشان توزّع المساحة بالتساوي)، زائد حيلة كسر سطر متحكّم فيه.</div>
          </div>
          <h2 style={{ fontSize: '18px', fontWeight: 700, margin: '24px 0 16px', color: 'var(--yellow)' }}>Requirements · المتطلبات</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              { en: 'Thumbnail, quantity stepper, price, and remove button stay fixed-size; the info block absorbs all leftover space', ar: 'الصورة وعداد الكمية والسعر وزرار الإزالة أحجامهم ثابتة؛ بلوك المعلومات بياخد كل المساحة الفاضية' },
              { en: 'A long product title truncates with an ellipsis instead of breaking the row\'s height', ar: 'عنوان المنتج الطويل بيتقص بـ ellipsis بدل ما يكسر ارتفاع الصف' },
              { en: 'On mobile, the row wraps into exactly 2 lines — not 5 separate ones — image/info/remove on top, qty/price below', ar: 'في الموبايل، الصف بيلف لسطرين بالظبط — مش ٥ منفصلين — الصورة/المعلومات/الإزالة فوق، الكمية/السعر تحت' },
              { en: 'Quantity +/- buttons are actually clickable and update the number', ar: 'أزرار +/- بتشتغل فعليًا وبتحدّث الرقم' },
              { en: 'Works at desktop, tablet, mobile; supports LTR and RTL', ar: 'شغالة في ديسكتوب وتابلت وموبايل؛ بتدعم LTR وRTL' },
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
          <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 16px', background: 'linear-gradient(135deg, var(--text) 0%, var(--yellow) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Desktop, tablet, mobile — English & Arabic together</h2>
          <p style={{ color: 'var(--muted)', fontSize: '15px', margin: '0 0 24px', lineHeight: 1.6 }}>
            The quantity stepper is fully interactive — tap + or − in any tab. Watch the row reflow to 2 lines in the mobile tab.
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
                  background: activeTab === tab.id ? 'var(--coral)' : 'var(--surface-2)',
                  color: activeTab === tab.id ? '#3a1607' : 'var(--text)',
                  border: activeTab === tab.id ? '1px solid var(--coral)' : '1px solid var(--border)',
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
              <div style={{ maxWidth: activeTab === 'mobile' ? '360px' : activeTab === 'tablet' ? '560px' : '100%', margin: '0 auto', padding: activeTab === 'mobile' ? '20px 14px' : '26px 20px', background: 'var(--bg)', borderRadius: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '14px', padding: '16px', flexWrap: 'wrap' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--coral), var(--teal))', flexShrink: 0 }} />
                  <div style={{ flex: '1 1 160px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    <div style={{ fontSize: '14px', fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Cloud Runner Sneaker — Extra Long Product Name</div>
                    <div style={{ fontSize: '12px', color: 'var(--muted)' }}>Size 42 · Black</div>
                  </div>
                  <div style={{ display: activeTab === 'mobile' ? 'block' : 'none', flexBasis: '100%', height: 0 }} />
                  <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border)', borderRadius: '9px', overflow: 'hidden', flexShrink: 0 }}>
                    <button onClick={() => updateQuantity(-1)} style={{ width: '28px', height: '28px', background: 'var(--bg)', border: 'none', color: 'var(--text)', fontSize: '15px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>−</button>
                    <span style={{ width: '30px', textAlign: 'center', fontFamily: 'monospace', fontSize: '13px' }}>{quantity}</span>
                    <button onClick={() => updateQuantity(1)} style={{ width: '28px', height: '28px', background: 'var(--bg)', border: 'none', color: 'var(--text)', fontSize: '15px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</button>
                  </div>
                  <div style={{ fontSize: '14.5px', fontWeight: 800, flexShrink: 0, minWidth: '56px', textAlign: 'right' }}>$63.99</div>
                  <button style={{ width: '30px', height: '30px', borderRadius: '8px', background: 'transparent', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
                    🗑️
                  </button>
                </div>
              </div>
            </div>

            <div>
              <span style={{ fontFamily: 'monospace', fontSize: '11px', padding: '3px 10px', borderRadius: '999px', color: 'var(--purple)', background: 'rgba(167,139,250,.12)', border: '1px solid rgba(167,139,250,.3)', marginBottom: '8px', display: 'inline-block', alignSelf: 'flex-end' }}>AR · عربي</span>
              <div style={{ maxWidth: activeTab === 'mobile' ? '360px' : activeTab === 'tablet' ? '560px' : '100%', margin: '0 auto', padding: activeTab === 'mobile' ? '20px 14px' : '26px 20px', background: 'var(--bg)', borderRadius: '16px', direction: 'rtl' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '14px', padding: '16px', flexWrap: 'wrap' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--coral), var(--teal))', flexShrink: 0 }} />
                  <div style={{ flex: '1 1 160px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    <div style={{ fontSize: '14px', fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>حذاء كلاود رنر — اسم منتج طويل جدًا</div>
                    <div style={{ fontSize: '12px', color: 'var(--muted)' }}>مقاس ٤٢ · أسود</div>
                  </div>
                  <div style={{ display: activeTab === 'mobile' ? 'block' : 'none', flexBasis: '100%', height: 0 }} />
                  <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border)', borderRadius: '9px', overflow: 'hidden', flexShrink: 0 }}>
                    <button onClick={() => updateQuantity(-1)} style={{ width: '28px', height: '28px', background: 'var(--bg)', border: 'none', color: 'var(--text)', fontSize: '15px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>−</button>
                    <span style={{ width: '30px', textAlign: 'center', fontFamily: 'monospace', fontSize: '13px' }}>{quantity}</span>
                    <button onClick={() => updateQuantity(1)} style={{ width: '28px', height: '28px', background: 'var(--bg)', border: 'none', color: 'var(--text)', fontSize: '15px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</button>
                  </div>
                  <div style={{ fontSize: '14.5px', fontWeight: 800, flexShrink: 0, minWidth: '56px', textAlign: 'left' }}>٦٣.٩٩$</div>
                  <button style={{ width: '30px', height: '30px', borderRadius: '8px', background: 'transparent', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
                    🗑️
                  </button>
                </div>
              </div>
            </div>
          </div>

          {activeTab === 'mobile' && (
            <p style={{ color: 'var(--muted)', fontSize: '13px', marginTop: '14px', marginBottom: 0 }}>
              Mobile override: the invisible break item switches to <code style={{ color: 'var(--yellow)' }}>display:block</code>, forcing qty + price onto their own line.
            </p>
          )}
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
            height="600px"
            initialHtml={`<div class="cart-item">
  <div class="product-image"></div>
  <div class="product-info">
    <div class="product-title">Cloud Runner Sneaker</div>
    <div class="product-variant">Size 42 · Black</div>
  </div>
  <div class="break"></div>
  <div class="quantity-control">
    <button class="qty-minus">−</button>
    <span class="qty-value">1</span>
    <button class="qty-plus">+</button>
  </div>
  <div class="price">$63.99</div>
  <button class="remove-btn">🗑️</button>
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
              height="600px"
              initialHtml={`<div class="cart-item">
  <div class="product-image"></div>
  <div class="product-info">
    <div class="product-title">Cloud Runner Sneaker</div>
    <div class="product-variant">Size 42 · Black</div>
  </div>
  <div class="break"></div>
  <div class="quantity-control">
    <button class="qty-minus">−</button>
    <span class="qty-value">1</span>
    <button class="qty-plus">+</button>
  </div>
  <div class="price">$63.99</div>
  <button class="remove-btn">🗑️</button>
</div>`}
              initialCss={`.cart-item {
  display: flex;
  align-items: center;
  gap: 16px;
  background: #212844;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 14px;
  padding: 16px;
  flex-wrap: wrap;
}

.product-image {
  width: 64px;
  height: 64px;
  border-radius: 10px;
  background: linear-gradient(135deg, #ff6b4a, #5eead4);
  flex-shrink: 0;
}

.product-info {
  flex: 1 1 160px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.product-title {
  font-size: 14px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.product-variant {
  font-size: 12px;
  color: #8d93ac;
}

.break {
  display: none;
  flex-basis: 100%;
  height: 0;
}

.quantity-control {
  display: flex;
  align-items: center;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 9px;
  overflow: hidden;
  flex-shrink: 0;
}

.quantity-control button {
  width: 28px;
  height: 28px;
  background: #12151f;
  border: none;
  color: #eef0f8;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.qty-value {
  width: 30px;
  text-align: center;
  font-family: monospace;
  font-size: 13px;
  font-weight: 700;
}

.price {
  font-size: 14.5px;
  font-weight: 800;
  flex-shrink: 0;
  min-width: 56px;
  text-align: right;
}

.remove-btn {
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: transparent;
  border: 1px solid rgba(255,255,255,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  font-size: 16px;
}

@media (max-width: 480px) {
  .break {
    display: block;
  }
  .price {
    margin-inline-start: auto;
  }
}`}
              initialJs={`// Quantity controls
const minusBtn = document.querySelector('.qty-minus');
const plusBtn = document.querySelector('.qty-plus');
const qtyValue = document.querySelector('.qty-value');
let count = 1;

minusBtn.addEventListener('click', () => {
  if (count > 1) {
    count--;
    qtyValue.textContent = count;
  }
});

plusBtn.addEventListener('click', () => {
  count++;
  qtyValue.textContent = count;
});

// Remove button
const removeBtn = document.querySelector('.remove-btn');
removeBtn.addEventListener('click', () => {
  removeBtn.textContent = '✓';
  setTimeout(() => {
    removeBtn.textContent = '🗑️';
  }, 1000);
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
            <div style={{ background: 'var(--bg)', borderRadius: '16px', padding: '34px 20px', flex: '1 1 340px', display: 'flex', justifyContent: 'center', position: 'relative' }}>
              <div style={{ width: '100%', maxWidth: '400px', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '14px', padding: '16px', position: 'relative' }}>
                <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--coral)', color: 'var(--coral)', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap', top: '-2px', left: '20px' }}>1 · image</div>
                <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--coral)', color: 'var(--coral)', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap', top: '-2px', left: '150px' }}>2 · info: flex:1</div>
                <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--coral)', color: 'var(--coral)', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap', top: '-2px', right: '100px' }}>3 · qty</div>
                <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--coral)', color: 'var(--coral)', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap', top: '-2px', right: '14px' }}>4 · remove</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--coral), var(--teal))', flexShrink: 0 }} />
                  <div style={{ flex: '1 1 160px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    <div style={{ fontSize: '14px', fontWeight: 700 }}>Cloud Runner</div>
                    <div style={{ fontSize: '12px', color: 'var(--muted)' }}>Size 42</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border)', borderRadius: '9px', overflow: 'hidden' }}>
                    <button style={{ width: '28px', height: '28px', background: 'var(--bg)', border: 'none', color: 'var(--text)', fontSize: '15px' }}>−</button>
                    <span style={{ width: '30px', textAlign: 'center', fontFamily: 'monospace', fontSize: '13px' }}>1</span>
                    <button style={{ width: '28px', height: '28px', background: 'var(--bg)', border: 'none', color: 'var(--text)', fontSize: '15px' }}>+</button>
                  </div>
                  <div style={{ fontSize: '14.5px', fontWeight: 800 }}>$63.99</div>
                  <button style={{ width: '30px', height: '30px', borderRadius: '8px', background: 'transparent', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🗑️</button>
                </div>
              </div>
            </div>
            <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                { en: 'Row — Flex row, flex-wrap:wrap, gap:16px', ar: 'الصف — Flex أفقي، flex-wrap:wrap، gap:16px' },
                { en: '2. Info block — flex:1 fills whatever space the fixed siblings leave behind; min-width:0 lets its title actually truncate', ar: '2. بلوك المعلومات — flex:1 بيملأ أي مساحة سايبنها الإخوة الثابتين؛ min-width:0 بتخلي العنوان يتقص فعليًا' },
                { en: 'Image, qty, price, remove — all flex-shrink:0, never resize', ar: 'الصورة، الكمية، السعر، الإزالة — كلهم flex-shrink:0، أحجامهم متتغيّرش' },
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
                { element: 'Row / الصف', property: 'Gap / المسافة', value: '16px' },
                { element: 'Image / الصورة', property: 'Size / الحجم', value: '64×64px' },
                { element: 'Info block / بلوك المعلومات', property: 'flex', value: '1 1 160px, min-width:0' },
                { element: 'Title / العنوان', property: 'Overflow / الفيض', value: 'ellipsis' },
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
            { title: 'HTML skeleton / هيكل الـHTML', hint: 'Image + info + break + qty + price + remove.', code: '' },
            { title: 'Row Flex wrap', hint: 'display:flex; flex-wrap:wrap; gap:16px;', code: 'display:flex; flex-wrap:wrap; gap:16px;' },
            { title: 'Info flex:1', hint: 'flex:1 1 160px; min-width:0;', code: 'flex:1 1 160px; min-width:0;' },
            { title: 'Fixed siblings', hint: 'flex-shrink:0 on image, qty, price, remove.', code: 'flex-shrink:0;' },
            { title: 'Mobile break', hint: '.break { display:block } at 480px.', code: '@media (max-width:480px) { .break { display:block } }' },
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
          <Link href="/exercises/flexbox/category-card" style={{ padding: '12px 24px', background: 'var(--surface-2)', color: 'var(--text)', textDecoration: 'none', borderRadius: '8px', fontWeight: 700, fontSize: '14px', border: '1px solid var(--border)' }}>← Previous: Category Card</Link>
          <Link href="/exercises/flexbox/price-rating" style={{ padding: '12px 24px', background: 'var(--yellow)', color: '#3a3018', textDecoration: 'none', borderRadius: '8px', fontWeight: 700, fontSize: '14px' }}>Next: Price / Rating →</Link>
        </div>

        <footer style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '13px', marginTop: '60px', padding: '24px', borderTop: '1px solid var(--border)' }}>
          🛒 E-commerce Track · Cart Item · Flexbox Exercise #3
        </footer>
      </div>
    </PageLayout>
  );
}
