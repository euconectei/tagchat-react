import React, { Component } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import Auth from '../../api/auth';
import Room from '../../api/room';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '123456',
      username: 'euconectei',
    };

    this.onLogin = this.onLogin.bind(this);
  }
  onLogin() {
    console.log('onLogin');
    const {
      password,
      username,
    } = this.state;

    Auth.login(username, password);
    Room.create();

  }
  render() {
    return (
      <Card>
        <Card.Header as="h5">Login</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group>
              <Form.Label>Usuário</Form.Label>
              <Form.Control type="text" placeholder="usuario" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="senha" />
            </Form.Group>
            <Button
              variant="primary"
              type="button"
              onClick={() => this.onLogin()}>
              Entrar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

export default Login;
