// @flow
import React from 'react';

import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import 'bootstrap';

import Login from 'containers/Login';
import Registration from 'components/Registration';
import RestorePassword from 'containers/RestorePassword';
// import Content from 'containers/Content';
import BooksWrap from 'containers/BooksWrap';
import SingleBookCreateView from 'containers/SingleBookCreateView';
import LanguageProvider from 'components/LanguageProvider';
import history from '../../helpers/history';
import store from '../../store';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/style.scss';
import 'react-datepicker/dist/react-datepicker.css';

const App = () => (
  <Provider store={store}>
    <LanguageProvider>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={BooksWrap} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
          <Route path="/restore" component={RestorePassword} />
          <Route path="/create-book" component={SingleBookCreateView} />
        </Switch>
      </ConnectedRouter>
    </LanguageProvider>
  </Provider>
);

export default App;
