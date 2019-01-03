// @flow
import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import type { PropsType } from './types';
import './style.scss';

const Login = ({ email, password, errors, handleChange, handleSubmit }: PropsType) => (
  <form className="box" onSubmit={handleSubmit}>
    <p className="inscriptions">Email</p>
    <input
      type="text"
      name="email"
      id="email"
      onChange={handleChange}
      value={email}
      className={classnames('form-control', {
        'is-invalid': errors.email,
      })}
    />
    {errors.email && <div className="invalid-feedback">{errors.email}</div>}

    <p className="inscriptions">
      <FormattedMessage {...messages.password} />
    </p>
    <input
      type="password"
      name="password"
      id="pspasswordw"
      value={password}
      onChange={handleChange}
      className={classnames('form-control', {
        'is-invalid': errors.email,
      })}
    />
    {errors.password && <div className="invalid-feedback">{errors.password}</div>}

    <button type="submit">
      <FormattedMessage {...messages.logIn} />
    </button>
    <Link className="nav-link" to="/restore">
      <FormattedMessage {...messages.restorePassword} />
    </Link>
  </form>
);

export default Login;
