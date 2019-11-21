import React from 'react';
import User from './user';

import "./userList.css";

const elemUsers = (users) => users.map((user) => <li><User user={user} /></li>);

const UserList = ({ users }) => (
  <ul className="user-list">
    {elemUsers(users)}
  </ul>
);

export default UserList;
