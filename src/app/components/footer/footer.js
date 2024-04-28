// Footer.js
import React from 'react';
import './../../styles/footer.css';
import FooterColumn1 from './footerColumn1'; 
import FooterColumn2 from './footerColumn2'; 
import FooterColumn3 from './footerColumn3';
import icons from './../../components/icons.js';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="app-footer">
      <Link to="/servizi" className="go-to-shop">
        {icons.shop()}
      </Link>
      <div className='container-fluid'>
        <FooterColumn1 />
        <FooterColumn2 /> 
        <FooterColumn3 />
      </div> 
    </footer>
  );
}

export default Footer;
