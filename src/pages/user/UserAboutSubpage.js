import React, { Component } from 'react';
import UserAboutContainer from 'containers/User/UserAboutContainer';
class UserAboutSubpage extends Component {
  render() {
    const { userId } = this.props.match.params;
    return <UserAboutContainer userId={userId}>UserAboutSubpage</UserAboutContainer>;
  }
}

export default UserAboutSubpage;
