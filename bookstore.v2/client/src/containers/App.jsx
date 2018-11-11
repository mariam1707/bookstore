import React from 'react';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { setCurrentUser } from '../actions/auth';

import Menu from './Menu';
import BooksWrap from './BooksWrap';

class App extends React.Component {
  componentDidMount() {
    if (localStorage.jwtToken) {
      setAuthToken(localStorage.jwtToken);
      const decoded = jwtDecode(localStorage.jwtToken);
      this.props.setCurrentUser(decoded);
    }
  }

  render() {
    return (
      <React.Fragment>
        <Menu />
        <BooksWrap />
      </React.Fragment>
    );
  }
}
const mapDispatchToProps = {
  setCurrentUser,
};

export default connect(
  null,
  mapDispatchToProps
)(App);
