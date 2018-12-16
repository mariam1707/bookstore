import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import books from './books';
import auth from './auth';
import pagination from './pagination';
import locale from './locale';

export default history =>
  combineReducers({
    router: connectRouter(history),
    books,
    auth,
    pagination,
    locale,
  });
