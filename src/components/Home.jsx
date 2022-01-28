import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Usuarios } from '../data/Usuarios';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
      nombre: '',
      apellido: '',
      nota: '',
      curso: '',
      foto: '',
      comprobarU: false,
      comprobarC: false,
    };
    this.login = this.login.bind(this);
    this.inputUser = React.createRef();
    this.inputPass = React.createRef();
    this.inputNom = React.createRef();
    this.inputApel = React.createRef();
    this.inputNota = React.createRef();
    this.inputCurso = React.createRef();
    this.inputFoto = React.createRef();
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
      Usuarios.map((item) => {
        if (
          this.state.user == item.Usuario &&
          this.state.password == item.Contraseña
        ) {
          this.state.comprobarU = true;
          this.state.comprobarC = true;
          this.state.nombre = item.Nombre;
          this.state.apellido = item.Apellido;
          this.state.nota = item.Calificacion;
          this.state.curso = item.Curso;
          this.state.foto = item.Icono;
          localStorage.setItem('user', item.Usuario);
          localStorage.setItem('password', item.Contraseña);
          localStorage.setItem('nombre', item.Nombre);
          localStorage.setItem('apellido', item.Apellido);
          localStorage.setItem('nota', item.Calificacion);
          localStorage.setItem('curso', item.Curso);
          localStorage.setItem('foto', item.Icono);
        }
      });

      if (
        this.state !== null &&
        this.state.user !== null &&
        this.state.user !== '' &&
        this.state.comprobarU == true &&
        this.state.password !== null &&
        this.state.password !== '' &&
        this.state.comprobarC == true
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
                  También vale con su gmail o numero de telefono
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Constraseña:</Form.Label>
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
    localStorage.setItem('nombre', this.state.nombre);
    localStorage.setItem('apellido', this.state.apellido);
    localStorage.setItem('nota', this.state.nota);
    localStorage.setItem('curso', this.state.curso);
    localStorage.setItem('foto', this.state.foto);
  }
}

export default Home;
