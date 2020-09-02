import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/reeltalk-logo.png';

const Header = () => (
	<header>
    	<h1><Link to={'/'}><img src={Logo}/></Link></h1>
	</header>
);

export default Header;