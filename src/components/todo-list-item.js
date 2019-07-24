/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';

const TodoListItem = ({ label, important = false }) => {
  const style = {
    color: important ? 'tomato' : 'black',
  };

  return (
    <span style={style}>{label} Hello My dear</span>
  );

};


export default TodoListItem;
