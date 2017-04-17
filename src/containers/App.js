import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '../actions';

import { Row, Col } from 'react-materialize';

import SearchBar from '../components/SearchBar';
import SearchButton from '../components/SearchButton';
import RepoList from '../components/RepoList';

class App extends Component {
  render() {
    const {actions, search} = this.props;

    const repoList = () => {
      return (
        <RepoList
          repos={search.data}
          clicked={search.cardClicked}
          revealCard={actions.revealCard}
        />
      )
    }
    return (
      <div className="container">
        <h1 className="header">GitSearch</h1>
        <Row>
          <Col s={12}>
            <SearchBar onInputChange={actions.updateQuery} />
            <SearchButton fetchData={actions.fetchData} query={search.query} />
          </Col>
        </Row>
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
