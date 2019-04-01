import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from 'store/modules/user';
import * as baseActions from 'store/modules/base';
import { bindActionCreators } from 'redux';
import storage from 'lib/storage';
import UserHeaderTemplate from 'components/user/UserHeader/UserHeaderTemplate';
import ViewerHead from 'components/user/UserHeader/ViewerHead';

class UserHeaderContainer extends Component {
  handleShowUserMenu = () => {
    const { BaseActions } = this.props;
    BaseActions.showUserMenu();
  };

  handleHideUserMenu = () => {
    const { BaseActions } = this.props;
    BaseActions.hideUserMenu();
  };

  handleLogout = async () => {
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
    const { user, showUserMenu } = this.props;
    const { handleLogout, handleShowUserMenu, handleHideUserMenu } = this;
    return (
      <UserHeaderTemplate>
        <ViewerHead user={user} showUserMenu={showUserMenu} handleLogout={handleLogout} handleShowUserMenu={handleShowUserMenu} handleHideUserMenu={handleHideUserMenu} />
      </UserHeaderTemplate>
    );
  }
}

export default connect(
  ({ user, base }) => ({
    user: user,
    showUserMenu: base.showUserMenu,
  }),

  dispatch => ({
    UserActions: bindActionCreators(userActions, dispatch),
    BaseActions: bindActionCreators(baseActions, dispatch),
  }),
)(UserHeaderContainer);
