import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './../../styles/menutoggle.css';
import Logo from './../header/logo';
import icons from './../icons';

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


  const menuToggleLinks = [
    { to: "/", title: "Home", text: "Home", icon: icons.home() },
    { to: "/servizi", title: "Servizi", text: "Soluzioni", icon: icons.addressBook(), submenu: [
      { to: "/servizi?category=design&search=&modal=", title: "Design", text: "Design", icon: icons.addressBook(), submenu: [
        { to: "/servizi?category=&search=&modal=Branding", title: "Branding", text: "Branding", icon: icons.addressBook() },
        { to: "/servizi?category=&search=&modal=Social%20Media", title: "Social media", text: "Social media", icon: icons.addressBook()}
      ]},
      { to: "/servizi?category=sviluppo&search=&modal=", title: "Sviluppo", text: "Sviluppo", icon: icons.addressBook(), submenu: [
        { to: "/servizi?category=&search=&modal=Siti%20Web%20Statici", title: "Siti Web Statici", text: "Siti Web Statici", icon: icons.addressBook() },
        { to: "/servizi?category=&search=&modal=Siti%20Web%20Dinamici", title: "Siti Web Dinamici", text: "Siti Web Dinamici", icon: icons.addressBook() },
        { to: "/servizi?category=&search=&modal=Comércio%20eletrônico%20(e-commerce)", title: "E-commerce", text: "E-commerce", icon: icons.addressBook()}
      ]},
    ]},
    { to: "/contact", title: "Contact", text: "Contact", icon: icons.addressBook() }
  ];

  const renderMenuToggle = (menuItem) => (
    <li key={menuItem.to}>
      {menuItem.submenu ? (
        <>
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
