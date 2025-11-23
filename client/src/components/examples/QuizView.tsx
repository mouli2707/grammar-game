import QuizView from '../QuizView';

export default function QuizViewExample() {
  const island = { id: 'noun', name: 'Noun Island', emoji: '🏝️', color: '#22c55e', x: 12, y: 65 };
  const question = {
    q: "Which word is a noun?",
    options: ["run", "happy", "dog", "quickly"],
    answer: "dog",
    level: 1
  };
  
  return (
    <QuizView
      island={island}
      question={question}
      questionIndex={0}
      totalQuestions={5}
      score={0}
      lives={3}
      onAnswer={(ans) => console.log('Answer:', ans)}
      feedback={null}
    />
  );
}
