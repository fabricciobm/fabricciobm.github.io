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

let lastScrollTop = 0;

window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
  if (currentScroll > lastScrollTop) {
    // Rolagem para baixo
    document.querySelector('.app-header').style.top = "-100px"; // Esconde o navbar
  } else {
    // Rolagem para cima
    document.querySelector('.app-header').style.top = "0"; // Mostra o navbar
  }

  // Verifica se a rolagem é superior a 250px e ajusta a opacidade do background
  if (currentScroll > 250) {
    document.querySelector('.app-header').style.background = "hwb(0 0% 100% / .8)";
  } else {
    document.querySelector('.app-header').style.background = "var(--header-navbar-background)";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);

export default Header;
