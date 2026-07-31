'use client';
import { useState } from 'react';

interface FinalSolutionProps {
  finalCss: string;
  starterCss: string;
  onApplyCss?: (css: string) => void;
}

export function FinalSolution({ finalCss, starterCss, onApplyCss }: FinalSolutionProps) {
  const [shown, setShown] = useState(false);

  const toggle = () => {
    const nextState = !shown;
    setShown(nextState);
    const cssToApply = nextState ? finalCss : starterCss;
    const cssEditor = document.getElementById('cssEditor') as HTMLTextAreaElement | null;
    if (cssEditor) {
      cssEditor.value = cssToApply;
      cssEditor.dispatchEvent(new Event('input', { bubbles: true }));
    }
    if (onApplyCss) onApplyCss(cssToApply);
  };

  return (
    <div className="mb-[30px]">
      <button
        onClick={toggle}
        className="w-full p-[15px] bg-[#4caf50] hover:bg-[#45a049] text-white border-none rounded-[8px] cursor-pointer text-[1em] font-semibold transition-colors"
      >
        {shown ? 'Reset to Starter Code' : 'Show Final Result'}
      </button>
    </div>
  );
}

export default FinalSolution;
