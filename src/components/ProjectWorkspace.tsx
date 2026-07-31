"use client";
import { useState, useEffect } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { css } from '@codemirror/lang-css';
import { html } from '@codemirror/lang-html';
import type { Project, Mode } from '../types/project';
import { useLivePreview } from '../hooks/useLivePreview';
import { useTestRunner } from '../hooks/useTestRunner';
import { flexboxProjects } from '../data/flexbox-projects';
import { gridProjects } from '../data/grid-projects';

interface ProjectWorkspaceProps {
  projectId: string;
  projectType: 'flexbox' | 'grid';
}

export default function ProjectWorkspace({ projectId, projectType }: ProjectWorkspaceProps) {
  const project = (projectType === 'flexbox' ? flexboxProjects : gridProjects).find(p => p.id === projectId);
  
  const [mode, setMode] = useState<Mode>('css');
  const [content, setContent] = useState(project?.css.starterCode || '');
  const [userCode, setUserCode] = useState(project?.css.starterCode || '');
  const [showSolution, setShowSolution] = useState(false);
  const [revealedHints, setRevealedHints] = useState(1);

  const { srcDoc, iframeRef } = useLivePreview(mode, content, project?.css.starterHtml || '');
  const { testResults, allPassed, passedCount, totalCount } = useTestRunner(project?.tests || [], iframeRef);

  if (!project) return <div>Project not found</div>;

  // Generate target preview (solution)
  const targetSrcDoc = mode === 'css' 
    ? `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: Arial, sans-serif; padding: 20px; }
          ${project.css.solutionCode}
        </style>
      </head>
      <body>
        ${project.css.starterHtml}
      </body>
      </html>
    `
    : `
      <!DOCTYPE html>
      <html>
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: Arial, sans-serif; padding: 20px; }
        </style>
      </head>
      <body>
        ${project.tailwind.solutionCode}
      </body>
      </html>
    `;

  // Handle mode switch
  const handleModeChange = (newMode: Mode) => {
    setMode(newMode);
    setShowSolution(false);
    setRevealedHints(1);
    const variant = newMode === 'css' ? project.css : project.tailwind;
    setContent(variant.starterCode);
    setUserCode(variant.starterCode);
  };

  // Handle content change with debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setUserCode(content);
    }, 150);
    return () => clearTimeout(timer);
  }, [content]);

  // Show solution
  const handleShowSolution = () => {
    if (!showSolution) {
      const variant = mode === 'css' ? project.css : project.tailwind;
      setContent(variant.solutionCode);
      setShowSolution(true);
    } else {
      setContent(userCode);
      setShowSolution(false);
    }
  };

  // Reset to starter
  const handleReset = () => {
    const variant = mode === 'css' ? project.css : project.tailwind;
    setContent(variant.starterCode);
    setUserCode(variant.starterCode);
    setShowSolution(false);
    setRevealedHints(1);
  };

  // Reveal next hint
  const handleRevealHint = () => {
    if (revealedHints < project.hints.length) {
      setRevealedHints(revealedHints + 1);
    }
  };

  const extension = mode === 'css' ? [css()] : [html()];

  return (
    <>
      <style>{`
        .project-workspace {
          max-width: 1400px;
          margin: 0 auto;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        /* Generic Card Style */
        .workspace-card {
          background: var(--surface-2);
          border: 1px solid var(--border);
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        .problem-statement {
          background: var(--surface-2);
          padding: 2rem;
          border-radius: 1rem;
          border: 1px solid var(--border);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        .statement-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .statement-header h2 {
          margin: 0;
          color: var(--text);
          font-size: 2rem;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .difficulty-badge {
          padding: 0.35rem 1rem;
          border-radius: 2rem;
          font-size: 0.875rem;
          font-weight: 700;
        }

        .difficulty-badge.beginner {
          background: rgba(16, 185, 129, 0.1);
          color: #059669;
        }

        .difficulty-badge.intermediate {
          background: rgba(245, 158, 11, 0.1);
          color: #d97706;
        }

        .difficulty-badge.advanced {
          background: rgba(239, 68, 68, 0.1);
          color: #dc2626;
        }

        .instructions {
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }

        .expected-result {
          color: var(--text);
          line-height: 1.7;
          font-size: 1.05rem;
          padding: 1rem;
          background: rgba(0, 0, 0, 0.2);
          border-left: 4px solid var(--accent);
          border-radius: 0 0.5rem 0.5rem 0;
        }

        .target-preview {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px dashed var(--border);
        }

        .target-preview h4 {
          margin: 0 0 1rem 0;
          color: var(--text);
          font-size: 1.25rem;
          font-weight: 700;
        }

        .target-iframe {
          width: 100%;
          height: 220px;
          border: 1px solid var(--border);
          border-radius: 0.75rem;
          background: #ffffff; /* iFrames often need a white bg for proper contrast in examples */
          box-shadow: inset 0 2px 10px rgba(0,0,0,0.05);
        }

        .mode-toggle {
          display: flex;
          gap: 1rem;
        }

        .mode-button {
          padding: 0.75rem 1.5rem;
          background: var(--surface-2);
          border: 1px solid var(--border);
          border-radius: 0.75rem;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 600;
          transition: all 0.2s ease;
          color: var(--text-muted);
        }

        .mode-button.active {
          background: var(--accent);
          color: white;
          border-color: var(--accent);
          box-shadow: 0 4px 12px rgba(var(--accent-rgb), 0.3);
        }

        .mode-button:hover:not(.active) {
          background: var(--surface-3);
          color: var(--text);
        }

        .workspace-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .editor-section,
        .preview-section {
          background: var(--surface-2);
          border-radius: 1rem;
          padding: 1.5rem;
          border: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        .editor-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }

        .editor-header h3 {
          margin: 0;
          color: var(--text);
          font-size: 1.25rem;
          font-weight: 700;
        }

        .editor-controls {
          display: flex;
          gap: 0.75rem;
        }

        .editor-controls button {
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          color: var(--text);
          border: 1px solid var(--border);
          border-radius: 0.5rem;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 600;
          transition: all 0.2s ease;
        }
        
        .editor-controls button.accent-btn {
          background: var(--accent);
          color: white;
          border-color: var(--accent);
        }

        .editor-controls button:hover {
          background: var(--surface-3);
        }
        
        .editor-controls button.accent-btn:hover {
          filter: brightness(1.1);
        }

        .preview-section h3 {
          margin: 0 0 1.25rem 0;
          color: var(--text);
          font-size: 1.25rem;
          font-weight: 700;
        }

        .preview-iframe {
          width: 100%;
          height: 400px;
          border: 1px solid var(--border);
          border-radius: 0.75rem;
          background: #ffffff;
          flex: 1;
        }

        .test-results, .hints-section {
          background: var(--surface-2);
          padding: 2rem;
          border-radius: 1rem;
          border: 1px solid var(--border);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        .test-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .test-header h3, .hints-section h3 {
          margin: 0;
          color: var(--text);
          font-size: 1.5rem;
          font-weight: 700;
        }

        .test-summary {
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          font-size: 0.9rem;
          font-weight: 700;
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-muted);
          border: 1px solid var(--border);
        }

        .test-summary.passed {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
          border-color: rgba(16, 185, 129, 0.2);
        }

        .success-banner {
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          padding: 1rem 1.5rem;
          border-radius: 0.75rem;
          margin-bottom: 1.5rem;
          text-align: center;
          font-weight: 700;
          font-size: 1.1rem;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2);
        }

        .test-list, .hints-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .test-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.25rem;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 0.75rem;
          border: 1px solid var(--border);
        }

        .test-item.passed {
          border-left: 4px solid #10b981;
        }

        .test-item.failed {
          border-left: 4px solid #ef4444;
        }

        .test-status {
          font-weight: 900;
          font-size: 1.2rem;
        }

        .test-item.passed .test-status {
          color: #10b981;
        }

        .test-item.failed .test-status {
          color: #ef4444;
        }

        .test-description {
          color: var(--text);
          font-weight: 500;
          font-size: 1.05rem;
        }

        .hint-item {
          display: flex;
          gap: 1rem;
          padding: 1.25rem;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 0.75rem;
          border: 1px solid var(--border);
        }

        .hint-number {
          font-weight: 800;
          color: var(--accent);
          font-size: 1.1rem;
        }

        .hint-text {
          color: var(--text);
          line-height: 1.6;
          font-size: 1.05rem;
        }

        .reveal-hint-button {
          width: 100%;
          padding: 1rem;
          background: transparent;
          color: var(--accent);
          border: 2px dashed var(--accent);
          border-radius: 0.75rem;
          cursor: pointer;
          font-size: 1.05rem;
          font-weight: 700;
          transition: all 0.2s ease;
          margin-top: 1rem;
        }

        .reveal-hint-button:hover {
          background: rgba(var(--accent-rgb), 0.1);
        }
        
        .cm-theme {
          border-radius: 0.5rem;
          overflow: hidden;
          border: 1px solid var(--border);
        }

        @media (max-width: 1024px) {
          .workspace-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <div className="project-workspace">
        {/* Problem Statement */}
        <div className="problem-statement">
          <div className="statement-header">
            <h2>{project.title}</h2>
            <span className={`difficulty-badge ${project.difficulty}`}>
              {project.difficulty.charAt(0).toUpperCase() + project.difficulty.slice(1)}
            </span>
          </div>
          <p className="instructions">{project.instructions}</p>
          <p className="expected-result">
            <strong>Expected result:</strong> {project.expectedResult}
          </p>
          <div className="target-preview">
            <h4>Target Preview</h4>
            <iframe
              srcDoc={targetSrcDoc}
              className="target-iframe"
              title="Target Preview"
            />
          </div>
        </div>

        {/* Mode Toggle */}
        <div className="mode-toggle">
          <button
            className={`mode-button ${mode === 'css' ? 'active' : ''}`}
            onClick={() => handleModeChange('css')}
          >
            CSS
          </button>
          <button
            className={`mode-button ${mode === 'tailwind' ? 'active' : ''}`}
            onClick={() => handleModeChange('tailwind')}
          >
            Tailwind
          </button>
        </div>

        {/* Editor and Previews */}
        <div className="workspace-grid">
          {/* Editor */}
          <div className="editor-section">
            <div className="editor-header">
              <h3>{mode === 'css' ? 'CSS Editor' : 'HTML Editor'}</h3>
              <div className="editor-controls">
                <button onClick={handleReset}>Reset</button>
                <button className="accent-btn" onClick={handleShowSolution}>
                  {showSolution ? 'Hide Solution' : 'Show Solution'}
                </button>
              </div>
            </div>
            <CodeMirror
              value={content}
              height="400px"
              extensions={extension}
              onChange={(value) => setContent(value)}
              readOnly={showSolution}
              theme="dark"
            />
          </div>

          {/* Live Preview */}
          <div className="preview-section">
            <h3>Live Preview</h3>
            <iframe
              ref={iframeRef}
              srcDoc={srcDoc}
              className="preview-iframe"
              title="Live Preview"
            />
          </div>
        </div>

        {/* Test Results */}
        <div className="test-results">
          <div className="test-header">
            <h3>Test Results</h3>
            <span className={`test-summary ${allPassed ? 'passed' : ''}`}>
              {passedCount}/{totalCount} passing
            </span>
          </div>
          {allPassed && (
            <div className="success-banner">
              🎉 All tests passed! Great job!
            </div>
          )}
          <div className="test-list">
            {project.tests.map((test) => (
              <div
                key={test.id}
                className={`test-item ${testResults[test.id] ? 'passed' : 'failed'}`}
              >
                <span className="test-status">
                  {testResults[test.id] ? '✓' : '✗'}
                </span>
                <span className="test-description">{test.description}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hints */}
        <div className="hints-section">
          <h3>Hints</h3>
          <div className="hints-list">
            {project.hints.slice(0, revealedHints).map((hint, index) => (
              <div key={index} className="hint-item">
                <span className="hint-number">{index + 1}.</span>
                <span className="hint-text">{hint}</span>
              </div>
            ))}
          </div>
          {revealedHints < project.hints.length && (
            <button className="reveal-hint-button" onClick={handleRevealHint}>
              Reveal Next Hint
            </button>
          )}
        </div>
      </div>
    </>
  );
}


