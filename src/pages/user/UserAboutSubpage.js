import React, { Component } from 'react';
import UserAboutContainer from 'containers/User/UserAboutContainer';
class UserAboutSubpage extends Component {
  render() {
    return <UserAboutContainer userId={this.props.match.userId}>UserAboutSubpage</UserAboutContainer>;
  }
}

export default UserAboutSubpage;
