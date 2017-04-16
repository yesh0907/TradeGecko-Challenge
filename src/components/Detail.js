import React, { Component } from 'react';
import axios from 'axios';

class Detail extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      results: {},
      fetchedData: false
    };
  }

  componentWillMount() {
    const repo = this.props.match.params.repo;
    this.getRepoInfo(decodeURIComponent(repo));
  }

  getRepoInfo(repo) {
    axios.get(`https://api.github.com/search/repositories?q=${repo}`)
      .then((response) => {
        this.setState({ data: response['data']['items'][0] });
        this.handleData();
      });
  }

  formatResults(data) {
    return new Promise(resolve => {
      const format = (data) => {
        return (
          <div>
            <h1><a href={data['html_url']}>Repository: {data['name']}</a></h1>
            <h2><a href={data['owner']['html_url']}>By: {data['owner']['login']}</a></h2>
            <h3>Language: {data['language']}</h3>
            <h3>Followers: {data['watchers_count']} | Stars: {data['stargazers_count']}</h3>
            <p>Description: {data['description']}</p>
          </div>
        );
      }
      resolve(format(data));
    });
  }

  async handleData() {
    const { data } = this.state;

    const results = await this.formatResults(data);
    this.setState({results, fetchedData: true});
  }


  render() {
    const { fetchedData, results } = this.state;
    if (fetchedData) {
      return <div>{results}</div>;
    }
    else {
      return <div>Loading...</div>;
    }
  }
}

export default Detail;
