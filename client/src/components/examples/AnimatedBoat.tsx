import AnimatedBoat from '../AnimatedBoat';

export default function AnimatedBoatExample() {
  return (
    <div className="relative w-full h-96 bg-gradient-to-b from-sky-300 to-blue-400">
      <AnimatedBoat x={50} y={50} isMoving={true} />
    </div>
  );
}
