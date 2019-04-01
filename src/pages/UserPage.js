import React from 'react';
import UserTemplate from 'components/user/UserTemplate/UserTemplate';
import UserHeaderContainer from 'containers/User/UserHeaderContainer';
import UserInfoHeaderContainer from 'containers/User/UserInfoHeaderContainer';
import UserContentContainer from 'containers/User/UserContentContainer';
/*
 * 글, 시리즈, 활동, 소개, 태그,
 */
const UserPage = () => {
  return (
    <UserTemplate header={<UserHeaderContainer />}>
      <UserInfoHeaderContainer />
      <UserContentContainer />
    </UserTemplate>
  );
};

export default UserPage;
