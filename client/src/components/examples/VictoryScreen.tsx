import VictoryScreen from '../VictoryScreen';

export default function VictoryScreenExample() {
  return (
    <VictoryScreen
      playerName="Explorer Alex"
      score={25}
      timeElapsed="5:30"
      onPlayAgain={() => console.log('Play again clicked')}
    />
  );
}
