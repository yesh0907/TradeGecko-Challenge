import React, { Component } from 'react';

class SearchBar extends Component {
  onInputChange(value) {
    this.props.onInputChange(value);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Repository Name"
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }
}

export default SearchBar;
