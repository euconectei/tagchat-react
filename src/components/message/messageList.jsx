import React from 'react';
import Message from './message';

const elemMessages = (messages, tags) => messages.map(message => <Message message={message} tags={tags} />);

const MessageList = ({ messages, tags }) => (
  <>
    {elemMessages(messages, tags)}
  </>
);

export default MessageList;