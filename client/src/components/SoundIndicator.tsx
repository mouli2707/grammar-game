interface SoundIndicatorProps {
  type: 'correct' | 'wrong' | null;
}

export default function SoundIndicator({ type }: SoundIndicatorProps) {
  if (!type) return null;
  
  return (
    <div className="fixed top-4 right-4 z-50 bg-card rounded-full p-4 shadow-2xl animate-bounce">
      <div className="text-4xl">{type === 'correct' ? '🔔' : '📢'}</div>
      <p className="text-xs font-bold text-center mt-1">
        {type === 'correct' ? 'Ding!' : 'Buzz!'}
      </p>
    </div>
  );
}
