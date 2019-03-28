import React, { Component } from 'react';
import RegisterTemplate from 'components/auth/Register/RegisterTemplate';
import RegisterForm from 'components/auth/Register/RegisterForm';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import * as authActions from 'store/modules/auth';
import * as userActions from 'store/modules/user';
import { isLength, isAlphanumeric } from 'validator';
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
        this.setError({ name: 'FIELD_RULE', payload: 'username' });
        return false;
      }
      return true;
    },
    userId: value => {
      if (!isAlphanumeric(value) || !isLength(value, { min: 4, max: 16 })) {
        this.setError({ name: 'FIELD_RULE', payload: 'userId' });
        return false;
      }

      return true;
    },

    short_intro: value => {
      if (!isLength(value, { max: 140 })) {
        this.setError({ name: 'FIELD_RULE', payload: 'short_intro' });
        return false;
      }

      return true;
    },
  };

  handleRegister = async () => {
    const { registerForm, AuthActions, UserActions, registerToken, isSocial, history } = this.props;
    const { username, userId, short_intro } = registerForm;
    const { validate } = this;

    // 값체크
    if (!validate['username'](username) || !validate['userId'](userId) || !validate['short_intro'](short_intro)) {
      console.log('값체크');

      return;
    }

    try {
      if (isSocial) {
        // 소셜 회원가입
      } else {
        await AuthActions.localRegister({ registerToken, registerForm });
      }

      const { authResult } = this.props;
      console.log(authResult);

      if (!authResult) return;
      const { user } = authResult;

      storage.set('loggedInfo', user);
      UserActions.setLoggedInfo(user);
      UserActions.setValidated(true);
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  hanldeChangeInfo = e => {
    const { name, value } = e.target;
    const { AuthActions } = this.props;
    AuthActions.changeInfo({ name, value });
  };

  render() {
    const { registerForm, isSocial, socialEmail } = this.props;
    const { hanldeChangeInfo, handleRegister } = this;
    return (
      <RegisterTemplate>
        <RegisterForm registerForm={registerForm} onChangeInfo={hanldeChangeInfo} onRegister={handleRegister} emailEditable={isSocial && !socialEmail} />
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
      authResult: auth.authResult,
      socialEmail: auth.verifySocialResult && auth.verifySocialResult.email,
      registerToken: auth.registerToken,
    }),
    dispatch => ({
      AuthActions: bindActionCreators(authActions, dispatch),
      UserActions: bindActionCreators(userActions, dispatch),
    }),
  ),
);
export default enhance(RegisterContainer);
