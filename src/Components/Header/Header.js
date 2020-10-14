import React from 'react';
import './Header.css';
//import Contact from './Components/Contact/Contact';

class Header extends React.Component {
    render () {
        return (
			<header className='header'>
				<nav className= 'navHeader'>
					<a href='#'>Drinks </a>
					<a href='#'>Sobre nós</a>
					<a href='#'>Bons Drinks</a>
					<a href='#'>Nosso time</a>
					<a href= '#'>Contacts</a>				
				
				</nav>
			</header>
		);
    }
}

export default Header;