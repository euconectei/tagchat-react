import React, {Component} from 'react';
import {Card, Form, Button} from 'react-bootstrap';

class Login extends Component {
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
              type="submit"
              onClick={() => this.props.history.push('/chat')}>
              Entrar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

export default Login;
