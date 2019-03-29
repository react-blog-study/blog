import React from 'react';
import './UserMenuItem.scss';
import { Link } from 'react-router-dom';
const UserMenuItem = ({ children, onClick, to }) => {
  if (!to) {
    return (
      <div className="user-menu-item" onClick={onClick}>
        {children}
      </div>
    );
  }

  return (
    <Link to={to}>
      <div className="user-menu-item" onClick={onClick}>
        {children}
      </div>
    </Link>
  );
};

export default UserMenuItem;
