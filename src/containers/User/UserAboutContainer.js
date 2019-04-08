import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as profileActions from 'store/modules/profile';
import UserAbout from 'components/user/UserAbout/UserAbout';
import UserAboutEdit from 'components/user/UserAboutEdit/UserAboutEdit';
import { toast } from 'react-toastify';

class UserAboutContainer extends Component {
  state = {
    editing: false,
    text: '',
    flash: '',
  };

  constructor(props) {
    super(props);
    this.state.text = this.props.longIntro || '';
  }

  onChange = text => {
    this.setState({
      text,
    });
  };

  onEditClick = () => {
    this.setState({
      editing: true,
    });
  };

  onSave = async () => {
    const { text } = this.state;
    const { ProfileActions } = this.props;
    const message = message => <div style={{ fontSize: '1.1rem' }}>{message}</div>;
    try {
      await ProfileActions.updateAbout(text);
      toast(message('자기소개가 업데이트되었습니다.'), { type: 'success' });
    } catch (e) {
      toast(message('자기소개 업데이트 실패'), { type: 'error' });
    }
    this.setState({
      editing: false,
    });
  };

  componentDidMount() {
    const { ProfileActions } = this.props;
    ProfileActions.setSideVisibility(false);
  }

  componentWillUnmount() {
    const { ProfileActions } = this.props;
    ProfileActions.setSideVisibility(true);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.longIntro !== this.props.longIntro) {
      this.setState({
        text: this.props.longIntro,
      });
    }
  }

  render() {
    const { longIntro, self } = this.props;

    if (this.state.editing) {
      return (
        <>
          <UserAboutEdit text={this.state.text} onChange={this.onChange} onSave={this.onSave} flash={this.state.flash} />
        </>
      );
    }
    return <UserAbout longIntro={longIntro} self={self} onEditClick={this.onEditClick} />;
  }
}

export default connect(
  ({ profile, user }, ownProps) => ({
    self: (user.loggedInfo && user.loggedInfo.userId) === ownProps.userId,
    longIntro: profile.profile && profile.profile.long_intro,
  }),

  dispatch => ({
    ProfileActions: bindActionCreators(profileActions, dispatch),
  }),
)(UserAboutContainer);
