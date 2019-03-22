import React from "react";
import "./RegisterForm.scss";
import { FaArrowRight } from "react-icons/fa";
const RegisterForm = ({ registerForm, onChangeInfo }) => {
  const { username, email, id, introduce } = registerForm;

  return (
    <div className="RegisterForm">
      <div className="formHeader">기본 회원정보 등록</div>
      <div className="form">
        <div className="lable-input">
          <div className="label">
            이름<span>*</span>
          </div>
          <input
            name="username"
            value={username}
            onChange={onChangeInfo}
            placeholder="이름을 입력하세요"
          />
        </div>
        <div className="lable-input">
          <div className="label">
            이메일<span>*</span>
          </div>
          <input
            name="email"
            value={email}
            onChange={onChangeInfo}
            placeholder="이메일을 입력하세요"
          />
        </div>
        <div className="lable-input">
          <div className="label">
            아이디<span>*</span>
          </div>
          <input
            name="id"
            value={id}
            onChange={onChangeInfo}
            placeholder="아이디을 입력하세요"
          />
        </div>
        <div className="lable-input">
          <div className="label">한줄소개</div>
          <input
            name="introduce"
            value={introduce}
            onChange={onChangeInfo}
            placeholder="한줄소개을 입력하세요"
          />
        </div>
        <div className="agreement">
          다음 버튼을 누르면{" "}
          <a href="/policy/terms" target="_blank">
            서비스 이용약관
          </a>
          과{" "}
          <a href="/policy/policy" target="_blank">
            개인정보취급방침
          </a>
          에 동의하는 것을 인정합니다.
        </div>
        <div className="buttonWrapper">
          <div className="button">
            <span>다음 </span>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
