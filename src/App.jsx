import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home } from './components/Home';
import { PaginaListas } from './components/PaginaListas';
import { Perfil } from './components/Perfil';
import Header from './components/Header';

export function App() {
  return (
    <Router>
      <Header />
      <Route {this.createMenulinks()}/>
      <Route path="/listas" component={PaginaListas} />
      <Route path="/perfil" component={Perfil} />
    </Router>
  );


createMenulinks() {
  const listComponents = [];
  for (let i = 0; i < MenuItem.length; i++) {
    listComponents.push(
      <li>
        <Link to={MenuItem[i].path}>{MenuItem[i].title}</Link>
      </li>
    );
  }

  return listComponents;
}
}