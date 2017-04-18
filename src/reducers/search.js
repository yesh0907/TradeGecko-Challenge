import {
  UPDATE_QUERY,
  UPDATE_FETCHING_STATUS,
  FETCH_ERROR,
  FETCH_SUCCESSFUL,
  ERROR_DISPLAYED
} from '../actions';

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
    case UPDATE_QUERY:
      return {
        ...state,
        query: action.payload
      };
    case UPDATE_FETCHING_STATUS:
      return {
        ...state,
        fetchingData: action.payload
      };
    case ERROR_DISPLAYED:
      return {
        ...state,
        hasError: action.payload,
        errorMessage: ''
      };
    case FETCH_SUCCESSFUL:
      return {
        ...state,
        data: action.payload['data']['items'],
        fetchedData: true
      };
    case FETCH_ERROR:
      return {
        ...state,
        hasError: action.payload['hasError'],
        errorMessage: action.payload['errorMessage']
      };
    default:
      return state;
  }
}
