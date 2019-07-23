/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import TodoListItem from './todo-list-item';

const TodoList = ({ todos }) => {
  const elements = todos.map(item => (
    <li>
      <TodoListItem {...item} />
    </li>
  ));


  return (
    <ul>
      {elements}
    </ul>
  );
};

export default TodoList;
