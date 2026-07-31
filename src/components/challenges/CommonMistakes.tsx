interface Mistake {
  title: string;
  description: string;
}

interface CommonMistakesProps {
  mistakes: Mistake[];
}

export function CommonMistakes({ mistakes }: CommonMistakesProps) {
  return (
    <div className="mb-[30px]">
      <h3 className="text-white text-lg font-bold mb-[15px]">Common Mistakes</h3>
      {mistakes.map((mistake, idx) => (
        <details key={idx} className="bg-[#2d2d2d] p-[15px] rounded-[8px] mb-[10px] cursor-pointer">
          <summary className="text-[#d4d4d4] font-medium">{mistake.title}</summary>
          <p className="text-[#858585] mt-[10px] leading-relaxed m-0">{mistake.description}</p>
        </details>
      ))}
    </div>
  );
}

export default CommonMistakes;
