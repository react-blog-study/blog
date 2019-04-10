import React, { Component } from 'react';
import UserInfoHeader from 'components/user/UserHeader/UserInfoHeader';
import { connect } from 'react-redux';

class UserInfoHeaderContainer extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.profile !== this.props.profile) {
    }
  }
  render() {
    const { profile } = this.props;
    if (!profile) return <UserInfoHeader.Placeholder />;
    return <UserInfoHeader profile={profile} />;
  }
}

export default connect(
  ({ profile }) => ({
    profile: profile.profile,
  }),
  dispatch => ({}),
)(UserInfoHeaderContainer);
