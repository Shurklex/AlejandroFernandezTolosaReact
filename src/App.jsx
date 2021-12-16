import React from 'react';

import { Lista } from './components/Etiqueta1';

export function App() {
  const elementos1 = [
    { done: false, texto: 'Elemento (Comp 1)', prioridad: 'alta' },
    { done: true, texto: 'Elemento (Comp 2)', prioridad: 'media' },
  ];
  const elementos2 = [
    { done: false, texto: 'Elemento (Comp 3)', prioridad: 'media' },
    { done: true, texto: 'Elemento (Comp 4)', prioridad: 'alta' },
    { done: false, texto: 'Elemento (Comp 5)', prioridad: 'baja' },
  ];
  const elementos3 = [
    { done: false, texto: 'Elemento (Comp 6)', prioridad: 'media' },
  ];

  return (
    <div>
      <h1>Tareas</h1>
      <Lista titulo="Componente 1" icono="😸" elementos={elementos1} />
      <Lista titulo="Componente 2" icono="🍕" elementos={elementos2} />
      <Lista titulo="Componente 3" icono="🙉" elementos={elementos3} />
    </div>
  );
}
