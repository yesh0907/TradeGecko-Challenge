import React, { Component } from 'react';
import { Button, Icon } from 'react-materialize';

class SearchButton extends Component {
  fetchData() {
    this.props.fetchData(this.props.query);
  }

  render() {
    return (
        <Button
          waves='light'
          onClick={this.fetchData.bind(this)}>
          <Icon left>search</Icon>Search
        </Button>
    );
  }
}

export default SearchButton;
