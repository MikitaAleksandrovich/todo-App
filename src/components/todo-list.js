/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import TodoListItem from './todo-list-item';

const TodoList = () => (
  <ul>
    <li>{ <TodoListItem label="Drink Coffee" /> }</li>
    <li>{ <TodoListItem label="Build React App" important /> }</li>
    <li>{ <TodoListItem label="Create Awesome features" /> }</li>
    <li>{ <TodoListItem label="Drink Tea" /> }</li>
    <li>{ <TodoListItem label="Go Shopping" /> }</li>
    <li>{ <TodoListItem label="Read books" important /> }</li>
    <li>{ <TodoListItem label="Watch movies" /> }</li>
  </ul>
);


export default TodoList;
