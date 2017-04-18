import {
  UPDATE_QUERY,
  UPDATE_FETCHING_STATUS,
  FETCH_ERROR,
  FETCH_SUCCESSFUL,
  ERROR_DISPLAYED
} from '../actions';    // Import the actions

// Create an initial state for the reducer
const initialState = {
  query: '',
  data: [],
  results: [],
  fetchingData: false,
  fetchedData: false,
  hasError: false,
  errorMessage: '',
}

export default function search(state=initialState, action) {
  switch(action.type) {
    // Update the query
    case UPDATE_QUERY:
      return {
        ...state,
        query: action.payload
      };
    // Update the status when fetching the data
    case UPDATE_FETCHING_STATUS:
      return {
        ...state,
        fetchingData: action.payload
      };
    // Change the error status once the error has been displayed
    case ERROR_DISPLAYED:
      return {
        ...state,
        hasError: action.payload,
        errorMessage: ''
      };
    // The data gathered was successful
    case FETCH_SUCCESSFUL:
      return {
        ...state,
        data: action.payload['data']['items'],
        fetchedData: true
      };
    // There was an error fetching the data
    case FETCH_ERROR:
      return {
        ...state,
        hasError: action.payload['hasError'],
        errorMessage: action.payload['errorMessage']
      };
    // Return the state by default
    default:
      return state;
  }
}
