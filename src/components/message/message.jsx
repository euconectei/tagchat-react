import React from 'react';
import { User } from '../user';
import { Tag } from '../tag';

import "./message.css";

const listTag = (tagId, tags) => tagId.map(id => {
  let selectedTag = tags.find(tag => id === tag.id);
  return (<Tag tag={selectedTag} />);
});

const findTag = (text, tags) => {
  let newText;
  const words = text.split(' ');
  words.map(word => {
    tags.find(tag => {
      if (tag.name === word) {

        newText = text.split(word)
          .reduce((prev, current, i) => {
            if (!i) {
              return [current];
            }
            return prev.concat(<Tag tag={tag} />, current);
          }, [])


      }
    });
  });
  return newText ? newText : text;
};

const Message = ({ message, tags }) => (
  <div className="message-box">
    <User user={message.author} />: {findTag(message.text, tags)}
    <div className="message-tags">
      {listTag(message.tagId, tags)}
    </div>
  </div>);

export default Message;
