import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import './LeftMenuItem.scss';

const LeftMenuItem = ({ icon, text, to, active }) => {
  return (
    <Link to={to}>
      <div className={cx('LeftMenuItem', { active })}>
        {icon}
        <div className="text">{text}</div>
      </div>
    </Link>
  );
};

export default LeftMenuItem;
