import IslandMap from '../IslandMap';

export default function IslandMapExample() {
  return (
    <IslandMap
      currentIsland={1}
      completedIslands={[0]}
      boatPosition={{ x: 28, y: 50 }}
      isBoatMoving={false}
      onIslandClick={(idx) => console.log('Island clicked:', idx)}
      playerName="Explorer Alex"
    />
  );
}
