import React from "react";
import "./AuthTemplate.scss";

/**
 * 회원가입/로그인 페이지의 레이아웃을 담당하는 컴포넌트입니다.
 */
const AuthTemplate = ({ children }) => {
  return <div className="AuthTemplate">{children}</div>;
};

export default AuthTemplate;
