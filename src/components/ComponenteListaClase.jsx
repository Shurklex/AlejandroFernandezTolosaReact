import React from 'react';

import './componente-lista.css';

class ComponenteListaClase extends React.Component {

  constructor(props){
    super(props);
    this.done = props.done;
    this.prioridad = prop.prioridad;
    this.texto = props.texto;
    setElementClass();
  }

  
setElementClass() {
    this.prioridad;
    if (this.done) {
      claseLista += ' el-done';
    } else {
      claseLista += ' el-undone';
    }
  }

  setTaskStatus() {
    this.done = !this.done;
    setElementClass();
  }

  render(){
    return (
      <li className={claseLista}>
        <input type="checkbox" onChange={setTaskStatus} />
        {this.texto}
      </li>
    );
  }
  
}

ComponenteLista.defaultProps = {
  prioridad: 'baja',
};