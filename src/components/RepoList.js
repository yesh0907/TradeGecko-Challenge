import React, {Component} from 'react';
import { Row, Col } from 'react-materialize';

import RepoItem from './RepoItem';

class RepoList extends Component {
  revealCard(index) {
    const { repos, clicked } = this.props;
    this.revealCard(repos, clicked);
  }

  render() {
    const {repos} = this.props;
    const repoItems = repos.map((repo, index) => {
      return (
        <Col s={12} m={4} key={index.toString()}>
          <RepoItem repo={repo} />
        </Col>
      );
    })

    return (
      <Row>{repoItems}</Row>
    );
  }
}

export default RepoList;
