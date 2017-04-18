import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '../actions';

import { Row, Col, Preloader } from 'react-materialize';
import SearchBar from '../components/SearchBar';
import SearchButton from '../components/SearchButton';
import RepoList from '../components/RepoList';
import ErrorPopup from '../components/ErrorPopup';

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
        <ErrorPopup
          hasError={search.hasError}
          errorMessage={search.errorMessage}
          updateState={actions.errorDisplayed}
        />
        <Row>
          <Col s={12}>
            <SearchBar onInputChange={actions.updateQuery} query={search.query} />
            <SearchButton fetchData={actions.fetchData} query={search.query} />
          </Col>
        </Row>
        { search.fetchingData ? <Preloader size='big'/> : undefined }
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
