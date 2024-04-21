import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Servizi from './servizi';
import Design from './design/design';
import Logo from './design/logo/logo';
import Sviluppo from './../servizi/sviluppo/sviluppo';

function ServiziRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Servizi />} />
      <Route path="/design" element={<Design />} />
      <Route path="/design/logo" element={<Logo />} />
      <Route path="/sviluppo" element={<Sviluppo />} />
    </Routes>
  );
}

export default ServiziRoutes;
