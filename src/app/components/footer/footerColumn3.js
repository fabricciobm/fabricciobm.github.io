import React from 'react';
import './../../styles/footer.css';
import iconComponents from './../../components/icons'; 

const FooterColumn3 = () => {
  return (
    <div className="footerColumn">
      <h2>Sociale</h2>
      <div className="social-icons">
        <button className="social-button" onClick={() => window.open("https://facebook.com/fabricciomb")} type="button">
          {iconComponents.facebook()}
        </button>
        <button className="social-button" onClick={() => window.open("https://instagram.com/fabricciomb")} type="button">
          {iconComponents.instagram()}
        </button>
        <button className="social-button" onClick={() => window.open("https://x.com/fabricciomb")} type="button">
          {iconComponents.Xtwitter()}
        </button>
        <button className="social-button" onClick={() => window.open("https://linked.in/fabricciomb")} type="button">
          {iconComponents.linkedin()}
        </button>
        <button className="social-button" onClick={() => window.open("https://youtube.com/fabricciomb")} type="button">
          {iconComponents.Youtube()}
        </button>
      </div>
    </div>
  );
}

export default FooterColumn3;
