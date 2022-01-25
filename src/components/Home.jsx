import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: '', password: '' };
    this.login = this.login.bind(this);
    this.inputUser = React.createRef();
    this.inputPass = React.createRef();
  }

  login() {
    this.setState({
      user: this.inputUser.current.value,
      password: this.inputPass.current.value,
    });
  }

  componentDidMount() {
    this.setState({
      user: localStorage.getItem('user'),
      password: localStorage.getItem('password'),
    });
  }

  render() {
    {
      if (
        this.state !== null &&
        this.state.user !== null &&
        this.state.user !== ''
      ) {
        return (
          <div className="main-site">
            <h1>Bienvenido {this.state.user}!</h1>
          </div>
        );
      } else {
        return (
          <Container>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre de usuario:</Form.Label>
                <Form.Control
                  type="User"
                  placeholder="Usuario"
                  ref={this.inputUser}
                />
                <Form.Text className="text-muted">
                  Tambien vale con su gmail o numero de telefono
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Constraeña:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  ref={this.inputPass}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Recordarme" />
              </Form.Group>
              <Button variant="primary" type="button" onClick={this.login}>
                Login
              </Button>
            </Form>
          </Container>
        );
      }
    }
  }

  componentWillUnmount() {
    localStorage.setItem('user', this.state.user);
    localStorage.setItem('password', this.state.password);
  }
}

export default Home;
