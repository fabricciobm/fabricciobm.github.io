import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';
import icons from './../../icons';

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li><Link to="/" title="Home"><span>{icons.home()}</span>Home</Link></li>
        <li><Link to="/solution" title="Solution"><span>{icons.shoppingCart()}</span>Solution</Link></li>
        <li><Link to="/contact" title="Contact"><span>{icons.addressBook()}</span>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
