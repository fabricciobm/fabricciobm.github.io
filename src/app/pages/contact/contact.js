import React from 'react';
import './../../styles/contact.css';
import iconComponents from './../../components/icons'; 
import LazyBackgroundImage from './../../assets/service1.webp';
const Contact = () => {
  return (
    <div className='contact'>
      <section className='title-page-contact' style={{backgroundImage: `url(${LazyBackgroundImage})`}}>
        <div className='container-fluid'>
          <h2>Contatto</h2>
          <p>Chiama adesso per ulteriori informazioni!</p>
        </div>
      </section>
      <section className='contact-page container-fluid'>
        <div className='contact-info'>
          <h2>Chiamami</h2>
          <button className="btn btn-white" onClick={() => window.open('https://api.whatsapp.com/send/?phone=393517733589&text=fabricciobm.github.io')} type="button">
            {iconComponents.whatsapp()} <span>+393517733589</span>
          </button>
          <h2>Scrivi un'email</h2>
          <button className="btn btn-white" onClick={() => window.open('mailto:fabricciobm@outlook.com')} type="button">
            {iconComponents.mail()} <span>fabricciobm@outlook.com</span>
          </button>
          <h2>Località</h2>
          <button className="btn btn-white" onClick={() => window.open('https://www.google.com/maps/place/B%C3%A9rgamo,+It%C3%A1lia/')} type="button">
            {iconComponents.route()} <span>Bergamo - BG, Italia</span>
          </button>
        </div>
        <div className='contact-form'>
        </div>
      </section>
    </div>
  );
}

export default Contact;
