import React from 'react';
import './styles/filterform.css';

export default function FilterForm(props) {
  const { handleTextChange, userInputData, darkMode, handleRegionSelection } =
    props;

  return (
    <form className={darkMode ? 'inputsDark' : 'inputsLight'}>
      <input
        type='text'
        placeholder='Search for a country...'
        onChange={handleTextChange}
        value={userInputData.search}
        name='search'
      />
      <label htmlFor='regionSelection'></label>
      <select
        id='regionSelection'
        onChange={handleRegionSelection}
        name='regionSelection'
      >
        <option value='none'>Filter by region</option>
        <option value='africa'>Africa</option>
        <option value='americas'>Americas</option>
        <option value='asia'>Asia</option>
        <option value='europe'>Europe</option>
        <option value='oceania'>Oceania</option>
      </select>
    </form>
  );
}
