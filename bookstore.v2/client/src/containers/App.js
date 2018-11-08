import React from 'react';
import { connect } from 'react-redux';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { setCurrentUser } from '../actions/auth';

import Menu from './Menu';
import BooksWrap from './BooksWrap';

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  // dispatch setcurrentuser with decoded
}

const App = () => (
  <React.Fragment>
    <Menu />
    <BooksWrap />
  </React.Fragment>
);

export default App;
