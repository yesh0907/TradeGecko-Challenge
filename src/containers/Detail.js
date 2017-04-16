import React, { Component } from 'react';
import { connect } from 'react-redux';

import RepoDetail from '../components/RepoDetail';

class Detail extends Component {
  render() {
    const {detail} = this.props;

    return (
      <RepoDetail repo={detail.repo} />
    )
  }
}

function mapStateToProps(state) {
  return {
    detail: state.detail
  }
}

export default connect(mapStateToProps)(Detail);
