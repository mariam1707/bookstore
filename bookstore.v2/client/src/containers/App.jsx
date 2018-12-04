// @flow
import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import SetDisplayName from 'recompose/setDisplayName';
import jwtDecode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { setCurrentUser, unsetCurrentUserSaga } from '../actions/auth';

import Menu from './Menu';
import BooksWrap from './BooksWrap';

declare var localStorage: Object;

type PropsType = {
  setCurrentUser: Function,
  unsetCurrentUserSaga: Function,
};

const mapDispatchToProps = {
  setCurrentUser,
  unsetCurrentUserSaga,
};
export default
@compose(
  SetDisplayName('App'),
  connect(
    null,
    mapDispatchToProps
  )
)
class extends React.Component<PropsType, null> {
  componentDidMount(): void {
    if (localStorage.jwtToken) {
      setAuthToken(localStorage.jwtToken);
      const decoded = jwtDecode(localStorage.jwtToken);
      this.props.setCurrentUser(decoded);

      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        this.props.unsetCurrentUserSaga();
        window.location.href = '/';
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <Menu unsetCurrentUserSaga = {this.props.unsetCurrentUserSaga}/>
        <BooksWrap />
      </React.Fragment>
    );
  }
}
