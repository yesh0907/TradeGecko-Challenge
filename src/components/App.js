import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Item from './Item';

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      results: [],
      fetchedData: false
    };
    this.updateQuery = this.updateQuery.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  updateQuery(event) {
    const query = event.target.value;
    this.setState({query});
  }

  fetchData() {
    const {query} = this.state;
    axios.get(`https://api.github.com/search/repositories?q=${query}`)
      .then((response) => {
        this.handleData(response['data']['items']);
      });
  }

  transitionToDetail() {
    const { history } = this.props;
    history.push('/detail', {});
  }

  handleData(data) {
    const items = data.map((item, index) => {
      return (
        <Item
          name={item['name']}
          owner={item['owner']['login']}
          avatar={item['owner']['avatar_url']}
          key={index.toString()}
          clickAction={this.transitionToDetail.bind(this)}
        />
      );
    });

    this.setState({results: items, fetchedData: true});
  }

  render() {
    return (
      <div>
        <h1>GitSearch!</h1>
        <input type="text" placeholder="Repository Name" onChange={this.updateQuery} />
        <input type="submit" value="Search" onClick={this.fetchData} />
        {this.state.fetchedData ? this.state.results : undefined }
        <Link to="/detail">Detail</Link>
      </div>
    );
  }
}

export default App;
