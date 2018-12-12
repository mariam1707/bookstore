// @flow
import React from 'react';

import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import 'bootstrap';

import Content from '../Content';
import Login from '../../components/Login';
import Registration from '../../components/Registration';
import RestorePassword from '../../components/RestorePassword';
import SingleBookCreateView from '../SingleBookCreateView';

import history from '../../history';
import store from '../../store';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/style.scss';
import 'react-datepicker/dist/react-datepicker.css';

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Content} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/restore" component={RestorePassword} />
        <Route path="/create-book" component={SingleBookCreateView} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default App;
