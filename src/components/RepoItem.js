import React, { Component } from 'react';
import { Card, CardTitle } from 'react-materialize';

import RepoDetail from './RepoDetail';

class RepoItem extends Component {
  render() {
    const { repo } = this.props;
    return (
      <Card
        header={<CardTitle reveal image={repo['owner']['avatar_url']} waves='light' />}
        reveal={<RepoDetail repo={repo} />}>
        <p className="lead activator">{repo['owner']['login'] + " - " + repo['name']}</p>
      </Card>
    )
  }
}

export default RepoItem;
