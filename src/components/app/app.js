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
    ],
    searchedItem: '',
    filter: 'all' // can be active, all, done
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

  onSearchedItem = (searchedItem) => {
    this.setState({
      searchedItem: searchedItem
    })
  };

  
  deleteItem = (id) => {
    this.setState(({ todoData }) => {

      const idx = todoData.findIndex((el) => el.id === id);

      const newData = [...todoData.slice(0, idx), 
                        ...todoData.slice(idx + 1)
                      ];
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

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);

    //1. Update Object
    const oldItem = arr[idx];
    const newItem = {
      ...oldItem,
      [propName]: !oldItem[propName]
    };

    //2. Update array in state
    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ];
  }

  onToggleImportant = (id) => {
    this.setState(( {todoData} ) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(( {todoData} ) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      };
    });
  };

  search(items, searchedItem) {
    if(searchedItem === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(searchedItem.toLowerCase()) > -1;
    });
  };

  filter(items, filter) {

    switch(filter) {
      case 'all': 
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done': 
        return items.filter((item) => item.done);
      default:
        return items;
    }
  };

  render() {
    const { todoData, searchedItem, filter } = this.state;

    const visibleItems = this.filter( this.search(todoData, searchedItem), filter);

    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchedItem={ this.onSearchedItem }/>
          <ItemStatusFilter />
        </div>
  
        <TodoList 
          todos={ visibleItems } 
          onDeleted={ this.deleteItem }
          onToggleImportant={ this.onToggleImportant }
          onToggleDone={ this.onToggleDone }
        />

        <ItemAddForm onItemAdded={this.addItem} />
        
      </div>
    );
  }
 
  
};
