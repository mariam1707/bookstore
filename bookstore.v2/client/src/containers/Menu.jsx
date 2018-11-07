import React from 'react';
import { Link } from 'react-router-dom';
import CreateBook from './CreateBook';

const Menu = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="nav-link" to="/">
        BookStore
      </Link>
      <button className="navbar-toggler" type="button">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarsExample05">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <CreateBook />
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Логин
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/registration">
              Регистрация
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Menu;
