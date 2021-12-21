import React from 'react';

import { Lista } from './components/Lista';
import ListaClase from './components/ListaClase';
export function App() {
  const elementos1 = [
    { done: false, texto: 'Limpiar el Cajon de Arena', prioridad: 'alta' },
    { done: true, texto: 'Hacer la Lista de la Compra', prioridad: 'media' },
  ];
  const elementos2 = [
    { done: false, texto: 'Papel' },
    { done: true, texto: 'Queso' },
    { done: false, texto: 'Chocolate' },
  ];
  const elementos3 = [{ done: false, texto: 'Tarea SGE' }];

  return (
    <div>
      <h1>Listas de tareas</h1>
      <ListaClase titulo="Tareas de la casa" icono="♥" elementos={elementos1} />
      <ListaClase
        titulo="Lista de la compra"
        icono="✌"
        elementos={elementos2}
      />
      <ListaClase titulo="ToDos del curso" icono="🙌" elementos={elementos3} />
    </div>
  );
}
