import React from 'react';
import { Card } from 'react-bootstrap';

class CardPeli extends React.Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }

  render() {
    if (this.data !== null) {
      return (
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{this.data.title}</Card.Title>
            <Card.Text>
              Año: {this.data.release_date}
              <p />
              Puntuación {this.data.rt_score}
            </Card.Text>
          </Card.Body>
        </Card>
      );
    } else {
      return <div />;
    }
  }
}

export default CardPeli;
