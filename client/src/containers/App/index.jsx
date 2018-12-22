// @flow
import React from 'react';

import { Provider } from 'react-redux';
import 'bootstrap';
import Router from 'components/Router';
import LanguageProvider from 'components/LanguageProvider';
import history from 'helpers/history';
import store from '../../store';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'css/style.scss';
// import 'react-datepicker/dist/react-datepicker.css';

const App = () => (
  <Provider store={store}>
    <LanguageProvider>
      <Router history={history} />
    </LanguageProvider>
  </Provider>
);

export default App;
