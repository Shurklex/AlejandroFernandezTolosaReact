import React from 'react';
import { Container, Table, Row, Col, Card } from 'react-bootstrap';
import CardPeli from './CardPeli';
import './table_component.css';

class PelisGhibli extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedItem: '', tableData: [] };
  }

  changeStatus(item) {
    this.setState({ selectedItem: item });
  }

  async componentDidMount() {
    const response = await fetch('https://ghibliapi.herokuapp.com/films');
    const responseData = await response.json();
    this.setState({ tableData: responseData, selectedItem: responseData[0] });
  }

  render() {
    return (
      <div clasName="main-site">
        <h1>Peliculas de Studio Ghibli</h1>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>Título</th>
                    <th>Director</th>
                    <th>Año</th>
                    <th>Puntuación</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableData.map((item) => {
                    return (
                      <tr onClick={() => this.changeStatus(item)}>
                        <td>{item.title}</td>
                        <td>{item.director}</td>
                        <td>{item.release_date}</td>
                        <td>{item.rt_score}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={4} md={6}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.state.selectedItem.image} />
                <Card.Body>
                  <Card.Title>{this.state.selectedItem.title}</Card.Title>
                  <Card.Text>
                    Original Title: {this.state.selectedItem.original_title}
                    <p />
                    Año: {this.state.selectedItem.release_date}
                    <p />
                    Puntuación {this.state.selectedItem.rt_score}
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

//<CardPeli data={this.state.tableData} />

export default PelisGhibli;
