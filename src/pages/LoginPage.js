import React from "react";
import AuthTemplate from "components/Auth/AuthTemplate";
import AuthForm from "components/Auth/AuthForm";

/**
 * 로그인 할 때 사용되는 페이지
 */
const LoginPage = () => {
  return (
    <AuthTemplate>
      <AuthForm />
    </AuthTemplate>
  );
};

export default LoginPage;
