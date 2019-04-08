import React, { Component } from 'react';
import SettingProfileEmailLinks from 'components/user/Setting/SettingProfileEmailLinks/SettingProfileEmailLink';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as settingActions from 'store/modules/settings';
import { toast } from 'react-toastify';

class SettingProfileEmailLinkContainer extends Component {
  onUpdate = async profileLinks => {
    const message = message => <div style={{ fontSize: '1.1rem' }}>{message}</div>;
    try {
      const { SettingActions } = this.props;
      await SettingActions.updateProfileLinks(profileLinks);
      toast(message('소셜 정보 업데이트 완료'), { type: 'success' });
    } catch (e) {
      console.log(e);
      toast(message('잘못된 정보입니다.'), { type: 'error' });
    }
  };
  render() {
    const { profileLinks } = this.props;
    return <SettingProfileEmailLinks profileLinks={profileLinks} onUpdate={this.onUpdate} />;
  }
}

export default connect(
  ({ settings }) => ({
    profileLinks: settings.profile && settings.profile.profile_links,
  }),
  dispatch => ({
    SettingActions: bindActionCreators(settingActions, dispatch),
  }),
)(SettingProfileEmailLinkContainer);
