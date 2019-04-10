import React from 'react';
import './UserContent.scss';

const UserContent = ({ side, children }) => {
  return (
    <div className="UserContent">
      {side && <div className="side-wrapper">{side}</div>}
      <div className="content-wrapper">{children}</div>
    </div>
  );
};

export default UserContent;
