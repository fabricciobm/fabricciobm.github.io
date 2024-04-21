import React from 'react';
import { Link } from 'react-router-dom';
import './design.css';
import serviceImage1 from './service1.webp';
import serviceImage2 from './service2.webp';
import serviceImage3 from './service3.webp';
import serviceImage4 from './service4.webp';

const cardData = [
  {
    image: serviceImage3,
    title: 'Logo',
    description: 'Creazione design di loghi distintivi.',
    url: '/logo'
  },
  {
    image: serviceImage1,
    title: 'Social Design',
    description: 'Creazione design per i social.',
    url: '/social-design'
  },
  {
    image: serviceImage4,
    title: 'Layout Web/APP',
    description: 'Creazione design per Web/APP.',
    url: '/layout-web-app'
  },
  {
    image: serviceImage2,
    title: 'Biglietto da visita',
    description: 'Biglietto da visita della azienda.',
    url: '/biglietto-da-visita'
  }
];

const Design = () => {
  return (
    <div className='design'>
      <section className='title-page-design'>
        <div className='container-fluid'>
          <h2>Design</h2>
          <p>Scopri come possiamo rendere eterno il tuo marchio.</p>
          <button className='btn' title="Avanti">Avanti</button>
        </div>
      </section>
      <section className='archive-card container-fluid'>
        <h3 className='title'>Cosa facciamo?</h3>
        {cardData.map((card, index) => (
          <div className='card' key={index}>
            <div className='card-content'>
              <div className='card-bg' style={{backgroundImage: `url(${card.image})`}}></div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <Link className='btn' to={card.url} title="Servizi">Avanti</Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Design;
