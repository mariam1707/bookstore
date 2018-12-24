// @flow
import React from 'react';
import classnames from 'classnames';
import type { PropsType } from './types';

const RestorePassword = ({ email, newPassword, handleChange, handleSubmit, errors }: PropsType) => (
  <form onSubmit={handleSubmit}>
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
            <b>Enter your new password</b>
            <input
              type="password"
              placeholder="Enter Password"
              name="newPassword"
              id="pspasswordw"
              value={newPassword}
              onChange={handleChange}
              className={classnames('form-control', {
                'is-invalid': errors.newPassword,
              })}
            />
            {errors.newPassword && <div className="invalid-feedback">{errors.newPassword}</div>}
          </label>
        </div>
        <button type="submit">Restore password</button>
      </div>
    </div>
  </form>
);

export default RestorePassword;
