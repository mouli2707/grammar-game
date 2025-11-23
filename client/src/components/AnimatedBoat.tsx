interface AnimatedBoatProps {
  x: number;
  y: number;
  isMoving: boolean;
}

export default function AnimatedBoat({ x, y, isMoving }: AnimatedBoatProps) {
  return (
    <div
      className="absolute z-30 transition-all duration-[2000ms] ease-in-out"
      style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
    >
      <div className={`text-4xl md:text-5xl ${isMoving ? 'animate-sail' : 'animate-bob'}`}>
        ⛵
      </div>
      {isMoving && (
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
          <div className="flex gap-1">
            {[0, 1, 2].map(i => (
              <div key={i} className="w-2 h-2 bg-white/60 rounded-full animate-ping" style={{ animationDelay: `${i * 200}ms` }} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
