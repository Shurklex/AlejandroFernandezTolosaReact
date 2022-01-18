import React from 'react';
import { Table } from 'react-bootstrap';

export function Home() {
  return (
    <div className="main-site">
      <h1>Combocados Eurocopa España 2022</h1>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Nº</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Posicion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Gonzalo</td>
            <td>Perez</td>
            <td>Portero</td>
          </tr>
          <tr>
            <td>30</td>
            <td>Gedeón</td>
            <td>Guardiola</td>
            <td>Pivote</td>
          </tr>
          <tr>
            <td>12</td>
            <td>Rodrigo</td>
            <td>Corrales</td>
            <td>Portero</td>
          </tr>
          <tr>
            <td>21</td>
            <td>Joan</td>
            <td>Cañellas</td>
            <td>Lateral</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Angel</td>
            <td>Fernández</td>
            <td>Extremo</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
