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
          <h2>Innovazione Creativa</h2>
          <p>Benvenuti nel mio spazio digitale, dove ogni progetto si trasforma in un'opera d'arte. Sono Fabriccio Martinelli, il vostro guida nell'esplorare il potenziale creativo e tecnologico.</p>
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
              <Link className='btn' to={card.url} title="Servizi">Servizi</Link>
            </div>
          </div>
        ))}
      </section>

      <section className="pricing container-fluid">
        <h3 className='title'>Quanto costa?</h3>
        {pricingData.map((plan, index) => (
          <div className="pricing-column" key={index}>
            <h3>{plan.title}</h3>
            <p className="price">{plan.price}</p>
            <p className="plan">{plan.plan}</p>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button href="#" className="btn" title="Comprare...">Comprare</button>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;
