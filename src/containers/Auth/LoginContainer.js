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
    const { email, AuthActions } = this.props;
    try {
      await AuthActions.sendAuthEamil(email);

      /* 회원가입처리*/
      //history.push('/register');
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { email, sentEmail, sending, isUser } = this.props;
    const { handleChangeEmail, handleSendAuthEmail } = this;

    return (
      <LoginTemplate>
        <LoginForm email={email} sentEmail={sentEmail} sending={sending} isUser={isUser} onChangeEmail={handleChangeEmail} onSendAuthEmail={handleSendAuthEmail} />
      </LoginTemplate>
    );
  }
}

const enhance = compose(
  withRouter,
  connect(
    ({ auth, pender }) => ({
      email: auth.registerForm.email,
      sentEmail: auth.sentEmail,
      sending: pender.pending['auth/SEND_AUTH_EMAIL'],
      isUser: auth.isUser,
    }),
    dispatch => ({
      AuthActions: bindActionCreators(authActions, dispatch),
    }),
  ),
);

export default enhance(LoginContainer);
