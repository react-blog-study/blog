import React, { Component } from 'react';
import Nanobar from 'components/common/Nanobar/Nanobar';
import { setup } from 'lib/progess';
class Core extends Component {
  componentDidMount() {
    setup();
  }

  render() {
    return (
      <>
        <Nanobar />
      </>
    );
  }
}

export default Core;
