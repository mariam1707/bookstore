import { combineReducers } from 'redux';
// import { connectRouter } from 'connected-react-router';
import { routerReducer as routing } from 'react-router-redux';
import books from './books';
import auth from './auth';
import pagination from './pagination';
import locale from './locale';
import { timer } from './timer';

export default () =>
  combineReducers({
    routing,
    // router: connectRouter(history),
    books,
    auth,
    pagination,
    locale,
    timer,
  });
