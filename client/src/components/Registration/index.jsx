import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';
import Menu from '../../containers/Menu';
import { submitRegistrationAction } from '../../actions/auth';
import messages from './messages';

class Registration extends Component {
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
      <div>
        <Menu />
        <form onSubmit={this.handleSubmit}>
          <div className="container">
            <div className="auth-wrap">
              <div className="auth-input-wrap">
                <label htmlFor="email">
                  <b>Email</b>
                  <input
                    className={classnames('form-control', {
                      'is-invalid': errors.email,
                    })}
                    type="text"
                    placeholder="Enter email"
                    name="email"
                    onChange={this.handleChange}
                    value={email}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </label>
              </div>
              <FormattedMessage {...messages.test} />
              <div className="auth-input-wrap">
                <label htmlFor="name">
                  <b>Name</b>
                  <input
                    type="text"
                    className={classnames('form-control', {
                      'is-invalid': errors.name,
                    })}
                    placeholder="Enter your full name"
                    name="name"
                    onChange={this.handleChange}
                    value={name}
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </label>
              </div>
              <div className="auth-input-wrap">
                <label htmlFor="password">
                  <b>Password</b>
                  <input
                    type="password"
                    className={classnames('form-control', {
                      'is-invalid': errors.password,
                    })}
                    placeholder="Enter Password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                  />
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </label>
              </div>
              <div className="auth-input-wrap">
                <label htmlFor="password2">
                  <b>Confirm your password</b>
                  <input
                    type="password"
                    className={classnames('form-control', {
                      'is-invalid': errors.password2,
                    })}
                    placeholder="Confirm your password"
                    name="password2"
                    onChange={this.handleChange}
                    value={password2}
                  />
                  {errors.password2 && <div className="invalid-feedback">{errors.password2}</div>}
                </label>
              </div>
              <button type="submit">Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errors: state.auth.errors,
  };
}
const mapDispatchToProps = {
  submitRegistrationAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Registration));
