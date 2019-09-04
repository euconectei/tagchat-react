import React from 'react';
import Message from './message';

const elemMessages = (messages) => messages.map(message => <Message message={message} />);

const MessageList = ({ messages }) => (
  <>
    {elemMessages(messages)}
  </>
);

export default MessageList;