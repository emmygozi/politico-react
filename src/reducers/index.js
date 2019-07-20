import { combineReducers } from 'redux';
import userReducer from './users';
import resultReducer from './result';

export default combineReducers({
  user: userReducer,
  results: resultReducer
});
