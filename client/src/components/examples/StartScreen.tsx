import StartScreen from '../StartScreen';

export default function StartScreenExample() {
  return <StartScreen onStart={(name) => console.log('Started with name:', name)} />;
}
