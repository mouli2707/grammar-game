import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Question, Island } from '@/lib/gameData';
import ProgressDisplay from './ProgressDisplay';

interface QuizViewProps {
  island: Island;
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  score: number;
  lives: number;
  onAnswer: (answer: string) => void;
  feedback: { type: 'correct' | 'wrong'; msg: string } | null;
}

export default function QuizView({ island, question, questionIndex, totalQuestions, score, lives, onAnswer, feedback }: QuizViewProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
 
 useEffect(() => {setSelectedAnswer(null);}, [questionIndex]);
  const handleAnswerClick = (answer: string) => {
    if (feedback) return;
    setSelectedAnswer(answer);
    console.log('Answer selected:', answer);
    onAnswer(answer);
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8"
      style={{ 
        background: `linear-gradient(135deg, ${island.color}20 0%, ${island.color}40 100%)` 
      }}>
      <Card className="w-full max-w-3xl shadow-2xl">
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="text-5xl md:text-6xl">{island.emoji}</span>
            <h2 className="text-2xl md:text-3xl font-bold" data-testid="text-island-name">{island.name}</h2>
          </div>
          
          <ProgressDisplay 
            score={score} 
            lives={lives} 
            currentQuestion={questionIndex} 
            totalQuestions={totalQuestions} 
          />
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="text-center">
            <p className="text-xl md:text-2xl font-semibold leading-relaxed" data-testid="text-question">
              {question.q}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {question.options.map((option, idx) => (
              <Button
                key={idx}
                data-testid={`button-answer-${idx}`}
                size="lg"
                variant={
                  feedback && option === question.answer ? 'default' :
                  feedback && option === selectedAnswer && option !== question.answer ? 'destructive' :
                  'outline'
                }
                className={`min-h-16 md:min-h-20 text-base md:text-lg font-medium whitespace-normal h-auto py-4 transition-all
                  ${selectedAnswer === option && !feedback ? 'ring-4 ring-primary scale-105' : ''}
                  ${feedback && option === question.answer ? 'animate-bounce' : ''}
                  ${feedback && option === selectedAnswer && option !== question.answer ? 'animate-shake' : ''}
                `}
                onClick={() => handleAnswerClick(option)}
                disabled={!!feedback}
              >
                {option}
              </Button>
            ))}
          </div>
          
          {feedback && (
            <div className={`text-center p-4 rounded-lg font-bold text-lg md:text-xl animate-bounce
              ${feedback.type === 'correct' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
              data-testid="text-feedback">
              {feedback.msg}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
