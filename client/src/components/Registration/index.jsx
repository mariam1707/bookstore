import React from 'react';
import { FormattedMessage } from 'react-intl';
import classnames from 'classnames';
import messages from './messages';
import type { PropsType } from './types';
import './style.scss';

const Registration = ({
  handleSubmit,
  handleChange,
  errors,
  email,
  name,
  password,
  password2,
}: PropsType) => (
  <form className="box" onSubmit={handleSubmit}>
    <p className="inscriptions">Email</p>
    <input
      className={classnames('form-control', {
        'is-invalid': errors.email,
      })}
      type="text"
      name="email"
      onChange={handleChange}
      value={email}
    />
    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
    <p className="inscriptions">
      <FormattedMessage {...messages.name} />
    </p>
    <input
      type="text"
      className={classnames('form-control', {
        'is-invalid': errors.name,
      })}
      name="name"
      onChange={handleChange}
      value={name}
    />
    {errors.name && <div className="invalid-feedback">{errors.name}</div>}

    <p className="inscriptions">
      <FormattedMessage {...messages.password} />
    </p>
    <input
      type="password"
      className={classnames('form-control', {
        'is-invalid': errors.password,
      })}
      name="password"
      value={password}
      onChange={handleChange}
    />
    {errors.password && <div className="invalid-feedback">{errors.password}</div>}

    <p className="inscriptions">
      <FormattedMessage {...messages.passwordConfirm} />
    </p>
    <input
      type="password"
      className={classnames('form-control', {
        'is-invalid': errors.password2,
      })}
      name="password2"
      onChange={handleChange}
      value={password2}
    />
    {errors.password2 && <div className="invalid-feedback">{errors.password2}</div>}

    <button type="submit">
      <FormattedMessage {...messages.signUp} />
    </button>
  </form>
);

export default Registration;
