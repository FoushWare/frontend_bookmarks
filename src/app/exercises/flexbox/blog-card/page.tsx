'use client';

import { useState } from 'react';
import CodeEditor from '@/components/CodeEditor';
import PageLayout from '@/components/PageLayout';
import PageSidebar from '@/components/PageSidebar';
import { getTopicNavigation } from '@/data/navigation';

export default function BlogCardExercise() {
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
              02 / 08
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
                Complete Blog Card Design
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--muted)', margin: 0 }}>
                This is the final result you'll achieve by completing this exercise.
              </p>
            </div>
            
            <div style={{ 
              background: 'var(--surface-2)', 
              border: '1px solid var(--border)', 
              borderRadius: '16px', 
              overflow: 'hidden', 
              display: 'flex', 
              flexDirection: 'column', 
              maxWidth: '320px',
              margin: '0 auto',
              boxShadow: '0 20px 40px -20px rgba(0,0,0,.6)'
            }}>
              <div style={{ width: '100%', aspectRatio: '16/9', background: 'linear-gradient(135deg, var(--blue) 0%, var(--purple) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px' }}>🖼️</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '24px' }}>
                <span style={{ alignSelf: 'flex-start', fontFamily: 'monospace', fontSize: '11px', fontWeight: 700, color: 'var(--blue)', background: 'rgba(96,165,250,.14)', border: '1px solid rgba(96,165,250,.3)', padding: '4px 12px', borderRadius: '999px' }}>DESIGN</span>
                <h3 style={{ fontSize: '18px', fontWeight: 800, margin: 0 }}>10 Flexbox Patterns Every Beginner Should Know</h3>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.6, margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>From centering a div to building full page layouts, these are the patterns that show up again and again in real projects.</p>
                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', paddingTop: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--coral)' }} />
                    <span style={{ fontSize: '14px', fontWeight: 700 }}>Amir K.</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--muted)' }}>⏱️ 5 min read</div>
                </div>
              </div>
            </div>
          </div>
        )}

      {/* Header */}
      <div style={{ marginBottom: '40px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 700, color: 'var(--blue)', background: 'rgba(96,165,250,.12)', border: '1px solid ' + 'rgba(96,165,250,.35)', padding: '6px 14px', borderRadius: '999px', marginBottom: '16px' }}>
          <span>📝</span>
          <span>Component Reference</span>
          <span style={{ opacity: 0.5 }}>|</span>
          <span style={{ fontSize: '0.9em', color: 'var(--muted)', direction: 'rtl' }}>مرجع مكوّن</span>
        </div>
        <h1 style={{ fontSize: '48px', fontWeight: 800, margin: '0 0 12px', background: 'linear-gradient(135deg, var(--text) 0%, var(--blue) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          Blog Card
        </h1>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '12px', padding: '6px 12px', borderRadius: '8px', border: '1px solid var(--border)', color: 'var(--teal)', borderColor: 'rgba(94,234,212,.35)', background: 'var(--teal-dim)', fontWeight: 600 }}>2 Flex Containers</span>
          <span style={{ fontFamily: 'monospace', fontSize: '12px', padding: '6px 12px', borderRadius: '8px', border: '1px solid var(--border)', color: 'var(--muted)', fontWeight: 600 }}>~20 min · ~٢٠ دقيقة</span>
        </div>
      </div>

      {/* Section 1: Project Brief */}
      <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '40px', marginTop: '0', boxShadow: '0 4px 20px -8px rgba(0,0,0,0.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--blue) 0%, var(--purple) 100%)', color: '#1c1533', fontFamily: 'monospace', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(96,165,250,0.3)' }}>1</span>
          <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--blue)', letterSpacing: '0.5px' }}>PROJECT BRIEF · بريف المشروع</span>
        </div>
        <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 16px', background: 'linear-gradient(135deg, var(--text) 0%, var(--blue) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '8px', background: 'var(--blue)', color: '#0e2440', marginRight: '12px' }}>EN</span>
          What you're building
          <span style={{ fontFamily: 'monospace', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '8px', background: 'var(--purple)', color: '#1c1533', marginRight: '12px' }}>AR</span>
          <span style={{ direction: 'rtl', unicodeBidi: 'isolate' }}>اللي هتبنيه</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '24px' }}>
          <div style={{ direction: 'ltr', textAlign: 'left', fontSize: '15px', lineHeight: 1.8, color: '#dfe2f2' }}>Build a blog article card: a cover image, category tag, title, short excerpt, and an author row with avatar, name, and read time. This introduces a new trick: pushing content to the bottom of a card with variable-height text above it — reused later in Blog Grid and Marketing Landing Page.</div>
          <div style={{ direction: 'rtl', textAlign: 'right', unicodeBidi: 'isolate', fontSize: '15px', lineHeight: 1.8, color: '#dfe2f2' }}>ابنِ كارت مقال: صورة غلاف، تاج تصنيف، عنوان، مقتطف قصير، وصف مؤلف فيه صورة واسم ووقت القراءة. ده بيقدّم حيلة جديدة: تثبيت المحتوى في قاع الكارت حتى لو النص فوقه طوله بيتغيّر — بيتعاد استخدامه في Blog Grid وMarketing Landing Page.</div>
        </div>
        <h2 style={{ fontSize: '18px', fontWeight: 700, margin: '24px 0 16px', color: 'var(--blue)' }}>Requirements · المتطلبات</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {[
            { en: 'Built with Flexbox only, two nested containers (card + author row)', ar: 'مبني بـ Flexbox بس، حاويتين متداخلتين (الكارت + صف المؤلف)' },
            { en: 'Cover image keeps a fixed 16:9 ratio and never distorts', ar: 'صورة الغلاف بتحافظ على نسبة ١٦:٩ ثابتة ومتتمططش' },
            { en: 'Author row always sits at the bottom of the card, regardless of excerpt length', ar: 'صف المؤلف دايمًا في قاع الكارت، مهما كان طول المقتطف' },
            { en: 'Long excerpts are clamped to 2 lines instead of overflowing', ar: 'المقتطفات الطويلة بتتقص عند سطرين بدل ما تفيض' },
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
          <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--blue) 0%, var(--purple) 100%)', color: '#1c1533', fontFamily: 'monospace', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(96,165,250,0.3)' }}>2</span>
          <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--blue)', letterSpacing: '0.5px' }}>DESIGN PREVIEW · معاينة التصميم</span>
        </div>
        <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 16px', background: 'linear-gradient(135deg, var(--text) 0%, var(--blue) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Desktop, tablet, mobile — English & Arabic together</h2>
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
                background: activeFrame === tab.id ? 'linear-gradient(135deg, var(--blue) 0%, var(--purple) 100%)' : 'var(--surface-2)',
                border: activeFrame === tab.id ? 'none' : '1px solid var(--border)',
                color: activeFrame === tab.id ? '#0e2440' : 'var(--text)',
                padding: '12px 20px',
                borderRadius: '12px',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: activeFrame === tab.id ? 700 : 500,
                transition: 'all 0.2s ease',
                boxShadow: activeFrame === tab.id ? '0 4px 12px rgba(96,165,250,0.3)' : 'none',
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
                <div style={{ width: '280px', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 20px 40px -20px rgba(0,0,0,.6)' }}>
                  <div style={{ width: '100%', aspectRatio: '16/9', background: 'linear-gradient(135deg, var(--blue) 0%, var(--purple) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px' }}>🖼️</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '20px' }}>
                    <span style={{ alignSelf: 'flex-start', fontFamily: 'monospace', fontSize: '10.5px', fontWeight: 700, color: 'var(--blue)', background: 'rgba(96,165,250,.14)', border: '1px solid ' + 'rgba(96,165,250,.3)', padding: '4px 10px', borderRadius: '999px' }}>DESIGN</span>
                    <h3 style={{ fontSize: '16px', fontWeight: 800, margin: 0 }}>10 Flexbox Patterns Every Beginner Should Know</h3>
                    <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6, margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>From centering a div to building full page layouts, these are the patterns that show up again and again in real projects.</p>
                    <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', paddingTop: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'var(--coral)' }} />
                        <span style={{ fontSize: '12px', fontWeight: 700 }}>Amir K.</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11.5px', color: 'var(--muted)' }}>⏱️ 5 min read</div>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '4px' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--muted)', background: 'var(--surface-2)', border: '1px solid var(--border)', padding: '2px 8px', borderRadius: '6px', direction: 'ltr' }}>blog-cover.svg</span>
                  <span style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--muted)', background: 'var(--surface-2)', border: '1px solid var(--border)', padding: '2px 8px', borderRadius: '6px', direction: 'ltr' }}>avatar.svg</span>
                  <span style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--muted)', background: 'var(--surface-2)', border: '1px solid var(--border)', padding: '2px 8px', borderRadius: '6px', direction: 'ltr' }}>clock-icon.svg</span>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontFamily: 'monospace', fontSize: '11px', padding: '3px 10px', borderRadius: '999px', color: 'var(--purple)', background: 'rgba(167,139,250,.12)', border: '1px solid ' + 'rgba(167,139,250,.3)' }}>AR · عربي</span>
                <div style={{ width: '280px', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', direction: 'rtl', boxShadow: '0 20px 40px -20px rgba(0,0,0,.6)' }}>
                  <div style={{ width: '100%', aspectRatio: '16/9', background: 'linear-gradient(135deg, var(--purple) 0%, var(--pink) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px' }}>🖼️</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '20px' }}>
                    <span style={{ alignSelf: 'flex-start', fontFamily: 'monospace', fontSize: '10.5px', fontWeight: 700, color: 'var(--purple)', background: 'rgba(167,139,250,.14)', border: '1px solid ' + 'rgba(167,139,250,.3)', padding: '4px 10px', borderRadius: '999px' }}>تصميم</span>
                    <h3 style={{ fontSize: '16px', fontWeight: 800, margin: 0 }}>١٠ أنماط Flexbox لازم كل مبتدئ يعرفها</h3>
                    <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6, margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>من توسيط عنصر واحد لبناء صفحة كاملة، دي الأنماط اللي بتتكرر في أي مشروع حقيقي.</p>
                    <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', paddingTop: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'var(--coral)' }} />
                        <span style={{ fontSize: '12px', fontWeight: 700 }}>أمير ك.</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11.5px', color: 'var(--muted)' }}>⏱️ ٥ دقايق قراءة</div>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '4px' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--muted)', background: 'var(--surface-2)', border: '1px solid var(--border)', padding: '2px 8px', borderRadius: '6px', direction: 'ltr' }}>blog-cover.svg</span>
                  <span style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--muted)', background: 'var(--surface-2)', border: '1px solid var(--border)', padding: '2px 8px', borderRadius: '6px', direction: 'ltr' }}>avatar.svg</span>
                  <span style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--muted)', background: 'var(--surface-2)', border: '1px solid var(--border)', padding: '2px 8px', borderRadius: '6px', direction: 'ltr' }}>clock-icon.svg</span>
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
                <div style={{ width: '230px', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 20px 40px -20px rgba(0,0,0,.6)' }}>
                  <div style={{ width: '100%', aspectRatio: '16/9', background: 'linear-gradient(135deg, var(--blue) 0%, var(--purple) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>🖼️</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '20px' }}>
                    <span style={{ alignSelf: 'flex-start', fontFamily: 'monospace', fontSize: '10.5px', fontWeight: 700, color: 'var(--blue)', background: 'rgba(96,165,250,.14)', border: '1px solid ' + 'rgba(96,165,250,.3)', padding: '4px 10px', borderRadius: '999px' }}>DESIGN</span>
                    <h3 style={{ fontSize: '16px', fontWeight: 800, margin: 0 }}>10 Flexbox Patterns to Know</h3>
                    <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6, margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>The patterns that show up again and again in real projects.</p>
                    <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', paddingTop: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'var(--coral)' }} />
                        <span style={{ fontSize: '12px', fontWeight: 700 }}>Amir K.</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11.5px', color: 'var(--muted)' }}>⏱️ 5 min</div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontFamily: 'monospace', fontSize: '11px', padding: '3px 10px', borderRadius: '999px', color: 'var(--purple)', background: 'rgba(167,139,250,.12)', border: '1px solid ' + 'rgba(167,139,250,.3)' }}>AR</span>
                <div style={{ width: '230px', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', direction: 'rtl', boxShadow: '0 20px 40px -20px rgba(0,0,0,.6)' }}>
                  <div style={{ width: '100%', aspectRatio: '16/9', background: 'linear-gradient(135deg, var(--purple) 0%, var(--pink) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>🖼️</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '20px' }}>
                    <span style={{ alignSelf: 'flex-start', fontFamily: 'monospace', fontSize: '10.5px', fontWeight: 700, color: 'var(--purple)', background: 'rgba(167,139,250,.14)', border: '1px solid ' + 'rgba(167,139,250,.3)', padding: '4px 10px', borderRadius: '999px' }}>تصميم</span>
                    <h3 style={{ fontSize: '16px', fontWeight: 800, margin: 0 }}>١٠ أنماط Flexbox</h3>
                    <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6, margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>الأنماط اللي بتتكرر في أي مشروع حقيقي.</p>
                    <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', paddingTop: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'var(--coral)' }} />
                        <span style={{ fontSize: '12px', fontWeight: 700 }}>أمير ك.</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11.5px', color: 'var(--muted)' }}>⏱️ ٥ د</div>
                    </div>
                  </div>
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
                <div style={{ width: '100%', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 20px 40px -20px rgba(0,0,0,.6)' }}>
                  <div style={{ width: '100%', aspectRatio: '16/9', background: 'linear-gradient(135deg, var(--blue) 0%, var(--purple) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>🖼️</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '20px' }}>
                    <span style={{ alignSelf: 'flex-start', fontFamily: 'monospace', fontSize: '10.5px', fontWeight: 700, color: 'var(--blue)', background: 'rgba(96,165,250,.14)', border: '1px solid ' + 'rgba(96,165,250,.3)', padding: '4px 10px', borderRadius: '999px' }}>DESIGN</span>
                    <h3 style={{ fontSize: '16px', fontWeight: 800, margin: 0 }}>10 Flexbox Patterns to Know</h3>
                    <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6, margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>The patterns that show up again and again.</p>
                    <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', paddingTop: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'var(--coral)' }} />
                        <span style={{ fontSize: '12px', fontWeight: 700 }}>Amir K.</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11.5px', color: 'var(--muted)' }}>⏱️ 5 min</div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: '10px' }}>
                <span style={{ fontFamily: 'monospace', fontSize: '11px', padding: '3px 10px', borderRadius: '999px', color: 'var(--purple)', background: 'rgba(167,139,250,.12)', border: '1px solid ' + 'rgba(167,139,250,.3)', alignSelf: 'center' }}>AR</span>
                <div style={{ width: '100%', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', direction: 'rtl', boxShadow: '0 20px 40px -20px rgba(0,0,0,.6)' }}>
                  <div style={{ width: '100%', aspectRatio: '16/9', background: 'linear-gradient(135deg, var(--purple) 0%, var(--pink) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>🖼️</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '20px' }}>
                    <span style={{ alignSelf: 'flex-start', fontFamily: 'monospace', fontSize: '10.5px', fontWeight: 700, color: 'var(--purple)', background: 'rgba(167,139,250,.14)', border: '1px solid ' + 'rgba(167,139,250,.3)', padding: '4px 10px', borderRadius: '999px' }}>تصميم</span>
                    <h3 style={{ fontSize: '16px', fontWeight: 800, margin: 0 }}>١٠ أنماط Flexbox</h3>
                    <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6, margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>الأنماط اللي بتتكرر في أي مشروع حقيقي.</p>
                    <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', paddingTop: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'var(--coral)' }} />
                        <span style={{ fontSize: '12px', fontWeight: 700 }}>أمير ك.</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11.5px', color: 'var(--muted)' }}>⏱️ ٥ د</div>
                    </div>
                  </div>
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
          <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--blue) 0%, var(--purple) 100%)', color: '#1c1533', fontFamily: 'monospace', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(96,165,250,0.3)' }}>3</span>
          <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--blue)', letterSpacing: '0.5px' }}>CODE EDITOR · محرر الكود</span>
        </div>
        <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 16px', background: 'linear-gradient(135deg, var(--text) 0%, var(--blue) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Try it yourself</h2>
        <p style={{ color: 'var(--muted)', fontSize: '15px', margin: '0 0 24px', lineHeight: 1.6 }}>
          Write HTML, CSS, and JavaScript below to build the blog card. The preview updates in real-time.
        </p>
        <CodeEditor
          initialHtml={`<div class="blog-card">
  <div class="card-image">
    <div class="image-placeholder">🖼️</div>
  </div>
  <div class="card-content">
    <span class="category">DESIGN</span>
    <h3 class="card-title">10 Flexbox Patterns to Know</h3>
    <p class="card-excerpt">The patterns that show up again and again.</p>
    <div class="card-footer">
      <div class="author">
        <div class="author-avatar"></div>
        <span class="author-name">Amir K.</span>
      </div>
      <span class="read-time">⏱️ 5 min</span>
    </div>
  </div>
</div>`}
          initialCss={`.blog-card {
  display: flex;
  flex-direction: column;
  width: 280px;
  background: #212844;
  border: 1px solid rgba(255,255,255,0.09);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px -20px rgba(0,0,0,0.6);
}

.card-image {
  width: 100%;
  aspect-ratio: 16/9;
  background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-placeholder {
  font-size: 24px;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
}

.category {
  align-self: flex-start;
  font-family: monospace;
  font-size: 10.5px;
  font-weight: 700;
  color: #60a5fa;
  background: rgba(96,165,250,0.14);
  border: 1px solid rgba(96,165,250,0.3);
  padding: 4px 10px;
  border-radius: 999px;
}

.card-title {
  font-size: 16px;
  font-weight: 800;
  margin: 0;
  color: #eef0f8;
}

.card-excerpt {
  font-size: 13px;
  color: #8d93ac;
  line-height: 1.6;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-footer {
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding-top: 6px;
}

.author {
  display: flex;
  align-items: center;
  gap: 8px;
}

.author-avatar {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #ff6b4a;
}

.author-name {
  font-size: 12px;
  font-weight: 700;
  color: #eef0f8;
}

.read-time {
  font-size: 11.5px;
  color: #8d93ac;
}`}
          initialJs={`// Add interactivity here
const card = document.querySelector('.blog-card');
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
            initialHtml={`<div class="blog-card">
  <div class="card-image">
    <div class="image-placeholder">🖼️</div>
  </div>
  <div class="card-content">
    <span class="category">DESIGN</span>
    <h3 class="card-title">10 Flexbox Patterns Every Beginner Should Know</h3>
    <p class="card-excerpt">From centering a div to building full page layouts, these are the patterns that show up again and again in real projects.</p>
    <div class="card-footer">
      <div class="author">
        <div class="author-avatar"></div>
        <span class="author-name">Amir K.</span>
      </div>
      <span class="read-time">⏱️ 5 min read</span>
    </div>
  </div>
</div>`}
            initialCss={`.blog-card {
  display: flex;
  flex-direction: column;
  width: 280px;
  background: #212844;
  border: 1px solid rgba(255,255,255,0.09);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px -20px rgba(0,0,0,0.6);
}

.card-image {
  width: 100%;
  aspect-ratio: 16/9;
  background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-placeholder {
  font-size: 24px;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
}

.category {
  align-self: flex-start;
  font-family: monospace;
  font-size: 10.5px;
  font-weight: 700;
  color: #60a5fa;
  background: rgba(96,165,250,0.14);
  border: 1px solid rgba(96,165,250,0.3);
  padding: 4px 10px;
  border-radius: 999px;
}

.card-title {
  font-size: 16px;
  font-weight: 800;
  margin: 0;
  color: #eef0f8;
}

.card-excerpt {
  font-size: 14px;
  color: #8d93ac;
  line-height: 1.6;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-footer {
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding-top: 8px;
}

.author {
  display: flex;
  align-items: center;
  gap: 10px;
}

.author-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #ff6b4a;
}

.author-name {
  font-size: 14px;
  font-weight: 700;
  color: #eef0f8;
}

.read-time {
  font-size: 12px;
  color: #8d93ac;
}`}
            initialJs={`// Add interactivity here
const card = document.querySelector('.blog-card');
card.addEventListener('mouseenter', () => {
  card.style.transform = 'translateY(-4px)';
  card.style.transition = 'transform 0.2s ease';
});
card.addEventListener('mouseleave', () => {
  card.style.transform = 'translateY(0)';
});`}
            height="600px"
            readOnly={true}
          />
        )}
      </section> */}

      {/* Section 5: Assets */}
      <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '40px', marginTop: '32px', boxShadow: '0 4px 20px -8px rgba(0,0,0,0.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--blue) 0%, var(--purple) 100%)', color: '#1c1533', fontFamily: 'monospace', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(96,165,250,0.3)' }}>5</span>
          <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--blue)', letterSpacing: '0.5px' }}>ASSETS · الأصول</span>
        </div>
        <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 16px', background: 'linear-gradient(135deg, var(--text) 0%, var(--blue) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Real files, included</h2>
        <p style={{ color: 'var(--muted)', fontSize: '15px', margin: '0 0 24px', lineHeight: 1.6 }}>
          Ships in <code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '4px 10px', fontSize: '0.9em' }}>/assets</code> next to this page — <code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '4px 10px', fontSize: '0.9em' }}>avatar.svg</code> is reused from the Testimonial Card, the other two are new.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginTop: '6px' }}>
          {[
            { name: 'Cover illustration', ar: 'رسمة الغلاف', file: 'assets/blog-cover.svg', icon: '🖼️', preview: 'cover' },
            { name: 'Author avatar (reused)', ar: 'صورة المؤلف (معاد استخدامها)', file: 'assets/avatar.svg', icon: '👤', preview: 'avatar' },
            { name: 'Read-time icon', ar: 'أيقونة وقت القراءة', file: 'assets/clock-icon.svg', icon: '⏱️', preview: 'clock' },
          ].map((asset) => (
            <div key={asset.name} style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '16px', padding: '20px' }}>
              <div style={{ background: 'var(--bg)', borderRadius: '12px', height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', fontSize: '36px' }}>
                {asset.icon}
              </div>
              <h4 style={{ margin: '0 0 6px', fontSize: '15px', fontWeight: 600 }}>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', lineHeight: 1.3 }}>
                  <span>{asset.name}</span>
                  <span style={{ fontSize: '0.85em', color: 'var(--muted)', direction: 'rtl', textAlign: 'right' }}>{asset.ar}</span>
                </span>
              </h4>
              <span style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--blue)', direction: 'ltr', display: 'inline-block', marginTop: '8px', padding: '4px 8px', background: 'var(--bg)', borderRadius: '6px' }}>{asset.file}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: Guides */}
      <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '40px', marginTop: '32px', boxShadow: '0 4px 20px -8px rgba(0,0,0,0.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--blue) 0%, var(--purple) 100%)', color: '#1c1533', fontFamily: 'monospace', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(96,165,250,0.3)' }}>6</span>
          <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--blue)', letterSpacing: '0.5px' }}>GUIDES · الشرح</span>
        </div>

        <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 24px', background: 'linear-gradient(135deg, var(--text) 0%, var(--blue) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Anatomy</h2>
        <div style={{ display: 'flex', gap: '26px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <div style={{ background: 'var(--bg)', borderRadius: '16px', padding: '44px 30px', flex: '1 1 340px', display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{ width: '280px', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative' }}>
              <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--blue)', color: 'var(--blue)', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap', top: '20px', right: '-6px' }}>1 · cover</div>
              <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--blue)', color: 'var(--blue)', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap', top: '100px', right: '-6px' }}>2 · tag</div>
              <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--blue)', color: 'var(--blue)', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap', top: '132px', right: '-16px' }}>3 · title</div>
              <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--blue)', color: 'var(--blue)', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap', top: '170px', right: '-6px' }}>4 · excerpt</div>
              <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--blue)', color: 'var(--blue)', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap', top: '222px', right: '-10px' }}>5 · meta row</div>
              <div style={{ width: '100%', aspectRatio: '16/9', background: 'linear-gradient(135deg, var(--blue) 0%, var(--purple) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px' }}>🖼️</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '20px' }}>
                <span style={{ alignSelf: 'flex-start', fontFamily: 'monospace', fontSize: '10.5px', fontWeight: 700, color: 'var(--blue)', background: 'rgba(96,165,250,.14)', border: '1px solid ' + 'rgba(96,165,250,.3)', padding: '4px 10px', borderRadius: '999px' }}>DESIGN</span>
                <h3 style={{ fontSize: '16px', fontWeight: 800, margin: 0 }}>10 Flexbox Patterns</h3>
                <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6, margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>The patterns that show up again and again in real projects.</p>
                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', paddingTop: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'var(--coral)' }} />
                    <span style={{ fontSize: '12px', fontWeight: 700 }}>Amir K.</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11.5px', color: 'var(--muted)' }}>⏱️ 5 min</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              { en: '<b>Card</b> — Flex, column, no gap (image touches edges)', ar: '<b>الكارت</b> — Flex، عمودي، من غير gap (الصورة لاصقة بالحواف)' },
              { en: '<b>Content block</b> — nested Flex, column, gap 12px', ar: '<b>بلوك المحتوى</b> — Flex متداخل، عمودي، gap ١٢px' },
              { en: '<b>5. Meta row</b> — nested Flex, row, space-between, pushed to bottom with margin-top:auto', ar: '<b>٥. صف المؤلف</b> — Flex متداخل، أفقي، space-between، مدفوع لتحت بـ margin-top:auto' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', padding: '12px 0', borderBottom: '1px solid var(--border)', alignItems: 'start' }}>
                <div style={{ direction: 'ltr', textAlign: 'left', fontSize: '14px', lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: item.en }} />
                <div style={{ direction: 'rtl', textAlign: 'right', unicodeBidi: 'isolate', fontSize: '14px', lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: item.ar }} />
              </div>
            ))}
          </div>
        </div>

        <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '32px 0 24px', background: 'linear-gradient(135deg, var(--text) 0%, var(--blue) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Spec</h2>
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
              { element: 'Card / الكارت', property: 'Radius / الاستدارة', value: '16px + overflow:hidden' },
              { element: 'Cover / الغلاف', property: 'Aspect ratio / النسبة', value: '16 / 9' },
              { element: 'Content / المحتوى', property: 'Padding / الحشو', value: '20px' },
              { element: 'Content / المحتوى', property: 'Gap / المسافة', value: '12px' },
              { element: 'Title / العنوان', property: 'Size / weight', value: '16px / 800' },
              { element: 'Excerpt / المقتطف', property: 'Line clamp / تقصير السطر', value: '2 lines' },
              { element: 'Meta row / صف المؤلف', property: 'justify-content', value: 'space-between' },
              { element: 'Avatar / الصورة', property: 'Size / الحجم', value: '26×26px, round' },
            ].map((row, i) => (
              <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '16px', fontSize: '14px', verticalAlign: 'top' }}>{row.element}</td>
                <td style={{ padding: '16px', fontSize: '14px', verticalAlign: 'top' }}>{row.property}</td>
                <td style={{ padding: '16px', fontSize: '14px', verticalAlign: 'top' }}><code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '4px 10px', fontSize: '0.9em' }}>{row.value}</code></td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '32px 0 24px', background: 'linear-gradient(135deg, var(--text) 0%, var(--blue) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Build steps</h2>
        {[
          { title: 'HTML skeleton / هيكل الـHTML', hint: 'An <code>article</code> with an <code>img</code> (cover) and a <code>div.content</code> holding tag, title, excerpt, and meta row.', code: 'Keep the cover image as a direct, separate child of the article — not inside <code>.content</code> — so it can bleed to the card\'s edges.' },
          { title: 'Card = column flex, content = nested column flex', hint: 'The article itself is a flex column (image, then content). Inside, <code>.content</code> is its own flex column with a gap.', code: 'article{display:flex;flex-direction:column;} .content{display:flex;flex-direction:column;gap:12px;padding:20px;}' },
          { title: 'Keep the cover from distorting', hint: 'The cover must always keep the same width/height ratio no matter how wide the card is.', code: 'aspect-ratio:16/9; object-fit:cover; width:100%;' },
          { title: 'Pin the meta row to the bottom', hint: 'Whether the excerpt is one line or three, the author row should always sit at the card\'s bottom edge.', code: 'On <code>.meta</code>: <code>margin-top:auto;</code>' },
          { title: 'Split the meta row in two', hint: 'Author (avatar + name) on one side, read time on the other, pushed to opposite ends.', code: '.meta{display:flex;justify-content:space-between;align-items:center;}' },
        ].map((step, i) => (
          <div key={i} style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '16px', padding: '24px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
              <span style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--blue) 0%, var(--purple) 100%)', color: '#1c1533', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto', fontSize: '16px', boxShadow: '0 2px 8px rgba(96,165,250,0.3)' }}>{i + 1}</span>
              <span style={{ fontWeight: 700, fontSize: '16px', color: 'var(--text)' }}>{step.title}</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '12px' }}>
              <div style={{ direction: 'ltr', textAlign: 'left', fontSize: '15px', lineHeight: 1.8, color: '#dfe2f2' }} dangerouslySetInnerHTML={{ __html: step.hint }} />
              <div style={{ direction: 'rtl', textAlign: 'right', unicodeBidi: 'isolate', fontSize: '15px', lineHeight: 1.8, color: '#dfe2f2' }} dangerouslySetInnerHTML={{ __html: step.hint.replace(/HTML/g, 'الـHTML').replace(/article/g, 'article').replace(/img/g, 'img').replace(/div/g, 'div').replace(/code/g, 'code') }} />
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
          <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--blue) 0%, var(--purple) 100%)', color: '#1c1533', fontFamily: 'monospace', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(96,165,250,0.3)' }}>6</span>
          <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--blue)', letterSpacing: '0.5px' }}>DISCUSSION · نقاش وأسئلة</span>
        </div>
        <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 24px', background: 'linear-gradient(135deg, var(--text) 0%, var(--blue) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Common questions</h2>
        {[
          { 
            q: { en: 'Why is my cover image stretched or squished?', ar: 'ليه صورة الغلاف بتاعتي متمططة أو متقصفة؟' },
            a: { en: 'You\'re missing <code>object-fit:cover</code>. Without it, a fixed-ratio image stretches to fill its box instead of cropping neatly.', ar: 'ناقصك <code>object-fit:cover</code>. من غيرها، الصورة بنسبة ثابتة بتتمطط عشان تملأ الصندوق بدل ما تتقص بشكل نضيف.' }
          },
          { 
            q: { en: 'How do I keep the author row at the bottom when excerpts vary in length?', ar: 'إزاي أخلي صف المؤلف في القاع لما المقتطفات بتختلف في الطول؟' },
            a: { en: 'Use <code>margin-top:auto</code> on the meta row inside the flex column — no fixed heights or absolute positioning needed.', ar: 'استخدم <code>margin-top:auto</code> على صف المؤلف جوه الـ flex العمودي — من غير أي heights ثابتة أو absolute positioning.' }
          },
          { 
            q: { en: 'Should I truncate very long titles too?', ar: 'لازم أقصّر العناوين الطويلة جدًا كمان؟' },
            a: { en: 'Yes, for consistency — use the same <code>-webkit-line-clamp</code> trick on the title, usually limited to 1–2 lines depending on card width.', ar: 'آه، عشان التناسق — استخدم نفس حيلة <code>-webkit-line-clamp</code> على العنوان، غالبًا سطر أو اتنين حسب عرض الكارت.' }
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
          <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--blue) 0%, var(--purple) 100%)', color: '#1c1533', fontFamily: 'monospace', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(96,165,250,0.3)' }}>7</span>
          <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--blue)', letterSpacing: '0.5px' }}>PROJECT COMPLETION · إنهاء المشروع</span>
        </div>
        <h2 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 24px', background: 'linear-gradient(135deg, var(--text) 0%, var(--blue) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Self-check checklist</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '24px 0' }}>
          {[
            { en: 'Card and content block are both flex columns', ar: 'الكارت وبلوك المحتوى الاتنين flex عمودي' },
            { en: 'Cover image keeps its 16:9 ratio with object-fit:cover', ar: 'صورة الغلاف محافظة على نسبة ١٦:٩ بـ object-fit:cover' },
            { en: 'Meta row stays pinned to the bottom regardless of excerpt length', ar: 'صف المؤلف ثابت في القاع مهما كان طول المقتطف' },
            { en: 'Long excerpts clamp to 2 lines instead of overflowing', ar: 'المقتطفات الطويلة بتتقص عند سطرين بدل ما تفيض' },
            { en: 'Works at desktop, tablet, mobile; supports LTR and RTL', ar: 'شغالة في ديسكتوب وتابلت وموبايل؛ بتدعم LTR وRTL' },
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
            <div style={{ height: '100%', background: 'linear-gradient(90deg, var(--blue) 0%, var(--teal) 100%)', width: `${progress}%`, borderRadius: '999px', transition: 'all 0.4s ease', boxShadow: '0 0 20px rgba(96,165,250,0.4)' }} />
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
              🎉 Nice work — on to component 03: Feature Card / شغل تمام — يلا مكوّن ٣: Feature Card
            </div>
          )}
        </div>
      </section>

      <footer style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '13px', marginTop: '60px', padding: '24px', borderTop: '1px solid var(--border)' }}>
        📝 Component Library · Marketing Track · Sample 2 of 8
      </footer>
      </div>
    </PageLayout>
  );
}
