import React from 'react';
import './UserThumbnail.scss';
import defaultThumbnail from 'static/images/default_thumbnail.png';
const UserThumbnail = ({ onShowMenu }) => {
  return (
    <div className="UserThumbnail">
      <img src={defaultThumbnail} onClick={onShowMenu} alt="" />
    </div>
  );
};

export default UserThumbnail;
