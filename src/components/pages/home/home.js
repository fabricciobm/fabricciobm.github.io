// Home.js
import React from 'react';
import './home.css';
import serviceImage1 from './service1.webp';
import serviceImage2 from './service2.webp';
import serviceImage3 from './service3.webp';
import backgroundIntro from './background.webp';

const Home = () => {
  return (
<div className='home'>
  <div className='parallax' style={{backgroundImage: `url(${backgroundIntro})`}}>
    <div className='parallax-content-home'>
      <h2>Innovazione Creativa</h2>
      <p>Benvenuti nel mio spazio digitale, dove ogni progetto si trasforma in un'opera d'arte. Sono Fabriccio Martinelli, il vostro guida nell'esplorare il potenziale creativo e tecnologico.</p>
      <button className='btn' title='Avanti'>Avanti</button>
    </div>
  </div>
  <div className="cosa-faccio container-fluid">
    <h2>Cosa faccio?</h2>
    <p>Con la mia creatività, trasformo idee in realtà digitali. Dal design di logo all'implementazione di e-commerce e automazioni, offro soluzioni complete per far crescere il tuo business online. Sia che tu abbia bisogno di un sito web accattivante o di ottimizzare i tuoi processi aziendali, sono qui per aiutarti a raggiungere i tuoi obiettivi digitali.</p>
  </div>
  <section className='services-section container-fluid'>
    <div className='service'>
      <div className='service-content'>
        <div className='service-bg' style={{backgroundImage: `url(${serviceImage1})`}}></div>
        <div className='service-details'>
          <h3>Serviço 1</h3>
          <p>Descrição do serviço 1.</p>
          <a href="#" className="btn" title="Avanti">Avanti</a>
        </div>
      </div>
    </div>
    <div className='service'>
      <div className='service-content'>
        <div className='service-bg' style={{backgroundImage: `url(${serviceImage2})`}}></div>
        <div className='service-details'>
          <h3>Serviço 2</h3>
          <p>Descrição do serviço 2.</p>
          <a href="#" className="btn" title="Avanti">Avanti</a>
        </div>
      </div>
    </div>
    <div className='service'>
      <div className='service-content'>
        <div className='service-bg' style={{backgroundImage: `url(${serviceImage3})`}}></div>
        <div className='service-details'>
          <h3>Serviço 3</h3>
          <p>Descrição do serviço 3.</p>
          <a href="#" className="btn" title="Avanti">Avanti</a>
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
      <a href="#" className="btn" title="Comprare...">Comprare</a>
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
      <a href="#" className="btn" title="Comprare...">Comprare</a>
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
      <a href="#" className="btn" title="Comprare...">Comprare</a>
    </div>
  </section>
</div>
  );
}

export default Home;
