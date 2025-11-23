import { Island } from '@/lib/gameData';

interface IslandSpriteProps {
  island: Island;
  isActive: boolean;
  isCompleted: boolean;
  isLocked: boolean;
  onClick: () => void;
}

export default function IslandSprite({ island, isActive, isCompleted, isLocked, onClick }: IslandSpriteProps) {
  return (
    <button
      onClick={onClick}
      disabled={!isActive}
      data-testid={`button-island-${island.id}`}
      className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group
        ${isActive ? 'cursor-pointer scale-110' : 'cursor-default'}
        ${isCompleted ? 'opacity-70' : ''} ${isLocked ? 'opacity-40 grayscale' : ''}`}
      style={{ left: `${island.x}%`, top: `${island.y}%` }}
    >
      <div className={`relative ${isActive ? 'animate-pulse' : ''}`}>
        {isActive && (
          <div className="absolute -inset-4 rounded-full bg-yellow-400/30 animate-ping" />
        )}
        <div className={`rounded-full p-4 md:p-6 shadow-xl transition-all duration-300 
          ${isActive ? 'ring-4 ring-yellow-400 ring-offset-2 shadow-yellow-400/50' : ''}
          ${isCompleted ? 'ring-2 ring-green-400' : ''}`}
          style={{ backgroundColor: island.color }}>
          <span className="text-4xl md:text-5xl block animate-float">{island.emoji}</span>
        </div>
        {isCompleted && (
          <div className="absolute -top-2 -right-2 text-2xl md:text-3xl animate-bounce">✅</div>
        )}
        {isActive && !isCompleted && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xl md:text-2xl animate-bounce">👇</div>
        )}
      </div>
      <p className={`mt-2 text-xs md:text-sm font-bold px-3 py-1 rounded-full whitespace-nowrap
        ${isActive ? 'bg-yellow-400 text-yellow-900' : 'bg-black/40 text-white'}`}
        data-testid={`text-island-name-${island.id}`}>
        {island.name}
      </p>
    </button>
  );
}
