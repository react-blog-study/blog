import React from 'react';
import './UserAbout.scss';

const UserAbout = ({ longIntro, self, onEditClick }) => {
  return (
    <div className="UserAbout">
      {longIntro ? (
        <>
          {self && (
            <div className="eit-btn-wrapper">
              <button>수정하기</button>
            </div>
          )}
        </>
      ) : (
        <div className="empty-about">
          <div className="text">소개가 작성되지 않았습니다.</div>
          {self && (
            <div className="btn-wapper">
              <button onClick={onEditClick}>작성하기</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserAbout;
