import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import 'bootstrap';
import rootSaga from './saga/sagas';

import reducer from './reducers';

import App from './containers/App';
import Login from './components/Login';
import Registration from './components/Registration';

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
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
