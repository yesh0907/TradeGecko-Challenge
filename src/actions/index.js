import axios from 'axios';

export const UPDATE_QUERY = 'UPDATE_QUERY';
export const FETCH_ERROR = 'FETCH_ERROR';
export const FETCH_SUCCESSFUL = 'FETCH_SUCCESSFUL';

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
