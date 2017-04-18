import React, {Component} from 'react';
import { Row, Col } from 'react-materialize';

import RepoItem from './RepoItem';

class RepoList extends Component {
  render() {
    // Get all the repos from the props
    const {repos} = this.props;

    // Map the data to a component
    const repoItems = repos.map((repo, index) => {
      return (
        <Col s={12} m={4} key={index.toString()}>
          <RepoItem repo={repo} />
        </Col>
      );
    })

    // Only show data if there is something to show
    if (repos.length > 0) {
      return (
        <Row>{repoItems}</Row>
      );
    }
    else {
      return (
        <Row>No Results Found.</Row>
      );
    }
  }
}

export default RepoList;
