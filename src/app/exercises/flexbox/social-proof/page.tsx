'use client';

import { useState } from 'react';
import CodeEditor from '@/components/CodeEditor';
import PageLayout from '@/components/PageLayout';
import PageSidebar from '@/components/PageSidebar';
import { getTopicNavigation } from '@/data/navigation';

export default function SocialProofExercise() {
  const [activeFrame, setActiveFrame] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [showCompleteResult, setShowCompleteResult] = useState(false);
  const [checkedItems, setCheckedItems] = useState({
    overlap: false,
    border: false,
    logos: false,
    responsive: false,
    rtl: false,
  });

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const progress = (checkedCount / 5) * 100;

  const topicNav = getTopicNavigation('flexbox');
  const [showSolution, setShowSolution] = useState(false);

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
              08 / 08
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
                Complete Social Proof Design
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--muted)', margin: 0 }}>
                This is the final result you'll achieve by completing this exercise.
              </p>
            </div>
            
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              gap: '32px', 
              flexWrap: 'wrap',
              background: 'var(--surface-2)', 
              border: '1px solid var(--border)', 
              borderRadius: '16px', 
              padding: '28px 32px',
            }}>
              {/* Stats */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                {/* Avatar Stack */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '50%',
                        border: '3px solid var(--surface-2)',
                        background: `linear-gradient(135deg, hsl(${210 + i * 30}, 70%, 60%), hsl(${240 + i * 30}, 70%, 50%))`,
                        marginLeft: i > 1 ? '-14px' : 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '13px',
                        fontWeight: 700,
                        color: '#fff',
                      }}
                    >
                      {i === 1 ? 'MK' : i === 2 ? 'JD' : i === 3 ? 'AS' : 'RB'}
                    </div>
                  ))}
                  <div style={{ 
                    width: '42px', 
                    height: '42px', 
                    borderRadius: '50%', 
                    border: '3px solid var(--surface-2)', 
                    marginLeft: '-14px',
                    background: 'var(--bg)', 
                    color: 'var(--muted)', 
                    fontFamily: 'monospace', 
                    fontSize: '11px', 
                    fontWeight: 700, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                  }}>
                    +2K
                  </div>
                </div>

                {/* Rating */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <div style={{ display: 'flex', gap: '3px' }}>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span key={i} style={{ fontSize: '17px' }}>⭐</span>
                    ))}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--muted)' }}>
                    <b style={{ color: 'var(--text)' }}>4.9 / 5</b> from 2,000+ happy customers
                  </div>
                </div>
              </div>

              {/* Logos */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '30px', flexWrap: 'wrap' }}>
                {['Nimbus', 'Cedar', 'Delta', 'Vero'].map((name, i) => (
                  <div
                    key={name}
                    style={{
                      height: '22px',
                      opacity: 0.55,
                      filter: 'grayscale(1)',
                      transition: 'all 0.15s',
                      fontSize: '15px',
                      fontWeight: 700,
                      color: 'var(--muted)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = '1';
                      e.currentTarget.style.filter = 'grayscale(0)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '0.55';
                      e.currentTarget.style.filter = 'grayscale(1)';
                    }}
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Eyebrow */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 700, color: 'var(--yellow)', background: 'var(--yellow-dim)', border: '1px solid ' + 'rgba(255,209,102,.35)', padding: '6px 14px', borderRadius: '999px', marginBottom: '18px' }}>
          <span>⭐</span>
          <span>Component Reference — Final one!</span>
        </div>

        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '36px', fontWeight: 800, margin: '0 0 10px', color: 'var(--text)' }}>
            Social <span style={{ color: 'var(--yellow)' }}>Proof</span>
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--muted)', margin: '0', maxWidth: '640px' }}>
            Build a "trusted by" strip with overlapping avatars, star ratings, and client logos.
          </p>
        </div>

        {/* Project Brief */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '20px', padding: '34px', marginBottom: '26px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <div style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--yellow)', fontFamily: 'monospace', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              1
            </div>
            <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--yellow)' }}>PROJECT BRIEF</span>
          </div>
          <h2 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 14px', color: 'var(--text)' }}>
            What you're building
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '15px', margin: '0 0 18px', lineHeight: 1.6 }}>
            Build a "trusted by" strip: a stack of overlapping customer avatars with a star rating on one side, and a row of muted client logos on the other. This is the last component, and it introduces one final new trick — overlapping flex items with negative margin — while reusing assets and patterns from almost every card before it.
          </p>
          <h3 style={{ fontSize: '17px', fontWeight: 700, margin: '0 0 12px', color: 'var(--text)' }}>Requirements</h3>
          <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--muted)', fontSize: '14px', lineHeight: 1.8 }}>
            <li>Avatars overlap each other, most recent one visually on top, no absolute positioning</li>
            <li>A "+2K" bubble caps the avatar stack instead of a real photo</li>
            <li>Client logos are muted/grayscale by default, full color on hover</li>
            <li>Stats block and logos row split to opposite ends on desktop, stack on mobile</li>
          </ul>
        </div>

        {/* Design Preview */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '20px', padding: '34px', marginBottom: '26px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <div style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--yellow)', fontFamily: 'monospace', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              2
            </div>
            <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--yellow)' }}>DESIGN PREVIEW</span>
          </div>
          <h2 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 14px', color: 'var(--text)' }}>
            Desktop, tablet, mobile
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '15px', margin: '0 0 18px' }}>
            Hover the logos in the desktop tab to see them go full color.
          </p>

          {/* Device Tabs */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '18px', flexWrap: 'wrap' }}>
            {(['desktop', 'tablet', 'mobile'] as const).map((frame) => (
              <button
                key={frame}
                onClick={() => setActiveFrame(frame)}
                style={{
                  fontFamily: 'monospace',
                  background: activeFrame === frame ? 'var(--yellow)' : 'var(--surface-2)',
                  border: activeFrame === frame ? 'var(--yellow)' : '1px solid var(--border)',
                  color: activeFrame === frame ? '#3a3018' : 'var(--text)',
                  padding: '9px 16px',
                  borderRadius: '9px',
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: activeFrame === frame ? 700 : 400,
                }}
              >
                {frame === 'desktop' && '🖥️ Desktop'}
                {frame === 'tablet' && '📱 Tablet'}
                {frame === 'mobile' && '📱 Mobile'}
              </button>
            ))}
          </div>

          {/* Preview Frame */}
          <div style={{ 
            background: 'var(--bg)', 
            borderRadius: '16px', 
            padding: activeFrame === 'mobile' ? '18px 12px' : '24px 18px',
            maxWidth: activeFrame === 'mobile' ? '375px' : activeFrame === 'tablet' ? '620px' : '100%',
            margin: activeFrame === 'mobile' || activeFrame === 'tablet' ? '0 auto' : 0,
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '28px',
              flexWrap: 'wrap',
              background: 'var(--surface-2)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              padding: '26px 28px',
              flexDirection: activeFrame === 'mobile' ? 'column' : 'row',
              alignItems: activeFrame === 'mobile' ? 'flex-start' : 'center',
            }}>
              {/* Stats */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                {/* Avatar Stack */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        border: '2.5px solid var(--surface-2)',
                        background: `linear-gradient(135deg, hsl(${210 + i * 30}, 70%, 60%), hsl(${240 + i * 30}, 70%, 50%))`,
                        marginLeft: i > 1 ? '-12px' : 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        fontWeight: 700,
                        color: '#fff',
                      }}
                    >
                      {i === 1 ? 'MK' : i === 2 ? 'JD' : i === 3 ? 'AS' : 'RB'}
                    </div>
                  ))}
                  <div style={{ 
                    width: '38px', 
                    height: '38px', 
                    borderRadius: '50%', 
                    border: '2.5px solid var(--surface-2)', 
                    marginLeft: '-12px',
                    background: 'var(--bg)', 
                    color: 'var(--muted)', 
                    fontFamily: 'monospace', 
                    fontSize: '10.5px', 
                    fontWeight: 700, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                  }}>
                    +2K
                  </div>
                </div>

                {/* Rating */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span key={i} style={{ fontSize: '15px' }}>⭐</span>
                    ))}
                  </div>
                  <div style={{ fontSize: '12.5px', color: 'var(--muted)' }}>
                    <b style={{ color: 'var(--text)' }}>4.9 / 5</b> from 2,000+ happy customers
                  </div>
                </div>
              </div>

              {/* Logos */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '26px', flexWrap: 'wrap' }}>
                {['Nimbus', 'Cedar', 'Delta', 'Vero'].map((name, i) => (
                  <div
                    key={name}
                    style={{
                      height: '20px',
                      opacity: 0.55,
                      filter: 'grayscale(1)',
                      transition: 'all 0.15s',
                      fontSize: '14px',
                      fontWeight: 700,
                      color: 'var(--muted)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = '1';
                      e.currentTarget.style.filter = 'grayscale(0)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '0.55';
                      e.currentTarget.style.filter = 'grayscale(1)';
                    }}
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Guides */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '20px', padding: '34px', marginBottom: '26px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <div style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--yellow)', fontFamily: 'monospace', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              4
            </div>
            <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--yellow)' }}>GUIDES</span>
          </div>
          <h2 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 14px', color: 'var(--text)' }}>
            Build steps
          </h2>

          {/* Step 1 */}
          <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '14px', padding: '20px 22px', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
              <div style={{ width: '30px', height: '30px', borderRadius: '9px', background: 'var(--yellow)', color: '#3a3018', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>
                1
              </div>
              <span style={{ fontWeight: 700, fontSize: '15.5px', color: 'var(--text)' }}>Overlap the avatars with negative margin</span>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '14px', margin: '0' }}>
              All 4+ avatars sit in one flex row, but overlap each other by about a third instead of sitting side by side with gaps.
            </p>
          </div>

          {/* Step 2 */}
          <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '14px', padding: '20px 22px', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
              <div style={{ width: '30px', height: '30px', borderRadius: '9px', background: 'var(--yellow)', color: '#3a3018', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>
                2
              </div>
              <span style={{ fontWeight: 700, fontSize: '15.5px', color: 'var(--text)' }}>Give each avatar a visible border</span>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '14px', margin: '0' }}>
              Without a border matching the background, overlapping avatars blend into one blob.
            </p>
          </div>

          {/* Step 3 */}
          <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '14px', padding: '20px 22px', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
              <div style={{ width: '30px', height: '30px', borderRadius: '9px', background: 'var(--yellow)', color: '#3a3018', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>
                3
              </div>
              <span style={{ fontWeight: 700, fontSize: '15.5px', color: 'var(--text)' }}>Rating block next to the stack</span>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '14px', margin: '0' }}>
              Stars row above a small text line, sitting beside the avatar stack.
            </p>
          </div>

          {/* Step 4 */}
          <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '14px', padding: '20px 22px', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
              <div style={{ width: '30px', height: '30px', borderRadius: '9px', background: 'var(--yellow)', color: '#3a3018', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>
                4
              </div>
              <span style={{ fontWeight: 700, fontSize: '15.5px', color: 'var(--text)' }}>Stats vs. logos, split to the ends</span>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '14px', margin: '0' }}>
              The whole stats group and the logos row sit at opposite ends of the outer container — same 2-group pattern you've used since the Navigation Bar.
            </p>
          </div>
        </div>

        {/* Completion */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '20px', padding: '34px', marginBottom: '26px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <div style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--yellow)', fontFamily: 'monospace', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              6
            </div>
            <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--yellow)' }}>PROJECT COMPLETION</span>
          </div>
          <h2 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 14px', color: 'var(--text)' }}>
            Self-check checklist
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '18px 0' }}>
            {[
              { key: 'overlap', en: 'Avatars overlap using negative margin, not absolute positioning' },
              { key: 'border', en: 'Each avatar has a border matching the card background' },
              { key: 'logos', en: 'Logos are grayscale/muted by default, full color on hover' },
              { key: 'responsive', en: 'Stats and logos split to opposite ends on desktop, stack on mobile' },
              { key: 'rtl', en: 'Arabic (RTL) version mirrors correctly' },
            ].map((item) => (
              <label
                key={item.key}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  gap: '14px',
                  alignItems: 'start',
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '13px 16px',
                  fontSize: '14px',
                  cursor: 'pointer',
                  textDecoration: checkedItems[item.key as keyof typeof checkedItems] ? 'line-through' : 'none',
                  color: checkedItems[item.key as keyof typeof checkedItems] ? 'var(--muted)' : 'var(--text)',
                }}
              >
                <input
                  type="checkbox"
                  checked={checkedItems[item.key as keyof typeof checkedItems]}
                  onChange={(e) => setCheckedItems(prev => ({ ...prev, [item.key]: e.target.checked }))}
                  style={{ marginTop: '4px', accentColor: 'var(--teal)' }}
                />
                <span>{item.en}</span>
              </label>
            ))}
          </div>

          <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '14px', padding: '22px' }}>
            <div style={{ fontFamily: 'monospace', fontSize: '13px', color: 'var(--muted)', display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span>Progress</span>
              <span>{checkedCount} / 5</span>
            </div>
            <div style={{ height: '10px', background: 'var(--bg)', borderRadius: '99px', overflow: 'hidden', marginBottom: '18px' }}>
              <div style={{ height: '100%', background: 'linear-gradient(90deg, var(--yellow), var(--teal))', width: `${progress}%`, borderRadius: '99px', transition: 'all 0.3s' }} />
            </div>
            <button
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '12px',
                background: checkedCount === 5 ? 'var(--surface-2)' : 'var(--teal)',
                color: checkedCount === 5 ? 'var(--teal)' : '#0b1f1b',
                fontWeight: 800,
                fontSize: '15px',
                cursor: 'pointer',
                border: checkedCount === 5 ? '1px solid var(--teal)' : 'none',
              }}
              onClick={() => {
                setCheckedItems({ overlap: true, border: true, logos: true, responsive: true, rtl: true });
              }}
            >
              {checkedCount === 5 ? '✔️ Completed' : '✅ Mark as complete'}
            </button>
          </div>

          {checkedCount === 5 && (
            <div style={{ marginTop: '20px', background: 'linear-gradient(135deg, var(--surface-2), var(--bg))', border: '1px solid var(--yellow)', borderRadius: '16px', padding: '26px', textAlign: 'center' }}>
              <div style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>
                🏆 <span style={{ color: 'var(--yellow)' }}>8 / 8</span> — Marketing Component Library complete!
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '15px', margin: '0' }}>
                Every component reused something from an earlier one — that repetition IS the curriculum. Next: combine them into full pages.
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', marginTop: '26px', flexWrap: 'wrap' }}>
          <a
            href="/exercises/flexbox/footer"
            style={{
              fontFamily: 'monospace',
              fontSize: '13px',
              color: 'var(--muted)',
              textDecoration: 'none',
              border: '1px solid var(--border)',
              padding: '10px 16px',
              borderRadius: '10px',
              background: 'var(--surface-2)',
            }}
          >
            ← 07 · Footer
          </a>
          <a
            href="/projects/flexbox/marketing-library"
            style={{
              fontFamily: 'monospace',
              fontSize: '13px',
              color: 'var(--muted)',
              textDecoration: 'none',
              border: '1px solid var(--border)',
              padding: '10px 16px',
              borderRadius: '10px',
              background: 'var(--surface-2)',
            }}
          >
            🧩 Back to library — you're done!
          </a>
        </div>

        <footer style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '13px', marginTop: '40px' }}>
          ⭐ Component Library · Marketing Track · 8 of 8
        </footer>
      </div>
    </PageLayout>
  );
}