import { useState, useEffect } from 'react';
import { questionBank, islands, shuffle, Question } from '@/lib/gameData';
import { playSound } from '@/lib/audioUtils';
import StartScreen from '@/components/StartScreen';
import IslandMap from '@/components/IslandMap';
import QuizView from '@/components/QuizView';
import VictoryScreen from '@/components/VictoryScreen';
import SoundIndicator from '@/components/SoundIndicator';

export default function Home() {
  const [screen, setScreen] = useState<'start' | 'map' | 'quiz' | 'victory'>('start');
  const [playerName, setPlayerName] = useState('');
  const [currentIsland, setCurrentIsland] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [feedback, setFeedback] = useState<{ type: 'correct' | 'wrong'; msg: string } | null>(null);
  const [completedIslands, setCompletedIslands] = useState<number[]>([]);
  const [startTime, setStartTime] = useState<number>(0);
  const [boatPos, setBoatPos] = useState({ x: 5, y: 85 });
  const [isBoatMoving, setIsBoatMoving] = useState(false);
  const [soundEffect, setSoundEffect] = useState<'correct' | 'wrong' | null>(null);

  const generateQuestions = (islandId: string): Question[] => {
    const bank = questionBank[islandId];
    const selected: Question[] = [];
    for (let lvl = 1; lvl <= 5; lvl++) {
      const lvlQs = shuffle(bank.filter(q => q.level === lvl));
      if (lvlQs.length > 0) {
        selected.push(lvlQs[0]);
      }
    }
    return selected.map(q => ({ ...q, options: shuffle([...q.options]) }));
  };

  const startGame = (name: string) => {
    setPlayerName(name);
    setScreen('map');
    setCurrentIsland(0);
    setScore(0);
    setLives(3);
    setCompletedIslands([]);
    setStartTime(Date.now());
    setBoatPos({ x: 5, y: 85 });
    playSound('correct');
  };

  const startIsland = (idx: number) => {
    if (idx !== currentIsland || isBoatMoving) return;
    const island = islands[idx];
    setIsBoatMoving(true);
    setBoatPos({ x: island.x, y: island.y + 18 });
    
    setTimeout(() => {
      setIsBoatMoving(false);
      setQuestions(generateQuestions(island.id));
      setCurrentQ(0);
      setFeedback(null);
      setScreen('quiz');
    }, 2000);
  };

  const handleAnswer = (ans: string) => {
    if (feedback) return;
    const correct = ans === questions[currentQ].answer;
    
    setSoundEffect(correct ? 'correct' : 'wrong');
    playSound(correct ? 'correct' : 'wrong');
    setTimeout(() => setSoundEffect(null), 1000);
    
    if (correct) {
      setScore(s => s + 1);
      setFeedback({ type: 'correct', msg: '🎉 Awesome! You got it!' });
    } else {
      setLives(l => l - 1);
      setFeedback({ type: 'wrong', msg: `❌ Not quite! It was: ${questions[currentQ].answer}` });
    }
    
    setTimeout(() => {
      if (currentQ < questions.length - 1) {
        setCurrentQ(q => q + 1);
        setFeedback(null);
      } else {
        setCompletedIslands(prev => [...prev, currentIsland]);
        
        if (currentIsland < 4) {
          setCurrentIsland(i => i + 1);
          setScreen('map');
          setFeedback(null);
        } else {
          const elapsed = Math.floor((Date.now() - startTime) / 1000);
          const mins = Math.floor(elapsed / 60);
          const secs = elapsed % 60;
          playSound('victory');
          setScreen('victory');
        }
      }
    }, 2000);
  };

  const playAgain = () => {
    setScreen('start');
    setPlayerName('');
    setCurrentIsland(0);
    setScore(0);
    setLives(3);
    setCompletedIslands([]);
    setBoatPos({ x: 5, y: 85 });
  };

  const getTimeElapsed = () => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const mins = Math.floor(elapsed / 60);
    const secs = elapsed % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <SoundIndicator type={soundEffect} />
      
      {screen === 'start' && <StartScreen onStart={startGame} />}
      
      {screen === 'map' && (
        <IslandMap
          currentIsland={currentIsland}
          completedIslands={completedIslands}
          boatPosition={boatPos}
          isBoatMoving={isBoatMoving}
          onIslandClick={startIsland}
          playerName={playerName}
        />
      )}
      
      {screen === 'quiz' && questions.length > 0 && (
        <QuizView
          island={islands[currentIsland]}
          question={questions[currentQ]}
          questionIndex={currentQ}
          totalQuestions={questions.length}
          score={score}
          lives={lives}
          onAnswer={handleAnswer}
          feedback={feedback}
        />
      )}
      
      {screen === 'victory' && (
        <VictoryScreen
          playerName={playerName}
          score={score}
          timeElapsed={getTimeElapsed()}
          onPlayAgain={playAgain}
        />
      )}
    </>
  );
}
