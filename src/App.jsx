import React from 'react';

import { Etiqueta1 } from './components/Etiqueta1';

export function App() {
  return (
    <div>
      <h1>Hola (desde componente)</h1>
      <Etiqueta1 titulo="Componente 1" icono=":(" />
      <Etiqueta1 titulo="Componente 2" icono=":*" />
      <Etiqueta1 titulo="Componente 3" icono=";)" />
    </div>
  );
}
