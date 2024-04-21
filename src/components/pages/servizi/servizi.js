// Servizi.js
import React from 'react';
import { Link } from 'react-router-dom';
import './servizi.css';
import serviceImage1 from './service1.webp';
import serviceImage2 from './service2.webp';
import serviceImage3 from './service3.webp';
import serviceImage4 from './service4.webp';

const cardData = [
  {
    image: serviceImage3,
    title: 'Designer',
    description: "Creazione di loghi distintivi, design per i social media e layout per app, con l'obiettivo di garantire un'immagine aziendale coerente e di alta qualità.",
    url: '/servizi/design' // Adicione o URL desejado para cada card
  },
  {
    image: serviceImage1,
    title: 'Sviluppo',
    description: 'Sviluppo di siti web intuitivi, e-commerce, app e soluzioni robotiche, fornendo tecnologie avanzate per soddisfare le esigenze specifiche del cliente.',
    url: '/servizi/sviluppo'
  },
  {
    image: serviceImage4,
    title: 'Marketing',
    description: 'Implementazione di strategie efficaci sui social media, ottimizzazione SEO, produzione video e organizzazione di campagne promozionali mirate.',
    url: '/servizi/marketing'
  },
  {
    image: serviceImage2,
    title: 'Sumissura',
    description: 'Offre consulenza e soluzioni personalizzate per il business, garantendo un servizio professionale e orientato al cliente, basato su una profonda comprensione delle esigenze aziendali.',
    url: '/servizi/sumissura'
  }
];

const Servizi = () => {
  return (
    <div className='servizi'>
      <section className='title-page-servizi'>
        <div className='container-fluid'>
          <h2>Servizi</h2>
          <p>Conosci tutti i nostri servizi e come possiamo aiutare...</p>
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
              <Link className='btn' to={card.url} title={card.title}>Servizi</Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Servizi;
