import React, { Component } from 'react';
import Nanobar from 'components/common/Nanobar/Nanobar';
import { setup } from 'lib/progess';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
class Core extends Component {
  componentDidMount() {
    setup();
  }

  render() {
    return (
      <>
        <Nanobar />
        <ToastContainer stype={{ zIndex: 100 }} hideProgressBar={true} position="bottom-right" />
      </>
    );
  }
}

export default Core;
