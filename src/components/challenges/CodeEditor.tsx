'use client';
import { useState } from 'react';

interface CodeEditorProps {
  htmlCode: string;
  cssCode: string;
  onHtmlChange?: (val: string) => void;
  onCssChange?: (val: string) => void;
}

export function CodeEditor({ htmlCode, cssCode, onHtmlChange, onCssChange }: CodeEditorProps) {
  const [activeTab, setActiveTab] = useState<'html' | 'css'>('html');
  const [html, setHtml] = useState(htmlCode);
  const [css, setCss] = useState(cssCode);

  const handleHtml = (val: string) => {
    setHtml(val);
    if (onHtmlChange) onHtmlChange(val);
  };

  const handleCss = (val: string) => {
    setCss(val);
    if (onCssChange) onCssChange(val);
  };

  return (
    <div className="flex-1 flex flex-col border-b border-[#3c3c3c]">
      <div className="flex bg-[#252526] border-b border-[#3c3c3c]">
        <button
          className={`px-[20px] py-[12px] bg-transparent border-none border-b-2 font-medium cursor-pointer transition-colors ${
            activeTab === 'html' ? 'text-white border-b-[#667eea]' : 'text-[#858585] border-b-transparent hover:text-[#d4d4d4]'
          }`}
          onClick={() => setActiveTab('html')}
        >
          HTML
        </button>
        <button
          className={`px-[20px] py-[12px] bg-transparent border-none border-b-2 font-medium cursor-pointer transition-colors ${
            activeTab === 'css' ? 'text-white border-b-[#667eea]' : 'text-[#858585] border-b-transparent hover:text-[#d4d4d4]'
          }`}
          onClick={() => setActiveTab('css')}
        >
          CSS
        </button>
      </div>
      <div className="flex-1 relative">
        <textarea
          id="htmlEditor"
          className={`w-full h-full min-h-[300px] bg-[#1e1e1e] text-[#d4d4d4] border-none p-[20px] font-mono text-[14px] leading-relaxed resize-none outline-none ${
            activeTab === 'html' ? 'block' : 'hidden'
          }`}
          spellCheck={false}
          value={html}
          onChange={(e) => handleHtml(e.target.value)}
        />
        <textarea
          id="cssEditor"
          className={`w-full h-full min-h-[300px] bg-[#1e1e1e] text-[#d4d4d4] border-none p-[20px] font-mono text-[14px] leading-relaxed resize-none outline-none ${
            activeTab === 'css' ? 'block' : 'hidden'
          }`}
          spellCheck={false}
          value={css}
          onChange={(e) => handleCss(e.target.value)}
        />
      </div>
    </div>
  );
}

export default CodeEditor;
