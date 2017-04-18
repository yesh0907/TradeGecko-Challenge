import axios from 'axios';

// Create constant variables for the actions
export const UPDATE_QUERY = 'UPDATE_QUERY';
export const UPDATE_FETCHING_STATUS = 'UPDATE_FETCHING_STATUS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const FETCH_SUCCESSFUL = 'FETCH_SUCCESSFUL';
export const ERROR_DISPLAYED = 'ERROR_DISPLAYED';

// Update the error once the error has been displayed
export function errorDisplayed() {
  return {
    type: ERROR_DISPLAYED,
    payload: false    // Set fetch error to false after displaying error.
  }
}

// Update the State's query
export function updateQuery(query=null) {
  return {
    type: UPDATE_QUERY,
    payload: query
  }
}

// Update the status of the fetching of data
export function updateFetchingStatus(fetchingStatus) {
  return {
    type: UPDATE_FETCHING_STATUS,
    payload: fetchingStatus
  }
}

// Report when there has been an error with fetching the data.
export function fetchError(hasError, errorMessage) {
  return {
    type: FETCH_ERROR,
    payload: {hasError, errorMessage}
  }
}

// Successfully fetched data, pass data to the reducer to pass onto the components
export function fetchSuccessful(payload) {
  return {
    type: FETCH_SUCCESSFUL,
    payload
  };
}

// Make the API call to the GitHub Api and act apporiately.
export function fetchData(query=null) {
  return (dispatch) => {
    // Update the fetching status
    dispatch(updateFetchingStatus(true));

    // If query is empty, report error
    if (query === null || query === '') {
      dispatch(updateFetchingStatus(false));
      dispatch(fetchError(true, "Invalid query"));
    }
    else {
      // Make request and upate fetching status and fetchedData in the state
      const payload = axios.get(`https://api.github.com/search/repositories?q=${query}`);
      dispatch(fetchSuccessful(payload));
      dispatch(updateFetchingStatus(false));
    }
  }
}
