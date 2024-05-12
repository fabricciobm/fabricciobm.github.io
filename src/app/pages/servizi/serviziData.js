function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
const serviceImages = importAll(require.context('./../../assets/', false, /\.(png|jpe?g|svg|webp)$/));
const Services = [
  {
    image: serviceImages['branding.webp'],
    title: 'Branding',
    description: "<p>Il mondo digitale è un ambiente affollato, e il tuo marchio ha bisogno di distinguersi. Un nome e uno slogan ben studiati sono fondamentali per farti emergere dalla massa e catturare l'attenzione dei potenziali clienti.</p>",
    description_long: "<h2></h2><p>Il mio servizio di progettazione di logo e branding è progettato per guidarti attraverso il processo di creazione di un marchio distintivo nel panorama digitale. Con anni di esperienza nel settore del design grafico, posso trasformare le tue idee e la tua visione in un logo accattivante che parli al cuore del tuo marchio. Dall'analisi del mercato alla creazione di concept originali, mi impegno a fornire soluzioni creative e su misura che soddisfino le esigenze uniche della tua azienda. Investire nella tua identità di marca non è solo una spesa, ma un investimento nel successo futuro del tuo business. Lascia che il tuo marchio spicchi in un panorama competitivo, distinguendoti e brillando con un logo professionale e coinvolgente.</p>",
    destaque: [],
    url: '/logo-design',
    tags: ['design', 'logo', 'branding'],
    planos: {
      plano1: {
        nome: 'Nome del marchio + slogan',
        destaque: [
          "10 diversi opzioni di nome",
          "10 diversi opzioni di slogan",
          "Comprendi il Concetto",
          "Ricerca delle Parole Chiave",
          "Brainstorming",
          "Ricerca di Disponibilità dominio web",
          "Consegna in 1-2 giorni",
          ],
        tags: ['design', 'logo', 'branding', 'naming'],
        price: 20
      },
      plano2: {
        nome: 'Design logo',
        tags: ['design', 'logo', 'branding', 'loghi', 'marcchio',],
        destaque: [
          "1 logo",
          "Comprendi il Concetto",
          "Colori del brand",
          "Formato: PNG, PDF, CDR, AI, PS",
          "2 Revisioni", 
          "Consegna in 2-3 giorni"
          ],
        price: 60
      },
      plano3: {
        nome: 'Copertina per Facebook e altri social media',
        tags: ['design', 'social', 'marketing'],
        price: 30,
        destaque: [
        "1 Copertina ",
        "Dimensioni e Orientamento",
        "Immagine persuasiva",
        "Contenuto coinvolgente",
        "Formato: PNG",
        "2 Revisioni", 
        "Consegna in 2-3 giorni",
        ],
        },
    },
  },
  {
    image: serviceImages['service11.webp'],
    title: 'Biglitti da visita',
    description: "<p>Il mondo digitale è un ambiente affollato, e il tuo marchio ha bisogno di distinguersi. Un nome e uno slogan ben studiati sono fondamentali per farti emergere dalla massa e catturare l'attenzione dei potenziali clienti.</p>",
    description_long: "<h2></h2><p>Il mio servizio di progettazione di logo e branding è progettato per guidarti attraverso il processo di creazione di un marchio distintivo nel panorama digitale. Con anni di esperienza nel settore del design grafico, posso trasformare le tue idee e la tua visione in un logo accattivante che parli al cuore del tuo marchio. Dall'analisi del mercato alla creazione di concept originali, mi impegno a fornire soluzioni creative e su misura che soddisfino le esigenze uniche della tua azienda. Investire nella tua identità di marca non è solo una spesa, ma un investimento nel successo futuro del tuo business. Lascia che il tuo marchio spicchi in un panorama competitivo, distinguendoti e brillando con un logo professionale e coinvolgente.</p><ul><li><strong>Facciamo tutto noi Design incluso</strong></li><li><strong>Cartoncino patinato lucido da 350 grammi</strong></li><li><strong>Colori fronte e retro</strong><li><strong>Consegna gratis in 5 giorni</strong></li></ul>",
    destaque: [],
    url: '/logo-design',
    tags: ['design', 'logo', 'branding', 'marketing', 'custom',],
    planos: {
      plano1: {
        nome: '100 Biglietti da visita',
        destaque: [],
        price: 35
      },
      plano2: {
        nome: '200 Biglietti da visita',
        destaque: [],
        price: 40
      },
      plano3: {
        nome: '500 Biglietti da visita',
        destaque: [],
        price: 55
      },
      plano4: {
        nome: '1000 Biglietti da visita',
        destaque: [],
        price: 70
      },
    },
  },
  {
    "image": serviceImages['service16.webp'],
    "title": "Adesivi Personalizzati",
    "description": "<p>Eccellere nel mondo digitale con adesivi personalizzati che rappresentano l'essenza unica del tuo marchio. Con design esclusivi e di alta qualità, puoi attirare l'attenzione dei tuoi clienti ovunque siano.</p>",
    "description_long": "<h2></h2><p>Il nostro servizio di creazione di adesivi personalizzati è progettato per aiutare il tuo marchio a distinguersi. Con anni di esperienza nel design grafico, trasformiamo la tua visione in adesivi vibranti e memorabili. Dal concetto iniziale alla produzione finale, garantiamo una qualità eccezionale per ogni adesivo. Investi nella visibilità del tuo marchio con i nostri adesivi personalizzati e lascia il tuo marchio presente ovunque.</p><ul><li><strong>Design Esclusivo</strong></li><li><strong>Materiale di Alta Qualità</strong></li><li><strong>Versatile e Resistente</strong></li><li><strong>Consegna Veloce</strong></li></ul>",
    "destaque": [],
    "url": "/adesivi-personalizzati",
    "tags": ["design", "adesivo", "branding", "marketing", "personalizzato"],
    "planos": {
      "plano1": {
        "nome": "Plano 1",
        "subplanos": {
          "subplano1": {
            "nome": "Subplano 1.1",
            "destaque": ["5cm x 5cm"],
            "price": 35
          },
          "subplano2": {
            "nome": "Subplano 1.2",
            "destaque": ["10cm x 10cm"],
            "price": 50
          }
        }
      },
      "plano2": {
        "nome": "Plano 2",
        "subplanos": {
          "subplano1": {
            "nome": "Subplano 2.1",
            "destaque": ["7cm x 7cm"],
            "price": 40
          },
          "subplano2": {
            "nome": "Subplano 2.2",
            "destaque": ["15cm x 15cm"],
            "price": 60
          },
        },
      },
    },    
  },  
  {
    image: serviceImages['service12.webp'],
    title: 'Social Media',
    description: "<p>Promuovi il tuo marchio con campagne pubblicitarie mirate su Facebook e Instagram. Aumenta la visibilità, genera lead e incrementa le vendite con i miei servizi di marketing sui social media.</p>",
    description_long: "<p>I social media sono un canale potente per promuovere il tuo marchio e raggiungere il tuo pubblico target. La mia offerta comprende la creazione e gestione di campagne pubblicitarie mirate su Facebook e Instagram. Queste campagne sono progettate su misura per soddisfare i tuoi obiettivi di marketing, che possono includere aumentare la consapevolezza del marchio, generare lead qualificati o aumentare le vendite.</p><p>Le campagne mirate su Facebook e Instagram coinvolgono una serie di passaggi chiave, tra cui la definizione di un piano d'azione dettagliato, la ricerca del pubblico di destinazione più rilevante per il tuo business e la creazione di contenuti pubblicitari coinvolgenti e persuasivi. Una volta configurata la campagna, monitoro costantemente le sue prestazioni e ottimizzo le strategie di targeting e di annunci per massimizzare il ritorno sull'investimento. Al termine della campagna, fornisco un'auditoria dettagliata per valutare i risultati e identificare le aree di miglioramento per le future strategie di marketing sui social media.</p>",
    destaque: [''],
    url: '/social-media-design',
    tags: ['design', 'social', 'marketing'],
    planos: {
      plano1: {
        nome: 'Creazione di contenuti per social media',
        destaque: [
          "Immagine persuasiva",
          "Contenuto coinvolgente",
          "Fino a 500 palavras",
          "Target personalizzato",
          "Ottimizzazione pubblicazione",
          "1 Revisione", 
          "Consegna in 1-2 giorni",
        ],
        price: 25,
      },
      plano2: {
        nome: 'Copertina per Facebook e altri social media',
        price: 30,
        destaque: [
        "1 Copertina",
        "1 Immagine di profilo",
        "Dimensioni e Orientamento",
        "Immagine persuasiva",
        "Contenuto coinvolgente",
        "Formato: PNG",
        "2 Revisioni", 
        "Consegna in 2-3 giorni",
        ],
        },
      plano3: {
        nome: 'Campanha mirata su Facebook e Instagram',
        destaque: [
          "Piano d'azione",
          "Ricerca del pubblico di destinazione",
          "Creazione di contenuti pubblicitari",
          "Configurazione della campagna",
          "Ottimizzazione della campagna",
          "Auditoria della campagna",
          "Consegna in 7 giorni",
        ],
        price: 250,
      },
    },
  },
  {
    image: serviceImages['service14.webp'],
    title: 'Siti Web Statici',
    description: "<p>Investi nel tuo successo online con fiducia. Con il nostro servizio di creazione siti web, hai a disposizione gli strumenti necessari per far crescere la tua presenza digitale e raggiungere nuovi traguardi. Contattaci oggi stesso per iniziare il tuo viaggio verso il successo online.</p>",
    description_long: "<h2>Ottimizza la tua presenza online</h2><p>Massimizza la tua presenza online e raggiungi nuovi orizzonti di successo con il nostro servizio di creazione siti web. Siamo qui per offrirti una soluzione completa, progettata per aumentare la tua visibilità sui motori di ricerca e attirare clienti sempre più numerosi.</p><h2>Funzionalità garantite</h2><ul><li><strong>Ottimizzazione SEO inclusa:</strong> Fatti trovare più facilmente su Google e altri motori di ricerca.</li>      <li><strong>Design responsivo:</strong> Assicurati che il tuo sito sia fruibile su ogni dispositivo.</li>      <li><strong>Ottimizzazione della velocità:</strong> Nessuno vuole aspettare che un sito si carichi.</li>      <li><strong>Sito funzionale:</strong> Ci pensiamo noi in tutto, creiamo il contenuto per te. Non è un sito di facile gestione.</li><li><strong>Dettagli tecnici:</strong> Sviluppo del frontend con React.</li><li><strong>Dominio e Hosting incluso:</strong>Dominio incluso (.it o .com), Fino a 100.000 visite mensili, con 1GB di spazio e SSL gratuito.</li></ul>",
    destaque: [],
    url: '/sviluppo-siti-web-statici',
    tags: ['sviluppo', 'siti-web'],
    planos: {
      plano1: {
        nome: 'Pacchetto annuale Base',
        destaque: [
          'Fino 5 Pagine',
          '1 indirizzi email (2GB)',
          'Social buttons',
          'Fino a 3-4 Revisioni',
          'Consegna in 7 giorni'
            ],
        price: 225,
      },
      plano2: {
        nome: 'Pacchetto annuale Silver',
        destaque: [
          'Fino 10 Pagine',
          '2 indirizzi email (2GB)',
          'Formulario di contatto',
          'Catalogo prodotti / servizi',
          'Checkout con whatsapp', 
          'Social buttons',
          'Fino 4-5 Revisioni',
          'Consegna in 7 giorni',
          ],
        price: 415,
      },
      plano3: {
        nome: 'Pacchetto annuale Premium',
        destaque: [
          'Pagine illimitate',
          '3 indirizzi email (2GB)',
          'Formulario di contatto',
          'Catalogo prodotti / servizi',
          'Checkout con whatsapp',
          'Configurazione Chatbot (Fino a 200 chat al mese)', 
          'Social buttons',
          'Revisioni illimitate', 
          "Consulenza online (12 ore all'anno)",
          'Consegna in 7 giorni'
            ],
        price: 1082,
      },
    },
  },
  {
    image: serviceImages['service2.webp'],
    title: 'Siti Web Dinamici',
    description: "<p>Porta la tua presenza online al livello successivo con i nostri siti web dinamici. Grazie alla nostra piattaforma avanzata, potrai creare un'esperienza coinvolgente e interattiva per i tuoi visitatori. Dalla personalizzazione dei contenuti alla gestione intuitiva, i nostri siti dinamici offrono una soluzione completa per soddisfare le esigenze del tuo business. Contattaci oggi stesso per scoprire come possiamo trasformare la tua presenza digitale.</p>",
    description_long: "<ul><li><strong>Sito funzionale:</strong> Ci pensiamo noi in tutto, creiamo il contenuto per te.</li><li><strong>Gestione Contenuti Intuitiva:</strong> Aggiorna e gestisci facilmente il tuo sito senza dover essere un esperto di programmazione.</li><li><strong>Interattività:</strong> Dai ai tuoi utenti la possibilità di interagire con il tuo sito attraverso formulari, chat e altro ancora.</li><li><strong>Design responsivo:</strong> Assicurati che il tuo sito sia fruibile su ogni dispositivo.</li>      <li><strong>Ottimizzazione della velocità:</strong> Nessuno vuole aspettare che un sito si carichi.</li><li><strong>Ottimizzazione SEO Integrata:</strong> Assicurati che il tuo sito sia facilmente trovabile sui motori di ricerca.</li><li><strong>Analisi e Monitoraggio:</strong> Monitora le prestazioni del tuo sito e ottieni insights preziosi per migliorare continuamente la tua strategia online.</li><li><strong>Dettagli tecnici:</strong> Sviluppo del frontend e CMS WP, Backend Wordpress.</li><li><strong>Dominio e Hosting incluso:</strong> Dominio incluso (.it o .com), fino a 200.000 visite mensili, con spazio totale di 20GB, SSL gratuito, CDN gratuita, backup su richiesta e protezione DDoS aumentata.</li></ul>",
    destaque: [],
    url: '/sviluppo-siti-web-dinamici',
    tags: ['sviluppo', 'siti-web'],
    planos: {
      plano2: { 
        nome: 'Pacchetto annuale Silver',
        destaque: [
          'Facile gestione', 
          'Pagine illimitate', 
          'Blog/news', 
          'Social share buttons',
          'Formulario di contatto',
          'Gestione utenti',
          '10 indirizzi email (1GB)',
          'Fino a 5 revisioni', 
          'Consegna in 7 giorni'
          ],
        price: 750 
      },
      plano3: { 
        nome: 'Pacchetto annuale Premium',
        destaque: [
          'Facile gestione', 
          'Pagine illimitate', 
          'Chatbot (Fino a 200 chat al mese)', 
          'Blog/news', 
          'Login con Google o Facebook',
          'Social share buttons',
          'Formulario di contatto',
          'Gestione utenti',
          '20 indirizzi email (1GB)',
          'Revisioni illimitate', 
          "Consulenza online (12 ore all'anno)",
          'Consegna in 7 giorni'
            ],
        price: 1525
      },
    },
  },
  {
    image: serviceImages['service15.webp'],
    title: 'Comércio eletrônico (e-commerce)',
    description: "<p>Porta la tua attività online ad un nuovo livello con i nostri sistemi di e-commerce all'avanguardia. Puoi creare un'esperienza di shopping coinvolgente e interattiva per i tuoi clienti. Dalla personalizzazione dei prodotti alla gestione semplificata degli ordini, i nostri sistemi di e-commerce offrono una soluzione completa per soddisfare le esigenze del tuo business.</p>",
    description_long: "<ul><li><strong>Sito funzionale:</strong> Ci pensiamo noi in tutto, creiamo il contenuto per te.</li><li><strong>Gestione Contenuti Intuitiva:</strong> Aggiorna e gestisci facilmente il tuo sito senza dover essere un esperto di programmazione.</li><li><strong>Interattività:</strong> Dai ai tuoi utenti la possibilità di interagire con il tuo sito attraverso formulari, chat e altro ancora.</li><li><strong>Design responsivo:</strong> Assicurati che il tuo sito sia fruibile su ogni dispositivo.</li>      <li><strong>Ottimizzazione della velocità:</strong> Nessuno vuole aspettare che un sito si carichi.</li><li><strong>Ottimizzazione SEO Integrata:</strong> Assicurati che il tuo sito sia facilmente trovabile sui motori di ricerca.</li><li><strong>Analisi e Monitoraggio:</strong> Monitora le prestazioni del tuo sito e ottieni insights preziosi per migliorare continuamente la tua strategia online.</li><li><strong>Dettagli tecnici:</strong> Sviluppo del frontend e CMS WP, Backend Wordpress e Woocommerce.</li><li><strong>Dominio e Hosting incluso:</strong> Dominio incluso (.it o .com), fino a 200.000 visite mensili, con spazio totale di 20GB, SSL gratuito, CDN gratuita, backup su richiesta e protezione DDoS aumentata.</li></ul>",
    destaque: [],
    url: '/sviluppo-e-commerce',
    tags: ['sviluppo', 'siti-web', 'ecommerce'],
    planos: {
      plano1: { 
        nome: 'Pacchetto annuale Base',
        destaque: [
          'Pagine illimitate', 
          'Prodoti illimitati',
          'Caricamento del contenuto',
          'Blog/news',
          'Social share buttons',
          'Formulario di contatto',
          'Gestione utenti',
          '10 indirizzi email (1GB)',
          'Fino a 4-5 revisioni', 
          'Consegna in 7 giorni'
        ],
        price: 1150 
      },
      plano2: { 
        nome: 'Pacchetto annuale Silver',
        destaque: [
          'Pagine illimitate', 
          'Prodoti illimitati',
          'Gestione inventario',
          'Punti di vendita ilimitati',
          'Blog/news',
          'Social share buttons',
          'Formulario di contatto',
          'Gestione utenti',
          '20 indirizzi email (1GB)',
          'Fino a 4-5 revisioni', 
          'Consegna in 7 giorni'
        ],
        price: 1800 
      },
      plano3: { 
        nome: 'Pacchetto annuale Premium',
        destaque: [
          'Pagine illimitate', 
          'Prodoti illimitati',
          'Gestione inventario',
          'Punti di vendita ilimitati',
          'Chatbot (Fino a 200 chat al mese)', 
          'Blog/news',
          'Social share buttons',
          'Login con Google o Facebook',
          'Formulario di contatto',
          'Gestione utenti',
          '50 indirizzi email (1GB)',
          'Revisioni illimitate', 
          "Consulenza online (12 ore all'anno)",
          'Consegna in 7 giorni'
        ],
        price: 2320 
      },
    },
  },

  {
    image: serviceImages['service8.webp'],
    title: 'App Play Store e  App Store (WebView)',
    description: "Trasformiamo il tuo sito web in un'applicazione mobile completa e personalizzata.",
    description_long: "Grazie alla potenza della tecnologia WebView, possiamo incapsulare il tuo sito web all'interno di un'applicazione Android o iOS nativa, offrendo così un'esperienza utente fluida e reattiva. Che tu abbia un blog, un negozio online o un sito di servizi, possiamo convertirlo in un'applicazione professionale pronta per il download su Google Play Store e App Store. Approfitta delle funzionalità avanzate ai tuoi utenti un accesso rapido e conveniente al tuo contenuto, garantendo al contempo la visibilità e la presenza sulla piattaforma mobile.",
    destaque: [],
    url: '/sviluppo-applicazioni-mobili',
    tags: ['sviluppo', 'siti-web', 'ecommerce'],
    planos: {
      plano1: {
        nome: 'Pacchetto annuale App per Play Store',
        destaque: [
          'Sviluppo WebView .apk',
          'Publicazione Play Store',
          'Consegna in 14 giorni',
        ],
        price: 299
      },
      plano2: {
        nome: 'Pacchetto annuale App per App Store',
        destaque: [
          'Sviluppo WebView .ipa',
          'Publicazione App Store',
          'Consegna in 30 giorni',
        ],
        price: 1899
      },
    },
  },
  {
    image: serviceImages['service7.webp'],
    title: 'Software Personalizzato',
    description: "Ottimizza l'efficienza con l'automazione e l'analisi dei dati. Applicazioni desktop personalizzate per le tue esigenze aziendali.",
    description_long: "<ul><li><strong>Automazione di processi ripetitivi:</strong> Automatizza compiti ripetitivi per aumentare l'efficienza e ridurre gli errori umani.</li><li><strong>Web scraping:</strong> Estrai dati da siti web per analisi o altri scopi utili.</li><li><strong>Analisi dei dati:</strong> Analizza grandi quantità di dati per estrarre informazioni significative e prendere decisioni informate.</li><li><strong>Machine learning e intelligenza artificiale:</strong> Sviluppa algoritmi e modelli che imparano dai dati per fare previsioni o prendere decisioni.</li><li><strong>Sviluppo di siti web:</strong> Crea siti web interattivi e dinamici per aziende o progetti personali.</li><li><strong>Creazione di applicazioni desktop:</strong> Sviluppa applicazioni che girano su computer desktop, offrendo funzionalità avanzate e un'esperienza utente completa.</li></ul>",
    destaque: ['Linguagio python',],
    destaque: [],
    url: '/sviluppo-software-personalizzato',
    tags: ['sviluppo', 'siti-web','python'],
    planos: {
      plano1: {
        nome: 'Python I',
        destaque: [
          'Fino a 18 ore lavorative',
          'Consegna in 7 giorni',
        ],
        price: 720
      },
      plano2: {
        nome: 'Python II',
        destaque: [
          'Fino a 36 ore lavorative',
          'Consegna in 14 giorni',
        ],
        price: 1440
      },
      plano3: {
        nome: 'Python III',
        destaque: [
          'Fino a 72 ore lavorative',
          'Consegna in 30 giorni',
        ],
        price: 2880
      },
    },
  },
  
];

// Definindo produtos relacionados
// Services[0].relatedProducts = [Services[1]];
// Services[1].relatedProducts = [Services[0]];

export default Services;
