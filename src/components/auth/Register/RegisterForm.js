import React from 'react';
import './RegisterForm.scss';
import { FaArrowRight } from 'react-icons/fa';
const RegisterForm = ({ registerForm, onChangeInfo, onRegister, emailEditable }) => {
  const { username, email, userId, short_intro, error } = registerForm;

  const errorMap = {
    DUPLICATED_ACCOUNT: payload => `이미 존재하는 ${payload === 'email' ? '이메일' : '아이디'} 입니다. `,
    FIELD_RULE: payload => {
      const rules = {
        displayName: '이름을 1~40자로 입력하세요.',
        username: '아이디는 3~16자의 영소문자, 숫자, -_가 허용됩니다.',
        short_intro: '한 줄 소개는 140 미만으로 작성하세요.',
      };

      return rules[payload];
    },
  };

  const printError = error => {
    if (!errorMap[error.name]) return '알 수 없는 에러 발생!';
    return errorMap[error.name](error.payload);
  };

  return (
    <div className="RegisterForm">
      <div className="formHeader">기본 회원정보 등록</div>
      <div className="form">
        <div className="lable-input">
          <div className="label">
            이름<span>*</span>
          </div>
          <input name="username" value={username} onChange={onChangeInfo} placeholder="이름을 입력하세요" />
        </div>
        <div className="lable-input">
          <div className="label">
            이메일<span>*</span>
          </div>
          <input name="email" value={email} onChange={onChangeInfo} placeholder="이메일을 입력하세요" disabled={!emailEditable} />
        </div>
        <div className="lable-input">
          <div className="label">
            아이디<span>*</span>
          </div>
          <input name="userId" value={userId} onChange={onChangeInfo} placeholder="아이디을 입력하세요" />
        </div>
        <div className="lable-input">
          <div className="label">한줄소개</div>
          <input name="short_intro" value={short_intro} onChange={onChangeInfo} placeholder="한줄소개을 입력하세요" />
        </div>
        <div className="agreement">
          다음 버튼을 누르면{' '}
          <a href="/policy/terms" target="_blank">
            서비스 이용약관
          </a>
          과{' '}
          <a href="/policy/policy" target="_blank">
            개인정보취급방침
          </a>
          에 동의하는 것을 인정합니다.
        </div>
        {error && <div className="error">{printError(error)}</div>}
        <div className="buttonWrapper">
          <div className="button" onClick={onRegister}>
            <span>다음 </span>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
