import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { useQuery } from 'react-query';
import './styles/App.css';
import Navbar from './Navbar';
import Home from './Home';
import LoadingScreen from './LoadingScreen';
import CountryDetails from './CountryDetails';
import FlagGame from './FlagGame';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [countriesData, setCountriesData] = useState([]);

  const API_URL = 'https://restcountries.com/v2/all';
  const { isLoading, error, data } = useQuery('countryData', async () => {
    const res = await fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setCountriesData(data));
  });

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  if (isLoading) {
    return <LoadingScreen darkMode={darkMode} />;
  }

  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <Routes>
        <Route
          path='/'
          element={<Home countriesData={countriesData} darkMode={darkMode} />}
        ></Route>
        <Route
          path=':countryName'
          element={
            <CountryDetails countriesData={countriesData} darkMode={darkMode} />
          }
        ></Route>
        <Route path='/flag-game' element={<FlagGame />}></Route>
      </Routes>
    </>
  );
}
