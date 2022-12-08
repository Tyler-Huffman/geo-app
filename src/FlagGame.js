import React, { useState, useRef } from 'react';
import './styles/flaggame.css';
import useFlagGame from './useFlagGame';

export default function FlagGame({ darkMode, countriesData }) {
  const {
    randomCountry,
    score,
    inputRef,
    handleAnswerSubmit,
    gameActive,
    startGame,
    result,
  } = useFlagGame(countriesData);

  return (
    <div className={darkMode ? 'flagGameDark' : 'flagGameLight'}>
      <div id='flagGameContainer'>
        <h1>Guess the Flag</h1>
        <p>Guess as many flags in a row as you can.</p>
        <p>Click the button below to start!</p>
        <button disabled={gameActive} onClick={startGame}>
          Start Game
        </button>
        <h2>Player Score: {score}</h2>
        {result && <h4>{result}</h4>}
        <img
          unoptimized='true'
          src={randomCountry.flag}
          alt={`Random Country Flag`}
          width={500}
          height={250}
          id='randomFlagImg'
        />
        <div>
          <input
            id='answerInput'
            type='text'
            placeholder='Enter your answer...'
            ref={inputRef}
            disabled={!gameActive}
          />
          <button
            type='submit'
            onClick={handleAnswerSubmit}
            id='submitAnswerButton'
            disabled={!gameActive}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
