'use client';

import { useState, useEffect, useRef } from 'react';

interface CodeEditorProps {
  initialHtml?: string;
  initialCss?: string;
  initialJs?: string;
  height?: string;
}

export default function CodeEditor({ 
  initialHtml = '', 
  initialCss = '', 
  initialJs = '', 
  height = '500px' 
}: CodeEditorProps) {
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js'>('html');
  const [html, setHtml] = useState(initialHtml);
  const [css, setCss] = useState(initialCss);
  const [js, setJs] = useState(initialJs);
  const [isPreviewVisible, setIsPreviewVisible] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Update preview when content changes
    updatePreview();
  }, [html, css, js]);

  // Handle Escape key to exit fullscreen
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    if (isFullscreen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isFullscreen]);

  const updatePreview = () => {
    if (!iframeRef.current) return;

    try {
      const combinedCode = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            * { box-sizing: border-box; margin: 0; padding: 0; }
            body { 
              font-family: system-ui, -apple-system, sans-serif; 
              padding: 20px; 
              min-height: 100vh;
              display: flex;
              justify-content: center;
              align-items: center;
              background: #ffffff;
            }
            ${css}
          </style>
        </head>
        <body>
          ${html}
          <script>
            try {
              ${js}
            } catch(e) {
              console.error('Preview JS error:', e);
            }
          </script>
        </body>
        </html>
      `;

      iframeRef.current.srcdoc = combinedCode;
    } catch (error) {
      console.error('Error updating preview:', error);
    }
  };

  const handleReset = () => {
    setHtml(initialHtml);
    setCss(initialCss);
    setJs(initialJs);
  };

  return (
    <div 
      ref={containerRef}
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '0', 
        background: 'var(--surface-2)', 
        border: '1px solid var(--border)', 
        borderRadius: isFullscreen ? '0' : '16px', 
        overflow: 'hidden',
        height: isFullscreen ? '100vh' : height,
        position: isFullscreen ? 'fixed' : 'relative',
        top: isFullscreen ? '0' : 'auto',
        left: isFullscreen ? '0' : 'auto',
        right: isFullscreen ? '0' : 'auto',
        bottom: isFullscreen ? '0' : 'auto',
        zIndex: isFullscreen ? '9999' : 'auto',
        boxShadow: isFullscreen ? 'none' : '0 4px 20px -8px rgba(0,0,0,0.3)'
      }}>
      {/* Header */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        padding: '12px 16px', 
        background: 'var(--surface)', 
        borderBottom: '1px solid var(--border)' 
      }}>
        <div style={{ display: 'flex', gap: '2px', background: 'var(--bg)', padding: '4px', borderRadius: '12px' }}>
          {[
            { id: 'html' as const, label: 'HTML', icon: '📄' },
            { id: 'css' as const, label: 'CSS', icon: '🎨' },
            { id: 'js' as const, label: 'JS', icon: '⚡' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                fontFamily: 'monospace',
                fontSize: '12px',
                fontWeight: 600,
                padding: '8px 16px',
                borderRadius: '8px',
                border: 'none',
                background: activeTab === tab.id ? 'var(--surface)' : 'transparent',
                color: activeTab === tab.id ? 'var(--text)' : 'var(--muted)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: activeTab === tab.id ? '0 2px 8px rgba(0,0,0,0.2)' : 'none',
              }}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => setIsPreviewVisible(!isPreviewVisible)}
            style={{
              fontFamily: 'monospace',
              fontSize: '11px',
              fontWeight: 600,
              padding: '6px 12px',
              borderRadius: '6px',
              border: '1px solid var(--border)',
              background: isPreviewVisible ? 'var(--teal-dim)' : 'var(--surface)',
              color: isPreviewVisible ? 'var(--teal)' : 'var(--muted)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {isPreviewVisible ? '👁️ Preview' : '👁️‍🗨️ Preview'}
          </button>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            style={{
              fontFamily: 'monospace',
              fontSize: '11px',
              fontWeight: 600,
              padding: '6px 12px',
              borderRadius: '6px',
              border: '1px solid var(--border)',
              background: isFullscreen ? 'var(--teal-dim)' : 'var(--surface)',
              color: isFullscreen ? 'var(--teal)' : 'var(--muted)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {isFullscreen ? '⛶ Exit' : '⛶ Fullscreen'}
          </button>
          <button
            onClick={handleReset}
            style={{
              fontFamily: 'monospace',
              fontSize: '11px',
              fontWeight: 600,
              padding: '6px 12px',
              borderRadius: '6px',
              border: '1px solid var(--border)',
              background: 'var(--surface)',
              color: 'var(--muted)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            🔄 Reset
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
        {/* Code Editor */}
        <div style={{
          flex: isPreviewVisible ? 1 : 1,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          minHeight: '300px'
        }}>
          {activeTab === 'html' && (
            <textarea
              value={html}
              onChange={(e) => setHtml(e.target.value)}
              style={{
                flex: 1,
                fontFamily: 'monospace',
                fontSize: '13px',
                lineHeight: 1.6,
                padding: '16px',
                border: 'none',
                background: 'var(--bg)',
                color: 'var(--text)',
                resize: 'none',
                outline: 'none',
              }}
              placeholder="<!-- Write your HTML here -->"
              spellCheck={false}
            />
          )}
          {activeTab === 'css' && (
            <textarea
              value={css}
              onChange={(e) => setCss(e.target.value)}
              style={{
                flex: 1,
                fontFamily: 'monospace',
                fontSize: '13px',
                lineHeight: 1.6,
                padding: '16px',
                border: 'none',
                background: 'var(--bg)',
                color: 'var(--text)',
                resize: 'none',
                outline: 'none',
              }}
              placeholder="/* Write your CSS here */"
              spellCheck={false}
            />
          )}
          {activeTab === 'js' && (
            <textarea
              value={js}
              onChange={(e) => setJs(e.target.value)}
              style={{
                flex: 1,
                fontFamily: 'monospace',
                fontSize: '13px',
                lineHeight: 1.6,
                padding: '16px',
                border: 'none',
                background: 'var(--bg)',
                color: 'var(--text)',
                resize: 'none',
                outline: 'none',
              }}
              placeholder="// Write your JavaScript here"
              spellCheck={false}
            />
          )}
        </div>

        {/* Preview */}
        {isPreviewVisible && (
          <div style={{
            flex: 1.5,
            borderTop: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            minHeight: '350px'
          }}>
            <div style={{
              padding: '8px 16px',
              background: 'var(--surface)',
              borderBottom: '1px solid var(--border)',
              fontSize: '11px',
              fontFamily: 'monospace',
              color: 'var(--muted)',
              fontWeight: 600
            }}>
              🖥️ Live Preview
            </div>
            <iframe
              ref={iframeRef}
              title="Preview"
              style={{
                flex: 1,
                border: 'none',
                background: '#ffffff',
                width: '100%',
                minHeight: '300px',
              }}
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        )}
      </div>
    </div>
  );
}
