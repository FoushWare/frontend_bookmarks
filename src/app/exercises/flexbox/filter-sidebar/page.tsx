'use client';

import { useState } from 'react';
import Link from 'next/link';
import CodeEditor from '@/components/CodeEditor';
import PageLayout from '@/components/PageLayout';
import PageSidebar from '@/components/PageSidebar';
import { getTopicNavigation } from '@/data/navigation';

export default function FilterSidebarExercise() {
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
            <span style={{ fontFamily: 'monospace', fontSize: '12px', padding: '6px 12px', borderRadius: '8px', background: 'var(--yellow-dim)', color: 'var(--yellow)', border: '1px solid rgba(255,209,102,.3)', fontWeight: 600 }}>05 / 08</span>
            <span style={{ fontFamily: 'monospace', fontSize: '12px', padding: '6px 12px', borderRadius: '8px', background: 'rgba(239, 68, 68, 0.1)', color: '#dc2626', border: '1px solid var(--border)', fontWeight: 600 }}>Advanced</span>
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
            Filter Sidebar
          </h1>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'monospace', fontSize: '12px', padding: '6px 12px', borderRadius: '8px', border: '1px solid var(--border)', color: 'var(--yellow)', borderColor: 'rgba(255,209,102,.35)', background: 'var(--yellow-dim)', fontWeight: 600 }}>3 Flex Containers</span>
            <span style={{ fontFamily: 'monospace', fontSize: '12px', padding: '6px 12px', borderRadius: '8px', border: '1px solid var(--border)', color: 'var(--muted)', fontWeight: 600 }}>~30 min · ~٣٠ دقيقة</span>
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
            <div style={{ direction: 'ltr', textAlign: 'left', fontSize: '15px', lineHeight: 1.8, color: '#dfe2f2' }}>Build a filter sidebar with category checkboxes, price range slider, and brand selection. This is a complex layout with nested flexbox structures for organizing multiple filter groups.</div>
            <div style={{ direction: 'rtl', textAlign: 'right', unicodeBidi: 'isolate', fontSize: '15px', lineHeight: 1.8, color: '#dfe2f2' }}>ابنِ شريط فلتر مع صندوقات اختيار التصنيف وشريط نطاق السعر واختيار الماركات. ده تصميم معقد مع هياكل Flexbox متداخلة لتنظيم مجموعات فلتر متعددة.</div>
          </div>
          <h2 style={{ fontSize: '18px', fontWeight: 700, margin: '24px 0 16px', color: 'var(--yellow)' }}>Requirements · المتطلبات</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              { en: 'Each filter group has title and content in column layout', ar: 'كل مجموعة فلتر عندها عنوان ومحتوى في تخطيط عمودي' },
              { en: 'Checkboxes use Flex row with gap for proper spacing', ar: 'صناديق الاختيار بتستخدم Flex row مع gap للمسافة الصح' },
              { en: 'Price range slider takes full width of its container', ar: 'شريط نطاق السعر بياخد العرض بالكامل لحاوته' },
              { en: 'Brand badges wrap to new line when space is limited', ar: 'شارات الماركات بتلف لسطر جديد لما المساحة محدودة' },
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
            initialHtml={`<div class="filter-sidebar">
  <div class="filter-group">
    <h3 class="group-title">Categories</h3>
    <div class="checkbox-group">
      <label><input type="checkbox"> Footwear</label>
      <label><input type="checkbox"> Clothing</label>
      <label><input type="checkbox"> Accessories</label>
    </div>
  </div>
  <div class="filter-group">
    <h3 class="group-title">Price Range</h3>
    <input type="range" class="price-slider" min="0" max="500" value="250">
    <div class="price-labels">
      <span>$0</span>
      <span>$500</span>
    </div>
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
              initialHtml={`<div class="filter-sidebar">
  <div class="filter-group">
    <h3 class="group-title">Categories</h3>
    <div class="checkbox-group">
      <label><input type="checkbox"> Footwear</label>
      <label><input type="checkbox"> Clothing</label>
      <label><input type="checkbox"> Accessories</label>
    </div>
  </div>
  <div class="filter-group">
    <h3 class="group-title">Price Range</h3>
    <input type="range" class="price-slider" min="0" max="500" value="250">
    <div class="price-labels">
      <span>$0</span>
      <span>$500</span>
    </div>
  </div>
</div>`}
              initialCss={`.filter-sidebar {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  background: #212844;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  width: 280px;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.group-title {
  font-size: 16px;
  font-weight: 700;
  color: #eef0f8;
  margin: 0;
}

.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.checkbox-group label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #dfe2f2;
  cursor: pointer;
}

.price-slider {
  width: 100%;
  cursor: pointer;
}

.price-labels {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #8d93ac;
}`}
              initialJs={`// Filter interactions
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(cb => {
  cb.addEventListener('change', () => {
    console.log('Filter changed');
  });
});

const slider = document.querySelector('.price-slider');
slider.addEventListener('input', (e) => {
  console.log('Price range:', e.target.value);
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
            { title: 'HTML skeleton / هيكل الـHTML', hint: 'Filter groups with title and content.', code: '' },
            { title: 'Sidebar Flex column', hint: 'display:flex; flex-direction:column; gap:24px;', code: 'display:flex; flex-direction:column; gap:24px;' },
            { title: 'Group Flex column', hint: 'display:flex; flex-direction:column; gap:12px;', code: 'display:flex; flex-direction:column; gap:12px;' },
            { title: 'Checkbox Flex row', hint: 'display:flex; align-items:center; gap:8px;', code: 'display:flex; align-items:center; gap:8px;' },
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
          <Link href="/exercises/flexbox/price-rating" style={{ padding: '12px 24px', background: 'var(--surface-2)', color: 'var(--text)', textDecoration: 'none', borderRadius: '8px', fontWeight: 700, fontSize: '14px', border: '1px solid var(--border)' }}>← Previous: Price / Rating</Link>
          <Link href="/exercises/flexbox/order-summary" style={{ padding: '12px 24px', background: 'var(--yellow)', color: '#3a3018', textDecoration: 'none', borderRadius: '8px', fontWeight: 700, fontSize: '14px' }}>Next: Order Summary →</Link>
        </div>

        <footer style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '13px', marginTop: '60px', padding: '24px', borderTop: '1px solid var(--border)' }}>
          🛒 E-commerce Track · Filter Sidebar · Flexbox Exercise #5
        </footer>
      </div>
    </PageLayout>
  );
}
