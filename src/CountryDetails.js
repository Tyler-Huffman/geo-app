import { useParams } from 'react-router-dom';
import './styles/countrydetails.css';
import { Link } from 'react-router-dom';

export default function CountryDetails(props) {
  const { countryName } = useParams();
  const { countriesData, darkMode } = props;
  const selectedCountry = countriesData.find(
    (country) => country.name === countryName
  );
  const {
    region,
    currencies,
    topLevelDomain,
    name,
    capital,
    subregion,
    population,
    nativeName,
    flag,
    borders,
    languages,
  } = selectedCountry;

  //  create Map object to get country name
  // from 3 letter code
  const threeKeyLookupMap = new Map();
  countriesData.forEach((element) => {
    threeKeyLookupMap.set(element.alpha3Code, element.name);
  });

  //  if selected country has borders
  //  create buttons for each of them
  //  use map to display full names
  const borderCountryButtons =
    'borders' in selectedCountry
      ? borders.map((borderCountry) => {
          return (
            <button>
              <Link to={`/${threeKeyLookupMap.get(borderCountry)}`}>
                {threeKeyLookupMap.get(borderCountry)}
              </Link>
            </button>
          );
        })
      : '';

  const languageNameList = languages.map((lang) => {
    return <span>"{lang.name}" </span>;
  });

  return (
    <>
      <div className={darkMode ? 'infoSectionDark' : 'infoSectionLight'}>
        <Link to='/'>
          <button>
            <img src='/arrow-narrow-left.svg' alt='Back Arrow' id='arrow-img' />
          </button>
        </Link>
        <div className='info'>
          <img className='infoImage' src={flag} alt='' />
          <div className='infoText'>
            <h3 className='gridExpandTwo'>{name}</h3>
            <p>Native Name: {nativeName}</p>
            <p>Population: {population.toLocaleString('en-US')}</p>
            <p>Region: {region}</p>
            <p>Sub Region: {subregion}</p>
            <p>Capital: {capital}</p>
            <p>Top Level Domain: {topLevelDomain}</p>
            {'currencies' in selectedCountry && (
              <p>Currencies: {currencies[0].name}</p>
            )}
            <p>Languages: {languageNameList}</p>
            <p className='gridExpandTwo'>Border Countries:</p>
          </div>
          <div className='borderButtons'>{borderCountryButtons}</div>
        </div>
      </div>
    </>
  );
}
