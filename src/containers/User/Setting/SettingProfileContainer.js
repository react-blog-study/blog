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

  render() {
    const { profile } = this.props;
    return <SettingProfileInfo profile={profile} />;
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
