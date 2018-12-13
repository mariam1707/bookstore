import React, { Component } from 'react';
import { connect } from 'react-redux';

import Menu from 'containers/Menu';
import RestorePassword from 'components/RestorePassword';
import { setNewPasswordAction } from 'actions/auth';

class RestorePasswordContainer extends Component {
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
    newPassword: '',
    errors: {},
  };

  handleChange = e =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  handleSubmit = e => {
    e.preventDefault();
    const { email, newPassword } = this.state;
    const newUser = {
      email,
      newPassword,
    };
    this.props.setNewPasswordAction(newUser);
  };

  render() {
    const { email, newPassword, errors } = this.state;
    return (
      <div>
        <Menu />
        <RestorePassword
          email={email}
          newPassword={newPassword}
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
  setNewPasswordAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestorePasswordContainer);
