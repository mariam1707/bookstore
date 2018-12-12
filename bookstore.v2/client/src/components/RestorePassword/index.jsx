import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import Menu from 'containers/Menu';
import { setNewPasswordAction } from 'actions/auth';

class RestorePassword extends Component {
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
        <Menu />
        <form onSubmit={this.handleSubmit}>
          <div className="container">
            <div className="auth-wrap">
              <div className="auth-input-wrap">
                <label htmlFor="email">
                  <b>Email</b>
                  <input
                    type="text"
                    placeholder="Enter Username"
                    name="email"
                    id="email"
                    onChange={this.handleChange}
                    value={email}
                    className={classnames('form-control', {
                      'is-invalid': errors.email,
                    })}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </label>
              </div>
              <div className="auth-input-wrap">
                <label htmlFor="password">
                  <b>Enter your new password</b>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    name="newPassword"
                    id="pspasswordw"
                    value={newPassword}
                    onChange={this.handleChange}
                    className={classnames('form-control', {
                      'is-invalid': errors.newPassword,
                    })}
                  />
                  {errors.newPassword && (
                    <div className="invalid-feedback">{errors.newPassword}</div>
                  )}
                </label>
              </div>
              <button type="submit">Restore password</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
const mapDispatchToProps = {
  setNewPasswordAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestorePassword);
