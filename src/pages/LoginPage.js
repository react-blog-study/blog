import React from "react";
import AuthTemplate from "components/auth/AuthTemplage";
import AuthForm from "components/auth/AuthForm";

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
