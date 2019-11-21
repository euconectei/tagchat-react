import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

const MessageForm = () => (
  <Form inline>
    <Form.Group className="flex-grow-1">
      <InputGroup className="flex-grow-1">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary">Button</Button>
        </InputGroup.Append>
      </InputGroup>
    </Form.Group>
  </Form>
)

export default MessageForm;