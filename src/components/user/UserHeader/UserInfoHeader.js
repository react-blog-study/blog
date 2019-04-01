import React from 'react';
import './UserInfoHeader.scss';
import defaultThumbnail from 'static/images/default_thumbnail.png';
const UserInfoHeader = () => {
  return (
    <div className="UserInfoHeader">
      <img src={defaultThumbnail} alt="" />
      <div className="userInfo">
        <section className="top">
          <div className="userId">@yuncheol</div>
        </section>
        <section className="profile-content">
          <h2>서윤철</h2>
          <p>안녕하세요.</p>
          <div className="social-info">구글</div>
        </section>
      </div>
    </div>
  );
};

export default UserInfoHeader;
