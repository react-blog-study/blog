import React, { Component } from "react";
import LoginTemplate from "components/auth/Login/LoginTemplate";
import LoginForm from "components/auth/Login/LoginForm";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActions from "store/modules/auth";

class LoginContainer extends Component {
  handleChangeEmail = e => {
    const { name, value } = e.target;
    const { AuthActions } = this.props;
    AuthActions.changeInfo({ name, value });
  };

  handleSendAuthEmail = async () => {
    const { email, AuthActions, history } = this.props;
    try {
      await AuthActions.sendAuthEamil(email);
      const { isUser } = this.props;

      if (isUser) {
        /* 로그인 처리 */
      }

      /* 회원가입처리*/
      console.log(history);
      history.push("/register");
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { email } = this.props;
    const { handleChangeEmail, handleSendAuthEmail } = this;

    return (
      <LoginTemplate>
        <LoginForm
          email={email}
          onChangeEmail={handleChangeEmail}
          onSendAuthEmail={handleSendAuthEmail}
        />
      </LoginTemplate>
    );
  }
}

export default connect(
  ({ auth }) => ({
    email: auth.registerForm.email
  }),
  dispatch => ({
    AuthActions: bindActionCreators(authActions, dispatch)
  })
)(LoginContainer);
