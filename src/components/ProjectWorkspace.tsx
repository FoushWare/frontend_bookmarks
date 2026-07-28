import { useState, useEffect } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { css } from '@codemirror/lang-css';
import { html } from '@codemirror/lang-html';
import type { Project, Mode } from '../types/project';
import { useLivePreview } from '../hooks/useLivePreview';
import { useTestRunner } from '../hooks/useTestRunner';

interface ProjectWorkspaceProps {
  project: Project;
}

export function ProjectWorkspace({ project }: ProjectWorkspaceProps) {
  const [mode, setMode] = useState<Mode>('css');
  const [content, setContent] = useState(project.css.starterCode);
  const [userCode, setUserCode] = useState(project.css.starterCode);
  const [showSolution, setShowSolution] = useState(false);
  const [revealedHints, setRevealedHints] = useState(1);

  const { srcDoc, iframeRef } = useLivePreview(mode, content, project.css.starterHtml);
  const { testResults, allPassed, passedCount, totalCount } = useTestRunner(project.tests, iframeRef);

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
        }

        .problem-statement {
          background: var(--bg-tertiary);
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 20px;
          border: 1px solid var(--border-color);
        }

        .statement-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }

        .statement-header h2 {
          margin: 0;
          color: var(--text-primary);
        }

        .difficulty-badge {
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 0.85em;
          font-weight: 600;
        }

        .difficulty-badge.beginner {
          background: #4caf50;
          color: white;
        }

        .difficulty-badge.intermediate {
          background: #ff9800;
          color: white;
        }

        .difficulty-badge.advanced {
          background: #f44336;
          color: white;
        }

        .instructions {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 10px;
        }

        .expected-result {
          color: var(--text-primary);
          line-height: 1.6;
        }

        .target-preview {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid var(--border-color);
        }

        .target-preview h4 {
          margin: 0 0 10px 0;
          color: var(--text-primary);
          font-size: 1em;
        }

        .target-iframe {
          width: 100%;
          height: 200px;
          border: 1px solid var(--border-color);
          border-radius: 6px;
          background: var(--bg-secondary);
        }

        .mode-toggle {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }

        .mode-button {
          padding: 10px 20px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          cursor: pointer;
          font-size: 1em;
          transition: background 0.3s;
          color: var(--text-primary);
        }

        .mode-button.active {
          background: var(--accent);
          color: white;
          border-color: var(--accent);
        }

        .mode-button:hover:not(.active) {
          background: var(--bg-secondary);
        }

        .workspace-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .editor-section,
        .preview-section {
          background: var(--bg-secondary);
          border-radius: 8px;
          padding: 15px;
          box-shadow: var(--shadow);
          border: 1px solid var(--border-color);
        }

        .editor-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .editor-header h3 {
          margin: 0;
          color: var(--text-primary);
        }

        .editor-controls {
          display: flex;
          gap: 10px;
        }

        .editor-controls button {
          padding: 6px 12px;
          background: var(--accent);
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.9em;
          transition: background 0.3s;
        }

        .editor-controls button:hover {
          background: var(--accent-hover);
        }

        .preview-section h3 {
          margin: 0 0 10px 0;
          color: var(--text-primary);
        }

        .preview-iframe {
          width: 100%;
          height: 400px;
          border: 1px solid var(--border-color);
          border-radius: 4px;
          background: var(--bg-secondary);
        }

        .test-results {
          background: var(--bg-tertiary);
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 20px;
          border: 1px solid var(--border-color);
        }

        .test-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }

        .test-header h3 {
          margin: 0;
          color: var(--text-primary);
        }

        .test-summary {
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 0.9em;
          font-weight: 600;
          background: var(--bg-secondary);
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
        }

        .test-summary.passed {
          background: #4caf50;
          color: white;
          border-color: #4caf50;
        }

        .success-banner {
          background: #4caf50;
          color: white;
          padding: 12px;
          border-radius: 6px;
          margin-bottom: 15px;
          text-align: center;
          font-weight: 600;
        }

        .test-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .test-item {
          display: flex;
          gap: 10px;
          padding: 10px;
          background: var(--bg-secondary);
          border-radius: 6px;
          border: 1px solid var(--border-color);
        }

        .test-item.passed {
          border-left: 4px solid #4caf50;
        }

        .test-item.failed {
          border-left: 4px solid #f44336;
        }

        .test-status {
          font-weight: bold;
        }

        .test-item.passed .test-status {
          color: #4caf50;
        }

        .test-item.failed .test-status {
          color: #f44336;
        }

        .test-description {
          color: var(--text-secondary);
        }

        .hints-section {
          background: var(--bg-tertiary);
          padding: 20px;
          border-radius: 8px;
          border: 1px solid var(--border-color);
        }

        .hints-section h3 {
          margin: 0 0 15px 0;
          color: var(--text-primary);
        }

        .hints-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 15px;
        }

        .hint-item {
          display: flex;
          gap: 10px;
          padding: 10px;
          background: var(--bg-secondary);
          border-radius: 6px;
          border: 1px solid var(--border-color);
        }

        .hint-number {
          font-weight: bold;
          color: #ff9800;
        }

        .hint-text {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .reveal-hint-button {
          width: 100%;
          padding: 12px;
          background: #ff9800;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 1em;
          transition: background 0.3s;
        }

        .reveal-hint-button:hover {
          background: #f57c00;
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
                <button onClick={handleShowSolution}>
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

export default ProjectWorkspace;
