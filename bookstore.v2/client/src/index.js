import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Route, Switch } from 'react-router';
import createSagaMiddleware from 'redux-saga';

import 'bootstrap';
import rootSaga from './saga/sagas';

import reducer from './reducers';

import App from './containers/App';
import Login from './components/Login';
import Registration from './components/Registration';
import RestorePassword from './components/RestorePassword';
import SingleBookCreateView from './containers/SingleBookCreateView';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.scss';
import 'react-datepicker/dist/react-datepicker.css';

const sagaMiddleware = createSagaMiddleware();
const history = createBrowserHistory();
const store = createStore(
  reducer(history),
  composeWithDevTools(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/restore" component={RestorePassword} />
        <Route path="/create-book" component={SingleBookCreateView} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
