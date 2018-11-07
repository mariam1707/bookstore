import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import 'bootstrap';
import booksSaga from './saga/bookSaga';

import reducer from './reducers';

import App from './containers/App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(reducer, enhancer);
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
sagaMiddleware.run(booksSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
