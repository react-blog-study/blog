import React, { Component } from 'react';
import RegisterTemplate from 'components/auth/Register/RegisterTemplate';
import RegisterForm from 'components/auth/Register/RegisterForm';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import * as authActions from 'store/modules/auth';
import * as userActions from 'store/modules/user';
import { isEmail, isLength, isAlphanumeric } from 'validator';
import { withRouter } from 'react-router-dom';
import storage from 'lib/storage';
import queryString from 'query-string';
class RegisterContainer extends Component {
  initialize = async () => {
    const { isSocial, history, location, AuthActions } = this.props;
    const { search } = location;
    const { code } = queryString.parse(search);

    if (!code && !isSocial) {
      history.push('/');
      return;
    }

    try {
      if (!isSocial) {
        await AuthActions.getCode(code);
      }
    } catch (e) {}
  };

  componentDidMount() {
    this.initialize();
  }

  setError = message => {
    const { AuthActions } = this.props;
    AuthActions.setError({ message });
  };

  validate = {
    username: value => {
      if (!isLength(value, { min: 1, max: 40 })) {
        this.setError('이름을 1~40자로 입력하세요.');
        return false;
      }
      return true;
    },

    email: value => {
      if (!isEmail(value)) {
        this.setError('이메일 형식이 아닙니다.');
        return false;
      }

      return true;
    },

    id: value => {
      if (!isAlphanumeric(value) || !isLength(value, { min: 4, max: 16 })) {
        this.setError('아이디는 3~16자의 영소문자, 숫자, - _ 가 허용됩니다.');
        return false;
      }

      return true;
    },
  };

  checkEmailExists = async email => {
    const { AuthActions } = this.props;
    try {
      await AuthActions.checkEmailExists(email);
      if (this.props.exists.email) {
        this.setError('이미 존재하는 이메일입니다.');
      } else {
        this.setError(null);
      }
    } catch (e) {
      console.log(e);
    }
  };

  checkIdExists = async userId => {
    const { AuthActions } = this.props;
    try {
      await AuthActions.checkIdExists(userId);
      if (this.props.exists.userId) {
        this.setError('이미 존재하는 이메일입니다.');
      } else {
        this.setError(null);
      }
    } catch (e) {
      console.log(e);
    }
  };

  handleRegister = async () => {
    const { registerForm, AuthActions, UserActions, error, registerToken, location, history } = this.props;
    const { username, email, userId, introduce } = registerForm;
    const { validate } = this;

    if (error) return;
    if (!validate['username'](username) || !validate['email'](email) || !validate['userId'](userId)) {
      return;
    }

    try {
      await AuthActions.localRegister({
        username,
        email,
        userId,
        introduce,
      });

      const loggedInfo = this.props.result;
      storage.set('loggedInfo', loggedInfo);
      UserActions.setLoggedInfo(loggedInfo);
      UserActions.setValidated(true);
      history.push('/');
    } catch (e) {
      if (e.response.status === 409) {
        const { key } = e.reponse.data;
        const message = key === 'email' ? '이미 존재하는 이메일입니다.' : '이미 존재하는 아이디입니다.';
        return this.setError(message);
      }
      this.setError('알 수 없는 에러가 발생했습니다.');
    }
  };

  hanldeChangeInfo = e => {
    const { name, value } = e.target;
    const { AuthActions } = this.props;
    AuthActions.changeInfo({ name, value });

    const validation = this.validate[name](value);
    if (!validation) return;
    if (name === 'email' || name === 'userId') {
      const check = name === 'email' ? this.checkEmailExists : this.checkIdExists;
      check(value);
    }
  };

  render() {
    const { registerForm } = this.props;
    const { hanldeChangeInfo, handleRegister } = this;
    return (
      <RegisterTemplate>
        <RegisterForm registerForm={registerForm} onChangeInfo={hanldeChangeInfo} onRegister={handleRegister} />
      </RegisterTemplate>
    );
  }
}

const enhance = compose(
  withRouter,
  connect(
    ({ auth }) => ({
      registerForm: auth.registerForm,
      exists: auth.exists,
      error: auth.error,
      result: auth.result,
      isSocial: auth.isSocial,
      registerToken: auth.registerToken,
    }),
    dispatch => ({
      AuthActions: bindActionCreators(authActions, dispatch),
      UserActions: bindActionCreators(userActions, dispatch),
    }),
  ),
);
export default enhance(RegisterContainer);
