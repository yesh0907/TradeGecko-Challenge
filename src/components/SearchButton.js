import React, { Component } from 'react';

class SearchButton extends Component {
  fetchData() {
    this.props.fetchData(this.props.query);
  }

  render() {
    return (
      <input
        type="submit"
        value="Search"
        onClick={this.fetchData.bind(this)}
      />
    );
  }
}

export default SearchButton;
