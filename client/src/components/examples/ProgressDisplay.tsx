import ProgressDisplay from '../ProgressDisplay';

export default function ProgressDisplayExample() {
  return (
    <div className="p-8 bg-background">
      <ProgressDisplay score={8} lives={2} currentQuestion={2} totalQuestions={5} />
    </div>
  );
}
