import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from '../data/MenuItem';

import './header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <h1>Mi aplicación</h1>
        {/*
        <ul>{this.createMenuLinks()}</ul>
        <ul>
          Forma 2: map (función) 
          {MenuItem.map(function (item) {
            return (
              <li>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        */}
        <ul>
          {/* Forma 3: map (función flecha) */}
          {MenuItem.map((item) => {
            return (
              <li key={item.id}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }

  /**
   * Forma menú nº 1: bucle for
   */
  createMenuLinks() {
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

export default Header;
