import React, { Component } from 'react';
import './LeftMenuTemplate.scss';
import LeftMenuList from './LeftMenuList';

class LeftMenuTemplate extends Component {
  render() {
    const { url } = this.props;
    return (
      <div className="LeftMenuTemplate">
        <div className="Logo">velog</div>
        <div className="MainSearchBox">
          <input />
        </div>

        <div className="">
          <LeftMenuList url={url} />
        </div>

        <div className="place" />
        <div className="footer">서비스 정책</div>
      </div>
    );
  }
}

export default LeftMenuTemplate;
