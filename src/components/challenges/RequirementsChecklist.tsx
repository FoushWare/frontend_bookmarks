'use client';
import { useState } from 'react';

interface RequirementsChecklistProps {
  requirements: string[];
}

export function RequirementsChecklist({ requirements }: RequirementsChecklistProps) {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  const toggleItem = (idx: number) => {
    setCheckedItems((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const totalCount = requirements.length;
  const percentage = totalCount > 0 ? Math.round((checkedCount / totalCount) * 100) : 0;

  return (
    <div className="mb-[30px]">
      <h3 className="text-white text-lg font-bold mb-[15px]">Requirements</h3>
      <div className="h-[8px] bg-[#3c3c3c] rounded-[4px] mb-[10px] overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#667eea] to-[#764ba2] transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="text-[#858585] text-[0.9em] mb-[15px]">
        {checkedCount} / {totalCount} completed ({percentage}%)
      </div>
      <div className="flex flex-col gap-[10px]">
        {requirements.map((req, idx) => (
          <label key={idx} className="flex items-center gap-[10px] text-[#d4d4d4] cursor-pointer">
            <input
              type="checkbox"
              checked={!!checkedItems[idx]}
              onChange={() => toggleItem(idx)}
              className="accent-[#667eea] w-4 h-4"
            />
            <span className={checkedItems[idx] ? 'line-through opacity-70' : ''}>{req}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default RequirementsChecklist;
