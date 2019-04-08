import React from 'react';
import './Tabs.scss';
import { Link } from 'react-router-dom';
import cx from 'classnames';

const Tab = ({ userId, tab, children }) => {
  return (
    <div className="Tabs">
      <Link className={cx({ active: !tab })} to={`/@${userId}`}>
        글
      </Link>
      <Link className={cx({ active: tab === 'series' })} to={`/@${userId}/series`}>
        시리즈
      </Link>
      <Link className={cx({ active: tab === 'history' })} to={`/@${userId}/history`}>
        활동
      </Link>
      <Link className={cx({ active: tab === 'about' })} to={`/@${userId}/about`}>
        소개
      </Link>
    </div>
  );
};

export default Tab;
