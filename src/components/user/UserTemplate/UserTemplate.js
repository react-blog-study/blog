import React from 'react';
import './UserTemplate.scss';

const UserTemplate = ({ header, children }) => {
  return (
    <div className="UserTemplate">
      <div className="header-area">{header}</div>
      <div className="main">{children}</div>
    </div>
  );
};

export default UserTemplate;
