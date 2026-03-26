import Score from "./Score";
import Button from "./Button";

import ReactionIcon from "../../assets/icons/icon-reaction.svg";
import MemoryIcon from "../../assets/icons/icon-memory.svg";
import VerbalIcon from "../../assets/icons/icon-verbal.svg";
import VisualIcon from "../../assets/icons/icon-visual.svg";

function SingularScoreForm() {
  const scoreData = [
    {
      category: "Reaction",
      score: 80,
      icon: ReactionIcon,
    },
    {
      category: "Memory",
      score: 92,
      icon: MemoryIcon,
    },
    {
      category: "Verbal",
      score: 61,
      icon: VerbalIcon,
    },
    {
      category: "Visual",
      score: 72,
      icon: VisualIcon,
    },
  ];

  return (
    <div className="flex items-center justify-center md:rounded-tr-4xl md:rounded-br-4xl bg-primary-white">
      <div className="space-y-6 md:space-y-8 p-7.5 ">
        <h3 className="font-bold text-lg md:text-2xl text-primary-navy-950">Summary</h3>

        <ul className="space-y-4">
          {scoreData.map((score) => (
            <Score key={score.category} score={score} />
          ))}
        </ul>

        <Button />
      </div>
    </div>
  );
}

export default SingularScoreForm;
