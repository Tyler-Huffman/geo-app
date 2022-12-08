import { useState, useRef, useEffect } from 'react';

export default function useFlagGame(countriesData) {
  const [randomCountry, setRandomCountry] = useState(
    countriesData[Math.trunc(Math.random() * countriesData.length)]
  );
  const [score, setScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [result, setResult] = useState('');
  const correctAnswer = randomCountry.name.toLowerCase();
  const inputRef = useRef(null);

  function startGame() {
    setResult('');
    setGameActive(true);
    setNewRandomCountry(
      countriesData[Math.trunc(Math.random() * countriesData.length)]
    );
    inputRef.current.disabled = false;
    inputRef.current.focus();
  }

  function endGame() {
    setGameActive(false);
    setScore(0);
    inputRef.current.value = '';
    setResult(`That was incorrect. The answer was ${correctAnswer}`);
  }

  function setNewRandomCountry() {
    setRandomCountry((prevRandom) => {
      while (true) {
        const rChoice =
          countriesData[Math.trunc(Math.random() * countriesData.length)];
        if (rChoice !== prevRandom) return rChoice;
      }
    });
  }

  function handleAnswerSubmit() {
    const userAnswer = inputRef.current.value.toLowerCase();
    const isAnswerCorrect = correctAnswer === userAnswer;
    if (isAnswerCorrect) {
      setScore((prev) => prev + 1);
      setNewRandomCountry();
      inputRef.current.value = '';
      inputRef.current.focus();
      setResult('Correct!');
    } else endGame();
  }

  return {
    randomCountry,
    score,
    gameActive,
    inputRef,
    handleAnswerSubmit,
    startGame,
    result,
  };
}
