// Footer.js
import React from 'react';
import './footer.css';
import FooterColumn1 from './footerColumn1'; 
import FooterColumn2 from './footerColumn2'; 
import FooterColumn3 from './footerColumn3'; 

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className='container-fluid'>
        <div className='footer-column'>
          <FooterColumn1 /> 
        </div>
        <div className='footer-column'>
          <FooterColumn2 /> 
        </div>
        <div className='footer-column'>
          <FooterColumn3 />
        </div>
      </div> 
    </footer>
  );
}

export default Footer;
