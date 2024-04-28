import React from 'react';
import { Link } from 'react-router-dom';
import './../../styles/home.css';
import imagem from './../../assets/eux.webp';

const Home = () => {
  return (
    <div className='home'>
      <section className='title-page-home'>
        <div className='container-fluid'>
          <h2>Benvenuti</h2>
          <p>Dove ogni progetto si trasforma in un'opera d'arte. Sono Fabriccio Martinelli, il vostro guida nell'esplorare il potenziale creativo e tecnologico.</p>
          <Link to="/servizi" className="btn btn-trans">Inizia</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
