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
      <button onClick={handleToggle} className="toggle-btn" title="Clicca per attivare/disattivare">
        {icons.bars()}
      </button>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button onClick={handleClose} className="close-btn" title="Clicca per attivare/disattivare">
          {icons.close()}
        </button>
        <Logo />
        <nav className="togglemenu">
          <ul>
            <li><Link to="/" onClick={handleClose} title="Home"><span>{icons.home()}</span>Home</Link></li>
            <li><Link to="/servizi" onClick={handleClose} title="Servizi"><span>{icons.shoppingCart()}</span>Servizi</Link></li>
            <li><Link to="/contact" onClick={handleClose} title="Contact"><span>{icons.addressBook()}</span>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MenuToggle;
