interface StretchGoalsProps {
  goals: string[];
}

export function StretchGoals({ goals }: StretchGoalsProps) {
  return (
    <div className="mb-[30px]">
      <h3 className="text-white text-lg font-bold mb-[15px]">Stretch Goals</h3>
      <ul className="list-none p-0 m-0">
        {goals.map((goal, idx) => (
          <li key={idx} className="text-[#858585] py-[8px] pl-[20px] relative">
            <span className="absolute left-0 color-[#ff9800]">★</span>
            {goal}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StretchGoals;
