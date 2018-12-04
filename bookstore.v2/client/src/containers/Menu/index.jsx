// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';

import { unsetCurrentUserSaga } from '../../actions/auth';
import isAdmin from '../../utils/isAdmin';
import type { StateType, PropsType } from './types';

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default
@compose(
  setDisplayName('Menu'),
  connect(
    mapStateToProps,
    null,
  )
)
class extends React.Component<PropsType, StateType> {
  static getDerivedStateFromProps(nextProps: Object, prevState: Object) {
    if (prevState.auth !== nextProps.auth) {
      return {
        ...prevState,
        auth: nextProps.auth,
      };
    }
    return null;
  }

  handleLogout = (e: SyntheticEvent<any>) => {
    e.preventDefault();
    this.props.unsetCurrentUserSaga();
  };

  render() {
    const { user, isAuthenticated } = this.state.auth;
    const userLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item text-user-menu">
          <p>Welcome, {user.name}</p>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/" onClick={this.handleLogout}>
            Logout
          </Link>
        </li>
      </ul>
    );
    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Log In
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/registration">
            Sign Up
          </Link>
        </li>
      </ul>
    );
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
          <Link className="navbar-brand" to="/">
            BookStore
          </Link>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample05"
            aria-controls="navbarsExample05"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {isAdmin(user.user_type) && (
            <>
              <Link className="btn btn-light" to="/create-book">
                Create a book
              </Link>
            </>
          )}
          <div className="collapse navbar-collapse" id="navbarsExample05">
            {isAuthenticated ? userLinks : guestLinks}
          </div>
        </nav>
      </header>
    );
  }
}
