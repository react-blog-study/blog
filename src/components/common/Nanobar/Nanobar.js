import React, { Component } from "react";
import Nano from "nanobar";
import "./Nanobar.scss";

class Nanobar extends Component {
  nanobar = null;
  componentDidMount() {
    this.nanobar = new Nano({
      className: "nanobar",
      id: "nanobar"
    });
    window.nanobar = this.nanovar;
  }
  remove = () => {
    window.nanobar = null;
    delete this.nanobar;
  };
  render() {
    return null;
  }
}

export default Nanobar;
