import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as settingsActions from 'store/modules/settings';
import SettingProfileInfo from 'components/user/Setting/SettingProfileInfo/SettingProfileInfo';

class SettingContainer extends Component {
  initialize = async () => {
    const { user, SettingsActions } = this.props;
    if (!user) return;

    try {
      await SettingsActions.getProfile(user.userId);
    } catch {}
  };

  componentDidMount() {
    this.initialize();
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.user && this.props.user) {
      this.initialize();
    }
  }

  onUpdateProfile = ({ username, short_intro }) => {
    this.props.SettingsActions.updateProfile(username, short_intro);
  };

  render() {
    const { profile } = this.props;
    if (!profile) return null;
    return <SettingProfileInfo profile={profile} onUpdateProfile={this.onUpdateProfile} />;
  }
}

export default connect(
  ({ user, settings }) => ({
    user: user.loggedInfo,
    profile: settings.profile,
    uploadInfo: settings.uploadInfo,
  }),
  dispatch => ({
    SettingsActions: bindActionCreators(settingsActions, dispatch),
  }),
)(SettingContainer);
