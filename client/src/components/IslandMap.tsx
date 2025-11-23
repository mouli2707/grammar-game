import { islands, Island } from '@/lib/gameData';
import IslandSprite from './IslandSprite';
import AnimatedBoat from './AnimatedBoat';
import WaveBackground from './WaveBackground';
import { Button } from '@/components/ui/button';

interface IslandMapProps {
  currentIsland: number;
  completedIslands: number[];
  boatPosition: { x: number; y: number };
  isBoatMoving: boolean;
  onIslandClick: (index: number) => void;
  playerName: string;
}

export default function IslandMap({ currentIsland, completedIslands, boatPosition, isBoatMoving, onIslandClick, playerName }: IslandMapProps) {
  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-sky-300 via-blue-400 to-blue-500 overflow-hidden">
      <WaveBackground />
      
      <div className="absolute top-4 left-4 z-20">
        <div className="bg-card/90 backdrop-blur-sm rounded-lg p-3 md:p-4 shadow-lg">
          <p className="text-xs md:text-sm text-muted-foreground">Captain</p>
          <p className="text-lg md:text-xl font-bold" data-testid="text-player-name">{playerName}</p>
        </div>
      </div>
      
      <div className="absolute top-4 right-4 z-20">
        <div className="bg-card/90 backdrop-blur-sm rounded-lg p-3 md:p-4 shadow-lg">
          <p className="text-xs md:text-sm text-muted-foreground">Progress</p>
          <p className="text-lg md:text-xl font-bold" data-testid="text-islands-completed">{completedIslands.length}/5 Islands</p>
        </div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-2">
          Grammar Island Adventure
        </h1>
        <p className="text-base md:text-lg text-white/90 drop-shadow">
          Click the glowing island to continue your journey!
        </p>
      </div>
      
      {islands.map((island, idx) => (
        <IslandSprite
          key={island.id}
          island={island}
          isActive={idx === currentIsland}
          isCompleted={completedIslands.includes(idx)}
          isLocked={idx > currentIsland}
          onClick={() => onIslandClick(idx)}
        />
      ))}
      
      <AnimatedBoat x={boatPosition.x} y={boatPosition.y} isMoving={isBoatMoving} />
      
      {currentIsland >= 5 && (
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20">
          <div className="text-center">
            <div className="text-7xl animate-bounce">🌋</div>
            <p className="text-sm font-bold text-white bg-red-600/80 rounded-full px-3 py-1 mt-2 animate-pulse">
              Victory!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
