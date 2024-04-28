import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import LazyBackgroundImage from './../../assets/background.webp';
import './../../styles/home.css';

const Home = () => {
  return (
    <div className='home'>
        <LazyLoad height={200} offset={100}>
        <section className='title-page-home lazy-background' style={{backgroundImage: `url(${LazyBackgroundImage})`}}>
          <div className='container-fluid'>
          <h2>Benvenuti</h2>
          <p>Dove ogni progetto si trasforma in un'opera d'arte. Sono Fabriccio Martinelli, il vostro guida nell'esplorare il potenziale creativo e tecnologico.</p>
          <Link to="/servizi" className="btn btn-trans btn-big">Inizia</Link>
        </div>
        </section>
        </LazyLoad>
    </div>
  );
}

export default Home;
