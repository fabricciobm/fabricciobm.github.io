// Home.js
import React from 'react';
import './home.css';
import serviceImage1 from './home/service1.webp';
import serviceImage2 from './home/service2.webp';
import serviceImage3 from './home/service3.webp';

const Home = () => {
  return (
    <div className='home'>


<div className='parallax'>
  <div className='parallax-content'>
    <h2>Innovazione Creativa</h2>
    <p>Benvenuti nel mio spazio digitale, dove ogni progetto si trasforma in un'opera d'arte. Sono Fabriccio Martinelli, il vostro guida nell'esplorare il potenziale creativo e tecnologico.</p>
    <button className='call-to-action'>Avanti</button>
  </div>
</div>

<div className="container-fluid">
  <h2>Soluzioni</h2>
  <p>Cosa faccio?</p>
</div>

<section className='services-section container-fluid'>
  <div className='service'>
    <div className='service-content'>
      <div className='service-bg' style={{backgroundImage: `url(${serviceImage1})`}}></div>
      <div className='service-details'>
        <h3>Serviço 1</h3>
        <p>Descrição do serviço 1.</p>
        <a href="#" className="btn">Comprar</a>
      </div>
    </div>
  </div>
  <div className='service'>
    <div className='service-content'>
      <div className='service-bg' style={{backgroundImage: `url(${serviceImage2})`}}></div>
      <div className='service-details'>
        <h3>Serviço 2</h3>
        <p>Descrição do serviço 2.</p>
        <a href="#" className="btn">Comprar</a>
      </div>
    </div>
  </div>
  <div className='service'>
    <div className='service-content'>
      <div className='service-bg' style={{backgroundImage: `url(${serviceImage3})`}}></div>
      <div className='service-details'>
        <h3>Serviço 3</h3>
        <p>Descrição do serviço 3.</p>
        <a href="#" className="btn">Comprar</a>
      </div>
    </div>
  </div>
</section>

<section className="pricing container-fluid">
  <div className="pricing-column">
    <div className="pricing-header">
      <h2>Plano Básico</h2>
    </div>
    <div className="price">$9.99/mês</div>
    <div className="plan">Plano Mensal</div>
    <ul className="features">
      <li>Recurso 1</li>
      <li>Recurso 2</li>
      <li>Recurso 3</li>
    </ul>
    <a href="#" className="btn">Comprar</a>
  </div>
  <div className="pricing-column">
    <div cclassName="pricing-header">
      <h2>Plano Avançado</h2>
    </div>
    <div className="price">$19.99/mês</div>
    <div className="plan">Plano Mensal</div>
    <ul className="features">
      <li>Recurso 1</li>
      <li>Recurso 2</li>
      <li>Recurso 3</li>
      <li>Recurso 4</li>
    </ul>
    <a href="#" className="btn">Comprar</a>
  </div>
    <div className="pricing-column">
      <div className="pricing-header">
        <h2>Plano Premium</h2>
      </div>
      <div className="price">$29.99/mês</div>
      <div className="plan">Plano Mensal</div>
      <ul className="features">
        <li>Recurso 1</li>
        <li>Recurso 2</li>
        <li>Recurso 3</li>
        <li>Recurso 4</li>
        <li>Recurso 5</li>
      </ul>
      <a href="#" className="btn">Comprar</a>
    </div>
  </section>



</div>
  );
}

export default Home;
