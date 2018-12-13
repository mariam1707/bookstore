// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import Menu from 'components/Menu';

import type { StateType, PropsType } from './types';

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

class MenuContainer extends React.Component<PropsType, StateType> {
  handleLogout = (e: SyntheticEvent<any>) => {
    e.preventDefault();
    this.props.unsetCurrentUserSaga();
  };

  render() {
    const { user, isAuthenticated } = this.props.auth;

    return <Menu user={user} isAuthenticated={isAuthenticated} handleLogout={this.handleLogout} />;
  }
}

export default connect(
  mapStateToProps,
  null
)(MenuContainer);
