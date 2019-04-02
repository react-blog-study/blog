import React from 'react';
import UserMenuItem from './UserMenuItem';
import './UserMenu.scss';
import onClickOutside from 'react-onclickoutside';

const UserMenu = ({ loggedInfo, onLogout, onHideMenu }) => {
  return (
    <div className="user-menu-wrapper">
      <div className="user-menu-positioner">
        <div className="rotated-square" />
        <div className="user-menu" onClick={onHideMenu}>
          <div className="menu-items">
            <UserMenuItem to={'/@' + loggedInfo.userId}>내 벨로그</UserMenuItem>
            <div className="separated" />
            <UserMenuItem to="/write">새 글 작성</UserMenuItem>
            <UserMenuItem to="/saves">임시 글</UserMenuItem>
            <div className="separated" />
            <UserMenuItem to="/settings">설정</UserMenuItem>
            <UserMenuItem onClick={onLogout}>로그아웃</UserMenuItem>
          </div>
        </div>
      </div>
    </div>
  );
};

export default onClickOutside(UserMenu, {
  handleClickOutside: function(instance) {
    return instance.props.onHideMenu;
  },
});
