import React from 'react';
import Tag from './tag';

const elemTags = (tags) => tags.map(tag => <Tag tag={tag} />);

const TagList = ({ tags }) => <div>{elemTags(tags)}</div>;

export default TagList;
