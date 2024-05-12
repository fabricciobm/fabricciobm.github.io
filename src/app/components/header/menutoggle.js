import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './../../styles/menutoggle.css';
import Logo from './../header/logo';
import icons from './../icons';

const MenuToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmenuToggle = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  const menuToggleLinks = [
    { to: "/", title: "Home", text: "Home", icon: icons.home() },
    { to: "/servizi", title: "Servizi", text: "Soluzioni", submenu: [
      { to: "/servizi?category=design&search=&modal=", title: "Design", text: "Design", icon: icons.next() },
      { to: "/servizi?category=sviluppo&search=&modal=", title: "Sviluppo", text: "Sviluppo", icon: icons.next() },
    ]},
    { to: "/contact", title: "Contact", text: "Contact", icon: icons.addressBook() }
  ];

  const renderMenuToggle = (menuItem, index) => (
    <li key={menuItem.to}>
      {menuItem.submenu ? (
        <>
          <a onClick={() => handleSubmenuToggle(index)}>{icons.down()} {menuItem.text}</a>
          <ul className={activeSubmenu === index ? 'open' : ''}>
            {menuItem.submenu.map(submenuItem => (
              <li key={submenuItem.to}>
                <Link to={submenuItem.to} onClick={() => setIsOpen(false)} title={submenuItem.text}>
                  <span>{submenuItem.icon}</span>
                  {submenuItem.text}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <Link to={menuItem.to} onClick={() => setIsOpen(false)} title={menuItem.text}>
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
        <button className="close-btn" onClick={() => setIsOpen(false)} title="Clicca per attivare/disattivare">
          {icons.close()}
        </button>
        <Logo />
        <nav className="togglemenu">
          <ul>
            {menuToggleLinks.map((menuItem, index) => renderMenuToggle(menuItem, index))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MenuToggle;
