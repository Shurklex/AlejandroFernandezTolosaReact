import React from 'react';

import './componente-lista.css';

export default function ComponenteLista(props) {
  let claseLista = props.prioridad;
  if (props.done) {
    claseLista += ' el-checked';
  } else {
    claseLista += ' el-unchecked';
  }

  function cambiaEstado() {
    props.done = !props.done;
  }

  return (
    <li className={claseLista}>
      <input type="checkbox" checked={props.done} onChange={cambiaEstado} />
      {props.texto}
    </li>
  );
}
