import React from 'react';
import './SettingProfileEmailLinks.scss';
import SettingProfileEmailLink from '../SettingProfileEmailLink/SettingProfileEmailLink';

const SettingProfileEmailLinks = ({ email, github, twitter, facebook, homepage }) => {
  return (
    <div className="SettingProfileEmailLinks">
      <h5>소셜 정보</h5>
      <p>여기에 입력하는 정보는 자신의 벨로그 프로필에서 나타나게 됩니다.</p>
      <div className="inputs">
        <SettingProfileEmailLink text="이메일" address={email} />
        <SettingProfileEmailLink text="Github" address={github} templateUrl="https://github.com/" />
        <SettingProfileEmailLink text="Twitter" address={twitter} templateUrl="https://twitter.com/" />
        <SettingProfileEmailLink text="Facebook" address={facebook} templateUrl="https://facebook.com/" />
        <SettingProfileEmailLink text="홈페이지" address={homepage} />
      </div>
      <div className="button-wrapper">
        <button>저장</button>
      </div>
    </div>
  );
};

export default SettingProfileEmailLinks;
