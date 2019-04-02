import React, { Component } from 'react';
import Tabs from 'components/user/Tab/Tabs';
import UserContentTemplate from 'components/user/UserContent/UserContentTemplate';
class UserContentContainer extends Component {
  render() {
    return (
      <UserContentTemplate>
        <Tabs />
      </UserContentTemplate>
    );
  }
}

export default UserContentContainer;
