/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import AppUnderHeader from './components/app-underhead';


const App = () => (
  <div>
    <AppHeader />
    <AppUnderHeader />
    <SearchPanel />
    <TodoList />
  </div>
);


ReactDOM.render(<App />,
  document.getElementById('root'));
