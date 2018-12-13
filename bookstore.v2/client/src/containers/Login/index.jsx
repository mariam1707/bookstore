import React, { Component } from 'react';
import { connect } from 'react-redux';

import Menu from 'containers/Menu';
import Login from 'components/Login';
import { setCurrentUserWatcherAction } from 'actions/auth';

class LoginContainer extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.errors !== nextProps.auth.errors) {
      return {
        ...prevState,
        errors: nextProps.auth.errors,
      };
    }
    return null;
  }

  state = {
    email: '',
    password: '',
    errors: {},
  };

  handleChange = e =>
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const { setCurrentUserWatcherAction } = this.props;
    const user = {
      email,
      password,
    };
    setCurrentUserWatcherAction(user);
  };

  render() {
    const { email, password, errors } = this.state;
    return (
      <div>
        <Menu />
        <Login
          email={email}
          password={password}
          errors={errors}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

const mapDispatchToProps = {
  setCurrentUserWatcherAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
