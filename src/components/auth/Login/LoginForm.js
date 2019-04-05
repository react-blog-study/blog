import React from 'react';
import { Link } from 'react-router-dom';
import { IoLogoGithub, IoLogoFacebook, IoLogoGoogle } from 'react-icons/io';
import { FaCheck } from 'react-icons/fa';
import { ClipLoader } from 'react-spinners';
import cx from 'classnames';
import './LoginForm.scss';

const LoginForm = ({ email, sentEmail, sending, isUser, onChangeEmail, onSendAuthEmail }) => {
  console.log(email);

  return (
    <div className="LoginForm">
      <h2>지금, 벨로그를 시작하세요.</h2>
      <div className="auth-form">
        {sentEmail ? (
          <div className="sent-email">
            <FaCheck />
            <div className="text">
              {isUser ? '로그인' : '회원가입'} 링크가 이메일로 전송되었습니다.
              <br /> 이메일의 링크를 통하여 {isUser ? '로그인' : '회원가입'}을 계속하세요.
            </div>
          </div>
        ) : (
          <div className={cx('input-with-button', { sending })}>
            <input className="email" placeholder="이메일을 입력해주세요" name="email" value={email} onChange={onChangeEmail} />
            <div className="startButton" onClick={onSendAuthEmail}>
              {sending ? <ClipLoader css={{ display: 'block' }} size={25} color={'white'} /> : '시작하기'}
            </div>
          </div>
        )}

        <div className="separator">
          <div className="or">OR</div>
        </div>
        <div className="social-buttons">
          <div className="social-login-button github">
            <div className="icon">
              <IoLogoGithub />
            </div>
            <div className="text">
              Github <span className="login">로그인</span>
            </div>
          </div>
          <div className="social-login-button google">
            <div className="icon">
              <IoLogoGoogle />
            </div>
            <div className="text">
              Google <span className="login">로그인</span>
            </div>
          </div>
          <div className="social-login-button facebook">
            <div className="icon">
              <IoLogoFacebook />
            </div>
            <div className="text">
              Facebook <span className="login">로그인</span>
            </div>
          </div>
        </div>
        <div className="explore-wrapper">
          <Link to="/trending">로그인 하지 않고 둘러보기</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
