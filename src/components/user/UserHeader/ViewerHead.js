import React from 'react';
import { Link } from 'react-router-dom';
import UserThumbnail from 'components/Base/MainHeader/UserThumbnail';
import UserMenu from 'components/Base/MainHeader/UserMenu';
import './ViewerHead.scss';

const ViewerHead = ({ user, showUserMenu, handleShowUserMenu, handleLogout, handleHideUserMenu }) => {
  return (
    <div className="ViewerHead">
      <Link className="logo-area" to="/">
        velog
      </Link>

      {user.logged && (
        <div className="right-corner">
          <UserThumbnail thumbnail={user.loggedInfo.thumbnail} onShowMenu={handleShowUserMenu} />
          {showUserMenu && <UserMenu eventTypes="click" loggedInfo={user.loggedInfo} onLogout={handleLogout} onHideMenu={handleHideUserMenu} />}
        </div>
      )}
    </div>
  );
};

export default ViewerHead;
