import React from "react";
import RegisterContainer from "containers/Auth/RegisterContainer";
import PageTemplate from "components/Base/PageTemplate/PageTemplate";

/**
 * 회원가입 할 때 사용되는 페이지
 */
const RegisterPage = () => {
  return (
    <PageTemplate>
      <RegisterContainer />
    </PageTemplate>
  );
};

export default RegisterPage;
