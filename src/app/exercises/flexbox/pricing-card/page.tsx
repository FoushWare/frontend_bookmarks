'use client';

import { useState } from 'react';
import CodeEditor from '@/components/CodeEditor';
import PageLayout from '@/components/PageLayout';
import PageSidebar from '@/components/PageSidebar';
import { getTopicNavigation } from '@/data/navigation';

export default function PricingCardExercise() {
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
              04 / 08
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
                Complete Pricing Card Design
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--muted)', margin: 0 }}>
                This is the final result you'll achieve by completing this exercise.
              </p>
            </div>
            
            <div style={{ 
              background: 'var(--surface-2)', 
              border: '1px solid var(--border)', 
              borderRadius: '16px', 
              padding: '32px 28px', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              gap: '16px', 
              textAlign: 'center', 
              maxWidth: '300px',
              margin: '0 auto',
              boxShadow: '0 20px 40px -20px rgba(0,0,0,.6)'
            }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'monospace', fontSize: '11px', fontWeight: 700, color: 'var(--yellow)', background: 'var(--yellow-dim)', border: '1px solid rgba(255,209,102,.35)', padding: '5px 12px', borderRadius: '999px' }}>⭐ MOST POPULAR</span>
              <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--muted)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.03em' }}>Pro Plan</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                <span style={{ fontSize: '42px', fontWeight: 800 }}>$29</span>
                <span style={{ fontSize: '14px', color: 'var(--muted)' }}>/ month</span>
              </div>
              <p style={{ fontSize: '14px', color: 'var(--muted)', margin: 0 }}>Scale your store with ease.</p>
              <div style={{ width: '100%', height: '1px', background: 'var(--border)' }} />
              <div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px' }}>✓ Unlimited products</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px' }}>✓ Priority support</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px' }}>✓ Advanced analytics</div>
              </div>
              <a href="#" style={{ marginTop: 'auto', width: '100%', padding: '14px', borderRadius: '12px', border: 'none', background: 'var(--yellow)', color: '#3a3018', fontWeight: 800, fontSize: '15px', cursor: 'pointer', textDecoration: 'none', display: 'block', textAlign: 'center' }}>Start trial</a>
            </div>
          </div>
        )}

      {/* Header */}
      <div style={{ marginBottom: '40px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 700, color: 'var(--yellow)', background: 'var(--yellow-dim)', border: '1px solid ' + 'rgba(255,209,102,.35)', padding: '6px 14px', borderRadius: '999px', marginBottom: '16px' }}>
          <span>💰</span>
          <span>Component Reference</span>
          <span style={{ opacity: 0.5 }}>|</span>
          <span style={{ fontSize: '0.9em', color: 'var(--muted)', direction: 'rtl' }}>مرجع مكوّن</span>
        </div>
        <h1 style={{ fontSize: '48px', fontWeight: 800, margin: '0 0 12px', background: 'linear-gradient(135deg, var(--text) 0%, var(--yellow) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          Pricing Card
        </h1>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '12px', padding: '6px 12px', borderRadius: '8px', border: '1px solid var(--border)', color: 'var(--teal)', borderColor: 'rgba(94,234,212,.35)', background: 'var(--teal-dim)', fontWeight: 600 }}>4 Flex Containers</span>
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
          <span style={{ fontFamily: 'monospace', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '8px', background: 'var(--yellow)', color: '#3a3018', marginRight: '12px' }}>EN</span>
          What you're building
          <span style={{ fontFamily: 'monospace', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '8px', background: 'var(--coral)', color: '#3a1607', marginRight: '12px' }}>AR</span>
          <span style={{ direction: 'rtl', unicodeBidi: 'isolate' }}>اللي هتبنيه</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '24px' }}>
          <div style={{ direction: 'ltr', textAlign: 'left', fontSize: '15px', lineHeight: 1.8, color: '#dfe2f2' }}>Build a single pricing plan card: a "Most Popular" badge, plan name, price with a period label, description, a divider, a list of included features with checkmarks, and a full-width CTA button. This card introduces two new alignment ideas — <code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '4px 10px', fontSize: '0.9em' }}>align-items:baseline</code> and per-child <code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '4px 10px', fontSize: '0.9em' }}>align-self</code> — reused later in the Pricing Section (Tiers) project.</div>
          <div style={{ direction: 'rtl', textAlign: 'right', unicodeBidi: 'isolate', fontSize: '15px', lineHeight: 1.8, color: '#dfe2f2' }}>ابنِ كارت خطة تسعير واحد: بادچ "الأكتر طلبًا"، اسم الخطة، السعر مع وصف الفترة، وصف، فاصل، قايمة بالمميزات المتضمنة مع علامات صح، وزر CTA بالعرض كامل. الكارت ده بيقدّم فكرتين جديدين للمحاذاة — <code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '4px 10px', fontSize: '0.9em' }}>align-items:baseline</code> و <code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '4px 10px', fontSize: '0.9em' }}>align-self</code> لكل ابن — معاد استخدامهم بعدين في مشروع Pricing Section (Tiers).</div>
        </div>
        <h2 style={{ fontSize: '18px', fontWeight: 700, margin: '24px 0 16px', color: 'var(--yellow)' }}>Requirements · المتطلبات</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {[
            { en: 'Badge, plan name, price, description, divider, feature list, and CTA stacked with Flexbox', ar: 'البادچ واسم الخطة والسعر والوصف والفاصل وقايمة المميزات والـCTA مرتبين بـ Flexbox' },
            { en: 'Price amount and period label sit on the same text baseline (not centered)', ar: 'رقم السعر ووصف الفترة قاعدين على نفس خط الأساس النصي (مش متوسطين)' },
            { en: 'Feature list stretches full width and is left-aligned (in English) / right-aligned (in Arabic)', ar: 'قايمة المميزات تتمدد العرض كامل ومحاذية لليسار (إنجليزي) / لليمين (عربي)' },
            { en: 'CTA button is pinned to the bottom regardless of content length', ar: 'زرار الـCTA مثبت في القاع مهما كان طول المحتوى' },
            { en: 'Works at desktop, tablet, mobile; supports LTR and RTL', ar: 'شغالة في ديسكتوب وتابلت وموبايل؛ بتدعم LTR وRTL' },
          ].map((req, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', padding: '16px 0', borderBottom: '1px solid var(--border)', alignItems: 'start' }}>
              <div style={{ direction: 'ltr', textAlign: 'left', fontSize: '14px', lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: req.en }} />
              <div style={{ direction: 'rtl', textAlign: 'right', unicodeBidi: 'isolate', fontSize: '14px', lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: req.ar }} />
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Design Preview */}
      <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '40px', marginTop: '32px', boxShadow: '0 4px 20px -8px rgba(0,0,0,0.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--yellow) 0%, var(--coral) 100%)', color: '#3a3018', fontFamily: 'monospace', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(255,209,102,0.3)' }}>2</span>
          <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--yellow)', letterSpacing: '0.5px' }}>DESIGN PREVIEW · معاينة التصميم</span>
        </div>
        <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 16px', background: 'linear-gradient(135deg, var(--text) 0%, var(--yellow) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Desktop, tablet, mobile — English & Arabic together</h2>
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
                background: activeFrame === tab.id ? 'linear-gradient(135deg, var(--yellow) 0%, var(--coral) 100%)' : 'var(--surface-2)',
                border: activeFrame === tab.id ? 'none' : '1px solid var(--border)',
                color: activeFrame === tab.id ? '#3a3018' : 'var(--text)',
                padding: '12px 20px',
                borderRadius: '12px',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: activeFrame === tab.id ? 700 : 500,
                transition: 'all 0.2s ease',
                boxShadow: activeFrame === tab.id ? '0 4px 12px rgba(255,209,102,0.3)' : 'none',
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
                <div style={{ width: '260px', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '16px', padding: '28px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', textAlign: 'center', boxShadow: '0 20px 40px -20px rgba(0,0,0,.6)' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontFamily: 'monospace', fontSize: '10.5px', fontWeight: 700, color: 'var(--yellow)', background: 'var(--yellow-dim)', border: '1px solid ' + 'rgba(255,209,102,.35)', padding: '4px 10px', borderRadius: '999px' }}>⭐ MOST POPULAR</span>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--muted)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.03em' }}>Pro Plan</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                    <span style={{ fontSize: '38px', fontWeight: 800 }}>$29</span>
                    <span style={{ fontSize: '13px', color: 'var(--muted)' }}>/ month</span>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>Scale your store with ease.</p>
                  <div style={{ width: '100%', height: '1px', background: 'var(--border)' }} />
                  <div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'left' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '13px' }}>✓ Unlimited products</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '13px' }}>✓ Priority support</div>
                  </div>
                  <a href="#" style={{ marginTop: 'auto', width: '100%', padding: '13px', borderRadius: '11px', border: 'none', background: 'var(--yellow)', color: '#3a3018', fontWeight: 800, fontSize: '14px', cursor: 'pointer', textDecoration: 'none', display: 'block', textAlign: 'center' }}>Start trial</a>
                </div>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '4px' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--muted)', background: 'var(--surface-2)', border: '1px solid var(--border)', padding: '2px 8px', borderRadius: '6px', direction: 'ltr' }}>check-icon.svg</span>
                  <span style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--muted)', background: 'var(--surface-2)', border: '1px solid var(--border)', padding: '2px 8px', borderRadius: '6px', direction: 'ltr' }}>star.svg</span>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontFamily: 'monospace', fontSize: '11px', padding: '3px 10px', borderRadius: '999px', color: 'var(--purple)', background: 'rgba(167,139,250,.12)', border: '1px solid ' + 'rgba(167,139,250,.3)' }}>AR · عربي</span>
                <div style={{ width: '260px', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '16px', padding: '28px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', textAlign: 'center', direction: 'rtl', boxShadow: '0 20px 40px -20px rgba(0,0,0,.6)' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontFamily: 'monospace', fontSize: '10.5px', fontWeight: 700, color: 'var(--yellow)', background: 'var(--yellow-dim)', border: '1px solid ' + 'rgba(255,209,102,.35)', padding: '4px 10px', borderRadius: '999px' }}>⭐ الأكتر طلبًا</span>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--muted)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.03em' }}>خطة برو</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                    <span style={{ fontSize: '38px', fontWeight: 800 }}>٢٩$</span>
                    <span style={{ fontSize: '13px', color: 'var(--muted)' }}>/ شهريًا</span>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>وسّع متجرك بسهولة.</p>
                  <div style={{ width: '100%', height: '1px', background: 'var(--border)' }} />
                  <div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'right' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '13px' }}>✓ منتجات غير محدودة</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '13px' }}>✓ دعم أولوية</div>
                  </div>
                  <a href="#" style={{ marginTop: 'auto', width: '100%', padding: '13px', borderRadius: '11px', border: 'none', background: 'var(--yellow)', color: '#3a3018', fontWeight: 800, fontSize: '14px', cursor: 'pointer', textDecoration: 'none', display: 'block', textAlign: 'center' }}>ابدأ تجربة</a>
                </div>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '4px' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--muted)', background: 'var(--surface-2)', border: '1px solid var(--border)', padding: '2px 8px', borderRadius: '6px', direction: 'ltr' }}>check-icon.svg</span>
                  <span style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--muted)', background: 'var(--surface-2)', border: '1px solid var(--border)', padding: '2px 8px', borderRadius: '6px', direction: 'ltr' }}>star.svg</span>
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
                <div style={{ width: '230px', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '16px', padding: '28px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', textAlign: 'center', boxShadow: '0 20px 40px -20px rgba(0,0,0,.6)' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontFamily: 'monospace', fontSize: '10.5px', fontWeight: 700, color: 'var(--yellow)', background: 'var(--yellow-dim)', border: '1px solid ' + 'rgba(255,209,102,.35)', padding: '4px 10px', borderRadius: '999px' }}>⭐ MOST POPULAR</span>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--muted)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.03em' }}>Pro Plan</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                    <span style={{ fontSize: '38px', fontWeight: 800 }}>$29</span>
                    <span style={{ fontSize: '13px', color: 'var(--muted)' }}>/ month</span>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>Scale your store.</p>
                  <div style={{ width: '100%', height: '1px', background: 'var(--border)' }} />
                  <div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'left' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '13px' }}>✓ Unlimited products</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '13px' }}>✓ Priority support</div>
                  </div>
                  <a href="#" style={{ marginTop: 'auto', width: '100%', padding: '13px', borderRadius: '11px', border: 'none', background: 'var(--yellow)', color: '#3a3018', fontWeight: 800, fontSize: '14px', cursor: 'pointer', textDecoration: 'none', display: 'block', textAlign: 'center' }}>Start trial</a>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontFamily: 'monospace', fontSize: '11px', padding: '3px 10px', borderRadius: '999px', color: 'var(--purple)', background: 'rgba(167,139,250,.12)', border: '1px solid ' + 'rgba(167,139,250,.3)' }}>AR</span>
                <div style={{ width: '230px', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '16px', padding: '28px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', textAlign: 'center', direction: 'rtl', boxShadow: '0 20px 40px -20px rgba(0,0,0,.6)' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontFamily: 'monospace', fontSize: '10.5px', fontWeight: 700, color: 'var(--yellow)', background: 'var(--yellow-dim)', border: '1px solid ' + 'rgba(255,209,102,.35)', padding: '4px 10px', borderRadius: '999px' }}>⭐ الأكتر طلبًا</span>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--muted)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.03em' }}>خطة برو</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                    <span style={{ fontSize: '38px', fontWeight: 800 }}>٢٩$</span>
                    <span style={{ fontSize: '13px', color: 'var(--muted)' }}>/ شهريًا</span>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>وسّع متجرك.</p>
                  <div style={{ width: '100%', height: '1px', background: 'var(--border)' }} />
                  <div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'right' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '13px' }}>✓ منتجات غير محدودة</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '13px' }}>✓ دعم أولوية</div>
                  </div>
                  <a href="#" style={{ marginTop: 'auto', width: '100%', padding: '13px', borderRadius: '11px', border: 'none', background: 'var(--yellow)', color: '#3a3018', fontWeight: 800, fontSize: '14px', cursor: 'pointer', textDecoration: 'none', display: 'block', textAlign: 'center' }}>ابدأ تجربة</a>
                </div>
              </div>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '15px', marginTop: '14px', marginBottom: 0 }}>Tablet override: card width drops to <code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '4px 10px', fontSize: '0.9em' }}>230px</code>.</p>
          </div>
        )}

        {activeFrame === 'mobile' && (
          <div style={{ background: 'var(--bg)', borderRadius: '16px', padding: '24px 16px', maxWidth: '375px', margin: '0 auto' }}>
            <div style={{ fontFamily: 'monospace', fontSize: '12px', color: 'var(--muted)', marginBottom: '12px' }}>frame width: 375px</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: '10px' }}>
                <span style={{ fontFamily: 'monospace', fontSize: '11px', padding: '3px 10px', borderRadius: '999px', color: 'var(--blue)', background: 'rgba(96,165,250,.12)', border: '1px solid ' + 'rgba(96,165,250,.3)', alignSelf: 'center' }}>EN</span>
                <div style={{ width: '100%', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '16px', padding: '28px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', textAlign: 'center', boxShadow: '0 20px 40px -20px rgba(0,0,0,.6)' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontFamily: 'monospace', fontSize: '10.5px', fontWeight: 700, color: 'var(--yellow)', background: 'var(--yellow-dim)', border: '1px solid ' + 'rgba(255,209,102,.35)', padding: '4px 10px', borderRadius: '999px' }}>⭐ MOST POPULAR</span>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--muted)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.03em' }}>Pro Plan</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                    <span style={{ fontSize: '38px', fontWeight: 800 }}>$29</span>
                    <span style={{ fontSize: '13px', color: 'var(--muted)' }}>/ month</span>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>Scale your store.</p>
                  <div style={{ width: '100%', height: '1px', background: 'var(--border)' }} />
                  <div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'left' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '13px' }}>✓ Unlimited products</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '13px' }}>✓ Priority support</div>
                  </div>
                  <a href="#" style={{ marginTop: 'auto', width: '100%', padding: '13px', borderRadius: '11px', border: 'none', background: 'var(--yellow)', color: '#3a3018', fontWeight: 800, fontSize: '14px', cursor: 'pointer', textDecoration: 'none', display: 'block', textAlign: 'center' }}>Start trial</a>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: '10px' }}>
                <span style={{ fontFamily: 'monospace', fontSize: '11px', padding: '3px 10px', borderRadius: '999px', color: 'var(--purple)', background: 'rgba(167,139,250,.12)', border: '1px solid ' + 'rgba(167,139,250,.3)', alignSelf: 'center' }}>AR</span>
                <div style={{ width: '100%', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '16px', padding: '28px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', textAlign: 'center', direction: 'rtl', boxShadow: '0 20px 40px -20px rgba(0,0,0,.6)' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontFamily: 'monospace', fontSize: '10.5px', fontWeight: 700, color: 'var(--yellow)', background: 'var(--yellow-dim)', border: '1px solid ' + 'rgba(255,209,102,.35)', padding: '4px 10px', borderRadius: '999px' }}>⭐ الأكتر طلبًا</span>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--muted)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.03em' }}>خطة برو</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                    <span style={{ fontSize: '38px', fontWeight: 800 }}>٢٩$</span>
                    <span style={{ fontSize: '13px', color: 'var(--muted)' }}>/ شهريًا</span>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>وسّع متجرك.</p>
                  <div style={{ width: '100%', height: '1px', background: 'var(--border)' }} />
                  <div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'right' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '13px' }}>✓ منتجات غير محدودة</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '13px' }}>✓ دعم أولوية</div>
                  </div>
                  <a href="#" style={{ marginTop: 'auto', width: '100%', padding: '13px', borderRadius: '11px', border: 'none', background: 'var(--yellow)', color: '#3a3018', fontWeight: 800, fontSize: '14px', cursor: 'pointer', textDecoration: 'none', display: 'block', textAlign: 'center' }}>ابدأ تجربة</a>
                </div>
              </div>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '15px', marginTop: '14px', marginBottom: 0 }}>Mobile override: card becomes <code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '4px 10px', fontSize: '0.9em' }}>width: 100%</code>.</p>
          </div>
        )}
      </section>

      {/* Section 3: Code Editor */}
      <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '40px', marginTop: '32px', boxShadow: '0 4px 20px -8px rgba(0,0,0,0.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--yellow) 0%, var(--coral) 100%)', color: '#3a3018', fontFamily: 'monospace', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(255,209,102,0.3)' }}>3</span>
          <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--yellow)', letterSpacing: '0.5px' }}>CODE EDITOR · محرر الكود</span>
        </div>
        <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 16px', background: 'linear-gradient(135deg, var(--text) 0%, var(--yellow) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Try it yourself</h2>
        <p style={{ color: 'var(--muted)', fontSize: '15px', margin: '0 0 24px', lineHeight: 1.6 }}>
          Write HTML, CSS, and JavaScript below to build the pricing card. The preview updates in real-time.
        </p>
        <CodeEditor
          initialHtml={`<div class="pricing-card">
  <span class="badge">⭐ MOST POPULAR</span>
  <div class="plan-name">Pro Plan</div>
  <div class="price-row">
    <span class="amount">$29</span>
    <span class="period">/ month</span>
  </div>
  <p class="plan-desc">Scale your store.</p>
  <div class="divider"></div>
  <div class="feature-list">
    <div class="feature-item">✓ Unlimited products</div>
    <div class="feature-item">✓ Priority support</div>
  </div>
  <a class="cta" href="#">Start trial</a>
</div>`}
          initialCss={`.pricing-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  width: 260px;
  background: #212844;
  border: 1px solid rgba(255,255,255,0.09);
  border-radius: 16px;
  padding: 28px 24px;
  text-align: center;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-family: monospace;
  font-size: 10.5px;
  font-weight: 700;
  color: #ffd166;
  background: rgba(255,209,102,0.14);
  border: 1px solid rgba(255,209,102,0.35);
  padding: 4px 10px;
  border-radius: 999px;
}

.plan-name {
  font-size: 15px;
  font-weight: 700;
  color: #8d93ac;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.price-row {
  display: flex;
  align-items: baseline;
  gap: 4px;
}

.amount {
  font-size: 38px;
  font-weight: 800;
  color: #eef0f8;
}

.period {
  font-size: 13px;
  color: #8d93ac;
}

.plan-desc {
  font-size: 13px;
  color: #8d93ac;
  margin: 0;
}

.divider {
  width: 100%;
  height: 1px;
  background: rgba(255,255,255,0.1);
}

.feature-list {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 13px;
  color: #dfe2f2;
}

.cta {
  margin-top: auto;
  width: 100%;
  padding: 13px;
  border-radius: 11px;
  border: none;
  background: #ffd166;
  color: #3a3018;
  font-weight: 800;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  display: block;
  text-align: center;
}

.cta:hover {
  opacity: 0.9;
}`}
          initialJs={`// Add interactivity here
const card = document.querySelector('.pricing-card');
const cta = card.querySelector('.cta');

cta.addEventListener('click', (e) => {
  e.preventDefault();
  alert('Starting trial!');
});

card.addEventListener('mouseenter', () => {
  card.style.transform = 'translateY(-4px)';
  card.style.transition = 'transform 0.2s ease';
});

card.addEventListener('mouseleave', () => {
  card.style.transform = 'translateY(0)';
});`}
          height="600px"
        />
      </section>

      {/* Section 4: Solution */}
      {/* <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '40px', marginTop: '32px', boxShadow: '0 4px 20px -8px rgba(0,0,0,0.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--yellow) 0%, var(--coral) 100%)', color: '#3a3018', fontFamily: 'monospace', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(255,209,102,0.3)' }}>4</span>
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
        <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 16px', background: 'linear-gradient(135deg, var(--text) 0%, var(--yellow) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Compare with the solution</h2>
        <p style={{ color: 'var(--muted)', fontSize: '15px', margin: '0 0 24px', lineHeight: 1.6 }}>
          Stuck? Click "Show Solution" to see the complete code for this exercise. Compare it with your work without losing your progress.
        </p>

        {showSolution && (
          <CodeEditor
            initialHtml={`<div class="pricing-card">
  <div class="badge">
    <span>🔥</span>
    <span>POPULAR</span>
  </div>
  <h3 class="plan-name">PRO</h3>
  <div class="price-row">
    <span class="price">$29</span>
    <span class="period">/month</span>
  </div>
  <ul class="features">
    <li>✓ Unlimited projects</li>
    <li>✓ 100GB storage</li>
    <li>✓ Priority support</li>
    <li>✓ Advanced analytics</li>
  </ul>
  <button class="cta-button">Get Started</button>
</div>`}
            initialCss={`.pricing-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 260px;
  background: #212844;
  border: 1px solid rgba(255,255,255,0.09);
  border-radius: 16px;
  padding: 28px 24px;
  text-align: center;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-family: monospace;
  font-size: 10.5px;
  font-weight: 700;
  color: #ffd166;
  background: rgba(255,209,102,0.14);
  border: 1px solid rgba(255,209,102,0.35);
  padding: 4px 10px;
  border-radius: 999px;
}

.plan-name {
  font-size: 15px;
  font-weight: 700;
  color: #8d93ac;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.price-row {
  display: flex;
  align-items: baseline;
  gap: 4px;
  margin: 16px 0;
}

.price {
  font-size: 48px;
  font-weight: 800;
  color: #eef0f8;
}

.period {
  font-size: 14px;
  color: #8d93ac;
}

.features {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0 0 24px;
  padding: 0;
  list-style: none;
  text-align: left;
}

.features li {
  font-size: 14px;
  color: #dfe2f2;
  display: flex;
  align-items: center;
  gap: 8px;
}

.cta-button {
  width: 100%;
  padding: 14px 24px;
  background: linear-gradient(135deg, #ff6b4a 0%, #ff8a6b 100%);
  border: none;
  border-radius: 10px;
  color: #3a1607;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
}`}
            initialJs={`// Add interactivity here
const card = document.querySelector('.pricing-card');
const button = card.querySelector('.cta-button');

card.addEventListener('mouseenter', () => {
  card.style.transform = 'translateY(-4px)';
  card.style.transition = 'transform 0.2s ease';
});

card.addEventListener('mouseleave', () => {
  card.style.transform = 'translateY(0)';
});

button.addEventListener('click', () => {
  alert('Get Started clicked!');
});`}
            height="600px"
            readOnly={true}
          />
        )}
      </section>

      {/* Section 5: Assets */}
      <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '40px', marginTop: '32px', boxShadow: '0 4px 20px -8px rgba(0,0,0,0.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--yellow) 0%, var(--coral) 100%)', color: '#3a3018', fontFamily: 'monospace', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(255,209,102,0.3)' }}>5</span>
          <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--yellow)', letterSpacing: '0.5px' }}>ASSETS · الأصول</span>
        </div>
        <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 16px', background: 'linear-gradient(135deg, var(--text) 0%, var(--yellow) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Real files, included</h2>
        <p style={{ color: 'var(--muted)', fontSize: '15px', margin: '0 0 24px', lineHeight: 1.6 }}>
          <code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '4px 10px', fontSize: '0.9em' }}>check-icon.svg</code> is new; <code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '4px 10px', fontSize: '0.9em' }}>star.svg</code> is reused from the Testimonial Card's rating stars.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginTop: '6px' }}>
          {[
            { name: 'Checkmark', ar: 'علامة صح', file: 'assets/check-icon.svg', icon: '✓' },
            { name: 'Badge star (reused)', ar: 'نجمة البادچ (معاد استخدامها)', file: 'assets/star.svg', icon: '⭐' },
          ].map((asset) => (
            <div key={asset.name} style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '16px', padding: '20px' }}>
              <div style={{ background: 'var(--bg)', borderRadius: '12px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', fontSize: asset.name.includes('Check') ? '34px' : '26px' }}>{asset.icon}</div>
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

      {/* Section 6: Guides */}
      <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '40px', marginTop: '32px', boxShadow: '0 4px 20px -8px rgba(0,0,0,0.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--yellow) 0%, var(--coral) 100%)', color: '#3a3018', fontFamily: 'monospace', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(255,209,102,0.3)' }}>6</span>
          <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--yellow)', letterSpacing: '0.5px' }}>GUIDES · الشرح</span>
        </div>

        <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 24px', background: 'linear-gradient(135deg, var(--text) 0%, var(--yellow) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Anatomy</h2>
        <div style={{ display: 'flex', gap: '26px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <div style={{ background: 'var(--bg)', borderRadius: '16px', padding: '44px 30px', flex: '1 1 340px', display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{ width: '260px', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '16px', padding: '28px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', textAlign: 'center', position: 'relative' }}>
              <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--yellow)', color: 'var(--yellow)', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap', top: '16px', right: '-10px' }}>1 · badge</div>
              <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--yellow)', color: 'var(--yellow)', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap', top: '96px', right: '-6px' }}>2 · price row</div>
              <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--yellow)', color: 'var(--yellow)', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap', top: '210px', right: '-16px' }}>3 · feature list</div>
              <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--yellow)', color: 'var(--yellow)', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap', bottom: '20px', right: '-6px' }}>4 · CTA</div>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontFamily: 'monospace', fontSize: '10.5px', fontWeight: 700, color: 'var(--yellow)', background: 'var(--yellow-dim)', border: '1px solid ' + 'rgba(255,209,102,.35)', padding: '4px 10px', borderRadius: '999px' }}>⭐ MOST POPULAR</span>
              <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--muted)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.03em' }}>Pro Plan</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                <span style={{ fontSize: '38px', fontWeight: 800 }}>$29</span>
                <span style={{ fontSize: '13px', color: 'var(--muted)' }}>/ month</span>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>Scale your store with ease.</p>
              <div style={{ width: '100%', height: '1px', background: 'var(--border)' }} />
              <div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '13px' }}>✓ Unlimited products</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '13px' }}>✓ Priority support</div>
              </div>
              <a href="#" style={{ marginTop: 'auto', width: '100%', padding: '13px', borderRadius: '11px', border: 'none', background: 'var(--yellow)', color: '#3a3018', fontWeight: 800, fontSize: '14px', cursor: 'pointer', textDecoration: 'none', display: 'block', textAlign: 'center' }}>Start trial</a>
            </div>
          </div>
          <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              { en: '<b>Card</b> — Flex, column, <code>align-items:center</code>', ar: '<b>الكارت</b> — Flex، عمودي، <code>align-items:center</code>' },
              { en: '<b>2. Price row</b> — nested Flex row, <code>align-items:baseline</code> (new!)', ar: '<b>2. صف السعر</b> — Flex أفقي متداخل، <code>align-items:baseline</code> (جديدة!)' },
              { en: '<b>3. Feature list</b> — <code>align-self:stretch</code> overrides the card\'s centering just for this one child', ar: '<b>3. قايمة المميزات</b> — <code>align-self:stretch</code> بيلغي توسيط الكارت للابن ده بس' },
              { en: '<b>4. CTA</b> — <code>margin-top:auto</code>, same trick as cards #2 and #3', ar: '<b>4. الـCTA</b> — <code>margin-top:auto</code>، نفس حيلة كارت ٢ و٣' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', padding: '12px 0', borderBottom: '1px solid var(--border)', alignItems: 'start' }}>
                <div style={{ direction: 'ltr', textAlign: 'left', fontSize: '14px', lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: item.en }} />
                <div style={{ direction: 'rtl', textAlign: 'right', unicodeBidi: 'isolate', fontSize: '14px', lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: item.ar }} />
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
              { element: 'Card / الكارت', property: 'Max width / عرض أقصى', value: '260px' },
              { element: 'Card / الكارت', property: 'align-items', value: 'center' },
              { element: 'Price row / صف السعر', property: 'align-items', value: 'baseline' },
              { element: 'Amount / الرقم', property: 'Size / weight', value: '38px / 800' },
              { element: 'Feature list / قايمة المميزات', property: 'align-self', value: 'stretch' },
              { element: 'Feature item / عنصر الميزة', property: 'Gap / المسافة', value: '9px' },
              { element: 'CTA / الزرار', property: 'margin-top', value: 'auto' },
              { element: 'CTA / الزرار', property: 'Background / الخلفية', value: '#ffd166' },
            ].map((row, i) => (
              <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '16px', fontSize: '14px', verticalAlign: 'top' }}>{row.element}</td>
                <td style={{ padding: '16px', fontSize: '14px', verticalAlign: 'top' }}>{row.property}</td>
                <td style={{ padding: '16px', fontSize: '14px', verticalAlign: 'top' }}><code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '4px 10px', fontSize: '0.9em' }}>{row.value}</code></td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '32px 0 24px', background: 'linear-gradient(135deg, var(--text) 0%, var(--yellow) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Build steps</h2>
        {[
          { title: 'Column card, centered / كارت عمودي، متوسط', hint: 'Card is a flex column with everything centered by default.', code: 'display:flex; flex-direction:column; align-items:center; gap:14px; text-align:center;' },
          { title: 'Price + period on the same baseline / السعر + الفترة على نفس خط الأساس', hint: 'The big number and the small "/mo" label are different font sizes — you want their text to sit on the same line, not centered against each other.', code: 'display:flex; align-items:baseline; gap:4px;' },
          { title: 'Left-align just the feature list / محاذاة قايمة المميزات لليسار بس', hint: 'Everything else in the card is centered, but the feature list itself should stretch full width and its text should be left-aligned.', code: 'align-self:stretch;' },
          { title: 'Pin the CTA to the bottom / ثبت الـCTA في القاع', hint: 'Whether there are 2 features or 6, the button should always end up at the card\'s bottom edge.', code: 'margin-top:auto;' },
        ].map((step, i) => (
          <div key={i} style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '16px', padding: '24px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
              <span style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--yellow) 0%, var(--coral) 100%)', color: '#3a3018', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto', fontSize: '16px', boxShadow: '0 2px 8px rgba(255,209,102,0.3)' }}>{i + 1}</span>
              <span style={{ fontWeight: 700, fontSize: '16px', color: 'var(--text)' }}>{step.title}</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '12px' }}>
              <div style={{ direction: 'ltr', textAlign: 'left', fontSize: '15px', lineHeight: 1.8, color: '#dfe2f2' }}>{step.hint}</div>
              <div style={{ direction: 'rtl', textAlign: 'right', unicodeBidi: 'isolate', fontSize: '15px', lineHeight: 1.8, color: '#dfe2f2' }}>{step.hint.replace(/Card/g, 'الكارت').replace(/centered/g, 'متوسط').replace(/big number/g, 'الرقم الكبير').replace(/small/g, 'الصغيرة').replace(/font sizes/g, 'أحجام خط').replace(/text to sit/g, 'النص يقعد').replace(/same line/g, 'نفس الخط').replace(/not centered/g, 'مش متوسط').replace(/against each other/g, 'ضد بعض')}</div>
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
          <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--yellow) 0%, var(--coral) 100%)', color: '#3a3018', fontFamily: 'monospace', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(255,209,102,0.3)' }}>6</span>
          <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--yellow)', letterSpacing: '0.5px' }}>DISCUSSION · نقاش وأسئلة</span>
        </div>
        <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 24px', background: 'linear-gradient(135deg, var(--text) 0%, var(--yellow) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Common questions</h2>
        {[
          { 
            q: { en: 'What\'s the actual difference between center and baseline?', ar: 'إيه الفرق الحقيقي بين center وbaseline؟' },
            a: { en: 'center aligns the boxes\' vertical midpoints — with very different font sizes, this makes text look "off." baseline aligns where the text actually sits, so mismatched sizes still read naturally next to each other.', ar: 'center بيحاذي نص الصناديق رأسيًا — مع أحجام خط مختلفة جدًا، ده بيخلي النص شكله "مش مظبوط". baseline بيحاذي مكان قعاد النص فعليًا، فالأحجام المختلفة بتتقرأ طبيعي جنب بعض.' }
          },
          { 
            q: { en: 'Can I use align-self on more than one child?', ar: 'أقدر أستخدم align-self على أكتر من ابن؟' },
            a: { en: 'Yes — every flex item can set its own align-self independently, overriding the parent\'s align-items just for itself.', ar: 'آه — كل flex item ممكن يحط align-self بتاعته بشكل مستقل، وبيلغي align-items بتاع الأب لنفسه بس.' }
          },
          { 
            q: { en: 'How will this look with 2 or 3 pricing cards side by side later?', ar: 'هيبقى شكله إيه مع ٢ أو ٣ كروت تسعير جنب بعض بعدين؟' },
            a: { en: 'That\'s the Pricing Section (Tiers) project — an outer flex row wraps 2–3 of these cards, often with the "Popular" one slightly taller or scaled up using transform:scale().', ar: 'ده مشروع Pricing Section (Tiers) — صف flex خارجي بيلف ٢-٣ من الكروت دي، غالبًا الكارت "الأكتر طلبًا" بيبقى أطول شوية أو مكبّر بـ transform:scale().' }
          },
        ].map((item, i) => (
          <div key={i} style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '14px', marginBottom: '10px', overflow: 'hidden' }}>
            <div 
              onClick={() => toggleAccordion(i)}
              style={{ padding: '16px 18px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '14px' }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={{ direction: 'ltr', textAlign: 'left', fontSize: '14px', fontWeight: 600 }} dangerouslySetInnerHTML={{ __html: item.q.en }} />
                <div style={{ direction: 'rtl', textAlign: 'right', unicodeBidi: 'isolate', fontSize: '14px', fontWeight: 600 }} dangerouslySetInnerHTML={{ __html: item.q.ar }} />
              </div>
              <span style={{ fontFamily: 'monospace', color: 'var(--yellow)', flex: '0 0 auto', fontSize: '18px', transition: '0.2s', transform: openAccordions[i] ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
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
          <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--yellow) 0%, var(--coral) 100%)', color: '#3a3018', fontFamily: 'monospace', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(255,209,102,0.3)' }}>7</span>
          <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--yellow)', letterSpacing: '0.5px' }}>PROJECT COMPLETION · إنهاء المشروع</span>
        </div>
        <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 24px', background: 'linear-gradient(135deg, var(--text) 0%, var(--yellow) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Self-check checklist</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '24px 0' }}>
          {[
            { en: 'Card is a centered flex column', ar: 'الكارت flex عمودي متوسط' },
            { en: 'Price and period sit on the same text baseline', ar: 'السعر والفترة على نفس خط الأساس النصي' },
            { en: 'Feature list stretches full width and is left-aligned (EN) / right-aligned (AR)', ar: 'قايمة المميزات تتمدد العرض كامل ومحاذية لليسار (إنجليزي) / لليمين (عربي)' },
            { en: 'CTA button is pinned to the bottom regardless of content', ar: 'زرار الـCTA مثبت في القاع مهما كان المحتوى' },
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
            <div style={{ height: '100%', background: 'linear-gradient(90deg, var(--yellow) 0%, var(--teal) 100%)', width: `${progress}%`, borderRadius: '999px', transition: 'all 0.4s ease', boxShadow: '0 0 20px rgba(255,209,102,0.4)' }} />
          </div>
          <button
            onClick={handleComplete}
            disabled={completed}
            style={{ marginTop: '0', width: '100%', padding: '16px', borderRadius: '14px', border: completed ? '1px solid var(--teal)' : 'none', background: completed ? 'var(--surface-2)' : 'linear-gradient(135deg, var(--teal) 0%, var(--yellow) 100%)', color: completed ? 'var(--teal)' : '#0e2440', fontWeight: 800, fontSize: '16px', cursor: completed ? 'default' : 'pointer', transition: 'all 0.2s ease', boxShadow: completed ? 'none' : '0 4px 16px rgba(94,234,212,0.4)' }}
          >
            {completed ? '✔️ Completed / اتعمل' : '✅ Mark as complete / علّمها كمكتملة'}
          </button>
          {completed && (
            <div style={{ display: 'block', marginTop: '20px', background: 'var(--teal-dim)', border: '1px solid ' + 'rgba(94,234,212,.4)', color: 'var(--teal)', padding: '18px 20px', borderRadius: '14px', textAlign: 'center', fontWeight: 700, fontSize: '15px', boxShadow: '0 4px 16px rgba(94,234,212,0.2)' }}>
              🎉 Nice work — on to component 05: CTA Button / شغل تمام — يلا مكوّن ٥: CTA Button
            </div>
          )}
        </div>
      </section>

      <footer style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '13px', marginTop: '60px', padding: '24px', borderTop: '1px solid var(--border)' }}>
        💰 Component Library · Marketing Track · Sample 4 of 8
      </footer>
      </div>
    </PageLayout>
  );
}
