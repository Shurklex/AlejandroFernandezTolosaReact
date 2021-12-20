import React, { useState, useRef } from 'react';
import ComponenteListaClase from './ComponenteListaClase';
export function Lista(props) {
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

  const [listaComponentes, setlistaComponentes] = useState([listaInicial]);
  const valorTextinput = useRef(' ');
  const valorLista = useRef(' ');

  const funcion = function addElement() {
    const newLista = listaComponentes.concat(
      <ComponenteListaClase
        done={false}
        texto={valorTextinput.current.value}
        prioridad={valorLista.current.value}
      />
    );
    setlistaComponentes(newLista);
  };

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

          <input type="button" value="click" onClick={funcion} />
        </li>
      </ul>
    </div>
  );
}
