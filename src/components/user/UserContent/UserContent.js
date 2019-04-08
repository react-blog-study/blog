import React from 'react';
import './UserContent.scss';

const UserContent = ({ children }) => {
  return (
    <div className="UserContent">
      <div className="content">{children}</div>
    </div>
  );
};

export default UserContent;
