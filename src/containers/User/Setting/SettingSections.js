import React, { Component } from 'react';
import SettingSection from 'components/user/Setting/SettingSecion/SettingSection';
import SettingProfileContainer from './SettingProfileContainer';
import SettingEmailContainer from './SettingEmailContainer';
import SettingEtcContainer from './SettingEtcContainer';
import SettingProfileEmailLinkContainer from './SettingProfileEmailLinkContainer';

class SettingSections extends Component {
  render() {
    return (
      <>
        <SettingSection title="프로필">
          <SettingProfileContainer />
          <SettingProfileEmailLinkContainer />
        </SettingSection>
        <SettingSection title="이메일">
          <SettingEmailContainer />
        </SettingSection>
        <SettingSection title="기타">
          <SettingEtcContainer />
        </SettingSection>
      </>
    );
  }
}

export default SettingSections;
