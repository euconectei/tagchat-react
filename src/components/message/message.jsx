import React from 'react';
import { User } from '../user';

const Message = ({ message }) => <div><User user={message.author} />: {message.text}</div>;

export default Message;
