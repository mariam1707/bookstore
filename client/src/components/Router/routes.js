import React from 'react';
import Login from 'containers/Login';
import Registration from 'components/Registration';
import RestorePassword from 'containers/RestorePassword';
import BooksWrap from 'containers/BooksWrap';
import SingleBookCreateView from 'containers/SingleBookCreateView';

export default [
  {
    path: '/',
    exact: true,
    component: BooksWrap,
  },
  {
    path: '/login',
    exact: true,
    component: Login,
  },
  {
    path: '/registration',
    exact: true,
    component: Registration,
  },
  {
    path: '/restore',
    exact: true,
    component: RestorePassword,
  },
  {
    path: '/create-book',
    exact: true,
    component: SingleBookCreateView,
  },
  {
    path: '*',
    component: () => <div>404</div>,
  },
];
