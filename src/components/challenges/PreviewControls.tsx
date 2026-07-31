'use client';
import { useState } from 'react';

type ViewSize = 'desktop' | 'tablet' | 'mobile';

interface PreviewControlsProps {
  onSizeChange?: (size: ViewSize) => void;
}

export function PreviewControls({ onSizeChange }: PreviewControlsProps) {
  const [activeSize, setActiveSize] = useState<ViewSize>('desktop');

  const setSize = (size: ViewSize) => {
    setActiveSize(size);
    const container = document.getElementById('previewContainer');
    if (container) {
      if (size === 'desktop') container.style.maxWidth = '100%';
      else if (size === 'tablet') container.style.maxWidth = '768px';
      else if (size === 'mobile') container.style.maxWidth = '375px';
    }
    if (onSizeChange) onSizeChange(size);
  };

  return (
    <div className="flex gap-[10px] p-[15px_30px] bg-[#252526] border-b border-[#3c3c3c]">
      <button
        onClick={() => setSize('desktop')}
        className={`px-[16px] py-[8px] rounded-[6px] text-xs font-medium cursor-pointer border-none transition-colors ${
          activeSize === 'desktop' ? 'bg-[#667eea] text-white' : 'bg-[#3c3c3c] text-[#d4d4d4] hover:bg-[#4c4c4c]'
        }`}
      >
        Desktop
      </button>
      <button
        onClick={() => setSize('tablet')}
        className={`px-[16px] py-[8px] rounded-[6px] text-xs font-medium cursor-pointer border-none transition-colors ${
          activeSize === 'tablet' ? 'bg-[#667eea] text-white' : 'bg-[#3c3c3c] text-[#d4d4d4] hover:bg-[#4c4c4c]'
        }`}
      >
        Tablet
      </button>
      <button
        onClick={() => setSize('mobile')}
        className={`px-[16px] py-[8px] rounded-[6px] text-xs font-medium cursor-pointer border-none transition-colors ${
          activeSize === 'mobile' ? 'bg-[#667eea] text-white' : 'bg-[#3c3c3c] text-[#d4d4d4] hover:bg-[#4c4c4c]'
        }`}
      >
        Mobile
      </button>
    </div>
  );
}

export default PreviewControls;
