'use client';

import { useState } from 'react';
import CodeEditor from '@/components/CodeEditor';
import PageLayout from '@/components/PageLayout';
import PageSidebar from '@/components/PageSidebar';
import { getTopicNavigation } from '@/data/navigation';

export default function TestimonialCardExercise() {
  const [showHints, setShowHints] = useState<Record<string, boolean>>({});
  const [openAccordions, setOpenAccordions] = useState<Record<number, boolean>>({});
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
  const [completed, setCompleted] = useState(false);
  const [showCompleteResult, setShowCompleteResult] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  const toggleHint = (hintId: string) => {
    setShowHints(prev => ({ ...prev, [hintId]: !prev[hintId] }));
  };

  const toggleAccordion = (index: number) => {
    setOpenAccordions(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleCheck = (index: number) => {
    setCheckedItems(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const handleComplete = () => {
    setCheckedItems({ 0: true, 1: true, 2: true, 3: true, 4: true, 5: true });
    setCompleted(true);
  };

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const progress = (checkedCount / 6) * 100;

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
        {/* Exercise Info */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '16px' }}>
            <span style={{ 
              fontFamily: 'monospace', 
              fontSize: '12px', 
              padding: '6px 12px', 
              borderRadius: '8px', 
              background: 'var(--coral-dim)', 
              color: 'var(--coral)', 
              border: '1px solid rgba(255,107,74,.3)', 
              fontWeight: 600 
            }}>
              01 / 08
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
          <button
            onClick={() => setShowCompleteResult(!showCompleteResult)}
            style={{
              padding: '12px 24px',
              background: showCompleteResult ? 'var(--surface-2)' : 'var(--teal)',
              color: showCompleteResult ? 'var(--teal)' : '#0b1f1b',
              border: showCompleteResult ? '1px solid var(--teal)' : 'none',
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
            border: '2px solid var(--teal)', 
            borderRadius: '16px', 
            padding: '32px', 
            marginBottom: '32px',
            boxShadow: '0 8px 24px rgba(94, 234, 212, 0.2)'
          }}>
            <div style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: 'var(--teal)' }}>
                Complete Testimonial Card Design
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--muted)', margin: 0 }}>
                This is the final result you'll achieve by completing this exercise.
              </p>
            </div>
            
            <div style={{ 
              background: 'var(--surface-2)', 
              border: '1px solid var(--border)', 
              borderRadius: '16px', 
              padding: '32px',
              maxWidth: '400px',
              margin: '0 auto'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '16px' }}>
                <span style={{ fontSize: '0.85em', color: 'var(--muted)', direction: 'rtl', textAlign: 'right' }}>شهادة العملاء</span>
                <span style={{ fontSize: '1em', direction: 'ltr', textAlign: 'left' }}>Customer Testimonials</span>
              </div>
              
              <div style={{ display: 'flex', gap: '2px', marginBottom: '16px' }}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} style={{ fontSize: '18px' }}>⭐</span>
                ))}
              </div>
              
              <p style={{ fontSize: '16px', color: 'var(--text)', marginBottom: '20px', lineHeight: 1.6, fontStyle: 'italic' }}>
                "This platform transformed our development workflow. We ship 3x faster now and our team productivity has increased dramatically."
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: '50%', 
                  background: 'linear-gradient(135deg, var(--coral), var(--pink))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#fff',
                }}>
                  SC
                </div>
                <div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text)' }}>Sarah Chen</div>
                  <div style={{ fontSize: '14px', color: 'var(--muted)' }}>CTO at TechCorp</div>
                </div>
              </div>
            </div>
          </div>
        )}

      {/* Header */}
      <div style={{ marginBottom: '40px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 700, color: 'var(--coral)', background: 'var(--coral-dim)', border: '1px solid ' + 'rgba(255,107,74,.35)', padding: '6px 14px', borderRadius: '999px', marginBottom: '16px' }}>
          <span>🎴</span>
          <span>Component Reference</span>
          <span style={{ opacity: 0.5 }}>|</span>
          <span style={{ fontSize: '0.9em', color: 'var(--muted)', direction: 'rtl' }}>مرجع مكوّن</span>
        </div>
        <h1 style={{ fontSize: '48px', fontWeight: 800, margin: '0 0 12px', background: 'linear-gradient(135deg, var(--text) 0%, var(--teal) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          Testimonial Card
        </h1>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '12px', padding: '6px 12px', borderRadius: '8px', border: '1px solid var(--border)', color: 'var(--teal)', borderColor: 'rgba(94,234,212,.35)', background: 'var(--teal-dim)', fontWeight: 600 }}>1 Flex Container</span>
          <span style={{ fontFamily: 'monospace', fontSize: '12px', padding: '6px 12px', borderRadius: '8px', border: '1px solid var(--border)', color: 'var(--muted)', fontWeight: 600 }}>~15 min · ~١٥ دقيقة</span>
        </div>
      </div>

      {/* Section 1: Project Brief */}
      <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '40px', marginTop: '0', boxShadow: '0 4px 20px -8px rgba(0,0,0,0.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--teal) 0%, var(--blue) 100%)', color: '#0e2440', fontFamily: 'monospace', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(94,234,212,0.3)' }}>1</span>
          <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--teal)', letterSpacing: '0.5px' }}>PROJECT BRIEF · بريف المشروع</span>
        </div>
        <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 16px', background: 'linear-gradient(135deg, var(--text) 0%, var(--teal) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '8px', background: 'var(--blue)', color: '#0e2440', marginRight: '12px' }}>EN</span>
          What you're building
          <span style={{ fontFamily: 'monospace', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '8px', background: 'var(--purple)', color: '#1c1533', marginRight: '12px' }}>AR</span>
          <span style={{ direction: 'rtl', unicodeBidi: 'isolate' }}>اللي هتبنيه</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '24px' }}>
          <div style={{ direction: 'ltr', textAlign: 'left', fontSize: '15px', lineHeight: 1.8, color: '#dfe2f2' }}>Build a single testimonial card: a quote from a customer, their name, role, and an avatar — all inside one self-contained flex container. This is the foundation component; three more projects later in the track (Testimonials Section, Marketing Landing Page, About Us Page) reuse this exact card.</div>
          <div style={{ direction: 'rtl', textAlign: 'right', unicodeBidi: 'isolate', fontSize: '15px', lineHeight: 1.8, color: '#dfe2f2' }}>ابنِ كارت شهادة عميل واحد: اقتباس من عميل، اسمه، وظيفته، وصورته — كل ده جوه Flex Container واحد قائم بذاته. ده مكوّن أساسي؛ ٣ مشاريع تانية في التراك (Testimonials Section، Marketing Landing Page، About Us Page) بيعيدوا استخدام الكارت ده بالظبط.</div>
        </div>
        <h2 style={{ fontSize: '18px', fontWeight: 700, margin: '24px 0 16px', color: 'var(--teal)' }}>Requirements · المتطلبات</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {[
            { en: 'Card must be built with Flexbox only — no CSS Grid, no floats', ar: 'الكارت لازم يتبني بـ Flexbox بس — من غير CSS Grid ولا floats' },
            { en: 'Avatar, name, and role must be aligned in one row, vertically centered', ar: 'الصورة والاسم والوظيفة لازم يبقوا في صف واحد، متحاذيين عموديًا' },
            { en: 'Card must work at desktop, tablet, and mobile widths (see Preview tab)', ar: 'الكارت لازم يشتغل في عرض الديسكتوب والتابلت والموبايل (شوف تاب المعاينة)' },
            { en: 'Must support both LTR (English) and RTL (Arabic) content without layout breaking', ar: 'لازم يدعم محتوى LTR (إنجليزي) و RTL (عربي) من غير ما التصميم يتكسر' },
          ].map((req, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', padding: '16px 0', borderBottom: '1px solid var(--border)', alignItems: 'start' }}>
              <div style={{ direction: 'ltr', textAlign: 'left', fontSize: '14px', lineHeight: 1.6 }}>{req.en}</div>
              <div style={{ direction: 'rtl', textAlign: 'right', unicodeBidi: 'isolate', fontSize: '14px', lineHeight: 1.6 }}>{req.ar}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Split View - Code Editor & Live Preview */}
      <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '40px', marginTop: '32px', boxShadow: '0 4px 20px -8px rgba(0,0,0,0.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--teal) 0%, var(--blue) 100%)', color: '#0e2440', fontFamily: 'monospace', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(94,234,212,0.3)' }}>2</span>
          <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--teal)', letterSpacing: '0.5px' }}>CODE & PREVIEW · الكود والمعاينة</span>
        </div>
        <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 16px', background: 'linear-gradient(135deg, var(--text) 0%, var(--teal) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Build and Preview</h2>
        <p style={{ color: 'var(--muted)', fontSize: '15px', margin: '0 0 24px', lineHeight: 1.6 }}>
          Write HTML, CSS, and JavaScript. The live preview updates automatically below.
        </p>

        {/* Code Editor with Integrated Preview */}
        <CodeEditor
          height="800px"
          initialHtml={`<div class="testimonial-card">
  <div class="avatar-section">
    <div class="avatar">
      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" alt="Sarah" />
    </div>
    <div class="author-info">
      <div class="name">Sarah Johnson</div>
      <div class="role">Product Designer</div>
    </div>
  </div>
  <div class="rating">
    <span>⭐</span>
    <span>⭐</span>
    <span>⭐</span>
    <span>⭐</span>
    <span>⭐</span>
  </div>
  <p class="quote">
    "This platform transformed how our team collaborates. The interface is intuitive and the features are exactly what we needed."
  </p>
</div>`}
          initialCss={``}
          initialJs={`// Add interactivity here
const card = document.querySelector('.testimonial-card');
card.addEventListener('click', () => {
  card.style.transform = 'scale(1.02)';
  setTimeout(() => {
    card.style.transform = 'scale(1)';
  }, 200);
});`}
        />
      </section>

      {/* Section 3: Solution */}
      <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '40px', marginTop: '32px', boxShadow: '0 4px 20px -8px rgba(0,0,0,0.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--yellow) 0%, var(--coral) 100%)', color: '#3a3018', fontFamily: 'monospace', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(255,209,102,0.3)' }}>3</span>
            <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--yellow)', letterSpacing: '0.5px' }}>SOLUTION</span>
          </div>
          <button
            onClick={() => setShowSolution(!showSolution)}
            style={{
              padding: '8px 16px',
              background: showSolution ? 'var(--surface-2)' : 'var(--yellow)',
              color: showSolution ? 'var(--yellow)' : '#3a3018',
              border: showSolution ? '1px solid var(--yellow)' : 'none',
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
            initialHtml={`<div class="testimonial-card">
  <div class="avatar-section">
    <div class="avatar">
      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" alt="Sarah" />
    </div>
    <div class="author-info">
      <div class="name">Sarah Johnson</div>
      <div class="role">Product Designer</div>
    </div>
  </div>
  <div class="rating">
    <span>⭐</span>
    <span>⭐</span>
    <span>⭐</span>
    <span>⭐</span>
    <span>⭐</span>
  </div>
  <p class="quote">
    "This platform transformed how our team collaborates. The interface is intuitive and the features are exactly what we needed."
  </p>
</div>`}
            initialCss={`.testimonial-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background: #1a2030;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  max-width: 320px;
}

.avatar-section {
  display: flex;
  align-items: center;
  gap: 12px;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.name {
  font-size: 15px;
  font-weight: 700;
  color: #eef0f8;
}

.role {
  font-size: 12px;
  color: #8d93ac;
}

.rating {
  display: flex;
  gap: 4px;
  font-size: 16px;
}

.quote {
  font-size: 14px;
  line-height: 1.6;
  color: #dfe2f2;
  font-style: italic;
}`}
            initialJs={`// Optional: Add hover animation
const card = document.querySelector('.testimonial-card');
card.style.transform = 'scale(0.95)';
card.style.transition = 'transform 0.2s ease';

card.addEventListener('mouseenter', () => {
  card.style.transform = 'scale(1.02)';
});

card.addEventListener('mouseleave', () => {
  card.style.transform = 'scale(1)';
});

setTimeout(() => {
  card.style.transform = 'scale(1)';
}, 200);`}
          />
        )}
      </section>

      {/* Section 4: Assets */}
      <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '40px', marginTop: '32px', boxShadow: '0 4px 20px -8px rgba(0,0,0,0.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--teal) 0%, var(--blue) 100%)', color: '#0e2440', fontFamily: 'monospace', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(94,234,212,0.3)' }}>4</span>
          <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--teal)', letterSpacing: '0.5px' }}>ASSETS · الأصول</span>
        </div>
        <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 16px', background: 'linear-gradient(135deg, var(--text) 0%, var(--teal) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Real files, included</h2>
        <p style={{ color: 'var(--muted)', fontSize: '15px', margin: '0 0 24px', lineHeight: 1.6 }}>
          These ship in the /assets folder next to this page — the same files rendered in every preview above, so what you see is exactly what you get.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginTop: '6px' }}>
          {[
            { name: 'Avatar', ar: 'الصورة الرمزية', file: 'assets/avatar.svg', icon: '👤' },
            { name: 'Quote icon', ar: 'أيقونة الاقتباس', file: 'assets/quote-icon.svg', icon: '💬' },
            { name: 'Star (×5)', ar: 'النجمة (×٥)', file: 'assets/star.svg', icon: '⭐⭐⭐⭐⭐' },
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
              <span style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--teal)', direction: 'ltr', display: 'inline-block', marginTop: '8px', padding: '4px 8px', background: 'var(--bg)', borderRadius: '6px' }}>{asset.file}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Guides */}
      <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '40px', marginTop: '32px', boxShadow: '0 4px 20px -8px rgba(0,0,0,0.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--teal) 0%, var(--blue) 100%)', color: '#0e2440', fontFamily: 'monospace', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(94,234,212,0.3)' }}>5</span>
          <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--teal)', letterSpacing: '0.5px' }}>GUIDES · الشرح</span>
        </div>

        <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 24px', background: 'linear-gradient(135deg, var(--text) 0%, var(--teal) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Anatomy</h2>
        <div style={{ display: 'flex', gap: '26px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <div style={{ background: 'var(--bg)', borderRadius: '16px', padding: '44px 30px', flex: '1 1 340px', display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{ width: '280px', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '16px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative' }}>
              <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--teal)', color: 'var(--teal)', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap', top: '44px', right: '-6px' }}>1 · quote icon</div>
              <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--teal)', color: 'var(--teal)', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap', top: '126px', right: '-26px' }}>2 · body text</div>
              <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--teal)', color: 'var(--teal)', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap', top: '224px', right: '-10px' }}>3 · person row</div>
              <div style={{ fontSize: '24px' }}>💬</div>
              <div style={{ fontSize: '14px', color: '#dfe2f2', lineHeight: 1.7 }}>Their team helped us launch in half the expected time.</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '46px', height: '46px', borderRadius: '50%', background: 'var(--coral)' }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '14px' }}>Sara Ahmed</div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)' }}>Product Manager</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              { en: 'Container — Flex, direction column', ar: 'الحاوية — Flex، اتجاهها column' },
              { en: '1. Quote icon — fixed size', ar: '1. أيقونة الاقتباس — حجم ثابت' },
              { en: '2. Body text — takes needed space only', ar: '2. النص — ياخد المساحة اللي محتاجها بس' },
              { en: '3. Person row — nested Flex, row direction', ar: '3. صف الشخص — Flex متداخل، اتجاهه row' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', padding: '12px 0', borderBottom: '1px solid var(--border)', alignItems: 'start' }}>
                <div style={{ direction: 'ltr', textAlign: 'left' }}>{item.en}</div>
                <div style={{ direction: 'rtl', textAlign: 'right', unicodeBidi: 'isolate' }}>{item.ar}</div>
              </div>
            ))}
          </div>
        </div>

        <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '32px 0 24px', background: 'linear-gradient(135deg, var(--text) 0%, var(--teal) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Spec</h2>
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
              { element: 'Card / الكارت', property: 'Max width / عرض أقصى', value: '280px' },
              { element: 'Card / الكارت', property: 'Padding / الحشو', value: '28px (20px mobile)' },
              { element: 'Card / الكارت', property: 'Radius / الاستدارة', value: '16px' },
              { element: 'Card / الكارت', property: 'Gap / المسافة', value: '16px' },
              { element: 'Card / الكارت', property: 'Background / الخلفية', value: '#212844' },
              { element: 'Avatar / الصورة', property: 'Size / الحجم', value: '46×46px, round' },
              { element: 'Person row / صف الشخص', property: 'Gap / المسافة', value: '12px' },
            ].map((row, i) => (
              <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '16px', fontSize: '14px', verticalAlign: 'top' }}>{row.element}</td>
                <td style={{ padding: '16px', fontSize: '14px', verticalAlign: 'top' }}>{row.property}</td>
                <td style={{ padding: '16px', fontSize: '14px', verticalAlign: 'top' }}><code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '4px 10px', fontSize: '0.88em' }}>{row.value}</code></td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '32px 0 24px', background: 'linear-gradient(135deg, var(--text) 0%, var(--teal) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Build steps</h2>
        {[
          { title: 'HTML skeleton / هيكل الـHTML', hint: 'Don\'t style yet — let it render in natural block order first.', code: '' },
          { title: 'Flex column + gap', hint: 'display:flex; flex-direction:column; gap:16px;', code: 'display:flex; flex-direction:column; gap:16px;' },
          { title: 'Person row (nested flex)', hint: 'display:flex; align-items:center; gap:12px;', code: 'display:flex; align-items:center; gap:12px;' },
          { title: 'Round avatar, no shrink', hint: 'border-radius:50%; flex-shrink:0;', code: 'border-radius:50%; flex-shrink:0;' },
        ].map((step, i) => (
          <div key={i} style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '16px', padding: '24px', marginBottom: '16px', transition: 'all 0.2s ease' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
              <span style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--coral) 0%, var(--yellow) 100%)', color: '#3a1a0e', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto', fontSize: '16px', boxShadow: '0 2px 8px rgba(255,107,74,0.3)' }}>{i + 1}</span>
              <span style={{ fontWeight: 700, fontSize: '16px', color: 'var(--text)' }}>{step.title}</span>
            </div>
            <p style={{ fontSize: '15px', marginBottom: '12px', lineHeight: 1.6, color: '#dfe2f2' }}>{step.hint}</p>
            {step.code && (
              <button
                onClick={() => toggleHint(`step${i}`)}
                style={{ fontFamily: 'monospace', background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--yellow)', borderRadius: '10px', padding: '8px 16px', fontSize: '13px', cursor: 'pointer', marginTop: '8px', fontWeight: 600, transition: 'all 0.2s ease' }}
              >
                💡 hint / تلميح
              </button>
            )}
            {showHints[`step${i}`] && (
              <div style={{ marginTop: '12px', background: 'var(--bg)', border: '1px dashed ' + 'rgba(255,209,102,.4)', borderRadius: '12px', padding: '16px 18px', fontSize: '14px', color: 'var(--yellow)' }}>
                <code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '8px', padding: '4px 12px', fontSize: '0.9em' }}>{step.code}</code>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Section 6: Discussion */}
      <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '40px', marginTop: '32px', boxShadow: '0 4px 20px -8px rgba(0,0,0,0.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--teal) 0%, var(--blue) 100%)', color: '#0e2440', fontFamily: 'monospace', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(94,234,212,0.3)' }}>6</span>
          <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--teal)', letterSpacing: '0.5px' }}>DISCUSSION · نقاش وأسئلة</span>
        </div>
        <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 24px', background: 'linear-gradient(135deg, var(--text) 0%, var(--teal) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Common questions</h2>
        {[
          { 
            q: { en: 'Why does my avatar image show up huge before I style it?', ar: 'ليه صورة الـ avatar بتطلع ضخمة قبل ما أنسّقها؟' },
            a: { en: 'An SVG or image with no explicit width/height renders at its own default size (often huge). Always set width/height in CSS on .t-avatar — never rely on the file\'s intrinsic size.', ar: 'أي صورة أو SVG من غير width/height صريح بتطلع بحجمها الافتراضي (غالبًا كبير). حط دايمًا width/height في CSS على .t-avatar — متعتمدش على حجم الملف الأصلي.' }
          },
          { 
            q: { en: 'Do I need separate CSS for the Arabic (RTL) version?', ar: 'محتاج CSS منفصل للنسخة العربية (RTL)؟' },
            a: { en: 'No — Flexbox properties like gap, align-items, and flex-direction:column work identically in both directions. Only add dir="rtl" to the Arabic card; the flex layout adapts on its own.', ar: 'لأ — خصائص زي gap وalign-items وflex-direction:column بتشتغل نفس الشغل في الاتجاهين. بس حط dir="rtl" على الكارت العربي؛ الـ flex layout بيتأقلم لوحده.' }
          },
          { 
            q: { en: 'What if the testimonial text is very long?', ar: 'لو نص الشهادة طويل جدًا؟' },
            a: { en: 'The card grows taller (no fixed height was set), which is the correct behavior — don\'t force a fixed height or you\'ll clip real content.', ar: 'الكارت بيطول (مفيش height ثابت اتحط)، وده السلوك الصح — متحطش height ثابت وإلا هتقص محتوى حقيقي.' }
          },
        ].map((item, i) => (
          <div key={i} style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '14px', marginBottom: '10px', overflow: 'hidden' }}>
            <div
              onClick={() => toggleAccordion(i)}
              style={{ padding: '16px 18px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '14px' }}
            >
              <span style={{ display: 'flex', flexDirection: 'column', gap: '1px', lineHeight: 1.3 }}>
                <span>{item.q.en}</span>
                <span style={{ fontSize: '0.9em', color: 'var(--muted)', direction: 'rtl', textAlign: 'right' }}>{item.q.ar}</span>
              </span>
              <span style={{ fontFamily: 'monospace', color: 'var(--coral)', flex: '0 0 auto', fontSize: '18px', transition: '0.2s', transform: openAccordions[i] ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
            </div>
            <div style={{ maxHeight: openAccordions[i] ? '500px' : '0', overflow: 'hidden', transition: '0.25s ease' }}>
              <div style={{ padding: '0 18px 18px', fontSize: '13.5px', color: '#dfe2f2' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div style={{ direction: 'ltr', textAlign: 'left' }}>{item.a.en}</div>
                  <div style={{ direction: 'rtl', textAlign: 'right', unicodeBidi: 'isolate' }}>{item.a.ar}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Section 7: Project Completion */}
      <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '40px', marginTop: '32px', boxShadow: '0 4px 20px -8px rgba(0,0,0,0.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--teal) 0%, var(--blue) 100%)', color: '#0e2440', fontFamily: 'monospace', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(94,234,212,0.3)' }}>7</span>
          <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--teal)', letterSpacing: '0.5px' }}>PROJECT COMPLETION · إنهاء المشروع</span>
        </div>
        <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 24px', background: 'linear-gradient(135deg, var(--text) 0%, var(--teal) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Self-check checklist</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '24px 0' }}>
          {[
            { en: 'Column direction, 3 sections stacked correctly', ar: 'اتجاه عمودي، الأقسام التلاتة مرتبة صح' },
            { en: 'Spacing uses gap, not margin', ar: 'المسافات بـ gap مش margin' },
            { en: 'Avatar + name row vertically centered', ar: 'صف الصورة والاسم متحاذي عموديًا' },
            { en: 'Avatar round, fixed size, doesn\'t shrink', ar: 'الصورة دائرية، حجم ثابت، مش بتتقلص' },
            { en: 'Works at desktop, tablet, and mobile widths', ar: 'شغالة في عرض ديسكتوب وتابلت وموبايل' },
            { en: 'Arabic (RTL) version renders correctly too', ar: 'النسخة العربية (RTL) شكلها صح كمان' },
          ].map((item, i) => (
            <label
              key={i}
              onClick={() => toggleCheck(i)}
              style={{ display: 'grid', gridTemplateColumns: 'auto 1fr 1fr', gap: '16px', alignItems: 'start', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '16px', padding: '16px 20px', fontSize: '14px', cursor: 'pointer', textDecoration: checkedItems[i] ? 'line-through' : 'none', opacity: checkedItems[i] ? 0.5 : 1, transition: 'all 0.2s ease' }}
            >
              <input type="checkbox" checked={checkedItems[i] || false} onChange={() => {}} style={{ marginTop: '4px', accentColor: 'var(--teal)', width: '18px', height: '18px' }} />
              <span style={{ direction: 'ltr', textAlign: 'left', lineHeight: 1.6 }}>{item.en}</span>
              <span style={{ direction: 'rtl', textAlign: 'right', unicodeBidi: 'isolate', lineHeight: 1.6 }}>{item.ar}</span>
            </label>
          ))}
        </div>
        <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '20px', padding: '28px', boxShadow: '0 4px 16px rgba(0,0,0,0.2)' }}>
          <div style={{ fontFamily: 'monospace', fontSize: '13px', color: 'var(--muted)', display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontWeight: 600 }}>
            <span>Progress / التقدّم</span>
            <span style={{ color: 'var(--teal)', fontWeight: 700 }}>{checkedCount} / 6</span>
          </div>
          <div style={{ height: '12px', background: 'var(--bg)', borderRadius: '999px', overflow: 'hidden', marginBottom: '20px' }}>
            <div style={{ height: '100%', background: 'linear-gradient(90deg, var(--coral) 0%, var(--teal) 100%)', width: `${progress}%`, borderRadius: '999px', transition: 'all 0.4s ease', boxShadow: '0 0 20px rgba(94,234,212,0.4)' }} />
          </div>
          <button
            onClick={handleComplete}
            disabled={completed}
            style={{ marginTop: '0', width: '100%', padding: '16px', borderRadius: '14px', border: completed ? '1px solid var(--teal)' : 'none', background: completed ? 'var(--surface-2)' : 'linear-gradient(135deg, var(--teal) 0%, var(--blue) 100%)', color: completed ? 'var(--teal)' : '#0e2440', fontWeight: 800, fontSize: '16px', cursor: completed ? 'default' : 'pointer', transition: 'all 0.2s ease', boxShadow: completed ? 'none' : '0 4px 16px rgba(94,234,212,0.4)' }}
          >
            {completed ? '✔️ Completed / اتعمل' : '✅ Mark as complete / علّمها كمكتملة'}
          </button>
          {completed && (
            <div style={{ display: 'block', marginTop: '20px', background: 'var(--teal-dim)', border: '1px solid ' + 'rgba(94,234,212,.4)', color: 'var(--teal)', padding: '18px 20px', borderRadius: '14px', textAlign: 'center', fontWeight: 700, fontSize: '15px', boxShadow: '0 4px 16px rgba(94,234,212,0.2)' }}>
              🎉 Nice work — on to component 02: Blog Card / شغل تمام — يلا مكوّن ٢: Blog Card
            </div>
          )}
        </div>
      </section>

      <footer style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '13px', marginTop: '60px', padding: '24px', borderTop: '1px solid var(--border)' }}>
        🎴 Component Library · Marketing Track · Sample 1 of 18
      </footer>
      </div>
    </PageLayout>
  );
}
