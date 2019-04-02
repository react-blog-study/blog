import React from 'react';
import './Tabs.scss';
import { Link, withRouter } from 'react-router-dom';

const Tab = ({ match }) => {
  const { userId, tab } = match.params;

  return (
    <div className="Tabs">
      <Link className={!tab && 'active'} to={'/@' + userId}>
        글
      </Link>
      <Link className={tab === 'series' && 'active'} to={'/@' + userId + '/series'}>
        시리즈
      </Link>
      <Link className={tab === 'history' && 'active'} to={'/@' + userId + '/history'}>
        활동
      </Link>
      <Link className={tab === 'about' && 'active'} to={'/@' + userId + '/about'}>
        소개
      </Link>
    </div>
  );
};

export default withRouter(Tab);
