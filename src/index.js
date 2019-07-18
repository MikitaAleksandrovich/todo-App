/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';


const TodoList = () => {
  const items = ['Drink Coffee', 'Build Awesome App'];

  return (
    <ul>
      <li>{ items[0] }</li>
      <li>{ items[1] }</li>
    </ul>
  );
};


const AppHeader = () => (
  <h1>My Todo App</h1>
);

const SearchPanel = () => {
  const searchText = 'Type here to search';
  const searchStyle = {
    fontSize: '20px',
    backgroundColor: 'red',
  };
  return (
    <input
      placeholder={searchText}
      style={searchStyle}
    />
  );
};


const App = () => (
  <div>
    <AppHeader />
    <SearchPanel />
    <TodoList />
  </div>
);


ReactDOM.render(<App />,
  document.getElementById('root'));
