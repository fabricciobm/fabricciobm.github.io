import React from 'react';
import './../../styles/footer.css';
import iconComponents from './../../components/icons'; 

const FooterColumn2 = () => {
  return (
    <div className="footerColumn">
      <ul className="footer-contact">
        <li>
          <a href="tel:+393517733589" target="_blank" rel="noopener noreferrer">
            {iconComponents.phone()} +393517733589
          </a>
        </li>
        <li>
          <a href="mailto:fabricciobm@outlook.com" target="_blank" rel="noopener noreferrer">
            {iconComponents.mail()} fabricciobm@outlook.com
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            {iconComponents.route()}  Bergamo - BG , Italy
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterColumn2;