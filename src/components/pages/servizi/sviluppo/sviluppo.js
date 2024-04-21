// sviluppo.js
import React from 'react';
import { Link } from 'react-router-dom'; // Importe o Link do React Router
import './sviluppo.css';
import serviceImage1 from './service1.webp';
import serviceImage2 from './service2.webp';
import serviceImage3 from './service3.webp';
import serviceImage4 from './service4.webp';

const cardData = [
  {
    image: serviceImage3,
    title: 'Sito static',
    description: 'Sviluppo web di una landingpage.',
    url: '/sito-statico' // Adicione o URL desejado para cada card
  },
  {
    image: serviceImage1,
    title: 'Sito Dinamico',
    description: 'Sviluppo web di un sito web dinamico.',
    url: '/sito-dinamico'
  },
  {
    image: serviceImage4,
    title: 'Sito completo',
    description: 'Sviluppo web di una sito web completo.',
    url: '/sito-completo'
  },
  {
    image: serviceImage2,
    title: 'E-commerce',
    description: 'Sviluppo web di un e-commerce completo.',
    url: '/e-commerce'
  },
  {
    image: serviceImage2,
    title: 'Robot',
    description: 'Sviluppo web di un e-commerce completo.',
    url: '/robot'
  }
];

const Sviluppo = () => {
  return (
    <div className='sviluppo'>
      <section className='title-page-sviluppo'>
        <div className='container-fluid'>
          <h2>Sviluppo</h2>
          <p>Benvenuti nel mio spazio digitale, dove ogni progetto si trasforma in un'opera d'arte. Sono Fabriccio Martinelli, il vostro guida nell'esplorare il potenziale creativo e tecnologico.</p>
          <button className='btn' title="Avanti">Avanti</button>
        </div>
      </section>

      <section className='archive-card container-fluid'>
        <h3 className='title'>Hello World,</h3>
        {cardData.map((card, index) => (
          <div className='card' key={index}>
            <div className='card-content'>
              <div className='card-bg' style={{backgroundImage: `url(${card.image})`}}></div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <Link className='btn' to={card.url} title={card.title}>Avanti</Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Sviluppo;
