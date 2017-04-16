import React, {Component} from 'react';

import RepoItem from './RepoItem';

class RepoList extends Component {
  transitionToDetail(index) {
    const { history, repos } = this.props;
    this.props.transitionToDetail(index, history, repos);
  }

  render() {
    const {repos} = this.props;
    const repoItems = repos.map((repo, index) => {
      return (
        <RepoItem
          index={index.toString()}
          name={repo['name']}
          owner={repo['owner']['login']}
          avatar={repo['owner']['avatar_url']}
          key={index.toString()}
          clickAction={event => this.transitionToDetail(event.target.id)}
        />
      );
    })

    return (
      <div>{repoItems}</div>
    );
  }
}

export default RepoList;
