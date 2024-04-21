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
