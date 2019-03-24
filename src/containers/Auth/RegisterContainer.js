import React, { Component } from "react";
import RegisterTemplate from "components/auth/Register/RegisterTemplate";
import RegisterForm from "components/auth/Register/RegisterForm";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import * as authActions from "store/modules/auth";
import { isEmail, isLength, isAlphanumeric } from "validator";
import { withRouter } from "react-router-dom";

class RegisterContainer extends Component {
  setError = message => {
    const { AuthActions } = this.props;
    AuthActions.setError({ message });
  };

  validate = {
    username: value => {
      if (!isLength(value, { min: 1, max: 40 })) {
        this.setError("이름을 1~40자로 입력하세요.");
        return false;
      }
      return true;
    },

    email: value => {
      if (!isEmail(value)) {
        this.setError("이메일 형식이 아닙니다.");
        return false;
      }

      return true;
    },

    id: value => {
      if (!isAlphanumeric(value) || !isLength(value, { min: 4, max: 16 })) {
        this.setError("아이디는 3~16자의 영소문자, 숫자, - _ 가 허용됩니다.");
        return false;
      }

      return true;
    }
  };

  handleRegister = async () => {
    const { registerForm, AuthActions, error, history } = this.props;
    const { username, email, id, introduce } = registerForm;
    const { validate } = this;

    if (error) return;
    if (
      !validate["username"](username) ||
      !validate["email"](email) ||
      !validate["id"](id)
    ) {
      return;
    }

    try {
      await AuthActions.localRegister({
        username,
        email,
        id,
        introduce
      });

      const loggedInfo = this.props.result;
      console.log(loggedInfo);
      history.push("/");
    } catch (e) {
      if (e.response.status === 409) {
        const { key } = e.reponse.data;
        const message =
          key === "email"
            ? "이미 존재하는 이메일입니다."
            : "이미 존재하는 아이디입니다.";
        return this.setError(message);
      }
      this.setError("알 수 없는 에러가 발생했습니다.");
    }
  };

  hanldeChangeInfo = e => {
    const { name, value } = e.target;
    const { AuthActions } = this.props;
    AuthActions.changeInfo({ name, value });
  };

  render() {
    const { registerForm } = this.props;
    const { hanldeChangeInfo, handleRegister } = this;
    return (
      <RegisterTemplate>
        <RegisterForm
          registerForm={registerForm}
          onChangeInfo={hanldeChangeInfo}
          onRegister={handleRegister}
        />
      </RegisterTemplate>
    );
  }
}

const enhance = compose(
  withRouter,
  connect(
    ({ auth }) => ({
      error: auth.error,
      registerForm: auth.registerForm
    }),
    dispatch => ({
      AuthActions: bindActionCreators(authActions, dispatch)
    })
  )
);
export default enhance(RegisterContainer);
