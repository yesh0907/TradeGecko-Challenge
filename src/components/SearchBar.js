import React, { Component } from 'react';
import { Input } from 'react-materialize';

class SearchBar extends Component {
  onInputChange(event) {
    this.props.onInputChange(event.target.value);
  }

  render() {
    return (
        <Input
          label="Repository Name"
          value={this.props.query}
          onChange={this.onInputChange.bind(this)}
          s={12}
          m={9}
        />
    );
  }
}

export default SearchBar;
