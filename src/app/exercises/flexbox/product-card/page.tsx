'use client';

import { useState } from 'react';
import Link from 'next/link';
import CodeEditor from '@/components/CodeEditor';
import PageLayout from '@/components/PageLayout';
import PageSidebar from '@/components/PageSidebar';
import { getTopicNavigation } from '@/data/navigation';

export default function ProductCardExercise() {
  const [showCompleteResult, setShowCompleteResult] = useState(false);
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
              01 / 08
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
          <button
            onClick={() => setShowCompleteResult(!showCompleteResult)}
            style={{
              padding: '12px 24px',
              background: showCompleteResult ? 'var(--surface-2)' : 'var(--yellow)',
              color: showCompleteResult ? 'var(--yellow)' : '#3a3018',
              border: showCompleteResult ? '1px solid var(--yellow)' : 'none',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '14px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            {showCompleteResult ? '✕ Hide Complete Result' : '👁️ View Complete Result'}
          </button>
        </div>

        {/* Complete Result Preview */}
        {showCompleteResult && (
          <div style={{
            background: 'var(--surface)',
            border: '2px solid var(--yellow)',
            borderRadius: '16px',
            padding: '32px',
            marginBottom: '32px',
            boxShadow: '0 8px 24px rgba(255, 209, 102, 0.2)'
          }}>
            <div style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: 'var(--yellow)' }}>
                Complete Product Card Design
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--muted)', margin: 0 }}>
                This is the final result you'll achieve by completing this exercise.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {/* English Card */}
              <div style={{ width: '230px', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 20px 40px -20px rgba(0,0,0,.6)' }}>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', background: 'linear-gradient(135deg, var(--coral), var(--teal))' }}>
                  <span style={{ position: 'absolute', top: '10px', left: '10px', background: 'var(--coral)', color: '#3a1607', fontFamily: 'monospace', fontSize: '10.5px', fontWeight: 800, padding: '3px 8px', borderRadius: '6px' }}>
                    -20%
                  </span>
                  <button style={{ position: 'absolute', top: '10px', right: '10px', width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(18,21,31,.65)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                    <svg viewBox="0 0 24 24" style={{ width: '16px', height: '16px' }}>
                      <path d="M12 20.5s-7.5-4.6-9.8-9.2C.6 7.7 2.3 4 6 4c2.1 0 3.6 1.2 6 3.6C14.4 5.2 15.9 4 18 4c3.7 0 5.4 3.7 3.8 7.3-2.3 4.6-9.8 9.2-9.8 9.2z" fill="var(--coral)" stroke="var(--coral)" strokeWidth="1.8" strokeLinejoin="round" />
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
                  <button style={{ position: 'absolute', top: '10px', left: '10px', width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(18,21,31,.65)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                    <svg viewBox="0 0 24 24" style={{ width: '16px', height: '16px' }}>
                      <path d="M12 20.5s-7.5-4.6-9.8-9.2C.6 7.7 2.3 4 6 4c2.1 0 3.6 1.2 6 3.6C14.4 5.2 15.9 4 18 4c3.7 0 5.4 3.7 3.8 7.3-2.3 4.6-9.8 9.2-9.8 9.2z" fill="var(--coral)" stroke="var(--coral)" strokeWidth="1.8" strokeLinejoin="round" />
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
        )}

        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 700, color: 'var(--yellow)', background: 'var(--yellow-dim)', border: '1px solid ' + 'rgba(255,209,102,.35)', padding: '6px 14px', borderRadius: '999px', marginBottom: '16px' }}>
            <span>🛍️</span>
            <span>Component Reference</span>
            <span style={{ opacity: 0.5 }}>|</span>
            <span style={{ fontSize: '0.9em', color: 'var(--muted)', direction: 'rtl' }}>مرجع مكوّن</span>
          </div>
          <h1 style={{ fontSize: '48px', fontWeight: 800, margin: '0 0 12px', background: 'linear-gradient(135deg, var(--text) 0%, var(--yellow) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Product Card
          </h1>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'monospace', fontSize: '12px', padding: '6px 12px', borderRadius: '8px', border: '1px solid var(--border)', color: 'var(--yellow)', borderColor: 'rgba(255,209,102,.35)', background: 'var(--yellow-dim)', fontWeight: 600 }}>3 Flex Containers + overlay</span>
            <span style={{ fontFamily: 'monospace', fontSize: '12px', padding: '6px 12px', borderRadius: '8px', border: '1px solid var(--border)', color: 'var(--muted)', fontWeight: 600 }}>~25 min · ~٢٥ دقيقة</span>
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
            <div style={{ direction: 'ltr', textAlign: 'left', fontSize: '15px', lineHeight: 1.8, color: '#dfe2f2' }}>Build a shop product card: a square product image with a sale badge and a wishlist heart floating on top, then category, title, rating, price (with a crossed-out original price), and an "Add to cart" button. This is the anchor component of the whole track — it repeats in grids on the Home, Shop, Category, and Search pages.</div>
            <div style={{ direction: 'rtl', textAlign: 'right', unicodeBidi: 'isolate', fontSize: '15px', lineHeight: 1.8, color: '#dfe2f2' }}>ابنِ كارت منتج للمتجر: صورة منتج مربعة فيها بادچ خصم وقلب مفضلة عايم فوقها، وبعدين تصنيف وعنوان وتقييم وسعر (مع سعر أصلي مشطوب)، وزرار "أضف للسلة". ده المكوّن المحوري للتراك كله — بيتكرر في شبكات في صفحات الرئيسية والمتجر والتصنيف والبحث.</div>
          </div>
          <h2 style={{ fontSize: '18px', fontWeight: 700, margin: '24px 0 16px', color: 'var(--yellow)' }}>Requirements · المتطلبات</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              { en: 'Badge and wishlist button float over the image without disturbing the card\'s flex layout', ar: 'البادچ وزرار المفضلة عايمين فوق الصورة من غير ما يأثروا على ترتيب flex بتاع الكارت' },
              { en: 'Current price and the crossed-out original price sit on the same text baseline', ar: 'السعر الحالي والسعر الأصلي المشطوب على نفس خط الأساس النصي' },
              { en: '"Add to cart" always sits at the card\'s bottom, regardless of title length', ar: '"أضف للسلة" دايمًا في قاع الكارت، مهما كان طول العنوان' },
              { en: 'Clicking the heart actually toggles a filled/outline wishlist state', ar: 'الدوس على القلب فعلًا بيبدّل بين حالة مفضلة ممتلئة وفارغة' },
              { en: 'Works at desktop, tablet, mobile; supports LTR and RTL', ar: 'شغالة في ديسكتوب وتابلت وموبايل؛ بتدعم LTR وRTL' },
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
            height="800px"
            initialHtml={`<div class="product-card">
  <div class="image-wrapper">
    <div class="product-image"></div>
    <span class="badge">-20%</span>
    <button class="wishlist-btn">♥</button>
  </div>
  <div class="content">
    <span class="category">Footwear</span>
    <h3 class="title">Cloud Runner Sneaker</h3>
    <div class="rating">
      <span>⭐</span>
      <span>⭐</span>
      <span>⭐</span>
      <span>⭐</span>
      <span>⭐</span>
      <span class="count">(128)</span>
    </div>
    <div class="price-row">
      <span class="current-price">$63.99</span>
      <span class="original-price">$79.99</span>
    </div>
    <button class="add-to-cart">🛒 Add to cart</button>
  </div>
</div>`}
            initialCss={`/* Add your CSS here */`}
            initialJs={`// Add interactivity here
const wishlistBtn = document.querySelector('.wishlist-btn');
wishlistBtn.addEventListener('click', () => {
  wishlistBtn.classList.toggle('active');
});`}
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
              height="800px"
              initialHtml={`<div class="product-card">
  <div class="image-wrapper">
    <div class="product-image"></div>
    <span class="badge">-20%</span>
    <button class="wishlist-btn">♥</button>
  </div>
  <div class="content">
    <span class="category">Footwear</span>
    <h3 class="title">Cloud Runner Sneaker</h3>
    <div class="rating">
      <span>⭐</span>
      <span>⭐</span>
      <span>⭐</span>
      <span>⭐</span>
      <span>⭐</span>
      <span class="count">(128)</span>
    </div>
    <div class="price-row">
      <span class="current-price">$63.99</span>
      <span class="original-price">$79.99</span>
    </div>
    <button class="add-to-cart">🛒 Add to cart</button>
  </div>
</div>`}
              initialCss={`.product-card {
  display: flex;
  flex-direction: column;
  width: 230px;
  background: #212844;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px -20px rgba(0,0,0,0.6);
}

.image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
  background: linear-gradient(135deg, #ff6b4a, #5eead4);
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background: #ff6b4a;
  color: #3a1607;
  font-family: monospace;
  font-size: 10.5px;
  font-weight: 800;
  padding: 3px 8px;
  border-radius: 6px;
}

.wishlist-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(18,21,31,0.65);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  color: #eef0f8;
  transition: all 0.2s ease;
}

.wishlist-btn.active {
  color: #ff6b4a;
}

.content {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.category {
  font-size: 11px;
  color: #8d93ac;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.title {
  font-size: 14px;
  font-weight: 700;
  margin: 0;
  color: #eef0f8;
}

.rating {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
}

.count {
  color: #8d93ac;
  font-size: 11.5px;
}

.price-row {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.current-price {
  font-size: 17px;
  font-weight: 800;
  color: #eef0f8;
}

.original-price {
  font-size: 12.5px;
  color: #8d93ac;
  text-decoration: line-through;
}

.add-to-cart {
  margin-top: auto;
  padding-top: 4px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #5eead4;
  color: #0b1f1b;
  font-weight: 800;
  font-size: 13px;
  padding: 11px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.add-to-cart:hover {
  background: #4fd1c5;
}`}
              initialJs={`// Wishlist toggle
const wishlistBtn = document.querySelector('.wishlist-btn');
wishlistBtn.addEventListener('click', () => {
  wishlistBtn.classList.toggle('active');
});

// Add to cart animation
const addToCartBtn = document.querySelector('.add-to-cart');
addToCartBtn.addEventListener('click', () => {
  addToCartBtn.textContent = '✓ Added!';
  addToCartBtn.style.background = '#059669';
  setTimeout(() => {
    addToCartBtn.textContent = '🛒 Add to cart';
    addToCartBtn.style.background = '#5eead4';
  }, 1500);
});`}
            />
          )}
        </section>

        {/* Section 4: Assets */}
        <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '40px', marginTop: '32px', boxShadow: '0 4px 20px -8px rgba(0,0,0,0.3)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--yellow) 0%, var(--coral) 100%)', color: '#3a3018', fontFamily: 'monospace', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(255,209,102,0.3)' }}>4</span>
            <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--yellow)', letterSpacing: '0.5px' }}>ASSETS · الأصول</span>
          </div>
          <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 16px', background: 'linear-gradient(135deg, var(--text) 0%, var(--yellow) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Real files, included</h2>
          <p style={{ color: 'var(--muted)', fontSize: '15px', margin: '0 0 24px', lineHeight: 1.6 }}>
            These ship in the /assets folder next to this page — the same files rendered in every preview above, so what you see is exactly what you get.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginTop: '6px' }}>
            {[
              { name: 'Product Image', ar: 'صورة المنتج', file: 'assets/product-image.svg', icon: '🛍️' },
              { name: 'Star (×5)', ar: 'النجمة (×٥)', file: 'assets/star.svg', icon: '⭐⭐⭐⭐⭐' },
              { name: 'Cart Icon', ar: 'أيقونة السلة', file: 'assets/cart-icon.svg', icon: '🛒' },
            ].map((asset) => (
              <div key={asset.name} style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '16px', padding: '20px' }}>
                <div style={{ background: 'var(--bg)', borderRadius: '12px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', fontSize: '36px' }}>
                  {asset.icon}
                </div>
                <h4 style={{ margin: '0 0 6px', fontSize: '15px', fontWeight: 600 }}>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', lineHeight: 1.3 }}>
                    <span>{asset.name}</span>
                    <span style={{ fontSize: '0.85em', color: 'var(--muted)', direction: 'rtl', textAlign: 'right' }}>{asset.ar}</span>
                  </span>
                </h4>
                <span style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--yellow)', direction: 'ltr', display: 'inline-block', marginTop: '8px', padding: '4px 8px', background: 'var(--bg)', borderRadius: '6px' }}>{asset.file}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Guides */}
        <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '40px', marginTop: '32px', boxShadow: '0 4px 20px -8px rgba(0,0,0,0.3)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--yellow) 0%, var(--coral) 100%)', color: '#3a3018', fontFamily: 'monospace', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(255,209,102,0.3)' }}>5</span>
            <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--yellow)', letterSpacing: '0.5px' }}>GUIDES · الشرح</span>
          </div>

          <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 24px', background: 'linear-gradient(135deg, var(--text) 0%, var(--yellow) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Anatomy</h2>
          <div style={{ display: 'flex', gap: '26px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
            <div style={{ background: 'var(--bg)', borderRadius: '16px', padding: '44px 30px', flex: '1 1 340px', display: 'flex', justifyContent: 'center', position: 'relative' }}>
              <div style={{ width: '230px', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', background: 'linear-gradient(135deg, var(--coral), var(--teal))' }}>
                  <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--yellow)', color: 'var(--yellow)', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap', top: '10px', left: '10px' }}>1 · badge</div>
                  <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--yellow)', color: 'var(--yellow)', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap', top: '10px', right: '10px' }}>2 · wishlist</div>
                </div>
                <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--yellow)', color: 'var(--yellow)', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap', top: '126px', right: '-10px' }}>3 · category</div>
                  <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--yellow)', color: 'var(--yellow)', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap', top: '154px', right: '-10px' }}>4 · title</div>
                  <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--yellow)', color: 'var(--yellow)', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap', top: '182px', right: '-10px' }}>5 · rating</div>
                  <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--yellow)', color: 'var(--yellow)', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap', top: '210px', right: '-10px' }}>6 · price</div>
                  <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--yellow)', color: 'var(--yellow)', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap', top: '238px', right: '-10px' }}>7 · button</div>
                  <span style={{ fontSize: '11px', color: 'var(--muted)' }}>Footwear</span>
                  <h3 style={{ fontSize: '14px', fontWeight: 700, margin: 0 }}>Cloud Runner</h3>
                  <div style={{ display: 'flex', gap: '4px', fontSize: '12px' }}>⭐⭐⭐⭐⭐</div>
                  <div style={{ display: 'flex', gap: '8px' }}><span>$63.99</span><span style={{ textDecoration: 'line-through', color: 'var(--muted)' }}>$79.99</span></div>
                  <button style={{ marginTop: 'auto', padding: '8px', background: 'var(--teal)', border: 'none', borderRadius: '8px', fontSize: '12px', fontWeight: 700 }}>🛒 Add</button>
                </div>
              </div>
            </div>
            <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                { en: 'Card — Flex, direction column', ar: 'الكارت — Flex، اتجاهه column' },
                { en: '1. Badge — absolute, top-left', ar: '1. البادچ — absolute، فوق شمال' },
                { en: '2. Wishlist — absolute, top-right', ar: '2. المفضلة — absolute، فوق يمين' },
                { en: '3-7. Content — nested Flex, column', ar: '3-٧. المحتوى — Flex متداخل، column' },
                { en: '7. Button — margin-top: auto', ar: '٧. الزرار — margin-top: auto' },
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
                <th style={{ textAlign: 'left', fontSize: '12px', color: 'var(--muted)', fontWeight: 700, padding: '12px 16px', borderBottom: '1px solid var(--border)' }}>Element / العنصر</th>
                <th style={{ textAlign: 'left', fontSize: '12px', color: 'var(--muted)', fontWeight: 700, padding: '12px 16px', borderBottom: '1px solid var(--border)' }}>Property / الخاصية</th>
                <th style={{ textAlign: 'left', fontSize: '12px', color: 'var(--muted)', fontWeight: 700, padding: '12px 16px', borderBottom: '1px solid var(--border)' }}>Value / القيمة</th>
              </tr>
            </thead>
            <tbody>
              {[
                { element: 'Card / الكارت', property: 'Width / العرض', value: '230px' },
                { element: 'Card / الكارت', property: 'Image aspect ratio / نسبة الصورة', value: '1/1' },
                { element: 'Badge / البادچ', property: 'Position / الموضع', value: 'absolute, top 10px, left 10px' },
                { element: 'Wishlist / المفضلة', property: 'Position / الموضع', value: 'absolute, top 10px, right 10px' },
                { element: 'Content / المحتوى', property: 'Gap / المسافة', value: '7px' },
                { element: 'Button / الزرار', property: 'Push to bottom / دفع للأسفل', value: 'margin-top: auto' },
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '16px', fontSize: '14px', verticalAlign: 'top' }}>{row.element}</td>
                  <td style={{ padding: '16px', fontSize: '14px', verticalAlign: 'top' }}>{row.property}</td>
                  <td style={{ padding: '16px', fontSize: '14px', verticalAlign: 'top' }}><code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '4px 10px', fontSize: '0.88em' }}>{row.value}</code></td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '32px 0 24px', background: 'linear-gradient(135deg, var(--text) 0%, var(--yellow) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Build steps</h2>
          {[
            { title: 'HTML skeleton / هيكل الـHTML', hint: 'Don\'t style yet — let it render in natural block order first.', code: '' },
            { title: 'Card Flex column + gap', hint: 'display:flex; flex-direction:column; gap:7px;', code: 'display:flex; flex-direction:column; gap:7px;' },
            { title: 'Image wrapper with overlay', hint: 'position:relative; aspect-ratio:1/1;', code: 'position:relative; aspect-ratio:1/1;' },
            { title: 'Absolute badge & wishlist', hint: 'position:absolute; top:10px; left/right:10px;', code: 'position:absolute; top:10px; left:10px;' },
            { title: 'Button at bottom', hint: 'margin-top: auto;', code: 'margin-top: auto;' },
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
