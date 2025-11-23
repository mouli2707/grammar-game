import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Confetti from './Confetti';

interface VictoryScreenProps {
  playerName: string;
  score: number;
  timeElapsed: string;
  onPlayAgain: () => void;
}

export default function VictoryScreen({ playerName, score, timeElapsed, onPlayAgain }: VictoryScreenProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-400 via-pink-400 to-red-400 p-4 md:p-8">
      <Confetti active={true} />
      
      <Card className="relative z-10 w-full max-w-md md:max-w-lg shadow-2xl">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center text-7xl md:text-8xl animate-bounce">
            🏆
          </div>
          <CardTitle className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">
            Victory!
          </CardTitle>
          <p className="text-lg md:text-xl font-semibold">
            Congratulations, Captain {playerName}!
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg">
              <div className="text-4xl mb-2">⭐</div>
              <div className="text-2xl md:text-3xl font-bold" data-testid="text-final-score">{score}</div>
              <div className="text-xs md:text-sm text-muted-foreground">Points</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg">
              <div className="text-4xl mb-2">⏱️</div>
              <div className="text-2xl md:text-3xl font-bold" data-testid="text-time-elapsed">{timeElapsed}</div>
              <div className="text-xs md:text-sm text-muted-foreground">Time</div>
            </div>
          </div>
          
          <div className="text-center p-4 bg-muted rounded-lg">
            <p className="text-base md:text-lg font-medium mb-2">
              You've mastered all 5 grammar islands!
            </p>
            <div className="flex justify-center gap-2 text-3xl">
              🏝️ 🌴 🏖️ ⛱️ 🗿
            </div>
          </div>
          
          <Button
            data-testid="button-play-again"
            size="lg"
            className="w-full text-lg font-bold"
            onClick={onPlayAgain}
          >
            🚢 Play Again
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
