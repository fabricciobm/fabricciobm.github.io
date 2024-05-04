import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../src/app/components/header/header';
import Footer from '../src/app/components/footer/footer';
import Home from '../src/app/pages/home/home';
import Servizi from '../src/app/pages/servizi/servizi';
import Contact from '../src/app/pages/contact/contact';
import NotFound from './notfound';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servizi/*" element={<Servizi />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
