import React from 'react';
import './styles/filterform.css';

export default function FilterForm(props) {
  const { handleFilterFormChange, userInputData, darkMode } = props;

  return (
    <form className={darkMode ? 'inputsDark' : 'inputsLight'}>
      <input
        type='text'
        placeholder='Search for a country...'
        onChange={handleFilterFormChange}
        value={userInputData.search}
        name='search'
      />
      <label htmlFor='regionSelection'></label>
      <select
        id='regionSelection'
        onChange={handleFilterFormChange}
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
