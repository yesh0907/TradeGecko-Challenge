import axios from 'axios';

export const UPDATE_QUERY = 'UPDATE_QUERY';
export const UPDATE_FETCHING_STATUS = 'UPDATE_FETCHING_STATUS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const FETCH_SUCCESSFUL = 'FETCH_SUCCESSFUL';
export const ERROR_DISPLAYED = 'ERROR_DISPLAYED';

export function errorDisplayed() {
  return {
    type: ERROR_DISPLAYED,
    payload: false    // Set fetch error to false after displaying error.
  }
}

export function updateQuery(query=null) {
  return {
    type: UPDATE_QUERY,
    payload: query
  }
}

export function updateFetchingStatus(fetchingStatus) {
  return {
    type: UPDATE_FETCHING_STATUS,
    payload: fetchingStatus
  }
}

export function fetchError(hasError, errorMessage) {
  return {
    type: FETCH_ERROR,
    payload: {hasError, errorMessage}
  }
}

export function fetchSuccessful(payload) {
  return {
    type: FETCH_SUCCESSFUL,
    payload
  };
}

export function fetchData(query=null) {
  return (dispatch) => {
    dispatch(updateFetchingStatus(true));

    if (query === null || query === '') {
      dispatch(updateFetchingStatus(false));
      dispatch(fetchError(true, "Invalid query"));
    }
    else {
      const payload = axios.get(`https://api.github.com/search/repositories?q=${query}`);
      dispatch(fetchSuccessful(payload));
      dispatch(updateFetchingStatus(false));
    }
  }
}
