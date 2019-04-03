import React from 'react';
import UserHeaderContainer from 'containers/User/UserHeaderContainer';
import SettingTemplate from 'components/user/Setting/SettingTemplate/SettingTemplate';
import SettingSections from 'containers/User/Setting/SettingSections';
/**
 * 개인정보 설정 페이지
 */
const SettingsPage = () => {
  return (
    <SettingTemplate header={<UserHeaderContainer />}>
      <SettingSections />
    </SettingTemplate>
  );
};

export default SettingsPage;
