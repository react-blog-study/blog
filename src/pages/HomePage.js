import React from "react";
import PageTemplate from "components/Base/PageTemplate/PageTemplate";
import LeftMenuContainer from "containers/Base/LeftMenuContainer";
import MainHeaderContainer from "containers/Base/MainHeaderContainer";
import MainTemplate from "components/Base/Main/MainTemplate";
import MainContentTemplate from "components/Base/Main/MainContentTemplate";
/*
 *  트렌딩, 최신포스트, 태그목록
 */
const HomePage = () => {
  return (
    <PageTemplate>
      <LeftMenuContainer />
      <MainTemplate>
        <MainHeaderContainer />
        <MainContentTemplate />
      </MainTemplate>
    </PageTemplate>
  );
};

export default HomePage;
