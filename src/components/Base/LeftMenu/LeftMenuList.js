import React, { Component } from 'react';
import { IoMdTrendingUp as TrendingIcon } from 'react-icons/io/';
import { FaRegClock as RecentIcon } from 'react-icons/fa';
import { FiTag as TagIcon } from 'react-icons/fi/';
import LeftMenuItem from './LeftMenuItem';

import './LeftMenuList.scss';

class LeftMenuList extends Component {
  render() {
    const { url } = this.props;

    return (
      <div className="LeftMenuList">
        <LeftMenuItem icon={<TrendingIcon />} text="트렌딩" to="/trending" active={['/', '/trending'].indexOf(url) > -1} />
        <LeftMenuItem icon={<RecentIcon />} text="최신 포스트" to="/recent" active={url === '/recent'} />
        <LeftMenuItem icon={<TagIcon />} text="태그 목록" to="/tags" active={/^\/tags/.test(url)} />
      </div>
    );
  }
}

export default LeftMenuList;
