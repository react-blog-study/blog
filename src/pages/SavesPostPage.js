import React from 'react';
import UserTemplate from 'components/user/UserTemplate/UserTemplate';
import UserHeaderContainer from 'containers/User/UserHeaderContainer';
import SavePostContainer from 'containers/User/SavePostContainer';
/**
 * 임시 글 목록
 */
const SavesPostPage = () => {
  return (
    <UserTemplate header={<UserHeaderContainer />}>
      <SavePostContainer />
    </UserTemplate>
  );
};

export default SavesPostPage;
