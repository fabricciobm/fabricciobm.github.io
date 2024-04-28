import React from 'react';
import Header from '../src/app/components/header/header';
import Footer from '../src/app/components/footer/footer';
function NotFound() {
  return (
    <>
    <Header />

      <h1>404 - Página não encontrada</h1>
      <p>A página que você está procurando não existe.</p>
    <Footer />
    </>
  );
}

export default NotFound;
