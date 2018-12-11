// @flow
import React from 'react';

import { Provider, connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { lifecycle, setDisplayName, compose } from 'recompose';
import 'bootstrap';

import jwtDecode from 'jwt-decode';

import setAuthToken from '../../utils/setAuthToken';
import { setCurrentUser, unsetCurrentUserSaga } from '../../actions/auth';

import App from '../App';
import Login from '../../components/Login';
import Registration from '../../components/Registration';
import RestorePassword from '../../components/RestorePassword';
import SingleBookCreateView from '../SingleBookCreateView';

import history from '../../history';
import store from '../../store';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/style.scss';
import 'react-datepicker/dist/react-datepicker.css';

declare var localStorage: Object;

type PropsType = {
  setCurrentUser: Function,
  unsetCurrentUserSaga: Function,
};


export default compose(
    setDisplayName<{}>('AppContainer'),
    lifecycle<{}, {}>({
    componentDidMount(): void {
        if (localStorage.jwtToken) {
            setAuthToken(localStorage.jwtToken);
            const decoded = jwtDecode(localStorage.jwtToken);
            this.props.setCurrentUser(decoded);

            const currentTime = Date.now() / 1000;
            if (decoded.exp < currentTime) {
                this.props.unsetCurrentUserSaga();
                window.location.href = '/';
            }
        }
    }
}),
)((): React.Node => (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/registration" component={Registration} />
            <Route path="/restore" component={RestorePassword} />
            <Route path="/create-book" component={SingleBookCreateView} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
//
// const mapDispatchToProps = {
//   setCurrentUser,
//   unsetCurrentUserSaga,
// };
//
// export default connect(
//   null,
//   mapDispatchToProps
// )(EntryPoint);
