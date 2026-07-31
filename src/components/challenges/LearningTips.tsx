interface LearningTipsProps {
  tips: string[];
}

export function LearningTips({ tips }: LearningTipsProps) {
  return (
    <div className="mb-[30px]">
      <h3 className="text-white text-lg font-bold mb-[15px]">Learning Tips</h3>
      {tips.map((tip, idx) => (
        <div key={idx} className="bg-[#2d2d2d] p-[15px] rounded-[8px] border-l-4 border-l-[#667eea] mb-[10px]">
          <p className="text-[#d4d4d4] leading-relaxed m-0">{tip}</p>
        </div>
      ))}
    </div>
  );
}

export default LearningTips;
