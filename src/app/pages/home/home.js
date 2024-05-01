import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LazyBackgroundImage from './../../assets/background.webp';
import LazyBackgroundImage2 from './../../assets/background2.webp';
import LazyBackgroundImage3 from './../../assets/service3.webp';
import LazyBackgroundImage4 from './../../assets/service4.webp';
import './../../styles/home.css';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

  return (
    <div className='home'>
      <Slider {...settings}>
        <div className='title-page-home'>
          <div className='slide-content' style={{backgroundImage: `url(${LazyBackgroundImage})`}}>
            <div className='container-fluid'>
              <h2>Benvenuti</h2>
              <p>Dove ogni progetto si trasforma in un'opera d'arte. Sono Fabriccio Martinelli, il vostro guida nell'esplorare il potenziale creativo e tecnologico.</p>
              <Link to="/servizi" className="btn btn-trans btn-big">Inizia</Link>
            </div>
          </div>
        </div>
        <div className='title-page-home'>
          <div className='slide-content' style={{backgroundImage: `url(${LazyBackgroundImage2})`}}>
            <div className='container-fluid'>
              <h2>Sviluppo di Siti Web e Sistemi</h2>
              <p>Dalle idee alla realtà, offriamo soluzioni su misura per siti web e sistemi. Tecnologie all'avanguardia e progetti ottimizzati per un'esperienza utente impeccabile.</p>
              <Link to="/servizi" className="btn btn-trans btn-big">Inizia</Link>
            </div>
          </div>
        </div>
        <div className='title-page-home'>
          <div className='slide-content' style={{backgroundImage: `url(${LazyBackgroundImage3})`}}>
            <div className='container-fluid'>
              <h2>Marketing Sociale</h2>
              <p>Il nostro team esperto ti aiuta a promuovere il tuo brand sui social media. Contenuti coinvolgenti, campagne mirate e analisi dei dati per il successo online.</p>
              <Link to="/servizi" className="btn btn-trans btn-big">Inizia</Link>
            </div>
          </div>
        </div>
        <div className='title-page-home'>
          <div className='slide-content' style={{backgroundImage: `url(${LazyBackgroundImage4})`}}>
            <div className='container-fluid'>
              <h2>Design graphico</h2>
              <p>Dal logo ai materiali promozionali, creiamo un'identità visiva distintiva per il tuo marchio. Fatti notare e lascia un'impressione indelebile con il nostro servizio di design grafico e branding.</p>
              <Link to="/servizi" className="btn btn-trans btn-big">Inizia</Link>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Home;
