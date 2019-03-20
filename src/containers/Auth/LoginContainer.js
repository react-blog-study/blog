import React, { Component } from "react";
import LoginTemplate from "components/auth/Login/LoginTemplate";
import LoginForm from "components/auth/Login/LoginForm";

class LoginContainer extends Component {
  render() {
    return (
      <LoginTemplate>
        <LoginForm />
      </LoginTemplate>
    );
  }
}

export default LoginContainer;
