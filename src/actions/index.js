import axios from 'axios';

export const UPDATE_QUERY = 'UPDATE_QUERY';
export const FETCH_ERROR = 'FETCH_ERROR';
export const FETCH_SUCCESSFUL = 'FETCH_SUCCESSFUL';

export const TRANSITION = 'TRANSITION_SUCCESSFUL';

export function updateQuery(query = null) {
  return {
    type: UPDATE_QUERY,
    payload: query
  }
}

export function fetchData(query=null) {
  if (query === null) {
    return {
      type: FETCH_ERROR,
      payload: 'No Query'
    }
  }
  else {
    const payload = axios.get(`https://api.github.com/search/repositories?q=${query}`);
    return {
      type: FETCH_SUCCESSFUL,
      payload
    };
  }
}

export function transitionToDetail(index, history, repos) {
  const repoId = encodeURIComponent(repos[index]['id']);
  history.push(`/detail/${repoId}`, {});

  return {
    type: TRANSITION,
    payload: repos[index]
  }
}
