import React, { Component } from 'react';
import './SettingProfileInfo.scss';
import defaultThumbnail from 'static/images/default_thumbnail.png';
class SettingProfileInfo extends Component {
  state = {
    editing: false,
    username: '',
    short_intro: '',
  };

  constructor(props) {
    super(props);
    const { profile } = this.props;
    this.state.username = profile.username;
    this.state.short_intro = profile.short_intro;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.profile !== this.props.profile || (!prevState.editing && this.state.editing)) {
      const { username, short_intro } = this.props.profile;
      this.setState({
        username,
        short_intro,
      });
    }
  }

  onToggleEdit = e => {
    e.preventDefault();
    this.setState({
      editing: !this.state.editing,
    });
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = async e => {
    e.preventDefault();
    const { username, short_intro } = this.state;
    try {
      await this.props.onUpdateProfile({
        username,
        short_intro,
      });

      this.setState({
        editing: false,
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { profile } = this.props;
    const { editing, username, short_intro } = this.state;
    const { onToggleEdit, onChange, onSubmit } = this;

    return (
      <div className="SettingProfileInfo">
        <div className="thumbnail-area">
          <img src={defaultThumbnail} alt="thumbnail" />
          <button>썸네일 변경</button>
        </div>

        {editing ? (
          <form className="user-info-form" onSubmit={onSubmit}>
            <input className="username" type="text" name="username" placeholder="이름" value={username} onChange={onChange} />
            <input className="shortIntro" type="text" name="short_intro" placeholder="짧은 소개" value={short_intro} onChange={onChange} />
            <div className="right">
              <button className="cancel-button" onClick={onToggleEdit}>
                취소
              </button>
              <button className="confirm-button" type="submit">
                확인
              </button>
            </div>
          </form>
        ) : (
          <div className="user-info">
            <h3>{username}</h3>
            <p>{short_intro}</p>
            <div className="right">
              <button onClick={onToggleEdit}>수정</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default SettingProfileInfo;
