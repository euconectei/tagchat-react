import React from 'react';

const Tag = ({ tag }) => <a href="#" class="badge badge-pill badge-secondary mr-1">{tag.name} {(tag.organic) ? `😄` : `🤖`}</a>;

export default Tag;
