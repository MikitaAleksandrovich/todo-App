/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';


const TodoList = () => (
  <ul>
    <li>Learn React</li>
    <li>Build Awesome App</li>
  </ul>
);

const AppHeader = () => (
  <h1>My Todo App</h1>
);

const SearchPanel = () => (
  <input placeholder="search" />
);


const App = () => (
  <div>
    <AppHeader />
    <SearchPanel />
    <TodoList />
  </div>
);


ReactDOM.render(<App />,
  document.getElementById('root'));
