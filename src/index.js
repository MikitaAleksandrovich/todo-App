/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';

const el = (
  <div>
    <h1>My Todo App</h1>
    <input placeholder="Search" />
    <ul>
      <li>Learn React</li>
      <li>Build Awesome App</li>
    </ul>
  </div>
);


ReactDOM.render(el,
  document.getElementById('root'));
