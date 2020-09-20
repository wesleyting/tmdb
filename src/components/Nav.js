import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/reeltalk-logo.png';
import SearchBar from './SearchBar';


function Nav() {
  const[click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <nav className='navbar'>
        <Link to='/' 
        className='navbar-logo'>
          <img src={Logo} alt="Reel Talk Logo" />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <div className="nav-search-bar">
        <SearchBar /> 
        </div>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick=
            {closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-links' onClick=
            {closeMobileMenu}>
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/favorites' className='nav-links' onClick=
            {closeMobileMenu}>
              Favorites
            </Link>
          </li>
          <li className='nav-item nav-item-search'>
            <Link to='/search' className='nav-links' onClick=
            {closeMobileMenu}>
              Search <i className="fas fa-search search-icon"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav;