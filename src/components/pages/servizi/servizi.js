import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './servizi.css';
import Services from './serviziData';

const Servizi = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategorySelect = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filterServices = (service) => {
    const searchFilter = (
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const categoryFilter = (
      selectedCategory === '' || service.tags.includes(selectedCategory)
    );

    return searchFilter && categoryFilter;
  };

  return (
    <div className='servizi'>
      <section className='title-page-servizi'>
        <div className='container-fluid'>
          <h2>Servizi</h2>
          <p>Conosci tutti i nostri servizi e e scopri come possiamo aiutare...</p>
          <input
            type='text'
            placeholder='Cerca...'
            value={searchTerm}
            onChange={handleSearch}
          />
          <select
            value={selectedCategory}
            onChange={handleCategorySelect}
          >
            <option value=''>Tutti</option>
            <option value='design'>Design</option>
            <option value='sviluppo'>Sviluppo</option>
            <option value='marketing'>Marketing</option>
            <option value='custom'>Custom</option>
          </select>
        </div>
      </section>
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
    </div>
  );
};

export default Servizi;