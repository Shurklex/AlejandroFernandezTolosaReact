import React from 'react';
import { Container, Table, Row, Col, Card } from 'react-bootstrap';
import './table_component.css';

class Digimon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedItem: '', tableData: [] };
  }

  changeStatus(item) {
    this.setState({ selectedItem: item });
  }

  async componentDidMount() {
    const response = await fetch(
      'https://www.zaragoza.es/sede/servicio/mascotas.json'
    );
    const responseData = await response.json();
    this.setState({
      tableData: responseData.result,
      selectedItem: responseData.result,
    });
  }

  render() {
    return (
      <div clasName="main-site">
        <h1>Animales</h1>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Evolucion</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableData.map((item) => {
                    return (
                      <tr onClick={() => this.changeStatus(item)}>
                        <td>{item.nombre}</td>
                        <td>{item.level}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={4} md={6}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.state.selectedItem.foto} />
                <Card.Body>
                  <Card.Title>{this.state.selectedItem.name}</Card.Title>
                  <Card.Text>
                    Evolucion: {this.state.selectedItem.level}
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

export default Digimon;
