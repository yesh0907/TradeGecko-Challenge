import { combineReducers } from 'redux';
import SearchReducer from './search';
import DetailReducer from './detail';

const rootReducer = combineReducers({
  search: SearchReducer,
  detail: DetailReducer
});

export default rootReducer;
