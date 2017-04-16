import React, {Component} from 'react';

import RepoItem from './RepoItem';

class RepoList extends Component {
  transitionToDetail() {
    console.log("hi");
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
          clickAction={this.transitionToDetail.bind(this)}
        />
      );
    })

    return (
      <div>{repoItems}</div>
    );
  }
}

export default RepoList;
