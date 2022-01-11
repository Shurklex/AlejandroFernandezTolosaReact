import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { MenuItem } from '../data/MenuItem';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

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

  render() {
    return (
      <nav>
        <h1>Mi aplicación</h1>
        <ul>{this.createMenulinks()}</ul>
      </nav>
    );
  }
}

export default Header;
