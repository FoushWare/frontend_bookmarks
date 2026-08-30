'use client';

import { useState } from 'react';
import CodeEditor from '@/components/CodeEditor';
import PageLayout from '@/components/PageLayout';
import PageSidebar from '@/components/PageSidebar';
import { getTopicNavigation } from '@/data/navigation';

export default function CTAButtonExercise() {
  const [activeFrame, setActiveFrame] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
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
              05 / 08
            </span>
            <span style={{ fontFamily: 'monospace', fontSize: '12px', padding: '6px 12px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.1)', color: '#059669', border: '1px solid var(--border)', fontWeight: 600 }}>
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
                Complete CTA Button Design
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--muted)', margin: 0 }}>
                This is the final result you'll achieve by completing this exercise.
              </p>
            </div>
            
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
              <a href="#" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px', background: 'linear-gradient(135deg,var(--purple),var(--pink))', color: '#1c1533', fontWeight: 800, fontSize: '15px', padding: '14px 26px', borderRadius: '12px', border: 'none', textDecoration: 'none', cursor: 'pointer', boxShadow: '0 10px 24px -12px rgba(167,139,250,.6)', transition: 'all 0.15s' }}>Get Started →</a>
              <a href="#" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px', background: 'transparent', color: 'var(--text)', fontWeight: 700, fontSize: '15px', padding: '13px 26px', borderRadius: '12px', border: '1.5px solid var(--border)', textDecoration: 'none', cursor: 'pointer', transition: 'all 0.15s' }}>Learn more</a>
            </div>
          </div>
        )}

      {/* Eyebrow */}
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 700, color: 'var(--purple)', background: 'var(--purple-dim)', border: '1px solid ' + 'rgba(167,139,250,.35)', padding: '6px 14px', borderRadius: '999px', marginBottom: '18px' }}>
        🔘 Component Reference / مرجع مكوّن
      </div>

      {/* Tier Row */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '22px' }}>
        <span style={{ fontFamily: 'monospace', fontSize: '12px', padding: '5px 10px', borderRadius: '7px', border: '1px solid var(--border)', color: 'var(--teal)', borderColor: 'rgba(94,234,212,.35)', background: 'var(--teal-dim)' }}>Starter</span>
        <span style={{ fontFamily: 'monospace', fontSize: '12px', padding: '5px 10px', borderRadius: '7px', border: '1px solid var(--border)', color: 'var(--muted)' }}>2 Flex Containers</span>
        <span style={{ fontFamily: 'monospace', fontSize: '12px', padding: '5px 10px', borderRadius: '7px', border: '1px solid var(--border)', color: 'var(--muted)' }}>~10 min · ~١٠ دقايق</span>
      </div>

      {/* Title */}
      <h1 style={{ fontSize: '36px', fontWeight: 800, margin: '0 0 10px' }}>
        CTA <span style={{ color: 'var(--purple)' }}>Button</span>
      </h1>

      {/* Callout */}
      <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '14px', padding: '16px 18px', marginTop: '0', marginBottom: '26px', fontSize: '14px', color: '#dfe2f2' }}>
        <span style={{ fontSize: '19px', flex: '0 0 auto' }}>🪶</span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', lineHeight: 1.3 }}>
          <span>Lightest component in the track — a button is small on purpose. This page has fewer steps than the last four; that's expected, not a shortcut.</span>
          <span style={{ fontSize: '0.9em', color: 'var(--muted)', direction: 'rtl', textAlign: 'right', unicodeBidi: 'isolate' }}>أخف مكوّن في التراك — الزرار صغير ده مقصود. الصفحة دي خطوات أقل من الأربعة اللي فاتوا؛ ده متوقع، مش اختصار.</span>
        </div>
      </div>

      {/* Section 1: Project Brief */}
      <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '20px', padding: '34px 34px 38px', marginTop: '26px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--purple)', fontFamily: 'monospace', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>1</span>
          <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--purple)' }}>PROJECT BRIEF · بريف المشروع</span>
        </div>
        <h2 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 14px' }}>What you're building · اللي هتبنيه</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '26px', marginBottom: '20px' }}>
          <div style={{ direction: 'ltr', textAlign: 'left', fontSize: '15px', lineHeight: 1.8 }}>Build two button styles — a primary button (icon + label) and a secondary/ghost button — placed side by side in a wrapping row. This introduces centering content on <em>both</em> axes inside a small flex box, and using <code>flex-wrap</code> so a button group doesn't overflow on mobile.</div>
          <div style={{ direction: 'rtl', textAlign: 'right', unicodeBidi: 'isolate', fontSize: '15px', lineHeight: 1.8 }}>ابنِ شكلين زرار — زرار أساسي (أيقونة + نص) وزرار ثانوي/شفاف — جنب بعض في صف بيلف. ده بيقدّم توسيط المحتوى على المحورين مع بعض جوه صندوق flex صغير، واستخدام <code>flex-wrap</code> عشان مجموعة الأزرار متطلعش برّه الشاشة في الموبايل.</div>
        </div>
        <h2 style={{ fontSize: '17px', fontWeight: 800, margin: '0 0 14px' }}>Requirements · المتطلبات</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {[
            { en: 'Icon and label inside the primary button are centered both horizontally and vertically', ar: 'الأيقونة والنص جوه الزرار الأساسي متوسطين أفقيًا ورأسيًا' },
            { en: 'The two buttons sit in one row with consistent spacing, and wrap to stacked full-width on mobile', ar: 'الزرارين في صف واحد بمسافة ثابتة، ويلفوا لعمود بعرض كامل في الموبايل' },
            { en: 'The arrow flips direction correctly in the Arabic (RTL) button', ar: 'السهم بيتقلب اتجاهه صح في الزرار العربي (RTL)' },
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
          <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--purple)', fontFamily: 'monospace', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>2</span>
          <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--purple)' }}>DESIGN PREVIEW · معاينة التصميم</span>
        </div>
        <h2 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 14px' }}>Desktop, tablet, mobile — English & Arabic together</h2>
        <p style={{ color: 'var(--muted)', fontSize: '15px', margin: '0 0 18px' }}>Watch the button group at the mobile tab — it stacks instead of squeezing side by side.</p>
        
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
                background: activeFrame === tab.key ? 'var(--purple)' : 'var(--surface-2)',
                border: activeFrame === tab.key ? 'var(--purple)' : '1px solid var(--border)',
                color: activeFrame === tab.key ? '#1c1533' : 'var(--text)',
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
              <div style={{ display: 'flex', gap: '34px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '11px', padding: '3px 10px', borderRadius: '999px', color: 'var(--blue)', background: 'rgba(96,165,250,.12)', border: '1px solid ' + 'rgba(96,165,250,.3)' }}>EN · English</span>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                    <a href="#" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'linear-gradient(135deg,var(--purple),var(--pink))', color: '#1c1533', fontWeight: 800, fontSize: '14px', padding: '13px 22px', borderRadius: '11px', border: 'none', textDecoration: 'none', cursor: 'pointer', boxShadow: '0 10px 24px -12px rgba(167,139,250,.6)' }}>Get Started →</a>
                    <a href="#" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'transparent', color: 'var(--text)', fontWeight: 700, fontSize: '14px', padding: '12px 22px', borderRadius: '11px', border: '1.5px solid var(--border)', textDecoration: 'none', cursor: 'pointer' }}>Learn more</a>
                  </div>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '4px' }}>
                    <span style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--muted)', background: 'var(--surface-2)', border: '1px solid var(--border)', padding: '2px 8px', borderRadius: '6px', direction: 'ltr' }}>arrow-icon.svg</span>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '11px', padding: '3px 10px', borderRadius: '999px', color: 'var(--purple)', background: 'rgba(167,139,250,.12)', border: '1px solid ' + 'rgba(167,139,250,.3)' }}>AR · عربي</span>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', direction: 'rtl' }}>
                    <a href="#" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'linear-gradient(135deg,var(--purple),var(--pink))', color: '#1c1533', fontWeight: 800, fontSize: '14px', padding: '13px 22px', borderRadius: '11px', border: 'none', textDecoration: 'none', cursor: 'pointer', boxShadow: '0 10px 24px -12px rgba(167,139,250,.6)' }}>ابدأ الآن ←</a>
                    <a href="#" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'transparent', color: 'var(--text)', fontWeight: 700, fontSize: '14px', padding: '12px 22px', borderRadius: '11px', border: '1.5px solid var(--border)', textDecoration: 'none', cursor: 'pointer' }}>اعرف أكتر</a>
                  </div>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '4px' }}>
                    <span style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--muted)', background: 'var(--surface-2)', border: '1px solid var(--border)', padding: '2px 8px', borderRadius: '6px', direction: 'ltr' }}>arrow-icon.svg</span>
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
              <div style={{ display: 'flex', gap: '34px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '11px', padding: '3px 10px', borderRadius: '999px', color: 'var(--blue)', background: 'rgba(96,165,250,.12)', border: '1px solid ' + 'rgba(96,165,250,.3)' }}>EN</span>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                    <a href="#" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'linear-gradient(135deg,var(--purple),var(--pink))', color: '#1c1533', fontWeight: 800, fontSize: '14px', padding: '13px 22px', borderRadius: '11px', border: 'none', textDecoration: 'none', cursor: 'pointer', boxShadow: '0 10px 24px -12px rgba(167,139,250,.6)' }}>Get Started →</a>
                    <a href="#" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'transparent', color: 'var(--text)', fontWeight: 700, fontSize: '14px', padding: '12px 22px', borderRadius: '11px', border: '1.5px solid var(--border)', textDecoration: 'none', cursor: 'pointer' }}>Learn more</a>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '11px', padding: '3px 10px', borderRadius: '999px', color: 'var(--purple)', background: 'rgba(167,139,250,.12)', border: '1px solid ' + 'rgba(167,139,250,.3)' }}>AR</span>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', direction: 'rtl' }}>
                    <a href="#" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'linear-gradient(135deg,var(--purple),var(--pink))', color: '#1c1533', fontWeight: 800, fontSize: '14px', padding: '13px 22px', borderRadius: '11px', border: 'none', textDecoration: 'none', cursor: 'pointer', boxShadow: '0 10px 24px -12px rgba(167,139,250,.6)' }}>ابدأ الآن ←</a>
                    <a href="#" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'transparent', color: 'var(--text)', fontWeight: 700, fontSize: '14px', padding: '12px 22px', borderRadius: '11px', border: '1.5px solid var(--border)', textDecoration: 'none', cursor: 'pointer' }}>اعرف أكتر</a>
                  </div>
                </div>
              </div>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '15px', marginTop: '14px', marginBottom: 0 }}>No override needed — <code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '4px 10px', fontSize: '0.9em' }}>flex-wrap</code> already handles narrower widths.</p>
          </div>
        )}

        {/* Mobile Frame */}
        {activeFrame === 'mobile' && (
          <div>
            <div style={{ fontFamily: 'monospace', fontSize: '12px', color: 'var(--muted)', marginBottom: '12px' }}>frame width: 375px</div>
            <div style={{ background: 'var(--bg)', borderRadius: '16px', padding: '28px 16px', maxWidth: '375px', margin: '0 auto' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '34px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: '12px' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '11px', padding: '3px 10px', borderRadius: '999px', color: 'var(--blue)', background: 'rgba(96,165,250,.12)', border: '1px solid ' + 'rgba(96,165,250,.3)', alignSelf: 'center' }}>EN</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <a href="#" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'linear-gradient(135deg,var(--purple),var(--pink))', color: '#1c1533', fontWeight: 800, fontSize: '14px', padding: '13px 22px', borderRadius: '11px', border: 'none', textDecoration: 'none', cursor: 'pointer', boxShadow: '0 10px 24px -12px rgba(167,139,250,.6)', width: '100%' }}>Get Started →</a>
                    <a href="#" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'transparent', color: 'var(--text)', fontWeight: 700, fontSize: '14px', padding: '12px 22px', borderRadius: '11px', border: '1.5px solid var(--border)', textDecoration: 'none', cursor: 'pointer', width: '100%' }}>Learn more</a>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: '12px' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '11px', padding: '3px 10px', borderRadius: '999px', color: 'var(--purple)', background: 'rgba(167,139,250,.12)', border: '1px solid ' + 'rgba(167,139,250,.3)', alignSelf: 'center' }}>AR</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', direction: 'rtl' }}>
                    <a href="#" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'linear-gradient(135deg,var(--purple),var(--pink))', color: '#1c1533', fontWeight: 800, fontSize: '14px', padding: '13px 22px', borderRadius: '11px', border: 'none', textDecoration: 'none', cursor: 'pointer', boxShadow: '0 10px 24px -12px rgba(167,139,250,.6)', width: '100%' }}>ابدأ الآن ←</a>
                    <a href="#" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'transparent', color: 'var(--text)', fontWeight: 700, fontSize: '14px', padding: '12px 22px', borderRadius: '11px', border: '1.5px solid var(--border)', textDecoration: 'none', cursor: 'pointer', width: '100%' }}>اعرف أكتر</a>
                  </div>
                </div>
              </div>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '15px', marginTop: '14px', marginBottom: 0 }}>Mobile override: both buttons become <code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '4px 10px', fontSize: '0.9em' }}>width:100%</code> and stack vertically.</p>
          </div>
        )}
      </section>

      {/* Section 3: Assets */}
      <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '20px', padding: '34px 34px 38px', marginTop: '26px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--purple)', fontFamily: 'monospace', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>3</span>
          <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--purple)' }}>ASSETS · الأصول</span>
        </div>
        <h2 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 16px' }}>Real files, included</h2>
        <p style={{ color: 'var(--muted)', fontSize: '15px', margin: '0 0 24px' }}>Just one asset this time — the button gradients are pure CSS.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', marginTop: '6px' }}>
          {[
            { name: 'Arrow icon', ar: 'أيقونة السهم', file: 'assets/arrow-icon.svg', icon: '→' },
          ].map((asset) => (
            <div key={asset.name} style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '14px', padding: '16px' }}>
              <div style={{ background: 'var(--bg)', borderRadius: '10px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px', fontSize: '24px' }}>{asset.icon}</div>
              <h4 style={{ margin: '0 0 4px', fontSize: '14px', fontWeight: 600 }}>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', lineHeight: 1.3 }}>
                  <span>{asset.name}</span>
                  <span style={{ fontSize: '0.85em', color: 'var(--muted)', direction: 'rtl', textAlign: 'right' }}>{asset.ar}</span>
                </span>
              </h4>
              <span style={{ fontFamily: 'monospace', fontSize: '11.5px', color: 'var(--purple)', direction: 'ltr', display: 'inline-block', marginTop: '6px', padding: '4px 8px', background: 'var(--bg)', borderRadius: '6px' }}>{asset.file}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Code Editor */}
      <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '20px', padding: '34px 34px 38px', marginTop: '26px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--purple)', fontFamily: 'monospace', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>4</span>
          <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--purple)' }}>CODE EDITOR · محرر الكود</span>
        </div>
        <h2 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 16px' }}>Try it yourself</h2>
        <p style={{ color: 'var(--muted)', fontSize: '15px', margin: '0 0 24px' }}>
          Write HTML, CSS, and JavaScript below to build the CTA button group. The preview updates in real-time.
        </p>
        <CodeEditor
          initialHtml={`<div class="btn-group">
  <a class="btn-primary" href="#">Get Started →</a>
  <a class="btn-secondary" href="#">Learn more</a>
</div>`}
          initialCss={`.btn-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: linear-gradient(135deg, #a78bfa, #f472b6);
  color: #1c1533;
  font-weight: 800;
  font-size: 14px;
  padding: 13px 22px;
  border-radius: 11px;
  border: none;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 10px 24px -12px rgba(167,139,250,0.6);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 28px -12px rgba(167,139,250,0.75);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: transparent;
  color: #eef0f8;
  font-weight: 700;
  font-size: 14px;
  padding: 12px 22px;
  border-radius: 11px;
  border: 1.5px solid rgba(255,255,255,0.09);
  text-decoration: none;
  cursor: pointer;
}

.btn-secondary:hover {
  border-color: #a78bfa;
  color: #a78bfa;
}`}
          initialJs={`// Add interactivity here
const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');

buttons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Button clicked!');
  });
  
  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'translateY(-2px)';
    btn.style.transition = 'transform 0.2s ease';
  });
  
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translateY(0)';
  });
});`}
          height="600px"
        />
      </section>

      {/* Section 4: Solution */}
      {/* <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '40px', marginTop: '32px', boxShadow: '0 4px 20px -8px rgba(0,0,0,0.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--purple) 0%, var(--pink) 100%)', color: '#2d1a3d', fontFamily: 'monospace', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(167,139,250,0.3)' }}>4</span>
            <span style={{ fontSize: '14px', fontWeight: 700', color: 'var(--purple)', letterSpacing: '0.5px' }}>SOLUTION</span>
          </div>
          <button
            onClick={() => setShowSolution(!showSolution)}
            style={{
              padding: '8px 16px',
              background: showSolution ? 'var(--surface-2)' : 'var(--purple)',
              color: showSolution ? 'var(--purple)' : '#2d1a3d',
              border: showSolution ? '1px solid var(--purple)' : 'none',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '13px',
              cursor: 'pointer',
            }}
          >
            {showSolution ? '✕ Hide' : '👁️ Show Solution'}
          </button>
        </div>
        <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 16px', background: 'linear-gradient(135deg, var(--text) 0%, var(--purple) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Compare with the solution</h2>
        <p style={{ color: 'var(--muted)', fontSize: '15px', margin: '0 0 24px', lineHeight: 1.6 }}>
          Stuck? Click "Show Solution" to see the complete code for this exercise. Compare it with your work without losing your progress.
        </p>

        {showSolution && (
          <CodeEditor
            initialHtml={`<div class="button-container">
  <button class="cta-button primary">
    <span>Get Started Free</span>
    <span class="arrow">→</span>
  </button>
  <button class="cta-button secondary">
    Learn More
  </button>
</div>`}
            initialCss={`.button-container {
  display: flex;
  gap: 16px;
  align-items: center;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}

.cta-button.primary {
  background: linear-gradient(135deg, #a78bfa 0%, #f472b6 100%);
  color: #2d1a3d;
}

.cta-button.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(167,139,250,0.4);
}

.cta-button.secondary {
  background: transparent;
  color: #eef0f8;
  border: 2px solid rgba(255,255,255,0.2);
}

.cta-button.secondary:hover {
  background: rgba(255,255,255,0.1);
  border-color: rgba(255,255,255,0.3);
}

.arrow {
  transition: transform 0.2s ease;
}

.cta-button:hover .arrow {
  transform: translateX(4px);
}

[dir="rtl"] .arrow {
  transform: scaleX(-1);
}

[dir="rtl"] .cta-button:hover .arrow {
  transform: scaleX(-1) translateX(4px);
}`}
            initialJs={`// Add button interactions
const buttons = document.querySelectorAll('.cta-button');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const type = btn.classList.contains('primary') ? 'Primary' : 'Secondary';
    alert(\`\${type} button clicked!\`);
  });
});`}
            height="600px"
            readOnly={true}
          />
        )}
      </section> */}

      {/* Section 4: Guides */}
      <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '20px', padding: '34px 34px 38px', marginTop: '26px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--purple)', fontFamily: 'monospace', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>4</span>
          <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--purple)' }}>GUIDES · الشرح</span>
        </div>

        <h2 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 24px' }}>Anatomy</h2>
        <div style={{ display: 'flex', gap: '26px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <div style={{ background: 'var(--bg)', borderRadius: '16px', padding: '44px 30px', flex: '1 1 340px', display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', position: 'relative' }}>
              <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--purple)', color: 'var(--purple)', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap', top: '-6px', left: '14px' }}>1 · primary</div>
              <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--purple)', color: 'var(--purple)', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap', top: '-6px', right: '10px' }}>2 · secondary</div>
              <a href="#" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'linear-gradient(135deg,var(--purple),var(--pink))', color: '#1c1533', fontWeight: 800, fontSize: '14px', padding: '13px 22px', borderRadius: '11px', border: 'none', textDecoration: 'none', cursor: 'pointer', boxShadow: '0 10px 24px -12px rgba(167,139,250,.6)' }}>Get Started →</a>
              <a href="#" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'transparent', color: 'var(--text)', fontWeight: 700, fontSize: '14px', padding: '12px 22px', borderRadius: '11px', border: '1.5px solid var(--border)', textDecoration: 'none', cursor: 'pointer' }}>Learn more</a>
            </div>
          </div>
          <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              { en: '<b>Button group</b> — Flex row, <code>gap</code>, <code>flex-wrap:wrap</code>', ar: '<b>مجموعة الأزرار</b> — Flex أفقي، <code>gap</code>، <code>flex-wrap:wrap</code>' },
              { en: '<b>1. Primary button</b> — Flex row, <code>justify-content:center</code> + <code>align-items:center</code> together (new: centering both axes at once)', ar: '<b>1. الزرار الأساسي</b> — Flex أفقي، <code>justify-content:center</code> مع <code>align-items:center</code> مع بعض (جديد: توسيط المحورين مرة واحدة)' },
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
            <tr><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}>Primary / الأساسي</td><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}>Padding / الحشو</td><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}><code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '1px 7px', fontSize: '0.88em' }}>13px 22px</code></td></tr>
            <tr><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}>Primary / الأساسي</td><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}>justify + align</td><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}><code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '1px 7px', fontSize: '0.88em' }}>center / center</code></td></tr>
            <tr><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}>Primary / الأساسي</td><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}>Gap (icon↔text)</td><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}><code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '1px 7px', fontSize: '0.88em' }}>8px</code></td></tr>
            <tr><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}>Primary / الأساسي</td><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}>Background / الخلفية</td><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}><span style={{ display: 'inline-block', width: '14px', height: '14px', borderRadius: '4px', verticalAlign: '-2px', marginRight: '6px', border: '1px solid var(--border)', background: '#a78bfa' }}></span><code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '1px 7px', fontSize: '0.88em' }}>gradient purple</code></td></tr>
            <tr><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}>Secondary / الثانوي</td><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}>Background / الخلفية</td><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}><code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '1px 7px', fontSize: '0.88em' }}>transparent</code>, 1.5px border</td></tr>
            <tr><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}>Group / المجموعة</td><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}>Gap / flex-wrap</td><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}><code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '1px 7px', fontSize: '0.88em' }}>12px</code> / <code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '1px 7px', fontSize: '0.88em' }}>wrap</code></td></tr>
          </tbody>
        </table>

        <h2 style={{ fontSize: '24px', fontWeight: 800, margin: '32px 0 24px' }}>Build steps</h2>
        {[
          { 
            title: 'Icon + label, centered on both axes',
            en: 'Inside the primary button, the icon and text sit next to each other, centered.',
            ar: 'جوه الزرار الأساسي، الأيقونة والنص جنب بعض، متوسطين.',
            code: 'display:inline-flex; align-items:center; justify-content:center; gap:8px;',
            hintEn: 'using both together is new: align-items handles the cross axis, justify-content handles the main axis, at the same time.',
            hintAr: 'استخدامهم مع بعض جديد: align-items بيتحكم في المحور العرضي، وjustify-content في المحور الرئيسي، في نفس الوقت.'
          },
          { 
            title: 'Group the two buttons in a wrapping row',
            en: 'Place both buttons in a row with spacing that doesn\'t overflow on narrow screens.',
            ar: 'حط الزرارين في صف بمسافة ما تفيضش في الشاشات الضيقة.',
            code: 'display:flex; gap:12px; flex-wrap:wrap;',
            hintEn: 'new here: flex-wrap:wrap lets items drop to a new line instead of shrinking or overflowing.',
            hintAr: 'جديد هنا: flex-wrap:wrap بيخلي العناصر تنزل سطر جديد بدل ما تتقلص أو تفيض.'
          },
          { 
            title: 'Full-width buttons on mobile',
            en: 'On small screens, each button should become full width instead of shrinking to fit its text.',
            ar: 'في الشاشات الصغيرة، كل زرار لازم يبقى عرض كامل بدل ما يتقلص على قد نصه.',
            code: '.btn-group{flex-direction:column;} .btn-primary,.btn-secondary{width:100%;}',
            hintEn: 'In a mobile media query',
            hintAr: 'جوه media query الموبايل'
          },
        ].map((step, i) => (
          <div key={i} style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '14px', padding: '20px 22px', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
              <span style={{ width: '30px', height: '30px', borderRadius: '9px', background: 'var(--purple)', color: '#1c1533', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto', fontSize: '14px' }}>{i + 1}</span>
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

      {/* Section 5: Discussion */}
      <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '20px', padding: '34px 34px 38px', marginTop: '26px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--purple)', fontFamily: 'monospace', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>6</span>
          <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--purple)' }}>DISCUSSION · نقاش وأسئلة</span>
        </div>
        <h2 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 24px' }}>Common questions</h2>
        {[
          { 
            q: { en: 'Do I need both justify-content and align-items if the button only has one line of content?', ar: 'محتاج justify-content وalign-items مع بعض لو الزرار سطر واحد بس؟' },
            a: { en: 'Padding alone often looks centered by coincidence. Setting both explicitly keeps the button correct even if content, icon size, or padding changes later.', ar: 'الـ padding لوحده ممكن يبان متوسط بالصدفة. تحديد الاتنين بشكل صريح بيخلي الزرار صح حتى لو المحتوى أو حجم الأيقونة أو الـ padding اتغيّر بعدين.' }
          },
          { 
            q: { en: 'What\'s the difference between flex-wrap here and flex-shrink from earlier cards?', ar: 'إيه الفرق بين flex-wrap هنا وflex-shrink من الكروت اللي فاتت؟' },
            a: { en: 'flex-shrink squeezes items smaller to fit one line. flex-wrap instead lets items drop to a new line at their normal size — better here since shrinking a button\'s text would hurt readability.', ar: 'flex-shrink بيقصّر العناصر عشان تتظبط في سطر واحد. flex-wrap بدل كده بيخلي العناصر تنزل سطر جديد بحجمها الطبيعي — أحسن هنا لإن تقصير نص الزرار هيضر وضوحه.' }
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
              <span style={{ fontFamily: 'monospace', color: 'var(--purple)', flex: '0 0 auto', fontSize: '18px', transition: '0.2s', transform: openAccordions[i] ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
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
          <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--purple)', fontFamily: 'monospace', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>7</span>
          <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--purple)' }}>PROJECT COMPLETION · إنهاء المشروع</span>
        </div>
        <h2 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 24px' }}>Self-check checklist</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '18px 0' }}>
          {[
            { en: 'Icon and label are centered on both axes inside the primary button', ar: 'الأيقونة والنص متوسطين على المحورين جوه الزرار الأساسي' },
            { en: 'Button group wraps instead of overflowing on narrow widths', ar: 'مجموعة الأزرار بتلف بدل ما تفيض في العرض الضيق' },
            { en: 'Both buttons become full-width and stacked on mobile', ar: 'الزرارين بيبقوا عرض كامل ومرصوصين في الموبايل' },
            { en: 'Arrow flips direction correctly in the Arabic (RTL) button', ar: 'السهم بيتقلب صح في الزرار العربي (RTL)' },
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
            <div style={{ height: '100%', background: 'linear-gradient(90deg, var(--purple) 0%, var(--teal) 100%)', width: `${progress}%`, borderRadius: '99px', transition: 'all 0.3s' }} />
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
              🎉 On to component 06: Navigation Bar / يلا مكوّن ٦: Navigation Bar
            </div>
          )}
        </div>
      </section>

      {/* Navigation Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', marginTop: '26px', flexWrap: 'wrap' }}>
        <a href="/exercises/flexbox/pricing-card" style={{ fontFamily: 'monospace', fontSize: '13px', color: 'var(--muted)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 16px', borderRadius: '10px', background: 'var(--surface-2)' }}>← 04 · Pricing Card</a>
        <a href="/css/flexbox" style={{ fontFamily: 'monospace', fontSize: '13px', color: 'var(--muted)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 16px', borderRadius: '10px', background: 'var(--surface-2)' }}>🧩 All components</a>
        <a href="#" style={{ fontFamily: 'monospace', fontSize: '13px', color: 'var(--muted)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 16px', borderRadius: '10px', background: 'var(--surface-2)', opacity: 0.5, pointerEvents: 'none' }}>06 · Navigation Bar →</a>
      </div>

      <footer style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '13px', marginTop: '40px' }}>
        🔘 Component Library · Marketing Track · 5 of 8
      </footer>
      </div>
    </PageLayout>
  );
}
