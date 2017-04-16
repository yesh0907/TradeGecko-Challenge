import React from 'react';

const RepoDetail = ({repo}) => {
  return (
    <div>
      <h1>
        <a href={repo['html_url']} target="_blank">Repository: {repo['name']}</a>
      </h1>
      <h2>
        <a href={repo['owner']['html_url']} target="_blank">By: {repo['owner']['login']}</a>
      </h2>
      <h3>Language: {repo['language']}</h3>
      <h3>Followers: {repo['watchers_count']} | Stars: {repo['stargazers_count']}</h3>
      <p>Description: {repo['description']}</p>
    </div>
  );
}

export default RepoDetail;
