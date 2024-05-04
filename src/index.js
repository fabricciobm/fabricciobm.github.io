import React from 'react';
import { createRoot } from 'react-dom/client'; // Importando createRoot de 'react-dom/client'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router } from 'react-router-dom';

const root = document.getElementById('root');

createRoot(root).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();