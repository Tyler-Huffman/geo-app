import React from 'react';
import styles from './styles/countrycard.css';
import './styles/countrycard.css';
import { Link } from 'react-router-dom';

export default function CountryCard(props) {
  const { darkMode } = props;
  const { name, region, population, flag, capital } = props.item;

  return (
    <Link to={`/${name}`}>
      <div className={darkMode ? 'countryCardDark' : 'countryCardLight'}>
        <img
          unoptimized='true'
          src={flag}
          alt={`${name} Flag`}
          width={250}
          height={150}
        />
        <div className={styles.countryCardText}>
          <p>{name}</p>
          <p>Population: {population.toLocaleString('en-US')}</p>
          <p>Region: {region}</p>
          <p>Capital: {capital}</p>
        </div>
      </div>
    </Link>
  );
}
