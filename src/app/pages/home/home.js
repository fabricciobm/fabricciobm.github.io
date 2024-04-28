import React from 'react';
import { Link } from 'react-router-dom';
import './../../styles/home.css';
import imagem from './../../assets/background.webp';

const Home = () => {
  return (
    <div className='home'>
      <section className='title-page-home' style={{backgroundImage: `url(${imagem})`}}>
        <div className='container-fluid'>
          <h2>Benvenuti</h2>
          <p>Dove ogni progetto si trasforma in un'opera d'arte. Sono Fabriccio Martinelli, il vostro guida nell'esplorare il potenziale creativo e tecnologico.</p>
          <Link to="/servizi" className="btn btn-trans btn-big">Inizia</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
