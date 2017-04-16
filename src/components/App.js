import React, { Component } from 'react';
import axios from 'axios';

import Item from './Item';

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      results: [],
      data: [],
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
        this.setState({data: response['data']['items']});
        this.handleData();
      });
  }

  transitionToDetail(event) {
    const index = event.target.id;
    const { history } = this.props;
    const { data } = this.state;
    const repo = encodeURIComponent(data[index]['full_name']);
    history.push(`/detail/${repo}`, {});
  }

  handleData() {
    const { data } = this.state;
    const items = data.map((item, index) => {
      return (
        <Item
          index={index.toString()}
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
      </div>
    );
  }
}

export default App;
