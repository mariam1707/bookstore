// @flow
import React from 'react';
import { connect } from 'react-redux';
import Menu from './Menu';
import BooksWrap from './BooksWrap';
import { unsetCurrentUserSaga } from '../actions/auth';

const App = ({ unsetCurrentUserSaga }: Function) => (
  <React.Fragment>
    <Menu unsetCurrentUserSaga={unsetCurrentUserSaga} />
    <BooksWrap />
  </React.Fragment>
);
const mapDispatchToProps = {
  unsetCurrentUserSaga,
};
export default connect(mapDispatchToProps)(App);
