import React from "react";
import AuthTemplate from "components/Auth/AuthTemplate";
import AuthForm from "components/Auth/AuthForm";

/**
 * 회원가입 할 때 사용되는 페이지
 */
const RegisterPage = () => {
  return (
    <AuthTemplate>
      <AuthForm>RegisterPage</AuthForm>
    </AuthTemplate>
  );
};

export default RegisterPage;
