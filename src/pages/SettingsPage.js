import React from 'react';
import UserTemplate from 'components/user/UserTemplate/UserTemplate';
import UserHeaderContainer from 'containers/User/UserHeaderContainer';
import SettingContainer from 'containers/User/SettingContainer';
/**
 * 개인정보 설정 페이지
 */
const SettingsPage = () => {
  return (
    <UserTemplate header={<UserHeaderContainer />}>
      <SettingContainer />
    </UserTemplate>
  );
};

export default SettingsPage;
