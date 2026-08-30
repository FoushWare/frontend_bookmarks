'use client';

import { useState } from 'react';
import CodeEditor from '@/components/CodeEditor';
import PageLayout from '@/components/PageLayout';
import PageSidebar from '@/components/PageSidebar';
import { getTopicNavigation } from '@/data/navigation';

export default function FeatureCardExercise() {
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
    setCheckedItems({ 0: true, 1: true, 2: true, 3: true, 4: true });
    setCompleted(true);
  };

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const progress = (checkedCount / 5) * 100;

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
              03 / 08
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
                Complete Feature Card Design
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--muted)', margin: 0 }}>
                This is the final result you'll achieve by completing this exercise.
              </p>
            </div>
            
            <div style={{ 
              background: '#212844', 
              border: '1px solid rgba(255,255,255,.09)', 
              borderRadius: '16px', 
              padding: '32px', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'flex-start', 
              gap: '16px', 
              maxWidth: '300px',
              margin: '0 auto',
              boxShadow: '0 20px 40px -20px rgba(0,0,0,.6)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'linear-gradient(135deg, var(--coral) 0%, #ff8a6b 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto', fontSize: '24px' }}>⚡</div>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, margin: 0 }}>Lightning-fast setup</h3>
              <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>Connect your store in minutes — no code required.</p>
              <a href="#" style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 700, color: 'var(--coral)', textDecoration: 'none' }}>Learn more <span style={{ transition: '0.15s' }}>→</span></a>
            </div>
          </div>
        )}

      {/* Header */}
      <div style={{ marginBottom: '40px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 700, color: 'var(--coral)', background: 'var(--coral-dim)', border: '1px solid ' + 'rgba(255,107,74,.35)', padding: '6px 14px', borderRadius: '999px', marginBottom: '16px' }}>
          <span>🎯</span>
          <span>Component Reference</span>
          <span style={{ opacity: 0.5 }}>|</span>
          <span style={{ fontSize: '0.9em', color: 'var(--muted)', direction: 'rtl' }}>مرجع مكوّن</span>
        </div>
        <h1 style={{ fontSize: '48px', fontWeight: 800, margin: '0 0 12px', background: 'linear-gradient(135deg, var(--text) 0%, var(--coral) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          Feature Card
        </h1>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '12px', padding: '6px 12px', borderRadius: '8px', border: '1px solid var(--border)', color: 'var(--teal)', borderColor: 'rgba(94,234,212,.35)', background: 'var(--teal-dim)', fontWeight: 600 }}>3 Flex Containers</span>
          <span style={{ fontFamily: 'monospace', fontSize: '12px', padding: '6px 12px', borderRadius: '8px', border: '1px solid var(--border)', color: 'var(--muted)', fontWeight: 600 }}>~15 min · ~١٥ دقيقة</span>
        </div>
      </div>

      {/* Section 1: Project Brief */}
      <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '40px', marginTop: '0', boxShadow: '0 4px 20px -8px rgba(0,0,0,0.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--coral) 0%, var(--pink) 100%)', color: '#3a1607', fontFamily: 'monospace', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(255,107,74,0.3)' }}>1</span>
          <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--coral)', letterSpacing: '0.5px' }}>PROJECT BRIEF · بريف المشروع</span>
        </div>
        <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 16px', background: 'linear-gradient(135deg, var(--text) 0%, var(--coral) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '8px', background: 'var(--coral)', color: '#3a1607', marginRight: '12px' }}>EN</span>
          What you're building
          <span style={{ fontFamily: 'monospace', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '8px', background: 'var(--pink)', color: '#1c1533', marginRight: '12px' }}>AR</span>
          <span style={{ direction: 'rtl', unicodeBidi: 'isolate' }}>اللي هتبنيه</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '24px' }}>
          <div style={{ direction: 'ltr', textAlign: 'left', fontSize: '15px', lineHeight: 1.8, color: '#dfe2f2' }}>Build a single feature card: an icon badge, a title, a short description, and a "Learn more" link — the block that repeats 3× side by side in a Features Section (Grid). This is the simplest card so far, but introduces a link row with a hover-animated arrow, and an icon+title row sitting above the paragraph.</div>
          <div style={{ direction: 'rtl', textAlign: 'right', unicodeBidi: 'isolate', fontSize: '15px', lineHeight: 1.8, color: '#dfe2f2' }}>ابنِ كارت ميزة واحد: أيقونة، عنوان، وصف قصير، ورابط "اعرف أكتر" — البلوك اللي بيتكرر ٣ مرات جنب بعض في Features Section (Grid). ده أبسط كارت لحد دلوقتي، بس بيقدّم صف رابط بسهم بيتحرك عند الـ hover، وصف أيقونة+عنوان فوق الفقرة.</div>
        </div>
        <h2 style={{ fontSize: '18px', fontWeight: 700, margin: '24px 0 16px', color: 'var(--coral)' }}>Requirements · المتطلبات</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {[
            { en: 'Icon badge + title + description + link, all left-aligned', ar: 'أيقونة + عنوان + وصف + رابط، كلهم محاذيين لليسار' },
            { en: 'Icon badge is fixed size (44×44px) and never shrinks', ar: 'الأيقونة حجم ثابت (٤٤×٤٤px) ومش بتتقلص' },
            { en: 'Link stays at the bottom regardless of description length', ar: 'الرابط ثابت في القاع مهما كان طول الوصف' },
            { en: 'Arrow animates on hover, flips direction in RTL', ar: 'السهم بيتحرك عند الـ hover وبيتقلب اتجاهه في RTL' },
            { en: 'Works at desktop, tablet, mobile; supports LTR and RTL', ar: 'شغالة في ديسكتوب وتابلت وموبايل؛ بتدعم LTR وRTL' },
          ].map((req, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', padding: '16px 0', borderBottom: '1px solid var(--border)', alignItems: 'start' }}>
              <div style={{ direction: 'ltr', textAlign: 'left', fontSize: '14px', lineHeight: 1.6 }}>{req.en}</div>
              <div style={{ direction: 'rtl', textAlign: 'right', unicodeBidi: 'isolate', fontSize: '14px', lineHeight: 1.6 }}>{req.ar}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Design Preview */}
      <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '40px', marginTop: '32px', boxShadow: '0 4px 20px -8px rgba(0,0,0,0.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--coral) 0%, var(--pink) 100%)', color: '#3a1607', fontFamily: 'monospace', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(255,107,74,0.3)' }}>2</span>
          <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--coral)', letterSpacing: '0.5px' }}>DESIGN PREVIEW · معاينة التصميم</span>
        </div>
        <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 16px', background: 'linear-gradient(135deg, var(--text) 0%, var(--coral) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Desktop, tablet, mobile — English & Arabic together</h2>
        <p style={{ color: 'var(--muted)', fontSize: '15px', margin: '0 0 24px', lineHeight: 1.6 }}>
          Same rule as the Testimonial Card: both languages always visible, no toggle.
        </p>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '24px', flexWrap: 'wrap' }}>
          {[
            { id: 'desktop', label: 'Desktop', width: '≥1024px', icon: '🖥️' },
            { id: 'tablet', label: 'Tablet', width: '768px', icon: '📱' },
            { id: 'mobile', label: 'Mobile', width: '375px', icon: '📱' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFrame(tab.id as any)}
              style={{
                fontFamily: 'monospace',
                background: activeFrame === tab.id ? 'linear-gradient(135deg, var(--coral) 0%, var(--pink) 100%)' : 'var(--surface-2)',
                border: activeFrame === tab.id ? 'none' : '1px solid var(--border)',
                color: activeFrame === tab.id ? '#3a1607' : 'var(--text)',
                padding: '12px 20px',
                borderRadius: '12px',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: activeFrame === tab.id ? 700 : 500,
                transition: 'all 0.2s ease',
                boxShadow: activeFrame === tab.id ? '0 4px 12px rgba(255,107,74,0.3)' : 'none',
              }}
            >
              {tab.icon} {tab.label} <span style={{ opacity: 0.6, marginLeft: '4px' }}>{tab.width}</span>
            </button>
          ))}
        </div>

        {/* Preview Frames */}
        {activeFrame === 'desktop' && (
          <div style={{ background: 'var(--bg)', borderRadius: '16px', padding: '36px 24px' }}>
            <div style={{ fontFamily: 'monospace', fontSize: '12px', color: 'var(--muted)', marginBottom: '12px' }}>frame width: 1024px+</div>
            <div style={{ display: 'flex', gap: '22px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontFamily: 'monospace', fontSize: '11px', padding: '3px 10px', borderRadius: '999px', color: 'var(--blue)', background: 'rgba(96,165,250,.12)', border: '1px solid ' + 'rgba(96,165,250,.3)' }}>EN · English</span>
                <div style={{ width: '260px', background: '#212844', border: '1px solid ' + 'rgba(255,255,255,.09)', borderRadius: '16px', padding: '26px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '14px', boxShadow: '0 20px 40px -20px rgba(0,0,0,.6)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'linear-gradient(135deg, var(--coral) 0%, #ff8a6b 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto', fontSize: '20px' }}>⚡</div>
                  </div>
                  <h3 style={{ fontSize: '15.5px', fontWeight: 800, margin: 0 }}>Lightning-fast setup</h3>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>Connect your store in minutes — no code required.</p>
                  <a href="#" style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 700, color: 'var(--coral)', textDecoration: 'none' }}>Learn more <span style={{ transition: '0.15s' }}>→</span></a>
                </div>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '4px' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--muted)', background: 'var(--surface-2)', border: '1px solid var(--border)', padding: '2px 8px', borderRadius: '6px', direction: 'ltr' }}>feature-icon.svg</span>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontFamily: 'monospace', fontSize: '11px', padding: '3px 10px', borderRadius: '999px', color: 'var(--purple)', background: 'rgba(167,139,250,.12)', border: '1px solid ' + 'rgba(167,139,250,.3)' }}>AR · عربي</span>
                <div style={{ width: '260px', background: '#212844', border: '1px solid ' + 'rgba(255,255,255,.09)', borderRadius: '16px', padding: '26px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '14px', direction: 'rtl', boxShadow: '0 20px 40px -20px rgba(0,0,0,.6)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'linear-gradient(135deg, var(--coral) 0%, #ff8a6b 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto', fontSize: '20px' }}>⚡</div>
                  </div>
                  <h3 style={{ fontSize: '15.5px', fontWeight: 800, margin: 0 }}>إعداد سريع كالبرق</h3>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>اربط متجرك في دقايق — من غير كود.</p>
                  <a href="#" style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 700, color: 'var(--coral)', textDecoration: 'none' }}>اعرف أكتر <span style={{ transition: '0.15s', display: 'inline-block', transform: 'scaleX(-1)' }}>→</span></a>
                </div>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '4px' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--muted)', background: 'var(--surface-2)', border: '1px solid var(--border)', padding: '2px 8px', borderRadius: '6px', direction: 'ltr' }}>feature-icon.svg</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeFrame === 'tablet' && (
          <div style={{ background: 'var(--bg)', borderRadius: '16px', padding: '36px 24px' }}>
            <div style={{ fontFamily: 'monospace', fontSize: '12px', color: 'var(--muted)', marginBottom: '12px' }}>frame width: 768px</div>
            <div style={{ maxWidth: '620px', margin: '0 auto', display: 'flex', gap: '22px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontFamily: 'monospace', fontSize: '11px', padding: '3px 10px', borderRadius: '999px', color: 'var(--blue)', background: 'rgba(96,165,250,.12)', border: '1px solid ' + 'rgba(96,165,250,.3)' }}>EN</span>
                <div style={{ width: '220px', background: '#212844', border: '1px solid ' + 'rgba(255,255,255,.09)', borderRadius: '16px', padding: '26px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '14px', boxShadow: '0 20px 40px -20px rgba(0,0,0,.6)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'linear-gradient(135deg, var(--coral) 0%, #ff8a6b 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto', fontSize: '20px' }}>⚡</div>
                  </div>
                  <h3 style={{ fontSize: '15.5px', fontWeight: 800, margin: 0 }}>Lightning-fast setup</h3>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>Connect your store in minutes.</p>
                  <a href="#" style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 700, color: 'var(--coral)', textDecoration: 'none' }}>Learn more <span style={{ transition: '0.15s' }}>→</span></a>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontFamily: 'monospace', fontSize: '11px', padding: '3px 10px', borderRadius: '999px', color: 'var(--purple)', background: 'rgba(167,139,250,.12)', border: '1px solid ' + 'rgba(167,139,250,.3)' }}>AR</span>
                <div style={{ width: '220px', background: '#212844', border: '1px solid ' + 'rgba(255,255,255,.09)', borderRadius: '16px', padding: '26px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '14px', direction: 'rtl', boxShadow: '0 20px 40px -20px rgba(0,0,0,.6)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'linear-gradient(135deg, var(--coral) 0%, #ff8a6b 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto', fontSize: '20px' }}>⚡</div>
                  </div>
                  <h3 style={{ fontSize: '15.5px', fontWeight: 800, margin: 0 }}>إعداد سريع كالبرق</h3>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>اربط متجرك في دقايق.</p>
                  <a href="#" style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 700, color: 'var(--coral)', textDecoration: 'none' }}>اعرف أكتر <span style={{ transition: '0.15s', display: 'inline-block', transform: 'scaleX(-1)' }}>→</span></a>
                </div>
              </div>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '15px', marginTop: '14px', marginBottom: 0 }}>Tablet override: card width drops to <code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '4px 10px', fontSize: '0.9em' }}>220px</code>.</p>
          </div>
        )}

        {activeFrame === 'mobile' && (
          <div style={{ background: 'var(--bg)', borderRadius: '16px', padding: '24px 16px', maxWidth: '375px', margin: '0 auto' }}>
            <div style={{ fontFamily: 'monospace', fontSize: '12px', color: 'var(--muted)', marginBottom: '12px' }}>frame width: 375px</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: '10px' }}>
                <span style={{ fontFamily: 'monospace', fontSize: '11px', padding: '3px 10px', borderRadius: '999px', color: 'var(--blue)', background: 'rgba(96,165,250,.12)', border: '1px solid ' + 'rgba(96,165,250,.3)', alignSelf: 'center' }}>EN</span>
                <div style={{ width: '100%', background: '#212844', border: '1px solid ' + 'rgba(255,255,255,.09)', borderRadius: '16px', padding: '26px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '14px', boxShadow: '0 20px 40px -20px rgba(0,0,0,.6)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'linear-gradient(135deg, var(--coral) 0%, #ff8a6b 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto', fontSize: '20px' }}>⚡</div>
                  </div>
                  <h3 style={{ fontSize: '15.5px', fontWeight: 800, margin: 0 }}>Lightning-fast setup</h3>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>Connect your store in minutes.</p>
                  <a href="#" style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 700, color: 'var(--coral)', textDecoration: 'none' }}>Learn more <span style={{ transition: '0.15s' }}>→</span></a>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: '10px' }}>
                <span style={{ fontFamily: 'monospace', fontSize: '11px', padding: '3px 10px', borderRadius: '999px', color: 'var(--purple)', background: 'rgba(167,139,250,.12)', border: '1px solid ' + 'rgba(167,139,250,.3)', alignSelf: 'center' }}>AR</span>
                <div style={{ width: '100%', background: '#212844', border: '1px solid ' + 'rgba(255,255,255,.09)', borderRadius: '16px', padding: '26px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '14px', direction: 'rtl', boxShadow: '0 20px 40px -20px rgba(0,0,0,.6)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'linear-gradient(135deg, var(--coral) 0%, #ff8a6b 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto', fontSize: '20px' }}>⚡</div>
                  </div>
                  <h3 style={{ fontSize: '15.5px', fontWeight: 800, margin: 0 }}>إعداد سريع كالبرق</h3>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>اربط متجرك في دقايق.</p>
                  <a href="#" style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 700, color: 'var(--coral)', textDecoration: 'none' }}>اعرف أكتر <span style={{ transition: '0.15s', display: 'inline-block', transform: 'scaleX(-1)' }}>→</span></a>
                </div>
              </div>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '15px', marginTop: '14px', marginBottom: 0 }}>Mobile override: card becomes <code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '4px 10px', fontSize: '0.9em' }}>width: 100%</code>, stacks full-width.</p>
          </div>
        )}
      </section>

      {/* Section 3: Code Editor */}
      <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '40px', marginTop: '32px', boxShadow: '0 4px 20px -8px rgba(0,0,0,0.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--coral) 0%, var(--pink) 100%)', color: '#3a1607', fontFamily: 'monospace', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(255,107,74,0.3)' }}>3</span>
          <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--coral)', letterSpacing: '0.5px' }}>CODE EDITOR · محرر الكود</span>
        </div>
        <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 16px', background: 'linear-gradient(135deg, var(--text) 0%, var(--coral) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Try it yourself</h2>
        <p style={{ color: 'var(--muted)', fontSize: '15px', margin: '0 0 24px', lineHeight: 1.6 }}>
          Write HTML, CSS, and JavaScript below to build the feature card. The preview updates in real-time.
        </p>
        <CodeEditor
          initialHtml={`<div class="feature-card">
  <div class="icon-badge">
    <span class="icon">⚡</span>
  </div>
  <h3 class="card-title">Lightning-fast setup</h3>
  <p class="card-description">Connect your store in minutes — no code required.</p>
  <a href="#" class="card-link">Learn more →</a>
</div>`}
          initialCss={`.feature-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  width: 260px;
  background: #212844;
  border: 1px solid rgba(255,255,255,0.09);
  border-radius: 16px;
  padding: 26px;
}

.icon-badge {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 0 0 auto;
}

.icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: linear-gradient(135deg, #ff6b4a 0%, #ff8a6b 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.card-title {
  font-size: 15.5px;
  font-weight: 800;
  margin: 0;
  color: #eef0f8;
}

.card-description {
  font-size: 13px;
  color: #8d93ac;
  line-height: 1.65;
  margin: 0;
}

.card-link {
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 700;
  color: #ff6b4a;
  text-decoration: none;
}

.card-link:hover {
  opacity: 0.8;
}`}
          initialJs={`// Add interactivity here
const card = document.querySelector('.feature-card');
const link = card.querySelector('.card-link');

card.addEventListener('mouseenter', () => {
  card.style.transform = 'translateY(-4px)';
  card.style.transition = 'transform 0.2s ease';
});

card.addEventListener('mouseleave', () => {
  card.style.transform = 'translateY(0)';
});

link.addEventListener('click', (e) => {
  e.preventDefault();
  alert('Learn more clicked!');
});`}
          height="600px"
        />
      </section>

      {/* Section 4: Solution */}
      {/* <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '40px', marginTop: '32px', boxShadow: '0 4px 20px -8px rgba(0,0,0,0.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--yellow) 0%, var(--coral) 100%)', color: '#3a3018', fontFamily: 'monospace', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(255,209,102,0.3)' }}>4</span>
            <span style={{ fontSize: '14px', fontWeight: 700', color: 'var(--yellow)', letterSpacing: '0.5px' }}>SOLUTION</span>
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
        <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 16px', background: 'linear-gradient(135deg, var(--text) 0%, var(--yellow) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Compare with the solution</h2>
        <p style={{ color: 'var(--muted)', fontSize: '15px', margin: '0 0 24px', lineHeight: 1.6 }}>
          Stuck? Click "Show Solution" to see the complete code for this exercise. Compare it with your work without losing your progress.
        </p>

        {showSolution && (
          <CodeEditor
            initialHtml={`<div class="feature-card">
  <div class="icon-badge">
    <span class="icon">⚡</span>
  </div>
  <h3 class="card-title">Lightning-fast setup</h3>
  <p class="card-description">Connect your store in minutes — no code required.</p>
  <a href="#" class="card-link">Learn more →</a>
</div>`}
            initialCss={`.feature-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  width: 260px;
  background: #212844;
  border: 1px solid rgba(255,255,255,0.09);
  border-radius: 16px;
  padding: 26px;
}

.icon-badge {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 0 0 auto;
}

.icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: linear-gradient(135deg, #ff6b4a 0%, #ff8a6b 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.card-title {
  font-size: 15.5px;
  font-weight: 800;
  margin: 0;
  color: #eef0f8;
}

.card-description {
  font-size: 14px;
  color: #8d93ac;
  line-height: 1.65;
  margin: 0;
}

.card-link {
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 700;
  color: #ff6b4a;
  text-decoration: none;
}

.card-link:hover {
  opacity: 0.8;
}

.card-link span {
  transition: transform 0.15s;
}

.card-link:hover span {
  transform: translateX(4px);
}

[dir="rtl"] .card-link span {
  transform: scaleX(-1);
}

[dir="rtl"] .card-link:hover span {
  transform: scaleX(-1) translateX(4px);
}`}
            initialJs={`// Add interactivity here
const card = document.querySelector('.feature-card');
const link = card.querySelector('.card-link');

card.addEventListener('mouseenter', () => {
  card.style.transform = 'translateY(-4px)';
  card.style.transition = 'transform 0.2s ease';
});

card.addEventListener('mouseleave', () => {
  card.style.transform = 'translateY(0)';
});

link.addEventListener('click', (e) => {
  e.preventDefault();
  alert('Learn more clicked!');
});`}
            height="600px"
            readOnly={true}
          />
        )}
      </section>

      {/* Section 5: Assets */}
      <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '40px', marginTop: '32px', boxShadow: '0 4px 20px -8px rgba(0,0,0,0.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--coral) 0%, var(--pink) 100%)', color: '#3a1607', fontFamily: 'monospace', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(255,107,74,0.3)' }}>5</span>
          <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--coral)', letterSpacing: '0.5px' }}>ASSETS · الأصول</span>
        </div>
        <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 16px', background: 'linear-gradient(135deg, var(--text) 0%, var(--coral) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Real files, included</h2>
        <p style={{ color: 'var(--muted)', fontSize: '15px', margin: '0 0 24px', lineHeight: 1.6 }}>
          One new asset this time — the badge's gradient background is pure CSS, only the bolt icon itself is a file.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginTop: '6px' }}>
          {[
            { name: 'Feature icon (bolt)', ar: 'أيقونة الميزة (برق)', file: 'assets/feature-icon.svg', icon: '⚡' },
          ].map((asset) => (
            <div key={asset.name} style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '16px', padding: '20px' }}>
              <div style={{ background: 'var(--bg)', borderRadius: '12px', height: '76px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'linear-gradient(135deg, var(--coral) 0%, #ff8a6b 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>{asset.icon}</div>
              </div>
              <h4 style={{ margin: '0 0 6px', fontSize: '15px', fontWeight: 600 }}>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', lineHeight: 1.3 }}>
                  <span>{asset.name}</span>
                  <span style={{ fontSize: '0.85em', color: 'var(--muted)', direction: 'rtl', textAlign: 'right' }}>{asset.ar}</span>
                </span>
              </h4>
              <span style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--coral)', direction: 'ltr', display: 'inline-block', marginTop: '8px', padding: '4px 8px', background: 'var(--bg)', borderRadius: '6px' }}>{asset.file}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: Guides */}
      <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '40px', marginTop: '32px', boxShadow: '0 4px 20px -8px rgba(0,0,0,0.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--coral) 0%, var(--pink) 100%)', color: '#3a1607', fontFamily: 'monospace', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(255,107,74,0.3)' }}>5</span>
          <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--coral)', letterSpacing: '0.5px' }}>GUIDES · الشرح</span>
        </div>

        <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 24px', background: 'linear-gradient(135deg, var(--text) 0%, var(--coral) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Anatomy</h2>
        <div style={{ display: 'flex', gap: '26px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <div style={{ background: 'var(--bg)', borderRadius: '16px', padding: '44px 30px', flex: '1 1 340px', display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{ width: '260px', background: '#212844', border: '1px solid ' + 'rgba(255,255,255,.09)', borderRadius: '16px', padding: '26px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '14px', position: 'relative' }}>
              <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--coral)', color: 'var(--coral)', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap', top: '24px', right: '-8px' }}>1 · icon badge</div>
              <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--coral)', color: 'var(--coral)', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap', top: '110px', right: '-10px' }}>2 · title + desc</div>
              <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--coral)', color: 'var(--coral)', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap', top: '180px', right: '-6px' }}>3 · link</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'linear-gradient(135deg, var(--coral) 0%, #ff8a6b 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto', fontSize: '20px' }}>⚡</div>
              </div>
              <h3 style={{ fontSize: '15.5px', fontWeight: 800, margin: 0 }}>Lightning-fast setup</h3>
              <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>Connect your store in minutes — no code required.</p>
              <a href="#" style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 700, color: 'var(--coral)', textDecoration: 'none' }}>Learn more <span style={{ transition: '0.15s' }}>→</span></a>
            </div>
          </div>
          <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              { en: '<b>Card</b> — Flex, column, <code>align-items:flex-start</code>', ar: '<b>الكارت</b> — Flex، عمودي، <code>align-items:flex-start</code>' },
              { en: '<b>1. Icon badge</b> — fixed 44×44px, gradient background', ar: '<b>1. الأيقونة</b> — حجم ثابت ٤٤×٤٤px، خلفية متدرّجة' },
              { en: '<b>3. Link</b> — pushed to bottom with <code>margin-top:auto</code>, same trick as the Blog Card\'s meta row', ar: '<b>3. الرابط</b> — مدفوع لتحت بـ <code>margin-top:auto</code>، نفس حيلة صف المؤلف في Blog Card' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', padding: '12px 0', borderBottom: '1px solid var(--border)', alignItems: 'start' }}>
                <div style={{ direction: 'ltr', textAlign: 'left', fontSize: '14px', lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: item.en }} />
                <div style={{ direction: 'rtl', textAlign: 'right', unicodeBidi: 'isolate', fontSize: '14px', lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: item.ar }} />
              </div>
            ))}
          </div>
        </div>

        <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '32px 0 24px', background: 'linear-gradient(135deg, var(--text) 0%, var(--coral) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Spec</h2>
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
              { element: 'Card / الكارت', property: 'Max width / عرض أقصى', value: '260px' },
              { element: 'Card / الكارت', property: 'Padding / الحشو', value: '26px' },
              { element: 'Card / الكارت', property: 'Gap / المسافة', value: '14px' },
              { element: 'Card / الكارت', property: 'align-items', value: 'flex-start' },
              { element: 'Icon badge / الأيقونة', property: 'Size / الحجم', value: '44×44px, radius 12px' },
              { element: 'Icon badge / الأيقونة', property: 'Background / الخلفية', value: 'gradient coral' },
              { element: 'Title / العنوان', property: 'Size / weight', value: '15.5px / 800' },
              { element: 'Link / الرابط', property: 'margin-top', value: 'auto' },
            ].map((row, i) => (
              <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '16px', fontSize: '14px', verticalAlign: 'top' }}>{row.element}</td>
                <td style={{ padding: '16px', fontSize: '14px', verticalAlign: 'top' }}>{row.property}</td>
                <td style={{ padding: '16px', fontSize: '14px', verticalAlign: 'top' }}><code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '4px 10px', fontSize: '0.9em' }}>{row.value}</code></td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '32px 0 24px', background: 'linear-gradient(135deg, var(--text) 0%, var(--coral) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Build steps</h2>
        {[
          { title: 'HTML + flex column, left-aligned / HTML + flex عمودي، محاذي لليسار', hint: 'An <code>article</code> with icon badge, title, description, and a link, all left-aligned instead of stretched full width.', code: 'display:flex; flex-direction:column; align-items:flex-start; gap:14px;' },
          { title: 'Icon badge, fixed size / الأيقونة، حجم ثابت', hint: 'The badge must never shrink or grow, whatever the card\'s width.', code: 'width:44px; height:44px; flex-shrink:0;' },
          { title: 'Pin the link to the bottom / ثبت الرابط في القاع', hint: 'Regardless of description length, "Learn more" should sit at the card\'s bottom.', code: 'margin-top:auto' },
          { title: 'Animate the arrow, mind the direction / حرك السهم، انتبه للاتجاه', hint: 'On hover, the arrow should slide toward reading direction — right in English, left (mirrored) in Arabic.', code: '.f-link .arrow{transition:.15s} :hover .arrow{transform:translateX(4px)}' },
        ].map((step, i) => (
          <div key={i} style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '16px', padding: '24px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
              <span style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--coral) 0%, var(--pink) 100%)', color: '#3a1607', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto', fontSize: '16px', boxShadow: '0 2px 8px rgba(255,107,74,0.3)' }}>{i + 1}</span>
              <span style={{ fontWeight: 700, fontSize: '16px', color: 'var(--text)' }}>{step.title}</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '12px' }}>
              <div style={{ direction: 'ltr', textAlign: 'left', fontSize: '15px', lineHeight: 1.8, color: '#dfe2f2' }} dangerouslySetInnerHTML={{ __html: step.hint }} />
              <div style={{ direction: 'rtl', textAlign: 'right', unicodeBidi: 'isolate', fontSize: '15px', lineHeight: 1.8, color: '#dfe2f2' }} dangerouslySetInnerHTML={{ __html: step.hint.replace(/HTML/g, 'الـHTML').replace(/article/g, 'article').replace(/code/g, 'code') }} />
            </div>
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
          <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--coral) 0%, var(--pink) 100%)', color: '#3a1607', fontFamily: 'monospace', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(255,107,74,0.3)' }}>6</span>
          <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--coral)', letterSpacing: '0.5px' }}>DISCUSSION · نقاش وأسئلة</span>
        </div>
        <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 24px', background: 'linear-gradient(135deg, var(--text) 0%, var(--coral) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Common questions</h2>
        {[
          { 
            q: { en: 'Why did my card\'s text suddenly stretch full width?', ar: 'ليه نص الكارت اتمدد فجأة العرض كله؟' },
            a: { en: 'Flex items default to <code>align-items:stretch</code>. Add <code>align-items:flex-start</code> on the container to let each child size to its own content instead.', ar: 'الـ flex items افتراضيًا <code>align-items:stretch</code>. ضيف <code>align-items:flex-start</code> على الحاوية عشان كل ابن ياخد حجم محتواه بس.' }
          },
          { 
            q: { en: 'Should I use 3 of these side by side right now?', ar: 'أستخدم ٣ منهم جنب بعض دلوقتي؟' },
            a: { en: 'Not yet — that\'s the "Features Section (Grid)" project later in the track, which wraps 3 of these cards in an outer flex row with <code>flex-wrap:wrap</code>. Master this single card first.', ar: 'لسه لأ — ده مشروع "Features Section (Grid)" بعد كده في التراك، وبيلف ٣ كروت في صف flex خارجي بـ <code>flex-wrap:wrap</code>. اتقن الكارت الواحد ده الأول.' }
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
              <span style={{ fontFamily: 'monospace', color: 'var(--coral)', flex: '0 0 auto', fontSize: '18px', transition: '0.2s', transform: openAccordions[i] ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
            </div>
            <div style={{ maxHeight: openAccordions[i] ? '500px' : '0', overflow: 'hidden', transition: '0.25s ease' }}>
              <div style={{ padding: '0 18px 18px', fontSize: '13.5px', color: '#dfe2f2' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div style={{ direction: 'ltr', textAlign: 'left', lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: item.a.en }} />
                  <div style={{ direction: 'rtl', textAlign: 'right', unicodeBidi: 'isolate', lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: item.a.ar }} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Section 7: Project Completion */}
      <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '40px', marginTop: '32px', boxShadow: '0 4px 20px -8px rgba(0,0,0,0.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--coral) 0%, var(--pink) 100%)', color: '#3a1607', fontFamily: 'monospace', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(255,107,74,0.3)' }}>7</span>
          <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--coral)', letterSpacing: '0.5px' }}>PROJECT COMPLETION · إنهاء المشروع</span>
        </div>
        <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 24px', background: 'linear-gradient(135deg, var(--text) 0%, var(--coral) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Self-check checklist</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '24px 0' }}>
          {[
            { en: 'Card is a flex column with align-items:flex-start', ar: 'الكارت flex عمودي بـ align-items:flex-start' },
            { en: 'Icon badge is fixed size and doesn\'t shrink', ar: 'الأيقونة حجم ثابت ومش بتتقلص' },
            { en: 'Link stays pinned to the bottom regardless of description length', ar: 'الرابط ثابت في القاع مهما كان طول الوصف' },
            { en: 'Arrow animates on hover and flips correctly in the RTL card', ar: 'السهم بيتحرك عند الـ hover وبيتقلب صح في الكارت العربي' },
            { en: 'Works at desktop, tablet, and mobile widths', ar: 'شغالة في عرض ديسكتوب وتابلت وموبايل' },
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
            <span style={{ color: 'var(--teal)', fontWeight: 700 }}>{checkedCount} / 5</span>
          </div>
          <div style={{ height: '12px', background: 'var(--bg)', borderRadius: '999px', overflow: 'hidden', marginBottom: '20px' }}>
            <div style={{ height: '100%', background: 'linear-gradient(90deg, var(--coral) 0%, var(--teal) 100%)', width: `${progress}%`, borderRadius: '999px', transition: 'all 0.4s ease', boxShadow: '0 0 20px rgba(255,107,74,0.4)' }} />
          </div>
          <button
            onClick={handleComplete}
            disabled={completed}
            style={{ marginTop: '0', width: '100%', padding: '16px', borderRadius: '14px', border: completed ? '1px solid var(--teal)' : 'none', background: completed ? 'var(--surface-2)' : 'linear-gradient(135deg, var(--teal) 0%, var(--coral) 100%)', color: completed ? 'var(--teal)' : '#0e2440', fontWeight: 800, fontSize: '16px', cursor: completed ? 'default' : 'pointer', transition: 'all 0.2s ease', boxShadow: completed ? 'none' : '0 4px 16px rgba(94,234,212,0.4)' }}
          >
            {completed ? '✔️ Completed / اتعمل' : '✅ Mark as complete / علّمها كمكتملة'}
          </button>
          {completed && (
            <div style={{ display: 'block', marginTop: '20px', background: 'var(--teal-dim)', border: '1px solid ' + 'rgba(94,234,212,.4)', color: 'var(--teal)', padding: '18px 20px', borderRadius: '14px', textAlign: 'center', fontWeight: 700, fontSize: '15px', boxShadow: '0 4px 16px rgba(94,234,212,0.2)' }}>
              🎉 Nice work — on to component 04: Pricing Card / شغل تمام — يلا مكوّن ٤: Pricing Card
            </div>
          )}
        </div>
      </section>

      <footer style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '13px', marginTop: '60px', padding: '24px', borderTop: '1px solid var(--border)' }}>
        🎯 Component Library · Marketing Track · Sample 3 of 8
      </footer>
      </div>
    </PageLayout>
  );
}
