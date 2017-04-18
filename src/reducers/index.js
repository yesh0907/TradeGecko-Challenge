import { combineReducers } from 'redux';
import SearchReducer from './search';

// Make a root reducer that can handle more than one reducer
const rootReducer = combineReducers({
  search: SearchReducer
});

export default rootReducer;
