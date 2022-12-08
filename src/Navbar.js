import './styles/navbar.css';
import { Link } from 'react-router-dom';

export default function NavBar({ darkMode, toggleDarkMode }) {
  return (
    <>
      <div className={darkMode ? 'navbarDark' : 'navbarLight'}>
        <Link to='/' id='home-link'>
          <h1 className='title'>Where in the World?</h1>
        </Link>
        <div className='navbarRight'>
          <Link to='./flag-game' id='flag-game-link'>
            Flag Game
          </Link>
          <img
            onClick={toggleDarkMode}
            src={darkMode ? '/sun.svg' : '/moon.svg'}
            width={35}
            height={35}
          />
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </div>
      </div>
    </>
  );
}
