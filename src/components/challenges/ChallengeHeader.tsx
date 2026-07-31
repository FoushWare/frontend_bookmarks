interface ChallengeHeaderProps {
  title: string;
  challengeNumber: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  topic: string;
  time: string;
}

export function ChallengeHeader({ title, challengeNumber, difficulty, topic, time }: ChallengeHeaderProps) {
  return (
    <div className="mb-[30px]">
      <div className="flex gap-[10px] items-center mb-[15px]">
        <span className="text-[#858585] text-[0.9em]">Challenge #{challengeNumber}</span>
        <span
          className={`px-[12px] py-[4px] rounded-[12px] text-[0.8em] font-semibold text-white ${
            difficulty === 'beginner' ? 'bg-[#4caf50]' : difficulty === 'intermediate' ? 'bg-[#ff9800]' : 'bg-[#f44336]'
          }`}
        >
          {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
        </span>
      </div>
      <h1 className="text-white text-[1.8em] font-bold mb-[10px]">{title}</h1>
      <div className="flex gap-[10px]">
        <span className="px-[12px] py-[4px] bg-[#3c3c3c] text-[#d4d4d4] rounded-[12px] text-[0.85em]">{topic}</span>
        <span className="px-[12px] py-[4px] bg-[#3c3c3c] text-[#d4d4d4] rounded-[12px] text-[0.85em]">{time}</span>
      </div>
    </div>
  );
}

export default ChallengeHeader;
