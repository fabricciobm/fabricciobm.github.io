import React from 'react';
import './header.css';
import Logo from './logo/logo';
import Menu from './menu/menu';
import MenuToggle from './menutoggle/menutoggle';

const Header = () => {
  return (
    <header className="app-header">
      <div className='container-fluid'>
        <Logo />
        <Menu />
        <MenuToggle />
      </div>
    </header>
  );
}

export default Header;
