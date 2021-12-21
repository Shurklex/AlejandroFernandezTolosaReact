import React, { useState, useRef } from 'react';
import ComponenteListaClase from './ComponenteListaClase';

class ListaClase extends React.Component {
  constructor(props) {
    super(props);
    this.titulo = props.titulo;
    this.icono = props.icono;
    this.valorTextinput;
    this.valorLista;

    const listaInicial = [];
    if (props.elementos !== undefined) {
      for (let i = 0; i < props.elementos.length; i++) {
        listaInicial.push(
          <ComponenteListaClase
            done={props.elementos[i].done}
            texto={props.elementos[i].texto}
            prioridad={props.elementos[i].prioridad}
          />
        );
      }
    }
  }

  addComponente() {
    
  }

  render() {
    return (
      <div>
        {this.titulo} - {this.icono}
        <ul>
          <li>
            <input
              ref={}
              type="text"
              placeholder="Introduce una tarea"
            />
            <select name="listaDesplegable">
              <option value="baja">baja</option>
              <option value="media">media</option>
              <option value="alta">alta</option>
            </select>
            <br />

            <input type="button" value="click" onClick={this.addComponente} />
          </li>
        </ul>
      </div>
    );
  }
}

export default ListaClase;
