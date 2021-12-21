import React, { useState, useRef } from 'react';
import ComponenteListaClase from './ComponenteListaClase';

class ListaClase extends React.Component {
  constructor(props) {
    const listaInicial = [];

    super(props);
    this.titulo = props.titulo;
    this.icono = props.icono;
    this.listaComponentes = useState([this.listaInicial]);
    this.setlistaComponentes = useState([this.listaInicial]);
    this.valorTextinput = useRef(' ');
    this.valorLista = useRef(' ');
  }

  addElement() {
    this.listaComponentes.concat(
      <ComponenteListaClase
        done={false}
        texto={this.valorTextinput.current.value}
        prioridad={this.valorLista.current.value}
      />
    );
    setlistaComponentes(newLista);
  }
  render() {
    return (
      <div>
        {this.titulo} - {this.icono}
        <ul>
          {listaComponentes}
          <li>
            <input
              ref={valorTextinput}
              type="text"
              placeholder="Introduce una tarea"
            />

            <select name="listaDesplegable" ref={valorLista}>
              <option value="baja">baja</option>
              <option value="media">media</option>
              <option value="alta">alta</option>
            </select>
            <br />

            <input type="button" value="click" onClick={this.addElement()} />
          </li>
        </ul>
      </div>
    );
  }
}

export default ListaClase;
