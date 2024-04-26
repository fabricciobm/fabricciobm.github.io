import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Servizi from './servizi';

function ServiziRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Servizi />} />
    </Routes>
  );
}

export default ServiziRoutes;
