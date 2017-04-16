import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '../actions';

import SearchBar from '../components/SearchBar';
import SearchButton from '../components/SearchButton';
import RepoList from '../components/RepoList';

class App extends Component {
  render() {
    const {actions, search, history} = this.props;

    const repoList = () => {
      return (
        <RepoList
          repos={search.data}
          history={history}
          transitionToDetail={actions.transitionToDetail}
        />
      )
    }
    return (
      <div>
        <h1>GitSearch!</h1>
        <SearchBar onInputChange={actions.updateQuery} />
        <SearchButton fetchData={actions.fetchData} query={search.query} />
        { search.fetchedData ? repoList() : undefined }
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
