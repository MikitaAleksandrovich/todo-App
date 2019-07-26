import React from 'react';
import TodoListItem from './todo-list-item';

const TodoList = ({ todos }) => {

  const elements = todos.map(item => {

    const { id } = item; 

    return (
      <li key={id}>
      <TodoListItem 
        label = {item.label}
        important = {item.important}
      />
    </li>
    );

  });

  return (
    <ul>
      {elements}
    </ul>
  );
};


export default TodoList;
