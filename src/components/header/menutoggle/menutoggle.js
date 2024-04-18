import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './menutoggle.css';
import Logo from './../logo/logo';
import icons from './../../icons';

const MenuToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="toggle-button">
      <button onClick={handleToggle} className="toggle-btn">
        {icons.bars()}
      </button>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button onClick={handleClose} className="close-btn">
          {icons.close()}
        </button>
        <Logo />
        <nav className="togglemenu">
          <ul>
            <li><Link to="/" onClick={handleClose}><span>{icons.home()}</span>Home</Link></li>
            <li><Link to="/solution" onClick={handleClose}><span>{icons.shoppingCart()}</span>Solution</Link></li>
            <li><Link to="/contact" onClick={handleClose}><span>{icons.addressBook()}</span>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MenuToggle;
