interface ProgressDisplayProps {
  score: number;
  lives: number;
  currentQuestion: number;
  totalQuestions: number;
}

export default function ProgressDisplay({ score, lives, currentQuestion, totalQuestions }: ProgressDisplayProps) {
  return (
    <div className="flex items-center justify-between gap-4 md:gap-8 mb-4 md:mb-6">
      <div className="flex items-center gap-2">
        <span className="text-2xl md:text-3xl">⭐</span>
        <span className="text-lg md:text-xl font-bold" data-testid="text-score">{score}</span>
      </div>
      
      <div className="flex-1 max-w-xs">
        <div className="h-3 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-700 ease-in-out"
            style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
          />
        </div>
        <p className="text-xs md:text-sm text-muted-foreground text-center mt-1" data-testid="text-progress">
          {currentQuestion + 1} of {totalQuestions}
        </p>
      </div>
      
      <div className="flex gap-1">
        {[...Array(3)].map((_, i) => (
          <span key={i} className="text-xl md:text-2xl">
            {i < lives ? '❤️' : '🖤'}
          </span>
        ))}
      </div>
    </div>
  );
}
