import Login from 'containers/Login';
import Registration from 'components/Registration';
import RestorePassword from 'containers/RestorePassword';
import BooksWrap from 'containers/BooksWrap';
import SingleBookCreateView from 'containers/SingleBookCreateView';
import Root from 'components/Root';

export default [
  {
    component: Root,
    routes: [
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
    ],
  },
];
