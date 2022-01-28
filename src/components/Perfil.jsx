import React from 'react';
import {
  Container,
  Button,
  Row,
  Col,
  Card,
  InputGroup,
  FormControl,
} from 'react-bootstrap';

class Perfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.cerrarsesion = this.cerrarsesion.bind(this);
  }

  cerrarsesion() {
    localStorage.clear();
  }

  render() {
    return (
      <Container className="justify-content-md-center">
        <br />
        <Row className="justify-content-md-center">
          <Col lg={3}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={localStorage.getItem('foto')} />
              <Card.Body>
                <Card.Title>
                  Nota del curso: {localStorage.getItem('nota')}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon3">
                Usuario: {localStorage.getItem('user')}
              </InputGroup.Text>
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon3">
                Nombre: {localStorage.getItem('nombre')}
              </InputGroup.Text>
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon3">
                Apellido: {localStorage.getItem('apellido')}
              </InputGroup.Text>
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon3">
                Curso: {localStorage.getItem('curso')}
              </InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={{ span: 3, offset: 3 }}>
            <Button variant="primary" onClick={this.cerrarsesion}>
              Cerrar sesión
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Perfil;
