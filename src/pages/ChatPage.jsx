import React, { Component } from 'react';
import { Container, Navbar, Row, Col } from 'react-bootstrap';
import { UserList } from '../components/user';
import { MessageList } from '../components/message';
import { TagList } from '../components/tag';

class ChatPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [
        {
          author: {
            name: 'euconectei'
          },
          text: 'Olá a tds!'
        },
        {
          author: {
            name: 'Pimentel'
          },
          text: 'Olá!'
        },
        {
          author: {
            name: 'Rafael'
          },
          text: 'estou fazendo um #teste'
        },
      ],
      tags: [
        {
          name: '#saudação',
          id: 1,
          slug: 'saudacao',
          organic: false,
        },
        {
          name: '#teste',
          id: 1,
          slug: 'teste',
          organic: true,
        },
      ],
      users: [
        { name: 'euconectei' },
        { name: 'Pimentel' },
        { name: 'Fernando' },
      ],
    }
  }
  render() {
    const {
      messages,
      tags,
      users,
    } = this.state;

    return (
      <>
        <div className="container-page-full d-flex flex-column">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">TagChat</Navbar.Brand>
          </Navbar>
          <Container fluid className="d-flex flex-column flex-grow-1">
            <Row className="d-flex flex-grow-1">
              <Col lg="10" className="d-flex flex-column flex-grow-1">
                <Row className="flex-grow-1">
                  <Col>
                    <MessageList messages={messages} />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <TagList tags={tags} />
                  </Col>
                </Row>
              </Col>
              <Col className="usuarios-bg">
                <UserList users={users} />
              </Col>
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
