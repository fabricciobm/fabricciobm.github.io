import React from 'react';
import './../../styles/footer.css';
import iconComponents from './../../components/icons'; 

const FooterColumn3 = () => {
  return (
    <div className="footerColumn">
      <h2>Sociale</h2>
      <ul className="social-icons">
        <li>
          <a href="link-do-whatsapp" target="_blank" rel="noopener noreferrer">
            {iconComponents.whatsapp()}
          </a>
        </li>
        <li>
          <a href="link-do-facebook" target="_blank" rel="noopener noreferrer">
            {iconComponents.facebook()}
          </a>
        </li>
        <li>
          <a href="link-do-messenger" target="_blank" rel="noopener noreferrer">
            {iconComponents.messenger()}
          </a>
        </li>
        <li>
          <a href="link-do-instagram" target="_blank" rel="noopener noreferrer">
            {iconComponents.instagram()}
          </a>
        </li>
        <li>
          <a href="link-do-telegram" target="_blank" rel="noopener noreferrer">
            {iconComponents.telegram()}
          </a>
        </li>
        <li>
          <a href="link-do-twitter" target="_blank" rel="noopener noreferrer">
            {iconComponents.twitter()}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterColumn3;