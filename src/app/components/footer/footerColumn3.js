import React from 'react';
import './../../styles/footer.css';
import iconComponents from './../../components/icons'; 

const FooterColumn3 = () => {
  return (
    <div className="footerColumn">
      <h2>Sociale</h2>
      <ul className="social-icons">
        <li>
          <a href="https://api.whatsapp.com/send/?phone=393517733589&text=fabricciobm.github.io" target="_blank" rel="noopener noreferrer">
            {iconComponents.whatsapp()}
          </a>
        </li>
        <li>
          <a href="https://facebook.com/fabricciomb" target="_blank" rel="noopener noreferrer">
            {iconComponents.facebook()}
          </a>
        </li>
        <li>
          <a href="https://instagram.com/fabricciomb" target="_blank" rel="noopener noreferrer">
            {iconComponents.instagram()}
          </a>
        </li>
        <li>
          <a href="https://x.com/fabricciomb" target="_blank" rel="noopener noreferrer">
            {iconComponents.Xtwitter()}
          </a>
        </li>
        <li>
          <a href="https://linked.in/fabricciomb" target="_blank" rel="noopener noreferrer">
            {iconComponents.linkedin()}
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/@fabricciomb" target="_blank" rel="noopener noreferrer">
            {iconComponents.Youtube()}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterColumn3;