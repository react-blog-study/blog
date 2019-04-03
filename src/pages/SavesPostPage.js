import React from 'react';
import UserHeaderContainer from 'containers/User/UserHeaderContainer';
import SavePostContainer from 'containers/User/SavePostContainer';
import SavePostTemplate from 'components/user/SavePost/SavePostTemplate/SavePostTemplate';
/**
 * 임시 글 목록
 */
const SavesPostPage = () => {
  return (
    <SavePostTemplate header={<UserHeaderContainer />}>
      <SavePostContainer />
      <SavePostContainer />
      <SavePostContainer />
    </SavePostTemplate>
  );
};

export default SavesPostPage;
