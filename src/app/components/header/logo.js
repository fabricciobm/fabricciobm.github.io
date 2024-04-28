import React from 'react';
import './../../styles/logo.css';
const Logo = () => {
  return (
    <a href="/" title='Logo'>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        preserveAspectRatio="xMidYMid meet"
        className="logo"
      >
        <g transform="translate(0,500) scale(0.1,-0.1)" fill="#FFF" stroke="none">
          <path d="M0 4265 l0 -735 1756 0 1757 0 631 624 c347 343 683 673 726 734 l115 111 -2502 1 -2503 0 0 -735z"/>
          <path d="M0 2725 l0 -675 1016 0 1016 0 580 573 c320 314 628 618 687 674 l106 102 -1702 1 -1703 0 0 -675z"/>
          <path d="M0 963 l0 -968 960 960 c528 528 960 963 960 967 0 5 -432 8 -960 8 l-960 0 0 -967z"/>
        </g>
      </svg>
    </a>
  );
}

export default Logo;
