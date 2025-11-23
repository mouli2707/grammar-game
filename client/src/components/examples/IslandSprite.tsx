import IslandSprite from '../IslandSprite';

export default function IslandSpriteExample() {
  const island = { id: 'noun', name: 'Noun Island', emoji: '🏝️', color: '#22c55e', x: 50, y: 50 };
  
  return (
    <div className="relative w-full h-96 bg-gradient-to-b from-sky-300 to-blue-400">
      <IslandSprite 
        island={island} 
        isActive={true} 
        isCompleted={false} 
        isLocked={false} 
        onClick={() => console.log('Island clicked')} 
      />
    </div>
  );
}
