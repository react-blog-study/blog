import React, { Component } from 'react';
import MainHeader from 'components/Base/MainHeader/MainHeader';
import LoginButton from 'components/Base/MainHeader/LoginButton';
import { connect } from 'react-redux';
import * as userActions from 'store/modules/user';
import * as baseActions from 'store/modules/base';
import { bindActionCreators } from 'redux';
import storage from 'lib/storage';
import UserThumbnail from 'components/Base/MainHeader/UserThumbnail';
import UserMenu from 'components/Base/MainHeader/UserMenu';

class MainHeaderContainer extends Component {
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
      <MainHeader>
        {user.logged ? (
          <div>
            <UserThumbnail thumbnail={user.loggedInfo.thumbnail} onShowMenu={handleShowUserMenu} />
            {showUserMenu && <UserMenu eventTypes="click" loggedInfo={user.loggedInfo} onLogout={handleLogout} onHideMenu={handleHideUserMenu} />}
          </div>
        ) : (
          <LoginButton />
        )}
      </MainHeader>
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
)(MainHeaderContainer);
