import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

export default class App extends Component {

  state = {
    todoData: [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Make Awesome App', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 },
      { label: 'Do shopping', important: false, id: 4 },
      { label: 'Make dinner', important: false, id: 5 },
      { label: 'Go sleep', important: false, id: 6 }
    ]
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {

      const itemDeletedIndex = todoData.findIndex((el) => el.id === id);

      const beforeDeltedItem = todoData.slice(0, itemDeletedIndex);
      const afterDeletedItem = todoData.slice(itemDeletedIndex + 1);

      const newData = [...beforeDeltedItem, ...afterDeletedItem];

      return {
        todoData: newData
      }

    });
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
  
        <TodoList 
          todos={this.state.todoData} 
          onDeleted={ this.deleteItem }
        />
      </div>
    );
  }
 
  
};
