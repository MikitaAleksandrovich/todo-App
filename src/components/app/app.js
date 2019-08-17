import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Have a lunch'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Do shopping'),
      this.createTodoItem('Make dinner'),
      this.createTodoItem('Go sleep')
    ]
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
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

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newData = [
        ...todoData,
        newItem
      ];

      return {
        todoData: newData
      }
    });
  }

  onToggleImportant = (id) => {
    console.log('Toggle Important', (id));

    this.setState(( {todoData} ) => {
      const idx = todoData.findIndex((el) => el.id === id);

      //1. Update Object
      const oldItem = todoData[idx];
      const newItem = {
        ...oldItem,
        important: !oldItem.important
      };

      //2. Update array in state
      const newArray = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1)
      ];

      return {
        todoData: newArray
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(( {todoData} ) => {
      const idx = todoData.findIndex((el) => el.id === id);

      //1. Update Object
      const oldItem = todoData[idx];
      const newItem = {
        ...oldItem,
        done: !oldItem.done
      };

      //2. Update array in state
      const newArray = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1)
      ];

      return {
        todoData: newArray
      };
    });
  };


  render() {

    const doneCount = this.state.todoData.filter((el) => el.done).length;
    const todoCount = this.state.todoData.length - doneCount;
    

    return (
      <div className="todo-app">
        
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
  
        <TodoList 
          todos={this.state.todoData} 
          onDeleted={ this.deleteItem }
          onToggleImportant={ this.onToggleImportant }
          onToggleDone={ this.onToggleDone }
        />

        <ItemAddForm onItemAdded={this.addItem} />
        
      </div>
    );
  }
 
  
};
