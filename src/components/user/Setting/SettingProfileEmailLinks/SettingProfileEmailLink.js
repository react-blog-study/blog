import React, { Component } from 'react';
import './SettingProfileEmailLinks.scss';
import SettingProfileEmailLink from '../SettingProfileEmailLink/SettingProfileEmailLink';

class SettingProfileEmailLinks extends Component {
  state = {
    email: '',
    github: '',
    twitter: '',
    facebook: '',
    homepage: '',
  };

  feedInput = () => {
    const { profileLinks } = this.props;
    if (!profileLinks) return;
    const keys = Object.keys(profileLinks);
    const nextState = {};
    keys.forEach(key => {
      nextState[key] = profileLinks[key];
    });
    this.setState(nextState);
  };
  componentDidMount() {
    this.feedInput();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.profileLinks !== this.props.profileLinks) {
      this.feedInput();
    }
  }

  onChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onUpdate = () => {
    const { email, github, twitter, facebook, homepage } = this.state;
    this.props.onUpdate({
      email,
      github,
      twitter,
      facebook,
      homepage,
    });
  };

  render() {
    const { onUpdate, onChange } = this;
    const { email, github, twitter, facebook, homepage } = this.state;
    return (
      <div className="SettingProfileEmailLinks">
        <h5>소셜 정보</h5>
        <p>여기에 입력하는 정보는 자신의 벨로그 프로필에서 나타나게 됩니다.</p>
        <div className="inputs">
          <SettingProfileEmailLink text="이메일" name="email" address={email} onChange={onChange} />
          <SettingProfileEmailLink text="Github" name="github" address={github} templateUrl="https://github.com/" onChange={onChange} />
          <SettingProfileEmailLink text="Twitter" name="twitter" address={twitter} templateUrl="https://twitter.com/" onChange={onChange} />
          <SettingProfileEmailLink text="Facebook" name="facebook" address={facebook} templateUrl="https://facebook.com/" onChange={onChange} />
          <SettingProfileEmailLink text="홈페이지" name="homepage" address={homepage} onChange={onChange} />
        </div>
        <div className="button-wrapper">
          <button onClick={onUpdate}>저장</button>
        </div>
      </div>
    );
  }
}

export default SettingProfileEmailLinks;
