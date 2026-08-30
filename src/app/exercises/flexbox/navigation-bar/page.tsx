'use client';

import { useState } from 'react';
import CodeEditor from '@/components/CodeEditor';
import PageLayout from '@/components/PageLayout';
import PageSidebar from '@/components/PageSidebar';
import { getTopicNavigation } from '@/data/navigation';

export default function NavigationBarExercise() {
  const [activeFrame, setActiveFrame] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [showHints, setShowHints] = useState<Record<string, boolean>>({});
  const [openAccordions, setOpenAccordions] = useState<Record<number, boolean>>({});
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
  const [completed, setCompleted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    setCheckedItems({ 0: true, 1: true, 2: true, 3: true });
    setCompleted(true);
  };

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const progress = (checkedCount / 4) * 100;

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
            <span style={{ fontFamily: 'monospace', fontSize: '12px', padding: '6px 12px', borderRadius: '8px', background: 'var(--coral-dim)', color: 'var(--coral)', border: '1px solid rgba(255,107,74,.3)', fontWeight: 600 }}>
              06 / 08
            </span>
            <span style={{ fontFamily: 'monospace', fontSize: '12px', padding: '6px 12px', borderRadius: '8px', background: 'rgba(245, 158, 11, 0.1)', color: '#d97706', border: '1px solid var(--border)', fontWeight: 600 }}>
              Intermediate
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
                Complete Navigation Bar Design
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--muted)', margin: 0 }}>
                This is the final result you'll achieve by completing this exercise.
              </p>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '14px', padding: '16px 24px', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg,var(--blue),var(--teal))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>F</div>
                <span style={{ fontWeight: 800, fontSize: '17px' }}>FlexKit</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
                  <a href="#" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>Home</a>
                  <a href="#" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>Features</a>
                  <a href="#" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>Pricing</a>
                  <a href="#" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>About</a>
                </div>
                <a href="#" style={{ background: 'linear-gradient(135deg,var(--blue),var(--teal))', color: '#0e2440', fontWeight: 800, fontSize: '14px', padding: '10px 18px', borderRadius: '10px', textDecoration: 'none', flexShrink: 0 }}>Get Started</a>
              </div>
              <button style={{ display: 'none', background: 'transparent', border: '1px solid var(--border)', borderRadius: '10px', width: '42px', height: '42px', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>☰</button>
            </div>
          </div>
        )}

      {/* Eyebrow */}
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 700, color: 'var(--blue)', background: 'var(--blue-dim)', border: '1px solid ' + 'rgba(96,165,250,.35)', padding: '6px 14px', borderRadius: '999px', marginBottom: '18px' }}>
        🧭 Component Reference / مرجع مكوّن
      </div>

      {/* Tier Row */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '22px' }}>
        <span style={{ fontFamily: 'monospace', fontSize: '12px', padding: '5px 10px', borderRadius: '7px', border: '1px solid var(--border)', color: 'var(--yellow)', borderColor: 'rgba(255,209,102,.35)', background: '#3a3018' }}>Mid</span>
        <span style={{ fontFamily: 'monospace', fontSize: '12px', padding: '5px 10px', borderRadius: '7px', border: '1px solid var(--border)', color: 'var(--muted)' }}>3 Flex Containers + JS toggle</span>
        <span style={{ fontFamily: 'monospace', fontSize: '12px', padding: '5px 10px', borderRadius: '7px', border: '1px solid var(--border)', color: 'var(--muted)' }}>~30 min · ~٣٠ دقيقة</span>
      </div>

      {/* Title */}
      <h1 style={{ fontSize: '36px', fontWeight: 800, margin: '0 0 10px' }}>
        Navigation <span style={{ color: 'var(--blue)' }}>Bar</span>
      </h1>

      {/* Section 1: Project Brief */}
      <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '20px', padding: '34px 34px 38px', marginTop: '26px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--blue)', fontFamily: 'monospace', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>1</span>
          <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--blue)' }}>PROJECT BRIEF · بريف المشروع</span>
        </div>
        <h2 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 14px' }}>What you're building · اللي هتبنيه</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '26px', marginBottom: '20px' }}>
          <div style={{ direction: 'ltr', textAlign: 'left', fontSize: '15px', lineHeight: 1.8 }}>Build a responsive site header: a logo on one side, nav links + a CTA button on the other, and a hamburger menu that replaces the links on mobile. This is the first component that combines Flexbox with a real interaction — clicking the hamburger toggles a dropdown menu with JavaScript. It also introduces <code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '1px 7px', fontSize: '0.88em' }}>justify-content:space-between</code> at the top level for the first time.</div>
          <div style={{ direction: 'rtl', textAlign: 'right', unicodeBidi: 'isolate', fontSize: '15px', lineHeight: 1.8 }}>ابنِ هيدر موقع متجاوب: لوجو في جهة، روابط تنقّل + زرار CTA في الجهة التانية، وقايمة همبرجر بتحل محل الروابط في الموبايل. ده أول مكوّن بيجمع بين Flexbox وتفاعل حقيقي — دوسة الهمبرجر بتفتح وتقفل قايمة بجافاسكريبت. وبيقدّم كمان <code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '1px 7px', fontSize: '0.88em' }}>justify-content:space-between</code> على المستوى الأعلى لأول مرة.</div>
        </div>
        <h2 style={{ fontSize: '17px', fontWeight: 800, margin: '0 0 14px' }}>Requirements · المتطلبات</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {[
            { en: 'Logo pinned to one end, nav links + CTA grouped together at the other end', ar: 'اللوجو ملزّق في جهة، الروابط + الـCTA مجمّعين في الجهة التانية' },
            { en: 'At desktop/tablet widths, links and CTA are visible; below a breakpoint, they\'re replaced by a hamburger icon', ar: 'في عرض الديسكتوب/التابلت، الروابط والـCTA ظاهرين؛ تحت حد معين، بيتستبدلوا بأيقونة همبرجر' },
            { en: 'Clicking the hamburger opens a full-width dropdown menu with the same links, stacked', ar: 'دوسة الهمبرجر بتفتح قايمة منسدلة بعرض كامل بنفس الروابط، مرصوصة' },
            { en: 'Works correctly mirrored in Arabic (RTL) — logo and menu order flip automatically', ar: 'شغالة صح متعكوسة في العربي (RTL) — ترتيب اللوجو والقايمة بيتقلب لوحده' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', padding: '12px 0', borderBottom: '1px solid var(--border)', alignItems: 'start' }}>
              <div style={{ direction: 'ltr', textAlign: 'left', fontSize: '14px', lineHeight: 1.6 }}>{item.en}</div>
              <div style={{ direction: 'rtl', textAlign: 'right', unicodeBidi: 'isolate', fontSize: '14px', lineHeight: 1.6 }}>{item.ar}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Design Preview */}
      <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '20px', padding: '34px 34px 38px', marginTop: '26px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--blue)', fontFamily: 'monospace', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>2</span>
          <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--blue)' }}>DESIGN PREVIEW · معاينة التصميم</span>
        </div>
        <h2 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 14px' }}>Desktop, tablet, mobile — English & Arabic together</h2>
        <p style={{ color: 'var(--muted)', fontSize: '15px', margin: '0 0 18px' }}>The mobile tab is fully interactive — tap the hamburger icon to actually open and close the menu.</p>
        
        {/* Tabs */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '18px', flexWrap: 'wrap' }}>
          {[
            { key: 'desktop', label: '🖥️ Desktop', sub: '≥1024px' },
            { key: 'tablet', label: '📱 Tablet', sub: '768px' },
            { key: 'mobile', label: '📱 Mobile', sub: '375px' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFrame(tab.key as any)}
              style={{
                fontFamily: 'monospace',
                background: activeFrame === tab.key ? 'var(--blue)' : 'var(--surface-2)',
                border: activeFrame === tab.key ? 'var(--blue)' : '1px solid var(--border)',
                color: activeFrame === tab.key ? '#0e2440' : 'var(--text)',
                padding: '9px 16px',
                borderRadius: '9px',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: activeFrame === tab.key ? 700 : 400,
              }}
            >
              {tab.label} <span style={{ opacity: 0.6 }}>{tab.sub}</span>
            </button>
          ))}
        </div>

        {/* Desktop Frame */}
        {activeFrame === 'desktop' && (
          <div>
            <div style={{ fontFamily: 'monospace', fontSize: '12px', color: 'var(--muted)', marginBottom: '12px' }}>frame width: 1024px+</div>
            <div style={{ background: 'var(--bg)', borderRadius: '16px', padding: '40px 24px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '34px' }}>
                {/* English */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '11px', padding: '3px 10px', borderRadius: '999px', color: 'var(--blue)', background: 'rgba(96,165,250,.12)', border: '1px solid ' + 'rgba(96,165,250,.3)', alignSelf: 'flex-start' }}>EN · English</span>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '14px', padding: '14px 20px', gap: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '9px', flexShrink: 0 }}>
                      <div style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'linear-gradient(135deg,var(--blue),var(--teal))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>F</div>
                      <span style={{ fontWeight: 800, fontSize: '15px' }}>FlexKit</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <a href="#" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '13.5px', fontWeight: 600 }}>Home</a>
                        <a href="#" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '13.5px', fontWeight: 600 }}>Features</a>
                        <a href="#" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '13.5px', fontWeight: 600 }}>Pricing</a>
                        <a href="#" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '13.5px', fontWeight: 600 }}>About</a>
                      </div>
                      <a href="#" style={{ background: 'linear-gradient(135deg,var(--blue),var(--teal))', color: '#0e2440', fontWeight: 800, fontSize: '13px', padding: '9px 16px', borderRadius: '9px', textDecoration: 'none', flexShrink: 0 }}>Get Started</a>
                    </div>
                    <button style={{ display: 'none', background: 'transparent', border: '1px solid var(--border)', borderRadius: '9px', width: '38px', height: '38px', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>☰</button>
                  </div>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '4px' }}>
                    <span style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--muted)', background: 'var(--surface-2)', border: '1px solid var(--border)', padding: '2px 8px', borderRadius: '6px', direction: 'ltr' }}>logo-mark.svg</span>
                  </div>
                </div>
                {/* Arabic */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '11px', padding: '3px 10px', borderRadius: '999px', color: 'var(--purple)', background: 'rgba(167,139,250,.12)', border: '1px solid ' + 'rgba(167,139,250,.3)', alignSelf: 'flex-end' }}>AR · عربي</span>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '14px', padding: '14px 20px', gap: '16px', direction: 'rtl' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '9px', flexShrink: 0 }}>
                      <div style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'linear-gradient(135deg,var(--blue),var(--teal))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>ف</div>
                      <span style={{ fontWeight: 800, fontSize: '15px' }}>فلكس كِت</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <a href="#" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '13.5px', fontWeight: 600 }}>الرئيسية</a>
                        <a href="#" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '13.5px', fontWeight: 600 }}>المميزات</a>
                        <a href="#" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '13.5px', fontWeight: 600 }}>الأسعار</a>
                        <a href="#" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '13.5px', fontWeight: 600 }}>من نحن</a>
                      </div>
                      <a href="#" style={{ background: 'linear-gradient(135deg,var(--blue),var(--teal))', color: '#0e2440', fontWeight: 800, fontSize: '13px', padding: '9px 16px', borderRadius: '9px', textDecoration: 'none', flexShrink: 0 }}>ابدأ الآن</a>
                    </div>
                    <button style={{ display: 'none', background: 'transparent', border: '1px solid var(--border)', borderRadius: '9px', width: '38px', height: '38px', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>☰</button>
                  </div>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '4px' }}>
                    <span style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--muted)', background: 'var(--surface-2)', border: '1px solid var(--border)', padding: '2px 8px', borderRadius: '6px', direction: 'ltr' }}>logo-mark.svg</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tablet Frame */}
        {activeFrame === 'tablet' && (
          <div>
            <div style={{ fontFamily: 'monospace', fontSize: '12px', color: 'var(--muted)', marginBottom: '12px' }}>frame width: 768px</div>
            <div style={{ background: 'var(--bg)', borderRadius: '16px', padding: '40px 24px', maxWidth: '620px', margin: '0 auto' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '34px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '11px', padding: '3px 10px', borderRadius: '999px', color: 'var(--blue)', background: 'rgba(96,165,250,.12)', border: '1px solid ' + 'rgba(96,165,250,.3)', alignSelf: 'flex-start' }}>EN</span>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '14px', padding: '14px 20px', gap: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '9px', flexShrink: 0 }}>
                      <div style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'linear-gradient(135deg,var(--blue),var(--teal))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>F</div>
                      <span style={{ fontWeight: 800, fontSize: '15px' }}>FlexKit</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <a href="#" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '13.5px', fontWeight: 600 }}>Home</a>
                        <a href="#" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '13.5px', fontWeight: 600 }}>Features</a>
                        <a href="#" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '13.5px', fontWeight: 600 }}>Pricing</a>
                      </div>
                      <a href="#" style={{ background: 'linear-gradient(135deg,var(--blue),var(--teal))', color: '#0e2440', fontWeight: 800, fontSize: '13px', padding: '9px 16px', borderRadius: '9px', textDecoration: 'none', flexShrink: 0 }}>Get Started</a>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '11px', padding: '3px 10px', borderRadius: '999px', color: 'var(--purple)', background: 'rgba(167,139,250,.12)', border: '1px solid ' + 'rgba(167,139,250,.3)', alignSelf: 'flex-end' }}>AR</span>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '14px', padding: '14px 20px', gap: '16px', direction: 'rtl' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '9px', flexShrink: 0 }}>
                      <div style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'linear-gradient(135deg,var(--blue),var(--teal))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>ف</div>
                      <span style={{ fontWeight: 800, fontSize: '15px' }}>فلكس كِت</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <a href="#" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '13.5px', fontWeight: 600 }}>الرئيسية</a>
                        <a href="#" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '13.5px', fontWeight: 600 }}>المميزات</a>
                        <a href="#" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '13.5px', fontWeight: 600 }}>الأسعار</a>
                      </div>
                      <a href="#" style={{ background: 'linear-gradient(135deg,var(--blue),var(--teal))', color: '#0e2440', fontWeight: 800, fontSize: '13px', padding: '9px 16px', borderRadius: '9px', textDecoration: 'none', flexShrink: 0 }}>ابدأ الآن</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '15px', marginTop: '14px', marginBottom: 0 }}>Tablet override: fewer links shown (drop lower-priority items) before switching to the hamburger fully.</p>
          </div>
        )}

        {/* Mobile Frame */}
        {activeFrame === 'mobile' && (
          <div>
            <div style={{ fontFamily: 'monospace', fontSize: '12px', color: 'var(--muted)', marginBottom: '12px' }}>frame width: 375px — tap the hamburger below</div>
            <div style={{ background: 'var(--bg)', borderRadius: '16px', padding: '28px 16px', maxWidth: '375px', margin: '0 auto' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '34px' }}>
                {/* English */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '11px', padding: '3px 10px', borderRadius: '999px', color: 'var(--blue)', background: 'rgba(96,165,250,.12)', border: '1px solid ' + 'rgba(96,165,250,.3)', alignSelf: 'flex-start' }}>EN</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '14px', padding: '14px 20px', gap: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '9px', flexShrink: 0 }}>
                        <div style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'linear-gradient(135deg,var(--blue),var(--teal))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>F</div>
                        <span style={{ fontWeight: 800, fontSize: '15px' }}>FlexKit</span>
                      </div>
                      <button 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        style={{ display: 'flex', background: 'transparent', border: '1px solid var(--border)', borderRadius: '9px', width: '38px', height: '38px', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0, fontSize: '18px' }}
                      >☰</button>
                    </div>
                    {mobileMenuOpen && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', background: 'var(--surface-2)', border: '1px solid var(--border)', borderTop: 'none', borderRadius: '0 0 14px 14px', padding: '8px', marginTop: '-2px' }}>
                        <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '14px', fontWeight: 600, padding: '12px 14px', borderRadius: '9px' }}>Home</a>
                        <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '14px', fontWeight: 600, padding: '12px 14px', borderRadius: '9px' }}>Features</a>
                        <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '14px', fontWeight: 600, padding: '12px 14px', borderRadius: '9px' }}>Pricing</a>
                        <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '14px', fontWeight: 600, padding: '12px 14px', borderRadius: '9px' }}>About</a>
                        <a href="#" style={{ background: 'linear-gradient(135deg,var(--blue),var(--teal))', color: '#0e2440', fontWeight: 800, fontSize: '13px', padding: '9px 16px', borderRadius: '9px', textDecoration: 'none', textAlign: 'center', marginTop: '6px' }}>Get Started</a>
                      </div>
                    )}
                  </div>
                  <div style={{ fontFamily: 'monospace', fontSize: '11.5px', color: 'var(--yellow)', marginTop: '4px' }}>👆 tap the ☰ icon</div>
                </div>
                {/* Arabic */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '11px', padding: '3px 10px', borderRadius: '999px', color: 'var(--purple)', background: 'rgba(167,139,250,.12)', border: '1px solid ' + 'rgba(167,139,250,.3)', alignSelf: 'flex-end' }}>AR</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '14px', padding: '14px 20px', gap: '16px', direction: 'rtl' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '9px', flexShrink: 0 }}>
                        <div style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'linear-gradient(135deg,var(--blue),var(--teal))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>ف</div>
                        <span style={{ fontWeight: 800, fontSize: '15px' }}>فلكس كِت</span>
                      </div>
                      <button 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        style={{ display: 'flex', background: 'transparent', border: '1px solid var(--border)', borderRadius: '9px', width: '38px', height: '38px', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0, fontSize: '18px' }}
                      >☰</button>
                    </div>
                    {mobileMenuOpen && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', background: 'var(--surface-2)', border: '1px solid var(--border)', borderTop: 'none', borderRadius: '0 0 14px 14px', padding: '8px', marginTop: '-2px', direction: 'rtl' }}>
                        <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '14px', fontWeight: 600, padding: '12px 14px', borderRadius: '9px' }}>الرئيسية</a>
                        <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '14px', fontWeight: 600, padding: '12px 14px', borderRadius: '9px' }}>المميزات</a>
                        <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '14px', fontWeight: 600, padding: '12px 14px', borderRadius: '9px' }}>الأسعار</a>
                        <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '14px', fontWeight: 600, padding: '12px 14px', borderRadius: '9px' }}>من نحن</a>
                        <a href="#" style={{ background: 'linear-gradient(135deg,var(--blue),var(--teal))', color: '#0e2440', fontWeight: 800, fontSize: '13px', padding: '9px 16px', borderRadius: '9px', textDecoration: 'none', textAlign: 'center', marginTop: '6px' }}>ابدأ الآن</a>
                      </div>
                    )}
                  </div>
                  <div style={{ fontFamily: 'monospace', fontSize: '11.5px', color: 'var(--yellow)', marginTop: '4px', direction: 'rtl' }}>👆 دوس على أيقونة ☰</div>
                </div>
              </div>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '15px', marginTop: '14px', marginBottom: 0 }}>Mobile override: <code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '4px 10px', fontSize: '0.9em' }}>.nav-right</code> becomes <code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '4px 10px', fontSize: '0.9em' }}>display:none</code>, <code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '4px 10px', fontSize: '0.9em' }}>.hamburger</code> becomes <code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '4px 10px', fontSize: '0.9em' }}>display:flex</code>.</p>
          </div>
        )}
      </section>

      {/* Section 3: Assets */}
      <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '20px', padding: '34px 34px 38px', marginTop: '26px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--blue)', fontFamily: 'monospace', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>3</span>
          <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--blue)' }}>ASSETS · الأصول</span>
        </div>
        <h2 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 16px' }}>Real files, included</h2>
        <p style={{ color: 'var(--muted)', fontSize: '15px', margin: '0 0 24px' }}>Two new icons; the CTA button styling is reused from component #5.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', marginTop: '6px' }}>
          {[
            { name: 'Logo mark', ar: 'شعار', file: 'assets/logo-mark.svg', icon: 'F' },
            { name: 'Hamburger icon', ar: 'أيقونة الهمبرجر', file: 'assets/menu-icon.svg', icon: '☰' },
          ].map((asset) => (
            <div key={asset.name} style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '14px', padding: '16px' }}>
              <div style={{ background: 'var(--bg)', borderRadius: '10px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px', fontSize: '24px' }}>{asset.icon}</div>
              <h4 style={{ margin: '0 0 4px', fontSize: '14px', fontWeight: 600 }}>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', lineHeight: 1.3 }}>
                  <span>{asset.name}</span>
                  <span style={{ fontSize: '0.85em', color: 'var(--muted)', direction: 'rtl', textAlign: 'right' }}>{asset.ar}</span>
                </span>
              </h4>
              <span style={{ fontFamily: 'monospace', fontSize: '11.5px', color: 'var(--blue)', direction: 'ltr', display: 'inline-block', marginTop: '6px', padding: '4px 8px', background: 'var(--bg)', borderRadius: '6px' }}>{asset.file}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Solution */}
      {/* <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '20px', padding: '34px 34px 38px', marginTop: '26px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'linear-gradient(135deg, var(--blue) 0%, var(--cyan) 100%)', color: '#0a1628', fontFamily: 'monospace', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>4</span>
            <span style={{ fontSize: '13px', fontWeight: 700', color: 'var(--blue)' }}>SOLUTION</span>
          </div>
          <button
            onClick={() => setShowSolution(!showSolution)}
            style={{
              padding: '8px 16px',
              background: showSolution ? 'var(--surface-2)' : 'var(--blue)',
              color: showSolution ? 'var(--blue)' : '#0a1628',
              border: showSolution ? '1px solid var(--blue)' : 'none',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '13px',
              cursor: 'pointer',
            }}
          >
            {showSolution ? '✕ Hide' : '👁️ Show Solution'}
          </button>
        </div>
        <h2 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 14px', color: 'var(--text)' }}>Compare with the solution</h2>
        <p style={{ color: 'var(--muted)', fontSize: '14px', margin: '0 0 18px' }}>
          Stuck? Click "Show Solution" to see the complete code for this exercise.
        </p>

        {showSolution && (
          <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px', overflow: 'auto' }}>
            <pre style={{ fontSize: '13px', color: 'var(--text)', margin: 0, whiteSpace: 'pre-wrap' }}>{`<nav class="navbar">
  <div class="nav-container">
    <div class="nav-brand">
      <div class="logo">🚀</div>
      <span class="brand-name">BrandName</span>
    </div>
    <div class="nav-links">
      <a href="#">Products</a>
      <a href="#">Features</a>
      <a href="#">Pricing</a>
      <a href="#">About</a>
    </div>
    <button class="nav-cta">Get Started</button>
  </div>
</nav>

.navbar {
  display: flex;
  align-items: center;
  background: #1a2030;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  padding: 16px 32px;
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #ff6b4a, #f472b6);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.brand-name {
  font-size: 18px;
  font-weight: 700;
  color: #eef0f8;
}

.nav-links {
  display: flex;
  gap: 32px;
}

.nav-links a {
  color: #8d93ac;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: #eef0f8;
}

.nav-cta {
  padding: 10px 20px;
  background: linear-gradient(135deg, #ff6b4a, #5eead4);
  border: none;
  border-radius: 8px;
  color: #0e2440;
  font-weight: 700;
  cursor: pointer;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
}`}</pre>
          </div>
        )}
      </section> */}

      {/* Section 4: Code Editor */}
      <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '20px', padding: '34px 34px 38px', marginTop: '26px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--blue)', fontFamily: 'monospace', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>5</span>
          <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--blue)' }}>CODE EDITOR · محرر الكود</span>
        </div>
        <h2 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 16px' }}>Try it yourself</h2>
        <p style={{ color: 'var(--muted)', fontSize: '15px', margin: '0 0 24px' }}>
          Write HTML, CSS, and JavaScript below to build the navigation bar with a mobile hamburger menu. The preview updates in real-time.
        </p>
        <CodeEditor
          initialHtml={`<nav class="navbar">
  <div class="logo">
    <span class="logo-icon">F</span>
    <span>FlexKit</span>
  </div>
  <div class="nav-right">
    <div class="nav-links">
      <a href="#">Home</a>
      <a href="#">Features</a>
      <a href="#">Pricing</a>
      <a href="#">About</a>
    </div>
    <a class="nav-cta" href="#">Get Started</a>
  </div>
  <button class="hamburger">☰</button>
</nav>
<div class="mobile-menu">
  <a href="#">Home</a>
  <a href="#">Features</a>
  <a href="#">Pricing</a>
  <a href="#">About</a>
  <a class="nav-cta" href="#">Get Started</a>
</div>`}
          initialCss={`.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #212844;
  border: 1px solid rgba(255,255,255,0.09);
  border-radius: 14px;
  padding: 14px 20px;
  gap: 16px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 9px;
  flex-shrink: 0;
}

.logo-icon {
  width: 26px;
  height: 26px;
  border-radius: 8px;
  background: linear-gradient(135deg, #60a5fa, #5eead4);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 12px;
  color: #0e2440;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 22px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-links a {
  color: #8d93ac;
  text-decoration: none;
  font-size: 13.5px;
  font-weight: 600;
}

.nav-links a:hover {
  color: #eef0f8;
}

.nav-cta {
  background: linear-gradient(135deg, #60a5fa, #5eead4);
  color: #0e2440;
  font-weight: 800;
  font-size: 13px;
  padding: 9px 16px;
  border-radius: 9px;
  text-decoration: none;
  flex-shrink: 0;
}

.hamburger {
  display: none;
  background: transparent;
  border: 1px solid rgba(255,255,255,0.09);
  border-radius: 9px;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  font-size: 18px;
  color: #eef0f8;
}

.mobile-menu {
  display: none;
  flex-direction: column;
  gap: 2px;
  background: #212844;
  border: 1px solid rgba(255,255,255,0.09);
  border-top: none;
  border-radius: 0 0 14px 14px;
  padding: 8px;
  margin-top: -2px;
}

.mobile-menu.open {
  display: flex;
}

.mobile-menu a {
  color: #eef0f8;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  padding: 12px 14px;
  border-radius: 9px;
}

.mobile-menu a:hover {
  background: #12151f;
}

.mobile-menu .nav-cta {
  text-align: center;
  margin-top: 6px;
}

@media (max-width: 768px) {
  .nav-right {
    display: none !important;
  }
  
  .hamburger {
    display: flex !important;
  }
}`}
          initialJs={`// Toggle mobile menu
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// Close menu when clicking a link
const mobileLinks = document.querySelectorAll('.mobile-menu a');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});`}
          height="700px"
        />
      </section>

      {/* Section 5: Guides */}
      <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '20px', padding: '34px 34px 38px', marginTop: '26px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--blue)', fontFamily: 'monospace', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>5</span>
          <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--blue)' }}>GUIDES · الشرح</span>
        </div>

        <h2 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 24px' }}>Anatomy</h2>
        <div style={{ display: 'flex', gap: '26px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <div style={{ background: 'var(--bg)', borderRadius: '16px', padding: '44px 30px', flex: '1 1 420px', display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--blue)', color: 'var(--blue)', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap', top: '-30px', left: '22px' }}>1 · logo</div>
            <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--blue)', color: 'var(--blue)', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap', top: '-30px', left: '200px' }}>2 · nav-right group</div>
            <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--blue)', color: 'var(--blue)', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap', top: '-30px', right: '20px' }}>3 · hamburger</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '14px', padding: '14px 20px', gap: '16px', width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '9px', flexShrink: 0 }}>
                <div style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'linear-gradient(135deg,var(--blue),var(--teal))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>F</div>
                <span style={{ fontWeight: 800, fontSize: '15px' }}>FlexKit</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <a href="#" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '13.5px', fontWeight: 600 }}>Home</a>
                  <a href="#" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '13.5px', fontWeight: 600 }}>Features</a>
                  <a href="#" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '13.5px', fontWeight: 600 }}>Pricing</a>
                </div>
                <a href="#" style={{ background: 'linear-gradient(135deg,var(--blue),var(--teal))', color: '#0e2440', fontWeight: 800, fontSize: '13px', padding: '9px 16px', borderRadius: '9px', textDecoration: 'none', flexShrink: 0 }}>Get Started</a>
              </div>
              <button style={{ display: 'flex', background: 'transparent', border: '1px solid var(--border)', borderRadius: '9px', width: '38px', height: '38px', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0, fontSize: '18px' }}>☰</button>
            </div>
          </div>
          <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: 0, marginTop: '20px' }}>
            {[
              { en: '<b>Navbar</b> — Flex row, <code>justify-content:space-between</code> (new: only 2 groups needed, not 3)', ar: '<b>الناف بار</b> — Flex أفقي، <code>justify-content:space-between</code> (جديد: مجموعتين بس مش ٣)' },
              { en: '<b>2. nav-right</b> — nested Flex row grouping links + CTA as ONE unit, so space-between still only splits two things', ar: '<b>2. nav-right</b> — Flex أفقي متداخل بيجمع الروابط + الـCTA كوحدة واحدة، عشان space-between يفضل يقسم حاجتين بس' },
              { en: '<b>3. Hamburger</b> — hidden on desktop (<code>display:none</code>), shown on mobile', ar: '<b>3. الهمبرجر</b> — مخفي في الديسكتوب (<code>display:none</code>)، ظاهر في الموبايل' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', padding: '12px 0', borderBottom: '1px solid var(--border)', alignItems: 'start' }}>
                <div style={{ direction: 'ltr', textAlign: 'left', fontSize: '14px', lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: item.en }} />
                <div style={{ direction: 'rtl', textAlign: 'right', unicodeBidi: 'isolate', fontSize: '14px', lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: item.ar }} />
              </div>
            ))}
          </div>
        </div>

        <h2 style={{ fontSize: '24px', fontWeight: 800, margin: '32px 0 24px' }}>Spec</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '6px' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', fontSize: '12px', color: 'var(--muted)', fontWeight: 700, padding: '8px 10px', borderBottom: '1px solid var(--border)' }}>Element / العنصر</th>
              <th style={{ textAlign: 'left', fontSize: '12px', color: 'var(--muted)', fontWeight: 700, padding: '8px 10px', borderBottom: '1px solid var(--border)' }}>Property / الخاصية</th>
              <th style={{ textAlign: 'left', fontSize: '12px', color: 'var(--muted)', fontWeight: 700, padding: '8px 10px', borderBottom: '1px solid var(--border)' }}>Value / القيمة</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}>Navbar / الناف بار</td><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}>justify-content</td><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}><code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '1px 7px', fontSize: '0.88em' }}>space-between</code></td></tr>
            <tr><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}>Navbar / الناف بار</td><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}>Padding / الحشو</td><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}><code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '1px 7px', fontSize: '0.88em' }}>14px 20px</code></td></tr>
            <tr><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}>Logo / اللوجو</td><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}>flex-shrink</td><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}><code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '1px 7px', fontSize: '0.88em' }}>0</code></td></tr>
            <tr><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}>nav-links / الروابط</td><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}>Gap / المسافة</td><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}><code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '1px 7px', fontSize: '0.88em' }}>20px</code></td></tr>
            <tr><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}>nav-right / المجموعة</td><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}>Gap / المسافة</td><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}><code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '1px 7px', fontSize: '0.88em' }}>22px</code></td></tr>
            <tr><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}>Hamburger / الهمبرجر</td><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}>Breakpoint / نقطة التحول</td><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}><code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '1px 7px', fontSize: '0.88em' }}>&lt; 768px</code></td></tr>
            <tr><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}>Mobile menu / القايمة المنسدلة</td><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}>display / direction</td><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}><code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '1px 7px', fontSize: '0.88em' }}>flex / column</code></td></tr>
          </tbody>
        </table>

        <h2 style={{ fontSize: '24px', fontWeight: 800, margin: '32px 0 24px' }}>Build steps</h2>
        {[
          { 
            title: 'Two groups only: logo, and everything else',
            en: 'The navbar only ever needs to split into 2 things for space-between to work — the logo, and a single group holding links + CTA.',
            ar: 'الناف بار محتاج ينقسم لحاجتين بس عشان space-between يشتغل — اللوجو، ومجموعة واحدة فيها الروابط + الـCTA.',
            code: '.navbar{display:flex;justify-content:space-between;align-items:center;}',
            hintEn: 'If you put logo, links, and CTA as 3 separate top-level children with space-between, the links end up dead-center — not what you want. Wrap links + CTA in one .nav-right div instead.',
            hintAr: 'لو حطيت اللوجو والروابط والـCTA كـ٣ أبناء منفصلين على المستوى الأعلى بـ space-between، الروابط هتقعد في النص بالظبط — مش اللي عايزه. لف الروابط + الـCTA في div.nav-right واحد بدل كده.'
          },
          { 
            title: 'Navbar = space-between, both nested groups = flex too',
            en: 'Build the outer row, then make .nav-right and .nav-links their own flex rows with gaps.',
            ar: 'ابني الصف الخارجي، وبعدين خلّي .nav-right و.nav-links صفوف flex بتاعتهم بـ gap.',
            code: '.nav-right,.nav-links{display:flex;align-items:center;gap:20px;}',
            hintEn: 'Nested flex containers keep the layout clean and predictable.',
            hintAr: 'Flex containers متداخلة بتخلي الـLayout نظيف ومتوقع.'
          },
          { 
            title: 'Hide links, show hamburger on mobile',
            en: 'Below your breakpoint, swap which one is visible.',
            ar: 'تحت نقطة التحول بتاعتك، بدّل مين الظاهر.',
            code: '@media(max-width:768px){.nav-right{display:none!important;}.hamburger{display:flex!important;}}',
            hintEn: 'In a media query: .nav-right{display:none;} .hamburger{display:flex;} — the hamburger button is display:none by default at desktop widths.',
            hintAr: 'جوه media query: .nav-right{display:none;} .hamburger{display:flex;} — زرار الهمبرجر display:none افتراضيًا في عرض الديسكتوب.'
          },
          { 
            title: 'Wire up the toggle with JavaScript',
            en: 'Clicking the hamburger should open/close a stacked menu with the same links.',
            ar: 'دوسة الهمبرجر لازم تفتح/تقفل قايمة مرصوصة بنفس الروابط.',
            code: 'hamburger.addEventListener("click",()=>mobileMenu.classList.toggle("open"))',
            hintEn: 'The CSS class .open{display:flex} reveals a flex column menu below the navbar.',
            hintAr: 'كلاس CSS .open{display:flex} بيظهر قايمة flex عمودية تحت الناف بار.'
          },
        ].map((step, i) => (
          <div key={i} style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '14px', padding: '20px 22px', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
              <span style={{ width: '30px', height: '30px', borderRadius: '9px', background: 'var(--blue)', color: '#0e2440', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto', fontSize: '14px' }}>{i + 1}</span>
              <span style={{ fontWeight: 700, fontSize: '15.5px' }}>{step.title}</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '26px', marginBottom: '12px' }}>
              <div style={{ direction: 'ltr', textAlign: 'left', fontSize: '15px', lineHeight: 1.8, color: '#dfe2f2' }}>{step.en}</div>
              <div style={{ direction: 'rtl', textAlign: 'right', unicodeBidi: 'isolate', fontSize: '15px', lineHeight: 1.8, color: '#dfe2f2' }}>{step.ar}</div>
            </div>
            <button
              onClick={() => toggleHint(`step${i}`)}
              style={{ fontFamily: 'monospace', background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--yellow)', borderRadius: '8px', padding: '6px 12px', fontSize: '12px', cursor: 'pointer', marginTop: '6px', fontWeight: 600 }}
            >
              💡 hint / تلميح
            </button>
            {showHints[`step${i}`] && (
              <div style={{ marginTop: '10px', background: 'var(--bg)', border: '1px dashed ' + 'rgba(255,209,102,.4)', borderRadius: '10px', padding: '12px 14px', fontSize: '13px', color: 'var(--yellow)' }}>
                <code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '8px', padding: '4px 12px', fontSize: '0.9em' }}>{step.code}</code>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '26px', marginTop: '8px' }}>
                  <div style={{ direction: 'ltr', textAlign: 'left', fontSize: '13px', lineHeight: 1.6 }}>{step.hintEn}</div>
                  <div style={{ direction: 'rtl', textAlign: 'right', unicodeBidi: 'isolate', fontSize: '13px', lineHeight: 1.6 }}>{step.hintAr}</div>
                </div>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Section 6: Discussion */}
      <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '20px', padding: '34px 34px 38px', marginTop: '26px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--blue)', fontFamily: 'monospace', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>6</span>
          <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--blue)' }}>DISCUSSION · نقاش وأسئلة</span>
        </div>
        <h2 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 24px' }}>Common questions</h2>
        {[
          { 
            q: { en: 'Why not put logo, links, and CTA as 3 separate items with space-between?', ar: 'ليه ما نحطش اللوجو والروابط والـCTA كـ٣ عناصر منفصلة بـ space-between؟' },
            a: { en: 'space-between spreads items evenly with equal gaps — with 3 items, the middle one lands dead-center rather than sitting next to the CTA. Grouping links + CTA into one nested flex container keeps it a clean 2-item split.', ar: 'space-between بيوزّع العناصر بمسافات متساوية — مع ٣ عناصر، الوسطاني بيقعد في النص بالظبط مش جنب الـCTA. تجميع الروابط + الـCTA في flex container متداخل واحد بيخلي القسمة نضيفة لحاجتين بس.' }
          },
          { 
            q: { en: 'Do I need JavaScript, or can CSS alone open the mobile menu?', ar: 'محتاج جافاسكريبت، ولا CSS لوحده يقدر يفتح قايمة الموبايل؟' },
            a: { en: 'A checkbox + :checked selector can fake it with pure CSS, but a real toggle button with JavaScript is more reliable and easier to extend later (closing on link click, animating, etc.).', ar: 'ممكن checkbox + selector اسمه :checked يعمل نفس الحركة بـ CSS بس، بس زرار toggle حقيقي بجافاسكريبت أوثق وأسهل تطوّره بعدين (قفل عند الدوس على رابط، أنيميشن، إلخ).' }
          },
          { 
            q: { en: 'Does the RTL version need separate JavaScript?', ar: 'النسخة العربية محتاجة جافاسكريبت منفصل؟' },
            a: { en: 'No — the toggle logic is identical. Only the visual order flips, and that\'s handled automatically by dir="rtl" plus Flexbox, exactly like every other component in the track.', ar: 'لأ — منطق الـtoggle نفسه. بس الترتيب البصري هو اللي بيتقلب، وده بيتحل تلقائيًا بـ dir="rtl" مع Flexbox، بالظبط زي أي مكوّن تاني في التراك.' }
          },
        ].map((item, i) => (
          <div key={i} style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '14px', marginBottom: '10px', overflow: 'hidden' }}>
            <div 
              onClick={() => toggleAccordion(i)}
              style={{ padding: '16px 18px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '14px' }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={{ direction: 'ltr', textAlign: 'left', fontSize: '14px', fontWeight: 600 }}>{item.q.en}</div>
                <div style={{ direction: 'rtl', textAlign: 'right', unicodeBidi: 'isolate', fontSize: '14px', fontWeight: 600 }}>{item.q.ar}</div>
              </div>
              <span style={{ fontFamily: 'monospace', color: 'var(--blue)', flex: '0 0 auto', fontSize: '18px', transition: '0.2s', transform: openAccordions[i] ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
            </div>
            <div style={{ maxHeight: openAccordions[i] ? '500px' : '0', overflow: 'hidden', transition: '0.25s ease' }}>
              <div style={{ padding: '0 18px 18px', fontSize: '13.5px', color: '#dfe2f2' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div style={{ direction: 'ltr', textAlign: 'left', lineHeight: 1.6 }}>{item.a.en}</div>
                  <div style={{ direction: 'rtl', textAlign: 'right', unicodeBidi: 'isolate', lineHeight: 1.6 }}>{item.a.ar}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Section 7: Project Completion */}
      <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '20px', padding: '34px 34px 38px', marginTop: '26px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--blue)', fontFamily: 'monospace', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>7</span>
          <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--blue)' }}>PROJECT COMPLETION · إنهاء المشروع</span>
        </div>
        <h2 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 24px' }}>Self-check checklist</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '18px 0' }}>
          {[
            { en: 'Navbar splits into exactly 2 groups with space-between', ar: 'الناف بار منقسم لمجموعتين بالظبط بـ space-between' },
            { en: 'Links and CTA hidden, hamburger shown at mobile breakpoint', ar: 'الروابط والـCTA مخفية، الهمبرجر ظاهر عند نقطة تحول الموبايل' },
            { en: 'Clicking hamburger opens stacked mobile menu with same links', ar: 'دوسة الهمبرجر بتفتح قايمة موبايل مرصوصة بنفس الروابط' },
            { en: 'RTL version mirrors correctly without separate code', ar: 'النسخة العربية بتتعكس صح من غير كود منفصل' },
          ].map((item, i) => (
            <label
              key={i}
              onClick={() => toggleCheck(i)}
              style={{ display: 'grid', gridTemplateColumns: 'auto 1fr 1fr', gap: '14px', alignItems: 'start', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '12px', padding: '13px 16px', fontSize: '14px', cursor: 'pointer', textDecoration: checkedItems[i] ? 'line-through' : 'none', opacity: checkedItems[i] ? 0.5 : 1, transition: 'all 0.2s ease' }}
            >
              <input type="checkbox" checked={checkedItems[i] || false} onChange={() => {}} style={{ marginTop: '4px', accentColor: 'var(--teal)', width: '18px', height: '18px' }} />
              <span style={{ direction: 'ltr', textAlign: 'left', lineHeight: 1.6 }}>{item.en}</span>
              <span style={{ direction: 'rtl', textAlign: 'right', unicodeBidi: 'isolate', lineHeight: 1.6 }}>{item.ar}</span>
            </label>
          ))}
        </div>
        <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '14px', padding: '22px' }}>
          <div style={{ fontFamily: 'monospace', fontSize: '13px', color: 'var(--muted)', display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontWeight: 600 }}>
            <span>Progress / التقدّم</span>
            <span style={{ color: 'var(--teal)', fontWeight: 700 }}>{checkedCount} / 4</span>
          </div>
          <div style={{ height: '10px', background: 'var(--bg)', borderRadius: '99px', overflow: 'hidden', marginBottom: '20px' }}>
            <div style={{ height: '100%', background: 'linear-gradient(90deg, var(--blue) 0%, var(--teal) 100%)', width: `${progress}%`, borderRadius: '99px', transition: 'all 0.3s' }} />
          </div>
          <button
            onClick={handleComplete}
            disabled={completed}
            style={{ marginTop: '6px', width: '100%', padding: '14px', borderRadius: '12px', background: completed ? 'var(--surface-2)' : 'var(--teal)', color: completed ? 'var(--teal)' : '#0b1f1b', fontWeight: 800, fontSize: '15px', cursor: completed ? 'default' : 'pointer', border: completed ? '1px solid var(--teal)' : 'none' }}
          >
            {completed ? '✔️ Completed / اتعمل' : '✅ Mark as complete / علّمها كمكتملة'}
          </button>
          {completed && (
            <div style={{ display: 'block', marginTop: '14px', background: 'var(--teal-dim)', border: '1px solid ' + 'rgba(94,234,212,.4)', color: 'var(--teal)', padding: '14px 16px', borderRadius: '12px', textAlign: 'center', fontWeight: 700, fontSize: '15px' }}>
              🎉 On to component 07: Footer / يلا مكوّن ٧: Footer
            </div>
          )}
        </div>
      </section>

      {/* Navigation Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', marginTop: '26px', flexWrap: 'wrap' }}>
        <a href="/exercises/flexbox/cta-button" style={{ fontFamily: 'monospace', fontSize: '13px', color: 'var(--muted)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 16px', borderRadius: '10px', background: 'var(--surface-2)' }}>← 05 · CTA Button</a>
        <a href="/css/flexbox" style={{ fontFamily: 'monospace', fontSize: '13px', color: 'var(--muted)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 16px', borderRadius: '10px', background: 'var(--surface-2)' }}>🧩 All components</a>
        <a href="#" style={{ fontFamily: 'monospace', fontSize: '13px', color: 'var(--muted)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 16px', borderRadius: '10px', background: 'var(--surface-2)', opacity: 0.5, pointerEvents: 'none' }}>07 · Footer →</a>
      </div>

      <footer style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '13px', marginTop: '40px' }}>
        🧭 Component Library · Marketing Track · 6 of 8
      </footer>
      </div>
    </PageLayout>
  );
}
