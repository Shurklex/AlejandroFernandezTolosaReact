import React from 'react';
import { Container, Table, Row, Col, Card } from 'react-bootstrap';
import { TitulosTablaJugadores, JugadoresTabla } from '../data/JugadoresTabla';

class Jugadores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Numero: JugadoresTabla[0].Numero,
      Nombre: JugadoresTabla[0].Nombre,
      Apellido: JugadoresTabla[0].Apellido,
      Posicion: JugadoresTabla[0].Posicion,
      Imagen: JugadoresTabla[0].Imagen,
      Descripción: JugadoresTabla[0].Descripción,
    };
  }

  changeStatus(jugador) {
    this.setState({
      Numero: jugador.Nº,
      Nombre: jugador.Nombre,
      Apellido: jugador.Apellido,
      Posicion: jugador.Posicion,
      Imagen: jugador.Imagen,
      Descripción: jugador.Descripción,
    });
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
                  {JugadoresTabla.map((item) => {
                    return (
                      <tr onClick={() => this.changeStatus(item)}>
                        <td>{item.Nº}</td>
                        <td>{item.Nombre}</td>
                        <td>{item.Apellido}</td>
                        <td>{item.Posicion}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={4} md={6}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.state.Imagen} />
                <Card.Body>
                  <Card.Title>
                    {this.state.Nombre} {this.state.Apellido}
                  </Card.Title>
                  <Card.Text>
                    Numero: {this.state.Numero}
                    <p />
                    {this.state.Descripción}
                  </Card.Text>
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
