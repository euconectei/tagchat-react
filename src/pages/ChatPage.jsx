import React, { Component } from 'react';
import { Container, Navbar, Row, Col } from 'react-bootstrap';
import { UserList } from '../components/user';
import { MessageList, MessageForm } from '../components/message';
import { TagList } from '../components/tag';
import { SERVER } from '../configs/const';

class ChatPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [
        {
          author: {
            name: 'euconectei'
          },
          text: 'Olá a tds!',
          tagId: [1],
        },
        {
          author: {
            name: 'Pimentel'
          },
          text: 'Olá!',
          tagId: [1],
        },
        {
          author: {
            name: 'Rafael'
          },
          text: 'Olá! estou fazendo um #teste',
          tagId: [1, 2],
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
          id: 2,
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
                    <MessageList messages={messages} tags={tags} />
                  </Col>
                </Row>
              </Col>
              <Col className="d-flex flex-column flex-grow-1 usuarios-bg">
                <Row className="flex-grow-1">
                  <Col>
                    <h2>Usuarios</h2>
                    <UserList users={users} />
                  </Col>
                </Row>
                <Row className="flex-grow-1">
                  <Col>
                    <h2>Tags</h2>
                    <TagList tags={tags} />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col className="p-2">
                <MessageForm />
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default ChatPage;
