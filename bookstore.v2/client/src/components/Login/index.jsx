import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import Menu from '../../containers/Menu';
import { submitLoginSaga } from '../../actions/auth';

class Login extends Component {
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
    const user = {
      email,
      password,
    };
    this.props.submitLoginSaga(user);
  };

  render() {
    const { email, password, errors } = this.state;
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
                  <b>Password</b>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    id="pspasswordw"
                    value={password}
                    onChange={this.handleChange}
                    className={classnames('form-control', {
                      'is-invalid': errors.email,
                    })}
                  />
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </label>
              </div>
              <button type="submit">Login</button>
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
  submitLoginSaga,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
