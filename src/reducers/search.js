import { UPDATE_QUERY, FETCH_ERROR, FETCH_SUCCESSFUL } from '../actions';

const initialState = {
  query: '',
  data: [],
  results: [],
  fetchedData: false,
  hasError: false
}

export default function search(state=initialState, action) {
  switch(action.type) {
    case UPDATE_QUERY:
      return {
        ...state,
        query: action.payload
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
        hasError: true
      }
    default:
      return state;
  }
}
