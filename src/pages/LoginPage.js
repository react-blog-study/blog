import React from "react";
import LoginContainer from "containers/Auth/LoginContainer";
import PageTemplate from "components/Base/PageTemplate/PageTemplate";

/**
 * 로그인 할 때 사용되는 페이지
 */
const LoginPage = () => {
  return (
    <PageTemplate>
      <LoginContainer />
    </PageTemplate>
  );
};

export default LoginPage;
