import serviceImage1 from './../../assets/service1.webp';
import serviceImage2 from './../../assets/service2.webp';
import serviceImage3 from './../../assets/service3.webp';
import serviceImage4 from './../../assets/service4.webp';

const Services = [
    // Servizi di design
    {
      image: serviceImage1,
      title: 'Design di loghi',
      description: "Una logo professionale è essenziale per qualsiasi attività commerciale poiché rappresenta l'identità visiva del marchio. Comunicando professionalità e affidabilità, aiuta a distinguersi dalla concorrenza e a attrarre clienti. Investire in una logo ben progettata è cruciale per creare una forte identità di marca e garantire il successo del proprio business. Se hai bisogno di un logo professionale, sono qui per aiutarti!",
      destaque: ['10 Design diversi', '3 revisioni', 'Consegna in 7 giorni'],
      url: '/logo-design',
      tags: ['design', 'logo'],
      price: 50
    },
    {
      image: serviceImage2,
      title: 'Web Design',
      description: 'Creazione di design per siti web moderni e accattivanti.',
      destaque: ['Html Css Javascript', 'Fino a 3 revisioni', 'Consegna in 14 giorni'],
      url: '/web-design',
      planos: {
        plano1: { 
          nome: 'Pacchetto base', 
          destaque: ['Pagina singola', '3 revisioni', 'Consegna in 7 giorni'], 
          price: 100 
        },
        plano2: { 
          nome: 'Pacchetto silver', 
          destaque: ['5 Pagine', '5 revisioni', 'Consegna in 7 giorni'], 
          price: 150 
        },
        plano3: { 
          nome: 'Pacchetto premium', 
          destaque: ['Pagina ilimitate', '10 revisioni', 'Consegna in 14 giorni', 'VIP Support'], 
          price: 450 
        },
      },
      tags: ['design', 'web designer'],
      price: 0
    },
    {
      image: serviceImage1,
      title: 'Social Media Design',
      description: 'Creazione di grafiche e contenuti visivi per i social media.',
      destaque: ['Fino a 10 post', 'Fino a 3 revisioni', 'Consegna in 5 giorni'],
      url: '/social-media-design',
      tags: ['design'],
      price: 50
    },
    {
      image: serviceImage2,
      title: 'Pacchetto Branding',
      description: 'Sviluppo completo dell\'identità visiva aziendale.',
      destaque: ['Fino a 3 proposte', 'Fino a 3 revisioni', 'Consegna in 10 giorni'],
      url: '/pacchetto-branding',
      tags: ['design'],
      price: 50
    },
    {
      image: serviceImage3,
      title: 'Sviluppo Siti Web Statici',
      description: 'Creazione di siti web statici per una presenza online essenziale.',
      destaque: ['Fino a 5 pagine', 'Fino a 3 revisioni', 'Consegna in 14 giorni'],
      url: '/sviluppo-siti-web-statici',
      tags: ['sviluppo'],
      price: 50
    },
    {
      image: serviceImage2,
      title: 'Sviluppo Siti Web Dinamici',
      description: 'Realizzazione di siti web interattivi con funzionalità avanzate.',
      destaque: ['Fino a 10 pagine', 'Fino a 5 revisioni', 'Consegna in 21 giorni'],
      url: '/sviluppo-siti-web-dinamici',
      tags: ['sviluppo'],
      price: 50
    },
    {
      image: serviceImage1,
      title: 'E-commerce',
      description: 'Creazione di negozi online completi con funzionalità di pagamento.',
      destaque: ['Fino a 20 prodotti', 'Fino a 5 revisioni', 'Consegna in 30 giorni'],
      url: '/e-commerce',
      tags: ['sviluppo'],
      price: 50
    },
    {
      image: serviceImage3,
      title: 'Applicazioni Web Progressive',
      description: 'Sviluppo di app web che offrono un\'esperienza simile a un\'app nativa.',
      destaque: ['Fino a 3 pagine', 'Fino a 3 revisioni', 'Consegna in 10 giorni'],
      url: '/applicazioni-web-progressive',
      tags: ['sviluppo'],
      price: 50
    },
    {
      image: serviceImage2,
      title: 'SEO (Search Engine Optimization)',
      description: 'Ottimizzazione dei siti web per i motori di ricerca per aumentare la visibilità online.',
      destaque: ['Analisi delle parole chiave', 'Ottimizzazione on-page', 'Consegna in 30 giorni'],
      url: '/seo',
      tags: ['marketing'],
      price: 50
    },
    {
      image: serviceImage1,
      title: 'Gestione Campagne PPC',
      description: 'Creazione e gestione di campagne pubblicitarie pay-per-click.',
      destaque: ['Ricerca delle parole chiave', 'Gestione delle offerte', 'Rapporti mensili'],
      url: '/gestione-campagne-ppc',
      tags: ['marketing'],
      price: 50
    },
    {
      image: serviceImage1,
      title: 'Marketing sui Social Media',
      description: 'Pianificazione e gestione di strategie di marketing sui social media.',
      destaque: ['Analisi dei concorrenti', 'Creazione di contenuti', 'Monitoraggio delle prestazioni'],
      url: '/marketing-sui-social-media',
      tags: ['marketing'],
      price: 50
    },
    {
      image: serviceImage2,
      title: 'Email Marketing',
      description: 'Creazione e invio di campagne di email marketing mirate.',
      destaque: ['Creazione di template', 'Segmentazione degli elenchi', 'Rapporti di consegna'],
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
      destaque: ['Analisi dei requisiti', 'Progettazione del software', 'Test e implementazione'],
      url: '/sviluppo-software-personalizzato',
      tags: ['sviluppo-software'],
      price: 50
    },
  ];

export default Services;
