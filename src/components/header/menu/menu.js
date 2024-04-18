import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';
import icons from './../../icons';

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li><Link to="/"><span>{icons.home()}</span>Home</Link></li>
        <li><Link to="/solution"><span>{icons.shoppingCart()}</span>Solution</Link></li>
        <li><Link to="/contact"><span>{icons.addressBook()}</span>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
