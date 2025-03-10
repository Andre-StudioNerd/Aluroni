import Footer from 'components/footer';
import { Menu } from 'components/menu';
import PaginaPadrao from 'components/paginapadrao';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import NotFound from 'pages/notfound';
import Prato from 'pages/prato';
import Sobre from 'pages/sobre';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<PaginaPadrao />}>
            <Route index element={<Inicio/>}/>
            <Route path='/cardapio' element={<Cardapio />}/>
            <Route path='sobre' element={<Sobre />}/>
            <Route path='*' element={<NotFound />}/>
            <Route path= 'prato/:id' element={<Prato />}/>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </main>
    
  );
}
