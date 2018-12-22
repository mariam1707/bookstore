import React from 'react';
import { FormattedMessage } from 'react-intl';
import classnames from 'classnames';
import messages from './messages';
import type { PropsType } from './types';

const Registration = ({
  handleSubmit,
  handleChange,
  errors,
  email,
  name,
  password,
  password2,
}: PropsType) => (
  <>
    <form onSubmit={handleSubmit}>
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
                onChange={handleChange}
                value={email}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </label>
          </div>
          <div className="auth-input-wrap">
            <label htmlFor="name">
              <b>
                <FormattedMessage {...messages.name} />
              </b>
              <input
                type="text"
                className={classnames('form-control', {
                  'is-invalid': errors.name,
                })}
                placeholder="Enter your full name"
                name="name"
                onChange={handleChange}
                value={name}
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </label>
          </div>
          <div className="auth-input-wrap">
            <label htmlFor="password">
              <b>
                <FormattedMessage {...messages.password} />
              </b>
              <input
                type="password"
                className={classnames('form-control', {
                  'is-invalid': errors.password,
                })}
                placeholder="Enter Password"
                name="password"
                value={password}
                onChange={handleChange}
              />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </label>
          </div>
          <div className="auth-input-wrap">
            <label htmlFor="password2">
              <b>
                <FormattedMessage {...messages.passwordConfirm} />
              </b>
              <input
                type="password"
                className={classnames('form-control', {
                  'is-invalid': errors.password2,
                })}
                placeholder="Confirm your password"
                name="password2"
                onChange={handleChange}
                value={password2}
              />
              {errors.password2 && <div className="invalid-feedback">{errors.password2}</div>}
            </label>
          </div>
          <button type="submit">
            <FormattedMessage {...messages.signUp} />
          </button>
        </div>
      </div>
    </form>
  </>
);

export default Registration;
