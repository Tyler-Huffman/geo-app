import { useState, useRef } from 'react';

function useFlagGame(countriesData) {
  const [randomCountry, setRandomCountry] = useState(
    countriesData[Math.trunc(Math.random() * countriesData.length)]
  );
  let score = 0;
  let roundResult = '';
  const correctAnswer = randomCountry.name;
  const inputRef = useRef(null);

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
    const isAnswerCorrect = correctAnswer === inputRef.current.value;
    if (isAnswerCorrect) {
      roundResult += 'You got that correct!';
      score += 1;
    } else
      roundResult += `You got that incorrect. The correct answer was ${randomCountry.name}`;
    console.log('isAnswerCorrect', isAnswerCorrect);
    console.log(correctAnswer);
    setNewRandomCountry();
  }

  return { randomCountry, score, roundResult, inputRef, handleAnswerSubmit };
}

export default useFlagGame;
