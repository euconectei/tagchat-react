import React from 'react';
import Tag from './tag';

const elemTags = (tags) => tags.map(tag => <Tag tag={tag} />);

const TagList = ({ tags }) => (tags ? (<div>{elemTags(tags)}</div>) : (`Não há tag.`));

export default TagList;
