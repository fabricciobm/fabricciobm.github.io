// Home.js
import React from 'react';
import './servizi.css';
import serviceImage1 from './service1.webp';
import serviceImage2 from './service2.webp';
import serviceImage3 from './service3.webp';
import backgroundIntro from './service1.webp';
const Servizi = () => {
  return (
<div className='servizi'>
  <div className='parallax' style={{backgroundImage: `url(${backgroundIntro})`}}>
    <div className='parallax-content-servizi'>
      <h2>Servizi</h2>
      <p>Con la mia creatività, trasformo idee in realtà digitali. Dal design di logo all'implementazione di e-commerce e automazioni, offro soluzioni complete per far crescere il tuo business online. Sia che tu abbia bisogno di un sito web accattivante o di ottimizzare i tuoi processi aziendali, sono qui per aiutarti a raggiungere i tuoi obiettivi digitali.</p>
    </div>
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
</div>
  );
}

export default Servizi;
