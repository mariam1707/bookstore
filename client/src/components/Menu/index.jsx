// flow
import React from 'react';
import { Link } from 'react-router-dom';
import isAdmin from 'utils/isAdmin';
import { FormattedMessage } from 'react-intl';
import { EN, RU } from 'constants/locale';
import messages from './messages';

const Menu = ({ user, handleLogout, isAuthenticated, localeChangeAction }) => {
  const userLinks = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item text-user-menu">
        <p>
          <FormattedMessage {...messages.welcome} />, {user.name}
        </p>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/" onClick={() => handleLogout()}>
          <FormattedMessage {...messages.logOut} />
        </Link>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          <FormattedMessage {...messages.logIn} />
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/registration">
          <FormattedMessage {...messages.signUp} />
        </Link>
      </li>
    </ul>
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
          data-target="#navbarsExample05"
          aria-controls="navbarsExample05"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {isAdmin(user.user_type) && (
          <>
            <Link className="btn btn-light" to="/create-book">
              <FormattedMessage {...messages.createbook} />
            </Link>
          </>
        )}
        <div className="collapse navbar-collapse" id="navbarsExample05">
          {isAuthenticated ? userLinks : guestLinks}
        </div>
        <div>
          <button type="button" className="btn btn-light" onClick={() => localeChangeAction(EN)}>
            English
          </button>
          <button type="button" className="btn btn-light" onClick={() => localeChangeAction(RU)}>
            Русский
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Menu;
