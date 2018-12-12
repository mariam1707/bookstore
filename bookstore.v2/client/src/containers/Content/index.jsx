// @flow
import React from 'react';
import { connect } from 'react-redux';
import Menu from '../Menu';
import BooksWrap from '../BooksWrap';
import { UnsetCurrentUserAction } from '../../actions/auth';

const App = ({ UnsetCurrentUserAction }: Function) => (
  <React.Fragment>
    <Menu unsetCurrentUserSaga={UnsetCurrentUserAction} />
    <BooksWrap />
  </React.Fragment>
);
const mapDispatchToProps = {
  UnsetCurrentUserAction,
};
export default connect(
  null,
  mapDispatchToProps
)(App);
