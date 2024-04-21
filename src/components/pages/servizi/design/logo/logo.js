// logo.js
import React from 'react';
import { Link } from 'react-router-dom';
import './logo.css';

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

const logo = () => {
  return (
    <div className='logo'>
      <section className='title-page-logo'>
        <div className='container-fluid'>
          <h2>Logo</h2>
          <p>Ottieni ora il tuo logo distintivo e fatti notare nella folla!</p>
          <button className='btn' title="Avanti">Avanti</button>
        </div>
      </section>
      <section className="pricing container-fluid">
        <h3 className='title'>Logo</h3>
        <h1>Importanza di un Logo di Qualità</h1>
        <p>Un logo non è solo un'immagine; è il simbolo che rappresenta la tua azienda, la tua identità di fronte al mondo. È cruciale avere un logo ben progettato per il successo della tua attività. Ecco perché dovresti investire in un logo di qualità:</p>
        <ol>
          <li><strong>Identità Unica:</strong> Un buon logo ti distingue dalla concorrenza, creando un'identità visiva unica che ti rende riconoscibile.</li>
          <li><strong>Professionalità:</strong> Un logo professionale trasmette fiducia, mostrando che la tua azienda è seria e affidabile.</li>
          <li><strong>Memorabilità:</strong> Un logo ben progettato è facile da ricordare, aiutandoti a rimanere nella mente dei tuoi clienti.</li>
          <li><strong>Consistenza:</strong> Il tuo logo dovrebbe essere coerente su tutti i tuoi materiali di marketing, online e offline, per creare un'immagine coesa e professionale.</li>
          <li><strong>Versatilità:</strong> Un buon logo funziona su tutti i supporti, dai biglietti da visita ai siti web e alle campagne pubblicitarie.</li>
          <li><strong>Valore a Lungo Termine:</strong> Un logo ben progettato è un investimento duraturo, garantendo coerenza e riconoscibilità nel tempo.</li>
          <li><strong>Differenziazione:</strong> In un mercato affollato, un logo distintivo ti aiuta a spiccare nella folla e attirare l'attenzione dei clienti.</li>
          <li><strong>Comunicazione Efficace:</strong> Il tuo logo comunica i valori, lo stile e la personalità della tua azienda in modo implicito, senza parole.</li>
        </ol>
        <p>Investire in un logo professionale è fondamentale per il successo a lungo termine della tua attività. Non sottovalutare l'importanza di un buon design; può fare la differenza nel distinguerti sul mercato e conquistare i cuori dei tuoi clienti.</p>
        <div className='space'></div>
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

export default logo;
