import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './servizi.css';
import serviceImage1 from './service1.webp';
import serviceImage2 from './service2.webp';
import serviceImage3 from './service3.webp';
import serviceImage4 from './service4.webp';

const Services = [
  {
    image: serviceImage3,
    title: 'Logo',
    description: 'Creazione design di loghi distintivi.',
    url: '/logo',
    tags: ['design']
  },
  {
    image: serviceImage1,
    title: 'Social Design',
    description: 'Creazione design per i social.',
    url: '/social-design',
    tags: ['design']
  },
  {
    image: serviceImage4,
    title: 'Layout Web/APP',
    description: 'Creazione design per Web/APP.',
    url: '/layout-web-app',
    tags: ['design']
  },
  {
    image: serviceImage2,
    title: 'Biglietto da visita',
    description: 'Biglietto da visita della azienda.',
    url: '/biglietto-da-visita',
    tags: ['design']
  },
  {
    image: serviceImage3,
    title: 'Sito static',
    description: 'Sviluppo web di una landingpage.',
    url: '/sito-statico',
    tags: ['sviluppo'] 
  },
  {
    image: serviceImage1,
    title: 'Sito Dinamico',
    description: 'Sviluppo web di un sito web dinamico.',
    url: '/sito-dinamico',
    tags: ['sviluppo'] 
  },
  {
    image: serviceImage4,
    title: 'Sito completo',
    description: 'Sviluppo web di una sito web completo.',
    url: '/sito-completo',
    tags: ['sviluppo'] 
  },
  {
    image: serviceImage2,
    title: 'E-commerce',
    description: 'Sviluppo web di un e-commerce completo.',
    url: '/e-commerce',
    tags: ['sviluppo'] 
  },
  {
    image: serviceImage2,
    title: 'Robot',
    description: 'Sviluppo web di un e-commerce completo.',
    url: '/robot',
    tags: ['sviluppo'] 
  },
  {
    image: serviceImage3,
    title: 'Social',
    description: 'Social',
    url: '/sito-statico',
    tags: ['Marketing'] 
  },
  {
    image: serviceImage3,
    title: 'Social',
    description: 'Social',
    url: '/sito-statico',
    tags: ['Marketing'] 
  },
  {
    image: serviceImage3,
    title: 'Social',
    description: 'Social',
    url: '/sito-statico',
    tags: ['Marketing'] 
  },
  {
    image: serviceImage3,
    title: 'Social',
    description: 'Social',
    url: '/sito-statico',
    tags: ['Marketing'] 
  },
  {
    image: serviceImage3,
    title: 'Custom',
    description: 'Social',
    url: '/sito-statico',
    tags: ['Custom'] 
  },
  {
    image: serviceImage3,
    title: 'Custom',
    description: 'Social',
    url: '/sito-statico',
    tags: ['Custom'] 
  },
  {
    image: serviceImage3,
    title: 'Custom',
    description: 'Social',
    url: '/sito-statico',
    tags: ['Custom'] 
  },
  {
    image: serviceImage3,
    title: 'Custom',
    description: 'Social',
    url: '/sito-statico',
    tags: ['Custom'] 
  },
];

const Servizi = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filterServicesByCategory = (services, category) => {
    return services.filter(service => service.tags.includes(category));
  };

  const filterServices = (service) => {
    const searchFilter = (
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return searchFilter;
  };

  return (
    <div className='servizi'>
      <section className='title-page-servizi'>
        <div className='container-fluid'>
          <h2>Servizi</h2>
          <p>Conosci tutti i nostri servizi e come possiamo aiutare...</p>
          <input
          type='text'
          placeholder='Cerca...'
          value={searchTerm}
          onChange={handleSearch}
          />
          <div>
          <button className={selectedCategory === '' ? 'btn active' : 'btn'} onClick={() => handleCategorySelect('')}>Tutte</button>
          <button className={selectedCategory === 'design' ? 'btn active' : 'btn'} onClick={() => handleCategorySelect('design')}>Design</button>
          <button className={selectedCategory === 'sviluppo' ? 'btn active' : 'btn'} onClick={() => handleCategorySelect('sviluppo')}>Sviluppo</button>
          <button className={selectedCategory === 'marketing' ? 'btn active' : 'btn'} onClick={() => handleCategorySelect('marketing')}>Marketing</button>
          <button className={selectedCategory === 'custom' ? 'btn active' : 'btn'} onClick={() => handleCategorySelect('custom')}>Custom</button>
          </div>
        </div>
      </section>
      {selectedCategory === '' && (
        // Mostra todos os serviços quando nenhuma categoria é selecionada
        <section className='archive-card container-fluid'>
          {Services.filter(filterServices).map((card, index) => (
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
      )}

      {selectedCategory !== '' && (
        // Mostra serviços filtrados pela categoria selecionada
        <section className='archive-card container-fluid'>
          {filterServicesByCategory(Services, selectedCategory).filter(filterServices).map((card, index) => (
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
      )}
    </div>
  );
};

export default Servizi;
