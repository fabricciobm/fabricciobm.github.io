// servicesData.js

import serviceImage1 from './../../assets/service1.webp';
import serviceImage2 from './../../assets/service2.webp';
import serviceImage3 from './../../assets/service3.webp';
import serviceImage4 from './../../assets/service4.webp';

const Services = [
    // Servizi di design
    {
      image: serviceImage1,
      title: 'Logo Design',
      description: 'Creazione di loghi distintivi per aziende e marchi. Creazione di loghi distintivi per aziende e marchi. Creazione di loghi distintivi per aziende e marchi.',
      url: '/logo-design',
      tags: ['design'],
      price: 50
    },
    {
      image: serviceImage2,
      title: 'Web Design',
      description: 'Creazione di design per siti web moderni e accattivanti.',
      url: '/web-design',
      tags: ['design'],
      price: 50
    },
    {
      image: serviceImage1,
      title: 'Social Media Design',
      description: 'Creazione di grafiche e contenuti visivi per i social media.',
      url: '/social-media-design',
      tags: ['design'],
      price: 50
    },
    {
      image: serviceImage2,
      title: 'Pacchetto Branding',
      description: 'Sviluppo completo dell\'identità visiva aziendale.',
      url: '/pacchetto-branding',
      tags: ['design'],
      price: 50
    },
    {
      image: serviceImage3,
      title: 'Sviluppo Siti Web Statici',
      description: 'Creazione di siti web statici per una presenza online essenziale.',
      url: '/sviluppo-siti-web-statici',
      tags: ['sviluppo'],
      price: 50
    },
    {
      image: serviceImage2,
      title: 'Sviluppo Siti Web Dinamici',
      description: 'Realizzazione di siti web interattivi con funzionalità avanzate.',
      url: '/sviluppo-siti-web-dinamici',
      tags: ['sviluppo'],
      price: 50
    },
    {
      image: serviceImage1,
      title: 'E-commerce',
      description: 'Creazione di negozi online completi con funzionalità di pagamento.',
      url: '/e-commerce',
      tags: ['sviluppo'],
      price: 50
    },
    {
      image: serviceImage3,
      title: 'Applicazioni Web Progressive',
      description: 'Sviluppo di app web che offrono un\'esperienza simile a un\'app nativa.',
      url: '/applicazioni-web-progressive',
      tags: ['sviluppo'],
      price: 50
    },
    {
      image: serviceImage2,
      title: 'SEO (Search Engine Optimization)',
      description: 'Ottimizzazione dei siti web per i motori di ricerca per aumentare la visibilità online.',
      url: '/seo',
      tags: ['marketing'],
      price: 50
    },
    {
      image: serviceImage1,
      title: 'Gestione Campagne PPC',
      description: 'Creazione e gestione di campagne pubblicitarie pay-per-click.',
      url: '/gestione-campagne-ppc',
      tags: ['marketing'],
      price: 50
    },
    {
      image: serviceImage1,
      title: 'Marketing sui Social Media',
      description: 'Pianificazione e gestione di strategie di marketing sui social media.',
      url: '/marketing-sui-social-media',
      tags: ['marketing'],
      price: 50
    },
    {
      image: serviceImage2,
      title: 'Email Marketing',
      description: 'Creazione e invio di campagne di email marketing mirate.',
      url: '/email-marketing',
      tags: ['marketing'],
      price: 50
    },
    {
      image: serviceImage3,
      title: 'Sviluppo di Applicazioni Mobili',
      description: 'Creazione di app mobili per iOS e Android su misura per le esigenze del cliente.',
      url: '/sviluppo-applicazioni-mobili',
      tags: ['sviluppo-software'],
      price: 50
    },
    {
      image: serviceImage1,
      title: 'Sviluppo di Software Personalizzato',
      description: 'Progettazione e sviluppo di software su misura per le aziende.',
      url: '/sviluppo-software-personalizzato',
      tags: ['sviluppo-software'],
      price: 50
    },
    {
      image: serviceImage2,
      title: 'Gestione del Ciclo di Vita del Software',
      description: 'Supporto completo per la gestione del ciclo di vita del software, dalla progettazione alla manutenzione.',
      url: '/gestione-ciclo-vita-software',
      tags: ['sviluppo-software'],
      price: 50
    },
    {
      image: serviceImage2,
      title: 'Formazione Personalizzata',
      description: 'Piani di formazione su misura per le esigenze specifiche del cliente.',
      url: '/formazione-personalizzata',
      tags: ['consulenza-formazione'],
      price: 50
    },
    {
      image: serviceImage2,
      title: 'Manutenzione Preventiva',
      description: 'Monitoraggio e manutenzione periodica per prevenire guasti e problemi.',
      url: '/manutenzione-preventiva',
      tags: ['supporto-manutenzione'],
      price: 50
    },
    {
      image: serviceImage1,
      title: 'Backup e Ripristino dei Dati',
      description: 'Implementazione di sistemi di backup robusti per proteggere i dati aziendali.',
      url: '/backup-ripristino-dati',
      tags: ['supporto-manutenzione'],
      price: 50
    },
    {
      image: serviceImage3,
      title: 'Localizzazione Software',
      description: 'Adattamento di software e applicazioni per mercati internazionali.',
      url: '/localizzazione-software',
      tags: ['traduzione-localizzazione'],
      price: 50
    },
    {
      image: serviceImage2,
      title: 'Produzione Video',
      description: 'Creazione di video aziendali, promozionali e tutorial.',
      url: '/produzione-video',
      tags: ['produzione-multimediale'],
      price: 50
    },
    {
      image: serviceImage3,
      title: 'Produzione Audio',
      description: 'Registrazione e produzione di messaggi audio per scopi pubblicitari e informativi.',
      url: '/produzione-audio',
      tags: ['produzione-multimediale'],
      price: 50
    },
    {
      image: serviceImage4,
      title: 'Animazione Grafica',
      description: 'Creazione di animazioni grafiche per video, presentazioni e pubblicità.',
      url: '/animazione-grafica',
      tags: ['produzione-multimediale'],
      price: 50
    },
    {
      image: serviceImage1,
      title: 'Fotografia Aziendale',
      description: 'Servizi fotografici per eventi aziendali, prodotti e ritratti.',
      url: '/fotografia-aziendale',
      tags: ['fotografia'],
      price: 50
    },
    {
      image: serviceImage2,
      title: 'Fotografia di Prodotto',
      description: 'Fotografie professionali per cataloghi e pubblicità di prodotti.',
      url: '/fotografia-prodotto',
      tags: ['fotografia'],
      price: 50
    },
    {
      image: serviceImage3,
      title: 'Fotografia Immobiliare',
      description: 'Servizi fotografici per immobili residenziali e commerciali.',
      url: '/fotografia-immobiliare',
      tags: ['fotografia'],
      price: 50
    },
  ];

export default Services;