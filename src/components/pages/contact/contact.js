// Home.js
import React from 'react';
import './contact.css';

const Contact = () => {
  return (
<div className='contact'>
  <section className='title-page-contact'>
    <div className='container-fluid'>
      <h2>Contact</h2>
      <p>Chiamami subito!</p>
      <button className='btn' title="Avanti">Avanti</button>
    </div>
  </section>
  <section className='content'>
    <div className='container-fluid'>
      <h2>Ola mundo</h2>
      <p>Meu nome è fabriccio.</p>
    </div>
  </section>
</div>
  );
}

export default Contact;
