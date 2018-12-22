// flow
import * as React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';

import RestorePassword from 'components/RestorePassword';
import { setNewPasswordAction } from 'actions/auth';
import type { StateType, PropsType } from './types';

export default compose(
  setDisplayName('RestorePasswordContainer'),
  connect(
    state => ({
      auth: state.auth,
    }),
    {
      setNewPasswordAction,
    }
  )
)(
  class extends React.Component<PropsType, StateType> {
    static getDerivedStateFromProps(nextProps, prevState) {
      if (prevState.errors !== nextProps.auth.errors) {
        return {
          ...prevState,
          errors: nextProps.auth.errors,
        };
      }
      return null;
    }

    state = {
      email: '',
      newPassword: '',
      errors: {},
    };

    handleChange = e =>
      this.setState({
        [e.target.name]: e.target.value,
      });

    handleSubmit = e => {
      e.preventDefault();
      const { email, newPassword } = this.state;
      const newUser = {
        email,
        newPassword,
      };
      this.props.setNewPasswordAction(newUser);
    };

    render() {
      const { email, newPassword, errors } = this.state;
      return (
        <div>
          <RestorePassword
            email={email}
            newPassword={newPassword}
            errors={errors}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      );
    }
  }
);
