'use client';

import { useState } from 'react';
import CodeEditor from '@/components/CodeEditor';
import PageLayout from '@/components/PageLayout';
import PageSidebar from '@/components/PageSidebar';
import { getTopicNavigation } from '@/data/navigation';

export default function FooterExercise() {
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
              07 / 08
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
                Complete Footer Design
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--muted)', margin: 0 }}>
                This is the final result you'll achieve by completing this exercise.
              </p>
            </div>
            
            <footer style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '16px', padding: '36px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
                <div style={{ flex: '1.6 1 240px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '30px', height: '30px', borderRadius: '10px', background: 'linear-gradient(135deg,var(--pink),var(--purple))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', color: '#3a1526', fontWeight: 800 }}>F</div>
                    <span style={{ fontWeight: 800, fontSize: '17px' }}>FlexKit</span>
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--muted)', margin: 0, maxWidth: '240px' }}>Build faster with reusable Flexbox components.</p>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <a href="#" style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'var(--bg)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>🌐</a>
                    <a href="#" style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'var(--bg)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>✉️</a>
                    <a href="#" style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'var(--bg)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>💬</a>
                  </div>
                </div>
                <div style={{ flex: '1 1 150px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <h4 style={{ fontSize: '13px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.04em', margin: 0 }}>Product</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '14px' }}>Features</a>
                    <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '14px' }}>Pricing</a>
                    <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '14px' }}>Changelog</a>
                  </div>
                </div>
                <div style={{ flex: '1 1 150px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <h4 style={{ fontSize: '13px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.04em', margin: 0 }}>Company</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '14px' }}>About</a>
                    <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '14px' }}>Careers</a>
                    <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '14px' }}>Blog</a>
                  </div>
                </div>
                <div style={{ flex: '1 1 150px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <h4 style={{ fontSize: '13px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.04em', margin: 0 }}>Resources</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '14px' }}>Docs</a>
                    <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '14px' }}>Support</a>
                    <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '14px' }}>Community</a>
                  </div>
                </div>
              </div>
              <div style={{ height: '1px', background: 'var(--border)', margin: '32px 0 24px' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '18px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '13px', color: 'var(--muted)' }}>© 2026 FlexKit. All rights reserved.</span>
                <div style={{ display: 'flex', gap: '24px' }}>
                  <a href="#" style={{ fontSize: '13px', color: 'var(--muted)', textDecoration: 'none' }}>Privacy Policy</a>
                  <a href="#" style={{ fontSize: '13px', color: 'var(--muted)', textDecoration: 'none' }}>Terms of Service</a>
                </div>
              </div>
            </footer>
          </div>
        )}

      {/* Eyebrow */}
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 700, color: 'var(--pink)', background: 'var(--pink-dim)', border: '1px solid ' + 'rgba(244,114,182,.35)', padding: '6px 14px', borderRadius: '999px', marginBottom: '18px' }}>
        📋 Component Reference / مرجع مكوّن
      </div>

      {/* Tier Row */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '22px' }}>
        <span style={{ fontFamily: 'monospace', fontSize: '12px', padding: '5px 10px', borderRadius: '7px', border: '1px solid var(--border)', color: 'var(--teal)', borderColor: 'rgba(94,234,212,.35)', background: 'var(--teal-dim)' }}>Starter</span>
        <span style={{ fontFamily: 'monospace', fontSize: '12px', padding: '5px 10px', borderRadius: '7px', border: '1px solid var(--border)', color: 'var(--muted)' }}>5 Flex Containers</span>
        <span style={{ fontFamily: 'monospace', fontSize: '12px', padding: '5px 10px', borderRadius: '7px', border: '1px solid var(--border)', color: 'var(--muted)' }}>~25 min · ~٢٥ دقيقة</span>
      </div>

      {/* Title */}
      <h1 style={{ fontSize: '36px', fontWeight: 800, margin: '0 0 10px' }}>
        Site <span style={{ color: 'var(--pink)' }}>Footer</span>
      </h1>

      {/* Section 1: Project Brief */}
      <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '20px', padding: '34px 34px 38px', marginTop: '26px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--pink)', fontFamily: 'monospace', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>1</span>
          <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--pink)' }}>PROJECT BRIEF · بريف المشروع</span>
        </div>
        <h2 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 14px' }}>What you're building · اللي هتبنيه</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '26px', marginBottom: '20px' }}>
          <div style={{ direction: 'ltr', textAlign: 'left', fontSize: '15px', lineHeight: 1.8 }}>Build a full site footer: a brand column (logo, tagline, social icons) plus 3 link columns, all wrapping into a responsive row — followed by a bottom bar with copyright text and legal links. This is the most "sections at once" component yet, but every piece reuses a pattern from an earlier card.</div>
          <div style={{ direction: 'rtl', textAlign: 'right', unicodeBidi: 'isolate', fontSize: '15px', lineHeight: 1.8 }}>ابنِ فوتر موقع كامل: عمود براند (لوجو، تاجلاين، أيقونات سوشيال) زائد ٣ أعمدة روابط، كلهم بيلفوا في صف متجاوب — يتبعهم شريط سفلي فيه نص حقوق النشر وروابط قانونية. ده أكتر مكوّن فيه "أقسام مع بعض" لحد دلوقتي، بس كل جزء فيه بيعيد استخدام حيلة من كارت قبل كده.</div>
        </div>
        <h2 style={{ fontSize: '17px', fontWeight: 800, margin: '0 0 14px' }}>Requirements · المتطلبات</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {[
            { en: 'Brand column takes more horizontal space than each link column — not equal widths', ar: 'عمود البراند ياخد مساحة أفقية أكتر من كل عمود روابط — مش عرض متساوي' },
            { en: 'All 4 columns wrap onto their own line on mobile instead of squeezing', ar: 'الأعمدة الـ٤ بتلف كل واحد في سطره في الموبايل بدل ما تتزنق' },
            { en: 'Bottom bar splits copyright and legal links to opposite ends on desktop, stacks on mobile', ar: 'الشريط السفلي بيفرّق حقوق النشر والروابط القانونية لأقصى طرفين في الديسكتوب، وبيترص في الموبايل' },
            { en: 'Works correctly mirrored in Arabic (RTL)', ar: 'شغالة صح متعكوسة في العربي (RTL)' },
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
          <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--pink)', fontFamily: 'monospace', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>2</span>
          <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--pink)' }}>DESIGN PREVIEW · معاينة التصميم</span>
        </div>
        <h2 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 14px' }}>Desktop, tablet, mobile — English & Arabic together</h2>
        <p style={{ color: 'var(--muted)', fontSize: '15px', margin: '0 0 18px' }}>Watch the 4 columns collapse into a single stacked list at the mobile tab.</p>
        
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
                background: activeFrame === tab.key ? 'var(--pink)' : 'var(--surface-2)',
                border: activeFrame === tab.key ? 'var(--pink)' : '1px solid var(--border)',
                color: activeFrame === tab.key ? '#3a1526' : 'var(--text)',
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
                  <footer style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '16px', padding: '32px' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '36px' }}>
                      <div style={{ flex: '1.6 1 220px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                          <div style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'linear-gradient(135deg,var(--pink),var(--purple))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: '#3a1526', fontWeight: 800 }}>F</div>
                          <span style={{ fontWeight: 800, fontSize: '15px' }}>FlexKit</span>
                        </div>
                        <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0, maxWidth: '220px' }}>Build faster with reusable Flexbox components.</p>
                        <div style={{ display: 'flex', gap: '10px' }}>
                          <a href="#" style={{ width: '34px', height: '34px', borderRadius: '9px', background: 'var(--bg)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>🌐</a>
                          <a href="#" style={{ width: '34px', height: '34px', borderRadius: '9px', background: 'var(--bg)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>✉️</a>
                          <a href="#" style={{ width: '34px', height: '34px', borderRadius: '9px', background: 'var(--bg)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>💬</a>
                        </div>
                      </div>
                      <div style={{ flex: '1 1 140px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <h4 style={{ fontSize: '12px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.04em', margin: 0 }}>Product</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                          <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '13.5px' }}>Features</a>
                          <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '13.5px' }}>Pricing</a>
                          <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '13.5px' }}>Changelog</a>
                        </div>
                      </div>
                      <div style={{ flex: '1 1 140px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <h4 style={{ fontSize: '12px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.04em', margin: 0 }}>Company</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                          <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '13.5px' }}>About</a>
                          <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '13.5px' }}>Careers</a>
                          <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '13.5px' }}>Blog</a>
                        </div>
                      </div>
                      <div style={{ flex: '1 1 140px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <h4 style={{ fontSize: '12px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.04em', margin: 0 }}>Resources</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                          <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '13.5px' }}>Docs</a>
                          <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '13.5px' }}>Support</a>
                          <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '13.5px' }}>Community</a>
                        </div>
                      </div>
                    </div>
                    <div style={{ height: '1px', background: 'var(--border)', margin: '28px 0 20px' }}></div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '12.5px', color: 'var(--muted)' }}>© 2026 FlexKit. All rights reserved.</span>
                      <div style={{ display: 'flex', gap: '20px' }}>
                        <a href="#" style={{ fontSize: '12.5px', color: 'var(--muted)', textDecoration: 'none' }}>Privacy Policy</a>
                        <a href="#" style={{ fontSize: '12.5px', color: 'var(--muted)', textDecoration: 'none' }}>Terms of Service</a>
                      </div>
                    </div>
                  </footer>
                </div>
                {/* Arabic */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '11px', padding: '3px 10px', borderRadius: '999px', color: 'var(--purple)', background: 'rgba(167,139,250,.12)', border: '1px solid ' + 'rgba(167,139,250,.3)', alignSelf: 'flex-end' }}>AR · عربي</span>
                  <footer style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '16px', padding: '32px', direction: 'rtl' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '36px' }}>
                      <div style={{ flex: '1.6 1 220px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                          <div style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'linear-gradient(135deg,var(--pink),var(--purple))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: '#3a1526', fontWeight: 800 }}>ف</div>
                          <span style={{ fontWeight: 800, fontSize: '15px' }}>فلكس كِت</span>
                        </div>
                        <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0, maxWidth: '220px' }}>ابنِ أسرع بمكوّنات Flexbox قابلة لإعادة الاستخدام.</p>
                        <div style={{ display: 'flex', gap: '10px' }}>
                          <a href="#" style={{ width: '34px', height: '34px', borderRadius: '9px', background: 'var(--bg)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>🌐</a>
                          <a href="#" style={{ width: '34px', height: '34px', borderRadius: '9px', background: 'var(--bg)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>✉️</a>
                          <a href="#" style={{ width: '34px', height: '34px', borderRadius: '9px', background: 'var(--bg)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>💬</a>
                        </div>
                      </div>
                      <div style={{ flex: '1 1 140px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <h4 style={{ fontSize: '12px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.04em', margin: 0 }}>المنتج</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                          <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '13.5px' }}>المميزات</a>
                          <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '13.5px' }}>الأسعار</a>
                          <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '13.5px' }}>سجل التحديثات</a>
                        </div>
                      </div>
                      <div style={{ flex: '1 1 140px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <h4 style={{ fontSize: '12px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.04em', margin: 0 }}>الشركة</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                          <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '13.5px' }}>من نحن</a>
                          <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '13.5px' }}>وظائف</a>
                          <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '13.5px' }}>المدونة</a>
                        </div>
                      </div>
                      <div style={{ flex: '1 1 140px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <h4 style={{ fontSize: '12px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.04em', margin: 0 }}>مصادر</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                          <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '13.5px' }}>التوثيق</a>
                          <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '13.5px' }}>الدعم</a>
                          <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '13.5px' }}>المجتمع</a>
                        </div>
                      </div>
                    </div>
                    <div style={{ height: '1px', background: 'var(--border)', margin: '28px 0 20px' }}></div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '12.5px', color: 'var(--muted)' }}>© ٢٠٢٦ فلكس كِت. جميع الحقوق محفوظة.</span>
                      <div style={{ display: 'flex', gap: '20px' }}>
                        <a href="#" style={{ fontSize: '12.5px', color: 'var(--muted)', textDecoration: 'none' }}>سياسة الخصوصية</a>
                        <a href="#" style={{ fontSize: '12.5px', color: 'var(--muted)', textDecoration: 'none' }}>شروط الخدمة</a>
                      </div>
                    </div>
                  </footer>
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
                  <footer style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '16px', padding: '32px' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
                      <div style={{ flex: '1.6 1 220px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                          <div style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'linear-gradient(135deg,var(--pink),var(--purple))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: '#3a1526', fontWeight: 800 }}>F</div>
                          <span style={{ fontWeight: 800, fontSize: '15px' }}>FlexKit</span>
                        </div>
                        <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>Build faster with reusable components.</p>
                        <div style={{ display: 'flex', gap: '10px' }}>
                          <a href="#" style={{ width: '34px', height: '34px', borderRadius: '9px', background: 'var(--bg)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>🌐</a>
                          <a href="#" style={{ width: '34px', height: '34px', borderRadius: '9px', background: 'var(--bg)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>✉️</a>
                        </div>
                      </div>
                      <div style={{ flex: '1 1 140px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <h4 style={{ fontSize: '12px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.04em', margin: 0 }}>Product</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                          <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '13.5px' }}>Features</a>
                          <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '13.5px' }}>Pricing</a>
                        </div>
                      </div>
                      <div style={{ flex: '1 1 140px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <h4 style={{ fontSize: '12px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.04em', margin: 0 }}>Company</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                          <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '13.5px' }}>About</a>
                          <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '13.5px' }}>Blog</a>
                        </div>
                      </div>
                    </div>
                    <div style={{ height: '1px', background: 'var(--border)', margin: '28px 0 20px' }}></div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '12.5px', color: 'var(--muted)' }}>© 2026 FlexKit.</span>
                      <div style={{ display: 'flex', gap: '20px' }}>
                        <a href="#" style={{ fontSize: '12.5px', color: 'var(--muted)', textDecoration: 'none' }}>Privacy</a>
                        <a href="#" style={{ fontSize: '12.5px', color: 'var(--muted)', textDecoration: 'none' }}>Terms</a>
                      </div>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '15px', marginTop: '14px', marginBottom: 0 }}>Tablet override: fewer link columns and links shown, columns keep wrapping naturally.</p>
          </div>
        )}

        {/* Mobile Frame */}
        {activeFrame === 'mobile' && (
          <div>
            <div style={{ fontFamily: 'monospace', fontSize: '12px', color: 'var(--muted)', marginBottom: '12px' }}>frame width: 375px</div>
            <div style={{ background: 'var(--bg)', borderRadius: '16px', padding: '28px 16px', maxWidth: '375px', margin: '0 auto' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '34px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '11px', padding: '3px 10px', borderRadius: '999px', color: 'var(--blue)', background: 'rgba(96,165,250,.12)', border: '1px solid ' + 'rgba(96,165,250,.3)', alignSelf: 'flex-start' }}>EN</span>
                  <footer style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '16px', padding: '22px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                          <div style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'linear-gradient(135deg,var(--pink),var(--purple))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: '#3a1526', fontWeight: 800 }}>F</div>
                          <span style={{ fontWeight: 800, fontSize: '15px' }}>FlexKit</span>
                        </div>
                        <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>Build faster with reusable components.</p>
                        <div style={{ display: 'flex', gap: '10px' }}>
                          <a href="#" style={{ width: '34px', height: '34px', borderRadius: '9px', background: 'var(--bg)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>🌐</a>
                          <a href="#" style={{ width: '34px', height: '34px', borderRadius: '9px', background: 'var(--bg)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>✉️</a>
                        </div>
                      </div>
                      <div style={{ flex: '1 1 140px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <h4 style={{ fontSize: '12px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.04em', margin: 0 }}>Product</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                          <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '13.5px' }}>Features</a>
                          <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '13.5px' }}>Pricing</a>
                        </div>
                      </div>
                      <div style={{ flex: '1 1 140px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <h4 style={{ fontSize: '12px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.04em', margin: 0 }}>Company</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                          <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '13.5px' }}>About</a>
                          <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '13.5px' }}>Blog</a>
                        </div>
                      </div>
                    </div>
                    <div style={{ height: '1px', background: 'var(--border)', margin: '28px 0 20px' }}></div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px' }}>
                      <span style={{ fontSize: '12.5px', color: 'var(--muted)' }}>© 2026 FlexKit.</span>
                      <div style={{ display: 'flex', gap: '20px' }}>
                        <a href="#" style={{ fontSize: '12.5px', color: 'var(--muted)', textDecoration: 'none' }}>Privacy</a>
                        <a href="#" style={{ fontSize: '12.5px', color: 'var(--muted)', textDecoration: 'none' }}>Terms</a>
                      </div>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '15px', marginTop: '14px', marginBottom: 0 }}>Mobile override: <code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '4px 10px', fontSize: '0.9em' }}>footer-top{'{'}flex-direction:column{'}'}</code>, <code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '4px 10px', fontSize: '0.9em' }}>footer-bottom{'{'}flex-direction:column; align-items:flex-start{'}'}</code>.</p>
          </div>
        )}
      </section>

      {/* Section 3: Solution */}
      {/* <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '20px', padding: '34px 34px 38px', marginTop: '26px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'linear-gradient(135deg, var(--pink) 0%, var(--coral) 100%)', color: '#3a1628', fontFamily: 'monospace', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>3</span>
            <span style={{ fontSize: '13px', fontWeight: 700', color: 'var(--pink)' }}>SOLUTION</span>
          </div>
          <button
            onClick={() => setShowSolution(!showSolution)}
            style={{
              padding: '8px 16px',
              background: showSolution ? 'var(--surface-2)' : 'var(--pink)',
              color: showSolution ? 'var(--pink)' : '#3a1628',
              border: showSolution ? '1px solid var(--pink)' : 'none',
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
            <pre style={{ fontSize: '13px', color: 'var(--text)', margin: 0, whiteSpace: 'pre-wrap' }}>{`<footer class="footer">
  <div class="footer-container">
    <div class="footer-brand">
      <div class="logo">🚀</div>
      <span class="brand-name">BrandName</span>
      <p class="brand-desc">Building the future of web development.</p>
    </div>
    <div class="footer-links">
      <div class="link-column">
        <h4>Product</h4>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Security</a>
      </div>
      <div class="link-column">
        <h4>Company</h4>
        <a href="#">About</a>
        <a href="#">Blog</a>
        <a href="#">Careers</a>
      </div>
      <div class="link-column">
        <h4>Resources</h4>
        <a href="#">Docs</a>
        <a href="#">API</a>
        <a href="#">Support</a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2024 BrandName. All rights reserved.</span>
    <div class="social-links">
      <a href="#">Twitter</a>
      <a href="#">GitHub</a>
      <a href="#">LinkedIn</a>
    </div>
  </div>
</footer>

.footer {
  background: #1a2030;
  border-top: 1px solid rgba(255,255,255,0.1);
  padding: 48px 32px 24px;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  gap: 48px;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-brand {
  display: flex;
  flex-direction: column;
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

.brand-desc {
  font-size: 14px;
  color: #8d93ac;
  margin: 0;
}

.footer-links {
  display: flex;
  gap: 48px;
}

.link-column {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.link-column h4 {
  font-size: 14px;
  font-weight: 700;
  color: #eef0f8;
  margin: 0;
}

.link-column a {
  color: #8d93ac;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
}

.link-column a:hover {
  color: #eef0f8;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  margin-top: 32px;
  border-top: 1px solid rgba(255,255,255,0.1);
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.social-links {
  display: flex;
  gap: 16px;
}

.social-links a {
  color: #8d93ac;
  text-decoration: none;
  font-size: 14px;
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
  }
  .footer-links {
    flex-wrap: wrap;
  }
}`}</pre>
          </div>
        )}
      </section> */}

      {/* Section 3: Assets */}
      <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '20px', padding: '34px 34px 38px', marginTop: '26px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--pink)', fontFamily: 'monospace', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>4</span>
          <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--pink)' }}>ASSETS · الأصول</span>
        </div>
        <h2 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 16px' }}>Real files, included</h2>
        <p style={{ color: 'var(--muted)', fontSize: '15px', margin: '0 0 24px' }}>3 new generic social icons (deliberately not brand logos — a globe, an envelope, a chat bubble); <code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '1px 7px', fontSize: '0.88em' }}>logo-mark.svg</code> is reused from the Navigation Bar.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px', marginTop: '6px' }}>
          {[
            { name: 'Website', ar: 'الموقع', file: 'assets/globe-icon.svg', icon: '🌐' },
            { name: 'Email', ar: 'البريد', file: 'assets/mail-icon.svg', icon: '✉️' },
            { name: 'Community', ar: 'المجتمع', file: 'assets/chat-icon.svg', icon: '💬' },
            { name: 'Logo (reused)', ar: 'اللوجو (معاد استخدامه)', file: 'assets/logo-mark.svg', icon: 'F' },
          ].map((asset) => (
            <div key={asset.name} style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '14px', padding: '16px' }}>
              <div style={{ background: 'var(--bg)', borderRadius: '10px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px', fontSize: '24px' }}>{asset.icon}</div>
              <h4 style={{ margin: '0 0 4px', fontSize: '14px', fontWeight: 600 }}>
                <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', lineHeight: 1.3 }}>
                  <span>{asset.name}</span>
                  <span style={{ fontSize: '0.85em', color: 'var(--muted)', direction: 'rtl', textAlign: 'right' }}>{asset.ar}</span>
                </span>
              </h4>
              <span style={{ fontFamily: 'monospace', fontSize: '11.5px', color: 'var(--pink)', direction: 'ltr', display: 'inline-block', marginTop: '6px', padding: '4px 8px', background: 'var(--bg)', borderRadius: '6px' }}>{asset.file}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Code Editor */}
      <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '20px', padding: '34px 34px 38px', marginTop: '26px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--pink)', fontFamily: 'monospace', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>4</span>
          <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--pink)' }}>CODE EDITOR · محرر الكود</span>
        </div>
        <h2 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 16px' }}>Try it yourself</h2>
        <p style={{ color: 'var(--muted)', fontSize: '15px', margin: '0 0 24px' }}>
          Write HTML, CSS, and JavaScript below to build the footer with a brand column, link columns, and bottom bar. The preview updates in real-time.
        </p>
        <CodeEditor
          initialHtml={`<footer class="site-footer">
  <div class="footer-top">
    <div class="f-brand">
      <div class="flogo">
        <span class="logo-icon">F</span>
        <span>FlexKit</span>
      </div>
      <p>Build faster with reusable Flexbox components.</p>
      <div class="f-social">
        <a href="#">🌐</a>
        <a href="#">✉️</a>
        <a href="#">💬</a>
      </div>
    </div>
    <div class="f-col">
      <h4>Product</h4>
      <div class="f-links">
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Changelog</a>
      </div>
    </div>
    <div class="f-col">
      <h4>Company</h4>
      <div class="f-links">
        <a href="#">About</a>
        <a href="#">Careers</a>
        <a href="#">Blog</a>
      </div>
    </div>
    <div class="f-col">
      <h4>Resources</h4>
      <div class="f-links">
        <a href="#">Docs</a>
        <a href="#">Support</a>
        <a href="#">Community</a>
      </div>
    </div>
  </div>
  <div class="f-divider"></div>
  <div class="footer-bottom">
    <span class="copyright">© 2026 FlexKit. All rights reserved.</span>
    <div class="legal-links">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
    </div>
  </div>
</footer>`}
          initialCss={`.site-footer {
  background: #212844;
  border: 1px solid rgba(255,255,255,0.09);
  border-radius: 16px;
  padding: 32px;
}

.footer-top {
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
}

.f-brand {
  flex: 1.6 1 220px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.flogo {
  display: flex;
  align-items: center;
  gap: 9px;
}

.logo-icon {
  width: 26px;
  height: 26px;
  border-radius: 8px;
  background: linear-gradient(135deg, #f472b6, #a78bfa);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 12px;
  color: #3a1526;
}

.f-brand p {
  font-size: 13px;
  color: #8d93ac;
  margin: 0;
  max-width: 220px;
}

.f-social {
  display: flex;
  gap: 10px;
}

.f-social a {
  width: 34px;
  height: 34px;
  border-radius: 9px;
  background: #12151f;
  border: 1px solid rgba(255,255,255,0.09);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 14px;
}

.f-col {
  flex: 1 1 140px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.f-col h4 {
  font-size: 12px;
  color: #8d93ac;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin: 0;
}

.f-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.f-links a {
  color: #eef0f8;
  text-decoration: none;
  font-size: 13.5px;
}

.f-links a:hover {
  color: #f472b6;
}

.f-divider {
  height: 1px;
  background: rgba(255,255,255,0.09);
  margin: 28px 0 20px;
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.copyright {
  font-size: 12.5px;
  color: #8d93ac;
}

.legal-links {
  display: flex;
  gap: 20px;
}

.legal-links a {
  font-size: 12.5px;
  color: #8d93ac;
  text-decoration: none;
}

.legal-links a:hover {
  color: #eef0f8;
}

@media (max-width: 768px) {
  .footer-top {
    flex-direction: column;
    gap: 22px;
  }
  
  .site-footer {
    padding: 22px;
  }
  
  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
}`}
          initialJs={`// No JavaScript needed for this component
// The footer is fully responsive using CSS Flexbox`}
          height="700px"
        />
      </section>

      {/* Section 5: Guides */}
      <section style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '20px', padding: '34px 34px 38px', marginTop: '26px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--pink)', fontFamily: 'monospace', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>5</span>
          <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--pink)' }}>GUIDES · الشرح</span>
        </div>

        <h2 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 24px' }}>Anatomy</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ background: 'var(--bg)', borderRadius: '16px', padding: '30px 20px', position: 'relative' }}>
            <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--pink)', color: 'var(--pink)', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap', top: '-14px', left: '16px' }}>1 · footer-top (wraps)</div>
            <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--pink)', color: 'var(--pink)', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap', top: '-14px', left: '260px' }}>2 · brand col: flex 1.6</div>
            <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--pink)', color: 'var(--pink)', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap', bottom: '-14px', left: '16px' }}>3 · footer-bottom: space-between</div>
            <footer style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '16px', padding: '26px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '36px' }}>
                <div style={{ flex: '1.6 1 220px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                    <div style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'linear-gradient(135deg,var(--pink),var(--purple))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: '#3a1526', fontWeight: 800 }}>F</div>
                    <span style={{ fontWeight: 800, fontSize: '15px' }}>FlexKit</span>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>Build faster.</p>
                </div>
                <div style={{ flex: '1 1 140px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <h4 style={{ fontSize: '12px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.04em', margin: 0 }}>Product</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '13.5px' }}>Features</a>
                  </div>
                </div>
                <div style={{ flex: '1 1 140px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <h4 style={{ fontSize: '12px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.04em', margin: 0 }}>Company</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '13.5px' }}>About</a>
                  </div>
                </div>
              </div>
              <div style={{ height: '1px', background: 'var(--border)', margin: '28px 0 20px' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '12.5px', color: 'var(--muted)' }}>© 2026</span>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <a href="#" style={{ fontSize: '12.5px', color: 'var(--muted)', textDecoration: 'none' }}>Privacy</a>
                </div>
              </div>
            </footer>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              { en: '<b>footer-top</b> — Flex row, <code>flex-wrap:wrap</code>, brand column gets <code>flex:1.6</code> vs <code>flex:1</code> for link columns', ar: '<b>footer-top</b> — Flex أفقي، <code>flex-wrap:wrap</code>، عمود البراند ياخد <code>flex:1.6</code> مقابل <code>flex:1</code> لأعمدة الروابط' },
              { en: '<b>Each f-col</b> — its own flex column, gap between links', ar: '<b>كل f-col</b> — flex عمودي بتاعه، gap بين الروابط' },
              { en: '<b>footer-bottom</b> — Flex row, <code>space-between</code>, same pattern as the Navigation Bar\'s top level', ar: '<b>footer-bottom</b> — Flex أفقي، <code>space-between</code>، نفس نمط المستوى الأعلى بتاع الناف بار' },
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
            <tr><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}>footer-top</td><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}>flex-wrap</td><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}><code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '1px 7px', fontSize: '0.88em' }}>wrap</code></td></tr>
            <tr><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}>footer-top</td><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}>Gap / المسافة</td><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}><code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '1px 7px', fontSize: '0.88em' }}>36px</code></td></tr>
            <tr><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}>Brand column / عمود البراند</td><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}>flex-grow</td><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}><code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '1px 7px', fontSize: '0.88em' }}>1.6</code></td></tr>
            <tr><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}>Link columns / أعمدة الروابط</td><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}>flex-grow</td><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}><code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '1px 7px', fontSize: '0.88em' }}>1</code></td></tr>
            <tr><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}>f-col</td><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}>Gap / المسافة</td><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}><code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '1px 7px', fontSize: '0.88em' }}>12px</code> (heading↔links), <code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '1px 7px', fontSize: '0.88em' }}>10px</code> (between links)</td></tr>
            <tr><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}>footer-bottom</td><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}>justify-content</td><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}><code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '1px 7px', fontSize: '0.88em' }}>space-between</code></td></tr>
            <tr><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}>Divider / الفاصل</td><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}>Color / اللون</td><td style={{ padding: '10px', borderBottom: '1px solid var(--border)', fontSize: '13.5px', verticalAlign: 'top' }}><span style={{ display: 'inline-block', width: '14px', height: '14px', borderRadius: '4px', verticalAlign: '-2px', marginRight: '6px', border: '1px solid var(--border)', background: 'rgba(255,255,255,.09)' }}></span><code style={{ fontFamily: 'monospace', background: 'var(--surface-2)', color: 'var(--yellow)', border: '1px solid var(--border)', borderRadius: '6px', padding: '1px 7px', fontSize: '0.88em' }}>var(--line)</code></td></tr>
          </tbody>
        </table>

        <h2 style={{ fontSize: '24px', fontWeight: 800, margin: '32px 0 24px' }}>Build steps</h2>
        {[
          { 
            title: '4 columns, one with more room',
            en: 'Brand column and 3 link columns share the same row, but the brand column should claim more space.',
            ar: 'عمود البراند و٣ أعمدة روابط في نفس الصف، بس عمود البراند لازم ياخد مساحة أكتر.',
            code: '.footer-top{display:flex;flex-wrap:wrap;gap:36px;} .f-brand{flex:1.6 1 220px;} .f-col{flex:1 1 140px;}',
            hintEn: 'Remember flex-grow ratios from the very first Flexbox lesson? This is that idea, applied for real.',
            hintAr: 'فاكر نسب flex-grow من أول درس Flexbox؟ ده هو نفس الكلام، مطبّق فعليًا.'
          },
          { 
            title: 'Let columns wrap on their own',
            en: 'You don\'t need a mobile media query to stack these columns — flex-wrap plus a sensible flex-basis handles it automatically as the row narrows.',
            ar: 'مش محتاج media query للموبايل عشان ترصّ الأعمدة دي — flex-wrap مع flex-basis معقول بيتكفل بالموضوع أوتوماتيك مع ما الصف بيضيق.',
            code: 'flex-basis values (220px, 140px) act as minimum widths',
            hintEn: 'The flex-basis values (220px, 140px) act as minimum widths — once 4 of them can\'t fit side by side, they wrap to new lines on their own.',
            hintAr: 'قيم flex-basis (220px، 140px) بتشتغل كحد أدنى للعرض — لما الـ٤ أعمدة متعرفش تتظبط جنب بعض، بيلفوا لأسطر جديدة لوحدهم.'
          },
          { 
            title: 'Bottom bar: copyright vs legal links',
            en: 'Same 2-group pattern as the Navigation Bar — copyright text on one end, a nested row of legal links on the other.',
            ar: 'نفس نمط المجموعتين بتاع الناف بار — نص حقوق النشر في طرف، صف متداخل من الروابط القانونية في الطرف التاني.',
            code: '.footer-bottom{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;} .legal-links{display:flex;gap:20px;}',
            hintEn: 'Reuse the space-between pattern you already built in the Navigation Bar.',
            hintAr: 'عيد استخدام نمط space-between اللي بنيتاه في الناف بار.'
          },
        ].map((step, i) => (
          <div key={i} style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '14px', padding: '20px 22px', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
              <span style={{ width: '30px', height: '30px', borderRadius: '9px', background: 'var(--pink)', color: '#3a1526', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto', fontSize: '14px' }}>{i + 1}</span>
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
          <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--pink)', fontFamily: 'monospace', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>6</span>
          <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--pink)' }}>DISCUSSION · نقاش وأسئلة</span>
        </div>
        <h2 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 24px' }}>Common questions</h2>
        {[
          { 
            q: { en: 'Why flex:1.6 and not a fixed pixel width for the brand column?', ar: 'ليه flex:1.6 مش عرض ثابت بالبكسل لعمود البراند؟' },
            a: { en: 'A ratio scales proportionally with the container — a fixed pixel width breaks the balance the moment the footer\'s total width changes. Ratios are the whole point of flex-grow.', ar: 'النسبة بتتمدد بشكل متناسب مع الحاوية — عرض ثابت بالبكسل بيكسر التوازن أول ما عرض الفوتر يتغيّر. النسب هي بيت القصيد في flex-grow.' }
          },
          { 
            q: { en: 'Do I need a media query for mobile, or does flex-wrap handle it?', ar: 'محتاج media query للموبايل، ولا flex-wrap بيتكفل بالموضوع؟' },
            a: { en: 'With sensible flex-basis values, flex-wrap handles the stacking automatically. You only need a media query if you want to change the order or hide specific columns.', ar: 'مع قيم flex-basis معقولة، flex-wrap بيتكفل بالترص أوتوماتيك. محتاج media query لو عايز تغيّر الترتيب أو تخفي أعمدة معينة.' }
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
              <span style={{ fontFamily: 'monospace', color: 'var(--pink)', flex: '0 0 auto', fontSize: '18px', transition: '0.2s', transform: openAccordions[i] ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
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
          <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--pink)', fontFamily: 'monospace', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>7</span>
          <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--pink)' }}>PROJECT COMPLETION · إنهاء المشروع</span>
        </div>
        <h2 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 24px' }}>Self-check checklist</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '18px 0' }}>
          {[
            { en: 'Brand column takes more space than link columns (flex:1.6 vs flex:1)', ar: 'عمود البراند ياخد مساحة أكتر من أعمدة الروابط (flex:1.6 مقابل flex:1)' },
            { en: 'Columns wrap naturally without forcing a mobile media query', ar: 'الأعمدة بتلف لوحدها من غير إجبار media query للموبايل' },
            { en: 'Bottom bar uses space-between on desktop, stacks on mobile', ar: 'الشريط السفلي بيستخدم space-between في الديسكتوب، وبيترص في الموبايل' },
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
            <div style={{ height: '100%', background: 'linear-gradient(90deg, var(--pink) 0%, var(--teal) 100%)', width: `${progress}%`, borderRadius: '99px', transition: 'all 0.3s' }} />
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
              🎉 On to component 08: Social Proof / يلا مكوّن ٨: Social Proof
            </div>
          )}
        </div>
      </section>

      {/* Navigation Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', marginTop: '26px', flexWrap: 'wrap' }}>
        <a href="/exercises/flexbox/navigation-bar" style={{ fontFamily: 'monospace', fontSize: '13px', color: 'var(--muted)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 16px', borderRadius: '10px', background: 'var(--surface-2)' }}>← 06 · Navigation Bar</a>
        <a href="/css/flexbox" style={{ fontFamily: 'monospace', fontSize: '13px', color: 'var(--muted)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 16px', borderRadius: '10px', background: 'var(--surface-2)' }}>🧩 All components</a>
        <a href="#" style={{ fontFamily: 'monospace', fontSize: '13px', color: 'var(--muted)', textDecoration: 'none', border: '1px solid var(--border)', padding: '10px 16px', borderRadius: '10px', background: 'var(--surface-2)', opacity: 0.5, pointerEvents: 'none' }}>08 · Social Proof →</a>
      </div>

      <footer style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '13px', marginTop: '40px' }}>
        📋 Component Library · Marketing Track · 7 of 8
      </footer>
      </div>
    </PageLayout>
  );
}
