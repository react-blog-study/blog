import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as profileActions from 'store/modules/profile';
import UserAbout from 'components/user/UserAbout/UserAbout';
class UserAboutContainer extends Component {
  state = {
    editing: false,
    text: '',
    flassh: '',
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
    return (
      <UserAbout longIntro={longIntro} self={self}>
        UserAboutContainer  
      </UserAbout>
    );
  }
}

export default connect(
  ({ profile, user }, ownProps) => ({
    self: (user.loggedInfo && user.loggedInfo.userId) === ownProps.useId,
    longIntro: profile.profile && profile.profile.long_intro,
  }),

  dispatch => ({
    ProfileActions: bindActionCreators(profileActions, dispatch),
  }),
)(UserAboutContainer);
