import React from 'react';
import Toggler from './Toggler';
import './SettingEmail.scss';

const SettingEmail = () => {
  return (
    <div className="SettingEamil">
      <div className="email">
        <div className="current-email">yuncheol92@gmail.com</div>
        <button className="email-action">변경</button>
      </div>

      <section>
        <h5>이메일 수신 설정</h5>
        <div className="toggles">
          <Toggler text="댓글 알림" />
          <Toggler text="이벤트 및 프로모션" />
        </div>
        <button>이메일 수신 설정 저장</button>
      </section>
    </div>
  );
};

export default SettingEmail;
