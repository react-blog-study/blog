import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from 'store/modules/auth';
import * as userActions from 'store/modules/user';
import queryString from 'query-string';
import storage from 'lib/storage';

class EmailLogin extends Component {
  initialize = async () => {
    const { AuthActions, UserActions, location, history } = this.props;
    const { search } = location;
    const { code } = queryString.parse(search);

    try {
      await AuthActions.getCode(code);
      const { email } = this.props;
      await AuthActions.localLogin(email);
      const { authResult } = this.props;
      if (!authResult) {
        return;
      }

      const { user } = authResult;
      storage.set('loggedInfo', user);
      UserActions.setLoggedInfo(user);
      UserActions.setValidated(true);
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount() {
    this.initialize();
  }

  render() {
    return <div />;
  }
}

export default connect(
  ({ auth, user }) => ({
    isSocial: auth.isSocial,
    email: auth.registerForm.email,
    authResult: auth.authResult,
  }),
  dispatch => ({
    AuthActions: bindActionCreators(authActions, dispatch),
    UserActions: bindActionCreators(userActions, dispatch),
  }),
)(EmailLogin);
