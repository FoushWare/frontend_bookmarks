'use client';

import React, { useState, useEffect } from 'react';
import { flexboxContent as enContent } from '@/data/css/flexbox.en';
import { flexboxContent as arContent } from '@/data/css/flexbox.ar';
import ResourceGuide, { ResourceSection } from './ResourceGuide';
import PageLayout from './PageLayout';
import PageSidebar from './PageSidebar';
import { getTopicNavigation } from '@/data/navigation';

interface FlexboxLessonProps {
  // locale: 'en' | 'ar';
}

export default function FlexboxLesson(/* { locale }: FlexboxLessonProps */) {
  const [locale, setLocale] = useState<'en' | 'ar'>('ar');
  const [mounted, setMounted] = useState(false);
  const [projectsTab, setProjectsTab] = useState<'library' | 'individual'>('library');
  const [activeTab, setActiveTab] = useState<string>('');
  const [state, setState] = useState({
    direction: 'row',
    wrap: 'nowrap',
    justify: 'flex-start',
    align: 'stretch',
  });
  const [basisValues, setBasisValues] = useState([80, 80, 80]);
  const [growValues, setGrowValues] = useState([0, 0, 0]);
  const [shrinkValues, setShrinkValues] = useState([1, 1, 1]);
  const [orderValues, setOrderValues] = useState([0, 0, 0, 0]);
  const [longText, setLongText] = useState(false);

  useEffect(() => {
    const lang = localStorage.getItem('language') || 'ar';
    setLocale(lang as 'en' | 'ar');
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleLanguageChange = () => {
      const lang = localStorage.getItem('language') || 'ar';
      setLocale(lang as 'en' | 'ar');
    };

    window.addEventListener('storage', handleLanguageChange);
    window.addEventListener('languageChanged', handleLanguageChange);

    return () => {
      window.removeEventListener('storage', handleLanguageChange);
      window.removeEventListener('languageChanged', handleLanguageChange);
    };
  }, []);

  if (!mounted) return null;

  const content = locale === 'en' ? enContent : arContent;

  const isRTL = locale === 'ar';

  // Get navigation data
  const topicNav = getTopicNavigation('flexbox');

  const updateState = (key: string, value: string) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  const updateBasis = (index: number, delta: number) => {
    setBasisValues((prev) => {
      const newValues = [...prev];
      newValues[index] = Math.min(220, Math.max(20, newValues[index] + delta * 20));
      return newValues;
    });
  };

  const updateGrow = (index: number, delta: number) => {
    setGrowValues((prev) => {
      const newValues = [...prev];
      newValues[index] = Math.min(5, Math.max(0, newValues[index] + delta));
      return newValues;
    });
  };

  const updateShrink = (index: number, delta: number) => {
    setShrinkValues((prev) => {
      const newValues = [...prev];
      newValues[index] = Math.min(3, Math.max(0, newValues[index] + delta));
      return newValues;
    });
  };

  const updateOrder = (index: number, delta: number) => {
    setOrderValues((prev) => {
      const newValues = [...prev];
      newValues[index] = Math.min(3, Math.max(-3, newValues[index] + delta));
      return newValues;
    });
  };

  const renderCode = () => {
    return (
      <div
        style={{
          background: '#0d0f17',
          border: '1px solid var(--border)',
          borderRadius: '12px',
          padding: '16px 18px',
          fontSize: '14px',
          whiteSpace: 'pre',
          overflowX: 'auto',
          marginTop: '16px',
          direction: 'ltr',
          textAlign: 'left',
          unicodeBidi: 'embed',
          fontFamily: "'JetBrains Mono', monospace",
        }}
      >
        <span style={{ color: 'var(--muted)' }}>.container {'{'}</span>
        {'\n'}
        {'  '}
        <span style={{ color: 'var(--teal)' }}>display</span>: <span style={{ color: 'var(--yellow)' }}>flex</span>;
        {'\n'}
        {'  '}
        <span style={{ color: 'var(--teal)' }}>flex-direction</span>:{' '}
        <span style={{ color: 'var(--yellow)' }}>{state.direction}</span>;
        {'\n'}
        {'  '}
        <span style={{ color: 'var(--teal)' }}>flex-wrap</span>:{' '}
        <span style={{ color: 'var(--yellow)' }}>{state.wrap}</span>;
        {'\n'}
        {'  '}
        <span style={{ color: 'var(--teal)' }}>justify-content</span>:{' '}
        <span style={{ color: 'var(--yellow)' }}>{state.justify}</span>;
        {'\n'}
        {'  '}
        <span style={{ color: 'var(--teal)' }}>align-items</span>:{' '}
        <span style={{ color: 'var(--yellow)' }}>{state.align}</span>;
        {'\n'}
        <span style={{ color: 'var(--muted)' }}>{'}'}</span>
      </div>
    );
  };

  return (
    <PageLayout
      sidebar={
        <PageSidebar
          category="CSS"
          topic="Flexbox"
          topicAr="فليكس بوكس"
          navigation={topicNav?.navigation || []}
          navigationAr={topicNav?.navigationAr || []}
          sections={topicNav?.sections || []}
          sectionsAr={topicNav?.sectionsAr || []}
        />
      }
    >
      <div
        style={{
          color: 'var(--text)',
          fontFamily: isRTL ? '"Cairo", sans-serif' : '"Inter", sans-serif',
          lineHeight: 1.85,
        }}
      >
        {/* Header */}
      <div>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '.02em',
            color: 'var(--coral)',
            background: 'var(--coral-dim)',
            border: '1px solid rgba(255,107,74,.35)',
            padding: '6px 14px',
            borderRadius: '999px',
            marginBottom: '20px',
          }}
        >
          {content.eyebrow}
        </span>
        <h1
          style={{
            fontSize: '44px',
            fontWeight: 800,
            margin: '0 0 14px',
            lineHeight: 1.3,
          }}
          dangerouslySetInnerHTML={{ __html: content.heroTitle }}
        />
        <p
          style={{
            fontSize: '18px',
            color: 'var(--muted)',
            maxWidth: '640px',
            margin: '0 0 36px',
          }}
          dangerouslySetInnerHTML={{ __html: content.subtitle }}
        />

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '14px',
            marginBottom: '8px',
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              style={{
                width: '76px',
                height: '76px',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '22px',
                fontWeight: 800,
                color: '#12151f',
                animation: `pop 0.6s ease both ${i * 0.1}s`,
                background: [
                  'var(--coral)',
                  'var(--yellow)',
                  'var(--teal)',
                  'var(--purple)',
                  'var(--blue)',
                  'var(--coral)',
                ][i - 1],
              }}
            >
              {i}
            </div>
          ))}
        </div>
      </div>

      {/* Sections */}
      {content.sections.map((section: any, idx: number) => {
        // Map section index to ID from navigation data
        const sectionIds: string[] = [
          'container-and-items',
          'flex-direction',
          'justify-content',
          'align-items',
          'flex-grow-shrink-basis',
          'order',
          'justify-content-gallery',
          'align-items-gallery'
        ];
        const sectionId = sectionIds[idx] || `section-${idx}`;

        return (
          <section
            key={idx}
            id={sectionId}
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '20px',
              padding: '36px 36px 40px',
              marginTop: '28px',
              overflow: 'visible',
              width: '100%',
            }}
          >
          <div
            style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--teal)',
              marginBottom: '8px',
            }}
          >
            {section.eyebrow}
          </div>
          <h2
            style={{
              fontSize: '26px',
              fontWeight: 800,
              margin: '0 0 14px',
            }}
            dangerouslySetInnerHTML={{ __html: section.title }}
          />
          <p
            style={{
              color: 'var(--muted)',
              fontSize: '16px',
              maxWidth: '680px',
              margin: '0 0 22px',
            }}
            dangerouslySetInnerHTML={{ __html: section.description }}
          />

          {section.diagram && (
            <div
              style={{
                border: '2px dashed rgba(94,234,212,.5)',
                borderRadius: '16px',
                padding: '26px',
                display: 'flex',
                gap: '16px',
                position: 'relative',
                marginTop: '8px',
                overflow: 'auto',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-13px',
                  right: isRTL ? 'auto' : '20px',
                  left: isRTL ? '20px' : 'auto',
                  background: 'var(--surface)',
                  padding: '0 8px',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '12px',
                  color: 'var(--teal)',
                  direction: 'ltr',
                  zIndex: 1,
                }}
              >
                .container {'{ display: flex; }'}
              </div>
              {['عنصر ١', 'عنصر ٢', 'عنصر ٣', 'عنصر ٤', 'عنصر ٥', 'عنصر ٦'].map((label, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    background: ['var(--coral)', 'var(--yellow)', 'var(--teal)', 'var(--purple)', 'var(--blue)', 'var(--coral)'][i],
                    color: '#3a1a0e',
                    borderRadius: '10px',
                    padding: '22px 10px',
                    textAlign: 'center',
                    fontWeight: 800,
                    fontSize: '15px',
                  }}
                >
                  {label}
                </div>
              ))}
            </div>
          )}

          {section.axes && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '30px 10px 10px',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '320px',
                  height: '200px',
                  border: '2px dashed rgba(167,139,250,.5)',
                  borderRadius: '14px',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: 'var(--purple)',
                    top: '6px',
                    right: '50%',
                    transform: 'translateX(50%)',
                  }}
                >
                  {locale === 'en' ? 'Cross Axis' : 'العرضي (Cross)'}
                </div>
                <div
                  style={{
                    position: 'absolute',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: 'var(--purple)',
                    bottom: '6px',
                    right: '12px',
                  }}
                >
                  {locale === 'en' ? 'Main Axis' : 'الرئيسي (Main)'}
                </div>
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    right: '12px',
                    left: '12px',
                    height: '2px',
                    background: 'var(--coral)',
                    transform: 'translateY(-50%)',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      right: '-2px',
                      top: '-5px',
                      border: '6px solid transparent',
                      borderLeftColor: 'var(--coral)',
                    }}
                  />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    bottom: '14px',
                    left: '50%',
                    width: '2px',
                    background: 'var(--teal)',
                    transform: 'translateX(-50%)',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      right: '-5px',
                      border: '6px solid transparent',
                      borderTopColor: 'var(--teal)',
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {section.callout && (
            <div
              style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'flex-start',
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                borderRadius: '14px',
                padding: '16px 18px',
                margin: '20px 0',
                fontSize: '15px',
                color: '#dfe2f2',
              }}
            >
              <span style={{ fontSize: '20px', flex: '0 0 auto' }}>
                {section.callout.icon}
              </span>
              <div>
                <b>{section.callout.title}</b>{' '}
                <span dangerouslySetInnerHTML={{ __html: section.callout.content }} />
              </div>
            </div>
          )}

          {section.controls && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '10px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {Object.entries(section.controls as Record<string, any>).map(([key, control]: [string, any]) => (
                  <div key={key}>
                    <span
                      style={{
                        fontSize: '13px',
                        fontWeight: 700,
                        color: 'var(--muted)',
                        marginBottom: '8px',
                        display: 'block',
                      }}
                    >
                      {control.label}
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {control.options.map((option: string) => (
                        <button
                          key={option}
                          onClick={() => updateState(key, option)}
                          style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            direction: 'ltr',
                            background: state[key as keyof typeof state] === option ? 'var(--coral)' : 'var(--surface-2)',
                            color: state[key as keyof typeof state] === option ? '#3a1a0e' : 'var(--text)',
                            border: '1px solid var(--border)',
                            borderRadius: '8px',
                            padding: '7px 11px',
                            fontSize: '12.5px',
                            cursor: 'pointer',
                            transition: '0.15s',
                            fontWeight: state[key as keyof typeof state] === option ? 700 : 400,
                          }}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '100%' }}>
                <div
                  style={{
                    background: 'var(--surface-2)',
                    border: '1px solid var(--border)',
                    borderRadius: '14px',
                    padding: '12px',
                    overflow: 'visible',
                    display: 'flex',
                    gap: '4px',
                    flexDirection: state.direction.includes('column') ? 'column' : 'row',
                    flexWrap: state.wrap === 'wrap' ? 'wrap' : 'nowrap',
                    justifyContent: state.justify,
                    alignItems: state.align,
                    width: '100%',
                  }}
                >
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        minWidth: '32px',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 800,
                        fontSize: '12px',
                        color: '#12151f',
                        padding: '4px 0',
                        background: [
                          'var(--coral)',
                          'var(--yellow)',
                          'var(--teal)',
                          'var(--purple)',
                          'var(--blue)',
                          'var(--coral)',
                        ][i - 1],
                      }}
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <span
                  style={{
                    fontSize: '12.5px',
                    color: 'var(--muted)',
                  }}
                >
                  ↔ {locale === 'en' ? 'If you picked nowrap and can\'t see all the boxes, scroll inside the box left/right' : 'لو اخترت nowrap ومش شايف كل الصناديق، مرّر جواه شمال/يمين'}
                </span>
                {renderCode()}
              </div>
            </div>
          )}

          {section.growShrinkBasis && (
            <div>
              <div
                style={{
                  fontSize: '16.5px',
                  fontWeight: 800,
                  color: 'var(--text)',
                  marginTop: '26px',
                  marginBottom: '8px',
                }}
              >
                ١) الحجم الأساسي <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', fontWeight: 700, color: 'var(--teal)', background: 'var(--teal-dim)', borderRadius: '6px', padding: '2px 8px', marginInlineStart: '8px', direction: 'ltr', display: 'inline-block' }}>flex-basis</span>
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '14px', margin: '0 0 14px' }}>
                {locale === 'en' 
                  ? 'This is the item\'s original size before Flexbox starts distributing or shrinking anything. Here all three items have grow and shrink of 0, so what you see is exactly the basis, even if it goes outside the box boundaries.'
                  : 'ده حجم العنصر الأصلي قبل ما Flexbox يبدأ يوزّع أو يقصّر أي حاجة. هنا الثلاث صناديق grow و shrink بتاعتهم صفر، يعني اللي شايفه هو الـ basis بالظبط، حتى لو طلعت برّه حدود الصندوق.'}
              </p>
              <div
                style={{
                  background: 'var(--surface-2)',
                  border: '1px solid var(--border)',
                  borderRadius: '14px',
                  padding: '20px',
                  marginBottom: '8px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    gap: '10px',
                    marginBottom: '12px',
                    overflow: 'auto',
                  }}
                >
                  {basisValues.map((val, i) => (
                    <div
                      key={i}
                      style={{
                        height: '64px',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: '0 8px',
                        fontWeight: 800,
                        fontSize: '13.5px',
                        color: '#12151f',
                        flexShrink: 0,
                        flexBasis: `${val}px`,
                        background: ['var(--coral)', 'var(--teal)', 'var(--purple)'][i],
                      }}
                    >
                      {val}px
                    </div>
                  ))}
                </div>
                <span style={{ fontSize: '12.5px', color: 'var(--muted)' }}>
                  ↔ {locale === 'en' ? 'If the boxes exceed the container size, scroll inside' : 'لو الصناديق زادت عن حجم الصندوق، مرّر جواه — هي مش هتنكمش لإن shrink بتاعها صفر'}
                </span>
                <div style={{ display: 'flex', gap: '10px', marginTop: '14px' }}>
                  {[0, 1, 2].map((idx) => (
                    <div key={idx} style={{ flex: 1, background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '10px', padding: '10px', textAlign: 'center' }}>
                      <div style={{ fontSize: '11.5px', color: 'var(--muted)', marginBottom: '8px', fontFamily: "'JetBrains Mono', monospace", direction: 'ltr' }}>
                        box {idx + 1}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                        <button
                          onClick={() => updateBasis(idx, -1)}
                          style={{ width: '26px', height: '26px', borderRadius: '6px', border: '1px solid var(--border)', background: 'var(--surface-2)', color: 'var(--text)', fontWeight: 800, cursor: 'pointer', fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          {'−'}
                        </button>
                        <span style={{ minWidth: '46px', textAlign: 'center', fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', fontWeight: 700, color: 'var(--yellow)' }}>
                          {basisValues[idx]}px
                        </span>
                        <button
                          onClick={() => updateBasis(idx, 1)}
                          style={{ width: '26px', height: '26px', borderRadius: '6px', border: '1px solid var(--border)', background: 'var(--surface-2)', color: 'var(--text)', fontWeight: 800, cursor: 'pointer', fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          {'+'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {section.orderLab && (
            <div
              style={{
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                borderRadius: '14px',
                padding: '20px',
                marginBottom: '8px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                  marginBottom: '12px',
                }}
              >
                {orderValues.map((val, i) => (
                  <div
                    key={i}
                    style={{
                      height: '64px',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      padding: '0 8px',
                      fontWeight: 800,
                      fontSize: '13.5px',
                      color: '#12151f',
                      flexShrink: 0,
                      order: val,
                      background: ['var(--coral)', 'var(--teal)', 'var(--purple)', 'var(--blue)'][i],
                    }}
                  >
                    {i + 1} (order: {val})
                  </div>
                ))}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '14px' }}>
                {locale === 'en' ? 'Their actual order in HTML is fixed: 1 ← 2 ← 3 ← 4' : 'ترتيبهم الحقيقي في الـ HTML ثابت مش بيتغيّر: ١ ← ٢ ← ٣ ← ٤'}
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                {[0, 1, 2, 3].map((idx) => (
                  <div key={idx} style={{ flex: 1, background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '10px', padding: '10px', textAlign: 'center' }}>
                    <div style={{ fontSize: '11.5px', color: 'var(--muted)', marginBottom: '8px', fontFamily: "'JetBrains Mono', monospace", direction: 'ltr' }}>
                      {'item ' + (idx + 1)}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                      <button
                        onClick={() => updateOrder(idx, -1)}
                        style={{ width: '26px', height: '26px', borderRadius: '6px', border: '1px solid var(--border)', background: 'var(--surface-2)', color: 'var(--text)', fontWeight: 800, cursor: 'pointer', fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {'−'}
                      </button>
                      <span style={{ minWidth: '46px', textAlign: 'center', fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', fontWeight: 700, color: 'var(--yellow)' }}>
                        {orderValues[idx]}
                      </span>
                      <button
                        onClick={() => updateOrder(idx, 1)}
                        style={{ width: '26px', height: '26px', borderRadius: '6px', border: '1px solid var(--border)', background: 'var(--surface-2)', color: 'var(--text)', fontWeight: 800, cursor: 'pointer', fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {'+'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              {section.orderWarning && (
                <div
                  style={{
                    fontSize: '12.5px',
                    color: 'var(--yellow)',
                    background: 'var(--surface)',
                    border: '1px solid rgba(255,209,102,.35)',
                    borderRadius: '10px',
                    padding: '10px 14px',
                    marginTop: '12px',
                    lineHeight: 1.8,
                  }}
                  dangerouslySetInnerHTML={{ __html: section.orderWarning }}
                />
              )}
            </div>
          )}

          {section.gallery && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
                gap: '14px',
                marginTop: '8px',
              }}
            >
              {(section.gallery as any[]).map((item: any, i: number) => (
                <div
                  key={i}
                  style={{
                    background: 'var(--surface-2)',
                    border: '1px solid var(--border)',
                    borderRadius: '14px',
                    padding: '16px',
                  }}
                >
                  <div
                    style={{
                      background: 'var(--bg)',
                      borderRadius: '10px',
                      padding: '10px',
                      display: 'flex',
                      gap: '8px',
                      height: '64px',
                      justifyContent: item.value,
                    }}
                  >
                    <div
                      style={{
                        width: '34px',
                        borderRadius: '7px',
                        flex: '0 0 auto',
                        background: 'var(--coral)',
                      }}
                    />
                    <div
                      style={{
                        width: '34px',
                        borderRadius: '7px',
                        flex: '0 0 auto',
                        background: 'var(--teal)',
                      }}
                    />
                    <div
                      style={{
                        width: '34px',
                        borderRadius: '7px',
                        flex: '0 0 auto',
                        background: 'var(--yellow)',
                      }}
                    />
                  </div>
                  <div
                    style={{
                      marginTop: '10px',
                      fontSize: '13px',
                      color: 'var(--muted)',
                    }}
                  >
                    <code style={{ color: 'var(--yellow)', fontSize: '12.5px' }}>{item.value}</code> — {item.description}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
        );
      })}

      {/* Exercises */}
      <section
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '20px',
          padding: '36px 36px 40px',
          marginTop: '28px',
        }}
      >
        <h2 style={{ fontSize: '26px', fontWeight: 800, margin: '0 0 14px' }}>
          {locale === 'en' ? 'Complete the code and see if you\'re right' : 'كمّل الكود وشوف لو صح'}
        </h2>
        <p
          style={{
            color: 'var(--muted)',
            fontSize: '16px',
            maxWidth: '680px',
            margin: '0 0 22px',
          }}
        >
          {locale === 'en' 
            ? 'Type in the missing value, hit "Check", and it\'ll tell you instantly whether you\'re right or wrong.'
            : 'اكتب القيمة الناقصة في الكود، دوس "تحقق"، وهيقولّك فورًا لو إجابتك صح أو غلط.'}
        </p>

        {content.exercises.map((exercise: any) => (
          <div
            key={exercise.id}
            style={{
              background: 'var(--surface-2)',
              border: '1px solid var(--border)',
              borderRadius: '14px',
              padding: '22px',
              marginBottom: '16px',
            }}
          >
            <p style={{ fontSize: '15px', margin: '0 0 14px', color: 'var(--text)' }}>
              {exercise.instruction}
            </p>
            <div
              style={{
                background: 'var(--bg)',
                borderRadius: '10px',
                padding: '14px',
                display: 'flex',
                gap: '8px',
                height: '84px',
                marginBottom: '14px',
                overflow: 'auto',
              }}
            >
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  style={{
                    width: '52px',
                    borderRadius: '8px',
                    flex: '0 0 auto',
                    background: [
                      'var(--coral)',
                      'var(--yellow)',
                      'var(--teal)',
                    ][i - 1],
                  }}
                />
              ))}
            </div>
            <div
              style={{
                background: '#0d0f17',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                padding: '14px 16px',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '14px',
                direction: 'ltr',
                textAlign: 'left',
                marginBottom: '14px',
              }}
            >
              <span style={{ color: 'var(--muted)' }}>.container {'{'}</span>
              <br />
              {'  '}
              <span style={{ color: 'var(--teal)' }}>display</span>: <span style={{ color: 'var(--yellow)' }}>flex</span>;
              <br />
              {'  '}
              <span style={{ color: 'var(--teal)' }}>{exercise.expectedProp}</span>:{' '}
              <span style={{ color: 'var(--yellow)' }}>{exercise.expectedValue}</span>;
              <br />
              <span style={{ color: 'var(--muted)' }}>{'}'}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Cheat Sheet */}
      <section
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '20px',
          padding: '36px 36px 40px',
          marginTop: '28px',
        }}
      >
        <div
          style={{
            fontSize: '13px',
            fontWeight: 700,
            color: 'var(--teal)',
            marginBottom: '8px',
          }}
        >
          🧰 {locale === 'en' ? 'Quick Reference' : 'للرجوع إليها بسرعة'}
        </div>
        <h2 style={{ fontSize: '26px', fontWeight: 800, margin: '0 0 14px' }}>
          {locale === 'en' ? 'Key Flexbox Properties' : 'أهم خصائص Flexbox'}
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px',
            marginTop: '8px',
          }}
        >
          <div>
            <h3 style={{ fontSize: '15px', color: 'var(--teal)', margin: '0 0 10px' }}>
              {locale === 'en' ? 'Container Properties' : 'خصائص على الحاوية'}
            </h3>
            {content.cheatSheet.container.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '10px',
                  padding: '9px 0',
                  borderBottom: '1px solid var(--border)',
                  fontSize: '13.5px',
                }}
              >
                <code style={{ color: 'var(--yellow)' }}>{item.property}</code>
                <span style={{ color: 'var(--muted)', fontSize: '13px', textAlign: isRTL ? 'right' : 'left' }}>
                  {item.description}
                </span>
              </div>
            ))}
          </div>
          <div>
            <h3 style={{ fontSize: '15px', color: 'var(--teal)', margin: '0 0 10px' }}>
              {locale === 'en' ? 'Item Properties' : 'خصائص على العنصر'}
            </h3>
            {content.cheatSheet.item.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '10px',
                  padding: '9px 0',
                  borderBottom: '1px solid var(--border)',
                  fontSize: '13.5px',
                }}
              >
                <code style={{ color: 'var(--yellow)' }}>{item.property}</code>
                <span style={{ color: 'var(--muted)', fontSize: '13px', textAlign: isRTL ? 'right' : 'left' }}>
                  {item.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary */}
      <section
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '20px',
          padding: '36px 36px 40px',
          marginTop: '28px',
        }}
      >
        <div
          style={{
            fontSize: '13px',
            fontWeight: 700,
            color: 'var(--teal)',
            marginBottom: '8px',
          }}
        >
          🧠 {locale === 'en' ? 'Summary' : 'الخلاصة'}
        </div>
        <h2 style={{ fontSize: '26px', fontWeight: 800, margin: '0 0 14px' }}>
          {locale === 'en' ? 'To remember Flexbox quickly, ask yourself 3 questions' : 'لو عايز تفتكر Flexbox بسرعة، اسأل نفسك ٣ أسئلة'}
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px',
            marginTop: '8px',
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '10px',
                padding: '9px 0',
                borderBottom: '1px solid var(--border)',
                fontSize: '13.5px',
              }}
            >
              <code style={{ color: 'var(--yellow)' }}>{content.summary.question1}</code>
              <span style={{ color: 'var(--muted)', fontSize: '13px' }}>{content.summary.answer1}</span>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '10px',
                padding: '9px 0',
                borderBottom: '1px solid var(--border)',
                fontSize: '13.5px',
              }}
            >
              <code style={{ color: 'var(--yellow)' }}>{content.summary.question2}</code>
              <span style={{ color: 'var(--muted)', fontSize: '13px' }}>{content.summary.answer2}</span>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '10px',
                padding: '9px 0',
                borderBottom: '1px solid var(--border)',
                fontSize: '13.5px',
              }}
            >
              <code style={{ color: 'var(--yellow)' }}>{content.summary.question3}</code>
              <span style={{ color: 'var(--muted)', fontSize: '13px' }}>{content.summary.answer3}</span>
            </div>
          </div>
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '10px',
                padding: '9px 0',
                borderBottom: '1px solid var(--border)',
                fontSize: '13.5px',
              }}
            >
              <code style={{ color: 'var(--yellow)' }}>gap</code>
              <span style={{ color: 'var(--muted)', fontSize: '13px' }}>{locale === 'en' ? 'spacing' : 'مسافات'}</span>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '10px',
                padding: '9px 0',
                borderBottom: '1px solid var(--border)',
                fontSize: '13.5px',
              }}
            >
              <code style={{ color: 'var(--yellow)' }}>
                flex-grow / flex-shrink / flex-basis
              </code>
              <span style={{ color: 'var(--muted)', fontSize: '13px' }}>{locale === 'en' ? 'sizes' : 'أحجام'}</span>
            </div>
          </div>
        </div>
        <p
          style={{
            color: 'var(--muted)',
            fontSize: '16px',
            maxWidth: '680px',
            margin: '18px 0 0',
          }}
        >
          {content.summary.note}
        </p>
      </section>

      <footer
        style={{
          textAlign: 'center',
          color: 'var(--muted)',
          fontSize: '13.5px',
          marginTop: '50px',
        }}
      >
        🎨 {locale === 'en' ? 'This page itself is designed using Flexbox — meaning you\'re learning Flexbox from Flexbox' : 'الصفحة دي نفسها متصممة باستخدام Flexbox — يعني إنت بتتعلّم Flexbox من Flexbox'}
      </footer>

      {/* Resource Sections */}
      <div style={{ marginTop: '60px' }}>
        {/* Reference Section */}
        <div id="reference" style={{ marginBottom: '40px' }}>
          <ResourceGuide
            sections={[
              {
                title: locale === 'en' ? 'References & Guides' : 'المراجع والأدلة',
                icon: '📖',
                links: [
                  { title: 'CSS-Tricks Flexbox Guide', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox', description: locale === 'en' ? 'Complete visual guide' : 'دليل بصري كامل' },
                  { title: 'MDN Flexbox Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout', description: locale === 'en' ? 'Official documentation' : 'التوثيق الرسمي' },
                ],
              },
            ]}
          />
        </div>

        {/* Exercises Section */}
        <div id="exercises" style={{ marginBottom: '40px' }}>
          <ResourceGuide
            sections={[
              {
                title: locale === 'en' ? 'Practice Exercises' : 'تمارين التدريب',
                icon: '✏️',
                links: [
                  {
                    title: locale === 'en' ? 'Flexbox Challenges' : 'تحديات Flexbox',
                    url: '/exercises/flexbox',
                    description: locale === 'en' ? 'Interactive coding challenges to master flexbox concepts' : 'تحديات برمجة تفاعلية لإتقان مفاهيم Flexbox',
                  },
                ],
              },
            ]}
          />
        </div>

        {/* Games Section */}
        <div id="games" style={{ marginBottom: '40px' }}>
          <ResourceGuide
            sections={[
              {
                title: locale === 'en' ? 'Gaming Practice' : 'التدريب بالألعاب',
                icon: '🎮',
                links: [
                  { title: 'Flexbox Froggy', url: 'https://flexboxfroggy.com', description: locale === 'en' ? 'Help a frog reach its lilypad with flexbox' : 'ساعد الضفدع على الوصول لورقة النيل باستخدام Flexbox' },
                  { title: 'Flexbox Defense', url: 'http://flexboxdefense.com', description: locale === 'en' ? 'Tower defense game powered by flexbox' : 'لعبة دفاع الأبراج مدعومة بـ Flexbox' },
                ],
              },
            ]}
          />
        </div>

        {/* Projects Section */}
        <div id="projects" style={{ marginBottom: '40px' }}>
          {/* Tabs */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '24px' }}>
            <button
              onClick={() => setProjectsTab('library')}
              style={{
                fontFamily: 'monospace',
                background: projectsTab === 'library' ? 'linear-gradient(135deg, var(--coral) 0%, var(--teal) 100%)' : 'var(--surface-2)',
                border: projectsTab === 'library' ? 'none' : '1px solid var(--border)',
                color: projectsTab === 'library' ? '#0e2440' : 'var(--text)',
                padding: '12px 24px',
                borderRadius: '12px',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: projectsTab === 'library' ? 700 : 600,
                transition: 'all 0.2s ease',
                boxShadow: projectsTab === 'library' ? '0 4px 12px rgba(255,107,74,0.3)' : 'none',
              }}
            >
              🛠️ {locale === 'en' ? 'Component Library' : 'مكتبة المكونات'}
            </button>
            <button
              onClick={() => setProjectsTab('individual')}
              style={{
                fontFamily: 'monospace',
                background: projectsTab === 'individual' ? 'linear-gradient(135deg, var(--coral) 0%, var(--teal) 100%)' : 'var(--surface-2)',
                border: projectsTab === 'individual' ? 'none' : '1px solid var(--border)',
                color: projectsTab === 'individual' ? '#0e2440' : 'var(--text)',
                padding: '12px 24px',
                borderRadius: '12px',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: projectsTab === 'individual' ? 700 : 600,
                transition: 'all 0.2s ease',
                boxShadow: projectsTab === 'individual' ? '0 4px 12px rgba(255,107,74,0.3)' : 'none',
              }}
            >
              📦 {locale === 'en' ? 'Individual Components' : 'مكونات فردية'}
            </button>
          </div>

          {/* Component Library Tab */}
          {projectsTab === 'library' && (
            <>
              <ResourceGuide
                sections={[
                  {
                    title: locale === 'en' ? 'Marketing Track - Component Library' : 'مسار التسويق - مكتبة المكونات',
                    icon: '🛠️',
                    links: [
                      {
                        title: locale === 'en' ? 'Build a complete component library using flexbox' : 'ابنِ مكتبة مكونات كاملة باستخدام Flexbox',
                        url: '/projects/flexbox/marketing-library',
                        description: locale === 'en' ? 'Step-by-step guide to build 8 marketing components' : 'دليل خطوة بخطوة لبناء 8 مكونات تسويقية',
                      },
                    ],
                  },
                ]}
              />

              {/* Component Flow */}
              <div style={{ marginTop: '32px', padding: '32px', background: 'var(--surface-2)', borderRadius: '20px', border: '1px solid var(--border)', boxShadow: '0 4px 20px -8px rgba(0,0,0,0.3)' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text)', marginBottom: '20px', background: 'linear-gradient(135deg, var(--text) 0%, var(--teal) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {locale === 'en' ? 'Component Flow' : 'تدفق المكونات'}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', justifyContent: 'center' }}>
                  {[
                    { icon: '💬', title: 'Testimonial Card', order: 1, url: '/exercises/flexbox/testimonial-card' },
                    { icon: '📝', title: 'Blog Card', order: 2, url: '/exercises/flexbox/blog-card' },
                    { icon: '🎯', title: 'Feature Card', order: 3, url: '/exercises/flexbox/feature-card' },
                    { icon: '💰', title: 'Pricing Card', order: 4, url: '/exercises/flexbox/pricing-card' },
                    { icon: '🔘', title: 'CTA Button', order: 5, url: '/exercises/flexbox/cta-button' },
                    { icon: '🧭', title: 'Navigation Bar', order: 6, url: '/exercises/flexbox/navigation-bar' },
                    { icon: '📋', title: 'Footer', order: 7, url: '/exercises/flexbox/footer' },
                    { icon: '⭐', title: 'Social Proof', order: 8, url: '#' },
                  ].map((component, index) => (
                    <React.Fragment key={component.order}>
                      <a
                        href={component.url}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        <div
                          style={{
                            background: 'var(--surface-3)',
                            border: '1px solid var(--border)',
                            borderRadius: '16px',
                            padding: '16px',
                            minWidth: '120px',
                            textAlign: 'center',
                            transition: 'all 0.2s ease',
                            cursor: 'pointer',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'var(--teal)';
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.boxShadow = '0 8px 24px rgba(94,234,212,0.3)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'var(--border)';
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        >
                          <div style={{ fontSize: '28px', marginBottom: '8px' }}>{component.icon}</div>
                          <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text)' }}>{component.title}</div>
                          <div style={{ fontSize: '10px', color: 'var(--muted)', marginTop: '4px' }}>#{component.order}</div>
                        </div>
                      </a>
                      {index < 7 && (
                        <div style={{ fontSize: '20px', color: 'var(--muted)' }}>→</div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
                <div style={{ marginTop: '24px', textAlign: 'center' }}>
                  <a
                    href="/projects/flexbox/marketing-library"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '14px 28px',
                      background: 'linear-gradient(135deg, var(--teal) 0%, var(--blue) 100%)',
                      color: '#0e2440',
                      textDecoration: 'none',
                      borderRadius: '14px',
                      fontWeight: 700,
                      fontSize: '15px',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 4px 16px rgba(94,234,212,0.4)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(94,234,212,0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(94,234,212,0.4)';
                    }}
                  >
                    🚀 {locale === 'en' ? 'Start Building' : 'ابدأ البناء'}
                  </a>
                </div>
              </div>
            </>
          )}

          {/* Individual Components Tab */}
          {projectsTab === 'individual' && (
            <ResourceGuide
              sections={[
                {
                  title: locale === 'en' ? 'Individual Components' : 'مكونات فردية',
                  icon: '📦',
                  links: [
                    {
                      title: locale === 'en' ? 'Button' : 'زر',
                      url: '/projects/flexbox/button',
                      description: locale === 'en' ? 'Practice building buttons with flexbox' : 'تدرب على بناء الأزرار باستخدام Flexbox',
                    },
                    {
                      title: locale === 'en' ? 'Card' : 'كارت',
                      url: '/projects/flexbox/card',
                      description: locale === 'en' ? 'Build card components with flexbox layout' : 'ابنِ مكونات الكارت باستخدام تخطيط Flexbox',
                    },
                    {
                      title: locale === 'en' ? 'Navbar' : 'شريط التنقل',
                      url: '/projects/flexbox/navbar',
                      description: locale === 'en' ? 'Create navigation bars with flexbox' : 'أنشئ أشرطة التنقل باستخدام Flexbox',
                    },
                    {
                      title: locale === 'en' ? 'Badge' : 'شارة',
                      url: '/projects/flexbox/badge',
                      description: locale === 'en' ? 'Design badge components' : 'صمم مكونات الشارات',
                    },
                    {
                      title: locale === 'en' ? 'Avatar' : 'صورة رمزية',
                      url: '/projects/flexbox/avatar',
                      description: locale === 'en' ? 'Build avatar components' : 'ابنِ مكونات الصور الرمزية',
                    },
                    {
                      title: locale === 'en' ? 'List' : 'قائمة',
                      url: '/projects/flexbox/list',
                      description: locale === 'en' ? 'Create list components with flexbox' : 'أنشئ مكونات القائمة باستخدام Flexbox',
                    },
                    {
                      title: locale === 'en' ? 'Input' : 'حقل إدخال',
                      url: '/projects/flexbox/input',
                      description: locale === 'en' ? 'Build input field components' : 'ابنِ مكونات حقول الإدخال',
                    },
                    {
                      title: locale === 'en' ? 'Toggle' : 'مفتاح تبديل',
                      url: '/projects/flexbox/toggle',
                      description: locale === 'en' ? 'Create toggle switch components' : 'أنشئ مكونات مفاتيح التبديل',
                    },
                    {
                      title: locale === 'en' ? 'Progress' : 'شريط تقدم',
                      url: '/projects/flexbox/progress',
                      description: locale === 'en' ? 'Build progress bar components' : 'ابنِ مكونات أشرطة التقدم',
                    },
                    {
                      title: locale === 'en' ? 'Skeleton' : 'هيكل عظمي',
                      url: '/projects/flexbox/skeleton',
                      description: locale === 'en' ? 'Create skeleton loading components' : 'أنشئ مكونات التحميل الهيكلي',
                    },
                  ],
                },
              ]}
            />
          )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes pop {
          from {
            transform: scale(0.4) translateY(20px);
            opacity: 0;
          }
          to {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
        }
      `}</style>
      </div>
    </PageLayout>
  );
}
