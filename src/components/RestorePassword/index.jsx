// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';
import classnames from 'classnames';
import type { PropsType } from './types';
import messages from './messages';
import './style.scss';

const RestorePassword = ({ email, newPassword, handleChange, handleSubmit, errors }: PropsType) => (
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
      <FormattedMessage {...messages.newPassword} />
    </p>
    <input
      type="password"
      name="newPassword"
      id="pspasswordw"
      value={newPassword}
      onChange={handleChange}
      className={classnames('form-control', {
        'is-invalid': errors.newPassword,
      })}
    />
    {errors.newPassword && <div className="invalid-feedback">{errors.newPassword}</div>}

    <button type="submit">
      <FormattedMessage {...messages.restorePassword} />
    </button>
  </form>
);

export default RestorePassword;
