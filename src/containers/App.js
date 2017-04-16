import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '../actions';

import SearchBar from '../components/SearchBar';
import SearchButton from '../components/SearchButton';
import RepoList from '../components/RepoList';

class App extends Component {
  transitionToDetail(event) {
    const index = event.target.id;
    const { history } = this.props;
    const { data } = this.state;
    const repo = encodeURIComponent(data[index]['full_name']);
    history.push(`/detail/${repo}`, {});
  }

  render() {
    return (
      <div>
        <h1>GitSearch!</h1>
        <SearchBar onInputChange={this.props.actions.updateQuery} />
        <SearchButton fetchData={this.props.actions.fetchData} query={this.props.search.query} />
        {this.props.search.fetchedData ? <RepoList repos={this.props.search.data} /> : undefined }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    search: state.search
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
