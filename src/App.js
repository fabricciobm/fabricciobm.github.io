import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './../src/app/components/header/header';
import Footer from './../src/app/components/footer/footer';
import Home from './../src/app/pages/home/home';
import Servizi from './app/pages/servizi/servizi';
import Contact from './app/pages/contact/contact';
import NotFound from './notfound';

function App() {
  // Estado do carrinho
  const [cart, setCart] = useState([]);

  // Função para adicionar um produto ao carrinho
  const addToCart = (service) => {
    setCart([...cart, service]);
  };

  return (
    <div className="App">
      <Header />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/servizi/*"
            element={<Servizi addToCart={addToCart} />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
