import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import LeftMenuTemplate from 'components/Base/LeftMenu/LeftMenuTemplate';

class LeftMenuContainer extends Component {
  render() {
    const { url } = this.props.match;
    return (
      <div>
        <LeftMenuTemplate url={url} />
      </div>
    );
  }
}

export default withRouter(LeftMenuContainer);
