import React, {Component} from 'react';
import {Container, Navbar, Row, Col} from 'react-bootstrap';

class ChatPage extends Component {
  render() {
    return (
      <>
        <div className="container-page-full d-flex flex-column">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">TagChat</Navbar.Brand>
          </Navbar>
          <Container fluid className="d-flex flex-column flex-grow-1">
            <Row className="flex-grow-1">
              <Col lg="10">Mensagens</Col>
              <Col className="usuarios-bg">Usuários</Col>
            </Row>
            <Row>
              <Col>#hashTags</Col>
            </Row>
            <Row>
              <Col>Envia Mensagem</Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default ChatPage;
