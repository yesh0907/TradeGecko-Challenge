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
    /*
      Get the props passed from redux
      actions: dispatching actions
      search: state of the app's data
    */
    const {actions, search} = this.props;
    
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
        { search.fetchedData ? <RepoList repos={search.data} /> : undefined }
      </div>
    );
  }
}

/*
  Maps the State as a prop to the component
  @param: state - the state from the store.
*/
function mapStateToProps(state) {
  return {
    search: state.search
  }
}

/*
  Maps the Dispatch Utility as a prop to the component
  @param: dispatch - the dispacth utility from the store.
*/
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

/*
  Connect the props to the component.
*/
export default connect(mapStateToProps, mapDispatchToProps)(App);
