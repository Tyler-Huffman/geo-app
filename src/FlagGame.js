import React, { useState, useRef } from 'react';
import './styles/flaggame.css';
import useFlagGame from './useFlagGame';

export default function FlagGame({ darkMode, countriesData }) {
  const { randomCountry, score, roundResult, inputRef, handleAnswerSubmit } =
    useFlagGame(countriesData);

  return (
    <div className={darkMode ? 'flagGameDark' : 'flagGameLight'}>
      <div id='flagGameContainer'>
        <h1>Enter the country the flag belongs to</h1>
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
          />
          <button
            type='submit'
            onClick={handleAnswerSubmit}
            id='submitAnswerButton'
          >
            Submit
          </button>
        </div>
        Player Score: {score}
        {roundResult && <h1>{roundResult}</h1>}
      </div>
    </div>
  );
}
