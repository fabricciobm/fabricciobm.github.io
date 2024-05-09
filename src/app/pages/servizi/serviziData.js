function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
const serviceImages = importAll(require.context('./../../assets/', false, /\.(png|jpe?g|svg|webp)$/));
const Services = [
  {
    image: serviceImages['service5.webp'],
    title: 'Branding',
    description: "<p>Il mondo digitale è un ambiente affollato, e il tuo marchio ha bisogno di distinguersi. Un nome e uno slogan ben studiati sono fondamentali per farti emergere dalla massa e catturare l'attenzione dei potenziali clienti. Investire nella tua immagine aziendale con un logo professionale è il primo passo per comunicare credibilità e stile. Sono qui per aiutarti a creare un design unico e memorabile che non solo rifletta la tua identità, ma che ti permetta anche di raggiungere i tuoi obiettivi commerciali in modo efficace e duraturo.</p>",
    description_long: "<h2></h2><p>Il mio servizio di progettazione di logo e branding è progettato per guidarti attraverso il processo di creazione di un marchio distintivo nel panorama digitale. Con anni di esperienza nel settore del design grafico, posso trasformare le tue idee e la tua visione in un logo accattivante che parli al cuore del tuo marchio. Dall'analisi del mercato alla creazione di concept originali, mi impegno a fornire soluzioni creative e su misura che soddisfino le esigenze uniche della tua azienda. Investire nella tua identità di marca non è solo una spesa, ma un investimento nel successo futuro del tuo business. Lascia che il tuo marchio spicchi in un panorama competitivo, distinguendoti e brillando con un logo professionale e coinvolgente.</p>",
    destaque: [],
    url: '/logo-design',
    tags: ['design', 'logo', 'branding'],
    planos: {
      plano1: {
        nome: 'Nome del marchio + slogan',
        destaque: [
          "10 diversi opzioni", 
          "Consegna entro 2 giorni"
          ],
        tags: ['design', 'logo', 'branding'],
        price: 20
      },
      plano2: {
        nome: 'Design logo',
        destaque: [
          "3 Revisioni", 
          "1 design logo",
          "Colori del brand",  
          "Formato: PNG, PDF, CDR, AI, PS",
          "Consegna entro 2 giorni"
          ],
        tags: ['design', 'logo', 'branding'],
        price: 50
      },
      plano3: {
        nome: 'Design copertina per Facebook e altri social media',
        tags: ['design', 'social', 'marketing'],
        price: 30,
        destaque: [
        "2 Revisioni", 
        "1 Copertina finale", 
        "Formato: PNG",
        "Consegna entro 2 giorni"
        ],
        },
    },
  },
  {
    image: serviceImages['service4.webp'],
    title: 'Social Media',
    description: "<p>Promuovi il tuo marchio con campagne pubblicitarie mirate su Facebook e Instagram. Aumenta la visibilità, genera lead e incrementa le vendite con i miei servizi di marketing sui social media.</p>",
    description_long: "<p>I social media sono un canale potente per promuovere il tuo marchio e raggiungere il tuo pubblico target. La mia offerta comprende la creazione e gestione di campagne pubblicitarie mirate su Facebook e Instagram. Queste campagne sono progettate su misura per soddisfare i tuoi obiettivi di marketing, che possono includere aumentare la consapevolezza del marchio, generare lead qualificati o aumentare le vendite.</p><p>Le campagne mirate su Facebook e Instagram coinvolgono una serie di passaggi chiave, tra cui la definizione di un piano d'azione dettagliato, la ricerca del pubblico di destinazione più rilevante per il tuo business e la creazione di contenuti pubblicitari coinvolgenti e persuasivi. Una volta configurata la campagna, monitoro costantemente le sue prestazioni e ottimizzo le strategie di targeting e di annunci per massimizzare il ritorno sull'investimento. Al termine della campagna, fornisco un'auditoria dettagliata per valutare i risultati e identificare le aree di miglioramento per le future strategie di marketing sui social media.</p>",
    destaque: [''],
    url: '/social-media-design',
    planos: {
      plano1: {
        nome: 'Design copertina per Facebook e altri social media',
        tags: ['design', 'social', 'marketing'],
        price: 30,
        destaque: [
        "2 Revisioni", 
        "1 Copertina finale", 
        "Formato: PNG",
        "Consegna entro 2 giorni"
        ],
      },
        plano2: {
          nome: 'Creazione di contenuti',
          tags: ['design', 'social', 'marketing'],
          price: 30,
        destaque: [
          "Immagine persuasiva",
          "Contenuto coinvolgente",
          "Até 500 palavras",
          "Target personalizzato",
          "Ottimizzazione pubblicazione",
        ],
        },
      plano3: {
        nome: 'Campanha mirata su Facebook e Instagram',
        tags: ['design', 'social', 'marketing'],
        price: 250,
        destaque: [
          "Piano d'azione",
          "Ricerca del pubblico di destinazione",
          "Creazione di contenuti pubblicitari",
          "Configurazione della campagna",
          "Ottimizzazione della campagna",
          "Auditoria della campagna",
          "Consegna 3 giorni",
        ],
      },
    },
  },
  {
    image: serviceImages['service1.webp'],
    title: 'Siti Web Statici',
    description: "<p>Investi nel tuo successo online con fiducia. Con il nostro servizio di creazione siti web, hai a disposizione gli strumenti necessari per far crescere la tua presenza digitale e raggiungere nuovi traguardi. Contattaci oggi stesso per iniziare il tuo viaggio verso il successo online.</p>",
    description_long: "<h2>Ottimizza la tua presenza online</h2><p>Massimizza la tua presenza online e raggiungi nuovi orizzonti di successo con il nostro servizio di creazione siti web. Siamo qui per offrirti una soluzione completa, progettata per aumentare la tua visibilità sui motori di ricerca e attirare clienti sempre più numerosi.</p><h2>Funzionalità garantite</h2><ul><li><strong>Ottimizzazione SEO inclusa:</strong> Fatti trovare più facilmente su Google e altri motori di ricerca.</li><li><strong>Design responsivo:</strong> Assicurati che il tuo sito sia fruibile su ogni dispositivo.</li><li><strong>Ottimizzazione della velocità:</strong> Nessuno vuole aspettare che un sito si carichi.</li><li><strong>Dominio e hosting:</strong> Ci occuperemo noi della configurazione del dominio e dell'hosting (costi inclusi).</li><li><strong>Dettagli tecnici:</strong> Sviluppo del frontend con React.</li></ul>",
    destaque: [],
    url: '/sviluppo-siti-web-statici',
    tags: ['design', 'sviluppo'],
    planos: {
      plano1: {
        nome: 'Pacchetto Base',
        destaque: [
          'Sito funzionale', 'Fino a 5 Pagine',
          'Caricamento del contenuto',
          'Formulario di contato',
          'Social icons',
          'Configurazione dominio e hosting', 
          'Fino a 3 Revisioni', 
          'Consegna in 3 giorni'
            ],
        price: 122,
      },
      plano2: {
        nome: 'Pacchetto Silver',
        destaque: [
          'Sito funzionale',
          'Fino a 10 Pagine', 
          'Caricamento del contenuto', 
          'Formulario di contato', 
          'Social icons',
          'Catalogo prodotti/servizi',
          'Checkout con whatsapp', 
          'Configurazione dominio e hosting',
          'Fino a 4 Revisioni',
          'Consegna in 5 giorni'
          ],
        price: 315
      },
      plano3: {
        nome: 'Pacchetto Premium',
        destaque: [
          'Sito funzionale', 
          'Pagine ilimitate', 
          'Caricamento del contenuto', 
          'Formulario di contato',
          'Social icons',
          'Catalogo prodotti/servizi', 
          'Checkout con whatsapp', 
          'Configurazione dominio e hosting',
          'Configurazione Chatbot', 
          'Revisioni ilimitate', 
          'Consulenza Online (12h/anno)',
          'Consegna in 7 giorni'
            ],
        price: 1082
      },
    },
  },
  {
    image: serviceImages['service2.webp'],
    title: 'Siti Web Facile gestione',
    description: "<p>Porta la tua presenza online al livello successivo con i nostri siti web dinamici. Grazie alla nostra piattaforma avanzata, potrai creare un'esperienza coinvolgente e interattiva per i tuoi visitatori. Dalla personalizzazione dei contenuti alla gestione intuitiva, i nostri siti dinamici offrono una soluzione completa per soddisfare le esigenze del tuo business. Contattaci oggi stesso per scoprire come possiamo trasformare la tua presenza digitale.</p>",
    description_long: "<p>Con i nostri siti web dinamici, non solo avrai un bell'aspetto, ma potrai anche offrire un'esperienza utente straordinaria. Dai un'occhiata alle nostre funzionalità chiave:</p><ul><li><strong>Pagine Personalizzate:</strong> Crea contenuti dinamici e personalizzati per ogni tipo di visitatore.</li><li><strong>Interattività Avanzata:</strong> Dai ai tuoi utenti la possibilità di interagire con il tuo sito attraverso formulari, chat e altro ancora.</li><li><strong>Gestione Contenuti Intuitiva:</strong> Aggiorna e gestisci facilmente il tuo sito senza dover essere un esperto di programmazione.</li><li><strong>Ottimizzazione SEO Integrata:</strong> Assicurati che il tuo sito sia facilmente trovabile sui motori di ricerca.</li><li><strong>Analisi e Monitoraggio:</strong> Monitora le prestazioni del tuo sito e ottieni insights preziosi per migliorare continuamente la tua strategia online.</li><li><strong>Dominio e hosting:</strong> Ci occuperemo noi della configurazione del dominio e dell'hosting (costi inclusi).</li><li><strong>Dettagli tecnici:</strong> Sviluppo del frontend e CMS WP.</li></ul>",
    destaque: [],
    url: '/sviluppo-siti-web-dinamici',
    tags: ['design', 'sviluppo'],
    planos: {
      plano1: { 
        nome: 'Pacchetto Base', 
        destaque: [
          'Sito funzionante',
          'Facile gestione', 
          'Pagine ilimitate', 
          'Caricamento del contenuto', 
          'blog/news', 
          'Social share buttons',
          'Formulario di contatto',
          'Gestione utenti',
          'Configurazione dominio e hosting', 
          'Consegna in 7 giorni'
          ],
        price: 475
      },
      plano2: { 
        nome: 'Pacchetto Silver', 
        destaque: [
          'Sito funzionante', 
          'Facile gestione', 
          'Pagine ilimitate', 
          'Caricamento del contenuto',
          'blog/news',
          'Social share buttons', 
          'Formulario di contatto', 
          'Gestione utenti',
          'Configurazione dominio e hosting',
          'backup 1/7',
          'Consegna in 7 giorni'
          ],
        price: 750 
      },
      plano3: { 
        nome: 'Pacchetto Premium', 
        destaque: [
          'Sito funzionante', 
          'Facile gestione', 
          'Pagine ilimitate', 
          'Caricamento del contenuto',
          'blog/news',
          'Social share buttons',
          'login sociale', 
          'Formulario di contatto',
          'Gestione utenti',
          'Configurazione dominio e hosting', 
          'backup 7/7', 
          'Consulenza Online (12h/anno)', 
          'Consegna in 7 giorni'
            ],
        price: 1525
      },
    },
  },
  {
    image: serviceImages['service3.webp'],
    title: 'Comércio eletrônico (e-commerce)',
    description: "<p>Porta la tua presenza online al livello successivo con i nostri siti web dinamici. Grazie alla nostra piattaforma avanzata, potrai creare un'esperienza coinvolgente e interattiva per i tuoi visitatori. Dalla personalizzazione dei contenuti alla gestione intuitiva, i nostri siti dinamici offrono una soluzione completa per soddisfare le esigenze del tuo business. Contattaci oggi stesso per scoprire come possiamo trasformare la tua presenza digitale.</p>",
    description_long: "<p>Con i nostri siti web dinamici, non solo avrai un bell'aspetto, ma potrai anche offrire un'esperienza utente straordinaria. Dai un'occhiata alle nostre funzionalità chiave:</p><ul><li><strong>Pagine Personalizzate:</strong> Crea contenuti dinamici e personalizzati per ogni tipo di visitatore.</li><li><strong>Interattività Avanzata:</strong> Dai ai tuoi utenti la possibilità di interagire con il tuo sito attraverso formulari, chat e altro ancora.</li><li><strong>Gestione Contenuti Intuitiva:</strong> Aggiorna e gestisci facilmente il tuo sito senza dover essere un esperto di programmazione.</li><li><strong>Ottimizzazione SEO Integrata:</strong> Assicurati che il tuo sito sia facilmente trovabile sui motori di ricerca.</li><li><strong>Analisi e Monitoraggio:</strong> Monitora le prestazioni del tuo sito e ottieni insights preziosi per migliorare continuamente la tua strategia online.</li><li><strong>Dettagli tecnici:</strong> Sviluppo del frontend con React.</li><li><strong>Dominio e hosting:</strong> Ci occuperemo noi della configurazione del dominio e dell'hosting (costi inclusi).</li><li><strong>Dettagli tecnici:</strong> Sviluppo del frontend, CMS WP, e-commerce Woo.</li></ul>",
    destaque: [],
    url: '/sviluppo-e-commerce',
    planos: {
      plano1: { 
        nome: 'Pacchetto Base', 
        destaque: [
          'Comércio eletrônico', 
          'Facile gestione', 
          'Pagine ilimitate', 
          'Prodoti illimitati',
          'Caricamento del contenuto',
          'blog/news',
          'Social share buttons',
          'login sociale', 
          'Formulario di contatto',
          'Gestione utenti',
          'Configurazione dominio e hosting', 
          'backup 7/7', 
          'Consulenza Online (12h/anno)', 
          'Consegna in 7 giorni'
        ],
        price: 600 
      },
      plano2: { 
        nome: 'Pacchetto Silver', 
        destaque: [
          'Pagine ilimitate', 
        'Spazio 5Gb Totale', 
        'Caricamento del contenuto incluso', 
        'Icone dei social media', 
        'Formulario di contatto', 
        'Registrazione utenti', 
        'Consegna in 7 giorni'
      ],
        price: 900 
      },
      plano3: { 
        nome: 'Pacchetto Premium', 
        destaque: [
          'Pagine ilimitate', 
          'Spazio 10Gb Totale',
           'Caricamento del contenuto incluso',
            'Icone dei social media', 
             'Formulario di contatto', 
             'Registrazione utenti', 
             'Consegna in 5 giorni', 
             'VIP Support'
            ],
        price: 1200 
      },
    },
  },
  {
    image: serviceImages['service6.webp'],
    title: 'SEO (Search Engine Optimization)',
    description: 'Ottimizzazione dei siti web per i motori di ricerca per aumentare la visibilità online.',
    destaque: ['Analisi delle parole chiave', 'Ottimizzazione on-page', 'Consegna in 30 giorni'],
    url: '/seo',
    planos: {
      plano1: {
        nome: 'SEO (Search Engine Optimization)',
        destaque: [''],
        price: 50
      },
    },
  },
  {
    image: serviceImages['service7.webp'],
    title: 'Gestione Campagne PPC',
    description: 'Creazione e gestione di campagne pubblicitarie pay-per-click.',
    destaque: ['Ricerca delle parole chiave', 'Gestione delle offerte', 'Rapporti mensili'],
    url: '/gestione-campagne-ppc',
    planos: {
      plano1: {
        nome: 'Gestione Campagne PPC',
        destaque: [''],
        price: 50
      },
    },
  },
  {
    image: serviceImages['service1.webp'],
    title: 'Email Marketing',
    description: 'Creazione e invio di campagne di email marketing mirate.',
    destaque: ['Creazione di template', 'Segmentazione degli elenchi', 'Rapporti di consegna'],
    url: '/email-marketing',
    planos: {
      plano1: {
        nome: 'Email Marketing',
        destaque: [''],
        price: 50
      },
    },
  },
  {
    image: serviceImages['service2.webp'],
    title: 'Sviluppo di Applicazioni Mobili',
    description: 'Creazione di app mobili per iOS e Android su misura per le esigenze del cliente.',
    url: '/sviluppo-applicazioni-mobili',
    planos: {
      plano1: {
        nome: 'Sviluppo di Applicazioni Mobili',
        destaque: [''],
        price: 0
      },
    },
  },
  {
    image: serviceImages['service3.webp'],
    title: 'Sviluppo di Software Personalizzato',
    description: 'Progettazione e sviluppo di software su misura per le aziende.',
    destaque: ['Linguagio python',],
    url: '/sviluppo-software-personalizzato',
    planos: {
      plano1: {
        nome: 'Python 12',
        destaque: [
          'Fino a 12 ore lavorative',
        
        ],
        price: 720
      },
      plano2: {
        nome: 'Python 24',
        destaque: ['Fino a 24 ore lavorative'],
        price: 1440
      },
      plano3: {
        nome: 'Python 36',
        destaque: ['Fino a 36 ore lavorative'],
        price: 2880
      },
    },
  },
  
];

// Definindo produtos relacionados
// Services[0].relatedProducts = [Services[1]];
// Services[1].relatedProducts = [Services[0]];

export default Services;
