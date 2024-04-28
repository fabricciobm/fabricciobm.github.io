import React from 'react';
import './../../styles/footer.css';
import iconComponents from './../../components/icons'; 

const FooterColumn2 = () => {
  return (
    <div className="footerColumn column2">
      <button className="footer-button" onClick={() => window.open('https://api.whatsapp.com/send/?phone=393517733589&text=fabricciobm.github.io')} type="button">
        {iconComponents.whatsapp()} <span>+393517733589</span>
      </button>

      <button className="footer-button" onClick={() => window.open('mailto:fabricciobm@outlook.com')} type="button">
        {iconComponents.mail()} <span>fabricciobm@outlook.com</span>
      </button>

      <button className="footer-button" onClick={() => window.open('https://www.google.com/maps/place/B%C3%A9rgamo,+It%C3%A1lia/')} type="button">
        {iconComponents.route()} <span>Bergamo - BG, Italia</span>
      </button>
    </div>
  );
}

export default FooterColumn2;
