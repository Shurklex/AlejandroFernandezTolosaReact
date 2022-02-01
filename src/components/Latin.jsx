import React from 'react';
import { Container, Table, Row, Col, Card } from 'react-bootstrap';
import './table_component.css';

class Latin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedItem: '', tableData: [] };
  }

  changeStatus(item) {
    this.setState({ selectedItem: item });
  }

  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const responseData = await response.json();
    this.setState({ tableData: responseData, selectedItem: responseData[0] });
  }

  render() {
    return (
      <div clasName="main-site">
        <h1>Frases Latin</h1>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>User ID</th>
                    <th>ID</th>
                    <th>Frase</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableData.map((item) => {
                    return (
                      <tr onClick={() => this.changeStatus(item)}>
                        <td>{item.userId}</td>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={4} md={6}>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title variant="top">
                    ID: {this.state.selectedItem.id}
                  </Card.Title>
                  <Card.Text>
                    Autor: {this.state.selectedItem.userId}
                    <p />
                    Frase: {this.state.selectedItem.title}
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

export default Latin;
