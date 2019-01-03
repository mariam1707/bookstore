// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import isAdmin from 'utils/isAdmin';
import { FormattedMessage } from 'react-intl';
import { EN, RU } from 'constants/locale';
import messages from './messages';
import type { PropsType } from './types';
import './style.scss';

const Menu = ({ user, handleLogout, isAuthenticated, localeChangeAction }: PropsType) => {
  const userLinks = (
    <div className="userLinks">
      <p className="welcome-text">
        <FormattedMessage {...messages.welcome} />, {user.name}
      </p>
      <p className="no-margin">
        <Link className="nav-link" to="/" onClick={() => handleLogout()}>
          <FormattedMessage {...messages.logOut} />
        </Link>
      </p>
    </div>
  );
  const guestLinks = (
    <div className="guestLinks">
      <p className="no-margin">
        <Link className="nav-link" to="/login">
          <FormattedMessage {...messages.logIn} />
        </Link>
      </p>
      <p className="no-margin">
        <Link className="nav-link" to="/registration">
          <FormattedMessage {...messages.signUp} />
        </Link>
      </p>
    </div>
  );
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <Link className="navbar-brand" to="/">
          <FormattedMessage {...messages.header} />
        </Link>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#menuDropDown"
          aria-controls="menuDropDown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="menuDropDown">
          {isAdmin(user.user_type) && (
            <div className="create-book-wrapper">
              <Link className="btn btn-light" to="/create-book">
                <FormattedMessage {...messages.createbook} />
              </Link>
            </div>
          )}
          <div className="header-links-wrapper">
            {isAuthenticated ? userLinks : guestLinks}
            <div className="language-wrapper">
              <button
                type="button"
                className="btn btn-light"
                onClick={() => localeChangeAction(EN)}
              >
                English
              </button>
              <button
                type="button"
                className="btn btn-light"
                onClick={() => localeChangeAction(RU)}
              >
                Русский
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Menu;
