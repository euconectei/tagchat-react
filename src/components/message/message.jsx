import React from 'react';
import { User } from '../user';

const listaTag = (tagId, tags) => tagId.map(id => tags.find(tag => id === tag.id));

const Message = ({ message, tags }) => (<div><User user={message.author} />: {message.text}
  <div className="message-tag">
    {listaTag(message.tagId, tags)}
  </div>
</div>);

export default Message;
