import React from 'react';
import ComponenteListaClase from './ComponenteListaClase';

class ListaClase extends React.Component {
  constructor(props) {
    super(props);
    this.titulo = props.titulo;
    this.icono = props.icono;

    this.listaInicial = [];

    if (props.elementos !== undefined) {
      for (let i = 0; i < props.elementos.length; i++) {
        this.listaInicial.push(
          <ComponenteListaClase
            done={props.elementos[i].done}
            texto={props.elementos[i].texto}
            prioridad={props.elementos[i].prioridad}
          />
        );
      }
    }
    this.state = {
      listaActual: this.listaInicial,
    };

    this.inputText;
    this.selectPrioridad;
  }

  addComponente() {
    this.listaInicial = this.listaInicial.concat(
      <ComponenteListaClase
        texto={this.inputText.value}
        prioridad={this.selectPrioridad.value}
      />
    );
    this.inputText.value = '';
    this.changeState();
  }

  changeState() {
    this.setState({ listaActual: this.listaInicial });
  }

  render() {
    return (
      <div>
        {this.titulo} - {this.icono}
        <ul>
          {this.state.listaActual}
          <li>
            <input
              ref={(c) => (this.inputText = c)}
              type="text"
              placeholder="Introduce una tarea"
            />
            <select
              name="listaDesplegable"
              ref={(c) => (this.selectPrioridad = c)}
            >
              <option value="baja">baja</option>
              <option value="media">media</option>
              <option value="alta">alta</option>
            </select>
            <br />

            <input
              type="button"
              value="click"
              onClick={() => this.addComponente()}
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default ListaClase;
