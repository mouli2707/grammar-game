import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import WaveBackground from './WaveBackground';

interface StartScreenProps {
  onStart: (name: string) => void;
}

export default function StartScreen({ onStart }: StartScreenProps) {
  const [playerName, setPlayerName] = useState('');
  
  const handleStart = () => {
    if (playerName.trim()) {
      console.log('Starting game for:', playerName);
      onStart(playerName.trim());
    }
  };
  
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-300 via-blue-400 to-blue-500 p-4 md:p-8 overflow-hidden">
      <WaveBackground />
      
      <Card className="relative z-10 w-full max-w-md md:max-w-lg shadow-2xl">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center gap-2 text-5xl md:text-6xl animate-bounce">
            🏝️ 🌴 🏖️
          </div>
          <CardTitle className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
            Grammar Island Adventure
          </CardTitle>
          <CardDescription className="text-base md:text-lg">
            Sail across magical islands and master parts of speech!
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="player-name" className="text-sm font-medium">
              What's your name, explorer?
            </label>
            <Input
              id="player-name"
              data-testid="input-player-name"
              type="text"
              placeholder="Enter your name..."
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleStart()}
              className="text-lg"
            />
          </div>
          
          <Button
            data-testid="button-start-adventure"
            size="lg"
            className="w-full text-lg font-bold"
            onClick={handleStart}
            disabled={!playerName.trim()}
          >
            🚢 Start Adventure
          </Button>
          
          <div className="grid grid-cols-2 gap-3 pt-4 border-t">
            <div className="text-center p-3 bg-muted rounded-lg">
              <div className="text-3xl mb-1">🏝️</div>
              <div className="text-xs font-medium">5 Islands</div>
            </div>
            <div className="text-center p-3 bg-muted rounded-lg">
              <div className="text-3xl mb-1">❓</div>
              <div className="text-xs font-medium">25 Questions</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
