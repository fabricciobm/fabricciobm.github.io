import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../src/app/components/header/header';
import Footer from '../src/app/components/footer/footer';
import AppRouter from '../src/AppRouter';
function App() {
  return (
  <AppRouter />
  );
}

export default App;
