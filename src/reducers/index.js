import { combineReducers } from 'redux';
import userReducer from './users';
import resultReducer from './result';
import candidateReducer from './candidate';

export default combineReducers({
  user: userReducer,
  results: resultReducer,
  candidate: candidateReducer
});
