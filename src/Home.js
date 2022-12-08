import React, { useState } from 'react';
import CountryCard from './CountryCard';
import './styles/home.css';
import FilterForm from './FilterForm';

export default function Home({ countriesData, darkMode }) {
  const [userInputData, setUserInputData] = useState({
    search: '',
    regionSelection: 'none',
  });

  function handleFilterFormChange(e) {
    const { name, value } = e.target;
    setUserInputData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  const countries = countriesData
    .filter((entry) => {
      if (userInputData.search === '') {
        return entry;
      } else if (
        entry.name.toLowerCase().includes(userInputData.search.toLowerCase())
      ) {
        return entry;
      }
    })
    .filter((entry) => {
      if (userInputData.regionSelection === 'none') {
        return entry;
      } else if (entry.region.toLowerCase() === userInputData.regionSelection) {
        return entry;
      }
    })
    .map((entry) => {
      return <CountryCard key={entry.name} item={entry} darkMode={darkMode} />;
    });

  return (
    <>
      <FilterForm
        userInputData={userInputData}
        darkMode={darkMode}
        handleFilterFormChange={handleFilterFormChange}
      />
      <div className={darkMode ? 'countryGridDark' : 'countryGridLight'}>
        {countries}
      </div>
    </>
  );
}
