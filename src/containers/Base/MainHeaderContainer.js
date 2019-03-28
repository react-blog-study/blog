import React, { Component } from 'react';
import MainHeader from 'components/Base/MainHeader/MainHeader';
import LoginButton from 'components/Base/MainHeader/LoginButton';
import { connect } from 'react-redux';
import * as userActions from 'store/modules/user';
import { bindActionCreators } from 'redux';
import storage from 'lib/storage';
import UserThumbnail from 'components/Base/MainHeader/UserThumbnail';

class MainHeaderContainer extends Component {
  hanldeLogout = async () => {
    const { UserActions } = this.props;
    try {
      await UserActions.logout();
    } catch (e) {
      console.log(e);
    }

    storage.remove('loggedInfo');
    window.location.href = '/'; //  홈페이지 새로고침
  };
  render() {
    const { user } = this.props;
    return (
      <MainHeader>
        {user.logged ? (
          <div>
            <UserThumbnail image={user.loggedInfo.thumbnail} /> <div onClick={this.handleLogout}>(로그아웃)</div>
          </div>
        ) : (
          <LoginButton />
        )}
      </MainHeader>
    );
  }
}

export default connect(
  ({ user }) => ({
    user: user,
  }),

  dispatch => ({
    UserActions: bindActionCreators(userActions, dispatch),
  }),
)(MainHeaderContainer);
