

function Score({ score }) {
  const backgroundColors = {
    Reaction: "bg-primary-red-50",
    Memory: "bg-primary-yellow-50",
    Verbal: "bg-primary-green-50",
    Visual: "bg-primary-blue-50",
  };

  const textColors = {
    Reaction: "text-primary-red-400",
    Memory: "text-primary-yellow-400",
    Verbal: "text-primary-green-500",
    Visual: "text-primary-blue-800",
  };

  return (
    <li className={`py-[16.5px] px-4.75 rounded-xl ${backgroundColors[score.category]}`}>
      <div className="flex items-center justify-between gap-20">
        <div className="flex items-center gap-4">
          <img src={score.icon} className="size-5" alt={`${score.category} Icon`} />
          <p className={`font-medium text-lg leading-[1.3] ${textColors[score.category]}`}>
            {score.category}
          </p>
        </div>

        <div className="shrink-0">
          <p className="font-bold text-lg flex items-center gap-2 text-primary-navy-950">
            {score.score} <span className="opacity-50">/ 100</span>
          </p>
        </div>
      </div>
    </li>
  );
}

export default Score;
