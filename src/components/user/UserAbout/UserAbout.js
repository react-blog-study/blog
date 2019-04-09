import React from 'react';
import './UserAbout.scss';
import MarkdownRender from '../../common/MarkdownRender/MarkdownRender';

const UserAbout = ({ longIntro, self, onEditClick }) => {
  console.log(longIntro);

  return (
    <div className="UserAbout">
      {longIntro ? (
        <>
          {self && (
            <div className="edit-btn-wrapper">
              <button onClick={onEditClick}>수정하기</button>
            </div>
          )}
          <MarkdownRender body={longIntro} />
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
