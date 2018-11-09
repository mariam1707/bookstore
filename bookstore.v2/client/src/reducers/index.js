import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import books from './books';
import auth from './auth';

export default combineReducers({
  routing: routerReducer,
  books,
  auth,
});
