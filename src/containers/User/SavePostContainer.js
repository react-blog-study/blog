import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SavesPostList from 'components/user/SavePost/SavePostList/SavePostList';

class SavePostContainer extends Component {
  render() {
    return <SavesPostList />;
  }
}

export default connect(
  () => ({}),
  dispatch => ({}),
)(SavePostContainer);
