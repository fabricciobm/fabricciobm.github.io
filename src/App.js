// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/pages/home/home';
import Servizi from './components/pages/servizi/servizi';
import Design from './components/pages/servizi/design/design';
import Sviluppo from './components/pages/servizi/sviluppo/sviluppo';
import Contact from './components/pages/contact/contact';
import './App.css';

const express = require('express');
const path = require('path');
const app = express();

// Configurar cache para recursos estáticos
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 86400000 })); // Cache por 1 dia (86400 segundos)

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/servizi" element={<Servizi />} />
          <Route path="/servizi/design" element={<Design />} />
          <Route path="/servizi/sviluppo" element={<Sviluppo />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
