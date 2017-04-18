import React from 'react';

const RepoDetail = ({repo}) => {
  return (
    <div>
      <h6>Language: {repo['language']}</h6>
      <h6>Followers: {repo['watchers_count']} | Stars: {repo['stargazers_count']}</h6>
      <p>Description: {repo['description']}</p>
      <p>
        <a href={repo['html_url']} target="_blank">
          <i className="fa fa-github" aria-hidden="true"></i> Github
        </a>
      </p>
    </div>
  );
}

export default RepoDetail;
