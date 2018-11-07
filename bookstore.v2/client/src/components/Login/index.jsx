import React, { Component } from 'react';

import Menu from '../../containers/Menu';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = e =>
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <Menu />
        <form action="">
          <div className="container">
            <div className="login-wrap">
              <div>
                <label htmlFor="email">
                  <b>Email</b>
                  <input
                    type="text"
                    placeholder="Enter Username"
                    name="email"
                    id="email"
                    onChange={this.handleChange}
                    value={email}
                    required
                  />
                </label>
              </div>
              <div>
                <label htmlFor="password">
                  <b>Password</b>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    id="pspasswordw"
                    value={password}
                    onChange={this.handleChange}
                    required
                  />
                </label>
              </div>
              <button type="submit">Login</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
