import React from 'react';
import { Link } from 'react-router-dom';
import './../../styles/menu.css';
import icons from './../icons';
{/*
const Menu = () => {
  const menuLinks = [
    { to: "/", title: "Home", text: "Home", icon: icons.home() },
    { to: "/servizi", title: "Servizi", text: "Servizi", icon: icons.addressBook(), submenu: [
      { to: "/servizi/design", title: "Design", text: "Design", icon: icons.addressBook(), submenu: [
        { to: "/servizi/design", title: "Logo", text: "Logo", icon: icons.addressBook() },
        { to: "/servizi/servizi", title: "Social", text: "Social", icon: icons.addressBook(), submenu: [
          { to: "/servizi/design", title: "Logo", text: "Logo", icon: icons.addressBook() },
          { to: "/servizi/servizi", title: "Social", text: "Social", icon: icons.addressBook() }
        ]}
      ]},
      { to: "/servizi/sviluppo", title: "Sviluppo", text: "Sviluppo", icon: icons.addressBook() }
    ]},
    { to: "/contact", title: "Contact", text: "Contact", icon: icons.addressBook() }
  ];
*/}
  const Menu = () => {
    const menuLinks = [
      { to: "/", title: "Home", text: "Home", icon: icons.home() },
      { to: "/servizi", title: "Negozio", text: "Negozio", icon: icons.addressBook() },
      { to: "/contact", title: "Contact", text: "Contact", icon: icons.addressBook() }
    ];

  const renderMenu = (menu) => (
    <li key={menu.to}>
      <Link to={menu.to} title={menu.title}>
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
