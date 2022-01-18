import React from 'react';
import { Container, Table, Row, Col, Card } from 'react-bootstrap';
import { TitulosTablaJugadores, JugadoresTabla } from '../data/JugadoresTabla';

class Jugadores extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div clasName="main-site">
        <h1>Jugadores convocados</h1>
        <Container>
          <Row>
            <Col lg={0} md={6}>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>{TitulosTablaJugadores.id}</th>
                    <th>{TitulosTablaJugadores.field1}</th>
                    <th>{TitulosTablaJugadores.field2}</th>
                    <th>{TitulosTablaJugadores.field3}</th>
                  </tr>
                </thead>
                <tbody>
                  {JugadoresTabla.map((Jugador) => {
                    return (
                      <tr>
                        <td>{Jugador.Nº}</td>
                        <td>{Jugador.Nombre}</td>
                        <td>{Jugador.Apellido}</td>
                        <td>{Jugador.Posicion}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={4} md={6}>
              <Card>
                <Card.Img />
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Jugadores;
