import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/reeltalk-logo.png';


function Nav() {
  const[click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <nav className='navbar'>
        <Link to='/' 
        className='navbar-logo'>
          <img src={Logo} />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
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
          <li className='nav-item'>
            <Link to='/search-page' className='nav-links' onClick=
            {closeMobileMenu}>
              Search
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav;