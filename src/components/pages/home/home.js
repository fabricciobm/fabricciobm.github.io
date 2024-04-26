// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import serviceImage1 from './service1.webp';
import serviceImage2 from './service2.webp';
import serviceImage3 from './service3.webp';
import serviceImage4 from './service4.webp';

const cardData = [
  {
    image: serviceImage3,
    title: 'Design',
    description: "Creazione di loghi distintivi, design per i social media e layout per app, con l'obiettivo di garantire un'immagine aziendale coerente e di alta qualità.",
    url: '/servizi/design'
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

const pricingData = [
  {
    title: 'Plano Básico',
    price: '$9.99/mês',
    plan: 'Plano Mensal',
    features: ['Recurso 1', 'Recurso 2', 'Recurso 3']
  },
  {
    title: 'Plano Padrão',
    price: '$19.99/mês',
    plan: 'Plano Mensal',
    features: ['Recurso 1', 'Recurso 2', 'Recurso 3', 'Recurso 4']
  },
  {
    title: 'Plano Premium',
    price: '$29.99/mês',
    plan: 'Plano Mensal',
    features: ['Recurso 1', 'Recurso 2', 'Recurso 3', 'Recurso 4', 'Recurso 5']
  }
];

const Home = () => {
  return (
    <div className='home'>
      <section className='title-page-home'>
        <div className='container-fluid'>
          <h2>Benvenuti</h2>
          <p>Nel mio spazio digitale, dove ogni progetto si trasforma in un'opera d'arte. Sono Fabriccio Martinelli, il vostro guida nell'esplorare il potenziale creativo e tecnologico.</p>
          <Link to="./servizi" className="btn btn-white">Inizia</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
