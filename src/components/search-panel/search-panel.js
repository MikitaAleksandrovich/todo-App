import React, { Component } from 'react';
import './search-panel.css';


export default class SearchPanel extends Component {

  state = {
    searchedItem: ''
  };

  onSearchedItem = (e) => {
    const searchedItem = e.target.value;

    this.setState({
      searchedItem: searchedItem
    });

    this.props.onSearchedItem(searchedItem);
  };


  render() {
    return(
      <input
        type="text"
        placeholder="type to search"
        className="form control search-input"
        value={ this.state.searchedItem }
        onChange={ this.onSearchedItem }
      />
    )
  }
};

