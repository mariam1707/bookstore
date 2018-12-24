// @flow
import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import type { PropsType } from './types';

const Login = ({ email, password, errors, handleChange, handleSubmit }: PropsType) => (
  <form onSubmit={handleSubmit}>
    <div className="container">
      <div className="auth-wrap">
        <div className="auth-input-wrap">
          <label htmlFor="email">
            <b>Email</b>
            <input
              type="text"
              placeholder="Enter your email"
              name="email"
              id="email"
              onChange={handleChange}
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
            <b>
              <FormattedMessage {...messages.password} />
            </b>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              id="pspasswordw"
              value={password}
              onChange={handleChange}
              className={classnames('form-control', {
                'is-invalid': errors.email,
              })}
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </label>
        </div>
        <button type="submit">
          <FormattedMessage {...messages.logIn} />
        </button>
        <Link className="nav-link" to="/restore">
          <FormattedMessage {...messages.restorePassword} />
        </Link>
      </div>
    </div>
  </form>
);

export default Login;
