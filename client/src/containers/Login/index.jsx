// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import setDisplayName from 'recompose/setDisplayName';
import compose from 'recompose/compose';
import Login from 'components/Login';
import { setCurrentUserWatcherAction } from 'actions/auth';
import type { PropsType, StateType } from './types';

export default compose(
  setDisplayName('Login'),
  connect(
    state => ({
      auth: state.auth,
    }),
    {
      setCurrentUserWatcherAction,
    }
  )
)(
  class extends Component<PropsType, StateType> {
    state = {
      email: '',
      password: '',
      errors: {},
    };

    handleChange = e =>
      this.setState({
        ...this.state,
        [e.target.name]: e.target.value,
      });

    handleSubmit = e => {
      e.preventDefault();
      const { email, password } = this.state;
      const { setCurrentUserWatcherAction } = this.props;
      const user = {
        email,
        password,
      };
      setCurrentUserWatcherAction(user);
    };

    render() {
      const { email, password, errors } = this.state;
      return (
        <div>
          <Login
            email={email}
            password={password}
            errors={errors}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      );
    }
  }
);
