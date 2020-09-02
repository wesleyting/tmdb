import React, {useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Spin as Hamburger } from 'hamburger-react';
import Logo from '../images/reeltalk-logo.png';


const Nav = () => {

    const [open, setOpen] = useState(false);
    const openHamburger = () => {
        setOpen(!open);
    }

    return (
    <nav>
        <Hamburger onToggle={openHamburger} size={28}/>
        <div className="logo"><Link to={'/'}><img src={Logo}/></Link></div>
        {open && <ul >
            <li><NavLink to={'/'} exact>Home</NavLink></li>
            <li><NavLink to={'/about'}>About</NavLink></li>
            <li><NavLink to={'/favorites'}>Favorites</NavLink></li>
            <li><NavLink to={'/watch-later'}>Watch Later</NavLink></li>
        </ul>}
	</nav>
    );
};

export default Nav;