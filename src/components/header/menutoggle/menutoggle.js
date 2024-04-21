import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './menutoggle.css';
import Logo from './../logo/logo';
import icons from './../../icons';

const MenuToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsSubmenuOpen(false); 
  };

  const handleServiziClick = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  const menuToggleLinks = [
    { to: "/", text: "Home", icon: icons.home() },
    { to: "#", text: "Servizi", icon: icons.addressBook(),
      submenu: [
        { to: "/servizi/design", text: "Design", icon: icons.addressBook() },
        { to: "/servizi/sviluppo", text: "Sviluppo", icon: icons.addressBook() }
      ]
    },
    { to: "/contact", text: "Contact", icon: icons.addressBook() }
  ];

  const renderMenuToggle = (menuItem) => (
    <li key={menuItem.to}>
      {menuItem.submenu ? (
        <>
          <Link to="#" onClick={handleServiziClick} title={menuItem.text}>
            <span>{menuItem.icon}</span>
            {menuItem.text}
          </Link>
          <ul className={isSubmenuOpen ? 'open' : ''}>
            {menuItem.submenu.map(submenu => renderMenuToggle(submenu))}
          </ul>
        </>
      ) : (
        <Link to={menuItem.to} onClick={handleClose} title={menuItem.text}>
          <span>{menuItem.icon}</span>
          {menuItem.text}
        </Link>
      )}
    </li>
  );

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
            {menuToggleLinks.map(menuItem => renderMenuToggle(menuItem))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MenuToggle;
