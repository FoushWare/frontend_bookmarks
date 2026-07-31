'use client';
import { useState } from 'react';

interface HintsSystemProps {
  hints: string[];
}

export function HintsSystem({ hints }: HintsSystemProps) {
  const [revealedCount, setRevealedCount] = useState(1);

  const revealNext = () => {
    if (revealedCount < hints.length) {
      setRevealedCount((prev) => prev + 1);
    }
  };

  const allRevealed = revealedCount >= hints.length;

  return (
    <div className="mb-[30px]">
      <h3 className="text-white text-lg font-bold mb-[15px]">Hints</h3>
      <div className="flex flex-col gap-[10px] mb-[15px]">
        {hints.map((hint, idx) => (
          <div
            key={idx}
            className={`bg-[#2d2d2d] p-[15px] rounded-[8px] border-l-4 border-l-[#ff9800] ${
              idx < revealedCount ? 'block' : 'hidden'
            }`}
          >
            <p className="text-[#d4d4d4] leading-relaxed m-0">{hint}</p>
          </div>
        ))}
      </div>
      <button
        onClick={revealNext}
        disabled={allRevealed}
        className="w-full p-[12px] bg-[#667eea] hover:bg-[#5568d3] disabled:bg-[#3c3c3c] disabled:cursor-not-allowed text-white border-none rounded-[8px] cursor-pointer text-[1em] transition-colors"
      >
        {allRevealed ? 'All hints revealed' : 'Reveal Next Hint'}
      </button>
    </div>
  );
}

export default HintsSystem;
