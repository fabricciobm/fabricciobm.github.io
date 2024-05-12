import React, { useRef, useEffect } from 'react';
import './../../styles/header.css';
import Logo from './logo';
import Menu from './menu';
import MenuToggle from './menutoggle';

const Header = () => {
  const headerRef = useRef(null);

  let lastScrollTop = 0;

  useEffect(() => {
    const handleScroll = () => {
      let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
      if (currentScroll > lastScrollTop) {
        headerRef.current.style.top = "-100px"; 
      } else {
        headerRef.current.style.top = "0"; 
      }
  
      if (currentScroll > 250) {
        headerRef.current.style.background = "hwb(0 0% 100% / .8)";
      } else {
        headerRef.current.style.background = "var(--header-navbar-background)";
      }
  
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="app-header" ref={headerRef}>
      <div className='container-fluid'>
        <Logo />
        <Menu />
        <MenuToggle />
      </div>
    </header>
  );
}

export default Header;
