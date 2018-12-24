// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import setDisplayName from 'recompose/setDisplayName';
import compose from 'recompose/compose';

import { submitRegistrationAction } from 'actions/auth';
import Registration from 'components/Registration';
import type { PropsType, StateType } from './types';

export default compose(
  setDisplayName('RegistrationContainer'),
  connect(
    state => ({
      errors: state.auth.errors,
    }),
    {
      submitRegistrationAction,
    }
  )
)(
  withRouter(
    class extends React.Component<PropsType, StateType> {
      static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.errors !== nextProps.errors) {
          return {
            ...prevState,
            errors: nextProps.errors,
          };
        }
        return null;
      }

      state = {
        email: '',
        name: '',
        password: '',
        password2: '',
        errors: {},
      };

      handleChange = e =>
        this.setState({
          ...this.state,
          [e.target.name]: e.target.value,
        });

      handleSubmit = e => {
        e.preventDefault();
        const { name, email, password, password2 } = this.state;
        const newUser = {
          name,
          email,
          password,
          password2,
        };
        this.props.submitRegistrationAction(newUser, this.props.history);
      };

      render() {
        const { email, name, password, password2, errors } = this.state;
        return (
          <Registration
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            errors={errors}
            email={email}
            name={name}
            password={password}
            password2={password2}
          />
        );
      }
    }
  )
);
