import React from 'react';
import { Link } from 'react-router-dom';
import './../../styles/menu.css';
import icons from './../icons';

const Menu = () => {
  const menuLinks = [
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
      { to: "/servizi?category=marketing&search=&modal=", title: "Marketing", text: "Marketing", icon: icons.addressBook(), submenu: [
        { to: "/servizi?category=marketing&search=&modal=Biglitti%20da%20visita", title: "Biglietti da visita", text: "Biglietti da visita", icon: icons.addressBook() },
        { to: "/servizi?category=marketing&search=&modal=Adesivi%20Personalizzati", title: "Adesivi Personalizzati", text: "Adesivi Personalizzati", icon: icons.addressBook() },
        { to: "/servizi?category=&search=&modal=Social%20Media", title: "Social media", text: "Social media", icon: icons.addressBook()}
      ]},
    ]},
    { to: "/contact", title: "Contact", text: "Contact", icon: icons.addressBook() }
  ];

  const handleLinkClick = (to) => {
    if (to.includes("/servizi?category=")){ // add others  (to.includes("/servizi?category=" || to.includes("/")) 
      window.scrollTo({
        top: window.scrollY + 440,
        behavior: "smooth"
      });
    }
  };

  const renderMenu = (menu) => (
    <li key={menu.to}>
      <Link to={menu.to} title={menu.title} onClick={() => handleLinkClick(menu.to)}>
        <span>{menu.icon}</span>
        {menu.text}
      </Link>
      {menu.submenu && (
        <ul>{menu.submenu.map(submenu => renderMenu(submenu))}</ul>
      )}
    </li>
  );

  return (
    <nav className="menu">
      <ul>
        {menuLinks.map(menu => renderMenu(menu))}
      </ul>
    </nav>
  );
};

export default Menu;
