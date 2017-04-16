import { TRANSITION } from '../actions';

const initialState = {
  repo: {}
}

export default function detail(state=initialState, action) {
  switch(action.type) {
    case TRANSITION:
      return {
        ...state,
        repo: action.payload
      }
    default:
      return state;
  }
}
