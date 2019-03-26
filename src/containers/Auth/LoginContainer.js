import React, { Component } from 'react';
import LoginTemplate from 'components/auth/Login/LoginTemplate';
import LoginForm from 'components/auth/Login/LoginForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from 'store/modules/auth';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import queryString from 'query-string';

class LoginContainer extends Component {
  handleChangeEmail = e => {
    const { name, value } = e.target;
    const { AuthActions } = this.props;
    AuthActions.changeInfo({ name, value });
  };

  componentWillUnmount() {
    const { AuthActions } = this.props;
    AuthActions.initializeForm();
  }

  componentDidMount() {
    const { location } = this.props;
    const query = queryString.parse(location.search);

    if (query.expired !== undefined) {
      // this.setError('세션에 만료되었습니다. 다시 로그인하세요.');
    }
  }

  setError = message => {
    const { AuthActions } = this.props;
    AuthActions.setError({
      message,
    });

    return false;
  };

  handleSendAuthEmail = async () => {
    const { email, AuthActions, history, location } = this.props;
    console.log(location);

    try {
      await AuthActions.sendAuthEamil(email);
      const { isUser } = this.props;

      if (isUser) {
        /* 로그인 처리 */
      }

      /* 회원가입처리*/
      history.push('/register');
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { email } = this.props;
    const { handleChangeEmail, handleSendAuthEmail } = this;

    return (
      <LoginTemplate>
        <LoginForm email={email} onChangeEmail={handleChangeEmail} onSendAuthEmail={handleSendAuthEmail} />
      </LoginTemplate>
    );
  }
}

const enhance = compose(
  withRouter,
  connect(
    ({ auth }) => ({
      email: auth.registerForm.email,
    }),
    dispatch => ({
      AuthActions: bindActionCreators(authActions, dispatch),
    }),
  ),
);

export default enhance(LoginContainer);
