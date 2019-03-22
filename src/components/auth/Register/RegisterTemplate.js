import React from "react";
import "./RegisterTemplate.scss";
import { Link } from "react-router-dom";
const RegisterTemplate = ({ children }) => {
  return (
    <div className="RegisterTemplate">
      <div className="header">
        <Link className="link" to="/login">
          velog
        </Link>
        <div className="light">
          <span>/</span>회원가입
        </div>
      </div>
      <div className="section">{children}</div>
    </div>
  );
};

export default RegisterTemplate;
