import React from 'react';
import './styles/App.css';

export default function LoadingScreen({ darkMode }) {
  return (
    <div className={darkMode ? 'loadingScreenDark' : 'loadingScreenLight'}>
      <p>Loading...</p>
    </div>
  );
}
