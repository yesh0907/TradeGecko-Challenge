import React, { Component } from 'react';
import { Button, Icon } from 'react-materialize';

class SearchButton extends Component {
  /*
    Fetch the Data once the button has been clicked
  */
  fetchData() {
    this.props.fetchData(this.props.query);
  }

  render() {
    return (
        <Button
          waves='light'
          className="searchButton"
          onClick={this.fetchData.bind(this)}>
          <Icon left>search</Icon>Search
        </Button>
    );
  }
}

export default SearchButton;
