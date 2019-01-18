import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { fetchUser } from "../redux/actions/logInAction";

class LoginForm extends Component {
  handLogInFormSubmit = async event => {
    const formUserData = event.target;
    event.preventDefault();
    await this.props.fetchUser(formUserData);
    console.log(event.target);
  };
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handLogInFormSubmit}>
          <label htmlFor="email">
            Email: <input type="email" name="email" />
          </label>
          <br />
          <label htmlFor="password">
            Password: <input type="password" name="password" />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};

// const mapStateToProps = state => ({
//   fetchUser
// });

export default connect(
  null,
  { fetchUser }
)(LoginForm);
