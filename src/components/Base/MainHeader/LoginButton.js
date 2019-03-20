import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LoginButton.scss";

class LoginButton extends Component {
  render() {
    return (
      <Link to="/login">
        <div className="LoginButton">로그인</div>
      </Link>
    );
  }
}

export default LoginButton;
