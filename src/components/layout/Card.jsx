import FinalScoreCard from "../elements/FinalScoreCard";
import SingularScoreForm from "../elements/SingularScoreForm";

function Card() {
  return (
    <article className="md:max-w-171.5 lg:max-w-184 bg-primary-white rounded-4xl shadow">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <FinalScoreCard />
        <SingularScoreForm />
      </div>
    </article>
  );
}

export default Card;
