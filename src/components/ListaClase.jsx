import React, { useState, useRef } from 'react';
import ComponenteListaClase from './ComponenteListaClase';

class Lista extends React.Component {
  constructor(props) {
    super(props);
    this.listaComponentes = useState([listaInicial]);
    this.setlistaComponentes = useState([listaInicial]);
    this.valorTextinput = useRef(' ');
    this.valorLista = useRef(' ');
  }

  addElement() {
    const newLista = listaComponentes.concat(
      <ComponenteListaClase
        done={false}
        texto={valorTextinput.current.value}
        prioridad={valorLista.current.value}
      />
    );
    setlistaComponentes(newLista);
  }
  render() {
    return (
      <div>
        {props.titulo} - {props.icono}
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
